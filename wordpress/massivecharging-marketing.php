<?php
/**
 * Plugin Name: Massive Charging – Marketing Pages
 * Description: Registers the marketing_page CPT, ACF field groups (ACF Free compatible),
 *              and custom REST endpoints consumed by the Next.js headless frontend.
 * Version:     1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// ---------------------------------------------------------------------------
// 1. Custom Post Type: marketing_page
// ---------------------------------------------------------------------------

add_action( 'init', 'mc_register_marketing_page_cpt' );

function mc_register_marketing_page_cpt() {
	register_post_type( 'marketing_page', [
		'labels'       => [
			'name'               => 'Marketing Pages',
			'singular_name'      => 'Marketing Page',
			'add_new_item'       => 'Add New Marketing Page',
			'edit_item'          => 'Edit Marketing Page',
			'search_items'       => 'Search Marketing Pages',
			'not_found'          => 'No marketing pages found',
		],
		'public'       => false,
		'show_ui'      => true,
		'show_in_menu' => true,
		'show_in_rest' => false, // We expose via custom endpoints only
		'supports'     => [ 'title' ],
		'menu_icon'    => 'dashicons-admin-page',
		'menu_position' => 5,
	] );
}

// ---------------------------------------------------------------------------
// 2. ACF Field Groups (ACF Free compatible — no repeaters)
//    Uses numbered flat fields: stat_1_label, stat_2_label, etc.
//    The REST callback assembles them into arrays.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Helper: build numbered flat fields (top-level to avoid redeclaration fatal)
// e.g. mc_numbered_fields('stat', ['label'=>'Stat Label','value'=>'Stat Value'], 4)
// ---------------------------------------------------------------------------

function mc_numbered_fields( $prefix, $keys, $max, $tab_label = '' ) {
	$fields = [];

	if ( $tab_label ) {
		$fields[] = [
			'key'   => "field_tab_{$prefix}",
			'label' => $tab_label,
			'name'  => '',
			'type'  => 'tab',
		];
	}

	for ( $i = 1; $i <= $max; $i++ ) {
		foreach ( $keys as $key => $label ) {
			$is_long = in_array( $key, [ 'description', 'answer', 'note' ], true );
			$fields[] = [
				'key'          => "field_{$prefix}_{$i}_{$key}",
				'label'        => "{$label} {$i}",
				'name'         => "{$prefix}_{$i}_{$key}",
				'type'         => $is_long ? 'textarea' : 'text',
				'rows'         => $is_long ? 3 : null,
				'instructions' => "Leave blank to omit item {$i}.",
			];
		}
	}

	return $fields;
}

add_action( 'acf/init', 'mc_register_acf_fields' );

function mc_register_acf_fields() {
	if ( ! function_exists( 'acf_add_local_field_group' ) ) {
		return;
	}

	// -----------------------------------------------------------------------
	// 2a. Standard Marketing Page field group
	// -----------------------------------------------------------------------

	$standard_fields = [
		// Tab: Core
		[
			'key'   => 'field_tab_core',
			'label' => 'Core',
			'name'  => '',
			'type'  => 'tab',
		],
		[
			'key'          => 'field_route_path',
			'label'        => 'Route Path',
			'name'         => 'route_path',
			'type'         => 'text',
			'required'     => 1,
			'instructions' => 'The Next.js route. Examples: /platform  /for/cpos  /chargers/dc/60-dual-gun',
			'placeholder'  => '/platform',
		],
		[
			'key'          => 'field_page_template',
			'label'        => 'Page Template',
			'name'         => 'page_template',
			'type'         => 'select',
			'choices'      => [ 'standard' => 'Standard', 'homepage' => 'Homepage' ],
			'default_value' => 'standard',
			'instructions' => 'Use "Homepage" only for the / route.',
		],
		[
			'key'          => 'field_badge',
			'label'        => 'Badge',
			'name'         => 'badge',
			'type'         => 'text',
			'instructions' => 'Short label shown above the title. e.g. "EV Charging Platform"',
		],
		[
			'key'          => 'field_page_title',
			'label'        => 'Title',
			'name'         => 'page_title',
			'type'         => 'text',
			'instructions' => 'Main H1 heading shown on the page.',
		],
		[
			'key'          => 'field_description',
			'label'        => 'Description',
			'name'         => 'description',
			'type'         => 'textarea',
			'rows'         => 4,
			'instructions' => 'Introductory paragraph shown below the title.',
		],

		// Tab: CTAs
		[
			'key'   => 'field_tab_ctas',
			'label' => 'CTAs',
			'name'  => '',
			'type'  => 'tab',
		],
		[
			'key'          => 'field_primary_cta_label',
			'label'        => 'Primary CTA Label',
			'name'         => 'primary_cta_label',
			'type'         => 'text',
			'placeholder'  => 'Get Started',
		],
		[
			'key'          => 'field_primary_cta_href',
			'label'        => 'Primary CTA URL',
			'name'         => 'primary_cta_href',
			'type'         => 'text',
			'placeholder'  => '/get-chargers',
		],
		[
			'key'          => 'field_secondary_cta_label',
			'label'        => 'Secondary CTA Label',
			'name'         => 'secondary_cta_label',
			'type'         => 'text',
		],
		[
			'key'          => 'field_secondary_cta_href',
			'label'        => 'Secondary CTA URL',
			'name'         => 'secondary_cta_href',
			'type'         => 'text',
		],
	];

	// Stats (max 4)
	$standard_fields = array_merge(
		$standard_fields,
		mc_numbered_fields( 'stat', [ 'label' => 'Stat Label', 'value' => 'Stat Value', 'note' => 'Stat Note' ], 4, 'Stats' )
	);

	// Cards (max 8)
	$standard_fields = array_merge(
		$standard_fields,
		[
			[
				'key'   => 'field_tab_cards',
				'label' => 'Cards',
				'name'  => '',
				'type'  => 'tab',
			],
			[
				'key'   => 'field_card_section_title',
				'label' => 'Cards Section Title',
				'name'  => 'card_section_title',
				'type'  => 'text',
			],
		],
		mc_numbered_fields( 'card', [ 'title' => 'Card Title', 'description' => 'Card Description' ], 8 )
	);

	// Steps (max 6)
	$standard_fields = array_merge(
		$standard_fields,
		[
			[
				'key'   => 'field_tab_steps',
				'label' => 'Steps',
				'name'  => '',
				'type'  => 'tab',
			],
			[
				'key'   => 'field_steps_section_title',
				'label' => 'Steps Section Title',
				'name'  => 'steps_section_title',
				'type'  => 'text',
			],
		],
		mc_numbered_fields( 'step', [ 'title' => 'Step Title', 'description' => 'Step Description' ], 6 )
	);

	// FAQs (max 6)
	$standard_fields = array_merge(
		$standard_fields,
		[
			[
				'key'   => 'field_tab_faqs',
				'label' => 'FAQs',
				'name'  => '',
				'type'  => 'tab',
			],
			[
				'key'   => 'field_faq_section_title',
				'label' => 'FAQ Section Title',
				'name'  => 'faq_section_title',
				'type'  => 'text',
			],
		],
		mc_numbered_fields( 'faq', [ 'question' => 'Question', 'answer' => 'Answer' ], 6 )
	);

	// Spec table rows (max 20)
	$standard_fields = array_merge(
		$standard_fields,
		[
			[
				'key'   => 'field_tab_spec',
				'label' => 'Spec Table',
				'name'  => '',
				'type'  => 'tab',
			],
		],
		mc_numbered_fields( 'spec', [ 'label' => 'Spec Label', 'value' => 'Spec Value' ], 20 )
	);

	// Note
	$standard_fields = array_merge( $standard_fields, [
		[
			'key'   => 'field_tab_note',
			'label' => 'Note',
			'name'  => '',
			'type'  => 'tab',
		],
		[
			'key'          => 'field_note',
			'label'        => 'Footer Note',
			'name'         => 'note',
			'type'         => 'textarea',
			'rows'         => 3,
			'instructions' => 'Optional small-print note shown at the bottom of the page.',
		],
	] );

	acf_add_local_field_group( [
		'key'      => 'group_marketing_page_standard',
		'title'    => 'Marketing Page Content',
		'fields'   => $standard_fields,
		'location' => [ [ [
			'param'    => 'post_type',
			'operator' => '==',
			'value'    => 'marketing_page',
		] ] ],
		'active'   => true,
	] );

	// -----------------------------------------------------------------------
	// 2b. Homepage field group (shown when page_template == homepage)
	// -----------------------------------------------------------------------

	$homepage_fields = [
		// Hero section
		[
			'key'   => 'field_tab_hero',
			'label' => 'Hero',
			'name'  => '',
			'type'  => 'tab',
		],
		[ 'key' => 'field_hero_status_text',         'label' => 'Status Badge Text',   'name' => 'hero_status_text',         'type' => 'text' ],
		[ 'key' => 'field_hero_title_main',           'label' => 'Title — Main',         'name' => 'hero_title_main',          'type' => 'text' ],
		[ 'key' => 'field_hero_title_anytime',        'label' => 'Title — Anytime word', 'name' => 'hero_title_anytime',       'type' => 'text' ],
		[ 'key' => 'field_hero_title_accent',         'label' => 'Title — Accent word',  'name' => 'hero_title_accent',        'type' => 'text' ],
		[ 'key' => 'field_hero_subtitle',             'label' => 'Subtitle',             'name' => 'hero_subtitle',            'type' => 'text' ],
		[ 'key' => 'field_hero_cta_primary_label',    'label' => 'Primary CTA Label',    'name' => 'hero_cta_primary_label',   'type' => 'text' ],
		[ 'key' => 'field_hero_cta_primary_href',     'label' => 'Primary CTA URL',      'name' => 'hero_cta_primary_href',    'type' => 'text' ],
		[ 'key' => 'field_hero_cta_secondary_label',  'label' => 'Secondary CTA Label',  'name' => 'hero_cta_secondary_label', 'type' => 'text' ],
		[ 'key' => 'field_hero_live_panel_title',     'label' => 'Live Panel Title',      'name' => 'hero_live_panel_title',    'type' => 'text' ],
		[ 'key' => 'field_hero_station_1', 'label' => 'Live Station 1', 'name' => 'hero_station_1', 'type' => 'text' ],
		[ 'key' => 'field_hero_station_2', 'label' => 'Live Station 2', 'name' => 'hero_station_2', 'type' => 'text' ],
		[ 'key' => 'field_hero_station_3', 'label' => 'Live Station 3', 'name' => 'hero_station_3', 'type' => 'text' ],
		[ 'key' => 'field_hero_station_4', 'label' => 'Live Station 4', 'name' => 'hero_station_4', 'type' => 'text' ],
		[ 'key' => 'field_hero_station_5', 'label' => 'Live Station 5', 'name' => 'hero_station_5', 'type' => 'text' ],

		// Membership section
		[
			'key'   => 'field_tab_membership',
			'label' => 'Membership',
			'name'  => '',
			'type'  => 'tab',
		],
		[ 'key' => 'field_membership_badge',           'label' => 'Badge',            'name' => 'membership_badge',           'type' => 'text' ],
		[ 'key' => 'field_membership_heading_white',   'label' => 'Heading — White',  'name' => 'membership_heading_white',   'type' => 'text' ],
		[ 'key' => 'field_membership_heading_gold',    'label' => 'Heading — Gold',   'name' => 'membership_heading_gold',    'type' => 'text' ],
		[ 'key' => 'field_membership_subtitle',        'label' => 'Subtitle',         'name' => 'membership_subtitle',        'type' => 'textarea', 'rows' => 3 ],
		[ 'key' => 'field_membership_cta_label',       'label' => 'CTA Label',        'name' => 'membership_cta_label',       'type' => 'text' ],
		[ 'key' => 'field_membership_cta_href',        'label' => 'CTA URL',          'name' => 'membership_cta_href',        'type' => 'text' ],
		[ 'key' => 'field_membership_perk_1', 'label' => 'Perk 1', 'name' => 'membership_perk_1', 'type' => 'text' ],
		[ 'key' => 'field_membership_perk_2', 'label' => 'Perk 2', 'name' => 'membership_perk_2', 'type' => 'text' ],
		[ 'key' => 'field_membership_perk_3', 'label' => 'Perk 3', 'name' => 'membership_perk_3', 'type' => 'text' ],
		[ 'key' => 'field_membership_perk_4', 'label' => 'Perk 4', 'name' => 'membership_perk_4', 'type' => 'text' ],
		[ 'key' => 'field_membership_perk_5', 'label' => 'Perk 5', 'name' => 'membership_perk_5', 'type' => 'text' ],
		[ 'key' => 'field_membership_perk_6', 'label' => 'Perk 6', 'name' => 'membership_perk_6', 'type' => 'text' ],
		[ 'key' => 'field_membership_perk_7', 'label' => 'Perk 7', 'name' => 'membership_perk_7', 'type' => 'text' ],
		[ 'key' => 'field_membership_perk_8', 'label' => 'Perk 8', 'name' => 'membership_perk_8', 'type' => 'text' ],

		// Home charger section
		[
			'key'   => 'field_tab_home_charger',
			'label' => 'Home Charger',
			'name'  => '',
			'type'  => 'tab',
		],
		[ 'key' => 'field_home_charger_eyebrow',             'label' => 'Eyebrow',                'name' => 'home_charger_eyebrow',             'type' => 'text' ],
		[ 'key' => 'field_home_charger_title_line1',         'label' => 'Title Line 1',           'name' => 'home_charger_title_line1',         'type' => 'text' ],
		[ 'key' => 'field_home_charger_title_line2',         'label' => 'Title Line 2',           'name' => 'home_charger_title_line2',         'type' => 'text' ],
		[ 'key' => 'field_home_charger_cta_primary_label',   'label' => 'Primary CTA Label',      'name' => 'home_charger_cta_primary_label',   'type' => 'text' ],
		[ 'key' => 'field_home_charger_cta_primary_href',    'label' => 'Primary CTA URL',        'name' => 'home_charger_cta_primary_href',    'type' => 'text' ],
		[ 'key' => 'field_home_charger_cta_secondary_label', 'label' => 'Secondary CTA Label',   'name' => 'home_charger_cta_secondary_label', 'type' => 'text' ],
		[ 'key' => 'field_home_charger_cta_secondary_href',  'label' => 'Secondary CTA URL',     'name' => 'home_charger_cta_secondary_href',  'type' => 'text' ],

		// App section
		[
			'key'   => 'field_tab_app',
			'label' => 'App',
			'name'  => '',
			'type'  => 'tab',
		],
		[ 'key' => 'field_app_heading_line1', 'label' => 'Heading Line 1',  'name' => 'app_heading_line1', 'type' => 'text' ],
		[ 'key' => 'field_app_heading_line2', 'label' => 'Heading Line 2',  'name' => 'app_heading_line2', 'type' => 'text' ],
		[ 'key' => 'field_app_subtitle',      'label' => 'Subtitle',        'name' => 'app_subtitle',      'type' => 'textarea', 'rows' => 2 ],
		[ 'key' => 'field_app_cta_label',     'label' => 'CTA Label',       'name' => 'app_cta_label',     'type' => 'text' ],
		[ 'key' => 'field_app_feature_1', 'label' => 'Feature 1', 'name' => 'app_feature_1', 'type' => 'text' ],
		[ 'key' => 'field_app_feature_2', 'label' => 'Feature 2', 'name' => 'app_feature_2', 'type' => 'text' ],
		[ 'key' => 'field_app_feature_3', 'label' => 'Feature 3', 'name' => 'app_feature_3', 'type' => 'text' ],
		[ 'key' => 'field_app_feature_4', 'label' => 'Feature 4', 'name' => 'app_feature_4', 'type' => 'text' ],
		[ 'key' => 'field_app_feature_5', 'label' => 'Feature 5', 'name' => 'app_feature_5', 'type' => 'text' ],
		[ 'key' => 'field_app_feature_6', 'label' => 'Feature 6', 'name' => 'app_feature_6', 'type' => 'text' ],

		// Business section
		[
			'key'   => 'field_tab_business',
			'label' => 'Business',
			'name'  => '',
			'type'  => 'tab',
		],
		[ 'key' => 'field_business_kicker',       'label' => 'Kicker',       'name' => 'business_kicker',       'type' => 'text' ],
		[ 'key' => 'field_business_title_line1',  'label' => 'Title Line 1', 'name' => 'business_title_line1',  'type' => 'text' ],
		[ 'key' => 'field_business_title_line2',  'label' => 'Title Line 2', 'name' => 'business_title_line2',  'type' => 'text' ],
		[ 'key' => 'field_business_subtitle',     'label' => 'Subtitle',     'name' => 'business_subtitle',     'type' => 'textarea', 'rows' => 3 ],
		[ 'key' => 'field_business_cta_label',    'label' => 'CTA Label',    'name' => 'business_cta_label',    'type' => 'text' ],
		[ 'key' => 'field_business_income_badge', 'label' => 'Income Badge', 'name' => 'business_income_badge', 'type' => 'text' ],

		// Guide section
		[
			'key'   => 'field_tab_guide',
			'label' => 'Guide',
			'name'  => '',
			'type'  => 'tab',
		],
		[ 'key' => 'field_guide_vehicle_chip', 'label' => 'Vehicle Chip',  'name' => 'guide_vehicle_chip', 'type' => 'text' ],
		[ 'key' => 'field_guide_heading',      'label' => 'Heading',       'name' => 'guide_heading',      'type' => 'text' ],
		[ 'key' => 'field_guide_subheading',   'label' => 'Subheading',    'name' => 'guide_subheading',   'type' => 'text' ],
		[ 'key' => 'field_guide_description',  'label' => 'Description',   'name' => 'guide_description',  'type' => 'text' ],
		[ 'key' => 'field_guide_cta_label',    'label' => 'CTA Label',     'name' => 'guide_cta_label',    'type' => 'text' ],
		[ 'key' => 'field_guide_cta_href',     'label' => 'CTA URL',       'name' => 'guide_cta_href',     'type' => 'text' ],
		[ 'key' => 'field_guide_chip_1', 'label' => 'Chip 1', 'name' => 'guide_chip_1', 'type' => 'text' ],
		[ 'key' => 'field_guide_chip_2', 'label' => 'Chip 2', 'name' => 'guide_chip_2', 'type' => 'text' ],
		[ 'key' => 'field_guide_chip_3', 'label' => 'Chip 3', 'name' => 'guide_chip_3', 'type' => 'text' ],
		[ 'key' => 'field_guide_chip_4', 'label' => 'Chip 4', 'name' => 'guide_chip_4', 'type' => 'text' ],
		[ 'key' => 'field_guide_chip_5', 'label' => 'Chip 5', 'name' => 'guide_chip_5', 'type' => 'text' ],
		[ 'key' => 'field_guide_chip_6', 'label' => 'Chip 6', 'name' => 'guide_chip_6', 'type' => 'text' ],
	];

	acf_add_local_field_group( [
		'key'      => 'group_marketing_page_homepage',
		'title'    => 'Homepage Sections',
		'fields'   => $homepage_fields,
		'location' => [ [ [
			'param'    => 'post_type',
			'operator' => '==',
			'value'    => 'marketing_page',
		] ] ],
		'active'   => true,
	] );
}

// ---------------------------------------------------------------------------
// 3. REST API endpoints
//    GET /wp-json/massivecharging/v1/marketing-pages          → all pages (id + route_path)
//    GET /wp-json/massivecharging/v1/marketing-pages/by-route?path=/platform → full page data
// ---------------------------------------------------------------------------

add_action( 'rest_api_init', 'mc_register_rest_routes' );

function mc_register_rest_routes() {
	register_rest_route( 'massivecharging/v1', '/marketing-pages', [
		'methods'             => 'GET',
		'callback'            => 'mc_rest_list_marketing_pages',
		'permission_callback' => '__return_true',
	] );

	register_rest_route( 'massivecharging/v1', '/marketing-pages/by-route', [
		'methods'             => 'GET',
		'callback'            => 'mc_rest_get_marketing_page_by_route',
		'permission_callback' => '__return_true',
		'args'                => [
			'path' => [ 'required' => true, 'type' => 'string' ],
		],
	] );
}

// Returns [{id, route_path, title}] for generateStaticParams
function mc_rest_list_marketing_pages() {
	$posts = get_posts( [
		'post_type'      => 'marketing_page',
		'post_status'    => 'publish',
		'posts_per_page' => -1,
		'orderby'        => 'title',
		'order'          => 'ASC',
	] );

	return array_map( function( $post ) {
		return [
			'id'         => $post->ID,
			'route_path' => get_field( 'route_path', $post->ID ) ?: '',
			'title'      => $post->post_title,
		];
	}, $posts );
}

// Returns full MarketingContent-shaped data for one page
function mc_rest_get_marketing_page_by_route( WP_REST_Request $request ) {
	$path = trim( $request->get_param( 'path' ) );

	$posts = get_posts( [
		'post_type'      => 'marketing_page',
		'post_status'    => 'publish',
		'posts_per_page' => 1,
		'meta_key'       => 'route_path',
		'meta_value'     => $path,
	] );

	if ( empty( $posts ) ) {
		return new WP_Error( 'not_found', 'No marketing page found for path: ' . $path, [ 'status' => 404 ] );
	}

	$id = $posts[0]->ID;
	return mc_build_page_response( $id );
}

// ---------------------------------------------------------------------------
// 4. Response builder helpers
// ---------------------------------------------------------------------------

function mc_build_page_response( int $id ): array {
	$template = get_field( 'page_template', $id ) ?: 'standard';

	$response = [
		'route_path'    => get_field( 'route_path', $id ) ?: '',
		'page_template' => $template,
		'badge'         => get_field( 'badge', $id ) ?: '',
		'title'         => get_field( 'page_title', $id ) ?: '',
		'description'   => get_field( 'description', $id ) ?: '',
		'primary_cta'   => mc_cta( $id, 'primary' ),
		'secondary_cta' => mc_cta( $id, 'secondary' ),
		'stats'         => mc_collect( $id, 'stat', [ 'label', 'value', 'note' ], 4 ),
		'card_title'    => get_field( 'card_section_title', $id ) ?: '',
		'cards'         => mc_collect( $id, 'card', [ 'title', 'description' ], 8 ),
		'steps_title'   => get_field( 'steps_section_title', $id ) ?: '',
		'steps'         => mc_collect( $id, 'step', [ 'title', 'description' ], 6 ),
		'faq_title'     => get_field( 'faq_section_title', $id ) ?: '',
		'faqs'          => mc_collect( $id, 'faq', [ 'question', 'answer' ], 6 ),
		'spec_table'    => mc_collect( $id, 'spec', [ 'label', 'value' ], 20 ),
		'note'          => get_field( 'note', $id ) ?: '',
	];

	if ( $template === 'homepage' ) {
		$response['homepage'] = mc_homepage_fields( $id );
	}

	return $response;
}

// Assemble a CTA object; returns null if label is empty
function mc_cta( int $id, string $type ): ?array {
	$label = get_field( "{$type}_cta_label", $id );
	$href  = get_field( "{$type}_cta_href", $id );
	if ( ! $label ) return null;
	return [ 'label' => $label, 'href' => $href ?: '#' ];
}

// Collect numbered flat fields into an array, skipping empty rows
function mc_collect( int $id, string $prefix, array $keys, int $max ): array {
	$results = [];
	for ( $i = 1; $i <= $max; $i++ ) {
		$row      = [];
		$has_data = false;
		foreach ( $keys as $key ) {
			$val        = get_field( "{$prefix}_{$i}_{$key}", $id ) ?: '';
			$row[ $key ] = $val;
			if ( $val ) $has_data = true;
		}
		if ( $has_data ) $results[] = $row;
	}
	return $results;
}

// Homepage-specific fields
function mc_homepage_fields( int $id ): array {
	$stations = [];
	for ( $i = 1; $i <= 5; $i++ ) {
		$s = get_field( "hero_station_{$i}", $id );
		if ( $s ) $stations[] = $s;
	}

	$perks = [];
	for ( $i = 1; $i <= 8; $i++ ) {
		$p = get_field( "membership_perk_{$i}", $id );
		if ( $p ) $perks[] = $p;
	}

	$features = [];
	for ( $i = 1; $i <= 6; $i++ ) {
		$f = get_field( "app_feature_{$i}", $id );
		if ( $f ) $features[] = $f;
	}

	$chips = [];
	for ( $i = 1; $i <= 6; $i++ ) {
		$c = get_field( "guide_chip_{$i}", $id );
		if ( $c ) $chips[] = $c;
	}

	return [
		'hero' => [
			'status_text'        => get_field( 'hero_status_text', $id ) ?: '',
			'title_main'         => get_field( 'hero_title_main', $id ) ?: '',
			'title_anytime'      => get_field( 'hero_title_anytime', $id ) ?: '',
			'title_accent'       => get_field( 'hero_title_accent', $id ) ?: '',
			'subtitle'           => get_field( 'hero_subtitle', $id ) ?: '',
			'cta_primary_label'  => get_field( 'hero_cta_primary_label', $id ) ?: '',
			'cta_primary_href'   => get_field( 'hero_cta_primary_href', $id ) ?: '',
			'cta_secondary_label' => get_field( 'hero_cta_secondary_label', $id ) ?: '',
			'live_panel_title'   => get_field( 'hero_live_panel_title', $id ) ?: '',
			'live_stations'      => $stations,
		],
		'membership' => [
			'badge'          => get_field( 'membership_badge', $id ) ?: '',
			'heading_white'  => get_field( 'membership_heading_white', $id ) ?: '',
			'heading_gold'   => get_field( 'membership_heading_gold', $id ) ?: '',
			'subtitle'       => get_field( 'membership_subtitle', $id ) ?: '',
			'cta_label'      => get_field( 'membership_cta_label', $id ) ?: '',
			'cta_href'       => get_field( 'membership_cta_href', $id ) ?: '',
			'perks'          => $perks,
		],
		'home_charger' => [
			'eyebrow'             => get_field( 'home_charger_eyebrow', $id ) ?: '',
			'title_line1'         => get_field( 'home_charger_title_line1', $id ) ?: '',
			'title_line2'         => get_field( 'home_charger_title_line2', $id ) ?: '',
			'cta_primary_label'   => get_field( 'home_charger_cta_primary_label', $id ) ?: '',
			'cta_primary_href'    => get_field( 'home_charger_cta_primary_href', $id ) ?: '',
			'cta_secondary_label' => get_field( 'home_charger_cta_secondary_label', $id ) ?: '',
			'cta_secondary_href'  => get_field( 'home_charger_cta_secondary_href', $id ) ?: '',
		],
		'app' => [
			'heading_line1' => get_field( 'app_heading_line1', $id ) ?: '',
			'heading_line2' => get_field( 'app_heading_line2', $id ) ?: '',
			'subtitle'      => get_field( 'app_subtitle', $id ) ?: '',
			'cta_label'     => get_field( 'app_cta_label', $id ) ?: '',
			'features'      => $features,
		],
		'business' => [
			'kicker'       => get_field( 'business_kicker', $id ) ?: '',
			'title_line1'  => get_field( 'business_title_line1', $id ) ?: '',
			'title_line2'  => get_field( 'business_title_line2', $id ) ?: '',
			'subtitle'     => get_field( 'business_subtitle', $id ) ?: '',
			'cta_label'    => get_field( 'business_cta_label', $id ) ?: '',
			'income_badge' => get_field( 'business_income_badge', $id ) ?: '',
		],
		'guide' => [
			'vehicle_chip' => get_field( 'guide_vehicle_chip', $id ) ?: '',
			'heading'      => get_field( 'guide_heading', $id ) ?: '',
			'subheading'   => get_field( 'guide_subheading', $id ) ?: '',
			'description'  => get_field( 'guide_description', $id ) ?: '',
			'cta_label'    => get_field( 'guide_cta_label', $id ) ?: '',
			'cta_href'     => get_field( 'guide_cta_href', $id ) ?: '',
			'chips'        => $chips,
		],
	];
}
