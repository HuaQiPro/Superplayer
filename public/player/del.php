<?php
include 'FileClass.php';
$config = require('../../application/extra/jx.php');
$pw = htmlspecialchars(urldecode(trim($_GET['password'])));

if($pw == $config['password']){
    $redis = new player\file\FileClass();
    $rel = $redis->clear();
    if($rel){
        echo "缓存清除完毕";
    }else{
        echo "缓存清除失败";
    }
}else{
    echo "密码错误";
}