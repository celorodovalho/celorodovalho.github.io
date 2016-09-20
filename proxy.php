<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('max_execution_time', 3000);
ini_set('memory_limit', -1);
set_time_limit(0);
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

$apiKey = 'D5zGvHfQB4zF5bjD3sZD9EB3yt0TulEs';
$url = 'http://behance.net/v2/users/marcelorodovalho/projects?api_key=' . $apiKey . '&page=';//($_POST['url']) ? $_POST['url'] : $_GET['url'];
$headers = 'false';//($_POST['headers']) ? $_POST['headers'] : $_GET['headers'];
//$mimeType = ($_POST['mimeType']) ? $_POST['mimeType'] : $_GET['mimeType'];
$loopPagination = true;
$projects = [];
$page = 1;
$filename = 'results.json';

function isActive($url)
{
    /*$ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HEADER, 1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $data = curl_exec($ch);
    $headers = curl_getinfo($ch);
    curl_close($ch);
    return in_array($headers['http_code'], [200, 301, 302, 403]);*/
    $headers = @get_headers($url);
    $headers = (is_array($headers)) ? implode( "\n ", $headers) : $headers;
    return (bool)preg_match('#^HTTP/.*\s+[(200|301|302)]+\s#i', $headers);
}

function unsetVars($project) {
    unset(
        $project['published_on'],
        $project['created_on'],
        $project['modified_on'],
        $project['privacy'],
        $project['mature_content'],
        $project['mature_access'],
        $project['owners'],
        $project['stats'],
        $project['conceived_on'],
        $project['canvas_width'],
        $project['editor_version'],
        $project['modules'],
        $project['short_url'],
        $project['copyright'],
        $project['styles']
    );
    return $project;
}

function addWww($project) {
    $descriptions = explode("\n", $project['description']);
    foreach ($descriptions as $description) {
        if (strpos($description, 'URL:') !== false) {
            $www = trim(str_replace('URL:', '', $description));
            if (isActive($www)) {
                $project['www'] = $www;
            } else {
                $project['www'] = $project['modules'][0]['sizes']['original'];
            }
						debug($project['www']);
        }
    }
    return $project;
}

if(!empty($_GET) && array_key_exists('parse', $_GET)) {
    $fp = fopen($filename, 'r');
    $projects = fread($fp, filesize($filename));
    $projects = json_decode($projects, true);
    foreach ($projects as $key => $project) {
        $project = addWww($project);
        $projects[$key] = unsetVars($project);
    }
    $fp = fopen($filename, 'w');
    fwrite($fp, json_encode($projects));
    fclose($fp);
    die;
}

function debug($var) {
		echo __LINE__;
		echo "<pre>";
		var_dump($var);
}

while ($loopPagination) {
    $session = curl_init($url . $page);
    curl_setopt($session, CURLOPT_HEADER, ($headers == "true") ? true : false);
    curl_setopt($session, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($session, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($session);
    if ($response) {
				debug($page);
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
        $url = 'http://behance.net/v2/projects/' . $project['id'] . '?api_key=' . $apiKey . '';
        $session = curl_init($url);
        curl_setopt($session, CURLOPT_HEADER, ($headers == "true") ? true : false);
        curl_setopt($session, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($session, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($session);
        curl_close($session);
        if ($response) {
						debug($url);
            $response = json_decode($response, true);
            if ($response['http_code'] == 200) {
                $projects[$key] = $response['project'];
                $projects[$key] = addWww($projects[$key]);
            }
        }
        $projects[$key] = unsetVars($projects[$key]);
    }
}
if(!empty($_GET) && array_key_exists('return', $_GET)) {
    echo "<pre>";
    var_dump($projects);
    die;
}
$projects = json_encode($projects);
debug([
	'FIM',
	strlen($projects)
]);
if (strlen($projects) > 0) {
		$fp = fopen($filename, 'w');
		fwrite($fp, $projects);
		fclose($fp);
}
die;
