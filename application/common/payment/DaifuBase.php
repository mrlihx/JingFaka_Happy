<?php

namespace app\common\payment;

class DaifuBase
{
    protected $account = null;
    protected $params = null;

    public function __construct($account = [])
    {
        $this->account = $account;
    }
}
