<?php

namespace app\admin\controller\play;

use Exception;
use think\Db;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\exception\DbException;
use think\exception\PDOException;
use think\exception\ValidateException;

use app\common\controller\Backend;
/**
 * 无限分身
 *
 * @icon fa fa-play
 */
class Play extends Backend
{

    /**
     * Play模型对象
     * @var \app\admin\model\play\Play
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\play\Play;
        $this->view->assign("statusList", $this->model->getStatusList());
    }


    /**
     * 添加
     *
     * @return string
     * @throws \think\Exception
     */
    public function add()
    {

        /*返回模板*/
        if (false === $this->request->isPost()) {
            return $this->view->fetch();
        }

        $params = $this->request->post('row/a');
        if (empty($params)) {
            $this->error(__('Parameter %s can not be empty', ''));
        }
        $params = $this->preExcludeFields($params);
        if ($this->dataLimit && $this->dataLimitFieldAutoFill) {
            $params[$this->dataLimitField] = $this->auth->id;
        }

        $route =  APP_PATH . "extra/".$params['code'].".php";
        if(!file_exists($route)){
            $file = APP_PATH . "extra/play.php";
            if(!copy($file, $route)){
                $this->error('播放器配置文件复制失败！');
            }
        }else{
            $this->error('播放器编码重复');
        }

        $result = false;
        Db::startTrans();
        try {
            //是否采用模型验证
            if ($this->modelValidate) {
                $name = str_replace("\\model\\", "\\validate\\", get_class($this->model));
                $validate = is_bool($this->modelValidate) ? ($this->modelSceneValidate ? $name . '.add' : $name) : $this->modelValidate;
                $this->model->validateFailException()->validate($validate);
            }
            $result = $this->model->allowField(true)->save($params);
            Db::commit();
        } catch (ValidateException|PDOException|Exception $e) {
            Db::rollback();
            $this->error($e->getMessage());
        }
        if ($result === false) {
            $this->error(__('No rows were inserted'));
        }
        $this->success();
    }


    /**
     * 删除
     *
     * @param $ids
     * @return void
     * @throws DbException
     * @throws DataNotFoundException
     * @throws ModelNotFoundException
     */
    public function del($ids = null)
    {
        if (false === $this->request->isPost()) {
            $this->error(__("Invalid parameters"));
        }
        $ids = $ids ?: $this->request->post("ids");
        if (empty($ids)) {
            $this->error(__('Parameter %s can not be empty', 'ids'));
        }
        $pk = $this->model->getPk();
        $adminIds = $this->getDataLimitAdminIds();
        if (is_array($adminIds)) {
            $this->model->where($this->dataLimitField, 'in', $adminIds);
        }
        $list = $this->model->where($pk, 'in', $ids)->select();

        $count = 0;
        Db::startTrans();
        try {
            foreach ($list as $item) {
                $count += $item->delete();
            }
            Db::commit();
        } catch (PDOException|Exception $e) {
            Db::rollback();
            $this->error($e->getMessage());
        }
        if ($count) {
            $status=unlink(APP_PATH . "extra/".$list[0]['code'].".php");
            if(!$status){
                $this->error('播放器配置文件删除失败！');
            }
            $this->success();
        }
        $this->error(__('No rows were deleted'));
    }


}
