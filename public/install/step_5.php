<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title><?php echo $html_title; ?></title>
        <link href="css/install.css" rel="stylesheet" type="text/css">
        <script type="text/javascript" src="js/jquery.js"></script>
        <link href="css/perfect-scrollbar.min.css" rel="stylesheet" type="text/css">
        <script type="text/javascript" src="js/perfect-scrollbar.min.js"></script>
        <script type="text/javascript" src="js/jquery.mousewheel.js"></script>
    </head>
    <body>
        <?php echo $html_header; ?>
        <div class="main">
            <div class="final-succeed"><img  class="ico" src="images/success.png"/>
                <h2>程序已成功安装</h2>
            </div>
            <div class="final-site-nav">
                <div class="arrow"></div>
                <div class="final-intro">
                    <p><strong>系统后台地址:&nbsp;</strong><a href="<?php echo $auto_site_url; ?>" target="_blank"><?php echo $auto_site_url; ?></a></p>
                    <br>
                    <p><strong>默认登陆账号:&nbsp;</strong><span><?php echo $_GET['username']; ?></span><strong><span style="margin-left: 20px"></span>默认登陆密码:&nbsp;</strong><span style="font-style:italic">您设的密码</span></p>
                    <br>
                </div>
            </div>

        </div>
        <?php echo $html_footer; ?>
        <script type="text/javascript">
            $(document).ready(function () {
                $('#text-box').perfectScrollbar();
            });
        </script>
    </body>
</html>
