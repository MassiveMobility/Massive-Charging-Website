<?php
/**
 * Backfill ACF field-key reference entries for migrated ev_car posts.
 *
 * ACF's get_fields() works by reading a hidden "_fieldname" meta entry that
 * maps the plain meta key to the ACF field key (e.g. _make → field_car_make).
 * Posts migrated via update_post_meta() lack these references, so get_fields()
 * returns empty. This script adds the missing entries so the WP admin panel
 * shows the correct values in ACF field groups.
 *
 * Run once from the server:
 *   php /tmp/mc-migration/backfill-acf-refs.php
 */

define( 'ABSPATH_GUARD', true );
require '/var/www/cms/wp-load.php';

// Map: meta_key => ACF field_key (must match the keys in mc_acf_ev_car_fields())
$field_map = [
	'make'            => 'field_car_make',
	'model'           => 'field_car_model',
	'price_inr'       => 'field_car_price_inr',
	'battery_kwh'     => 'field_car_battery_kwh',
	'range_km'        => 'field_car_range_km',
	'connector'       => 'field_car_connector_types',
	'guide_slug'      => 'field_car_guide_slug',
	'charge_speed_kw' => 'field_car_max_charge_kw',
];

$posts = get_posts( [
	'post_type'      => 'ev_car',
	'posts_per_page' => -1,
	'post_status'    => 'publish',
	'fields'         => 'ids',
] );

echo 'Found ' . count( $posts ) . " ev_car posts. Adding ACF field-key references...\n";

$updated = 0;

foreach ( $posts as $post_id ) {
	foreach ( $field_map as $meta_key => $field_key ) {
		$ref_key = '_' . $meta_key;
		$existing = get_post_meta( $post_id, $ref_key, true );

		if ( $existing !== $field_key ) {
			update_post_meta( $post_id, $ref_key, $field_key );
		}
	}
	$updated++;
}

echo "Done. Updated ACF references on {$updated} posts.\n";
echo "You can now verify: curl https://content.massivecharging.com/wp-json/wp/v2/ev-cars?per_page=1\n";
