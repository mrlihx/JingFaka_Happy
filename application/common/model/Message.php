<?php
namespace app\common\model;

use think\Model;

class Message extends Model
{
    public function fromUser()
    {
        return $this->belongsTo('User','from_id');
    }

    public function toUser()
    {
        return $this->belongsTo('User','to_id');
    }

    public function user()
    {
        return $this->belongsTo('User','user_id');
    }
}
