<?php
/**
 * 作者QQ602524950 禁止二开出售 禁止修改注释 违者死全家
 */
use player\redis\RedisClass;
use player\file\FileClass;

class PlayerClass {


    protected $sql_c = null;

    public function __construct()
    {
        include 'FileClass.php';
        include 'RedisClass.php';
        $this->sql_c = require('../../application/extra/zimu.php');
    }

    /**
     * 一切的起始
     * @param $key  "当前线路，默认0"
     * @param $code "播放器编码"
     * @param $from "播放组"
     * @param $url  "资源地址"
     * @return array
     */
    public function Start($key,$code,$from,$url):array
    {
        $config = require('../../application/extra/jx.php');
        $MacCmsBox = require('../../application/extra/'.$code.'.php');
        $jx_tart = [
            'id' => $MacCmsBox['row']['player'],
            'number'=>$MacCmsBox['number'],
            'dp' => ['tips'  =>  $config['tips'], 'code'  =>  304]
        ];

        //1.空参数
        if(empty($url)){$jx_tart['dp']['code'] = 301;return [
            'id' => $jx_tart['id'],
            'number' => $jx_tart['number'],
            'dp' => json_encode($jx_tart['dp'])
        ];}
        if(empty($key)){$key = 0;}

        //2.请求限制检查
        if($config['IP'] == '1'){
            if($this->limiting($config) == '304'){return [
                'id' => $jx_tart['id'],
                'number' => $jx_tart['number'],
                'dp' => json_encode($jx_tart['dp'])
            ];}
        }

        //3.进入解析处理
        if(substr($url,0,3) == "EC_") {
            $url2 = substr($url,3);
            $url = $this->Decrypt(base64_decode($url2),$config['key'],$config['iv']);
        }
        $jx_data =  $this->JxTart(['key'  => $key, 'code' => $code, 'from' =>  $from, 'url'  => $url],$config);

        //4.字幕查询
        $mid = substr(md5($url),8,16);
        if($MacCmsBox['zm_off'] == 1){
            $dm_url = $this->sql_zm($mid);
            if(!empty($dm_url)){$MacCmsBox['zm_url'] = $dm_url;}
        }

        //5 移除不必要的配置
        if($MacCmsBox['random']){
            $MacCmsBox['gx']['pic'] = $this->Random_graph($MacCmsBox['random_img']);
        }
        unset($MacCmsBox['random_img']);
        unset($config['other']['danMu_vab']);
        $string = $this->string();$key = '2890'.$string.'tB959C';$MacCmsBox['uid']=$string;

        $jx_tart['dp'] = json_encode([
            'tips'   =>  $config['tips'],
            'lg'     =>  $config['lg'],
            'config' =>  $MacCmsBox,
            'code'   =>  $jx_data['code'],
            'type'   =>  $jx_data['type'],
            'html'   =>  $jx_data['api'],
            'url'    =>  $this->Encrypt($jx_data['url'],$key,'2F131BE91247866E'),
            'id1'    =>  $mid,
            'id2'    =>  (substr(md5($url), -20)),
        ]);

        return $jx_tart;
    }


    /**
     * 限制请求
     * @param $config '配置'
     * @return string
     */
    public function limiting($config):string
    {
        $code = '';
        $ip = htmlspecialchars(urldecode(trim($_SERVER['REMOTE_ADDR'])));
        if(!empty($ip)){

            if($config['redis_type'] == '1'){
                $redis = new FileClass();
            }else{
                $redis = new RedisClass(['host'=>$config['redis_host'],'port'=>$config['redis_port'],'password'=>$config['redis_pass']]);
            }

            if($redis->has($ip)){
                if($redis->get($ip) == 'no'){
                    $code = '304';
                } else if($redis->get($ip) >= $config['limit_max']){
                    $code = '304';
                    $redis->set($ip,'no',$config['limit_handle']);
                    //记录超过请求限制用户
                    $this->sql_ip($ip);
                }else{
                    $redis->inc($ip);
                }
            }else{
                $redis->set($ip,1,$config['limit_time']);
            }
        }
        return $code;
    }


    /**
     * 解析开始
     * @param $jx_data '包含所需的数据数组'
     * @param $config 'json配置'
     * @return array
     */
    public function JxTart($jx_data,$config):array
    {

        //对未指派播放器编码并且符合回源的直接返回
        $data = [];
        if(!empty($config['yuan']) && empty($jx_data['from'])){
            $yuan_data = explode(",", $config['yuan']);
            foreach ($yuan_data as $k => $v){
                if(strpos($jx_data['url'],$v) !== false){
                    $data = ['code'=>200,'url'=>$jx_data['url'],'type'=>'auto'];
                    break;
                }
            }
        }
        if($data['code'] == 200){return $data;}

        //如果没有传入播放器编码则通过特征码匹配
        if(empty($jx_data['from'])){
            foreach ($config['jx'] as $k => $v){
                if(strpos($jx_data['url'],$k) !== false){
                    $jx_data['from'] = $k;
                    break;
                }
            }
        }

        //未匹配到json直接返回
        if(!in_array($config['jx'][$jx_data['from']],$config['jx'])){
            return ['code'=>103,'url'=>$jx_data['url'],'type'=>'auto'];
        }

        //进行json解析业务
        $file = 'qq602524950/'.$jx_data['from'].'/'.md5($jx_data['url']).'.m3u8';
        $data = [];
        $key = $config['jx'][$jx_data['from']];
        if($config['mode'] == '0')
        {//友好切换
            $num = count($key);
            $jxData = explode("||", $key[$jx_data['key']]);

            $m3u8_cache_read = $this->m3u8_cache_read($file,$jxData[2],$jxData[1],$jx_data['url'],$config,$jx_data['from'],$jxData[3]);
            if($m3u8_cache_read['code'] == 200){
                return $m3u8_cache_read;
            }else{
                $ApiGet = $this->Curl_get($jxData[0].$jx_data['url'],true,$jxData[5]);
                if($ApiGet['code'] == 200){
                    $data = [
                        'code'=>200,
                        'url'=>$ApiGet['url'],
                        'type'=>$jxData[4],
                        'cache'=>$jxData[1],
                        'm3u8'=>$jxData[2],
                        'expand'=>$jxData[3]
                    ];
                }else{
                    $index = $jx_data['key']+1;
                    $line = $this->line([
                        'number'  => $num,
                        'index'   => $index,
                        'key'     => $jx_data['key'],
                        'url'     => $jx_data['url'],
                        'code'    => $jx_data['code'],
                        'from'    => $jx_data['from'],
                    ]);
                    if($num == 1 || $num == $index){
                        $data = ['code'=>101, 'api'=>$line, 'type'=>'auto', 'cache'=>'', 'm3u8'=>'', 'expand'=>''];
                    }else{
                        $data = ['code'=>102, 'api'=>$line, 'type'=>'auto', 'cache'=>'', 'm3u8'=>'', 'expand'=>''];
                    }
                }
            }
        }else{//遍历接口
            foreach ($key as $k => $v){
                $jxData = explode("||", $v);

                $m3u8_cache_read = $this->m3u8_cache_read($file,$jxData[2],$jxData[1],$jx_data['url'],$config,$jx_data['from'],$jxData[3]);

                if($m3u8_cache_read['code'] == 200){
                    return $m3u8_cache_read;
                }else{
                    $ApiGet = $this->Curl_get($jxData[0].$jx_data['url'],true,$jxData[5]);
                    if($ApiGet['code'] == 200){
                        $data = [
                            'code'=>200,
                            'url'=>$ApiGet['url'],
                            'type'=>$jxData[4],
                            'cache'=>$jxData[1],
                            'm3u8'=>$jxData[2],
                            'expand'=>$jxData[3]
                        ];
                        break;
                    }
                }
            }
        }
        //缓存接口数据
        if(!empty($data['cache'])){
            if($config['redis_type'] == '1'){
                $redis = new FileClass();
            }else{
                $redis = new RedisClass(['host'=>$config['redis_host'],'port'=>$config['redis_port'],'password'=>$config['redis_pass']]);
            }
            $redis->set($jx_data['url'],$data,$data['cache']);
        }

        //m3u8资源处理
        $type = $this->get_type($data['url']);
        if(!empty($data['m3u8']) && $type == 'm3u8'){
            $this->mkDirs("qq602524950/".$jx_data['from']);
            $m3u8_txt = $this->Curl_get($data['url']);
            if(strpos($m3u8_txt,'#EXTM3U') !== FALSE){
                @file_put_contents($file,$m3u8_txt);
            }
        }

        return  $data;
    }


    /**
     * 获取m3u8缓存文件地址
     * @param string file
     * @param string time
     * @param string cache
     * @param string url
     * @param string config
     * @param string from
     * @param string expand
     * @return array
     */
    private function m3u8_cache_read($file,$time,$cache,$url,$config,$from,$expand):array
    {
        if(!empty($time)){
            $mtime=@filemtime($file);
            $file_time = file_exists($file);
            $url = $this->m3u8_url($file,$expand,$from,$url);
            if($file_time && time() - $mtime < $time) {
                return [
                    'code'=>200,
                    'url'=>'/player/'.$url,
                    'type'=>'auto',
                    'cache'=>'',
                    'm3u8'=>'',
                    'expand'=>''
                ];
            }else if($file_time && $time == '1') {
                return [
                    'code'=>200,
                    'url'=>'/player/'.$url,
                    'type'=>'auto',
                    'cache'=>'',
                    'm3u8'=>'',
                    'expand'=>''
                ];
            }
        }

        if(!empty($cache)){
            if($config['redis_type'] == '1'){
                $redis = new FileClass();
            }else{
                $redis = new RedisClass(['host'=>$config['redis_host'],'port'=>$config['redis_port'],'password'=>$config['redis_pass']]);
            }
            $url = $redis->get($url);
            if(!empty($url)){
                return $url;
            }
        }

        return ['code'=>203];
    }


    /**
     * 接入m3u8扩展插件
     */
    private  function m3u8_url($file,$expand,$from,$url){
        if($expand == '1'){
            $ip = $_SERVER['REMOTE_ADDR'];
            $time = time();
            $name = 'qq602524950/'.$from.'/'.md5($url);

            $sign = md5("c4a0b923".$ip."8c509a".$name."6f758".$time."49b");//4处字符串自己修改
            return '../api/v1/mau8.php?name='.$name.'&time='.$time.'&ip='.$ip.'&key='.$sign.'&index.m3u8';
        }

        return $file;
    }


    /**
     * 判断资源类型
     * @param string url  资源地址
     * @return string
     */
    private function get_type($url):string
    {
        $type = 'mp4';
        //if(strpos($url,'.mp4') !== false){
        //    $type = 'mp4';
        //}elseif (strpos($url,'.flv') !== false){
        //    $type = 'flv';
        //}
        if (preg_match("/.flv(#|\?|$)/i",$url)) {
            $t = 'flv';
        } else if (preg_match("/m3u8(#|\?|$)/i",$url)) {
            $t = 'm3u8';
        } else if (preg_match("/.php(#|\?|$)/i",$url)) {
            $t = 'm3u8';
        } else if (preg_match("/.css(#|\?|$)/i",$url)) {
            $t = 'm3u8';
        } else if (preg_match("/.png(#|\?|$)/i",$url)) {
            $t = 'm3u8';
        }
        return $type;
    }


    /**
     * 生成所有线路
     * @param array data   文件名字
     * @return string
     */
    private function line($data):string
    {

        $html = '';
        $i=1;
        while($i<=$data['number'])
        {
            if($i == $data['index']){
                //$html = $html.'<a class="on" href="javascript:">解析'.$i.'</a>';
            }else{
                $html = $html.'<a href="/player/index.php?code='.$data['code'].'&key='.($i-1).'&from='.$data['from'].'&url='.$data['url'].'">接口'.$i.'</a>';
            }
            $i++;
        }
        return $html;

    }

    /**
     * 创建文件夹
     * @param string $path   文件名字
     * @param string $mode   文件夹权限
     * @return bool
     */
    private function mkDirs($path='', $mode = 0755):bool
    {
        if (!is_dir(dirname($path))){
            $this->mkDirs(dirname($path));
        }
        if(!file_exists($path)){
            return @mkdir($path,$mode);
        }
        return true;
    }

    /**
     * 随机抽取一张图片
     * @param string "图片集字符串"
     * @return string "随机返回一个图片地址"
     */
    public function Random_graph($ImgText):string
    {
        $imgData = explode("#", $ImgText);
        $k = rand(0,count($imgData)-1);
        return $imgData[$k];
    }


    /**
     * AES加密
     * @param string data
     * @param string encryptKey
     * @param string localIV
     * @return string
     */
    public function Encrypt($data,$encryptKey,$localIV):string
    {
        if (PHP_VERSION >= 7.1) {
            return base64_encode(openssl_encrypt($data, 'aes-128-cbc', $encryptKey, OPENSSL_RAW_DATA, $localIV));
        } else {
            $module = mcrypt_module_open(MCRYPT_RIJNDAEL_128, '', MCRYPT_MODE_CBC, $localIV);
            mcrypt_generic_init($module, $encryptKey, $localIV);
            $block = mcrypt_get_block_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC);
            $pad = $block - (strlen($data) % $block);
            $data .= str_repeat(chr($pad), $pad);
            $encrypted = mcrypt_generic($module, $data);
            mcrypt_generic_deinit($module);
            mcrypt_module_close($module);
            return base64_encode($encrypted);
        }
    }

    /**
     * AES解密
     * @param string data
     * @param string encryptKey
     * @param string localIV
     * @return string
     */
    public function Decrypt($data,$encryptKey,$localIV):string
    {
        if (PHP_VERSION >= 7.1) {
            return openssl_decrypt(base64_decode($data), 'aes-128-cbc', $encryptKey, 1, $localIV);
        } else {
            $module = mcrypt_module_open(MCRYPT_RIJNDAEL_128, '', MCRYPT_MODE_CBC, $localIV);
            mcrypt_generic_init($module, $encryptKey, $localIV);
            $data = mdecrypt_generic($module, base64_decode($data));
            $data = str_replace("", "", $data);
            return $data;
        }
    }

    /**
     * 随机字符串
     * @param string len
     * @return string
     */
    public function string($len = 6):string
    {
        $chars = array(
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
            "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
            "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G",
            "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
            "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2",
            "3", "4", "5", "6", "7", "8", "9"
        );
        $charsLen = count($chars) - 1;
        shuffle($chars);
        $output = "";
        for ($i = 0; $i < $len; $i++) {
            $output .= $chars[mt_rand(0, $charsLen)];
        }
        return $output;
    }

    /**
     * 请求
     * @param string url       请求网址
     * @param string type      返回类型 html/json
     * @param string post      请求类型
     * @param string ua        请求头
     * @return string|array
     */
    private function Curl_get($url,$type=false,$ua='',$post=0)
    {
        $ip = $_SERVER['REMOTE_ADDR'];
        $url = str_replace("{ip}",$ip,$url);
        $ch = @curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 15);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);
        curl_setopt($ch, CURLOPT_HEADER,0);
        curl_setopt($ch, CURLOPT_POST, $post);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 1);
        if (!empty($ua)) {
            curl_setopt($ch, CURLOPT_HTTPHEADER, explode(",", $ua));
        }
        $data = @curl_exec($ch);
        curl_close($ch);
        if($type == true){
            return json_decode($data, true);
        }
        return $data;
    }


    private function sql_zm($mid){
        $table = $this->sql_c['prefix'].'zimu';
        $pdo = new PDO('mysql:host=127.0.0.1;dbname='.$this->sql_c['username'],$this->sql_c['username'],$this->sql_c['password']);
        $sql = "SELECT text FROM `$table` WHERE mid = '".$mid."'";
        $res = $pdo ->query($sql);
        $row = $res -> fetch(PDO::FETCH_ASSOC);
        $pdo = null;
        if($row){
            return $row['text'];
        }
    }




    private function sql_ip($ip){
        $content = date('Y-m-d H:i:s', time())."超过请求限制#";
        $time = time();

        $table = $this->sql_c['prefix'].'ad';
        $pdo = new PDO('mysql:host=127.0.0.1;dbname='.$this->sql_c['username'],$this->sql_c['username'],$this->sql_c['password']);
        $sql = "SELECT content,id FROM `$table` WHERE ip = '".$ip."'";
        $res = $pdo ->query($sql);
        $row = $res -> fetch(PDO::FETCH_ASSOC);
        if($row){
            $sql = "UPDATE `$table` SET `content`=?,`updatetime`=? WHERE `id`=?";
            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(1,$content.$row['content']);
            $stmt->bindValue(2,$time);
            $stmt->bindValue(3,$row['id']);
        }else{
            $sql = "INSERT INTO `$table` (`ip`, `content`, `updatetime`, `createtime`) VALUES (:ip,:content,:time,:time) ";
            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(':ip',$ip);
            $stmt->bindValue(':content',$content);
            $stmt->bindValue(':time',$time);
        }
        $stmt->execute();
        $stmt->rowCount();
        $stmt = null;
        $pdo = null;
    }

}