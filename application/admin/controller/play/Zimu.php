<?php

namespace app\admin\controller\play;

use app\common\controller\Backend;
use Exception;
use think\Db;
use think\exception\DbException;
use think\exception\PDOException;
use think\exception\ValidateException;


/**
 * 弹幕列管理
 *
 * @icon fa fa-circle-o
 */
class Zimu extends Backend
{

    /**
     * Zimu模型对象
     * @var \app\admin\model\play\Zimu
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\play\Zimu;

    }


    /**
     * 添加
     *
     * @return string
     * @throws \think\Exception
     */
    public function add()
    {
        $this->view->assign('row_url', url('play/zimu/up'));

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
     * 编辑
     *
     * @param $ids
     * @return string
     * @throws DbException
     * @throws \think\Exception
     */
    public function edit($ids = null)
    {
        $row = $this->model->get($ids);
        $row['url'] = url('play/zimu/up');

        if (!$row) {
            $this->error(__('No Results were found'));
        }
        $adminIds = $this->getDataLimitAdminIds();
        if (is_array($adminIds) && !in_array($row[$this->dataLimitField], $adminIds)) {
            $this->error(__('You have no permission'));
        }
        if (false === $this->request->isPost()) {
            $this->view->assign('row', $row);
            return $this->view->fetch();
        }
        $params = $this->request->post('row/a');
        if (empty($params)) {
            $this->error(__('Parameter %s can not be empty', ''));
        }
        $params = $this->preExcludeFields($params);
        $result = false;
        Db::startTrans();
        try {
            //是否采用模型验证
            if ($this->modelValidate) {
                $name = str_replace("\\model\\", "\\validate\\", get_class($this->model));
                $validate = is_bool($this->modelValidate) ? ($this->modelSceneValidate ? $name . '.edit' : $name) : $this->modelValidate;
                $row->validateFailException()->validate($validate);
            }
            $result = $row->allowField(true)->save($params);
            Db::commit();
        } catch (ValidateException|PDOException|Exception $e) {
            Db::rollback();
            $this->error($e->getMessage());
        }
        if (false === $result) {
            $this->error(__('No rows were updated'));
        }
        $this->success();
    }

    /**
     * 上传字幕文件
     */
    public function up()
    {
        if (Request()->isPost()) {

            if ($_FILES["avatar"]["error"] > 0)
            {
                return json([
                    'tips'  =>  '错误:'.$_FILES["avatar"]["error"],
                ]);
            }else{

                $suffix = strtolower(pathinfo($_FILES["avatar"]['name'], PATHINFO_EXTENSION));
                $suffix = $suffix && preg_match("/^[a-zA-Z0-9]+$/", $suffix) ? $suffix : 'file';

                if (in_array($_FILES["avatar"]['type'], ['text/x-php', 'text/html']) || in_array($suffix, ['php', 'html', 'htm', 'phar', 'phtml']) || preg_match("/^php(.*)/i", $suffix))
                {
                    return json([
                        'tips'  =>  '禁止文件名携带php,html,htm,phar,phtml',
                    ]);
                }

                $dest = 'player/subtitle/'.date("Ymd");
                if (!is_dir($dest)) {
                    mkdir($dest, 0755, true);
                }

                $url = $dest.'/'.$_FILES["avatar"]['name'];
                move_uploaded_file($_FILES["avatar"]["tmp_name"],$url);

                return json([
                    'tips'  =>  'ok',
                    'url' => $url
                ]);

            }
        }

        if($_GET['id'] == 2){

            $fil= htmlspecialchars(urldecode(trim($_GET['fil'])));
            $fil = "player/subtitle/".substr($fil, 17);

            if(file_exists($fil)) {
                unlink($fil);
            } else {
                return json([
                    'tips'  =>  '文件不存在',
                ]);
            }
            return json([
                'tips'  =>  '删除成功',
            ]);
        }

        return json([
            'tips'  =>  '参数错误',
        ]);

    }



}
