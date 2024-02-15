<?php
namespace app\admin\controller\play;
use app\common\controller\Backend;
/**
 * 解析配置
 * @internal
 */
class Jx extends Backend
{

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\play\Play;
    }

    /**
     * 播放器配置
     */
    public function index()
    {

        /*判断操作权限*/
        $adminIds = $this->getDataLimitAdminIds();
        if (is_array($adminIds)) {
            $this->error(__('You have no permission'));
        }

        //修改配置信息
        $config = config('jx');
        if ($this->request->isPost()) {
            $this->token();
            $params = $this->request->post("", [], 'trim,strip_tags,xss_clean');
            if(!empty($params['api'])){
                $params['api'] = str_replace("\r\n","#",$params['api']);
                $params['api'] = str_replace("\n","#",$params['api']);
                $configData = [];
                $data = explode("#", $params['api']);
                foreach ($data as $k => $v){
                    $apiData = explode("$", $v);
                    $apiFrom = explode(",", $apiData[0]);
                    foreach ($apiFrom as $k2 => $v2){
                        $configData[$v2][] = $apiData[1];
                    }
                }

                $params['jx'] = $configData;
            }
            $config_new = array_merge($config,$params);
            $res = ec_arr2file(APP_PATH . "extra/jx.php", $config_new);
            if ($res === false) {
                return $this->error("保存失败，请重试!");
            }
            return $this->success("保存成功!");
        }
        $config['api'] = str_replace("#","\n",$config['api']);
        $this->view->assign('player', $config);
        return $this->view->fetch();

    }
}
