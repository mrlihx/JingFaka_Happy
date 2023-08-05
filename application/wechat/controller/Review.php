<?php

namespace app\wechat\controller;

use service\FileService;
use service\WechatService;
use think\Controller;
use think\Db;

class Review extends Controller
{

    /**
     * 显示手机预览
     * @return string
     */
    public function index()
    {
        $get = $this->request->get();
        $content = str_replace("\n", "<br>", $this->request->get('content', '')); // 内容
        $type = $this->request->get('type', 'text'); // 类型
        $this->assign('type', $type);
        // 图文处理
        if ($type === 'news' && is_numeric($content) && !empty($content)) {
            $news = WechatService::getNewsById($content);
            $this->assign('articles', $news['articles']);
        }
        // 文章预览
        if ($type === 'article' && is_numeric($content) && !empty($content)) {
            $article = Db::name('WechatNewsArticle')->where('id', $content)->find();
            if (!empty($article['content_source_url'])) {
                $this->redirect($article['content_source_url']);
            }
            $this->assign('vo', $article);
        }
        $this->assign($get);
        $this->assign('content', $content);
        // 渲染模板并显示
        return view();
    }

    /**
     * 微信图片显示
     */
//    public function img()
//    {
//        $url = $this->request->get('url', '');
//        $filename = FileService::getFileName($url, 'jpg', 'tmp/');
//        if (false === ($img = FileService::getFileUrl($filename))) {
//            $info = FileService::save($filename, file_get_contents($url));
//            $img = (is_array($info) && isset($info['url'])) ? $info['url'] : $url;
//        }
//        $this->redirect($img);
//    }

}
