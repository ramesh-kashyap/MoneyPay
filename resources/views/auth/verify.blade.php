<!doctype html>
<html lang="en" itemscope itemtype="http://schema.org/WebPage">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="zJQ7RwskMpdZv7xt1xcfg0rdSLr8EusWebPImXU3">
    <title> Xaxino - Login</title>

    <meta name="title" Content="Xaxino - Login">

    <meta name="description" content="Welcome to Xaxino - The ultimate casino platform! Join the fun and excitement of our extensive selection of games, including Head and tail, Spin Wheel, Number Guessing, Dice Rolling, Number Slot, and Casino Dice games. With top-notch security measures and 24/7 customer support, you can enjoy a safe and seamless gaming experience. Sign up today and get ready to win big!">
    <meta name="keywords" content="live game,xaxino game,casino platform">
    <link rel="shortcut icon" href="{{asset('')}}assets/images/logoIcon/favicon.png" type="image/x-icon">

    
    <link rel="apple-touch-icon" href="{{asset('')}}assets/images/logoIcon/logo.png">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Xaxino - Login">
    
    <meta itemprop="name" content="Xaxino - Login">
    <meta itemprop="description" content="Welcome to Xaxino - The ultimate casino platform! Join the fun and excitement of our extensive selection of games, including Head and tail, Spin Wheel, Number Guessing, Dice Rolling, Number Slot, and Casino Dice games. With top-notch security measures and 24/7 customer support, you can enjoy a safe and seamless gaming experience. Sign up today and get ready to win big!">
    <meta itemprop="image" content="https://script.viserlab.com/xaxino/demo/assets/images/seo/65af51737a1f51705988467.png">
    
    <meta property="og:type" content="website">
    <meta property="og:title" content="Xaxino - Ultimate Casino Platform">
    <meta property="og:description" content="Get ready for non-stop entertainment and big wins with Xaxino - Ultimate Casino Platform! Our platform offers various games, including Head and tail, Spin Wheel, Number Guessing, Dice Rolling, Number Slot, and Casino Dice games, and thrilling live dealer options. With seamless mobile compatibility, you can enjoy your favourite games anytime. Our friendly and knowledgeable customer support team is available 24/7 to ensure a smooth and enjoyable gaming experience. Join now and experience the excitement of our Casino Platform!">
    <meta property="og:image" content="https://script.viserlab.com/xaxino/demo/assets/images/seo/65af51737a1f51705988467.png" />
    <meta property="og:image:type" content="png" />
    <meta property="og:image:width" content="1180" />
    <meta property="og:image:height" content="600" />
    <meta property="og:url" content="https://script.viserlab.com/xaxino/demo/user/login">
    
    <meta name="twitter:card" content="summary_large_image">

    <link href="{{asset('')}}assets/global/css/bootstrap.min.css" rel="stylesheet">
    <link href="{{asset('')}}assets/global/css/all.min.css" rel="stylesheet">
    <link href="{{asset('')}}assets/global/css/line-awesome.min.css" rel="stylesheet" />

    <link href="{{asset('')}}assets/global/css/lightcase.css" rel="stylesheet">
    <link href="{{asset('')}}assets/templates/basic/css/animate.min.css" rel="stylesheet">
    <link href="{{asset('')}}assets/templates/basic/css/slick.css" rel="stylesheet">
    <link href="{{asset('')}}assets/templates/basic/css/main.css" rel="stylesheet">
    <link href="{{asset('')}}assets/templates/basic/css/custom.css" rel="stylesheet">
    <link href="{{asset('')}}assets/templates/basic/css/color.php%EF%B9%96color=E3BC3F.css" rel="stylesheet">

        </head>

<body>
    
    <div class="preloader">
        <div class="preloader__inner">
            <div class="preloader__thumb">
                <img class="loaderLogo mt-3" src="{{asset('')}}assets/images/logoIcon/logo.png" alt="imge">
                <img class="loadercircle" src="{{asset('')}}assets/templates/basic/images/preloader-dice.png" alt="image">
            </div>
        </div>
    </div>

    <div class="page-wrapper" id="main-scrollbar" data-scrollbar>

                <section class="login-section bg_img" style="background-image: url( ../assets/images/frontend/login/6305e36cea4e31661330284.jpg );">
        <div class="login-area">
            <div class="login-area-inner">
                <div class="text-center">
                    <a class="site-logo mb-4" href="{{route('Index')}}">
                        <img src="{{asset('')}}assets/images/logoIcon/logo.png" alt="site-logo">
                    </a>
                    
                  
                </div>
                <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse"
                                    bordercolor="#111111" width="100%">

                                    <tr>
                                        <td class="forgotbg loginop" width="100%" valign="top">
                                            <div class="">




                                                <form name="frmlogin" method="POST"
                                                    class="request_qoute_form wrap-form clearfix"
                                                    action="{{route('login')}}">
                                                    {{ csrf_field() }}

                                                    <center>
                                                        <table cellspacing=0 cellpadding=2 border=0 width="100%">
                                                            <tr>
                                                                <td class="loginborder" colspan="2">
                                                                    @if(session()->has('messages'))
                                                                    <?php
                                $user_details=session()->get('messages')
                              ?>



                                                                    <h4 style="color: #fff">Congratulations! Your
                                                                        Account has been successfully
                                                                        Created.</h4>
                                                                    <br>

                                                                    <h4 style="color: #fff">Dear <span
                                                                            class="main-color"
                                                                            style="color: #ffc70d;font-weight: 700;">{{$user_details->name }}</span>,
                                                                    </h4>
                                                                    <br>
                                                                    <h4 style="color: #fff"> You have been successfully
                                                                        registered. <br> Your
                                                                        user id is <span class="main-color"
                                                                            style="  color: #ffc70d;font-weight: 700;">{{$user_details->username  }}</span>
                                                                        Password is: <span class="main-color"
                                                                            style="color: #ffc70d;font-weight: 700;">
                                                                            {{$user_details->PSR  }}</span> and
                                                                        Transaction Password is: <span
                                                                            class="main-color"
                                                                            style="color: #ffc70d;font-weight: 700;">
                                                                            {{$user_details->TPSR  }}</span>
                                                                        please check your mail for more details.</h4>

                                                                    @endif

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="loginborder" colspan="2">

                                                                <br>

                                                                <div class="mt-5">
                                                                    <a href="{{route('login')}}" class="cmn-btn rounded-0 w-100"><center>login</center></a></div>

                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </center>
                                                </form>

                                        </td>
                                    </tr>
                                </table>
            </div>
        </div>
    </section>

    </div>

    <div class="win-loss-popup">
        <div class="win-loss-popup__bg">
            <div class="win-loss-popup__inner">
                <div class="win-loss-popup__body">
                    <img class="img-glow lose d-none" src="{{asset('')}}assets/templates/basic/images/play/lose-message.png" alt="lose message image">
                    <img class="img-glow win d-none" src="{{asset('')}}assets/templates/basic/images/play/win-message.png" alt="win message image">
                </div>
                <div class="win-loss-popup__footer">
                    <h2 class="result-text">The result is <span class="data-result"></span></h2>
                    <h5></h5>
                </div>
            </div>
        </div>
    </div>

    <div class="scroll-to-top">
        <span class="scroll-icon">
            <i class="las la-arrow-up"></i>
        </span>
    </div>

    
           
    
    <script src="{{asset('')}}assets/global/js/jquery-3.6.0.min.js"></script>
    <script src="{{asset('')}}assets/global/js/bootstrap.bundle.min.js"></script>

    
    <script>
    (function($){
            "use strict"
            $('.verify-gcaptcha').on('submit',function(){
                var response = grecaptcha.getResponse();
                if (response.length == 0) {
                    document.getElementById('g-recaptcha-error').innerHTML = '<span class="text-danger">Captcha field is required.</span>';
                    return false;
                }
                return true;
            });
        })(jQuery);
</script>

    
    <link href="{{asset('')}}assets/global/css/iziToast.min.css" rel="stylesheet">
<script src="{{asset('')}}assets/global/js/iziToast.min.js"></script>

<script>
    "use strict";

    function notify(status, message) {
        if (typeof message == 'string') {
            iziToast[status]({
                message: message,
                position: "topRight"
            });
        } else {
            $.each(message, function(i, val) {
                iziToast[status]({
                    message: val,
                    position: "topRight"
                });
            });
        }
    }
</script>

    <script src="{{asset('')}}assets/global/js/lightcase.js"></script>
    <script src="{{asset('')}}assets/templates/basic/js/slick.min.js"></script>
    <script src="{{asset('')}}assets/templates/basic/js/wow.min.js"></script>
    <script src="{{asset('')}}assets/templates/basic/js/app.js"></script>

    <script>
        (function($) {
            "use strict";
            $(".langSel").on("change", function() {
                window.location.href = "https://script.viserlab.com/xaxino/demo/change/" + $(this).val();
            });

            $('.policy').on('click', function() {
                $.get('https://script.viserlab.com/xaxino/demo/cookie/accept', function(response) {
                    $('.cookies-card').addClass('d-none');
                });
            });

            setTimeout(function() {
                $('.cookies-card').removeClass('hide')
            }, 2000);

            var inputElements = $('[type=text],[type=password],[type=email],[type=number],select,textarea');
            $.each(inputElements, function(index, element) {
                element = $(element);
                element.closest('.form-group').find('label').attr('for', element.attr('name'));
                element.attr('id', element.attr('name'))
            });

            $.each($('input, select, textarea'), function(i, element) {
                var elementType = $(element);
                if (elementType.attr('type') != 'checkbox') {
                    if (element.hasAttribute('required')) {
                        $(element).closest('.form-group').find('label').addClass('required');
                    }
                }
            });

            Array.from(document.querySelectorAll('table')).forEach(table => {
                let heading = table.querySelectorAll('thead tr th');
                Array.from(table.querySelectorAll('tbody tr')).forEach((row) => {
                    Array.from(row.querySelectorAll('td')).forEach((colum, i) => {
                        colum.setAttribute('data-label', heading[i].innerText)
                    });
                });
            });


        })(jQuery);
    </script>

</body>

</html>
@include('partials.notify')