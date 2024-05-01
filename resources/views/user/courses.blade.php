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
                <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Courses <span
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
            <form class="form mt-0" name="frmmain" id="kt_form" method="POST"
                action="{{ route('user.fundActivation') }}">
                {{ csrf_field() }}

                <div class="col-12">
                </div>

                <!-- investment-head::begin -->

                        <?php 
                        
                        $lastPackage=\DB::table('investments')->where('user_id',Auth::user()->id)->where('status','Active')->orderBy('id','DESC')->limit(1)->first();
                         $last_package=($lastPackage)?$lastPackage->amount:0;
                        ?>
                        
                <div class="row">
                      <h3 style="color: #fff; text-align: center; margin: 0px auto;">YOUR CURRENT PACKAGE IS : &#8377; <?php echo $last_package;?></h3>
                    <div class="col-xl-12 offset-xl-12">

                            <div class="row">


                          

                                @if($last_package==800)
                                  <div class="col-lg-4">
                                             <div class="gold-main-wrap" style="display: block;">
                                            <div class="box-wrap">
                                               
                                                <div class="box">
                                                    
                                                    <h2 class="box-heading"><a href="https://drive.google.com/drive/u/0/folders/1vZ2hQIPinB3c41XL5Ab-f90vV7KyUt2R" target=_blank>Link </a></h2>
                                                    <div class="box-image">
                                                        <h2 class="text-white">1. SOCIAL MEDIA MASTERY</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                     
                                         <div class="col-lg-4">
                                             <div class="gold-main-wrap" style="display: block;">
                                            <div class="box-wrap">
                                               
                                                <div class="box">
                                                    
                                                    <h2 class="box-heading"><a href="https://drive.google.com/drive/folders/1NR6WyOieD6Aml-jNbAO13VDSsLFyEvgf" target=_blank>Link </a></h2>
                                                    <div class="box-image">
                                                        <h2 class="text-white">2. DIGITAL NETWORK MARKETING</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                     
                                         <div class="col-lg-4">
                                             <div class="gold-main-wrap" style="display: block;">
                                            <div class="box-wrap">
                                               
                                                <div class="box">
                                                    
                                                    <h2 class="box-heading"><a href="https://drive.google.com/folderview?id=13i-ngdroz-PnTg6kRg-5XRhtMf71It2O" target=_blank>Link </a></h2>
                                                    <div class="box-image">
                                                        <h2 class="text-white">3.PERSONALITY DEVELOPMENT</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                     
                                         <div class="col-lg-4">
                                             <div class="gold-main-wrap" style="display: block;">
                                            <div class="box-wrap">
                                               
                                                <div class="box">
                                                    
                                                    <h2 class="box-heading"><a href="https://drive.google.com/folderview?id=1Y-mETIiRcYrY38ABHLW6Wv6-YY3AwHjo" target=_blank>Link </a></h2>
                                                    <div class="box-image">
                                                        <h2 class="text-white">4.YOUTUBE SUTRA</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                     
                     
                                    
                                @endif
                                <!-- ==================================== -->
                    

                                 @if($last_package==2400)
                                  <div class="col-lg-4">
                                             <div class="gold-main-wrap" style="display: block;">
                                            <div class="box-wrap">
                                               
                                                <div class="box">
                                                    
                                                    <h2 class="box-heading"><a href="https://drive.google.com/drive/u/0/folders/1vZ2hQIPinB3c41XL5Ab-f90vV7KyUt2R" target=_blank>Link </a></h2>
                                                    <div class="box-image">
                                                        <h2 class="text-white">1. SOCIAL MEDIA MASTERY</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                     
                                         <div class="col-lg-4">
                                             <div class="gold-main-wrap" style="display: block;">
                                            <div class="box-wrap">
                                               
                                                <div class="box">
                                                    
                                                    <h2 class="box-heading"><a href="https://drive.google.com/folderview?id=1IVgTiz48WxGNMH4z1fPVrzXswnUIeVUs" target=_blank>Link </a></h2>
                                                    <div class="box-image">
                                                        <h2 class="text-white">2. ADVANCE PERSONALITY DEVELOPMENT</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                     
                                         <div class="col-lg-4">
                                             <div class="gold-main-wrap" style="display: block;">
                                            <div class="box-wrap">
                                               
                                                <div class="box">
                                                    
                                                    <h2 class="box-heading"><a href="https://drive.google.com/folderview?id=1HAwUfqLIKBRx2KD8rw3suqird5KTlTfa" target=_blank>Link </a></h2>
                                                    <div class="box-image">
                                                        <h2 class="text-white">3.BANG ON NETWORK MARKETING</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                     
                                         <div class="col-lg-4">
                                             <div class="gold-main-wrap" style="display: block;">
                                            <div class="box-wrap">
                                               
                                                <div class="box">
                                                    
                                                    <h2 class="box-heading"><a href="https://drive.google.com/folderview?id=1IVgTiz48WxGNMH4z1fPVrzXswnUIeVUs" target=_blank>Link </a></h2>
                                                    <div class="box-image">
                                                        <h2 class="text-white">4.ADVANCE PERSONALITY DEVELOPMENT</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                     
                     
                                    
                                @endif
                                <!-- ==================================== -->
                       @if($last_package==4800)
                                  <div class="col-lg-4">
                                             <div class="gold-main-wrap" style="display: block;">
                                            <div class="box-wrap">
                                               
                                                <div class="box">
                                                    
                                                    <h2 class="box-heading"><a href="https://drive.google.com/drive/folders/1NR6WyOieD6Aml-jNbAO13VDSsLFyEvgf" target=_blank>Link </a></h2>
                                                    <div class="box-image">
                                                        <h2 class="text-white">1. DIGITAL NETWORK MARKETING</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                     
                                         <div class="col-lg-4">
                                             <div class="gold-main-wrap" style="display: block;">
                                            <div class="box-wrap">
                                               
                                                <div class="box">
                                                    
                                                    <h2 class="box-heading"><a href="https://drive.google.com/folderview?id=1-GS6Jx8e8Jsqw3nOmirWAB6ruCgStNaE" target=_blank>Link </a></h2>
                                                    <div class="box-image">
                                                        <h2 class="text-white">2. ULTIMATE NETWORK MARKETING</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                     
                                         <div class="col-lg-4">
                                             <div class="gold-main-wrap" style="display: block;">
                                            <div class="box-wrap">
                                               
                                                <div class="box">
                                                    
                                                    <h2 class="box-heading"><a href="https://drive.google.com/folderview?id=1vZ2hQIPinB3c41XL5Ab-f90vV7KyUt2R" target=_blank>Link </a></h2>
                                                    <div class="box-image">
                                                        <h2 class="text-white">3.SOCIAL MEDIA MASTERY</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                     
                                         <div class="col-lg-4">
                                             <div class="gold-main-wrap" style="display: block;">
                                            <div class="box-wrap">
                                               
                                                <div class="box">
                                                    
                                                    <h2 class="box-heading"><a href="https://drive.google.com/folderview?id=1IVgTiz48WxGNMH4z1fPVrzXswnUIeVUs" target=_blank>Link </a></h2>
                                                    <div class="box-image">
                                                        <h2 class="text-white">4.ADVANCE PERSONALITY DEVELOPMENT</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                     
                     
                                    
                                @endif
                                <!-- ==================================== -->
                    
             <!-- ==================================== -->
                       @if($last_package==8000)
                                  <div class="col-lg-4">
                                             <div class="gold-main-wrap" style="display: block;">
                                            <div class="box-wrap">
                                               
                                                <div class="box">
                                                    
                                                    <h2 class="box-heading"><a href="https://drive.google.com/drive/folders/1NR6WyOieD6Aml-jNbAO13VDSsLFyEvgf" target=_blank>Link </a></h2>
                                                    <div class="box-image">
                                                        <h2 class="text-white">1. DIGITAL NETWORK MARKETING</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                     
                                         <div class="col-lg-4">
                                             <div class="gold-main-wrap" style="display: block;">
                                            <div class="box-wrap">
                                               
                                                <div class="box">
                                                    
                                                    <h2 class="box-heading"><a href="https://drive.google.com/folderview?id=1-GS6Jx8e8Jsqw3nOmirWAB6ruCgStNaE" target=_blank>Link </a></h2>
                                                    <div class="box-image">
                                                        <h2 class="text-white">2. ULTIMATE NETWORK MARKETING</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                     
                                         <div class="col-lg-4">
                                             <div class="gold-main-wrap" style="display: block;">
                                            <div class="box-wrap">
                                               
                                                <div class="box">
                                                    
                                                    <h2 class="box-heading"><a href="https://drive.google.com/folderview?id=1vZ2hQIPinB3c41XL5Ab-f90vV7KyUt2R" target=_blank>Link </a></h2>
                                                    <div class="box-image">
                                                        <h2 class="text-white">3.SOCIAL MEDIA MASTERY</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                     
                                         <div class="col-lg-4">
                                             <div class="gold-main-wrap" style="display: block;">
                                            <div class="box-wrap">
                                               
                                                <div class="box">
                                                    
                                                    <h2 class="box-heading"><a href="https://drive.google.com/folderview?id=1IVgTiz48WxGNMH4z1fPVrzXswnUIeVUs" target=_blank>Link </a></h2>
                                                    <div class="box-image">
                                                        <h2 class="text-white">4.ADVANCE PERSONALITY DEVELOPMENT</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                        <div class="col-lg-4">
                                             <div class="gold-main-wrap" style="display: block;">
                                            <div class="box-wrap">
                                               
                                                <div class="box">
                                                    
                                                    <h2 class="box-heading"><a href="https://drive.google.com/drive/mobile/folders/1PZ2_5z1UI8U8_IixzepNJIRBuJvJ9yjy" target=_blank>Link </a></h2>
                                                    <div class="box-image">
                                                        <h2 class="text-white">5.MAHATMA JI TECHNICAL YOUTUBE CRASH COURSE</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                     
                       <div class="col-lg-4">
                                             <div class="gold-main-wrap" style="display: block;">
                                            <div class="box-wrap">
                                               
                                                <div class="box">
                                                    
                                                    <h2 class="box-heading"><a href="https://drive.google.com/drive/folders/1B_OqAf-84SP_NGnBqJ6XkvZ2ETuzRjKp" target=_blank>Link </a></h2>
                                                    <div class="box-image">
                                                        <h2 class="text-white">6.BANG ON NETWORK MARKETING</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                     
                     
                                    
                                @endif
                                <!-- ==================================== -->
                    



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
        if (amt % 20 == 0) {
            return true;
        } else {
            alert('Please enter valid amount Multiple of Rs. 20  ');
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
