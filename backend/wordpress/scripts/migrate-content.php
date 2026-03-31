<?php
/**
 * Massive Charging — Content Migration Script
 *
 * Reads vehicle_guide.json and Core_message_block.json from frontend/public
 * and creates WordPress posts, categories, and ev_car CPT entries directly
 * via the WordPress API (no REST auth required).
 *
 * Run from the server:
 *   sudo -u www-data php /path/to/migrate-content.php
 *
 * Safe to re-run: duplicate titles are skipped.
 */

// ── Bootstrap WordPress ───────────────────────────────────────────────────────

$_SERVER['HTTP_HOST']   = 'content.massivecharging.com';
$_SERVER['REQUEST_URI'] = '/';

require '/var/www/cms/wp-load.php';

if ( ! defined( 'ABSPATH' ) ) {
	die( "ERROR: Could not bootstrap WordPress.\n" );
}

echo "WordPress loaded. Starting migration...\n";

// ── Load source JSON files ────────────────────────────────────────────────────

$publicDir   = '/var/www/massivecharging/frontend/public';
$vehicleData = json_decode( mc_read_json( "$publicDir/vehicle_guide.json" ), true );
$blockData   = json_decode( mc_read_json( "$publicDir/Core_message_block.json" ), true );

if ( ! $vehicleData || ! $blockData ) {
	die( "ERROR: Could not parse JSON files. Check paths and encoding.\n" );
}

$taxonomy         = $vehicleData['Categories_taxonomy'];
$vehicleMaster    = $vehicleData['Vehicle_master'];
$vehicleDetails   = $vehicleData['4w_vehicle_details'];
$guideArticles    = $vehicleData['Guide_article'];
$coreMessages     = $vehicleData['Core_message'];
$categoryGuideMap = $vehicleData['Category_Guide_Map'];
$blocks           = $blockData['Core_message_blocks'];

printf(
	"Loaded: %d articles, %d vehicles, %d content blocks\n",
	count( $coreMessages ),
	count( $vehicleMaster ),
	count( $blocks )
);

// ── 1. Categories ─────────────────────────────────────────────────────────────

echo "\n==> Creating categories...\n";

$catIdMap = []; // internal Category_ID -> WP term_id

usort( $taxonomy, fn( $a, $b ) => (int) $a['Level'] - (int) $b['Level'] );

foreach ( $taxonomy as $cat ) {
	if ( $cat['Category_ID'] === 'CAT_001' ) {
		continue; // skip root placeholder
	}

	$name       = ucwords( str_replace( '_', ' ', strtolower( $cat['Category_Name'] ) ) );
	$slug       = strtolower( str_replace( '_', '-', $cat['Category_Name'] ) );
	$parentWpId = $catIdMap[ $cat['Parent_ID'] ] ?? 0;

	$result = wp_insert_term( $name, 'category', [
		'slug'   => $slug,
		'parent' => $parentWpId,
	] );

	if ( is_wp_error( $result ) ) {
		$existing = get_term_by( 'slug', $slug, 'category' );
		if ( $existing ) {
			$catIdMap[ $cat['Category_ID'] ] = $existing->term_id;
			echo "  Exists : $name (ID: {$existing->term_id})\n";
		} else {
			echo "  FAILED : $name — " . $result->get_error_message() . "\n";
		}
	} else {
		$catIdMap[ $cat['Category_ID'] ] = $result['term_id'];
		echo "  Created: $name (ID: {$result['term_id']})\n";
	}
}

// ── 2. Articles ───────────────────────────────────────────────────────────────

echo "\n==> Creating articles...\n";

// Build cmsg_id -> Guide_ID map
$cmsgGuideMap = array_column( $guideArticles, 'Guide_ID', 'cmsg_id' );

// Build Guide_ID -> [WP category IDs] map
$guideCatMap = [];
foreach ( $categoryGuideMap as $mapping ) {
	$gid = $mapping['Guide_ID'];
	$cid = $mapping['Category_ID'];
	if ( isset( $catIdMap[ $cid ] ) ) {
		$guideCatMap[ $gid ][] = $catIdMap[ $cid ];
	}
}

// Index blocks by cmsg_id
$blocksByCmsg = [];
foreach ( $blocks as $block ) {
	$blocksByCmsg[ $block['cmsg_id'] ][] = $block;
}

foreach ( $coreMessages as $msg ) {
	$cmsgId = $msg['cmsg_id'];
	$title  = $msg['title'];
	$status = ( $msg['status'] === 'published' ) ? 'publish' : 'draft';

	// Skip if post with this title already exists
	$existing = get_page_by_title( $title, OBJECT, 'post' );
	if ( $existing ) {
		echo "  Exists : $title\n";
		continue;
	}

	// Assemble HTML content from blocks
	$msgBlocks = $blocksByCmsg[ $cmsgId ] ?? [];
	usort( $msgBlocks, fn( $a, $b ) => (int) $a['block_order'] - (int) $b['block_order'] );

	$content = mc_blocks_to_html( $msgBlocks );

	// Resolve categories
	$guideId    = $cmsgGuideMap[ $cmsgId ] ?? '';
	$categories = $guideCatMap[ $guideId ] ?? [];

	$postId = wp_insert_post( [
		'post_title'    => wp_strip_all_tags( $title ),
		'post_content'  => $content,
		'post_status'   => $status,
		'post_type'     => 'post',
		'post_author'   => 1,
		'post_category' => $categories,
	], true );

	if ( is_wp_error( $postId ) ) {
		echo "  FAILED : $title — " . $postId->get_error_message() . "\n";
	} else {
		// Store the source cmsg_id for reference
		update_post_meta( $postId, '_mc_cmsg_id', $cmsgId );
		echo "  Created: $title (ID: $postId, $status)\n";
	}
}

// ── 3. EV Cars ────────────────────────────────────────────────────────────────

echo "\n==> Creating EV cars...\n";

$detailMap = array_column( $vehicleDetails, null, 'Vehicle_ID' );
$created   = 0;
$skipped   = 0;

foreach ( $vehicleMaster as $vehicle ) {
	$vid    = $vehicle['Vehicle_ID'];
	$detail = $detailMap[ $vid ] ?? null;

	if ( ! $detail ) {
		$skipped++;
		continue;
	}

	$manufacturer = $vehicle['Manufacturer'];
	$vehicleName  = $vehicle['Vehicle_Name'];
	$variant      = trim( $detail['Vehicle_Variant'] ?? '' );
	$title        = trim( "$manufacturer $vehicleName $variant" );

	// Skip duplicates
	$existing = get_page_by_title( $title, OBJECT, 'ev_car' );
	if ( $existing ) {
		$skipped++;
		continue;
	}

	$postId = wp_insert_post( [
		'post_title'  => $title,
		'post_status' => 'publish',
		'post_type'   => 'ev_car',
		'post_author' => 1,
	], true );

	if ( is_wp_error( $postId ) ) {
		echo "  FAILED : $title — " . $postId->get_error_message() . "\n";
		continue;
	}

	// Set meta fields (ACF reads these by field name)
	update_post_meta( $postId, 'make',        $manufacturer );
	update_post_meta( $postId, 'model',       $vehicleName );
	update_post_meta( $postId, 'price_inr',   $detail['Price'] ?? '' );
	update_post_meta( $postId, 'battery_kwh', $detail['Battery_Capacity'] ?? '' );
	update_post_meta( $postId, 'range_km',    $detail['Claimed_Range'] ?? '' );
	update_post_meta( $postId, 'connector',   $detail['Charging_Type'] ?? '' );
	update_post_meta( $postId, '_mc_vehicle_id', $vid );

	$created++;
}

echo "  Created: $created | Skipped (no details or duplicate): $skipped\n";

// ── Done ──────────────────────────────────────────────────────────────────────

echo "\n==> Migration complete.\n";

// ── Helper functions ──────────────────────────────────────────────────────────

/**
 * Read a JSON file, stripping UTF-8 BOM if present.
 */
function mc_read_json( string $path ): string {
	$content = file_get_contents( $path );
	// Strip UTF-8 BOM (EF BB BF)
	return ltrim( $content, "\xEF\xBB\xBF" );
}

/**
 * Convert an array of content blocks to HTML.
 *
 * Block types: heading_1, heading_2, heading_3, body, list, table, divider
 */
function mc_blocks_to_html( array $blocks ): string {
	$parts = [];

	foreach ( $blocks as $block ) {
		$type = $block['block_type'] ?? '';
		$text = trim( $block['text'] ?? '' );

		switch ( $type ) {
			case 'heading_1':
				// Used as post title — skip in body
				break;

			case 'heading_2':
				$parts[] = '<h2>' . esc_html( $text ) . '</h2>';
				break;

			case 'heading_3':
				$parts[] = '<h3>' . esc_html( $text ) . '</h3>';
				break;

			case 'body':
				if ( $text ) {
					$parts[] = '<p>' . nl2br( esc_html( $text ) ) . '</p>';
				}
				break;

			case 'list':
				$items = mc_parse_list_items( $text );
				if ( $items ) {
					$parts[] = '<ul>' . implode( '', array_map(
						fn( $i ) => '<li>' . esc_html( trim( $i ) ) . '</li>',
						$items
					) ) . '</ul>';
				}
				break;

			case 'table':
				$parts[] = mc_markdown_table_to_html( $text );
				break;

			case 'divider':
				$parts[] = '<hr />';
				break;
		}
	}

	return implode( "\n", $parts );
}

/**
 * Parse list block text into individual items.
 * Text uses "- item\n - item" format.
 */
function mc_parse_list_items( string $text ): array {
	$lines = explode( "\n", $text );
	$items = [];

	foreach ( $lines as $line ) {
		$line = trim( $line );
		if ( str_starts_with( $line, '- ' ) ) {
			$items[] = substr( $line, 2 );
		} elseif ( $line !== '' ) {
			$items[] = $line;
		}
	}

	return $items;
}

/**
 * Convert a Markdown-style pipe table to an HTML table.
 */
function mc_markdown_table_to_html( string $text ): string {
	$lines = array_filter( explode( "\n", $text ), fn( $l ) => trim( $l ) !== '' );
	$rows  = [];

	foreach ( $lines as $line ) {
		$line = trim( $line, " \t|" );
		if ( preg_match( '/^[-| ]+$/', $line ) ) {
			continue; // separator row
		}
		$cells = array_map( 'trim', explode( '|', $line ) );
		$rows[] = $cells;
	}

	if ( empty( $rows ) ) {
		return '';
	}

	$html  = '<figure class="wp-block-table"><table><thead><tr>';
	foreach ( $rows[0] as $cell ) {
		$html .= '<th>' . esc_html( $cell ) . '</th>';
	}
	$html .= '</tr></thead><tbody>';

	foreach ( array_slice( $rows, 1 ) as $row ) {
		$html .= '<tr>';
		foreach ( $row as $cell ) {
			$html .= '<td>' . esc_html( $cell ) . '</td>';
		}
		$html .= '</tr>';
	}

	$html .= '</tbody></table></figure>';
	return $html;
}
