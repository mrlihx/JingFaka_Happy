<?php

/**
 * 内容管理
 */

namespace app\manage\controller;

use controller\BasicAdmin;
use think\Db;
use think\Request;
use app\common\model\Article as ArticleModel;
use app\common\model\ArticleCategory as CategoryModel;
use service\LogService;

class Article extends BasicAdmin {

    public function _initialize() {
        parent::_initialize();
        $this->assign('self_url', '#' . Request::instance()->url());
    }

    public function index() {
        $this->assign('title', '文章列表');

        ////////////////// 查询条件 //////////////////
        $query = [
            'title' => input('title/s', ''),
            'status' => input('status/s', ''),
            'date_range' => input('date_range/s', '', 'urldecode'),
        ];
        $where = $this->genereate_where($query);

        $ArticleModel = new ArticleModel;
        $articles = $ArticleModel->where($where)->order('top desc,id desc')->paginate(30, false, [
            'query' => $query
        ]);
        $this->assign('articles', $articles);
        // 分页
        $page = str_replace('href="', 'href="#', $articles->render());
        $this->assign('page', $page);

        $counts = $ArticleModel->where($where)->count();
        $this->assign('counts', $counts);

        return $this->fetch();
    }

    // 添加文章
    public function add() {
        if (!$this->request->isPost()) {
            $categorys = CategoryModel::all();
            $this->assign('categorys', $categorys);
            return $this->fetch('form');
        }
        $data = [
            'cate_id' => input('cate_id/d', 0),
            'title' => input('title/s', ''),
            'title_img' => input('title_img/s', ''),
            'description' => input('description/s', ''),
            'content' => input('content/s', ''),
            'status' => input('status/d', 1),
            'create_at' => $_SERVER['REQUEST_TIME'],
        ];
        if ($data['title'] === '') {
            $this->error('标题不能为空！');
        }
        $res = ArticleModel::create($data);
        if ($res !== false) {
            LogService::write('内容管理', '添加文章成功，ID:' . $res);
            $this->success('添加成功！', '');
        } else {
            $this->error('添加失败！');
        }
    }

    // 编辑文章
    public function edit() {
        $article_id = input('article_id/d', 0);
        $article = ArticleModel::get($article_id);
        if (!$article) {
            $this->error('不存在该文章！');
        }
        if (!$this->request->isPost()) {
            $categorys = CategoryModel::all();
            $this->assign('categorys', $categorys);
            $this->assign('article', $article);
            return $this->fetch('form');
        }
        $data = [
            'cate_id' => input('cate_id/d', 0),
            'title' => input('title/s', ''),
            'title_img' => input('title_img/s', ''),
            'description' => input('description/s', ''),
            'content' => input('content/s', ''),
            'status' => input('status/d', 1),
            'create_at' => strtotime(input('create_at/s', '', 'urldecode')),
        ];
        if ($data['title'] === '') {
            $this->error('标题不能为空！');
        }
        $res = ArticleModel::update($data, ['id' => $article_id]);
        if ($res !== false) {
            LogService::write('内容管理', '编辑文章成功，ID:' . $article_id);
            $this->success('更新成功！', '');
        } else {
            $this->error('更新失败！');
        }
    }

    /**
     * 生成查询条件
     */
    protected function genereate_where($params) {
        $where = [];
        $action = Request::instance()->action();
        switch ($action) {
            case 'index':
                if ($params['title']) {
                    $where['title'] = ['like', "%{$params['title']}%"];
                }
                if ($params['status']) {
                    $where['status'] = $params['status'];
                }
                if ($params['date_range'] && strpos($params['date_range'], ' - ') !== false) {
                    list($startDate, $endTime) = explode(' - ', $params['date_range']);
                    $where['create_at'] = ['between', [strtotime($startDate . ' 00:00:00'), strtotime($endTime . ' 23:59:59')]];
                }
                break;
        }
        return $where;
    }

    /**
     * 改变状态
     */
    public function change_status() {
        if (!$this->request->isAjax()) {
            $this->error('错误的提交方式！');
        }
        $id = input('id/d', 0);
        $status = input('value/d', 1);
        $res = Db::name('Article')->where([
                    'id' => $id,
                ])->update([
            'status' => $status
        ]);
        $remark = $status == 1 ? '显示' : '隐藏';
        if ($res !== false) {
            LogService::write('内容管理', $remark . '文章成功，ID:' . $id);
            $this->success('更新成功！', '');
        } else {
            $this->error('更新失败，请重试！');
        }
    }

    /**
     * 删除文章
     */
    public function del() {
        if ($this->request->isPost()) {
            $id = input('id/d', 0);

            $article = ArticleModel::get($id);

            if (empty($article)) {
                $this->error('文章不存在');
            }

            if ($article['is_system'] == 1) {
                $this->error('文章禁止删除');
            }

            $res = Db::name('Article')->where('id', $id)->delete();
            if (false !== $res) {
                LogService::write('内容管理', '删除文章成功，ID:' . $id);
                $this->success('删除成功');
            } else {
                $this->error('删除失败');
            }
        }
    }

    /**
     * 置顶文章
     */
    public function top() {
        if ($this->request->isPost()) {
            $id = input('id/d', 0);

            $article = ArticleModel::get($id);

            if (empty($article)) {
                $this->error('文章不存在');
            }

            $res = $article->save(['top' => time()], ['id' => $id]);
            if (false !== $res) {
                LogService::write('内容管理', '置顶文章成功，ID:' . $id);
                $this->success('置顶成功');
            } else {
                $this->error('置顶失败');
            }
        }
    }

}
