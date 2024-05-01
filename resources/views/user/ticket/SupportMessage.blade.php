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
             
            
  
                    <form action="{{ route('user.SupportMessage') }}" method="GET" style="    width: 100%;">
                        <div class="row">
                            <div class="col-xl-4">
                                <div class="form-group mb-3">
                                    <input type="text" style="" Placeholder="Search Users"
                                        name="search" class="form-control" value="{{ @$search }}">
                                </div>
                            </div>


                            <div class="col-xl-2">
                                <div class="form-group mb-3">
                                    <select name="limit" style="" class="form-control"">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="form-group mb-3">
                                    <input type="submit" style="padding: 0.6rem 2rem;" name="submit"
                                        class="btn btn-outline-theme btn-lg d-block w-100 btn-primary"
                                        value="Search" />
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="form-group mb-3">
                                    <a href="{{ route('user.SupportMessage') }}" style="padding: 0.6rem 2rem;"
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
                                    <th class="wd-15p">#S.NO</th>
                                    <th>Ticket No</th>
                                    <th>Category</th>
                                    <th>Request Date</th>
                                    <!--<th>Closing Date</th>-->
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php if(is_array($level_income) || is_object($level_income)){ ?>

                                <?php $cnt =$level_income->perPage() * ($level_income->currentPage() - 1); ?>
                                @foreach($level_income as $value)
                                    <tr>
                                        <td><?= $cnt += 1?></td>

                                        <!--<td>{{ $value->user_id_fk }}</td>-->
                                        <td>{{ $value->ticket_no }}</td>
                                        <td>{{ $value->category }}</td>
                                        <td>{{ $value->gen_date }}</td>
                                        <!--<td>{{ $value->closing_date }}</td>-->
                                        <?php if($value->status=="1"){$color="red";}else{$color="green";}?>
                                        <td style="color:<?=@$color?>;font-weight:700">
                                            {{ ($value->status)?"Closed":"Open" }}
                                        </td>
                                        <td><a
                                                href="{{ route('user.ViewMessage') }}?ticket_no={{ $value->ticket_no }}"><button
                                                    style="color:#000;border:1px solid #000;padding:8px;border-radius:15px">View
                                                    all message</button></a></td>

                                    </tr>
                                @endforeach

                                <?php }?>
                        </tbody>
                        </table>
                        <br>
                        {{ $level_income->withQueryString()->links() }}
                        <div id="datarowsremaining" style='text-align:center'>
                        </div>
                    </div>
               
            </div>
        </div>
    </div>
</div>
