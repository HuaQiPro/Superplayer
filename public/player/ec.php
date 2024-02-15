<?php
include 'PlayerClass.php';
$ec = new PlayerClass();
$key = intval($_GET['key']);
$code = htmlspecialchars(urldecode(trim($_GET['code'])));
$from = htmlspecialchars(urldecode(trim($_GET['from'])));
$url = htmlspecialchars(urldecode(trim($_GET['url'])));
$MacCmsBox = $ec->Start($key, $code, $from, $url);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="Content-language" content="zh-CN">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta http-equiv="pragma" content="no-cache">
    <meta name="referrer" content="never"/>
    <meta http-equiv="Access-Control-Allow-Origin" content="*" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <title>Mao播放器</title>
    <link rel="stylesheet" href="../player/css/<?php echo $MacCmsBox['id']; ?>/style<?php echo $MacCmsBox['number']; ?>.css">
    <script src="../player/js/jquery.min.js"></script>
    <script src="../player/js/<?php echo $MacCmsBox['id']; ?>/player.min.js"></script>
    <script src="../player/js/<?php echo $MacCmsBox['id']; ?>/EcPlayer<?php echo $MacCmsBox['number']; ?>.js"></script>
</head>
<body>
<div id="player" class="w-h"></div>
<script>let ConFig = <?php echo $MacCmsBox['dp']; ?>,box = $("#player"),lg = ConFig.lg;</script>
</body>
</html>