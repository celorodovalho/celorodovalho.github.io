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
$apiKey = 'D5zGvHfQB4zF5bjD3sZD9EB3yt0TulEs';
$url = 'http://behance.net/v2/users/marcelorodovalho/projects?api_key=' . $apiKey . '&page=';//($_POST['url']) ? $_POST['url'] : $_GET['url'];
$headers = 'true';//($_POST['headers']) ? $_POST['headers'] : $_GET['headers'];
//$mimeType = ($_POST['mimeType']) ? $_POST['mimeType'] : $_GET['mimeType'];
$loopPagination = true;
$projects = [];
$page = 1;

function checkSiteExists($url)
{
    $handle = curl_init($url);
    curl_setopt($handle, CURLOPT_RETURNTRANSFER, TRUE);

    /* Get the HTML or whatever is linked in $url. */
    $response = curl_exec($handle);

    /* Check for 404 (file not found). */
    $httpCode = curl_getinfo($handle, CURLINFO_HTTP_CODE);
//    if($httpCode == 404) {
//        /* Handle 404 here. */
//    }

    curl_close($handle);
    return $httpCode == 404 ? false : true;
}

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
        $url = 'http://behance.net/v2/projects/' . $project['id'] . '?api_key=' . $apiKey . '';
        $session = curl_init($url);
        curl_setopt($session, CURLOPT_HEADER, ($headers == "true") ? true : false);
        curl_setopt($session, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($session, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($session);
        curl_close($session);
        if ($response) {
            $response = json_decode($response, true);
            if ($response['http_code'] == 200) {
                $projects[$key] = $response['project'];
                $descriptions = explode('\n', $response['description']);
                foreach ($descriptions as $description) {
                    if (strpos($description, 'URL:') !== false) {
                        $www = trim(str_replace('URL:', '', $description));
                        if (checkSiteExists($www)) {
                            $projects[$key]['www'] = $www;
                        } else {
                            $projects[$key]['www'] = $response['covers']['original'];
                        }
                    }
                }
            }
        }
        unset(
            $projects[$key]['published_on'],
            $projects[$key]['created_on'],
            $projects[$key]['modified_on'],
            $projects[$key]['privacy'],
            $projects[$key]['mature_content'],
            $projects[$key]['mature_access'],
            $projects[$key]['owners'],
            $projects[$key]['stats'],
            $projects[$key]['conceived_on'],
            $projects[$key]['canvas_width'],
            $projects[$key]['editor_version'],
            $projects[$key]['modules'],
            $projects[$key]['short_url'],
            $projects[$key]['copyright'],
            $projects[$key]['styles']
        );
    }
}
$fp = fopen('results.json', 'w');
fwrite($fp, json_encode($projects));
fclose($fp);
die;