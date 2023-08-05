<?php
/**
 * 文章分类管理
 */

namespace app\manage\controller;

use controller\BasicAdmin;
use think\Db;
use think\Request;
use app\common\model\Article as ArticleModel;
use app\common\model\ArticleCategory as CategoryModel;
use service\LogService;

class ArticleCategory extends BasicAdmin
{
    public function _initialize()
    {
        parent::_initialize();
        $this->assign('self_url','#'.Request::instance()->url());
    }

    public function index()
    {
        $this->assign('title','文章分类');
        $categorys=CategoryModel::all();
        $this->assign('categorys',$categorys);
        return $this->fetch();
    }


    // 添加文章分类
    public function add()
    {
        if(!$this->request->isPost())
        {
            $categorys=CategoryModel::all();
            $this->assign('categorys',$categorys);
            return $this->fetch('form');
        }
        $pid  =input('pid/d',0);
        if($pid==0){
            $path ='0';
        }else{
            $parent=CategoryModel::get($pid);
            if(!$parent){
                $this->error('不存在该上级分类！');
            }
            $path="{$parent->path},{$pid}";
        }
        $data=[
            'pid'       =>$pid,
            'path'      =>$path,
            'name'      =>input('name/s',''),
            'alias'     =>input('alias/s',''),
            'remark'    =>input('remark/s',''),
            'status'    =>input('status/d',1),
            'create_at' =>$_SERVER['REQUEST_TIME'],
        ];
        if($data['name']===''){
            $this->error('分类名不能为空！');
        }
        if($data['alias']!==''){
            $res=CategoryModel::get(['alias'=>$data['alias']]);
            if($res){
                $this->error('已存在该别名！');
            }
        }
        $res=CategoryModel::create($data);
        if($res!==false){
            LogService::write('内容管理', '添加文章分类成功，ID:'.$res);
            $this->success('添加成功！','');
        }else{
            $this->error('添加失败！');
        }
    }

    // 编辑文章分类
    public function edit()
    {
        $cate_id=input('cate_id/d',0);
        $category=CategoryModel::get($cate_id);
        if(!$category){
            $this->error('不存在该分类！');
        }
        if(!$this->request->isPost())
        {
            $categorys=CategoryModel::all();
            $this->assign('categorys',$categorys);
            $this->assign('category',$category);
            return $this->fetch('form');
        }
        $pid  =input('pid/d',0);
        if($pid==0){
            $path ='0';
        }else{
            $parent=CategoryModel::get($pid);
            if(!$parent){
                $this->error('不存在该上级分类！');
            }
            $path="{$parent->path},{$pid}";
        }
        $data=[
            'pid'       =>$pid,
            'path'      =>$path,
            'name'      =>input('name/s',''),
            'alias'     =>input('alias/s',''),
            'remark'    =>input('remark/s',''),
            'status'    =>input('status/d',1),
            'create_at' =>$_SERVER['REQUEST_TIME'],
        ];
        if($data['name']===''){
            $this->error('分类名不能为空！');
        }
        if($data['alias']!==''){
            $res=CategoryModel::get(['id'=>['<>',$cate_id],'alias'=>$data['alias']]);
            if($res){
                $this->error('已存在该别名！');
            }
        }
        $res=CategoryModel::update($data,['id'=>$cate_id]);
        if($res!==false){
            LogService::write('内容管理', '编辑文章分类成功，ID:'.$cate_id);
            $this->success('更新成功！','');
        }else{
            $this->error('更新失败！');
        }
    }

    /**
     * 生成查询条件
     */
    protected function genereate_where($params)
    {
        $where = [];
        $action=Request::instance()->action();
        switch($action){
            case 'index':
                break;
        }
        return $where;
    }


    /**
     * 改变状态
     */
    public function change_status()
    {
        if(!$this->request->isAjax()){
            $this->error('错误的提交方式！');
        }
        $id=input('id/d',0);
        $status=input('value/d',1);
        $res=Db::name('ArticleCategory')->where([
            'id'=>$id,
        ])->update([
            'status'=>$status
        ]);
        $remark = $status == 1 ? '显示' : '隐藏';
        if($res!==false){
            LogService::write('内容管理', $remark.'文章分类成功，ID:'.$id);
            $this->success('更新成功！', '');
        }else{
            $this->error('更新失败，请重试！');
        }
    }


    /**
     * 删除文章分类
     */
    public function del()
    {
        if($this->request->isPost()) {
            $id = input('id/d',0);
            $res = Db::name('ArticleCategory')->where('id',$id)->delete();
            if(false !== $res) {
                LogService::write('内容管理', '删除文章分类成功，ID:'.$id);
                $this->success('删除成功');
            } else {
                $this->error('删除失败');
            }
        }
    }
}
