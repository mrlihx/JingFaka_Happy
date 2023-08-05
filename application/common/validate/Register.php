<?php

namespace app\common\validate;

use think\Validate;

/**
 * 注册认证类
 * Class Register
 * @package app\common\validate
 */
class Register extends Validate{
    protected $rule = [
        'username' => 'require|unique:user',
        'mobile' => 'require|number|length:11|unique:user',
        'qq' => 'require|number|min:5',
        'email' => 'require|email|unique:user',
        'password' => 'require|min:8',
    ];

    protected $message = [
        'username.unique' => '用户名已注册',
        'username'  =>  '请填写用户名',
        'mobile.unique' => '手机号已注册',
        'mobile' => '请填写正确的手机号码',
        'qq' => '请填写正确的 qq',
        'email.unique' => '邮箱已注册',
        'email' =>  '请填写正确的邮箱',
        'password' => '请填写长度至少8位的密码',
    ];
}
