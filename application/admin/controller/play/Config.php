<?php
namespace app\admin\controller\play;
use app\common\controller\Backend;
/**
 * 播放器
 * @internal
 */
class Config extends Backend
{

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\play\Play;
    }

    /**
     * 播放器配置
     */
    public function index($ids = null)
    {
        /*查询数据*/
        $row = $this->model->get($ids);
        if (!$row) {
            $this->error(__('No Results were found'));
        }
        /*判断操作权限*/
        $adminIds = $this->getDataLimitAdminIds();
        if (is_array($adminIds) && !in_array($row[$this->dataLimitField], $adminIds)) {
            $this->error(__('You have no permission'));
        }
        //修改配置信息
        $configName = $row['code'];
        $config = config($configName);
        if ($this->request->isPost()) {
            $this->token();
            $params = $this->request->post("", [], 'trim,strip_tags,xss_clean');
            unset($params['__token__']);

            if(!empty($params['danMu_length'])){
                if($params['danMu_length'] > 30){
                    return $this->error("弹幕内容长度不可超过30");
                }
            }
            if(!empty($params['random_img'])){
                $params['random_img'] = str_replace("\r\n","\n",$params['random_img']);
                $params['random_img'] = str_replace( "\n","#",$params['random_img']);
            }
            if(!empty($params['dp']['contextmenu'])){
                $params['dp']['contextmenu'] = str_replace("\r\n","\n",$params['dp']['contextmenu']);
                $params['dp']['contextmenu'] = str_replace( "\n","#",$params['dp']['contextmenu']);
            }
            if(!empty($params['danMu_api'])){
                $params['danMu_api'] = str_replace("\r\n","\n",$params['danMu_api']);
                $params['danMu_api'] = str_replace( "\n","#",$params['danMu_api']);
            }

            $config_new = array_merge($config,$params);
            $res = ec_arr2file(APP_PATH . "extra/".$configName.".php", $config_new);
            if ($res === false) {
                return $this->error("保存失败，请重试!");
            }
            return $this->success("保存成功!");
        }

        $config['random_img'] = str_replace( "#","\n",$config['random_img']);
        $config['danMu_api'] = str_replace( "#","\n",$config['danMu_api']);
        $config['dp']['contextmenu'] = str_replace( "#","\n",$config['dp']['contextmenu']);

        $this->view->assign('player', $config);
        return $this->view->fetch();
    }
}
