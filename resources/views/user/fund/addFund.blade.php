<script>
    $("#Funds").addClass("menu-item-active");
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
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }
</script>
<script language=javascript>
    function submitform(obj) {
        if (isNaN($(obj).closest('form').find('#usdfundamount').val()) || $(obj).closest('form').find('#usdfundamount')
            .val() == '' || parseFloat($(obj).closest('form').find('#usdfundamount').val()) < 10) {
            alert('Please Enter Valid Fund Amount in USD. Minimum Amount is 10 USD.');
            return false;
        }

        $(obj).attr('disabled', 'disabled');
        $(obj).find('[spinner=true]').show();
        $(obj).closest('form').submit();
    }
</script>
<style>
    .pay-bx {
        display: flex;
        justify-content: center;
        margin-bottom: 8px;
    }

    .pay-bx-cen {
        width: 250px;
        display: flex;
        align-items: center;
    }

    .add-fund__icon {
        margin-bottom: 0 !important;
        width: 60px !important;
        margin-right: 15px !important;
    }

    .add-fund__text {
        text-align: left;
        width: calc(100% - 75px);
    }

    .add-fund .add-fund__text p {
        margin-bottom: 0 !important;
    }

    .add-fund {
        padding: 15px !important;
    }

    .add-fund__icon img {
        width: 50px !important;
    }

    .add-fund .add-fund__text h4 {
        margin-bottom: 0 !important;
    }

    .add-fund__form p {
        margin-bottom: 5px !important;
    }




    /* Style for the container */
    .user-card1 {
            /* width: 4/17px; */
            border: 1px solid #ccc;
            padding: 20px;
        }

        /* Style for the table */
       

        /* Style for table cells */
     

        /* Style for table cell with class user-value */
        .user-value {
            text-align: right;
         /* Align text to the right */
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
                    <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Fund Deposit</h5>
                    <!--end::Page Title-->
                </div>
            </div>
            <!--end::Info-->
        </div>
    </div>
    <!--end::Subheader-->
    <!--begin::Entry-->
    <div class="d-flex flex-column-fluid section-top-50">
        <!--begin::Container-->
        <div class="container-fluid">
            <!--begin::Dashboard-->
            <!--begin::Row-->

            <div class="row mbt-25">

                <div class="col-md-12">
                    <!-- left section  -->

                    <!--begin::fund transfer-->
                    <style>
                        ul.mod-tab li {
                            width: 100%;
                        }
                    </style>

                    <div class="d-flex justify-content-center add-fund-main-tab">
                        <div class="col-lg-9">
                            <div class="card-fund pay-options rounded-18">
                                <ul class="nav nav-pills mod-tab" role="tablist">
                                    <li class="active nav-item">
                                        <a href="#pills-home" aria-controls="pills-home-tab" role="tab"
                                            data-toggle="pill" class="py-crypto nav-link active" aria-selected="true"
                                            id="tab-home-first">
                                            <div class="py-c-left">
                                                <div>
                                                    <h4>Fund Deposit</h4>
                                                    <small>Deposit INR</small>
                                                </div>
                                            </div>
                                            <div class="py-c-right">
                                                <div class="cur-coin">
                                                    <i class="fa fa-usd" style="font-size:36px"></i>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <!-- tabs panes -->
                                <div class="tab-content">

                                    <div class="tab-pane fade show active" id="pills-profile" role="tabpanel"
                                        aria-labelledby="pills-profile-tab">
                                        <div class="pay-op-tab">


                                            <!-- Tab panes -->
                                            <div class="tab-content" id="pills-tabContent1">

                                                <div class="tab-pane fade pay-single-tab show active" id="payer"
                                                    role="tabpanel" aria-labelledby="pills-payer-tab">
                                                    <ul>
                                                        <li>
                                                            <div class="cr-info-left">
                                                                <div>
                                                                     <i class="fa fa-usd" style="    font-size: 36px;padding: 14px;padding-left: 16px; padding-bottom: 26px;"></i>
                                                                </div>
                                                            </div>
                                                            <div class="cr-info-right">
                                                                <h4>Send only  INR to this deposit Details</h4>
                                                                <small>Sending other the  INR may result in the
                                                                    loss of your deposit</small>
                                                            </div>
                                                        </li>
                                                        <li>Average Arrival Time: 30 Minutes</li>
                                                    </ul>
                                                    <div class="clearfix"></div>
                                                    <div class="row pay-adrs-wrap">
                                                        <div class="col-lg-7 order-xs-7">
                                                            <div class="rcnt-wrap">
                                                           
                                                                <div class="table-responsive pay-report">
                                                                <div class="user-card1 mt-6 mb-3">
        <div class="heading-with-link mb-1">
            <h3  style="color:#fff"class="dash-headings float-left mt-0">Pay Here</h3>
            <div class="clearfix"></div>
        </div>
        <div class="user-card-content">
            <div class="profile-details">
                <table class="user-table">
                    <tr>
                        <td style="width:200px;color:#fff;">NAME: </td>
                        <td style="color:#fff;" class="user-value"> MONEYPAY ENTERPRISES </td>
                    </tr>
                    <tr>
                        <td style="color:#fff;">BANK:</td>
                        <td  style="color:#fff;"class="user-value"> HDFC BANK </td>
                    </tr>
                    <tr>
                        <td style="color:#fff;">ACC. NO:</td>
                        <td  style="color:#fff;"class="user-value">50200092863785 </td>
                    </tr>
                    <tr>
                        <td style="color:#fff;">IFSC:</td>
                        <td style="color:#fff;" class="user-value"> HDFC0004160 </td>
                    </tr>
                    
                </table>
            </div>
        </div>
    </div>

        
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-5 order-xs-5">
                                                            <div class="pay-adrs pm-pay-adrs">
                                                                <div class="pay-adrs__code">

                                                                    <form action="{{ route('user.SubmitBuyFund') }}"
                                                                        method="POST" enctype="multipart/form-data">
                                                                        <div class="row">
                                                                            {{ csrf_field() }}
                                                                            <div class="col-12 form-group">
                                                                                <input type="hidden" name="cointype"
                                                                                    id="wallet_type" value="PM">
                                                                                    <input type="number" min="1" class="form-control" name="amount" required="true" placeholder="Enter amount ">
                                                                            </div>
                                                                            <div class="col-12 form-group">
                                                                                <input type="hidden" name="cointype"
                                                                                    id="wallet_type" value="PM">
                                                                                    <input type="text" class="form-control " name="transaction_hash" placeholder="Transaction ID. " required="true">
                                                                            </div>
                                                                            <div class="col-12 form-group">

                                                                                <input type="file" class="form-control " name="icon_image" >
                                                                            </div>

                                                                            <div class="form-group col-12">
                                                                                <button type="submit"
                                                                                    class="w-100 report-btn">Request
                                                                                    Fund <span
                                                                                        class="thin-arrow">→</span></button>
                                                                            </div>
                                                                            <p id="errfund_value_pm" class="error_span">
                                                                            </p>

                                                                        </div>

                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="clearfix"></div>
                                                </div>
                                                <div class="tab-pane fade pay-single-tab" id="pm"
                                                    role="tabpanel" aria-labelledby="pills-pm-tab">
                                                    <ul>
                                                        <li>
                                                            <div class="cr-info-left">
                                                                <div>
                                                                    <img src="/assets/member_assets/media/dm/perfect-money.png"
                                                                        alt="">
                                                                </div>
                                                            </div>
                                                            <div class="cr-info-right">
                                                                <h4>Send only Perfect Money to this deposit address</h4>
                                                                <small>Sending other the Perfect Money may result in the
                                                                    loss of your deposit</small>
                                                            </div>
                                                        </li>
                                                        <li>Average Arrival Time: 30 Minutes</li>
                                                    </ul>
                                                    <div class="clearfix"></div>
                                                    <div class="row pay-adrs-wrap">
                                                        <div class="col-lg-7 order-xs-12">
                                                            <div class="rcnt-wrap">
                                                                <h4 class="rcnt-trans text-black">Recent 5 Transactions
                                                                    of all currencies</h4>
                                                                <div class="table-responsive pay-report">
                                                                    <table class="table table-bordered">
                                                                        <thead>
                                                                            <tr>
                                                                                <th scope="col">Payment Type</th>
                                                                                <th scope="col">Status</th>
                                                                                <th scope="col">Amount</th>
                                                                                <th scope="col">Date</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td colspan="4" align="center"
                                                                                    class="text-muted">No Transactions
                                                                                    Exist</td>
                                                                            </tr>
                                                                        </tbody>

                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-5 order-xs-1">
                                                            <div class="pay-adrs pm-pay-adrs">
                                                                <div class="pay-adrs__code">



                                                                    <form
                                                                        action="https://perfectmoney.is/api/step1.asp"
                                                                        method="POST" name="pm_form">
                                                                        <input type="hidden" name="PAYEE_ACCOUNT"
                                                                            value="U41810916">
                                                                        <input type="hidden" name="PAYEE_NAME"
                                                                            value="RichNetGlobal">
                                                                        <input type="hidden" name="PAYMENT_ID"
                                                                            value="RN">
                                                                        <input type="hidden" name="PAYMENT_AMOUNT"
                                                                            value="">
                                                                        <input type="hidden" name="PAYMENT_UNITS"
                                                                            value="USD">
                                                                        <input type="hidden" name="STATUS_URL"
                                                                            value="">
                                                                        <input type="hidden" name="PAYMENT_URL"
                                                                            value="https://www.richnetglobal.net/pm-deposit-success">
                                                                        <input type="hidden"
                                                                            name="PAYMENT_URL_METHOD" value="POST">
                                                                        <input type="hidden" name="NOPAYMENT_URL"
                                                                            value="https://www.richnetglobal.net/pm-deposit-fail">
                                                                        <input type="hidden"
                                                                            name="NOPAYMENT_URL_METHOD"
                                                                            value="POST">
                                                                        <input type="hidden" name="SUGGESTED_MEMO"
                                                                            value="">
                                                                        <input type="hidden" name="detail1"
                                                                            value="">
                                                                        <input type="hidden" name="detail2"
                                                                            value="RNG49911549">
                                                                        <input type="hidden" name="detail3"
                                                                            value="">
                                                                        <input type="hidden" name="detail4"
                                                                            value="">
                                                                        <input type="hidden" name="BAGGAGE_FIELDS"
                                                                            value="detail1 detail2 detail3 detail4">
                                                                    </form>

                                                                    <script language="javascript">
                                                                        function submitPerfectMoneyAddFundForm(usdamount) {

                                                                            if ((isNaN(usdamount) || usdamount == '' || parseFloat(usdamount) <= 0) || parseFloat(usdamount) < parseFloat(
                                                                                    10)) {
                                                                                alert("Fund Amount must be greater than " + 10);
                                                                            } else {
                                                                                document.forms["pm_form"].PAYMENT_AMOUNT.value = usdamount;
                                                                                document.forms["pm_form"].submit();
                                                                            }

                                                                        }
                                                                    </script>

                                                                    <div class="row">

                                                                        <div class="col-12 form-group">

                                                                            <input type="text" id="fund_value_pm"
                                                                                name="fund_value" class="form-control"
                                                                                placeholder="USD Amount"
                                                                                value="">
                                                                        </div>


                                                                        <div class="form-group col-12 text-center">
                                                                            <button type="button" id="add_fd_pm"
                                                                                name="add_fd"
                                                                                class="w-100 report-btn"
                                                                                onclick="submitPerfectMoneyAddFundForm($('#fund_value_pm').val())">Deposit
                                                                                Fund <span
                                                                                    class="thin-arrow">→</span></button>
                                                                        </div>
                                                                        <p id="errfund_value_pm" class="error_span">
                                                                        </p>

                                                                    </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="clearfix"></div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--end::Dashboard-->
        </div>
        <!--end::Container-->
    </div>

    <!--end::Entry-->
</div>
<!--end::Content-->
