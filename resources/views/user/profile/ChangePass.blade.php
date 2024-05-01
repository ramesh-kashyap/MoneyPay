<script>
    $("#settings").addClass("menu-item-active");
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>

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
<script>
    $(document).ready(function() {
        $('#theform').submit(function() {
            $("#btnsubmit", this).attr('disabled', 'disabled');
            $("#resendspinner").show();
            return true;
        });
        $('#frmmain1').submit(function() {
            $("#btnsubmit", this).attr('disabled', 'disabled');
            $("#spinner").show();
            return true;
        });

    });

    $(function() {
        setTimeout(function() {
            $('#btnsubmit').show();
        }, 60000);
    });

    function submitfrm(val) {
        $('input[name="frmgateway"]').val(val);
        document.forms["frmmain1"].submit();
    }

    function checksubmit() {
        document.forms["formmain"].submit();
    }
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

    .form-group {
        padding: 10px;
        margin-top: 8px;
    }

    .bg-dark {
        background-color: #111218;
    }

    .success-message {
        text-align: center;
        color: #ffffff;
        font-weight: bold;
        margin: 0 auto;
        max-width: 400px;
    }

    .success-message img {
        height: 40px;
    }
</style>

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>
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
                    <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Reset Password</h5>
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
                    <script>
                        function requestTransKey() {
                            if (confirm("Are you sure, you want recover your Transaction Key ?")) {
                                var logs = actionRequestAlertResponse("/recover-transaction-password", {}, '', '');
                            } else
                                return;
                        }
                    </script>



                    <!--begin::profile-->
                    <div class="profile-main">
                        <div class="row">
                            <div class="col-xl-6 offset-lg-3 mt-3">
                                <div
                                    class="card card-custom card-stretch rounded-10 profile-details-wrap tdxf-bg-2 password transaction-card-wrap profile-password">
                                    <div
                                        class="card-header row row-marginless align-items-center flex-wrap py-5 h-auto reset-header">
                                        <div class="d-flex justify-between w-full align-items-center">
                                            <div class="card-title">
                                                <h4 class="password-bordered-text text-color">Reset Password</h4>
                                            </div>
                                        
                                        </div>
                                    </div>
                                    <div class="card-body pb-0 pt-10">
                                        <div class="bd-example bd-example-tabs">
                                            <div class="update mt-5">
                                                <div class="update-bdy">
                                                    <div class="update-form">
                                                        <form method="post" name="formmain"
                                                            action="{{ route('user.edit-password') }}">
                                                         
															{{ csrf_field() }}
                                                            <div class="update">
                                                                <div class="update-hdr pb-4">
                                                                    <h4>Change Login Password</h4>
                                                                </div>

                                                                <div class="update-bdy">
                                                                    <div class="update-form">
                                                                        <div class="form-group">
                                                                            <label for="oldloginpassword">Old
                                                                                Password</label>
                                                                            <div class="input-group">

                                                                                <input type="password"
                                                                                    class="form-control"
                                                                                    id="oldloginpassword"
                                                                                    placeholder="Old Password"
                                                                                    name="old_password">
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label for="newloginpassword">New
                                                                                Password</label>
                                                                            <div class="input-group">

                                                                                <input type="password"
                                                                                    class="form-control"
                                                                                    id="newloginpassword"
                                                                                    placeholder="New Password"
                                                                                    name="password">
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label for="confloginpassword">Repeat
                                                                                Password</label>
                                                                            <div class="input-group">

                                                                                <input type="password"
                                                                                    class="form-control"
                                                                                    id="confloginpassword"
                                                                                    placeholder="Retype New Password"
                                                                                    name="password_confirmation">
                                                                            </div>
                                                                        </div>
                                                                        <div class="text-center">
                                                                            <button type="submit"
                                                                                class="btn btn-primary support-btn">Update
                                                                                Password <span
                                                                                    class="thin-arrow">&rarr;</span></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
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
                    </div>
                    <!--end::profile-->
                    <!--end::Dashboard-->


                </div>
                <div class="col-lg-4 d-flex justify-content-center">

                </div>
            </div>

            <!--end::Container-->
        </div>
        <!--end::Entry-->
    </div>
    <!--end::Content-->


    <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.6/clipboard.min.js"></script>
    <script>
        var clipboard1 = new ClipboardJS('.affilatecopy');

        clipboard1.on('success', function(e) {
            alert("Details copied!");
        });
        clipboard1.on('error', function(e) {
            alert("Sorry, something is wrong!");
        });
    </script>

    <script>
        var clipboard2 = new ClipboardJS('.copyafflink');

        clipboard2.on('success', function(e) {
            alert("Details copied!");
        });
        clipboard2.on('error', function(e) {
            alert("Sorry, something is wrong!");
        });
    </script>
    <script>
        var clipboard3 = new ClipboardJS('.affilatecopy');

        clipboard3.on('success', function(e) {
            alert("Details copied!");
        });
        clipboard3.on('error', function(e) {
            alert("Sorry, something is wrong!");
        });
    </script>
