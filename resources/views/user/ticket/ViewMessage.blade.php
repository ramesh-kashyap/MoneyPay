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
    <div class="subheader py-2 py-lg-4 subheader-solid" id="kt_subheader">
        <div class="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
            <!--begin::Info-->
            <div class="d-flex align-items-center flex-wrap w-full justify-between">
                <div>
                    <!--begin::Page Title-->
                    <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Support Message</h5>
                    <!--end::Page Title-->
                </div>
                <div>
                    <!-- <div class="dropdown dropdown-profile dr-option">
        <button class="" aria-expanded="true" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true">
            <svg class="nav-d" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24"></rect>
                    <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                    <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                    <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                </g>
            </svg>
            <i class="nav-m bi bi-justify-left"></i>
        </button>
        <div class="dropdown-menu profile-dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="/rngapp/referral/report/RNG49911549">Affiliate Report</a>
            <a class="dropdown-item" href="/rngapp/deposit-fund-report/RNG49911549">Deposit Fund</a>
            <a class="dropdown-item" href="/rngapp/withdrawal/report/RNG49911549">Withdrawal</a>
            <a class="dropdown-item" href="/rngapp/withdrawal/status/RNG49911549">Withdrawal Status</a>
        </div>
    </div> -->
                </div>
            </div>
            <!--end::Info-->
        </div>
    </div><br><br>
    <div class="container-fluid">
    </div>

    <!--end::Subheader-->
    <!--begin::Entry-->

    <!--begin: Wizard-->
    <div class="wizard wizard-4 mbl-top-135" id="kt_wizard_v4" data-wizard-state="step-first"
        data-wizard-clickable="true">
        <div class="container-fluid">
            <div class="row d-flex justify-content-center">
             
            
  
                  

                    <div class="table-responsive form-white-curved table-main-wrap">
                        <table class="table table-bordered">
                           <?php if(is_array($open_ticket_msg) || is_object($open_ticket_msg)){ ?>
                                            <?php $count= 0; ?>
                                            <?php foreach ($open_ticket_msg as $item): ?>
                                            <?php if($item->reply_by == 'user'){ }  ?>

                                            <h5 class="form-header" style="width: 233px; background:#e92266;padding: 7px;color: #fff;border-radius: 10px;"> <?= $item->category ?> (<?=$item->gen_date?>)</h5>
                                            <br>
                                           <p class="comp_bank_p" style="color:#fff" ><?= $item->msg ?></p>
                                           <p class="text-right" style="margin-right: 30px;color:#fff;margin-left:300px"><?=($item->reply_by == 'admin')? 'Admin' : 'You'?></p>
                                           <?php endforeach; ?>
                                           <?php } ?>
                                       
                        </table>
                        <br>
                      
                        <div id="datarowsremaining" style='text-align:center'>
                        </div>
                    </div>
               
            </div>
        </div>
    </div>
</div>
