<?php
$folder1='files/research/yoosofan_bibliography/';
$file1='../'.$folder1.$_GET['article'];
if (file_exists($file1)){
    header('Content-type: Application/x-Research-Info-Systems');
    header('Content-Length: ' . filesize($file1));
    header('Mime-Version: 1.0');
    header('Content-Disposition: attachment; filename="'.$file1.'"');
    ob_clean();
    flush();
    readfile($file1);
//    exit;
}
?>