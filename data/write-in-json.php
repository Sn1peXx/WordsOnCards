<?php

$wordLang = filter_var(trim($_POST['wordLang']), FILTER_SANITIZE_STRING);
$descLang = filter_var(trim($_POST['descLang']), FILTER_SANITIZE_STRING);
$wordTrans = filter_var(trim($_POST['wordTrans']), FILTER_SANITIZE_STRING);
$descTrans = filter_var(trim($_POST['descTrans']), FILTER_SANITIZE_STRING);
$wordGroup = filter_var(trim($_POST['wordGroup']), FILTER_SANITIZE_STRING);
$langSelect = $_POST['langSelect'];

$file = file_get_contents('./data.json');
$taskList = json_decode($file,TRUE);
unset($file);

$taskList[] = array(
    "username"=>$_COOKIE['username'],
    "lang"=>$langSelect,
    "word"=>$wordLang,
    "desc"=>$descLang ?: "",
    "translate"=>$wordTrans,
    "rudesc"=>$descTrans ?: "",
    "group"=>$wordGroup ?: ""
);

file_put_contents('./data.json',json_encode($taskList, JSON_UNESCAPED_UNICODE));
unset($taskList);

header('Location: ../index.php');