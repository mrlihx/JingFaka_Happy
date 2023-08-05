/**
 
 @Name锛歭ayer v3.1.1 Web寮瑰眰缁勪欢
 @Author锛氳搐蹇�
 @Site锛歨ttp://layer.layui.com
 @License锛歁IT
 
 */

;
!function (window, undefined) {
    "use strict";

    var isLayui = window.layui && layui.define, $, win, ready = {
        getPath: function () {
            var jsPath = document.currentScript ? document.currentScript.src : function () {
                var js = document.scripts
                        , last = js.length - 1
                        , src;
                for (var i = last; i > 0; i--) {
                    if (js[i].readyState === 'interactive') {
                        src = js[i].src;
                        break;
                    }
                }
                return src || js[last].src;
            }();
            return jsPath.substring(0, jsPath.lastIndexOf('/') + 1);
        }(),

        config: {}, end: {}, minIndex: 0, minLeft: [],
        btn: ['&#x786E;&#x5B9A;', '&#x53D6;&#x6D88;'],

        //浜旂鍘熷灞傛ā寮�
        type: ['dialog', 'page', 'iframe', 'loading', 'tips'],

        //鑾峰彇鑺傜偣鐨剆tyle灞炴€у€�
        getStyle: function (node, name) {
            var style = node.currentStyle ? node.currentStyle : window.getComputedStyle(node, null);
            return style[style.getPropertyValue ? 'getPropertyValue' : 'getAttribute'](name);
        },

        //杞藉叆CSS閰嶄欢
        link: function (href, fn, cssname) {

            //鏈缃矾寰勶紝鍒欎笉涓诲姩鍔犺浇css
            if (!layer.path)
                return;

            var head = document.getElementsByTagName("head")[0], link = document.createElement('link');
            if (typeof fn === 'string')
                cssname = fn;
            var app = (cssname || href).replace(/\.|\//g, '');
            var id = 'layuicss-' + app, timeout = 0;

            link.rel = 'stylesheet';
            link.href = layer.path + href;
            link.id = id;

            if (!document.getElementById(id)) {
                head.appendChild(link);
            }

            if (typeof fn !== 'function')
                return;

            //杞css鏄惁鍔犺浇瀹屾瘯
            (function poll() {
                if (++timeout > 8 * 1000 / 100) {
                    return window.console && console.error('layer.css: Invalid');
                }
                ;
                parseInt(ready.getStyle(document.getElementById(id), 'width')) === 1989 ? fn() : setTimeout(poll, 100);
            }());
        }
    };

//榛樿鍐呯疆鏂规硶銆�
    var layer = {
        v: '3.1.1',
        ie: function () { //ie鐗堟湰
            var agent = navigator.userAgent.toLowerCase();
            return (!!window.ActiveXObject || "ActiveXObject" in window) ? (
                    (agent.match(/msie\s(\d+)/) || [])[1] || '11' //鐢变簬ie11骞舵病鏈塵sie鐨勬爣璇�
                    ) : false;
        }(),
        index: (window.layer && window.layer.v) ? 100000 : 0,
        path: ready.getPath,
        config: function (options, fn) {
            options = options || {};
            layer.cache = ready.config = $.extend({}, ready.config, options);
            layer.path = ready.config.path || layer.path;
            typeof options.extend === 'string' && (options.extend = [options.extend]);

            if (ready.config.path)
                layer.ready();

            if (!options.extend)
                return this;

            isLayui
                    ? layui.addcss('modules/layer/' + options.extend)
                    : ready.link('theme/' + options.extend);

            return this;
        },

        //涓讳綋CSS绛夊緟浜嬩欢
        ready: function (callback) {
            var cssname = 'layer', ver = ''
                    , path = (isLayui ? 'modules/layer/' : 'theme/') + 'default/layer.css?v=' + layer.v + ver;
            isLayui ? layui.addcss(path, callback, cssname) : ready.link(path, callback, cssname);
            return this;
        },

        //鍚勭蹇嵎寮曠敤
        alert: function (content, options, yes) {
            var type = typeof options === 'function';
            if (type)
                yes = options;
            return layer.open($.extend({
                content: content,
                yes: yes
            }, type ? {} : options));
        },

        confirm: function (content, options, yes, cancel) {
            var type = typeof options === 'function';
            if (type) {
                cancel = yes;
                yes = options;
            }
            return layer.open($.extend({
                content: content,
                btn: ready.btn,
                yes: yes,
                btn2: cancel
            }, type ? {} : options));
        },

        msg: function (content, options, end) { //鏈€甯哥敤鎻愮ず灞�
            var type = typeof options === 'function', rskin = ready.config.skin;
            var skin = (rskin ? rskin + ' ' + rskin + '-msg' : '') || 'layui-layer-msg';
            var anim = doms.anim.length - 1;
            if (type)
                end = options;
            return layer.open($.extend({
                content: content,
                time: 3000,
                shade: false,
                skin: skin,
                title: false,
                closeBtn: false,
                btn: false,
                resize: false,
                end: end
            }, (type && !ready.config.skin) ? {
                skin: skin + ' layui-layer-hui',
                anim: anim
            } : function () {
                options = options || {};
                if (options.icon === -1 || options.icon === undefined && !ready.config.skin) {
                    options.skin = skin + ' ' + (options.skin || 'layui-layer-hui');
                }
                return options;
            }()));
        },

        load: function (icon, options) {
            return layer.open($.extend({
                type: 3,
                icon: icon || 0,
                resize: false,
                shade: 0.01
            }, options));
        },

        tips: function (content, follow, options) {
            return layer.open($.extend({
                type: 4,
                content: [content, follow],
                closeBtn: false,
                time: 3000,
                shade: false,
                resize: false,
                fixed: false,
                maxWidth: 210
            }, options));
        }
    };

    var Class = function (setings) {
        var that = this;
        that.index = ++layer.index;
        that.config = $.extend({}, that.config, ready.config, setings);
        document.body ? that.creat() : setTimeout(function () {
            that.creat();
        }, 30);
    };

    Class.pt = Class.prototype;

//缂撳瓨甯哥敤瀛楃
    var doms = ['layui-layer', '.layui-layer-title', '.layui-layer-main', '.layui-layer-dialog', 'layui-layer-iframe', 'layui-layer-content', 'layui-layer-btn', 'layui-layer-close'];
    doms.anim = ['layer-anim-00', 'layer-anim-01', 'layer-anim-02', 'layer-anim-03', 'layer-anim-04', 'layer-anim-05', 'layer-anim-06'];

//榛樿閰嶇疆
    Class.pt.config = {
        type: 0,
        shade: 0.3,
        fixed: true,
        move: doms[1],
        title: '&#x4FE1;&#x606F;',
        offset: 'auto',
        area: 'auto',
        closeBtn: 1,
        time: 0, //0琛ㄧず涓嶈嚜鍔ㄥ叧闂�
        zIndex: 19891014,
        maxWidth: 360,
        anim: 0,
        isOutAnim: true,
        icon: -1,
        moveType: 1,
        resize: true,
        scrollbar: true, //鏄惁鍏佽娴忚鍣ㄦ粴鍔ㄦ潯
        tips: 2
    };

//瀹瑰櫒
    Class.pt.vessel = function (conType, callback) {
        var that = this, times = that.index, config = that.config;
        var zIndex = config.zIndex + times, titype = typeof config.title === 'object';
        var ismax = config.maxmin && (config.type === 1 || config.type === 2);
        var titleHTML = (config.title ? '<div class="layui-layer-title" style="' + (titype ? config.title[1] : '') + '">'
                + (titype ? config.title[0] : config.title)
                + '</div>' : '');

        config.zIndex = zIndex;
        callback([
            //閬僵
            config.shade ? ('<div class="layui-layer-shade" id="layui-layer-shade' + times + '" times="' + times + '" style="' + ('z-index:' + (zIndex - 1) + '; ') + '"></div>') : '',

            //涓讳綋
            '<div class="' + doms[0] + (' layui-layer-' + ready.type[config.type]) + (((config.type == 0 || config.type == 2) && !config.shade) ? ' layui-layer-border' : '') + ' ' + (config.skin || '') + '" id="' + doms[0] + times + '" type="' + ready.type[config.type] + '" times="' + times + '" showtime="' + config.time + '" conType="' + (conType ? 'object' : 'string') + '" style="z-index: ' + zIndex + '; width:' + config.area[0] + ';height:' + config.area[1] + (config.fixed ? '' : ';position:absolute;') + '">'
                    + (conType && config.type != 2 ? '' : titleHTML)
                    + '<div id="' + (config.id || '') + '" class="layui-layer-content' + ((config.type == 0 && config.icon !== -1) ? ' layui-layer-padding' : '') + (config.type == 3 ? ' layui-layer-loading' + config.icon : '') + '">'
                    + (config.type == 0 && config.icon !== -1 ? '<i class="layui-layer-ico layui-layer-ico' + config.icon + '"></i>' : '')
                    + (config.type == 1 && conType ? '' : (config.content || ''))
                    + '</div>'
                    + '<span class="layui-layer-setwin">' + function () {
                        var closebtn = ismax ? '<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>' : '';
                        config.closeBtn && (closebtn += '<a class="layui-layer-ico ' + doms[7] + ' ' + doms[7] + (config.title ? config.closeBtn : (config.type == 4 ? '1' : '2')) + '" href="javascript:;"></a>');
                        return closebtn;
                    }() + '</span>'
                    + (config.btn ? function () {
                        var button = '';
                        typeof config.btn === 'string' && (config.btn = [config.btn]);
                        for (var i = 0, len = config.btn.length; i < len; i++) {
                            button += '<a class="' + doms[6] + '' + i + '">' + config.btn[i] + '</a>'
                        }
                        return '<div class="' + doms[6] + ' layui-layer-btn-' + (config.btnAlign || '') + '">' + button + '</div>'
                    }() : '')
                    + (config.resize ? '<span class="layui-layer-resize"></span>' : '')
                    + '</div>'
        ], titleHTML, $('<div class="layui-layer-move"></div>'));
        return that;
    };

//鍒涘缓楠ㄦ灦
    Class.pt.creat = function () {
        var that = this
                , config = that.config
                , times = that.index, nodeIndex
                , content = config.content
                , conType = typeof content === 'object'
                , body = $('body');

        if (config.id && $('#' + config.id)[0])
            return;

        if (typeof config.area === 'string') {
            config.area = config.area === 'auto' ? ['', ''] : [config.area, ''];
        }

        //anim鍏煎鏃х増shift
        if (config.shift) {
            config.anim = config.shift;
        }

        if (layer.ie == 6) {
            config.fixed = false;
        }

        switch (config.type) {
            case 0:
                config.btn = ('btn' in config) ? config.btn : ready.btn[0];
                layer.closeAll('dialog');
                break;
            case 2:
                var content = config.content = conType ? config.content : [config.content || 'http://layer.layui.com', 'auto'];
                config.content = '<iframe scrolling="' + (config.content[1] || 'auto') + '" allowtransparency="true" id="' + doms[4] + '' + times + '" name="' + doms[4] + '' + times + '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + config.content[0] + '"></iframe>';
                break;
            case 3:
                delete config.title;
                delete config.closeBtn;
                config.icon === -1 && (config.icon === 0);
                layer.closeAll('loading');
                break;
            case 4:
                conType || (config.content = [config.content, 'body']);
                config.follow = config.content[1];
                config.content = config.content[0] + '<i class="layui-layer-TipsG"></i>';
                delete config.title;
                config.tips = typeof config.tips === 'object' ? config.tips : [config.tips, true];
                config.tipsMore || layer.closeAll('tips');
                break;
        }

        //寤虹珛瀹瑰櫒
        that.vessel(conType, function (html, titleHTML, moveElem) {
            body.append(html[0]);
            conType ? function () {
                (config.type == 2 || config.type == 4) ? function () {
                    $('body').append(html[1]);
                }() : function () {
                    if (!content.parents('.' + doms[0])[0]) {
                        content.data('display', content.css('display')).show().addClass('layui-layer-wrap').wrap(html[1]);
                        $('#' + doms[0] + times).find('.' + doms[5]).before(titleHTML);
                    }
                }();
            }() : body.append(html[1]);
            $('.layui-layer-move')[0] || body.append(ready.moveElem = moveElem);
            that.layero = $('#' + doms[0] + times);
            config.scrollbar || doms.html.css('overflow', 'hidden').attr('layer-full', times);
        }).auto(times);

        //閬僵
        $('#layui-layer-shade' + that.index).css({
            'background-color': config.shade[1] || '#000'
            , 'opacity': config.shade[0] || config.shade
        });

        config.type == 2 && layer.ie == 6 && that.layero.find('iframe').attr('src', content[0]);

        //鍧愭爣鑷€傚簲娴忚鍣ㄧ獥鍙ｅ昂瀵�
        config.type == 4 ? that.tips() : that.offset();
        if (config.fixed) {
            win.on('resize', function () {
                that.offset();
                (/^\d+%$/.test(config.area[0]) || /^\d+%$/.test(config.area[1])) && that.auto(times);
                config.type == 4 && that.tips();
            });
        }

        config.time <= 0 || setTimeout(function () {
            layer.close(that.index)
        }, config.time);
        that.move().callback();

        //涓哄吋瀹筳Query3.0鐨刢ss鍔ㄧ敾褰卞搷鍏冪礌灏哄璁＄畻
        if (doms.anim[config.anim]) {
            var animClass = 'layer-anim ' + doms.anim[config.anim];
            that.layero.addClass(animClass).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this).removeClass(animClass);
            });
        }
        ;

        //璁板綍鍏抽棴鍔ㄧ敾
        if (config.isOutAnim) {
            that.layero.data('isOutAnim', true);
        }
    };

//鑷€傚簲
    Class.pt.auto = function (index) {
        var that = this, config = that.config, layero = $('#' + doms[0] + index);

        if (config.area[0] === '' && config.maxWidth > 0) {
            //涓轰簡淇IE7涓嬩竴涓浜洪毦浠ョ悊瑙ｇ殑bug
            if (layer.ie && layer.ie < 8 && config.btn) {
                layero.width(layero.innerWidth());
            }
            layero.outerWidth() > config.maxWidth && layero.width(config.maxWidth);
        }

        var area = [layero.innerWidth(), layero.innerHeight()]
                , titHeight = layero.find(doms[1]).outerHeight() || 0
                , btnHeight = layero.find('.' + doms[6]).outerHeight() || 0
                , setHeight = function (elem) {
                    elem = layero.find(elem);
                    elem.height(area[1] - titHeight - btnHeight - 2 * (parseFloat(elem.css('padding-top')) | 0));
                };

        switch (config.type) {
            case 2:
                setHeight('iframe');
                break;
            default:
                if (config.area[1] === '') {
                    if (config.maxHeight > 0 && layero.outerHeight() > config.maxHeight) {
                        area[1] = config.maxHeight;
                        setHeight('.' + doms[5]);
                    } else if (config.fixed && area[1] >= win.height()) {
                        area[1] = win.height();
                        setHeight('.' + doms[5]);
                    }
                } else {
                    setHeight('.' + doms[5]);
                }
                break;
        }
        ;

        return that;
    };

//璁＄畻鍧愭爣
    Class.pt.offset = function () {
        var that = this, config = that.config, layero = that.layero;
        var area = [layero.outerWidth(), layero.outerHeight()];
        var type = typeof config.offset === 'object';
        that.offsetTop = (win.height() - area[1]) / 2;
        that.offsetLeft = (win.width() - area[0]) / 2;

        if (type) {
            that.offsetTop = config.offset[0];
            that.offsetLeft = config.offset[1] || that.offsetLeft;
        } else if (config.offset !== 'auto') {

            if (config.offset === 't') { //涓�
                that.offsetTop = 0;
            } else if (config.offset === 'r') { //鍙�
                that.offsetLeft = win.width() - area[0];
            } else if (config.offset === 'b') { //涓�
                that.offsetTop = win.height() - area[1];
            } else if (config.offset === 'l') { //宸�
                that.offsetLeft = 0;
            } else if (config.offset === 'lt') { //宸︿笂瑙�
                that.offsetTop = 0;
                that.offsetLeft = 0;
            } else if (config.offset === 'lb') { //宸︿笅瑙�
                that.offsetTop = win.height() - area[1];
                that.offsetLeft = 0;
            } else if (config.offset === 'rt') { //鍙充笂瑙�
                that.offsetTop = 0;
                that.offsetLeft = win.width() - area[0];
            } else if (config.offset === 'rb') { //鍙充笅瑙�
                that.offsetTop = win.height() - area[1];
                that.offsetLeft = win.width() - area[0];
            } else {
                that.offsetTop = config.offset;
            }

        }

        if (!config.fixed) {
            that.offsetTop = /%$/.test(that.offsetTop) ?
                    win.height() * parseFloat(that.offsetTop) / 100
                    : parseFloat(that.offsetTop);
            that.offsetLeft = /%$/.test(that.offsetLeft) ?
                    win.width() * parseFloat(that.offsetLeft) / 100
                    : parseFloat(that.offsetLeft);
            that.offsetTop += win.scrollTop();
            that.offsetLeft += win.scrollLeft();
        }

        if (layero.attr('minLeft')) {
            that.offsetTop = win.height() - (layero.find(doms[1]).outerHeight() || 0);
            that.offsetLeft = layero.css('left');
        }

        layero.css({top: that.offsetTop, left: that.offsetLeft});
    };

//Tips
    Class.pt.tips = function () {
        var that = this, config = that.config, layero = that.layero;
        var layArea = [layero.outerWidth(), layero.outerHeight()], follow = $(config.follow);
        if (!follow[0])
            follow = $('body');
        var goal = {
            width: follow.outerWidth(),
            height: follow.outerHeight(),
            top: follow.offset().top,
            left: follow.offset().left
        }, tipsG = layero.find('.layui-layer-TipsG');

        var guide = config.tips[0];
        config.tips[1] || tipsG.remove();

        goal.autoLeft = function () {
            if (goal.left + layArea[0] - win.width() > 0) {
                goal.tipLeft = goal.left + goal.width - layArea[0];
                tipsG.css({right: 12, left: 'auto'});
            } else {
                goal.tipLeft = goal.left;
            }
            ;
        };

        //杈ㄥ埆tips鐨勬柟浣�
        goal.where = [function () { //涓�        
                goal.autoLeft();
                goal.tipTop = goal.top - layArea[1] - 10;
                tipsG.removeClass('layui-layer-TipsB').addClass('layui-layer-TipsT').css('border-right-color', config.tips[1]);
            }, function () { //鍙�
                goal.tipLeft = goal.left + goal.width + 10;
                goal.tipTop = goal.top;
                tipsG.removeClass('layui-layer-TipsL').addClass('layui-layer-TipsR').css('border-bottom-color', config.tips[1]);
            }, function () { //涓�
                goal.autoLeft();
                goal.tipTop = goal.top + goal.height + 10;
                tipsG.removeClass('layui-layer-TipsT').addClass('layui-layer-TipsB').css('border-right-color', config.tips[1]);
            }, function () { //宸�
                goal.tipLeft = goal.left - layArea[0] - 10;
                goal.tipTop = goal.top;
                tipsG.removeClass('layui-layer-TipsR').addClass('layui-layer-TipsL').css('border-bottom-color', config.tips[1]);
            }];
        goal.where[guide - 1]();

        /* 8*2涓哄皬涓夎褰㈠崰鎹殑绌洪棿 */
        if (guide === 1) {
            goal.top - (win.scrollTop() + layArea[1] + 8 * 2) < 0 && goal.where[2]();
        } else if (guide === 2) {
            win.width() - (goal.left + goal.width + layArea[0] + 8 * 2) > 0 || goal.where[3]()
        } else if (guide === 3) {
            (goal.top - win.scrollTop() + goal.height + layArea[1] + 8 * 2) - win.height() > 0 && goal.where[0]();
        } else if (guide === 4) {
            layArea[0] + 8 * 2 - goal.left > 0 && goal.where[1]()
        }

        layero.find('.' + doms[5]).css({
            'background-color': config.tips[1],
            'padding-right': (config.closeBtn ? '30px' : '')
        });
        layero.css({
            left: goal.tipLeft - (config.fixed ? win.scrollLeft() : 0),
            top: goal.tipTop - (config.fixed ? win.scrollTop() : 0)
        });
    }

//鎷栨嫿灞�
    Class.pt.move = function () {
        var that = this
                , config = that.config
                , _DOC = $(document)
                , layero = that.layero
                , moveElem = layero.find(config.move)
                , resizeElem = layero.find('.layui-layer-resize')
                , dict = {};

        if (config.move) {
            moveElem.css('cursor', 'move');
        }

        moveElem.on('mousedown', function (e) {
            e.preventDefault();
            if (config.move) {
                dict.moveStart = true;
                dict.offset = [
                    e.clientX - parseFloat(layero.css('left'))
                            , e.clientY - parseFloat(layero.css('top'))
                ];
                ready.moveElem.css('cursor', 'move').show();
            }
        });

        resizeElem.on('mousedown', function (e) {
            e.preventDefault();
            dict.resizeStart = true;
            dict.offset = [e.clientX, e.clientY];
            dict.area = [
                layero.outerWidth()
                        , layero.outerHeight()
            ];
            ready.moveElem.css('cursor', 'se-resize').show();
        });

        _DOC.on('mousemove', function (e) {

            //鎷栨嫿绉诲姩
            if (dict.moveStart) {
                var X = e.clientX - dict.offset[0]
                        , Y = e.clientY - dict.offset[1]
                        , fixed = layero.css('position') === 'fixed';

                e.preventDefault();

                dict.stX = fixed ? 0 : win.scrollLeft();
                dict.stY = fixed ? 0 : win.scrollTop();

                //鎺у埗鍏冪礌涓嶈鎷栧嚭绐楀彛澶�
                if (!config.moveOut) {
                    var setRig = win.width() - layero.outerWidth() + dict.stX
                            , setBot = win.height() - layero.outerHeight() + dict.stY;
                    X < dict.stX && (X = dict.stX);
                    X > setRig && (X = setRig);
                    Y < dict.stY && (Y = dict.stY);
                    Y > setBot && (Y = setBot);
                }

                layero.css({
                    left: X
                    , top: Y
                });
            }

            //Resize
            if (config.resize && dict.resizeStart) {
                var X = e.clientX - dict.offset[0]
                        , Y = e.clientY - dict.offset[1];

                e.preventDefault();

                layer.style(that.index, {
                    width: dict.area[0] + X
                    , height: dict.area[1] + Y
                })
                dict.isResize = true;
                config.resizing && config.resizing(layero);
            }
        }).on('mouseup', function (e) {
            if (dict.moveStart) {
                delete dict.moveStart;
                ready.moveElem.hide();
                config.moveEnd && config.moveEnd(layero);
            }
            if (dict.resizeStart) {
                delete dict.resizeStart;
                ready.moveElem.hide();
            }
        });

        return that;
    };

    Class.pt.callback = function () {
        var that = this, layero = that.layero, config = that.config;
        that.openLayer();
        if (config.success) {
            if (config.type == 2) {
                layero.find('iframe').on('load', function () {
                    config.success(layero, that.index);
                });
            } else {
                config.success(layero, that.index);
            }
        }
        layer.ie == 6 && that.IE6(layero);

        //鎸夐挳
        layero.find('.' + doms[6]).children('a').on('click', function () {
            var index = $(this).index();
            if (index === 0) {
                if (config.yes) {
                    config.yes(that.index, layero)
                } else if (config['btn1']) {
                    config['btn1'](that.index, layero)
                } else {
                    layer.close(that.index);
                }
            } else {
                var close = config['btn' + (index + 1)] && config['btn' + (index + 1)](that.index, layero);
                close === false || layer.close(that.index);
            }
        });

        //鍙栨秷
        function cancel() {
            var close = config.cancel && config.cancel(that.index, layero);
            close === false || layer.close(that.index);
        }

        //鍙充笂瑙掑叧闂洖璋�
        layero.find('.' + doms[7]).on('click', cancel);

        //鐐归伄缃╁叧闂�
        if (config.shadeClose) {
            $('#layui-layer-shade' + that.index).on('click', function () {
                layer.close(that.index);
            });
        }

        //鏈€灏忓寲
        layero.find('.layui-layer-min').on('click', function () {
            var min = config.min && config.min(layero);
            min === false || layer.min(that.index, config);
        });

        //鍏ㄥ睆/杩樺師
        layero.find('.layui-layer-max').on('click', function () {
            if ($(this).hasClass('layui-layer-maxmin')) {
                layer.restore(that.index);
                config.restore && config.restore(layero);
            } else {
                layer.full(that.index, config);
                setTimeout(function () {
                    config.full && config.full(layero);
                }, 100);
            }
        });

        config.end && (ready.end[that.index] = config.end);
    };

//for ie6 鎭㈠select
    ready.reselect = function () {
        $.each($('select'), function (index, value) {
            var sthis = $(this);
            if (!sthis.parents('.' + doms[0])[0]) {
                (sthis.attr('layer') == 1 && $('.' + doms[0]).length < 1) && sthis.removeAttr('layer').show();
            }
            sthis = null;
        });
    };

    Class.pt.IE6 = function (layero) {
        //闅愯棌select
        $('select').each(function (index, value) {
            var sthis = $(this);
            if (!sthis.parents('.' + doms[0])[0]) {
                sthis.css('display') === 'none' || sthis.attr({'layer': '1'}).hide();
            }
            sthis = null;
        });
    };

//闇€渚濊禆鍘熷瀷鐨勫澶栨柟娉�
    Class.pt.openLayer = function () {
        var that = this;

        //缃《褰撳墠绐楀彛
        layer.zIndex = that.config.zIndex;
        layer.setTop = function (layero) {
            var setZindex = function () {
                layer.zIndex++;
                layero.css('z-index', layer.zIndex + 1);
            };
            layer.zIndex = parseInt(layero[0].style.zIndex);
            layero.on('mousedown', setZindex);
            return layer.zIndex;
        };
    };

    ready.record = function (layero) {
        var area = [
            layero.width(),
            layero.height(),
            layero.position().top,
            layero.position().left + parseFloat(layero.css('margin-left'))
        ];
        layero.find('.layui-layer-max').addClass('layui-layer-maxmin');
        layero.attr({area: area});
    };

    ready.rescollbar = function (index) {
        if (doms.html.attr('layer-full') == index) {
            if (doms.html[0].style.removeProperty) {
                doms.html[0].style.removeProperty('overflow');
            } else {
                doms.html[0].style.removeAttribute('overflow');
            }
            doms.html.removeAttr('layer-full');
        }
    };

    /** 鍐呯疆鎴愬憳 */

    window.layer = layer;

//鑾峰彇瀛恑frame鐨凞OM
    layer.getChildFrame = function (selector, index) {
        index = index || $('.' + doms[4]).attr('times');
        return $('#' + doms[0] + index).find('iframe').contents().find(selector);
    };

//寰楀埌褰撳墠iframe灞傜殑绱㈠紩锛屽瓙iframe鏃朵娇鐢�
    layer.getFrameIndex = function (name) {
        return $('#' + name).parents('.' + doms[4]).attr('times');
    };

//iframe灞傝嚜閫傚簲瀹介珮
    layer.iframeAuto = function (index) {
        if (!index)
            return;
        var heg = layer.getChildFrame('html', index).outerHeight();
        var layero = $('#' + doms[0] + index);
        var titHeight = layero.find(doms[1]).outerHeight() || 0;
        var btnHeight = layero.find('.' + doms[6]).outerHeight() || 0;

        var bodyHH = document.documentElement.clientHeight;
        if (heg + titHeight + btnHeight > $(window).height() - 50) {
            var padding_top = $(window).height() * 0.1;
            layero.css({height: $(window).height() - padding_top, top: (bodyHH - $(window).height() + padding_top) * 0.5});
            layero.find('iframe').css({height: $(window).height() - padding_top - titHeight - btnHeight, top: (bodyHH - $(window).height() + padding_top) * 0.5});
        } else {
            layero.css({height: heg + titHeight + btnHeight,
                top: (bodyHH - (heg + titHeight + btnHeight)) * 0.5});
            layero.find('iframe').css({height: heg,
                top: (bodyHH - (heg + titHeight + btnHeight)) * 0.5});
        }
    };

//閲嶇疆iframe url
    layer.iframeSrc = function (index, url) {
        $('#' + doms[0] + index).find('iframe').attr('src', url);
    };

//璁惧畾灞傜殑鏍峰紡
    layer.style = function (index, options, limit) {
        var layero = $('#' + doms[0] + index)
                , contElem = layero.find('.layui-layer-content')
                , type = layero.attr('type')
                , titHeight = layero.find(doms[1]).outerHeight() || 0
                , btnHeight = layero.find('.' + doms[6]).outerHeight() || 0
                , minLeft = layero.attr('minLeft');

        if (type === ready.type[3] || type === ready.type[4]) {
            return;
        }

        if (!limit) {
            if (parseFloat(options.width) <= 260) {
                options.width = 260;
            }
            ;

            if (parseFloat(options.height) - titHeight - btnHeight <= 64) {
                options.height = 64 + titHeight + btnHeight;
            }
            ;
        }

        layero.css(options);
        btnHeight = layero.find('.' + doms[6]).outerHeight();

        if (type === ready.type[2]) {
            layero.find('iframe').css({
                height: parseFloat(options.height) - titHeight - btnHeight
            });
        } else {
            contElem.css({
                height: parseFloat(options.height) - titHeight - btnHeight
                        - parseFloat(contElem.css('padding-top'))
                        - parseFloat(contElem.css('padding-bottom'))
            })
        }
    };

//鏈€灏忓寲
    layer.min = function (index, options) {
        var layero = $('#' + doms[0] + index)
                , titHeight = layero.find(doms[1]).outerHeight() || 0
                , left = layero.attr('minLeft') || (181 * ready.minIndex) + 'px'
                , position = layero.css('position');

        ready.record(layero);

        if (ready.minLeft[0]) {
            left = ready.minLeft[0];
            ready.minLeft.shift();
        }

        layero.attr('position', position);

        layer.style(index, {
            width: 180
            , height: titHeight
            , left: left
            , top: win.height() - titHeight
            , position: 'fixed'
            , overflow: 'hidden'
        }, true);

        layero.find('.layui-layer-min').hide();
        layero.attr('type') === 'page' && layero.find(doms[4]).hide();
        ready.rescollbar(index);

        if (!layero.attr('minLeft')) {
            ready.minIndex++;
        }
        layero.attr('minLeft', left);
    };

//杩樺師
    layer.restore = function (index) {
        var layero = $('#' + doms[0] + index), area = layero.attr('area').split(',');
        var type = layero.attr('type');
        layer.style(index, {
            width: parseFloat(area[0]),
            height: parseFloat(area[1]),
            top: parseFloat(area[2]),
            left: parseFloat(area[3]),
            position: layero.attr('position'),
            overflow: 'visible'
        }, true);
        layero.find('.layui-layer-max').removeClass('layui-layer-maxmin');
        layero.find('.layui-layer-min').show();
        layero.attr('type') === 'page' && layero.find(doms[4]).show();
        ready.rescollbar(index);
    };

//鍏ㄥ睆
    layer.full = function (index) {
        var layero = $('#' + doms[0] + index), timer;
        ready.record(layero);
        if (!doms.html.attr('layer-full')) {
            doms.html.css('overflow', 'hidden').attr('layer-full', index);
        }
        clearTimeout(timer);
        timer = setTimeout(function () {
            var isfix = layero.css('position') === 'fixed';
            layer.style(index, {
                top: isfix ? 0 : win.scrollTop(),
                left: isfix ? 0 : win.scrollLeft(),
                width: win.width(),
                height: win.height()
            }, true);
            layero.find('.layui-layer-min').hide();
        }, 100);
    };

//鏀瑰彉title
    layer.title = function (name, index) {
        var title = $('#' + doms[0] + (index || layer.index)).find(doms[1]);
        title.html(name);
    };

//鍏抽棴layer鎬绘柟娉�
    layer.close = function (index) {
        var layero = $('#' + doms[0] + index), type = layero.attr('type'), closeAnim = 'layer-anim-close';
        if (!layero[0])
            return;
        var WRAP = 'layui-layer-wrap', remove = function () {
            if (type === ready.type[1] && layero.attr('conType') === 'object') {
                layero.children(':not(.' + doms[5] + ')').remove();
                var wrap = layero.find('.' + WRAP);
                for (var i = 0; i < 2; i++) {
                    wrap.unwrap();
                }
                wrap.css('display', wrap.data('display')).removeClass(WRAP);
            } else {
                //浣庣増鏈琁E 鍥炴敹 iframe
                if (type === ready.type[2]) {
                    try {
                        var iframe = $('#' + doms[4] + index)[0];
                        iframe.contentWindow.document.write('');
                        iframe.contentWindow.close();
                        layero.find('.' + doms[5])[0].removeChild(iframe);
                    } catch (e) {
                    }
                }
                layero[0].innerHTML = '';
                layero.remove();
            }
            typeof ready.end[index] === 'function' && ready.end[index]();
            delete ready.end[index];
        };

        if (layero.data('isOutAnim')) {
            layero.addClass('layer-anim ' + closeAnim);
        }

        $('#layui-layer-moves, #layui-layer-shade' + index).remove();
        layer.ie == 6 && ready.reselect();
        ready.rescollbar(index);
        if (layero.attr('minLeft')) {
            ready.minIndex--;
            ready.minLeft.push(layero.attr('minLeft'));
        }

        if ((layer.ie && layer.ie < 10) || !layero.data('isOutAnim')) {
            remove()
        } else {
            setTimeout(function () {
                remove();
            }, 200);
        }
    };

//鍏抽棴鎵€鏈夊眰
    layer.closeAll = function (type) {
        $.each($('.' + doms[0]), function () {
            var othis = $(this);
            var is = type ? (othis.attr('type') === type) : 1;
            is && layer.close(othis.attr('times'));
            is = null;
        });
    };

    /** 
     
     鎷撳睍妯″潡锛宭ayui寮€濮嬪悎骞跺湪涓€璧�
     
     */

    var cache = layer.cache || {}, skin = function (type) {
        return (cache.skin ? (' ' + cache.skin + ' ' + cache.skin + '-' + type) : '');
    };

//浠跨郴缁焢rompt
    layer.prompt = function (options, yes) {
        var style = '';
        options = options || {};

        if (typeof options === 'function')
            yes = options;

        if (options.area) {
            var area = options.area;
            style = 'style="width: ' + area[0] + '; height: ' + area[1] + ';"';
            delete options.area;
        }
        var prompt, content = options.formType == 2 ? '<textarea class="layui-layer-input"' + style + '>' + (options.value || '') + '</textarea>' : function () {
            return '<input type="' + (options.formType == 1 ? 'password' : 'text') + '" class="layui-layer-input" value="' + (options.value || '') + '">';
        }();

        var success = options.success;
        delete options.success;

        return layer.open($.extend({
            type: 1
            , btn: ['&#x786E;&#x5B9A;', '&#x53D6;&#x6D88;']
            , content: content
            , skin: 'layui-layer-prompt' + skin('prompt')
            , maxWidth: win.width()
            , success: function (layero) {
                prompt = layero.find('.layui-layer-input');
                prompt.focus();
                typeof success === 'function' && success(layero);
            }
            , resize: false
            , yes: function (index) {
                var value = prompt.val();
                if (value === '') {
                    prompt.focus();
                } else if (value.length > (options.maxlength || 500)) {
                    layer.tips('&#x6700;&#x591A;&#x8F93;&#x5165;' + (options.maxlength || 500) + '&#x4E2A;&#x5B57;&#x6570;', prompt, {tips: 1});
                } else {
                    yes && yes(value, index, prompt);
                }
            }
        }, options));
    };

//tab灞�
    layer.tab = function (options) {
        options = options || {};

        var tab = options.tab || {}
        , THIS = 'layui-this'
                , success = options.success;

        delete options.success;

        return layer.open($.extend({
            type: 1,
            skin: 'layui-layer-tab' + skin('tab'),
            resize: false,
            title: function () {
                var len = tab.length, ii = 1, str = '';
                if (len > 0) {
                    str = '<span class="' + THIS + '">' + tab[0].title + '</span>';
                    for (; ii < len; ii++) {
                        str += '<span>' + tab[ii].title + '</span>';
                    }
                }
                return str;
            }(),
            content: '<ul class="layui-layer-tabmain">' + function () {
                var len = tab.length, ii = 1, str = '';
                if (len > 0) {
                    str = '<li class="layui-layer-tabli ' + THIS + '">' + (tab[0].content || 'no content') + '</li>';
                    for (; ii < len; ii++) {
                        str += '<li class="layui-layer-tabli">' + (tab[ii].content || 'no  content') + '</li>';
                    }
                }
                return str;
            }() + '</ul>',
            success: function (layero) {
                var btn = layero.find('.layui-layer-title').children();
                var main = layero.find('.layui-layer-tabmain').children();
                btn.on('mousedown', function (e) {
                    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
                    var othis = $(this), index = othis.index();
                    othis.addClass(THIS).siblings().removeClass(THIS);
                    main.eq(index).show().siblings().hide();
                    typeof options.change === 'function' && options.change(index);
                });
                typeof success === 'function' && success(layero);
            }
        }, options));
    };

//鐩稿唽灞�
    layer.photos = function (options, loop, key) {
        var dict = {};
        options = options || {};
        if (!options.photos)
            return;
        var type = options.photos.constructor === Object;
        var photos = type ? options.photos : {}, data = photos.data || [];
        var start = photos.start || 0;
        dict.imgIndex = (start | 0) + 1;

        options.img = options.img || 'img';

        var success = options.success;
        delete options.success;

        if (!type) { //椤甸潰鐩存帴鑾峰彇
            var parent = $(options.photos), pushData = function () {
                data = [];
                parent.find(options.img).each(function (index) {
                    var othis = $(this);
                    othis.attr('layer-index', index);
                    data.push({
                        alt: othis.attr('alt'),
                        pid: othis.attr('layer-pid'),
                        src: othis.attr('layer-src') || othis.attr('src'),
                        thumb: othis.attr('src')
                    });
                })
            };

            pushData();

            if (data.length === 0)
                return;

            loop || parent.on('click', options.img, function () {
                var othis = $(this), index = othis.attr('layer-index');
                layer.photos($.extend(options, {
                    photos: {
                        start: index,
                        data: data,
                        tab: options.tab
                    },
                    full: options.full
                }), true);
                pushData();
            })

            //涓嶇洿鎺ュ脊鍑�
            if (!loop)
                return;

        } else if (data.length === 0) {
            return layer.msg('&#x6CA1;&#x6709;&#x56FE;&#x7247;');
        }

        //涓婁竴寮�
        dict.imgprev = function (key) {
            dict.imgIndex--;
            if (dict.imgIndex < 1) {
                dict.imgIndex = data.length;
            }
            dict.tabimg(key);
        };

        //涓嬩竴寮�
        dict.imgnext = function (key, errorMsg) {
            dict.imgIndex++;
            if (dict.imgIndex > data.length) {
                dict.imgIndex = 1;
                if (errorMsg) {
                    return
                }
                ;
            }
            dict.tabimg(key)
        };

        //鏂瑰悜閿�
        dict.keyup = function (event) {
            if (!dict.end) {
                var code = event.keyCode;
                event.preventDefault();
                if (code === 37) {
                    dict.imgprev(true);
                } else if (code === 39) {
                    dict.imgnext(true);
                } else if (code === 27) {
                    layer.close(dict.index);
                }
            }
        }

        //鍒囨崲
        dict.tabimg = function (key) {
            if (data.length <= 1)
                return;
            photos.start = dict.imgIndex - 1;
            layer.close(dict.index);
            return layer.photos(options, true, key);
            setTimeout(function () {
                layer.photos(options, true, key);
            }, 200);
        }

        //涓€浜涘姩浣�
        dict.event = function () {
            dict.bigimg.hover(function () {
                dict.imgsee.show();
            }, function () {
                dict.imgsee.hide();
            });

            dict.bigimg.find('.layui-layer-imgprev').on('click', function (event) {
                event.preventDefault();
                dict.imgprev();
            });

            dict.bigimg.find('.layui-layer-imgnext').on('click', function (event) {
                event.preventDefault();
                dict.imgnext();
            });

            $(document).on('keyup', dict.keyup);
        };

        //鍥剧墖棰勫姞杞�
        function loadImage(url, callback, error) {
            var img = new Image();
            img.src = url;
            if (img.complete) {
                return callback(img);
            }
            img.onload = function () {
                img.onload = null;
                callback(img);
            };
            img.onerror = function (e) {
                img.onerror = null;
                error(e);
            };
        }
        ;

        dict.loadi = layer.load(1, {
            shade: 'shade' in options ? false : 0.9,
            scrollbar: false
        });

        loadImage(data[start].src, function (img) {
            layer.close(dict.loadi);
            dict.index = layer.open($.extend({
                type: 1,
                id: 'layui-layer-photos',
                area: function () {
                    var imgarea = [img.width, img.height];
                    var winarea = [$(window).width() - 100, $(window).height() - 100];

                    //濡傛灉 瀹為檯鍥剧墖鐨勫鎴栬€呴珮姣� 灞忓箷澶э紙閭ｄ箞杩涜缂╂斁锛�
                    if (!options.full && (imgarea[0] > winarea[0] || imgarea[1] > winarea[1])) {
                        var wh = [imgarea[0] / winarea[0], imgarea[1] / winarea[1]];//鍙栧搴︾缉鏀炬瘮渚嬨€侀珮搴︾缉鏀炬瘮渚�
                        if (wh[0] > wh[1]) {//鍙栫缉鏀炬瘮渚嬫渶澶х殑杩涜缂╂斁
                            imgarea[0] = imgarea[0] / wh[0];
                            imgarea[1] = imgarea[1] / wh[0];
                        } else if (wh[0] < wh[1]) {
                            imgarea[0] = imgarea[0] / wh[1];
                            imgarea[1] = imgarea[1] / wh[1];
                        }
                    }

                    return [imgarea[0] + 'px', imgarea[1] + 'px'];
                }(),
                title: false,
                shade: 0.9,
                shadeClose: true,
                closeBtn: false,
                move: '.layui-layer-phimg img',
                moveType: 1,
                scrollbar: false,
                moveOut: true,
                //anim: Math.random()*5|0,
                isOutAnim: false,
                skin: 'layui-layer-photos' + skin('photos'),
                content: '<div class="layui-layer-phimg">'
                        + '<img src="' + data[start].src + '" alt="' + (data[start].alt || '') + '" layer-pid="' + data[start].pid + '">'
                        + '<div class="layui-layer-imgsee">'
                        + (data.length > 1 ? '<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>' : '')
                        + '<div class="layui-layer-imgbar" style="display:' + (key ? 'block' : '') + '"><span class="layui-layer-imgtit"><a href="javascript:;">' + (data[start].alt || '') + '</a><em>' + dict.imgIndex + '/' + data.length + '</em></span></div>'
                        + '</div>'
                        + '</div>',
                success: function (layero, index) {
                    dict.bigimg = layero.find('.layui-layer-phimg');
                    dict.imgsee = layero.find('.layui-layer-imguide,.layui-layer-imgbar');
                    dict.event(layero);
                    options.tab && options.tab(data[start], layero);
                    typeof success === 'function' && success(layero);
                }, end: function () {
                    dict.end = true;
                    $(document).off('keyup', dict.keyup);
                }
            }, options));
        }, function () {
            layer.close(dict.loadi);
            layer.msg('&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;', {
                time: 30000,
                btn: ['&#x4E0B;&#x4E00;&#x5F20;', '&#x4E0D;&#x770B;&#x4E86;'],
                yes: function () {
                    data.length > 1 && dict.imgnext(true, true);
                }
            });
        });
    };

//涓诲叆鍙�
    ready.run = function (_$) {
        $ = _$;
        win = $(window);
        doms.html = $('html');
        layer.open = function (deliver) {
            var o = new Class(deliver);
            return o.index;
        };
    };

//鍔犺浇鏂瑰紡
    window.layui && layui.define ? (
            layer.ready()
            , layui.define('jquery', function (exports) { //layui鍔犺浇
                layer.path = layui.cache.dir;
                ready.run(layui.$);

                //鏆撮湶妯″潡
                window.layer = layer;
                exports('layer', layer);
            })
            ) : (
            (typeof define === 'function' && define.amd) ? define(['jquery'], function () { //requirejs鍔犺浇
        ready.run(window.jQuery);
        return layer;
    }) : function () { //鏅€歴cript鏍囩鍔犺浇
        ready.run(window.jQuery);
        layer.ready();
    }()
            );

}(window);