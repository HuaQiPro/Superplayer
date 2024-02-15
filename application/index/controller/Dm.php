<?php
/**
 * 超级播放器弹幕api（禁止删除修改版权信息）
 * @version 3.0
 * @author Sweet seven <602524950@qq.com>
 */
namespace app\index\controller;
use think\Db;
use think\Cache;

class Dm
{
    /**
     * 弹幕接口
     * @return mixed
     */
    public function index()
    {
        $config = config("jx");

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            $input = json_decode(file_get_contents('php://input'), true);

            $sql_data = [];
            if(!empty($input["type"])){
                $sql_data["type"] = htmlspecialchars(urldecode(trim($input["type"])));
            }
            if(!empty($input["player"])){
                $sql_data["id"] = htmlspecialchars(urldecode(trim($input["player"])));
            }
            if(!empty($input["time"])){
                $sql_data["videotime"] = htmlspecialchars(urldecode(trim($input["time"])));
            }
            if(empty($input["text"])){
                return json(['code' => -1, 'msg' => '弹幕内容不可以为空']);
            }
            $text = htmlspecialchars(urldecode(trim($input["text"])));
            if($config['other']['danMu_pro'] == 1){
                if (!preg_match('/[^\x00-\x80]/',$text)) {
                    return json(['code' => -1, 'msg' => '弹幕内容中必须包含中文']);
                }
            }
            if(!empty($config['other']['danMu_vab'])){
                $str_contraband  = $this->contraband($text,$config['other']['danMu_vab']);
                if($str_contraband == false){
                    return json(['code' => -1, 'msg' => '弹幕内容包含违规词请修改后在发布']);
                }
            }
            $sql_data["text"] = $text;

            if(!empty($input["color"])){
                $sql_data["color"] = htmlspecialchars(urldecode(trim($input["color"])));
            }
            $ip = $this->ip();
            $sql_data["ip"] = $ip;
            $sql_data["createtime"] = time();
            $sql_data["status"] = $config['other']['danMu_audit'] == 1 ? 0 : 1;
            $sql_data['size'] = '0';
            $sql_data['color'] = '#fff';

            Db::name('danmu')->insert($sql_data);
            return json(['code' => 23, 'msg' => '发送成功~']);
        }

        $get = input();
        if (!empty($get['id'])) {
            $id = htmlspecialchars(urldecode(trim($get['id'])));
            $mes = $this->sql($id,$config['other']['danMu_cache']);
            $length = count($mes);

            if ($length == 0) {
                $mov = $config['lg']['dm-welcome'];
            } else {
                $mov = '💥'. $length . $config['lg']['dm-npo'];
            }
            $tips = [2, "right", "#fff", "", "$mov"];
            $tips1 = [6, "top", '#fb7299', "", $config['lg']['dm-rule']];
            array_unshift($mes, $tips, $tips1);

            return json(['code' => 23, 'name' => $id, 'danum' => $length, 'danmuku' => $mes]);
        }

        return json(['code' => -1, 'msg' => '参数错误']);
    }


    /**
     * 弹幕内容查询
     * @param string id 弹幕id
     * @param string cache 缓存时间
     * @access private
     * @throws $red throw an error if the argument is null.
     * @return mixed
     */
    private function sql($id,$cache)
    {
        if(empty($cache)){
            $where=[];$where['id'] = $id;$where['status'] = ['eq',1];
            $red = Db::name('danmu')->field('type,color,videotime,text')->where($where)->select();

            $arr = [];
            foreach ($red as $k => $v) {
                $arr[$k][] = (float)$v['videotime'];
                $arr[$k][] = (string)$v['type'];
                $arr[$k][] = (string)$v['color'];
                $arr[$k][] = '';
                $arr[$k][] = (string)$v['text'];
            }
            return $arr;

        }else{
            $res = Cache::get($id);
            if(!empty($res)) {
                return $res;
            }

            $where=[];$where['id'] = $id;$where['status'] = ['eq',1];
            $red = Db::name('danmu')->field('type,color,videotime,text')->where($where)->select();

            $arr = [];
            foreach ($red as $k => $v) {
                $arr[$k][] = (float)$v['videotime'];
                $arr[$k][] = (string)$v['type'];
                $arr[$k][] = (string)$v['color'];
                $arr[$k][] = '';
                $arr[$k][] = (string)$v['text'];
            }

            Cache::set($id, $arr, $cache);//这里设置弹幕内容缓存1小时
            return $arr;
        }
    }


    /**
     * 获取客户端IP地址
     * @return mixed
     */
    private function ip():string
    {
        $ip = "";
        if (isset($_SERVER['REMOTE_ADDR'])){
            $ip = $_SERVER['REMOTE_ADDR'];
        }elseif(isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $arr = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
            $pos = array_search('unknown', $arr);
            if (false !== $pos) {
                unset($arr[$pos]);
            }
            $ip = trim(current($arr));
        } elseif (isset($_SERVER['HTTP_CLIENT_IP'])) {
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (isset($_SERVER['REMOTE_ADDR'])) {
            $ip = $_SERVER['REMOTE_ADDR'];
        }

        //验证ip合法
        $long = sprintf("%u", ip2long($ip));
        $ip   = $long ? $ip : "0.0.0.0";
        return $ip;
    }


    /**
     * 违禁词搜索
     * @param string  text  搜索文本
     * @param string  words 违规词字文本
     * @return bool
     */
    private function contraband($text,$words):bool
    {
        $str_type = true;
        $arr = explode(",",$words);
        foreach($arr as $a){
            if(strpos($text,$a) !== false){
                $str_type = false;
                break;
            }
        }
        return $str_type;
    }
}