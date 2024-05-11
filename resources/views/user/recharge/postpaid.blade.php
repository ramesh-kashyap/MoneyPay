@include('layouts.upnl.header')
<script>
    $("#Purchase Package").addClass("menu-item-active");
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
<!-- Main Body -->

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
            <div class="d-flex align-items-center flex-wrap mr-2">
                <!--begin::Page Title-->
                <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">POST PAID RECHARGE<span
                        style="text-transform:capitalize"></span></h5>
                <!--end::Page Title-->
            </div>
            <!--end::Info-->
        </div>
    </div>
    <!--end::Subheader-->

    <div class="d-flex flex-column-fluid section-top-50">
        <!--begin::Container-->
        <div class="container-fluid">
            <!--begin::Dashboard-->
            <form onsubmit="return amtValue();" class="form mt-0" name="frmmain" id="kt_form" method=""
                action="">
                {{ csrf_field() }}

                <div class="col-12">
                </div>

                <!-- investment-head::begin -->

                <div class="row">
                    <div class="col-xl-6 offset-xl-3">

                        <div class="invest-main-wrap transaction-card-wrap">
                            <div class="row">
                                 <!-- <div class="col-lg-12">
                                    <div class="form-group mt-2 mb-3 text-left">
                                        <label for="investfromwallet">ACTIVATION WALLET</label>
                                        <input type="text" name="" class="form-control check_sponsor_exist"
                                         value="" disabled>
                                        
                                    </div>
                                </div> -->


                                <div class="col-lg-12">
                                    <div class="form-group mt-2 mb-3 text-left">
                                        <label for="optinvesttype"> Please Enter Postpaid Number </label>
                                        <input type="number" name="dth" min="1000" id="PACKAGE_AMT" class="form-control"
                                            placeholder="Please Enter DTH Number" 
                                               value="">
                                    </div>

                                </div>


                                <div class="col-lg-12">
                                    <div class="form-group mt-2 mb-3 text-left">
                                        <label for="investfromwallet">Select Operator</label>
                                             <select name="user_id" class="form-control check_sponsor_exist" data-response="sponsor_res" required>
    <option value="">Select Operator</option>
    <option value="Airtel Landline">Airtel Landline</option>
    <option value="Airtel Postpaid">Airtel Postpaid</option>
    <option value="BSNL Landline">BSNL Landline</option>
    <option value="BSNL-Postpaid">BSNL-Postpaid</option>
    <option value="IDEA Postpaid">IDEA Postpaid</option>
    <option value="JIO Postpaid">JIO Postpaid</option>
    <option value="MTNL Delhi Landline">MTNL Delhi Landline</option>
    <option value="TATA DOcomo Postpaid">TATA DOcomo Postpaid</option>
    <option value="Vodafon Postpaid">Vodafon Postpaid</option>
</select>

                                        <span id="sponsor_res"></span>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="form-group mt-2 mb-3 text-left">
                                        <label for="investfromwallet">Mobile Number</label>
                                        <input type="text" name="amount" class="form-control"
                                            autocomplete="off" placeholder="Amount" required
                                            value="">
                                    </div>
                                </div>


                            </div>



                            <div class="al-center">
                                <button type="submit" class="btn btn-primary report-btn submit-btn">Make Investment
                                    <span class="thin-arrow">→</span></button>
                            </div>
                        </div>
                        <div class="bronze-main-wrap mt-5 mb-4" style="display: none;">
                            <div class="box-wrap">
                                <h2 class="text-white">Your Investing</h2>
                                <div class="box">
                                    <h2 class="box-heading">Bronze</h2>
                                    <div class="box-image">
                                        <img src="{{ asset('') }}upnl/images/package1.png" alt="Box Image">
                                        <i class="bx bx-check check-icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="silver-main-wrap mt-5" style="display: none;">
                            <div class="box-wrap mx-auto">
                                <h2 class="text-white">Your Investing</h2>
                                <div class="box">
                                    <h2 class="box-heading">Silver</h2>
                                    <div class="box-image">
                                        <img src="{{ asset('') }}upnl/images/package2.png" alt="Box Image">
                                        <i class="bx bx-check check-icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="gold-main-wrap mt-5" style="display: none;">
                            <div class="box-wrap">
                                <h2 class="text-white">Your Investing</h2>
                                <div class="box">
                                    <h2 class="box-heading">Gold</h2>
                                    <div class="box-image">
                                        <img src="{{ asset('') }}upnl/images/package3.png" alt="Box Image">
                                        <i class="bx bx-check check-icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="platinum-main-wrap mt-5" style="display: none;">
                            <div class="box-wrap">
                                <h2 class="text-white">Your Investing</h2>
                                <div class="box">
                                    <h2 class="box-heading">Platinum</h2>
                                    <div class="box-image">
                                        <img src="{{ asset('') }}upnl/images/package4.png" alt="Box Image">
                                        <i class="bx bx-check check-icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>




            </form>
        </div>
    </div>
</div>
<!--end::Content-->
<script src="https://code.jquery.com//jquery-3.3.1.min.js"></script>
<script>
    // function amtValue() {
    //     var amt = document.getElementById('PACKAGE_AMT').value;
    //     if (amt % 1000 == 0) {
    //         return true;
    //     } else {
    //         alert('Please enter valid amount Multiple of $. 1000  ');
    //         return false;
    //     }
    // }



    $('.check_sponsor_exist').keyup(function(e) {
        var ths = $(this);
        var res_area = $(ths).attr('data-response');
        var sponsor = $(this).val();
        // alert(sponsor); 
        $.ajax({
            type: "POST",
            url: "{{ route('getUserName') }}",
            data: {
                "user_id": sponsor,
                "_token": "{{ csrf_token() }}",
            },
            success: function(response) {
                // alert(response);      
                if (response != 1) {
                    // alert("hh");
                    $(".submit-btn").prop("disabled", false);
                    $('#' + res_area).html(response).css('color', '#000').css('font-weight', '800')
                        .css('margin-buttom', '10px');
                } else {
                    // alert("hi");
                    $(".submit-btn").prop("disabled", true);
                    $('#' + res_area).html("User Not exists!").css('color', 'red').css(
                        'margin-buttom', '10px');
                }
            }
        });
    });
</script>
@include('layouts.upnl.footer')