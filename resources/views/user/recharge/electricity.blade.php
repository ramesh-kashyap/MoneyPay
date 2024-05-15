@include('layouts.upnl.header')
<script>
    $("#Purchase Package").addClass("menu-item-active");

</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>

<script>
    // Initialize ClipboardJS
    var clipboard = new ClipboardJS('.copy-btn');

    // Show success message on successful copy
    clipboard.on('success', function (e) {
        console.log('Copied:', e.text);
        alert('Copied: ' + e.text);
        e.clearSelection();
    });

    // Show error message on copy failure
    clipboard.on('error', function (e) {
        console.error('Copy failed:', e.action);
        alert('Copy failed. Please try again.');
    });

</script>
<script>
    // Get the copy button and icon elements
    const copyBtn = document.querySelector('.copy-btn');
    const icon = copyBtn.querySelector('i');

    // Add a click event listener to the copy button
    copyBtn.addEventListener('click', function () {
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
                <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">ELECTRICITY BILL PAYMENT<span
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
            <form onsubmit="return amtValue();" class="form mt-0" name="frmmain" id="kt_form" method="post" action="{{route('user.electricitycharge')}}">
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
                                        <label for="investfromwallet">Select Wallet</label>
                                        <select name="walletType" class="form-control check_sponsor_exist"
                                            data-response="sponsor_res" required>
                                            <option value="1">ACTIVATION WALLET</option>
                                            <option value="2">ACCOUNT BALANCE</option>
                                        </select>
                                        <span id="sponsor_res"></span>
                                    </div>
                                </div>


                                <div class="col-lg-12">
                                    <div class="form-group mt-2 mb-3 text-left">
                                        <label for="optinvesttype"> Account </label>
                                        <input type="number" name="number"  id="PACKAGE_AMT"
                                            class="form-control" placeholder="Enter Account No" value="">
                                    </div>
                                </div>


                                <div class="col-lg-12">
                                    <div class="form-group mt-2 mb-3 text-left">
                                        <label for="investfromwallet">Select Provider</label>
                                        <select name="operatorcode" class="form-control check_sponsor_exist"
                                            data-response="sponsor_res" required>                                            
                                            <option value="AEML">Adani power</option>
                                            <option value="APDCLR">Assam Power Distribution Company Ltd (RAPDR)</option>
                                            <option value="AJV">Ajmer Vidyut Vitran
                                                Nigam - RAJASTHAN</option>
                                            <option value="APDCLN">APDCL (Non-RAPDR) - ASSAM</option>
                                            <option value="APEPDCL">APEPDCL - ANDHRA PRADESH</option>
                                            <option value="BESCOM">Bangalore
                                                ElectricitySupply Company</option>
                                            <option value="BEST">BEST Mumbai</option>
                                            <option value="BHES">
                                                BharatpurElectricityServicesLtd</option>
                                            <option value="BMESTU">
                                                BrihanMumbaiElectricSupplyandTransportUndertaking</option>   
                                            <option value="BESL">Bikaner Electricity
                                                Supply Limited</option>
                                            <option value="BSES">BSES Rajdhani Power
                                                Limited - Delhi</option>
                                            <option value="BSESY">BSES Yamuna Power Limited
                                                - Delhi</option>
                                            <option value="APCPDCL">
                                                Central Power Distribution Company of Andhra Pradesh Ltd</option>
                                            <option value="CESC">CESC - WEST BENGAL</option>
                                            <option
                                                value="CESCOM">
                                                Chamundeshwari Electricity Supply Corporation Ltd. (Cesc,Mysore)
                                            </option>
                                            <option value="CSPDCL">
                                                Chhattisgarh State Power Distribution Company Ltd. (CSPDCL)</option>
                                            <option value=" DGVCL">Dakshin Gujarat Vij Company
                                                Ltd</option>
                                            <option value="ARPDOP">Department of Power
                                                Arunachal Pradesh</option>
                                            <option value="NDOP">Department of Power, Nagaland
                                            </option>
                                            <option value="DDCL">
                                                DNH Power Distribution Company Limited</option>
                                            <option value="GPCL">Gift Power Company Limited
                                            </option>
                                            <option value="GOAELC">Goa Electricity
                                            </option>
                                            <option value="IPCL">IndiaPowerCorporationLimited
                                            </option>
                                            <option value="DHBVN">Government of Puducherry
                                                Electricity Department</option>
                                            <option value="GESCL">
                                                GulbargaElectricitySupplyCompanyLimited</option>
                                            <option value="HPSEBL">Himachal
                                                Pradesh State Electricity Board Ltd</option>
                                            <option value="HESCOM">Hubli
                                                Electricity Supply Company Ltd. (HESCOM)</option>
                                            <option value="IPWB">India Power - WEST BENGAL</option>
                                            <option value="JVV">Jaipur Vidyut Vitran
                                                Nigam - RAJASTHAN</option>
                                            <option value="JUSCL">Jamshedpur Utilities 
                                                and Services Company Limited</option>
                                            <option value="JKPDD">Jammu &amp;
                                                Kashmir power Development department</option>
                                            <option value="JBVNL">JBVNL - JHARKHAND</option>
                                            <option value="JDVV">Jodhpur Vidyut
                                                Vitran Nigam - RAJASTHAN</option>
                                            <option value="KDHPCPL">kannan devan hills power</option>
                                            <option value="KESCO">Kanpur Electricity Supply
                                                Company</option>
                                            <option value="KEDL">KEDL - KOTA</option>
                                            <option value="LED">Lakshadweep Electricity
                                                Department</option>
                                            <option value="MGVCL">Madhya Gujarat Vij Company
                                                Ltd</option>
                                            <option value="MPPKVVCLMR">Madhya
                                                Pradesh Madhya Kshetra Vidyut Vitaran-RURAL</option>
                                            <option value="MPPKVVCL">Madhya
                                                Pradesh Poorv Kshetra Vidyut Vitaran-URBAN</option>                                        
                                            <option value="MESCOMNR">
                                                Mangalore Electricity Supply Co. Ltd (MESCOM) - RAPDR</option>
                                            <option value="MESCOMNR">
                                                Mangalore Electricity Supply Co. Ltd (Non) - RAPDR</option>
                                            <option value="MSPDCLPR">
                                                Manipur State Power Distribution Company Limited (Prepaid)</option>
                                            <option value="MESCOMR">
                                                Mangalore Electricity Supply Co. Ltd (MESCOM)-RAPDR</option>
                                            <option value="MEPDCL">MEPDCL - MEGHALAYA</option>
                                            <option value="MKV">MP Madhaya Kshetra
                                                Vidyut Vitaran -Urban</option>
                                            <option value="MPPKVVCLPU">MP Poorv Kshetra
                                                Vidyut Vitaran - Jabalpur</option>
                                            <option value="MPPKVVCLPU">MP Poorv Kshetra
                                                Vidyut Vitaran - Rular</option>
                                            <option value="MSEDC">MSEDC - MAHARASHTRA</option>
                                            <option value="MCG">
                                                MUNICIPAL CORPORATION OF GURUGRAM</option>
                                            <option value="MVV">Muzaffarpur Vidyut Vitran</option>
                                            <option value="NESCO">NESCO Odisha</option>
                                            <option value="NDMC">New Delhi
                                                Municipal Council (NDMC) - Electricity</option>
                                            <option value="NP">Noida Power - NOIDA</option>
                                            <option value="North Bihar Electricity">North Bihar Electricity</option>
                                            <option value="NDPL">NorthDelhiPowerLimited</option>
                                            <option value="PGVCL">Paschim Gujarat Vij Company
                                                Ltd</option>
                                            <option value="PKV">Paschim Kshetra
                                                Vitaran - MADHYA PRADESH</option>
                                            <option value="MPED">Power &amp;
                                                Electricity Department - Mizoram</option>
                                            <option value=" PSPCL">Punjab State Power
                                                Corporation Limted</option>
                                            <option value="RELIANCE">Reliance Energy</option>
                                            <option value="SPR">Sikkim Power Rural</option>
                                            <option value="SPU">Sikkim Power Urban</option>
                                            <option value="SNDL">SNDL Power - NAGPUR</option>
                                            <option value="SBE">South Bihar Electricity</option>
                                            <option value="SOUTHCO">SOUTHCO Odisha</option>
                                            <option value="SPA">Southern Power - ANDHRA
                                                PRADESH</option>
                                            <option value="KSEB">Kerala
                                                State Electricity Board Ltd.</option>
                                            <option value="SPT">Southern Power - TELANGANA
                                            </option>
                                            <option value="TPDM">Tata Power - MUMBAI</option>
                                            <option value="TPD">Tata Power Delhi Limited -
                                                Delhi</option>
                                            <option value="TNEB">TNEB - TAMIL NADU</option>
                                            <option value="TRP">Torrent Power agra</option>
                                            <option value="TORRENTAHM">Torrent Power Ahemdabad</option>
                                            <option value="TORRENTBHI">Torrent Power Bhivandi</option>
                                            <option value="TORRENTDAH">Torrent Power Dahej</option>
                                            <option value="TORRENTSHI">Torrent Power SHIL</option>
                                            <option value="TORRENTSUR">Torrent Power Surat</option>
                                            <option value="TPADL">TP Ajmer Distribution Ltd</option>
                                            <option value="TPCODL">TP central odisha
                                                distribution limited</option>
                                            <option value="TSECL">
                                                TripuraStateElectricityCorporationLtd</option>
                                            <option value=" TSNPDCL">TSNPDCL Telangana northern
                                                power</option>
                                            <option value="UPPCLU">UPPCL (URBAN) - UTTAR PRADESH
                                            </option>
                                            <option value="UPPCLR">Uttar Pradesh
                                                Power Corporation Limited(Rular)</option>
                                            <option value="UKPCL">
                                                UttarakhandPowerCorporationLimited</option>
                                            <option value="UGVCL">UttarGujarat Vij Company Ltd
                                            </option>
                                            <option value="UHBV">Uttar Haryana Bijli Vitran Nigam
                                            </option>
                                            <option value="WBSEDCL">WBSEDCL - WEST BENGAL</option>
                                            <option value="WESCO">Western
                                                Electricity supply co. Of orissa ltd.</option>
                                        </select>

                                        <span id="sponsor_res"></span>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="form-group mt-2 mb-3 text-left">
                                        <label for="investfromwallet">Amount</label>
                                        <input type="text" name="amount" class="form-control" autocomplete="off"
                                            placeholder="Amount" required value="">
                                    </div>
                                </div>


                            </div>



                            <div class="al-center">
                                <button type="submit" class="btn btn-primary report-btn submit-btn">Recharge
                                    <span class="thin-arrow">→</span></button>
                            </div>
                        </div>
                        <div class="bronze-main-wrap mt-5 mb-4" style="display: none;">
                            <div class="box-wrap">
                                <h2 class="text-white">Your Investing</h2>
                                <div class="box">
                                    <h2 class="box-heading">Bronze</h2>
                                    <div class="box-image">
                                        <img src="{{ asset('') }}upnl/images/package1.png"
                                            alt="Box Image">
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
                                        <img src="{{ asset('') }}upnl/images/package2.png"
                                            alt="Box Image">
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
                                        <img src="{{ asset('') }}upnl/images/package3.png"
                                            alt="Box Image">
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
                                        <img src="{{ asset('') }}upnl/images/package4.png"
                                            alt="Box Image">
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



    $('.check_sponsor_exist').keyup(function (e) {
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
            success: function (response) {
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



<style>
    .qrcode canvas {
        width: 100%;
    }

</style>

<!--begin::Content-->
<div class="no-tp-gap content d-flex flex-column flex-column-fluid " id="kt_content" style="margin-top:50px">
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
                        <div class="col-xl-4">
                            <div style="" class="form-group mb-3">
                                <input type="text" style="border-radius:15px;" Placeholder="Search Users" name="search"
                                    class="form-control" value="{{ @$search }}">
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
                                    class="btn btn-outline-theme btn-lg d-block w-100 btn-primary" value="Search" />
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group mb-3">
                                <a href="{{ route('user.referral-team') }}"
                                    style="padding: 0.6rem 2rem;" name="reset"
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


@include('layouts.upnl.footer')
