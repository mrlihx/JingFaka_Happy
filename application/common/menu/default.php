<?php

return [
    [
        'icon' => '#',
        'url' => '#',
        'title' => '菜单',
        'is_link' => 0,
        'child' => [
            [
                'icon' => 'bx bx-home-alt',
                'url' => 'merchant/index/index',
                'title' => '仪表盘',
                'is_link' => 1,
                'child' => [
                ],
            ],
            [
                'icon' => 'bx bx-box ',
                'url' => 'merchant/shop/#',
                'title' => '店铺管理',
                'is_link' => 0,
                'child' => [
                    [
                        'icon' => '#',
                        'url' => 'merchant/user/link',
                        'title' => '店铺链接',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/user/settings',
                        'title' => '店铺设置',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/user/collect',
                        'title' => '结算设置',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/user/wechat',
                        'title' => '微信通知',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                ],
            ],
        ],
    ],
    [
        'icon' => '#',
        'url' => '#',
        'title' => '运营',
        'is_link' => 0,
        'child' => [
            [
                'icon' => 'bx bx-archive ',
                'url' => 'merchant/goods/#',
                'title' => '商品管理',
                'is_link' => 0,
                'child' => [
                    [
                        'icon' => '#',
                        'url' => 'merchant/goods_category/index',
                        'title' => '商品分类',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/goods/add',
                        'title' => '添加商品',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/goods/index',
                        'title' => '商品列表',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/goods/trash',
                        'title' => '回收站',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                ],
            ],
            [
                'icon' => 'bx bx-receipt',
                'url' => 'merchant/order/#',
                'title' => '订单管理',
                'is_link' => 0,
                'child' => [
                    [
                        'icon' => '#',
                        'url' => 'merchant/order/index',
                        'title' => '订单列表',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/order/index?status=1',
                        'title' => '已付款',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/order/index?status=0',
                        'title' => '未付款',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                ],
            ],
            [
                'icon' => 'bx bx-customize ',
                'url' => 'merchant/goods_card/#',
                'title' => '库存管理',
                'is_link' => 0,
                'child' => [
                    [
                        'icon' => '#',
                        'url' => 'merchant/goods_card/add',
                        'title' => '添加库存',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/goods_card/index',
                        'title' => '库存列表',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/goods_card/index?status=2',
                        'title' => '已售出',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/goods_card/index?status=1',
                        'title' => '未售出',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/goods_card/trash',
                        'title' => '回收站',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                ],
            ],
            [
                'icon' => 'bx bx-group ',
                'url' => 'merchant/agent/#',
                'title' => '供货和代理',
                'is_link' => 0,
                'child' => [
                    [
                        'icon' => '#',
                        'url' => 'merchant/agent/setting',
                        'title' => '店铺代理设置',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/agent/myPool',
                        'title' => '商品池管理',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/agent/pool',
                        'title' => '全网商品对接',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/agent/supplyGoods',
                        'title' => '对接的商品',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/agent/proxyList',
                        'title' => '下级代理列表',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/agent/proxyOrder',
                        'title' => '下级代理订单',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                ],
            ], [
                'icon' => 'bx bx-globe',
                'url' => 'merchant/agent/#',
                'title' => '跨平台对接',
                'is_link' => 0,
                'child' => [
                    [
                        'icon' => '#',
                        'url' => 'merchant/cross/index',
                        'title' => '跨平台对接',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/cross/supplyGoods',
                        'title' => '对接的商品',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                ],
            ],
            [
                'icon' => 'bx bx-conversation ',
                'url' => 'merchant/complaint/#',
                'title' => '投诉管理',
                'is_link' => 0,
                'child' => [
                    [
                        'icon' => '#',
                        'url' => 'merchant/complaint/index?from=1',
                        'title' => '自营商品投诉',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/complaint/index?from=2',
                        'title' => '下级代理投诉',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                ],
            ],
            [
                'icon' => 'bx bx-credit-card ',
                'url' => 'merchant/cash/#',
                'title' => '结算管理',
                'is_link' => 0,
                'child' => [
                    [
                        'icon' => '#',
                        'url' => 'merchant/cash/apply',
                        'title' => '申请提现',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/cash/index',
                        'title' => '提现列表',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                ],
            ],
        ],
    ],
    [
        'icon' => '#',
        'url' => '#',
        'title' => '应用',
        'is_link' => 0,
        'child' => [
            [
                'icon' => 'bx bx-customize',
                'url' => 'merchant/plugin/#',
                'title' => '扩展应用',
                'is_link' => 0,
                'child' =>
                include_once APP_PATH . DS . "common" . DS . "menu" . DS . "plugin" . EXT
            ,
            ],
            [
                'icon' => 'bx bxs-bar-chart-alt-2',
                'url' => 'merchant/charts/#',
                'title' => '生意罗盘',
                'is_link' => 0,
                'child' => [
                    [
                        'icon' => '#',
                        'url' => 'merchant/charts/money',
                        'title' => '收益分析',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/charts/rankList',
                        'title' => '消费排行',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/charts/iplist',
                        'title' => '店铺访问记录',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/charts/channel',
                        'title' => '渠道分析',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                ],
            ],
            [
                'icon' => 'bx bx-cog',
                'url' => 'merchant/system/#',
                'title' => '系统管理',
                'is_link' => 0,
                'child' => [
                    [
                        'icon' => '#',
                        'url' => 'merchant/message/index',
                        'title' => '站内消息',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/user/moneylog',
                        'title' => '流水日志',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/user/loginlog',
                        'title' => '登录日志',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/user/password',
                        'title' => '修改密码',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                ],
            ],
        ],
    ],
    [
        'icon' => '#',
        'url' => '#',
        'title' => '营销',
        'is_link' => 0,
        'child' => [
            [
                'icon' => 'bx bx-purchase-tag-alt ',
                'url' => 'merchant/goods_coupon/#',
                'title' => '优惠券',
                'is_link' => 0,
                'child' => [
                    [
                        'icon' => '#',
                        'url' => 'merchant/goods_coupon/add',
                        'title' => '添加优惠券',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/goods_coupon/index',
                        'title' => '优惠券列表',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/goods_coupon/index?status=2',
                        'title' => '已使用',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/goods_coupon/index?status=1',
                        'title' => '未使用',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/goods_coupon/trash',
                        'title' => '回收站',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                ],
            ],
            [
                'icon' => 'bx bx-share-alt',
                'url' => 'merchant/spread/#',
                'title' => '推广返利',
                'is_link' => 0,
                'child' => [
                    [
                        'icon' => '#',
                        'url' => 'merchant/spread/index',
                        'title' => '推广列表',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/spread/rebate',
                        'title' => '返利列表',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                    [
                        'icon' => '#',
                        'url' => 'merchant/invite_code/index',
                        'title' => '邀请码管理',
                        'is_link' => 1,
                        'child' => [
                        ],
                    ],
                ],
            ],
        ],
    ],
];
