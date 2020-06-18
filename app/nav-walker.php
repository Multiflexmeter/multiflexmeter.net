<?php

namespace App;

class NavigationWalker extends \Walker_Nav_Menu
{
    public function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
    {
        $title = $item->title;
        $permalink = $item->url;
        $has_submenu = $args->walker->has_children;
        $classes = array('nav-link');

        if ($item->current) {
            array_push($classes, 'active');
        }

        if ($has_submenu) {
            $output .= '<div class="has-submenu">';
        }

        $output .= '<a href="' . $permalink . '" class="' . join(' ', $classes) . '">';
        $output .= $title;
        $output .= '</a>';
    }

    public function end_el(&$output, $item, $depth = 0, $args = null)
    {
    }

    public function start_lvl(&$output, $depth = 0, $args = null)
    {
        $output .= '<div class="submenu">';
    }

    public function end_lvl(&$output, $depth = 0, $args = null)
    {
        $output .= '</div></div>';
    }
}
