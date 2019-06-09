<?php 

/**
 * Configuration
 */

define('URL', 'http://localhost/php/folio_alexis/public/');

/**
 * Routing
 */

// Get 'q' param
$q = !empty($_GET['q']) ? $_GET['q'] : 'home';

//Define controller
$controller = '404';

if ($q == 'home') 
{
    $controller = 'home';
}
elseif ($q == 'illustrations') {
    $controller = 'illustrations';
}

// Include controller
include '../controllers/'.$controller.'.php';