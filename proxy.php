<?php
/*// Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    }
/*
 * PHP Proxy
 * Responds to both HTTP GET and POST requests
 * Author: Abdul Qabiz
 * Created On: March 31st, 2006
 * Last Modified: Feb 22, 2015
 */


// Get the url of to be proxied
// Is it a POST or a GET?*/
/*if(isset($_GET['projects'])) {
	
}
if(isset($_GET['project'])) {

}*/
$url = 'http://behance.net/v2/users/marcelorodovalho/projects?api_key=D5zGvHfQB4zF5bjD3sZD9EB3yt0TulEs&page=';//($_POST['url']) ? $_POST['url'] : $_GET['url'];
$headers = ($_POST['headers']) ? $_POST['headers'] : $_GET['headers'];
$mimeType = ($_POST['mimeType']) ? $_POST['mimeType'] : $_GET['mimeType'];
$loopPagination = true;
$projects = [];
$page = 1;
while ($loopPagination) {
    $session = curl_init($url . $page);
    curl_setopt($session, CURLOPT_HEADER, ($headers == "true") ? true : false);
    curl_setopt($session, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($session, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($session);
    if ($response) {
        $response = json_decode($response, true);
        if (isset($response['projects']) && !empty($response['projects']) && $response['http_code'] == 200) {
            $projects = array_merge($projects, $response['projects']);
        } else {
            $loopPagination = false;
        }
    } else {
        $loopPagination = false;
    }
    curl_close($session);
    $page++;
}
if (!empty($projects)) {
    foreach ($projects as $key => $project) {
        $url = 'http://behance.net/v2/projects/' . $project['id'] . '?api_key=D5zGvHfQB4zF5bjD3sZD9EB3yt0TulEs';
        $session = curl_init($url);
        curl_setopt($session, CURLOPT_HEADER, ($headers == "true") ? true : false);
        curl_setopt($session, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($session, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($session);
        if ($response) {
            $response = json_decode($response, true);
            if ($response['http_code'] == 200) {
                $projects[$key] = $response['project'];
            }
        }
        curl_close($session);
    }
}
$fp = fopen('results.json', 'w');
fwrite($fp, json_encode($projects));
fclose($fp);
die;