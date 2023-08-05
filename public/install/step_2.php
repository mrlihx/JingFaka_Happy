<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title><?php echo $html_title; ?></title>
        <link href="css/install.css" rel="stylesheet" type="text/css">
        <script src="js/jquery.js"></script>
        <script>
            $(document).ready(function () {
                $('#next').click(function () {
                    if ($('#radio-1').attr('checked')) {
                        $('#install_form').submit();
                    } else {
                        alert('必须完全安装');
                    }
                });
            });
        </script>
    </head>

    <body>
        <?php ECHO $html_header; ?>
        <div class="main">
            <div class="step-box" id="step2">
                <div class="text-nav">
                    <h2>选择安装方式</h2>
                    <h5>根据需要选择系统模块完全或手动安装</h5>
                </div>
            </div>
            <form method="get" id="install_form" action="index.php">
                <input type="hidden" value="3" name="step">
                <div class="select-install">
                    <label>
                        <input type="radio" name="iCheck" value="full" id="radio-1" style="float: left" checked >
                        <h4>完全安装系统</h4>
                    </label>
                </div>

                <div class="btn-box"><a href="index.php?step=1" class="btn btn-primary">上一步</a><a id="next" href="javascript:void(0);" class="btn btn-primary">下一步</a></div>
            </form>
        </div>
        <?php ECHO $html_footer; ?>
    </body>
</html>
