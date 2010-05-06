<?php

// On some web host <open_basedir> is set,
// so php functions can not open files outside of its directory tree
// In this situation we should use $_SERVER['SERVER_NAME'] for accessing the files.
// or change directory tree such that all files is inside php tree.

$pagesDir = "../pages/";
$t1=$_GET["title"];
$response = file_get_contents($pagesDir . $t1);
echo $response;
?>
