         <script>
             $("#Dashboard").addClass("menu-item-active");
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


         <style>
             .user-image {
                 width: 80px;
                 height: 52px;
                 border-radius: 50%;
                 overflow: hidden;
                 position: relative;
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

             <div class="d-flex flex-column-fluid section-top-50 section-bottom-15 mobile-section-ptop">
                 <!--begin::Container-->
                 <div class="container-fluid">

                     <!-- TradingView Widget BEGIN -->
                     <div class="tradingview-widget-container">
                         <div class="tradingview-widget-container__widget"></div>
                         <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/"
                                 rel="noopener nofollow" target="_blank"></a></div>
                         <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
                             {
                                 "symbols": [{
                                         "description": "BTC",
                                         "proName": "BITSTAMP:BTCUSD"
                                     },
                                     {
                                         "description": "Gold",
                                         "proName": "TVC:GOLD"
                                     },
                                     {
                                         "description": "ETH",
                                         "proName": "BITSTAMP:ETHUSD"
                                     },
                                     {
                                         "description": "USDT",
                                         "proName": "CRYPTOCAP:USDT"
                                     },
                                     {
                                         "description": "LTC",
                                         "proName": "CRYPTOCAP:LTC"
                                     },
                                     {
                                         "description": "BAPE",
                                         "proName": "BITMEX:BAPE"
                                     }
                                 ],
                                 "showSymbolLogo": true,
                                 "colorTheme": "dark",
                                 "isTransparent": false,
                                 "displayMode": "adaptive",
                                 "locale": "en"
                             }
                         </script>
                     </div>
                     <!-- TradingView Widget END -->


                     <!-- Head Notification -->



                     <style>
                         .rank {
                             text-shadow: 0 14.36px 8.896px #2c482e, 0 -1px 1px;
                             font-size: 28px;
                             color: #02938af5;
                             background: linear-gradient(to right, #ff9400 0%, #ffe900 100%);
                             -webkit-background-clip: text;
                             -webkit-text-fill-color: transparent;
                         }
                     </style>

                     <div class="row d-flex align-items-stretch">

                         <div class="col-lg-4">
                             <div class="dark-block">
                                 <div class="row align-items-center">
                                     <div class="col-lg-12">
                                         <div class="text-center reward-dash-wrap">
                                             <?php
                                             $rank = \DB::table('users')
                                                 ->where('id', Auth::user()->id)
                                                 ->where('active_status', 'Active')
                                                 ->first();
                                             $rank = $rank ? $rank->rank : 'no-reward';
                                             
                                             ?>
                                             <img src="{{ asset('') }}upnl/images/rank/<?php echo $rank; ?>.png"
                                                 alt="">
                                             <div class="aw-badge-medal mt-4 text-white"><span
                                                     class="rank"><?php if ($rank == 0) {
                                                         echo 'ASSOCIATE';
                                                     } elseif ($rank == 1) {
                                                         echo 'SILVER ASSOCIATE';
                                                     } elseif ($rank == 2) {
                                                         echo 'GOLD ASSOCIATE';
                                                     } elseif ($rank == 3) {
                                                         echo 'PLATINUM ASSOCIATE';
                                                     } elseif ($rank == 4) {
                                                         echo 'DIAMOND ASSOCIATE';
                                                     } elseif ($rank == 5) {
                                                         echo 'EMERALD ASSOCIATE';
                                                     } elseif ($rank == 6) {
                                                         echo 'PEARL ASSOCIATE';
                                                     } elseif ($rank == 7) {
                                                         echo 'RUBY ASSOCIATE';
                                                     } elseif ($rank == 8) {
                                                         echo 'FALCON ASSOCIATE';
                                                     } elseif ($rank == 9) {
                                                         echo 'PANTHER ASSOCIATE';
                                                     } elseif ($rank == 10) {
                                                         echo 'TITAN ASSOCIATE';
                                                     } elseif ($rank == 11) {
                                                         echo 'JAGUAR ASSOCIATE';
                                                     } elseif ($rank == 12) {
                                                         echo 'KUVERA ASSOCIATE';
                                                     } elseif ($rank == 13) {
                                                         echo 'CROWN ASSOCIATE';
                                                     } else {
                                                         echo 'NO RANK';
                                                     } ?></span>
                                             </div>
                                             <div class="aw-badge-medal mt-4 text-white"> <img
                                                     style="margin-top: -22px;height: 57px;"
                                                     src="{{ asset('') }}upnl/images/star.png" alt="">
                                             </div>

                                         </div>
                                     </div>
                                 </div>
                             </div>
                             <div class="dark-block w-100 mt-6">
                                 <div class="heading-with-link mb-1">
                                     <h3 class="dash-headings float-left mt-0">Quick Links</h3>
                                     <a href="{{ route('user.profile') }}" class="float-right arrow-right-wrap"
                                         title="View Profile">View Profile
                                         <i class="fa-solid fa-arrow-right"></i></a>
                                     <div class="clearfix"></div>
                                 </div>
                                 <div class="row d-flex align-items-stretch">
                                     <div class="col-md-6 col-lg-6 d-flex align-items-stretch mt-4">
                                         <div class="mini-stat mini-stat-bg-1 w-100 witharw">
                                             <div class="mini-stat-img">
                                                 <img src="{{ asset('') }}upnl/images/deposit.svg"
                                                     alt="Deposit Icon">
                                                 <div class="custom-box-desc">
                                                     <a href="{{ route('user.AddFund') }}">
                                                         <h5 class="mt-1 mb-2">Deposit</h5>
                                                         <h3 class="mt-0 mb-0">Fund Deposit <i
                                                                 class="fa-solid fa-arrow-right"></i></h3>
                                                     </a>
                                                 </div>
                                             </div>
                                             <div class="mini-stat-bg"></div>
                                         </div>
                                     </div>
                                     <!--column--->
                                     <div class="col-md-6 col-lg-6 d-flex align-items-stretch mt-4">
                                         <div class="mini-stat mini-stat-bg-2 w-100">
                                             <div class="mini-stat-img">
                                                 <img src="{{ asset('') }}upnl/images/payment.svg"
                                                     alt="Invest Icon">
                                                 <div class="custom-box-desc">
                                                     <a href="{{ route('user.withdraw-request') }}">
                                                         <h5 class="mt-1 mb-2">Payment</h5>
                                                         <h3 class="mt-0 mb-0">Withdrawal A/c <i
                                                                 class="fa-solid fa-arrow-right"></i></h3>
                                                     </a>
                                                 </div>
                                             </div>
                                             <div class="mini-stat-bg"></div>
                                         </div>
                                     </div>
                                     <!--column--->
                                 </div>
                                 <!---row--->
                                 <div class="row d-flex align-items-stretch mb-0">
                                     <div class="col-md-6 col-lg-6 d-flex align-items-stretch mt-4">
                                         <div class="mini-stat mini-stat-bg-3 w-100">
                                             <div class="mini-stat-img">
                                                 <img src="{{ asset('') }}upnl/images/invest.svg" alt="Invest Icon">
                                                 <div class="custom-box-desc">
                                                     <a href="{{ route('user.DepositHistory') }}">
                                                         <h5 class="mt-1 mb-2">My Packages</h5>
                                                         <h3 class="mt-0 mb-0">Packages <i
                                                                 class="fa-solid fa-arrow-right"></i></h3>
                                                     </a>
                                                 </div>
                                             </div>
                                             <div class="mini-stat-bg"></div>
                                         </div>
                                     </div>
                                     <!--column--->
                                     <div class="col-md-6 col-lg-6 d-flex align-items-stretch mt-4">
                                         <div class="mini-stat mini-stat-bg-4 w-100">
                                             <div class="mini-stat-img">
                                                 <img src="{{ asset('') }}upnl/images/withdraw.svg"
                                                     alt="Invest Icon">
                                                 <div class="custom-box-desc">
                                                     <a href="{{ route('user.withdraw-request') }}">
                                                         <h5 class="mt-1 mb-2">Payment</h5>
                                                         <h3 class="mt-0 mb-0">Payment Ledger <i
                                                                 class="fa-solid fa-arrow-right"></i></h3>
                                                     </a>
                                                 </div>
                                             </div>
                                             <div class="mini-stat-bg"></div>
                                         </div>
                                     </div>
                                     <!--column--->
                                 </div>
                             </div>
                             <!---dark-block---->
                             <div class="user-card mt-6 mb-3">
                                 <div class="heading-with-link mb-1">
                                     <h3 class="dash-headings float-left mt-0">My Profile</h3>
                                     <a href="{{ route('user.profile') }}" class="float-right arrow-right-wrap"
                                         title="View Profile">View Profile
                                         <i class="fa-solid fa-arrow-right"></i></a>
                                     <div class="clearfix"></div>
                                 </div>
                                 <div class="user-card-content">
                                     <!-- <div class="user-image">
                                         <img src="{{ asset('') }}upnl/images/icon-member-active.png"
                                             alt="User">
                                     </div> -->
                                     <div class="profile-details">
                                         <table class="user-table">
                                             <tr>
                                                 <td>Member ID:</td>
                                                 <td class="user-value">{{ Auth::user()->username }}</td>
                                             </tr>
                                             <tr>
                                                 <td>Registration Date:</td>
                                                 <td class="user-value"><?php echo date('D, d M Y', strtotime(Auth::user()->jdate)); ?></td>
                                             </tr>
                                             <tr>
                                                 <td>Country:</td>
                                                 <td class="user-value">{{ Auth::user()->country }}</td>
                                             </tr>
                                             <tr>
                                                 <td>Email ID:</td>
                                                 <td class="user-value">{{ Auth::user()->email }}
                                                 </td>
                                             </tr>  <tr>
                                                 <td>Status:</td>
                                                 <td class="user-value">{{ Auth::user()->active_status }}
                                                 </td>
                                             </tr>
                                         </table>
                                     </div>
                                 </div>
                             </div>
                         </div>

                         <div class="col-lg-8">
                             <div class="dark-block w-100">
                                 <div class="heading-with-link mb-1">
                                     <h3 class="dash-headings float-left mt-0 text-dark">Wallet</h3>
                                     <!-- <a href="" class="float-right arrow-right-wrap" title="View Profile">View Wallet Report <i class="fa-solid fa-arrow-right"></i></a> -->
                                     <div class="clearfix"></div>
                                 </div>
                                 <div class="row mb-0 d-flex align-items-stretc">
                                     <div class="col-lg-6 mt-4 mb-4 d-flex align-items-stretc">
                                         <div class="info-box w-100">
                                             <div class="icon">
                                                 <img src="{{ asset('') }}upnl/images/f-wallet.svg"
                                                     alt="">
                                             </div>
                                             <div class="text-content">
                                                 <h5>Account Balance</h5>
                                                 <h3>{{ currency() }}
                                                     {{ number_format(Auth::user()->available_balance(), 2) }}</h3>
                                                 <a href="#" class="view-wallet-link  mt-2">View Wallet <i
                                                         class="fas fa-chevron-right"></i></a>
                                             </div>
                                         </div>
                                     </div>
                                     <div class="col-lg-6 mt-4 mb-4 d-flex align-items-stretc">
                                         <div class="info-box w-100">
                                             <div class="icon">
                                                 <img src="{{ asset('') }}upnl/images/i-wallet.svg"
                                                     alt="">
                                             </div>
                                             <div class="text-content">
                                                 <h5>Activation Wallet</h5>
                                                 <h3>
                                                     {{ currency() }}
                                                     {{ number_format(Auth::user()->FundBalance(), 2) }}
                                                 </h3>
                                                 <a href="#" class="view-wallet-link mt-2"> View Wallet <i
                                                         class="fas fa-chevron-right"></i></a>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <div class="row mt-4 mb-0">
                                     <div class="col-lg-4 mt-3 mb-3">
                                         <div class="dark-card-one">
                                             <div class="dc-left">
                                                 <span>Total Buy Packages</span>
                                                 <p>{{ currency() }}
                                                     {{ number_format(Auth::user()->investment->sum('amount'), 2) }}
                                                 </p>

                                             </div>
                                             <div class="dc-right">
                                                 <i class="bi bi-diagram-3-fill"></i>
                                             </div>
                                         </div>
                                     </div>
                                     <div class="col-lg-4 mt-3 mb-3">
                                         <div class="dark-card-one">
                                             <div class="dc-left">
                                                 <span>Total Roi Bonus</span>
                                                 <p>{{ currency() }}
                                                     {{ number_format(Auth::user()->roi_bonus->sum('comm'), 2) }}</p>
                                             </div>
                                             <div class="dc-right">
                                                 <i class="bi bi-file-earmark-binary-fill"></i>
                                             </div>
                                         </div>
                                     </div>
                                     <div class="col-lg-4 mt-3 mb-3">
                                         <div class="dark-card-one">
                                             <div class="dc-left">
                                                 <span>Total Level Bonus</span>
                                                 <p>{{ currency() }}
                                                     {{ number_format(Auth::user()->binary_bonus->sum('comm'), 2) }}
                                                 </p>
                                             </div>
                                             <div class="dc-right">
                                                 <i class="bi bi-box-fill"></i>
                                             </div>
                                         </div>
                                     </div>



                                    
                                     <div class="col-lg-4 mt-3 mb-3">
                                         <div class="dark-card-one">
                                             <div class="dc-left">
                                                 <span>Total Direct Bonus</span>
                                                 <p>{{ currency() }}
                                                     {{ number_format(Auth::user()->sponsor_bonus->sum('comm'), 2) }}
                                                 </p>
                                             </div>
                                             <div class="dc-right">
                                                 <i class="bi bi-box-fill"></i>
                                             </div>
                                         </div>
                                     </div>

                                     <div class="col-lg-4 mt-3 mb-3">
                                         <div class="dark-card-one">
                                             <div class="dc-left">
                                                 <span>Total Reward Bonus</span>
                                                 <p>
                                                 <p>{{ currency() }}
                                                     {{ number_format(Auth::user()->binary_bonus->sum('comm'), 2) }}
                                                 </p>
                                                 </p>
                                             </div>
                                             <div class="dc-right">
                                                 <i class="bi bi-file-earmark-binary-fill"></i>
                                             </div>


                                         </div>

                                     </div>
                                     <div class="col-lg-4 mt-3 mb-3">
                                         <div class="dark-card-one">
                                             <div class="dc-left">
                                                 <span>Total Withdrawal</span>
                                                 <p>
                                                 <p>{{ currency() }}
                                                     {{ number_format(Auth::user()->withdraw(), 2) }}</p>
                                                 </p>
                                             </div>
                                             <div class="dc-right">
                                                 <i class="bi bi-file-earmark-binary-fill"></i>
                                             </div>


                                         </div>

                                     </div>

                                <div class="col-lg-4 mt-3 mb-3">
                                         <div class="dark-card-one">
                                             <div class="dc-left">
                                                 <span>Total Incomes</span>
                                                 <p>
                                                 <p>{{ currency() }}
                                                     {{ number_format(Auth::user()->users_incomes->sum('comm'), 2) }}</p>
                                                 </p>
                                             </div>
                                             <div class="dc-right">
                                                 <i class="bi bi-file-earmark-binary-fill"></i>
                                             </div>


                                         </div>

                                     </div>


                                     <!---dark-block---->
                                     <div class="rounded-box-wrap mt-5 mb-5">
                                        <div class="dark-block">
                                            <div class="heading-with-link mb-5">
                                                <h3 class="dash-headings float-left mt-0">Referrals</h3>
                                                <a href="{{route('user.referral-team')}}"
                                                    class="float-right arrow-right-wrap">Referral Report <i
                                                        class="fas fa-arrow-right"></i></a>
                                                <div class="clearfix"></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-4 aflimg">
                                                    <img src="{{asset('')}}upnl/images/afl-ref.png" alt="">
                                                </div>
                                                <div class="col-lg-8">
                                                    <div class="afl-title">
                                                        <h2>Affiliate Income Status</h2>
                                                        <p>Total Active Affiliates: {{$user_direct}}</p>
                                                    </div>
                                                    <div class="b-top">
                                                        <div class="user-ils">
                                                            <div class="user-ils-center">
                                                                <i class="bi bi-person-fill"></i>
                                                            </div>
                                                        </div>
                                                        <ul>
                                                            <li></li>
                                                            <li></li>
                                                            <li></li>
                                                            <li></li>
                                                        </ul>
                                                    </div>
                                                    <div class="row d-flex clearfix">
                                                        <div class="col-md-12 col-sm-12 mb-4">
                                                            <div class="afl-link">
                                                                <label class="control-label mt-0">Left Link</label>
                                                                <div class="input-group">
                                                                    <input class="form-control ref-bg" type="text"
                                                                        name="link" readonly="" id="clipboardleft"
                                                                        value="{{ asset('') }}register?ref={{ Auth::user()->username }}&pos=Left">
                                                                    <span class="input-group-addon p-0"><button
                                                                            class="btn-copy copyclipbtn"
                                                                            onclick="copyclipboardleft('clipboardleft')"
                                                                            style="border-radius: 0;"><i
                                                                                class="fas fa-copy"></i></button></span>
                                                                </div>
                                                                <small class="text-white">Copy and share <b>LEFT</b>
                                                                    affiliate link to get more income.</small>
                                                            </div>
                                                        </div>
                                                        <!-- <div class="col-lg-6 col-md-12 col-sm-12">
                                                            <div class="afl-link">
                                                                <label class="control-label mt-0">Right Link</label>
                                                                <div class="input-group">
                                                                    <input class="form-control ref-bg" type="text"
                                                                        name="link" readonly="" id="clipboardright"
                                                                        value="{{ asset('') }}register?ref={{ Auth::user()->username }}&pos=Right">
                                                                    <span class="input-group-addon p-0"><button
                                                                            class="btn-copy copyclipbtn"
                                                                            onclick="copyclipboardright('clipboardright')"
                                                                            style="border-radius: 0;"><i
                                                                                class="fas fa-copy"></i></button></span>
                                                                </div>
                                                                <small class="text-white">Copy and share <b>RIGHT</b>
                                                                    affiliate link to get more income.</small>
                                                            </div>
                                                        </div> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 </div>

                             </div>
                         </div>
                         <!---row--->
                         <!--end::Container-->
                     </div>
                     <!--end::Entry-->

                     <!-- Modal -->
                     <div id="show_popup">
                     </div>
