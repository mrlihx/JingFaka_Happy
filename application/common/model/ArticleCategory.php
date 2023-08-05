<?php

namespace app\common\model;

use think\Model;

class ArticleCategory extends Model
{
    public function articles()
    {
        return $this->hasMany('Article','cate_id');
    }
}
