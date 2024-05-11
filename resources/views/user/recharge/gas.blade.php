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
                <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Withdrawal Request <span
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
            <form  class="form mt-0" name="frmmain" id="kt_form" style="width: 100%; margin-bottom: 50px;"
             >
          

                <div class="col-12">
                </div>

                <!-- investment-head::begin -->

                <div class="row">
                    <div class="col-xl-6 offset-xl-3">

                        <div class="invest-main-wrap transaction-card-wrap">
                            <div class="row">



                                <!-- ==================================== -->
                                <div class="col-lg-12">
                                    <div class="form-group mt-2 mb-3 text-left">
                                        <label for="optinvesttype"> Mobile Number </label>
                                      
                                          <input type="number" name="phone" min="10" id="PACKAGE_AMT" class="form-control"
                                            autocomplete="off" placeholder="mobile number"  required value="" >
                                    </div>

                                </div>


                                <div class="col-lg-12">
    <div class="form-group mt-2 mb-3 text-left">
        <label for="investfromwallet">GAS Provider</label>
        <select name="" class="form-control" required>
            <option value="">Select Provider </option>
            <option value="">Adani Gas</option>
            <option value="">Gujarat Gas</option>
            <option value="">Hindustan Petroleum Corporation Ltd</option>
            <option value="">Indraprasta Gas</option>
            <option value="">Mahanagar Gas</option>
            <!-- Add more options as needed -->
        </select>
    </div>
</div>



                                                <!-- ==================================== -->
                                                <div class="col-lg-12">
                                    <div class="form-group mt-2 mb-3 text-left">
                                        <label for="optinvesttype">  Amount </label>
                                      
                                          <input type="number" name="amount"  id="PACKAGE_AMT" class="form-control"
                                          placeholder="Amount"  required value="" >
                                    </div>

                                </div>

                            </div>


                            <div class="button-container al-center">
    <button type="submit" class="btn btn-primary report-btn submit-btn">Recharge <span class="thin-arrow">→</span></button>
    <button type="submit" class="btn btn-primary report-btn submit-btn">Search Plan <span class="thin-arrow">→</span></button>
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
    function amtValue() {
        var amt = document.getElementById('PACKAGE_AMT').value;
        if (amt % 100 == 0) {
            return true;
        } else {
            alert('Please enter valid amount Multiple of $. 100  ');
            return false;
        }
    }



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
                    $('#' + res_area).html(response).css('color', '#fff').css('font-weight', '800')
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
<style>
    .button-container {
    text-align: center;
}

.button-container .btn {
    margin: 5px; /* Adjust margin as needed */
}

@media (min-width: 768px) {
    .button-container {
        text-align: left;
    }
}

    </style>




<script>
    $("#Withdrawal Report").addClass("menu-item-active");
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

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>
</head>
<script>
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }

    function withdrawalreject(reqid) {
        actionRequest("/withdrawalreject", {
            "id": reqid
        }, '', '');
    }
</script>

<script>
    function downloadReport(id) {

        var element = $("#wtreceipt" + id); // global variable
        var getCanvas; // global variable
        var newData;

        html2canvas(element, {
            allowTaint: false,
            useCORS: true,
            onrendered: function(canvas) {
                getCanvas = canvas;
                var imgageData = getCanvas.toDataURL("image/png");
                var a = document.createElement("a");
                a.href = imgageData;
                a.download = id + "-withdrawal-receipt.png";
                a.click();
            }
        });

    }
</script>

<style>
    .qrcode canvas {
        width: 100%;
    }
</style>

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
   

    <!--end::Subheader-->
    <!--begin::Entry-->

    <!--begin: Wizard-->
    <div class="wizard wizard-4 mbl-top-135" id="kt_wizard_v4" data-wizard-state="step-first"
        data-wizard-clickable="true">
        <div class="container-fluid">
            <div class="row d-flex justify-content-center">
             
            
  
                    <form style="    width: 100%;">
                        <div class="row">
                            <div  class="col-xl-4">
                                <div style=""class="form-group mb-3">
                                    <input type="text" style="border-radius:15px;" Placeholder="Search Users"
                                        name="search" class="form-control" value="{{ @$search }}">
                                </div>
                            </div>


                            <div class="col-xl-2">
                                <div class="form-group mb-3">
                                    <select name="limit" style="border-radius:15px;" class="form-control">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-group mb-3">
                                    <input type="submit" style="padding: 0.6rem 2rem;" name="submit"
                                        class="btn btn-outline-theme btn-lg d-block w-100 btn-primary"
                                        value="Search" />
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-group mb-3">
                                    <a href="{{ route('user.referral-team') }}" style="padding: 0.6rem 2rem;"
                                        name="reset"
                                        class="btn btn-outline-theme btn-lg d-block w-100 btn-primary"
                                        value="Reset">Reset</a>
                                </div>
                            </div>


                        </div>
                    </form>
             

                    <div class="table-responsive form-white-curved table-main-wrap">
                        <table class="table table-bordered">
                            <thead class="gradient-yellow table-head-wrap">
                                <tr>
                                    <th>TXID</th>
                                    <th>Operator</th>
                                    <th>Number</th>
                                    <th>Amount</th>
                                 
                                    <th>Status</th>
                                    <th>Operator Id</th>
                                    <th>Rechage By</th>
                                        <!--<th>Point</th>-->
                                    <th>Date Time</th>
                                
                                </tr>
                            </thead>
                            <tbody>
                            
                            
                                    <tr>
                                        <td>4</td>
                                        <td>3</td>
                                        <td>2</td>
                                        <td>2</td>
                                  
                                        <td>3</td>
                                        <td>32</td>
                                        <td>3</td>
                               

                                        <td>
                                    </td>


                                    </tr>
                            

                           
                        </tbody>
                        </table>
                        <br>
                    
                        <div id="datarowsremaining" style='text-align:center'>
                        </div>
                    </div>
               
            </div>
        </div>
    </div>
</div>

