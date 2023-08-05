<?php

// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2019 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: zhangyajun <448901948@qq.com>
// +----------------------------------------------------------------------

namespace page;

use think\Paginator;

/**
 * Bootstrap 分页驱动
 */
class Index extends Paginator {

    /**
     * 上一页按钮
     * @param string $text
     * @return string
     */
    protected function getPreviousButton(string $text = '<i class="bx bx-chevron-left"></i>'): string {

        if ($this->currentPage() <= 1) {
            return '<li class="page-item previous disabled"><a class="page-link" href="#">' . $text . '</a></li>';
        }

        $url = $this->url(
                $this->currentPage() - 1
        );

        if ($this->currentPage() == $text) {
            return '<li class="page-item previous active"><a class="page-link" href="#">' . $text . '</a></li>';
        }

        return '<li class="page-item previous"><a class="page-link" href="' . htmlentities($url) . '">' . $text . '</a></li>';
    }

    /**
     * 下一页按钮
     * @param string $text
     * @return string
     */
    protected function getNextButton(string $text = '<i class="bx bx-chevron-right"></i>'): string {
        if (!$this->hasMore) {
            return '<li class="page-item next disabled"><a class="page-link" href="#">' . $text . '</a></li>';
        }

        $url = $this->url($this->currentPage() + 1);

        if ($this->currentPage() == $text) {
            return '<li class="page-item next active"><a class="page-link" href="#">' . $text . '</a></li>';
        }

        return '<li class="page-item next"><a class="page-link" href="' . htmlentities($url) . '">' . $text . '</a></li>';
    }

    /**
     * 页码按钮
     * @return string
     */
    protected function getLinks(): string {
        if ($this->simple) {
            return '';
        }

        $block = [
            'first' => null,
            'slider' => null,
            'last' => null,
        ];

        $side = 3;
        $window = $side * 2;

        if ($this->lastPage < $window + 6) {
            $block['first'] = $this->getUrlRange(1, $this->lastPage);
        } elseif ($this->currentPage <= $window) {
            $block['first'] = $this->getUrlRange(1, $window + 2);
            $block['last'] = $this->getUrlRange($this->lastPage - 1, $this->lastPage);
        } elseif ($this->currentPage > ($this->lastPage - $window)) {
            $block['first'] = $this->getUrlRange(1, 2);
            $block['last'] = $this->getUrlRange($this->lastPage - ($window + 2), $this->lastPage);
        } else {
            $block['first'] = $this->getUrlRange(1, 2);
            $block['slider'] = $this->getUrlRange($this->currentPage - $side, $this->currentPage + $side);
            $block['last'] = $this->getUrlRange($this->lastPage - 1, $this->lastPage);
        }

        $html = '';

        if (is_array($block['first'])) {
            $html .= $this->getUrlLinks($block['first']);
        }

        if (is_array($block['slider'])) {
            $html .= $this->getDots();
            $html .= $this->getUrlLinks($block['slider']);
        }

        if (is_array($block['last'])) {
            $html .= $this->getDots();
            $html .= $this->getUrlLinks($block['last']);
        }

        return $html;
    }

    /**
     * 渲染分页html
     * @return mixed
     */
    public function render() {
        if ($this->hasPages()) {
            if ($this->simple) {
                return sprintf(
                        '<ul class="pager">%s %s</ul>', $this->getPreviousButton(), $this->getNextButton()
                );
            } else {
                return sprintf(
                        '<ul class="pagination justify-content-center">%s %s %s</ul>', $this->getPreviousButton(), $this->getLinks(), $this->getNextButton()
                );
            }
        }
    }

    /**
     * 生成一个可点击的按钮
     *
     * @param  string $url
     * @param  string $page
     * @return string
     */
    protected function getAvailablePageWrapper(string $url, string $page): string {
        return '<li class="page-item"><a class="page-link" href="' . htmlentities($url) . '">' . $page . '</a></li>';
    }

    /**
     * 生成一个禁用的按钮
     *
     * @param  string $text
     * @return string
     */
    protected function getDisabledTextWrapper(string $text): string {
        return '<li class="page-item disabled"><a class="page-link" href="#">' . $text . '</a></li>';
    }

    /**
     * 生成一个激活的按钮
     *
     * @param  string $text
     * @return string
     */
    protected function getActivePageWrapper(string $text): string {
        return '<li class="page-item active"><a class="page-link" href="#">' . $text . '</a></li>';
    }

    /**
     * 生成省略号按钮
     *
     * @return string
     */
    protected function getDots(): string {
        return $this->getDisabledTextWrapper('...');
    }

    /**
     * 批量生成页码按钮.
     *
     * @param  array $urls
     * @return string
     */
    protected function getUrlLinks(array $urls): string {
        $html = '';

        foreach ($urls as $page => $url) {
            $html .= $this->getPageLinkWrapper($url, $page);
        }

        return $html;
    }

    /**
     * 生成普通页码按钮
     *
     * @param  string $url
     * @param  string    $page
     * @return string
     */
    protected function getPageLinkWrapper(string $url, string $page): string {
        if ($this->currentPage() == $page) {
            return $this->getActivePageWrapper($page);
        }

        return $this->getAvailablePageWrapper($url, $page);
    }

}
