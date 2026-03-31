<?php
/**
 * Plugin Name: Massive Charging Content Types
 * Description: Registers all custom post types, ACF field groups, REST API field exposure,
 *              and CORS headers for the Massive Charging headless WordPress setup.
 * Version:     1.0.0
 * Author:      Massive Charging
 *
 * Drop this file into /wp-content/mu-plugins/ — it loads automatically.
 * No activation step required. Keep it in version control under backend/wordpress/mu-plugins/.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// ── Custom Post Types ─────────────────────────────────────────────────────────

add_action( 'init', 'mc_register_post_types' );

function mc_register_post_types(): void {

	// CPO — Charging Point Operator
	register_post_type( 'cpo', [
		'labels'       => mc_labels( 'CPO', 'CPOs' ),
		'public'       => true,
		'show_in_rest' => true,
		'rest_base'    => 'cpos',
		'supports'     => [ 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ],
		'has_archive'  => true,
		'rewrite'      => [ 'slug' => 'cpo' ],
		'menu_icon'    => 'dashicons-location-alt',
		'menu_position' => 5,
	] );

	// EV Car
	register_post_type( 'ev_car', [
		'labels'       => mc_labels( 'EV Car', 'EV Cars' ),
		'public'       => true,
		'show_in_rest' => true,
		'rest_base'    => 'ev-cars',
		'supports'     => [ 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ],
		'has_archive'  => true,
		'rewrite'      => [ 'slug' => 'ev-cars' ],
		'menu_icon'    => 'dashicons-car',
		'menu_position' => 6,
	] );

	// Charging Scenario — maps to Next.js scenario landing pages
	register_post_type( 'mc_scenario', [
		'labels'       => mc_labels( 'Scenario', 'Scenarios' ),
		'public'       => true,
		'show_in_rest' => true,
		'rest_base'    => 'scenarios',
		'supports'     => [ 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ],
		'has_archive'  => false,
		'rewrite'      => [ 'slug' => 'scenario' ],
		'menu_icon'    => 'dashicons-location',
		'menu_position' => 7,
	] );

	// Product — EV charging shop items
	register_post_type( 'mc_product', [
		'labels'       => mc_labels( 'Product', 'Products' ),
		'public'       => true,
		'show_in_rest' => true,
		'rest_base'    => 'mc-products',
		'supports'     => [ 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ],
		'has_archive'  => true,
		'rewrite'      => [ 'slug' => 'products' ],
		'menu_icon'    => 'dashicons-cart',
		'menu_position' => 8,
	] );
}

/**
 * Generates a standard WP labels array from singular and plural names.
 *
 * @param string $singular e.g. "CPO"
 * @param string $plural   e.g. "CPOs"
 * @return array<string, string>
 */
function mc_labels( string $singular, string $plural ): array {
	return [
		'name'               => $plural,
		'singular_name'      => $singular,
		'add_new_item'       => "Add New {$singular}",
		'edit_item'          => "Edit {$singular}",
		'view_item'          => "View {$singular}",
		'view_items'         => "View {$plural}",
		'search_items'       => "Search {$plural}",
		'not_found'          => "No {$plural} found.",
		'not_found_in_trash' => "No {$plural} found in trash.",
		'all_items'          => "All {$plural}",
		'menu_name'          => $plural,
	];
}

// ── ACF Field Groups ──────────────────────────────────────────────────────────

add_action( 'acf/init', 'mc_register_acf_fields' );

function mc_register_acf_fields(): void {
	if ( ! function_exists( 'acf_add_local_field_group' ) ) {
		// ACF plugin is not active — skip silently.
		return;
	}

	mc_acf_cpo_fields();
	mc_acf_ev_car_fields();
	mc_acf_scenario_fields();
	mc_acf_product_fields();
}

function mc_acf_cpo_fields(): void {
	acf_add_local_field_group( [
		'key'    => 'group_cpo',
		'title'  => 'CPO Details',
		'fields' => [
			[
				'key'           => 'field_cpo_logo',
				'label'         => 'Logo',
				'name'          => 'logo',
				'type'          => 'image',
				'return_format' => 'array',
				'preview_size'  => 'thumbnail',
			],
			[
				'key'   => 'field_cpo_website',
				'label' => 'Website',
				'name'  => 'website',
				'type'  => 'url',
			],
			[
				'key'   => 'field_cpo_contact_email',
				'label' => 'Contact Email',
				'name'  => 'contact_email',
				'type'  => 'email',
			],
			[
				'key'   => 'field_cpo_contact_phone',
				'label' => 'Contact Phone',
				'name'  => 'contact_phone',
				'type'  => 'text',
			],
			[
				'key'          => 'field_cpo_location',
				'label'        => 'Location',
				'name'         => 'location',
				'type'         => 'text',
				'instructions' => 'City or region served',
			],
			[
				'key'           => 'field_cpo_network_size',
				'label'         => 'Network Size (stations)',
				'name'          => 'network_size',
				'type'          => 'number',
				'min'           => 0,
			],
			[
				'key'           => 'field_cpo_featured',
				'label'         => 'Featured',
				'name'          => 'featured',
				'type'          => 'true_false',
				'default_value' => 0,
			],
		],
		'location' => [ [ [ 'param' => 'post_type', 'operator' => '==', 'value' => 'cpo' ] ] ],
	] );
}

function mc_acf_ev_car_fields(): void {
	acf_add_local_field_group( [
		'key'    => 'group_ev_car',
		'title'  => 'EV Car Details',
		'fields' => [
			[
				'key'   => 'field_car_make',
				'label' => 'Make',
				'name'  => 'make',
				'type'  => 'text',
			],
			[
				'key'   => 'field_car_model',
				'label' => 'Model',
				'name'  => 'model',
				'type'  => 'text',
			],
			[
				'key'   => 'field_car_year',
				'label' => 'Year',
				'name'  => 'year',
				'type'  => 'number',
				'min'   => 2000,
				'max'   => 2035,
			],
			[
				'key'    => 'field_car_price_inr',
				'label'  => 'Price (INR)',
				'name'   => 'price_inr',
				'type'   => 'text',
				'instructions' => 'e.g. "INR 16.99L onwards"',
			],
			[
				'key'    => 'field_car_battery_kwh',
				'label'  => 'Battery Capacity',
				'name'   => 'battery_kwh',
				'type'   => 'text',
				'instructions' => 'e.g. "40.5 kWh"',
			],
			[
				'key'    => 'field_car_range_km',
				'label'  => 'Claimed Range',
				'name'   => 'range_km',
				'type'   => 'text',
				'instructions' => 'e.g. "465 km"',
			],
			[
				'key'     => 'field_car_connector_types',
				'label'   => 'Connector Type',
				'name'    => 'connector',
				'type'    => 'select',
				'choices' => [
					'CCS2'    => 'CCS2',
					'CHAdeMO' => 'CHAdeMO',
					'Type 2'  => 'Type 2 (AC)',
					'Type 1'  => 'Type 1 (J1772)',
					'GB/T'    => 'GB/T',
					'NACS'    => 'Tesla/NACS',
				],
			],
			[
				'key'          => 'field_car_max_charge_kw',
				'label'        => 'Max Charge Speed (kW)',
				'name'         => 'charge_speed_kw',
				'type'         => 'number',
				'min'          => 0,
				'append'       => 'kW',
			],
			[
				'key'   => 'field_car_guide_slug',
				'label' => 'Charging Guide Slug',
				'name'  => 'guide_slug',
				'type'  => 'text',
				'instructions' => 'Matches the charging-guide article slug in Next.js',
			],
		],
		'location' => [ [ [ 'param' => 'post_type', 'operator' => '==', 'value' => 'ev_car' ] ] ],
	] );
}

function mc_acf_scenario_fields(): void {
	acf_add_local_field_group( [
		'key'    => 'group_mc_scenario',
		'title'  => 'Scenario Details',
		'fields' => [
			[
				'key'      => 'field_scenario_slug_key',
				'label'    => 'Route Slug',
				'name'     => 'route_slug',
				'type'     => 'text',
				'required' => 1,
				'instructions' => 'Maps to Next.js route, e.g. "fleet-charging", "hospital-charging"',
			],
			[
				'key'   => 'field_scenario_subtitle',
				'label' => 'Subtitle',
				'name'  => 'subtitle',
				'type'  => 'text',
			],
			[
				'key'          => 'field_scenario_icon',
				'label'        => 'Icon Name',
				'name'         => 'icon',
				'type'         => 'text',
				'instructions' => 'Lucide icon name, e.g. "Building2", "Zap", "Car"',
			],
			[
				'key'           => 'field_scenario_hero_image',
				'label'         => 'Hero Image',
				'name'          => 'hero_image',
				'type'          => 'image',
				'return_format' => 'array',
			],
			[
				'key'          => 'field_scenario_features',
				'label'        => 'Key Features',
				'name'         => 'features',
				'type'         => 'repeater',
				'button_label' => 'Add Feature',
				'sub_fields'   => [
					[
						'key'   => 'field_scenario_feature_text',
						'label' => 'Feature',
						'name'  => 'feature',
						'type'  => 'text',
					],
				],
			],
			[
				'key'   => 'field_scenario_cta_text',
				'label' => 'CTA Button Text',
				'name'  => 'cta_text',
				'type'  => 'text',
			],
			[
				'key'   => 'field_scenario_cta_url',
				'label' => 'CTA Button URL',
				'name'  => 'cta_url',
				'type'  => 'url',
			],
		],
		'location' => [ [ [ 'param' => 'post_type', 'operator' => '==', 'value' => 'mc_scenario' ] ] ],
	] );
}

function mc_acf_product_fields(): void {
	acf_add_local_field_group( [
		'key'    => 'group_mc_product',
		'title'  => 'Product Details',
		'fields' => [
			[
				'key'      => 'field_product_sku',
				'label'    => 'SKU',
				'name'     => 'sku',
				'type'     => 'text',
				'required' => 1,
			],
			[
				'key'     => 'field_product_price_inr',
				'label'   => 'Price (INR)',
				'name'    => 'price_inr',
				'type'    => 'number',
				'min'     => 0,
				'prepend' => '₹',
			],
			[
				'key'     => 'field_product_category',
				'label'   => 'Category',
				'name'    => 'category',
				'type'    => 'select',
				'choices' => [
					'charger'      => 'EV Charger',
					'cable'        => 'Charging Cable',
					'adapter'      => 'Adapter',
					'accessory'    => 'Accessory',
					'software'     => 'Software / Subscription',
				],
			],
			[
				'key'          => 'field_product_specs',
				'label'        => 'Specifications',
				'name'         => 'specs',
				'type'         => 'repeater',
				'button_label' => 'Add Spec',
				'sub_fields'   => [
					[
						'key'   => 'field_product_spec_label',
						'label' => 'Label',
						'name'  => 'label',
						'type'  => 'text',
					],
					[
						'key'   => 'field_product_spec_value',
						'label' => 'Value',
						'name'  => 'value',
						'type'  => 'text',
					],
				],
			],
			[
				'key'           => 'field_product_gallery',
				'label'         => 'Image Gallery',
				'name'          => 'gallery',
				'type'          => 'gallery',
				'return_format' => 'array',
			],
			[
				'key'           => 'field_product_in_stock',
				'label'         => 'In Stock',
				'name'          => 'in_stock',
				'type'          => 'true_false',
				'default_value' => 1,
			],
		],
		'location' => [ [ [ 'param' => 'post_type', 'operator' => '==', 'value' => 'mc_product' ] ] ],
	] );
}

// ── REST API: expose ACF fields under `acf` key ───────────────────────────────

add_action( 'rest_api_init', 'mc_expose_acf_in_rest' );

function mc_expose_acf_in_rest(): void {
	$types = [ 'cpo', 'ev_car', 'mc_scenario', 'mc_product' ];

	foreach ( $types as $type ) {
		register_rest_field( $type, 'acf', [
			'get_callback' => static function ( array $post ): array {
				if ( ! function_exists( 'get_fields' ) ) {
					return [];
				}
				return get_fields( $post['id'] ) ?: [];
			},
			'schema' => [ 'type' => 'object' ],
		] );
	}
}

// ── CORS headers for the REST API ─────────────────────────────────────────────

add_action( 'rest_api_init', 'mc_add_cors_headers', 15 );

function mc_add_cors_headers(): void {
	$allowed = [
		'https://massivecharging.com',
		'https://www.massivecharging.com',
		'http://localhost:3000',
	];

	$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

	if ( in_array( $origin, $allowed, true ) ) {
		header( 'Access-Control-Allow-Origin: ' . $origin );
		header( 'Access-Control-Allow-Methods: GET, POST, OPTIONS' );
		header( 'Access-Control-Allow-Headers: Authorization, Content-Type, X-WP-Nonce' );
		header( 'Access-Control-Allow-Credentials: true' );
	}
}

// Handle OPTIONS preflight
add_action( 'init', static function (): void {
	if ( isset( $_SERVER['REQUEST_METHOD'] ) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS' ) {
		status_header( 204 );
		exit;
	}
} );
