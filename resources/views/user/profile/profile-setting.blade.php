<script>
    $("#My Profile").addClass("menu-item-active");
</script>
<script src="{{ asset('') }}upnl/js/clipboard.min.js"></script>

<script>
    // Initialize ClipboardJS
    var clipboard = new ClipboardJS('.copy-btn');

    // Show success message on successful copy
    clipboard.on('success', function(e) {
        console.log('Copied:', e.text);
        alert('Copied: ' + e.text);
        e.clearSelection();
    });

    // Show error message on copy failure
    clipboard.on('error', function(e) {
        console.error('Copy failed:', e.action);
        alert('Copy failed. Please try again.');
    });
</script>
<script>
    // Get the copy button and icon elements
    const copyBtn = document.querySelector('.copy-btn');
    const icon = copyBtn.querySelector('i');

    // Add a click event listener to the copy button
    copyBtn.addEventListener('click', function() {
        // Update the HTML of the icon element to change the icon
        icon.classList.remove('bx-copy');
        icon.classList.add('bx-check'); // Change the class to the desired new icon
    });
</script>
<style>
    .tab-link-act .nav-link.active {
        color: #fff !important;
        background-color: #0b2941 !important;
    }

    .card.card-custom>.card-header.card-header-tabs-line .nav .nav-link {
        padding-top: 0.7rem !important;
        padding-bottom: 0.7rem !important;
        padding-right: 1rem !important;
        padding-left: 1rem !important;
    }

    .nav.nav-tabs.nav-tabs-line .nav-link.active,
    .nav.nav-tabs.nav-tabs-line .nav-link:hover:not(.disabled),
    .nav.nav-tabs.nav-tabs-line .show>.nav-link {
        color: #fff !important;
        background-color: #0b2941 !important;
    }

    .nav-tabs .nav-link {
        border-bottom-right-radius: .42rem;
        border-bottom-left-radius: .42rem;
    }

    .nav.nav-tabs.nav-tabs-line .nav-link {
        margin: 0 7px !important;
    }
</style>

<head>
    <script src="{{ asset('') }}upnl/js/jquery.min.js"></script>
    <script src="{{ asset('') }}upnl/js/html2canvas.js"></script>
</head>
<!--begin::Content-->

<div class="no-tp-gap content d-flex flex-column flex-column-fluid " id="kt_content">
    <div class="mobile-nav" id="kt_header_mobile">
        <div>
            <button class="" id="kt_aside_mobile_toggle">
                <i class="bi bi-text-left icon-lg"></i>
            </button>
            <span>Menu</span>
        </div>
        <div>
            <span id="server-time-mobile"></span>
        </div>
    </div>
    <!--begin::Subheader-->
    <div class="subheader py-2 py-lg-4 subheader-solid" id="kt_subheader">
        <div class="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
            <!--begin::Info-->
            <div class="d-flex align-items-center flex-wrap w-full justify-between">
                <div>
                    <!--begin::Page Title-->
                    <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">My Profile</h5>
                    <!--end::Page Title-->
                </div>
            </div>
            <!--end::Info-->
        </div>
    </div>
    <!--end::Subheader-->
    <!--begin::Entry-->
    <div class="d-flex flex-column-fluid section-top-50 section-bottom-50">
        <!--begin::Container-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <!--begin::Dashboard-->
                    <!--begin::Row-->
                    <!-- <script>
                        function setcode() {
                            if (document.forms["formsumbit"].country.value != "") {
                                var codearr = document.forms["formsumbit"].country.value.split("-");
                                $("#countrycode").val("+" + codearr[1]);
                            }
                        }

                        $(document).ready(function() {
                            setcode();
                        });
                    </script>  -->

                    <div class="row justify-content-center mt-3 mt-lg-0">
                        <div class="col-xxl-8">
                            <div class="upc-card mb-0">
                                <div class="row justify-content-center">
                                    <div class="col-lg-10">
                                        <div class="profile-wrapp">
                                            <div class="profile-top">

                                            </div>
                                            <div class="profile-bottom">
                                                <div class="profile-bottom__center">
                                                    <div class="profile-bottom__img">
                                                        <div>
                                                            <img src="{{ asset('') }}upnl/images/icon-member-active.png"
                                                                alt="User" draggable="false">
                                                        </div>
                                                    </div>
                                                    <div class="profile-bottom__btm">
                                                        <h4>{{($profile_data)?$profile_data->name:''}} </h4>
                                                        <span style="color: #02938af5 !important;">Member ID: <strong>{{($profile_data)?$profile_data->username:''}}</strong></span>
                                                        <span style="color: #02938af5 !important;">Date of Joining: <strong><?php echo date("D, d M Y", strtotime(Auth::user()->jdate))?></strong></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="upc-content">
                                            <div class="row">
                                                <div class="col-lg-12 col-xxl-4">
                                                    <div class="upc-content__in">
                                                        <!-- <span class="emailv "></span> -->
                                                        <!-- <span class="emailv e-not-verified">Not Verified</span> -->
                                                        <span>Email</span>
                                                        <p>{{($profile_data)?$profile_data->email:''}}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-xxl-4">
                                                    <div class="upc-content__in">
                                                        <span>Country</span>
                                                        <p>{{($profile_data)?$profile_data->country:'N/A'}}</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-xxl-4">
                                                    <div class="upc-content__in">
                                                        <span>Phone Number</span>
                                                        <p>{{($profile_data)?$profile_data->phone:''}}</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-xxl-4">
                                                    <div class="upc-content__in">
                                                        <span>Referral Name</span>
                                                        <p>{{($profile_data->sponsor_detail)?$profile_data->sponsor_detail->name:'0'}}</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-xxl-4">
                                                    <div class="upc-content__in">
                                                        <span>Refferal ID</span>
                                                        <p>{{($profile_data->sponsor_detail)?$profile_data->sponsor_detail->username:'0'}}</p>
                                                    </div>
                                                </div>
                                             
                                            </div>
                                        </div>
                                        <!-- tabs::begin -->
                                        <ul class="nav nav-tabs profile-tab" id="myTab" role="tablist">
                                            <!-- <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Contact Details</a>
                            </li> -->
                                            <!-- <li class="nav-item">
                                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Social Media</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="address-tab" data-toggle="tab" href="#address" role="tab" aria-controls="address" aria-selected="false">Address</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="nominee-tab" data-toggle="tab" href="#nominee" role="tab" aria-controls="nominee" aria-selected="false">Nominee Details</a>
                            </li> -->
                                        </ul>
                                        <div class="tab-content mt-5" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home" role="tabpanel"
                                                aria-labelledby="home-tab">
                                                <form method="post" name="formmainprf" action="{{route('user.update-profile')}}">
                                                    {{ csrf_field() }}
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6 mb-3">
                                                            <label for="inputEmail">Email</label>
                                                            <input type="text" name="email" id="inputEmail"
                                                                class="form-control control-edit"
                                                                value="{{($profile_data)?$profile_data->email:''}}">
                                                        </div>

                                                        <div class="form-group col-md-6 mb-3">
                                                            <label for="inputEmail">Mobile No.</label>
                                                            <input type="text" name="phone" id="inputEmail"
                                                                class="form-control control-edit"
                                                                value="{{($profile_data)?$profile_data->phone:''}}">
                                                        </div>
                                                    </div> 
                                                    <div class="form-row">
                                                        <div class="form-group col-md-12 mb-3">
                                                            <label for="inputEmail">USDT ADDRESS</label>
                                                            <input type="text" placeholder="USDT ADDRESS" name="usdtAdddress" id="inputEmail"
                                                                class="form-control control-edit"
                                                                value="{{($profile_data)?$profile_data->trx_addres:''}}">
                                                        </div>

                                                       
                                                    </div>
                                                    
                                                     <div class="text-center">
                                                                            <button type="submit"
                                                                                class="btn btn-primary support-btn">Update
                                                                                 <span
                                                                                    class="thin-arrow">&rarr;</span></button>
                                                                        </div>


                                                </form>
                                            </div>

                                        </div>
                                        <!-- tabs::end -->
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 d-flex justify-content-center">

                </div>
            </div>

            <!--end::Container-->
        </div>
        <!--end::Entry-->
    </div>
    <!--end::Content-->
