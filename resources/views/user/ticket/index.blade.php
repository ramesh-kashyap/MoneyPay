<script>
    $("#Help & Support").addClass("menu-item-active");
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>
<style>
    .btn-primary {
    background: #29c7e0 !important;
    color: #fff !important;
    border: none !important;
    height: 45px !important;
    font-size: 14px !important;
    border-radius: 10px !important;
    padding: 11px 19px !important;
    margin-bottom: 10px !important;
    line-height: 45px;
}
</style>
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
            <div class="d-flex align-items-center flex-wrap mr-2">
                <!--begin::Page Title-->
                <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Help & Support</h5>
                <!--end::Page Title-->
            </div>
            <!--end::Info-->
        </div>
    </div>
    <!--end::Subheader-->

    <!-- <div class=""> -->
    <div class="container-fluid mbottom-50 support-m sticky-top-gap">
        <div class="row clearfix">
            <div class="col-xl-8 offset-xl-2 mt-3 mb-3">

                <!-- Open tickets -->
                <div class="ticket_wrap">



                    <div class="row mt-80 mbsc-top-60">
                        <div class="col-md-6">
                            <div class="card-ticket">
                                <div class="card-icon">
                                    <img src="{{asset('')}}upnl/images/open-ticket.svg" alt="open-ticket">
                                </div>
                                <div class="card-content">
                                    <h4 class="card-title text-white">Open Ticket</h4>
                                    <a href="{{route('user.GenerateTicket')}}" class="btn btn-primary support-btn">Open
                                        <span class="thin-arrow">&rarr;</span> </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mt-5 mt-md-0">
                            <div class="card-ticket">
                                <div class="card-icon">
                                    <img src="{{asset('')}}upnl/images/view-ticket.svg" alt="view-ticket">
                                </div>
                                <div class="card-content">
                                    <h4 class="card-title text-white">View Ticket</h4>
                                    <a href="{{route('user.SupportMessage')}}" class="btn btn-primary support-btn">View
                                        <span class="thin-arrow">&rarr;</span></a>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>


            </div>

        </div>
    </div>
</div>

<script language="javascript">
    $(".submit_ticket").click(function() {
        $('#loadimg').show();
        $(".submit_ticket").removeClass('btn_blue');
    });
</script>
