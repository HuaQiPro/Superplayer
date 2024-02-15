<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
    <title>资源加载中</title>
    <style>
        body{background:#000;padding:0;margin:0;overflow:hidden;width:100%;height:100%;position:absolute;left:0;right:0}
        .bg{background-image: url(img/asset-53.jpg);width: 100%;height: 100%;opacity: .38;position: absolute;background-size: cover;background-position: center;background-repeat: no-repeat;}
        .main{position:absolute;left:1px;right:1px;top:1px;bottom:1px;margin:auto;height:15vh;width:100%;z-index:1;text-align:center}
        .main .loading{width:60px;height:60px;display:inline-block;vertical-align:middle;animation:Loading .6s steps(8,end) infinite;background:#b3b2b2 url(img/load.svg) no-repeat;background-size:100%;border-radius:50px;border:10px solid #b3b2b2;box-sizing:border-box}
        .main .tips{color:#fff;margin-top:30px;font-size:16px;font-weight:600}
        @keyframes Loading{0%{-webkit-transform:rotate3d(0,0,1,0deg);transform:rotate3d(0,0,1,0deg)}100%{-webkit-transform:rotate3d(0,0,1,360deg);transform:rotate3d(0,0,1,360deg)}}
        @media(max-width:1239px){.main .loading{height:48px;width:48px}}
        @media(max-width:899px){.main .loading{height:40px;width:40px;border-width:8px}.main .tips{margin-top:15px;font-size:12px}}
    </style>
</head>
<body>
<div class="bg"></div>
<div class="main">
    <div class="loading"></div>
    <div class="tips">资源加载中 精彩马上呈现...</div>
</div>
</body>
<script>
    let str = window.location.href,url = str.replace("index.php", "ec.php");
    window.location = url;
</script>
</html>