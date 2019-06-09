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
elseif ($q == 'interface') {
    $controller = 'interface';
}
elseif ($q == 'about') {
    $controller = 'about';
}
elseif ($q == 'illustrations/illustration1') {
    $controller = 'illustrations/illustration1';
}
elseif ($q == 'illustrations/illustration2') {
    $controller = 'illustrations/illustration2';
}
elseif ($q == 'illustrations/illustration3') {
    $controller = 'illustrations/illustration3';
}
elseif ($q == 'illustrations/illustration4') {
    $controller = 'illustrations/illustration4';
}
elseif ($q == 'interfaces/interface1') {
    $controller = 'interfaces/interface1';
}
elseif ($q == 'interfaces/interface2') {
    $controller = 'interfaces/interface2';
}
elseif ($q == 'interfaces/interface3') {
    $controller = 'interfaces/interface3';
}
elseif ($q == 'interfaces/interface4') {
    $controller = 'interfaces/interface4';
}



// Include controller
include '../controllers/'.$controller.'.php';