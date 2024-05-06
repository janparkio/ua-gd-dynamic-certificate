<?php

/**
 * Plugin Name:       Universidad Americana - Dynamic Certificate
 * Plugin URI:  http://leadwise.pro/ua-gd-dynamic-certificate
 * Description: Dynamic certificate element in WordPress using Gutenberg with an interactivity API that integrates values from a form input and an Advanced Custom Fields (ACF) field.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.3
 * Author:            Jan Park
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ua-gd-dynamic-certificate
 *
 * @package CreateBlock
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_ua_gd_dynamic_certificate_block_init()
{
    register_block_type(__DIR__ . '/build');
}
add_action('init', 'create_block_ua_gd_dynamic_certificate_block_init');

// Define a namespace for the REST API.
$route_namespace = 'ua-gd-dynamic-certificate/v1';

add_action('rest_api_init', function () use ($route_namespace) {
    register_rest_route(
        $route_namespace,
        '/certificate-title/',
        array (
            'methods' => WP_REST_Server::READABLE,
            'callback' => 'get_certificate_title',
            'permission_callback' => function () {
                return current_user_can('edit_posts');
            }
        )
    );
});

function my_acf_to_rest_api($args, $field, $post_id) {
    $args['show_in_rest'] = true;
    return $args;
}
add_filter('acf/rest_api/field_settings', 'my_acf_to_rest_api', 10, 3);
