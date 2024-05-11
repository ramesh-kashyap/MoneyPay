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
    <option value="Adani power">Adani power</option>
    <option value="Ajmer Vidyut Vitran Nigam - RAJASTHAN">Ajmer Vidyut Vitran Nigam - RAJASTHAN</option>
    <option value="APDCL (Non-RAPDR) - ASSAM">APDCL (Non-RAPDR) - ASSAM</option>
    <option value="APEPDCL - ANDHRA PRADESH">APEPDCL - ANDHRA PRADESH</option>
    <option value="Bangalore ElectricitySupply Company">Bangalore ElectricitySupply Company</option>
    <option value="BEST Mumbai">BEST Mumbai</option>
    <option value="BharatpurElectricityServicesLtd">BharatpurElectricityServicesLtd</option>
    <option value="Bikaner Electricity Supply Limited">Bikaner Electricity Supply Limited</option>
    <option value="BSES Rajdhani Power Limited - Delhi">BSES Rajdhani Power Limited - Delhi</option>
    <option value="BSES Yamuna Power Limited - Delhi">BSES Yamuna Power Limited - Delhi</option>
    <option value="Central Power Distribution Company of Andhra Pradesh Ltd">Central Power Distribution Company of Andhra Pradesh Ltd</option>
    <option value="CESC - WEST BENGAL">CESC - WEST BENGAL</option>
    <option value="Chamundeshwari Electricity Supply Corporation Ltd. (Cesc,Mysore)">Chamundeshwari Electricity Supply Corporation Ltd. (Cesc,Mysore)</option>
    <option value="Chhattisgarh State Power Distribution Company Ltd. (CSPDCL)">Chhattisgarh State Power Distribution Company Ltd. (CSPDCL)</option>
    <option value="Dakshin Gujarat Vij Company Ltd">Dakshin Gujarat Vij Company Ltd</option>
    <option value="Department of Power Arunachal Pradesh">Department of Power Arunachal Pradesh</option>
    <option value="Department of Power, Nagaland">Department of Power, Nagaland</option>
    <option value="DNHPowerDistributionCompanyLimited">DNHPowerDistributionCompanyLimited</option>
    <option value="Gift Power Company Limited">Gift Power Company Limited</option>
    <option value="DakshinHaryanaBijliVitranNigam">Government of Puducherry Electricity Department</option>
    <option value="GulbargaElectricitySupplyCompanyLimited">GulbargaElectricitySupplyCompanyLimited</option>
    <option value="Himachal Pradesh State Electricity Board Ltd">Himachal Pradesh State Electricity Board Ltd</option>
    <option value="Hubli Electricity Supply Company Ltd. (HESCOM)">Hubli Electricity Supply Company Ltd. (HESCOM)</option>
    <option value="India Power - WEST BENGAL">India Power - WEST BENGAL</option>
    <option value="Jaipur Vidyut Vitran Nigam - RAJASTHAN">Jaipur Vidyut Vitran Nigam - RAJASTHAN</option>
    <option value="Jammu &amp; Kashmir power Development department">Jammu &amp; Kashmir power Development department</option>
    <option value="JBVNL - JHARKHAND">JBVNL - JHARKHAND</option>
    <option value="Jodhpur Vidyut Vitran Nigam - RAJASTHAN">Jodhpur Vidyut Vitran Nigam - RAJASTHAN</option>
    <option value="kannan devan hills power">kannan devan hills power</option>
    <option value="Kanpur Electricity Supply Company">Kanpur Electricity Supply Company</option>
    <option value="KEDL - KOTA">KEDL - KOTA</option>
    <option value="Lakshadweep Electricity Department">Lakshadweep Electricity Department</option>
    <option value="Madhya Gujarat Vij Company Ltd">Madhya Gujarat Vij Company Ltd</option>
    <option value="Madhya Pradesh Madhya Kshetra Vidyut Vitaran-RURAL">Madhya Pradesh Madhya Kshetra Vidyut Vitaran-RURAL</option>
    <option value="Madhya Pradesh Poorv Kshetra Vidyut Vitaran-URBAN">Madhya Pradesh Poorv Kshetra Vidyut Vitaran-URBAN</option>
    <option value="Mangalore Electricity Supply Co. Ltd (MESCOM) - RAPDR">Mangalore Electricity Supply Co. Ltd (MESCOM) - RAPDR</option>
    <option value="Mangalore Electricity Supply Co. Ltd (Non) - RAPDR">Mangalore Electricity Supply Co. Ltd (Non) - RAPDR</option>
    <option value="Manipur State Power Distribution Company Limited (Prepaid)">Manipur State Power Distribution Company Limited (Prepaid)</option>
    <option value="MEPDCL - MEGHALAYA">MEPDCL - MEGHALAYA</option>
    <option value="MP Madhaya Kshetra Vidyut Vitaran -Urban">MP Madhaya Kshetra Vidyut Vitaran -Urban</option>
    <option value="MP Poorv Kshetra Vidyut Vitaran - Jabalpur">MP Poorv Kshetra Vidyut Vitaran - Jabalpur</option>
    <option value="MP Poorv Kshetra Vidyut Vitaran - Rular">MP Poorv Kshetra Vidyut Vitaran - Rular</option>
    <option value="MSEDC - MAHARASHTRA">MSEDC - MAHARASHTRA</option>
    <option value="MUNICIPALCORPORATIONOFGURUGRAM">MUNICIPALCORPORATIONOFGURUGRAM</option>
    <option value="Muzaffarpur Vidyut Vitran">Muzaffarpur Vidyut Vitran</option>
    <option value="NESCO Odisha">NESCO Odisha</option>
    <option value="New Delhi Municipal Council (NDMC) - Electricity">New Delhi Municipal Council (NDMC) - Electricity</option>
    <option value="Noida Power - NOIDA">Noida Power - NOIDA</option>
    <option value="North Bihar Electricity">North Bihar Electricity</option>
    <option value="NorthDelhiPowerLimited">NorthDelhiPowerLimited</option>
    <option value="Paschim Gujarat Vij Company Ltd">Paschim Gujarat Vij Company Ltd</option>
    <option value="Paschim Kshetra Vitaran - MADHYA PRADESH">Paschim Kshetra Vitaran - MADHYA PRADESH</option>
    <option value="Power &amp; Electricity Department - Mizoram">Power &amp; Electricity Department - Mizoram</option>
    <option value="Punjab State Power Corporation Limted">Punjab State Power Corporation Limted</option>
    <option value="Reliance Energy">Reliance Energy</option>
    <option value="Sikkim Power Rural">Sikkim Power Rural</option>
    <option value="Sikkim Power Urban">Sikkim Power Urban</option>
    <option value="SNDL Power - NAGPUR">SNDL Power - NAGPUR</option>
    <option value="South Bihar Electricity">South Bihar Electricity</option>
    <option value="SOUTHCO Odisha">SOUTHCO Odisha</option>
    <option value="Southern Power - ANDHRA PRADESH">Southern Power - ANDHRA PRADESH</option>
    <option value="Southern Power - TELANGANA">Southern Power - TELANGANA</option>
    <option value="Tata Power - MUMBAI">Tata Power - MUMBAI</option>
    <option value="Tata Power Delhi Limited - Delhi">Tata Power Delhi Limited - Delhi</option>
    <option value="TNEB - TAMIL NADU">TNEB - TAMIL NADU</option>
    <option value="Torrent Power agra">Torrent Power agra</option>
    <option value="Torrent Power Ahemdabad">Torrent Power Ahemdabad</option>
    <option value="Torrent Power Bhivandi">Torrent Power Bhivandi</option>
    <option value="Torrent Power Dahej">Torrent Power Dahej</option>
    <option value="Torrent Power SHIL">Torrent Power SHIL</option>
    <option value="Torrent Power Surat">Torrent Power Surat</option>
    <option value="TP Ajmer Distribution Ltd">TP Ajmer Distribution Ltd</option>
    <option value="TP central odisha distribution limited">TP central odisha distribution limited</option>
    <option value="TripuraStateElectricityCorporationLtd">TripuraStateElectricityCorporationLtd</option>
    <option value="TSNPDCL Telangana northern power">TSNPDCL Telangana northern power</option>
    <option value="UPPCL (URBAN) - UTTAR PRADESH">UPPCL (URBAN) - UTTAR PRADESH</option>
    <option value="Uttar Pradesh Power Corporation Limited(Rular)">Uttar Pradesh Power Corporation Limited(Rular)</option>
    <option value="UttarakhandPowerCorporationLimited">UttarakhandPowerCorporationLimited</option>
    <option value="UttarGujarat Vij Company Ltd">UttarGujarat Vij Company Ltd</option>
    <option value="UttarHaryanaBijliVitranNigam">UttarHaryanaBijliVitranNigam</option>
    <option value="WBSEDCL - WEST BENGAL">WBSEDCL - WEST BENGAL</option>
    <option value="Western Electricity supply co. Of orissa ltd.">Western Electricity supply co. Of orissa ltd.</option>
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


@include('layouts.upnl.footer')