<?php

namespace app\common\model;

use think\Model;

class Article extends Model
{
    public function category()
    {
        return $this->belongsTo('ArticleCategory','cate_id');
    }
}
