<!DOCTYPE html>
<html lang="en">
<!--begin::Head-->

<head>
    <base href="">
    <meta charset="utf-8" />
    <title>Dashboard | {{siteName()}}</title>
    <meta name="description" content="Updates and statistics" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <!--begin::Fonts-->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap"
        rel="stylesheet">
    <!--end::Fonts-->
    <!--begin::Page Vendors Styles(used by this page)-->
    <link rel="preload" as="style" onload="this.rel = 'stylesheet'"
        href="{{asset('')}}upnl/css/fullcalendar.bundle.css" />
    <!--end::Page Vendors Styles-->
    <!--begin::Global Theme Styles(used by all pages)-->
    <meta name="csrf-token" id="csrf-token" content="{{ csrf_token() }}">
    <link rel="preload" as="style" onload="this.rel = 'stylesheet'" href="{{asset('')}}upnl/css/plugins.bundle.css" />
    <link rel="preload" as="style" onload="this.rel = 'stylesheet'" href="{{asset('')}}upnl/css/prismjs.bundle.css" />
    <link rel="stylesheet" href="{{asset('')}}upnl/css/style.bundle.css" />
    <link rel="preload" as="style" onload="this.rel = 'stylesheet'" href="{{asset('')}}upnl/css/wizard-4.css" />
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/css/ion.rangeSlider.min.css" />
    <!-- language -->
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <!-- <link rel="preload" as="style" onload="this.rel = 'stylesheet'" href="{{asset('')}}upnl/css/lang.css"> -->
    <!-- <link rel="preload" as="style" onload="this.rel = 'stylesheet'" href="{{asset('')}}upnl/css/bootstrap-select.css"> -->
    <link href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css" rel="stylesheet"
        type="text/css" />
    <!--end::Global Theme Styles-->
    <!--begin::Layout Themes(used by all pages)-->
    <link rel="stylesheet" href="{{asset('')}}upnl/css/light.css" />
    <link rel="preload" as="style" onload="this.rel = 'stylesheet'" href="{{asset('')}}upnl/css/dark.css" />

    <link rel="stylesheet" href="{{asset('')}}upnl/css/light.css" />
    <link rel="stylesheet" href="{{asset('')}}upnl/css/light2.css" />
    <link rel="stylesheet" type="text/css" href="{{asset('')}}upnl/css/animate.css" />

    <!-- white theme -->
    <link id="whiteCss" rel="stylesheet" type="text/css" href="">

    <!-- flaticon -->
    <link rel="stylesheet" type="text/css" href="{{asset('')}}upnl/css/flaticon.css" />
    <link rel="preload" as="style" onload="this.rel = 'stylesheet'" href="{{asset('')}}upnl/css/slick.css">
    <link rel="preload" as="style" onload="this.rel = 'stylesheet'" href="{{asset('')}}upnl/css/slick-theme.css">
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="{{asset('')}}upnl/css/social-share.min.css" />


    <!--end::Layout Themes-->
    <link rel="shortcut icon" href="{{asset('')}}upnl/images/favicon.png" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script language="JavaScript" type="text/javascript" src="{{asset('')}}upnl/js/general.js"></script>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-CE1J223RSD"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-CE1J223RSD');

    </script>
    <script src="{{asset('')}}upnl/js/jquery.js"></script>
</head>
<!--end::Head-->
<!--begin::Body-->
<style>
    .menu-nav>.menu-item:not(.menu-item-parent):not(.menu-item-open):not(.menu-item-here):not(.menu-item-active):hover>.menu-link {
        background: #1e1f29 !important;
        border-left: 5px double #2dbddd !important;
        border-radius: 0;
    }

    .fas {
        color: #02938af5;
    }

    .btn-primary {
        background: #29c7e0 !important;
        color: #fff !important;
        border: none !important;
        height: 45px !important;
        font-size: 14px !important;
        border-radius: 10px !important;
        padding: 1px 11px !important;
        margin-bottom: 10px !important;
        line-height: 45px;
    }
</style>

<body id="kt_body"
    class="header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed aside-minimize-hoverable page-loading">
    <!--begin::Main-->
    <!--begin::Header Mobile-->
    <div id="kt_header_mobile" class="header-mobile align-items-center header-mobile-fixed">
        <!--begin::Logo-->
        <a href="/">
<<<<<<< HEAD
<<<<<<< HEAD
            <img alt="Logo" src="{{asset('')}}assets/images/newlogo.png" />
=======
            <img alt="Logo" src="{{asset('')}}assets/images/newlogo.png"/>
>>>>>>> 1720704374cc6e0a11b66a1978bc7700da2eacd3
=======
            <img alt="Logo" src="{{asset('')}}assets/images/newlogo.png"/>
>>>>>>> 41e32d65d4b22e9b50e6d4c55b91f5f2ca0aa528
        </a>
        <!--end::Logo-->
        <!--begin::Toolbar-->
        <div class="d-flex align-items-center">
            <!--begin::Header Menu Mobile Toggle-->
            <button class="btn p-0 burger-icon brd-ico ml-4" id="kt_header_mobile_toggle">
                <span class="light-blue"></span>
            </button>
            <!--end::Header Menu Mobile Toggle-->
            <!-- <div class="dp-btn">
				<a href="/rngapp/fund-deposit/RNG49911549">
					<i class="fas fa-money-check-alt"></i>Deposit
					<div class="pulse-css"></div>
				</a>
			</div> -->
            <!--<div class="custom-control custom-switch">-->
            <!--    <input class="custom-control-input" type="checkbox" id="customSwitch2">-->
            <!--    <label class="custom-control-label" for="customSwitch2">Light Mode</label>-->
            <!--</div>-->
            <!--begin::Topbar Mobile Toggle-->
            <button class="btn p-0 ml-2 mobile-btn" id="kt_header_mobile_topbar_toggle">
                <span class="svg-icon svg-icon-xl mobile-header-user-wrap">
                    <!--begin::Svg Icon | path:assets/media/svg/icons/General/User.svg-->
                    <i class='far fa-user'></i>
                    <!--end::Svg Icon-->
                </span>
            </button>
            <!--end::Topbar Mobile Toggle-->
        </div>
        <!--end::Toolbar-->
    </div>
    <!--end::Header Mobile-->
    <div class="d-flex flex-column flex-root">
        <!--begin::Page-->
        <div class="d-flex flex-row flex-column-fluid page">
            <!--begin::Aside-->
            <div class="aside aside-left aside-fixed d-flex flex-column flex-row-auto" id="kt_aside">
                <!--begin::Brand-->
                <div class="brand logo-brand flex-column-auto" id="kt_brand">
                    <!--begin::Logo-->
                    <a href="/" class="brand-logo">
                        <img alt="Logo" src="{{asset('')}}assets/images/newlogo.png" />
                    </a>
                    <!--end::Logo-->
                    <!--begin::Toggle-->
                    <button class="brand-toggle btn btn-sm px-0" id="kt_aside_toggle">
                        <span class="svg-icon svg-icon svg-icon-xl">
                            <!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Angle-double-left.svg-->
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <polygon points="0 0 24 0 24 24 0 24" />
                                    <path
                                        d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z"
                                        fill="#000000" fill-rule="nonzero"
                                        transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999)" />
                                    <path
                                        d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z"
                                        fill="#000000" fill-rule="nonzero" opacity="0.3"
                                        transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999)" />
                                </g>
                            </svg>
                            <!--end::Svg Icon-->
                        </span>
                    </button>
                    <!--end::Toolbar-->
                </div>



                <!--end::Brand-->
                <!--begin::Aside Menu-->
                <div class="aside-menu-wrapper flex-column-fluid" id="kt_aside_menu_wrapper">
                    <div class="sidebar">
                        <div class="profile">
                            <a href="#" class="hover-no-color">
                                <h5 class="mb-0">
                                    <?php echo substr(Auth::user()->name, 0, 1)?>
                                </h5>
                            </a>
                        </div>
                        <div class="side-user__right">
                            <p class="text-title">{{Auth::user()->name}} </p>
                            <div class="id-section">
                                <!-- <span class="text-id">ID:</span> -->
                                <strong id="foo1">{{Auth::user()->username}}</strong>
                                <button class="copy-btn pr-0" data-clipboard-target="#foo1">
                                    <i class="bx bx-copy mr-0"></i>
                                </button>
                            </div>

                        </div>
                    </div>
                    <!--begin::Menu Container-->
                    <div id="kt_aside_menu" class="aside-menu my-4" data-menu-vertical="1" data-menu-scroll="1"
                        data-menu-dropdown-timeout="500">
                        <!--begin::Menu Nav-->
                        <ul style="background-color:#e5eaee;" class="menu-nav">
                            <li class="menu-item" aria-haspopup="true" id="dashboard">
                                <a href="{{route('user.dashboard')}}" class="menu-link">
                                    <span class="svg-icon menu-icon sidemenu-icon">
                                        <i class="bx bx-line-chart"></i>
                                    </span>
                                    <span class="menu-text">Dashboard</span>
                                </a>
                            </li>

                            <li class="menu-item" aria-haspopup="true">
                                <a href="{{route('user.profile')}}" class="menu-link">
                                    <span class="svg-icon menu-icon sidemenu-icon">
                                        <i class='bx bx-group'></i>
                                    </span>
                                    <span class="menu-text">My Profile</span>
                                </a>
                            </li>




                            <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover"
                                id="funds">
                                <a href="javascript:;" class="menu-link menu-toggle">
                                    <span class="svg-icon menu-icon sidemenu-icon">
                                        <i class='bx bx-credit-card-front'></i>
                                    </span>
                                    <span class="menu-text">Packages</span>
                                    <i class="fas fa-angle-right" id="arrow-icon"></i>
                                </a>
                                <div class="menu-submenu dropdown-menu-wrap">
                                    <i class="menu-arrow"></i>
                                    <ul class="menu-subnav">

                                        <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                            data-menu-toggle="hover">
                                            <a href="{{route('user.invest')}}" class="menu-link">
                                                <span class="menu-text">Buy Package</span>
                                            </a>
                                        </li>



                                        <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                            data-menu-toggle="hover">
                                            <a href="{{route('user.DepositHistory')}}" class="menu-link">
                                                <span class="menu-text">Package Reports</span>
                                            </a>
                                        </li>


                                    </ul>
                                </div>
                            </li>



                            <li class="menu-item" aria-haspopup="true">
                                <a href="{{route('user.AddFund')}}" class="menu-link">
                                    <span class="svg-icon menu-icon sidemenu-icon">
                                        <i class="bx bx-credit-card"></i>
                                    </span>
                                    <span class="menu-text">Fund Deposit</span>
                                </a>
                            </li>

                            {{-- <li class="menu-item" aria-haspopup="true">
                                <a href="{{route('user.BankDetail')}}" class="menu-link">
                                    <span class="svg-icon menu-icon sidemenu-icon">
                                        <i class="bx bx-credit-card"></i>
                                    </span>
                                    <span class="menu-text">Bank Detail</span>
                                </a>
                            </li> --}}
                            {{--
                            <li class="menu-item" aria-haspopup="true" id="profile">
                                <a href="{{route('user.Withdraw-History')}}" class="menu-link">
                                    <span class="svg-icon menu-icon sidemenu-icon">
                                        <i class="bx bx-wallet"></i>
                                    </span>
                                    <span class="menu-text">Withdrawal Accounts</span>
                                </a>
                            </li> --}}
                            {{-- <li class="menu-item" aria-haspopup="true">
                                <a href="{{route('user.transfer-fund')}}" class="menu-link">
                                    <span class="svg-icon menu-icon sidemenu-icon">
                                        <i class="bx bx-send"></i>
                                    </span>
                                    <span class="menu-text">Transfer Fund</span>
                                </a>
                            </li> --}}



                            <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover"
                                id="funds">
                                <a href="javascript:;" class="menu-link menu-toggle">
                                    <span class="svg-icon menu-icon sidemenu-icon">
                                        <i class='bx bx-share-alt'></i>
                                    </span>
                                    <span class="menu-text">My Network</span>
                                    <i class="fas fa-angle-right" id="arrow-icon"></i>
                                </a>
                                <div class="menu-submenu dropdown-menu-wrap">
                                    <i class="menu-arrow"></i>
                                    <ul class="menu-subnav">

                                        <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                            data-menu-toggle="hover">
                                            <a href="{{route('user.referral-team')}}" class="menu-link">
                                                <span class="menu-text">Referral team</span>
                                            </a>
                                        </li>


                                      <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                            data-menu-toggle="hover">
                                            <a href="{{route('user.level-team')}}" class="menu-link">
                                                <span class="menu-text">Level team</span>
                                            </a>
                                        </li>
                                        





                                        <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                            data-menu-toggle="hover">
                                            <a href="{{route('user.new-register')}}" class="menu-link">
                                                <span class="menu-text">New Register</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>




                            <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover"
                                id="funds">
                                <a href="javascript:;" class="menu-link menu-toggle">
                                    <span class="svg-icon menu-icon sidemenu-icon">
                                        <i class='bx bx-credit-card-front'></i>
                                    </span>
                                    <span class="menu-text">Withdrawal</span>
                                    <i class="fas fa-angle-right" id="arrow-icon"></i>
                                </a>
                                <div class="menu-submenu dropdown-menu-wrap">
                                    <i class="menu-arrow"></i>
                                    <ul class="menu-subnav">

                                        <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                            data-menu-toggle="hover">
                                            <a href="{{route('user.withdraw-request')}}" class="menu-link">
                                                <span class="menu-text">Withdrawal Request</span>
                                            </a>
                                        </li>

                                        <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                            data-menu-toggle="hover">
                                            <a href="{{route('user.Withdraw-History')}}" class="menu-link">
                                                <span class="menu-text">Withdrawal Report</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>






                            <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover"
                                id="reports">
                                <a href="javascript:;" class="menu-link menu-toggle">
                                    <span class="svg-icon menu-icon sidemenu-icon">
                                        <i class="bx bx-bar-chart"></i>
                                    </span>
                                    <span class="menu-text">Report</span>
                                    <i class="fas fa-angle-right" id="arrow-icon"></i>
                                </a>
                                <div class="menu-submenu dropdown-menu-wrap">
                                    <i class="menu-arrow"></i>
                                    <ul class="menu-subnav">

                                        <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                            data-menu-toggle="hover">
                                            <a href="{{route('user.fundHistory')}}" class="menu-link">
                                                <span class="menu-text">Fund Reports</span>
                                            </a>
                                        </li>
                                       

                                        <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                        data-menu-toggle="hover">
                                        <a href="{{route('user.direct-income')}}" class="menu-link">
                                            <span class="menu-text">Referral Income</span>
                                        </a>
                                    </li>

                                        <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                            data-menu-toggle="hover">
                                            <a href="{{route('user.level-income')}}" class="menu-link">
                                                <span class="menu-text">Level Income</span>
                                            </a>
                                        </li>
                                       

                                        <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                            data-menu-toggle="hover">
                                            <a href="{{route('user.reward-bonus')}}" class="menu-link">
                                                <span class="menu-text">Lelevel</span>
                                            </a>
                                        </li>



                                    </ul>
                                </div>
                            </li>

                            <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover"
                                id="reports">
                                <a href="javascript:;" class="menu-link menu-toggle">
                                    <span class="svg-icon menu-icon sidemenu-icon">
                                        <i class="bx bx-bar-chart"></i>
                                    </span>
                                    <span class="menu-text">Recharge</span>
                                    <i class="fas fa-angle-right" id="arrow-icon"></i>
                                </a>
                                <div class="menu-submenu dropdown-menu-wrap">
                                    <i class="menu-arrow"></i>
                                    <ul class="menu-subnav">

                                        <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                            data-menu-toggle="hover">
                                            <a href="{{route('user.mobile')}}" class="menu-link">
                                                <span class="menu-text">Mobile Rechage</span>
                                            </a>
                                        </li>
                                       

                                        <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                        data-menu-toggle="hover">
                                        <a href="{{route('user.dth')}}" class="menu-link">
                                            <span class="menu-text">DTH Recharge</span>
                                        </a>
                                    </li>

                                        <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                            data-menu-toggle="hover">
                                            <a href="{{route('user.postpaid')}}" class="menu-link">
                                                <span class="menu-text">Postpaid Rechage</span>
                                            </a>
                                        </li>
                                       
                                        <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                            data-menu-toggle="hover">
                                            <a href="{{route('user.gas')}}" class="menu-link">
                                                <span class="menu-text">gas</span>
                                            </a>
                                        </li> 

                                        <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                            data-menu-toggle="hover">
                                            <a href="{{route('user.elecrticity')}}" class="menu-link">
                                                <span class="menu-text">Ecectricity</span>
                                            </a>
                                        </li>                                        
                                        <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                            data-menu-toggle="hover">
                                            <a href="{{route('user.newpan')}}" class="menu-link">
                                                <span class="menu-text">New Pan</span>
                                            </a>
                                        </li> 
                                        <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                            data-menu-toggle="hover">
                                            <a href="{{route('user.pancard')}}" class="menu-link">
                                                <span class="menu-text">Pan Card Correction</span>
                                            </a>
                                        </li> 
                                        <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                            data-menu-toggle="hover">
                                            <a href="{{route('user.pantable')}}" class="menu-link">
                                                <span class="menu-text">Incomplete Pan Card Details</span>
                                            </a>
                                        </li> 
                                    </ul>
                                </div>
                            </li>

                            <li class="menu-item" aria-haspopup="true" id="support">
                                <a href="{{route('user.ticket')}}" class="menu-link">
                                    <span class="svg-icon menu-icon sidemenu-icon">
                                        <i class='bx bx-user-voice'></i>
                                    </span>
                                    <span class="menu-text">Support</span>
                                </a>
                            </li>




                            <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover"
                                id="profile">
                                <a href="javascript:;" class="menu-link menu-toggle">
                                    <span class="svg-icon menu-icon sidemenu-icon">
                                        <i class="bx bx-wrench"></i>
                                    </span>
                                    <span class="menu-text">Settings</span>
                                    <i class="fas fa-angle-right" id="arrow-icon"></i>
                                </a>
                                <div class="menu-submenu dropdown-menu-wrap">
                                    <i class="menu-arrow"></i>
                                    <ul class="menu-subnav">
                                        <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                            data-menu-toggle="hover">
                                            <a href="{{route('user.BankDetail')}}" class="menu-link">
                                                <span class="menu-text">Bank Kyc</span>
                                            </a>
                                        </li>
                                        <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                            data-menu-toggle="hover">
                                            <a href="{{route('user.ChangePass')}}" class="menu-link">
                                                <span class="menu-text">Password Setting</span>
                                            </a>
                                        </li>
                                        <li class="menu-item menu-item-submenu" aria-haspopup="true"
                                            data-menu-toggle="hover">
                                            <a href="{{route('user.trx-password')}}" class="menu-link">
                                                <span class="menu-text">Change Transaction Password</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </li>

                            <li class="menu-item" aria-haspopup="true" id="support">
                                <a href="{{route('logout')}}" onclick="event.preventDefault();
                                document.getElementById('logout-form').submit();" class="menu-link">
                                    <span class="svg-icon menu-icon sidemenu-icon">
                                        <i class="fas fa-power-off mr-2"></i>
                                    </span>
                                    <span class="menu-text">Logout</span>
                                </a>
                            </li>



                        </ul>
                        <!--end::Menu Nav-->
                    </div>
                    <!--end::Menu Container-->
                </div>
                <!--end::Aside Menu-->
            </div>
            <!--end::Aside-->
            <div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                <!--begin::Header-->
                <div id="kt_header" class="header">
                    <!--begin::Container-->
                    <div class="container-fluid d-flex align-items-stretch justify-content-between m-container">
                        <!--begin::Header Menu Wrapper-->
                        <div class="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
                            <!--begin::Header Menu-->
                            <div id="kt_header_menu" class="header-menu header-menu-mobile header-menu-layout-default">
                                <span id="server-time"></span>
                            </div>
                            <!--end::Header Menu-->
                        </div>
                        <!--end::Header Menu Wrapper-->
                        <!--begin::Topbar-->
                        <div class="topbar header-topbar-mbsc">
                            <!--<div class="custom-control custom-switch hidein-mobile">-->
                            <!--    <input class="custom-control-input" type="checkbox" id="customSwitch1">-->
                            <!--    <label class="custom-control-label" for="customSwitch1">Light Mode</label>-->
                            <!--</div>-->
                            <!--<div class="lang-field">-->
                            <!--    <div id="google_translate_element" style="display: none;"></div>-->
                            <!--    <select class="selectpicker" data-width="fit" onchange="translateLanguage(this.value);">-->
                            <!--        <option data-content='<span class="fi fi-gb fis"></span> English' value="English">-->
                            <!--            English</option>-->
                            <!--        <option data-content='<span class="fi fi-fr fis"></span> French' value="French">-->
                            <!--            French</option>-->
                            <!--        <option data-content='<span class="fi fi-cn fis"></span> Chinese' value="Chinese">-->
                            <!--            Chinese</option>-->
                            <!--        <option data-content='<span class="fi fi-jp fis"></span> Japanese' value="Japanese">-->
                            <!--            Japanese</option>-->
                            <!--        <option data-content='<span class="fi fi-ru fis"></span> Russian' value="Russian">-->
                            <!--            Russian</option>-->
                            <!--        <option data-content='<span class="fi fi-id fis"></span> Indonesian'-->
                            <!--            value="Indonesian">Indonesian</option>-->
                            <!--        <option data-content='<span class="fi fi-tr fis"></span> Turkish' value="Turkish">-->
                            <!--            Turkish</option>-->
                            <!--        <option data-content='<span class="fi fi-am fis"></span> Armenian' value="Armenian">-->
                            <!--            Armenian</option>-->
                            <!--        <option data-content='<span class="fi fi-kr fis"></span> Korean' value="Korean">-->
                            <!--            Korean</option>-->
                            <!--        <option data-content='<span class="fi fi-de fis"></span> German' value="German">-->
                            <!--            German</option>-->
                            <!--        <option data-content='<span class="fi fi-es fis"></span> Spanish' value="Spanish">-->
                            <!--            Spanish</option>-->
                            <!--        <option data-content='<span class="fi fi-gr fis"></span> Greece' value="Greek">-->
                            <!--            Greece</option>-->
                            <!--        <option data-content='<span class="fi fi-si fis"></span> Slovenian'-->
                            <!--            value="Slovenian">Slovenian</option>-->
                            <!--        <option data-content='<span class="fi fi-it fis"></span> Italian' value="Italian">-->
                            <!--            Italian</option>-->
                            <!--        <option data-content='<span class="fi fi-vn fis"></span> Vietnamese'-->
                            <!--            value="Vietnamese">Vietnamese</option>-->
                            <!--        <option data-content='<span class="fi fi-hr fis"></span> Croatian' value="Croatian">-->
                            <!--            Croatian</option>-->
                            <!--        <option data-content='<span class="fi fi-ie fis"></span> Irish' value="Irish">Irish-->
                            <!--        </option>-->
                            <!--        <option data-content='<span class="fi fi-ae fis"></span> Arabic' value="Arabic">-->
                            <!--            Arabic</option>-->
                            <!--        <option data-content='<span class="fi fi-cz fis"></span> Czech' value="Czech">Czech-->
                            <!--        </option>-->
                            <!--        <option data-content='<span class="fi fi-pt fis"></span> Portuguese'-->
                            <!--            value="Portuguese">Portuguese</option>-->
                            <!--        <option data-content='<span class="fi fi-th fis"></span> Thai' value="Thai">Thai-->
                            <!--        </option>-->
                            <!--        <option data-content='<span class="fi fi-in fis"></span> Hindi' value="Hindi">Hindi-->
                            <!--        </option>-->
                            <!--        <option data-content='<span class="fi fi-mm fis"></span> Burmese' value="Myanmar">-->
                            <!--            Burmese</option>-->
                            <!--    </select>-->
                            <!--</div>-->
                            <!--end::Notifications-->
                            <!--begin::Languages-->

                            <!--end::Languages-->

                            <!--begin::Languages-->
                            <div class="dropdown dropdown-main dropdown-first">
                                <!--begin::Toggle-->
                                <!--begin::User-->
                                <div class="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
                                    <a class="top-header-profile-link-wrap" href="#" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="top-header-profile-icon">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </a>
                                </div>
                                <!--end::Toggle-->
                                <!--begin::Dropdown-->
                                <div class="dropdown-menu  dropdown-menu-anim-up dropdown-menu-right iq-sub-dropdown iq-user-dropdown"
                                    data-bs-popper="none">
                                    <div class="iq-card-body p-0">
                                        <div class="bg-primary  prof-wrap">
                                            <h5 class="mb-3">Profile Options</h5>
                                        </div>
                                        <a href="{{route('user.profile')}}" class="iq-sub-card iq-bg-primary-hover">
                                            <div class="media align-items-center">
                                                <div class="rounded-10 iq-card-icon iq-bg-primary">
                                                    <i class="bx bx-user-circle"></i>
                                                </div>
                                                <div class="media-body ml-3">
                                                    <h6 class="mb-0">View Profile</h6>
                                                    <p class="mb-0 font-size-12">Access personal profile details.</p>
                                                </div>
                                            </div>
                                        </a>

                                        <a href="{{route('user.ChangePass')}}" class="iq-sub-card iq-bg-primary-hover">
                                            <div class="media align-items-center">
                                                <div class="rounded-10 iq-card-icon iq-bg-primary">
                                                    <i class='bx bx-shield'></i>
                                                </div>
                                                <div class="media-body ml-3">
                                                    <h6 class="mb-0">Security</h6>
                                                    <p class="mb-0 font-size-12">Enhance your account security</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="vwall-noti">
                                            <a href="{{ route('logout') }}" onclick="event.preventDefault();
                                            document.getElementById('logout-form').submit();" role="button"
                                                class="iq-sign-btn">
                                                <i class="fas fa-power-off mr-2"></i> Logout
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf
                            </form>



                            <!--end::Languages-->
                            <!--begin::User-->

                            <!--end::User-->
                        </div>
                        <!--end::Topbar-->
                    </div>
                    <!--end::Container-->
                </div>
                <!--end::Header-->