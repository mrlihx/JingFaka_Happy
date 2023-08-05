<?php

namespace app\manage\validate;

use think\Validate;

class User extends Validate
{
    protected $rule =   [
        'username'        =>'require|unique:user,username',
        'password'        =>'require|min:8|max:16',
        'email'           =>'require|email',
        'mobile'          =>'require',
        'qq'              =>'require',
    ];

    protected $message  =   [
        'username.require'        =>'用户名未填写',
        'username.unique'         =>'已存在该用户名',
        'password.require'        =>'密码未填写',
        'password.min'            =>'密码位数必须在8~16位之间',
        'password.max'            =>'密码位数必须在8~16位之间',
        'email.require'           =>'邮箱未填写',
        'email.email'             =>'邮箱格式不正确',
        'mobile.require'          =>'手机号未填写',
        'qq.require'              =>'QQ号未填写',
    ];

    protected $scene = [
        'register' => ['username','password','email','mobile','qq'],
        'edit'     => ['username'=>'unique:user,username','password'=>'min:8|max:16','email','mobile','qq'],
    ];

}
