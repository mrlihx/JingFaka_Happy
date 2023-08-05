<?php

namespace app\index\controller;

use app\common\model\Article as ArticleModel;
use app\common\model\ArticleCategory as ArticleCategoryModel;
use think\Controller;
use think\Db;
use think\Request;

class Index extends Base {

    public function __construct() {
        parent::__construct();
    }

    public function index() {
        //订单成交次数
        $stat['orderCount'] = Db::table('order')->where('status', 1)->count();
        //订单总额
        $stat['orderSum'] = Db::table('order')->where('status', 1)->sum('total_price');
        //商户个数
        $stat['userCount'] = Db::table('user')->count();
        foreach ($stat as $k => $v) {
            $stat[$k] += 0;
        }
        //结算公告
        $withdrawNotice = [];
        $category = ArticleCategoryModel::get(['alias' => 'settlement', 'status' => 1]);
        if ($category) {
            $withdrawNotice = Db::name('article')->where('cate_id', $category->id)->limit(0, 6)->order('top desc,id desc')->select();
            foreach ($withdrawNotice as $k => $v) {
                if (time() - $v['create_at'] < 86400) {
                    $withdrawNotice[$k]['is_new'] = 1;
                } else {
                    $withdrawNotice[$k]['is_new'] = 0;
                }
            }
        }

        //新闻动态
        $newsList = [];
        $category = ArticleCategoryModel::get(['alias' => 'news', 'status' => 1]);
        if ($category) {
            $newsList = Db::name('article')->where('cate_id', $category->id)->limit(0, 5)->order('top desc,id desc')->select();
        }

        //系统公告
        $announceList = [];
        $category = ArticleCategoryModel::get(['alias' => 'notice', 'status' => 1]);
        if ($category) {
            $announceList = Db::name('article')->where('cate_id', $category->id)->limit(0, 5)->order('top desc,id desc')->select();
        }
        $this->assign('stat', $stat);
        $this->assign('withdrawNotice', $withdrawNotice);
        $this->assign('newsList', $newsList);
        $this->assign('announceList', $announceList);
        return $this->fetch();
    }

    public function app() {
        return $this->fetch();
    }

    public function faq() {
        $category = ArticleCategoryModel::get(['alias' => 'faq', 'status' => 1]);
        $cate_id = -1;
        if ($category) {
            $cate_id = $category->id;
        }
        $articles = ArticleModel::where(['cate_id' => $cate_id, 'status' => 1])->order('top desc, id desc')->paginate(15, false, [
            'query' => input(),
        ]);
        $page = $articles->render();
        $this->assign('page', $page);
        $this->assign('category', $category);
        $this->assign('articles', $articles);
        return $this->fetch();
    }

    //系统公告
    public function notice() {
        $category = ArticleCategoryModel::get(['alias' => 'notice', 'status' => 1]);
        $cate_id = -1;
        if ($category) {
            $cate_id = $category->id;
        }
        $articles = ArticleModel::where(['cate_id' => $cate_id, 'status' => 1])->order('top desc, id desc')->paginate(15, false, [
            'query' => input(),
        ]);
        $page = $articles->render();
        $this->assign('page', $page);
        $this->assign('category', $category);
        $this->assign('articles', $articles);
        return $this->fetch();
    }

    //新闻资讯
    public function news() {
        $category = ArticleCategoryModel::get(['alias' => 'news', 'status' => 1]);
        $cate_id = -1;
        if ($category) {
            $cate_id = $category->id;
        }
        $articles = ArticleModel::where(['cate_id' => $cate_id, 'status' => 1])->order('top desc, id desc')->paginate(15, false, [
            'query' => input(),
        ]);
        $page = $articles->render();
        $this->assign('page', $page);
        $this->assign('category', $category);
        $this->assign('articles', $articles);
        return $this->fetch();
    }

    //结算公告
    public function settlement() {
        $category = ArticleCategoryModel::get(['alias' => 'settlement', 'status' => 1]);
        $cate_id = -1;
        if ($category) {
            $cate_id = $category->id;
        }
        $articles = ArticleModel::where(['cate_id' => $cate_id, 'status' => 1])->order('top desc, id desc')->paginate(15, false, [
            'query' => input(),
        ]);
        $page = $articles->render();
        $this->assign('page', $page);
        $this->assign('category', $category);
        $this->assign('articles', $articles);
        return $this->fetch();
    }

    public function contact() {
        return $this->fetch();
    }

    public function content() {
        $id = input('id/d', 0);
        if ($id <= 0) {
            $this->error('参数错误');
        }
        $data = Db::name('article')->where('id', $id)->find();
        if (empty($data)) {
            $this->error('文章不存在');
        }
        $category = ArticleCategoryModel::get(['id' => $data['cate_id']]);
        Db::name('article')->where('id', $id)->setInc('views');
        //上一页
        $pre = Db::name('article')->where(['id' => ['lt', $id], 'cate_id' => $category['id']])->order('id desc')->find();
        //下一页
        $next = Db::name('article')->where(['id' => ['gt', $id], 'cate_id' => $category['id']])->order('id asc')->find();
        $this->assign('data', $data);
        $this->assign('category', $category);
        $this->assign('pre', $pre);
        $this->assign('next', $next);
        return $this->fetch();
    }

    //注册协议
    public function agreement() {
        $data = Db::name('article')->where('id', 13)->find();
        $this->assign('data', $data);
        return $this->fetch();
    }

    //用户协议
    public function service_agreement() {
        $data = Db::name('article')->where('id', 15)->find();
        $this->assign('data', $data);
        return $this->fetch('agreement');
    }

    //关于我们
    public function about_us() {
        return $this->fetch('aboutus');
    }

}
