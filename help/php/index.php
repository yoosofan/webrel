<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr">
<head>
    <meta http-equiv="Type" content="text/html; charset=UTF-8"/>
     <title xml:lang="fa" dir="ltr">احمد یوسفان</title>
     <meta http-equiv="Content-Script-Type" content="text/javascript" />
      <meta http-equiv="Content-Language" content="fa, en" />
      <meta name="description"     content="ahmad yoosofn" />
      <meta name="author" content="ahmad"/>
      <meta name="robots"     content="all,follow" />
      <meta name="keywords"     content="usofan, yousefan,ahmad,yoosofan, computer , احمد , یوسفان , فارسی ,يوسفان research , iran ,education, farsi , persian" />
</head>
  <body>

<?php

$link=mysqli_connect($yoosofan_myHost_ip , $yoosofan_myUser_id, $yoosofan_myUser_password) or die('could not connect'. mysqli_error());
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
$db_link=$link->select_db($yy_db_select);
if(!$db_link){
	die('can not select '. $yy_db_select .' database ');
}
$link->set_charset('utf8');
$result =$link->query('SELECT * FROM student ');

echo $link->num_rows($result);
$link->free_result($result);
/* echo '<table><tr><td>std no</td><td>fiest name</td><td>last name</td><td>password</td><td>gender</td></tr>' ;


foreach ($entries as $entry) {
	$yoosofan_login=$entry-> getElementsByTagName('login');
    $yoosofan_password=$entry->getElementsByTagName('password');
    $yoosofan_first_name=$entry->getElementsByTagName('first_name');
    $yoosofan_last_name=$entry->getElementsByTagName('last_name');
	$yoosofan_gender=$entry->getElementsByTagName('gender');
    echo '<tr><td>' ;
    echo $yoosofan_login->item(0)->nodeValue.'</td><td>';
    echo $yoosofan_first_name->item(0)->nodeValue.'</td><td>';
    echo $yoosofan_last_name->item(0)->nodeValue.'</td><td>';
    echo $yoosofan_password->item(0)->nodeValue.'</td><td>';
    echo $yoosofan_gender->item(0)->nodeValue.'</td>';
    $yy_gender=1;
    if(trim($yoosofan_gender->item(0)->nodeValue) == 'f'){
         $yy_gender=0;
	}
    $query="INSERT INTO student(ssn,sno,fname,lname,password,gender) VALUES('222',";
    $query.="'{$yoosofan_login->item(0)->nodeValue}' , ";
    $query.="'{$yoosofan_first_name->item(0)->nodeValue}' , ";
    $query.="'{$yoosofan_last_name->item(0)->nodeValue}' , ";
    $query.="'{$yoosofan_password->item(0)->nodeValue}' , ";
    $query.=" '$yy_gender'); ";
//    echo '<br />qqqqq<br />'.$query.'<br />sssss<br />';
    $link->query($query) or die('can not insert '.$link->error);
    echo '</tr>';
}
echo '</table>';
*/
$link->close();
?>
</body>
</html>
