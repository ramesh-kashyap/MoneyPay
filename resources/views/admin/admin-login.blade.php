<!DOCTYPE html>
<html lang="en" class="h-100">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="keywords" content="" />
    <meta name="author" content="" />
    <meta name="robots" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="{{siteName()}} | Admin Login" />
    <meta property="og:title" content="{{siteName()}} | Admin Login" />
    <meta property="og:description" content="{{siteName()}} | Admin Login" />
    <meta property="og:image" content="{{asset('')}}mainsite/images/logo/gfx-trade-logo.png" />
    <meta name="format-detection" content="telephone=no">

    <!-- PAGE TITLE HERE -->
    <title>{{siteName()}} | Admin Login</title>

    <style>
         .DZ-theme-btn.DZ-bt-buy-now 
         {
             display: none;
        }
        .DZ-theme-btn.DZ-bt-support-now {
            display: none;
        }
        .at-expanding-share-button[data-position=bottom-left] {
            display: none;
        }
    </style>
    <!-- FAVICONS ICON -->
    <link rel="shortcut icon" type="image/png" href="{{asset('')}}admin/images/favicon.png" />
    <link href="{{asset('')}}admin/css/style.css" rel="stylesheet">

</head>

<body class="vh-100">
    <div class="authincation h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-md-6">
                    <div class="authincation-content">
                        <div class="row no-gutters">
                            <div class="col-xl-12">
                                <div class="auth-form">
                                    <div class="text-center mb-3">
                                        <a href="{{asset('')}}"><img src="{{asset('')}}mainsite/images/logo/gfx-trade-logo.png" style="width: 199px;
                                            margin-top: -47px;" alt=""></a>
                                    </div>
                                    <h4 class="text-center mb-4">Admin Login</h4>
                                    <form  method="POST" action="{{ route('admin.LoginAction') }}">
                                      {{ csrf_field() }}
                                        <div class="mb-3">
                                            <label class="mb-1"><strong>Email or Username</strong></label>
                                            <input type="text" class="form-control" name="username" placeholder="Username" value="">
                                        </div>
                                        <div class="mb-3">
                                            <label class="mb-1"><strong>Password</strong></label>
                                            <input type="password" class="form-control" name="password" value="" placeholder="Password">
                                        </div>
                                        <div class="row d-flex justify-content-between mt-4 mb-2">
                                            <div class="mb-3">
                                                <div class="form-check custom-checkbox ms-1">
                                                    <input type="checkbox" class="form-check-input"
                                                        id="basic_checkbox_1">
                                                    <label class="form-check-label" for="basic_checkbox_1">Remember my
                                                        preference</label>
                                                </div>
                                            </div>
                                           
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary btn-block">Sign Me In</button>
                                        </div>
                                    </form>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    @include('partials.notify')

    <!--**********************************
        Scripts
    ***********************************-->
    <!-- Required vendors -->
    <script src="{{asset('')}}admin/vendor/global/global.min.js"></script>
    <script src="{{asset('')}}admin/js/custom.min.js"></script>
    <script src="{{asset('')}}admin/js/deznav-init.js"></script>

</body>

</html>
