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

 
</script>
<link rel="stylesheet" href="{{asset('')}}upnl/css/tree.css">
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
                  <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Genealogy Tree</h5>
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
  <style type="text/css">
    .tree-border::before {
        display: block;
        width: 50%;
        margin-left: 25%;
        margin-right: 25%;
        border-top: 2px solid #5883b7;
        border-radius: 100px;
        color: #2D2A03;
        content: "|";
    }
    .data-table td span:nth-child(3n - 1) {
    cursor: pointer !important;
    color: #fe7e10 !important;
    font-weight: 700 !important;
    padding: 6px 6px 4px 6px;
   
}
.modal .modal-header .modal-title {
    font-weight: 500;
    font-size: 1.3rem;
    color: #ffffff;
}
.modal-content {
    position: relative;
    background-color: #111219;
    background-clip: padding-box;
    border: 1px solid #999;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 6px;
    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
    box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
    outline: 0;
}

/*Om code start*/
/* .data-table td span:nth-child(3n - 1){cursor:pointer !important; color:#e6b429 !important; font-weight:400 !important; padding:6px 6px 4px 6px;}  */
.load-gif img{ width:120px;}
.load-gif{width:20px !important;}
.load-gif img{ width:20px !important; float:left;}
.system-cal-report{ font-size:12px; color:red;}

#userDataModal #userName{ text-transform:uppercase;}
#userData table{ width:100%; border:1px #ccc solid; background-color:#000;}
#userData table td{ border:1px #ccc solid; padding:8px; text-transform:uppercase; color:#fff; text-align:center;}
#userData table td i{ margin-right:4px;}
#userData table td span{ float:center; font-weight:100px; font-size:12px;}
.text-center {
    text-align: center!important;
    color: #29c7e0;
}
.modal .modal-header .close span {
    display: block;
}
.modal-header .close {
    margin-top: -2px;
    opacity: 0.8;
}
</style>
<input type="hidden" name="base_url" value="{{asset('')}}">
  <!--begin: Wizard-->
  <div class="wizard wizard-4 mbl-top-135" id="kt_wizard_v4" data-wizard-state="step-first"
      data-wizard-clickable="true">
      <div class="container-fluid">
          <div class="row d-flex justify-content-center">
           
          

              
           

                  <div class="table-responsive form-white-curved table-main-wrap">
                    <div style="overflow-x:auto">
                      <table id="zero-conf" class="data-table" style="width:100%">


                          <tbody>
                              <tr class="text-center">
                                  <td colspan="8">
                                      <h3 class="text-center"><strong>MY STRUCTURE</strong></h3>
                                  </td>
                              </tr>
                              <tr class="text-center">
                                  <td colspan="8" style="border-color:#272B33; background-color:#272B33;"
                                      class="text-center">Downline ID -&gt;
                                      <form method="get" action="{{route('user.tree-view')}}">
                                          <input name="suser" type="text" id="suser">
                                          <input type="submit" name="submit" value="Search" id="submit">

                                      </form>

                                      <br>
                                      <span id="ctl00_ContentPlaceHolder1_lblerror"></span></td>
                              </tr>
                              <?php
              $status = @$mydata->active_status;
              if ($status!="")
               {
               
              if ($status == "Active" || $status == "Block")
                {
                $color = "icon-member-active";
                }
              elseif ($status == "Pending"  ||  $status == 'Inactive')
                {
                $color = "icon-member-pending";
                }
               else
                {
                  $color = "empty";
                }
                   # code...
              }else
              {
                $color = "empty";  
              }
          ?>
                              <tr class="text-center">
                                  <td colspan="8" style="border-color:#272B33; background-color:#272B33;"
                                      class="text-center">
                                      <input type="image" name="ctl00$ContentPlaceHolder1$ImageButton0"
                                          id="ctl00_ContentPlaceHolder1_ImageButton0" data-toggle="tooltip"
                                          title='' data-html="true" OnClick="javascript:void(0)"
                                          data-toggle="tooltip" data-html="true" data-trigger="hover" title=""
                                          data-placement="bottom" data-original-title=""
                                          src="{{asset('upnl/images')}}/{{$color}}.png"
                                          style="border-width: 0px; width: 78px; height: 59px; background: #272B33;">
                                      <br>
                                      <span id="ctl00_ContentPlaceHolder1_Label0" style=" font-weight: 700">
                                          <?=@$mydata->name?strtoupper(@$mydata->name):""?>
                                      </span> <br>
                                      <span id="ctl00_ContentPlaceHolder1_Label7">
                                          <?=@$mydata->username?strtoupper(@$mydata->username):""?>
                                      </span></td>
                              </tr>
                              <tr class="text-center">
                                  <td colspan="8" style="border-color:#272B33; background-color:#272B33;"
                                      class="text-center">
                                      <div class="tree-border"></div>
                                  </td>
                              </tr>
                              <?php
              $status = @$childs_1->active_status;
        if ($status!="")
               {
               
              if ($status == "Active" || $status == "Block")
                {
                $color = "icon-member-active";
                }
              elseif ($status == "Pending"  ||  $status == 'Inactive')
                {
                $color = "icon-member-pending";
                }
               else
                {
                  $color = "empty";
                }
                   # code...
              }else
              {
                $color = "empty";  
              }

          ?>
                              <tr class="text-center">
                                  <td colspan="4" style="border-color:#272B33; background-color:#272B33;"
                                      class="text-center"><a
                                          href="{{route('user.tree-view')}}?user_id={{@$childs_1->username}}">

                                          <input type="image" name="ctl00$ContentPlaceHolder1$ImageButton1"
                                              id="ctl00_ContentPlaceHolder1_ImageButton1" data-toggle="tooltip"
                                              title='' data-html="true"
                                              href="{{route('user.tree-view')}}?user_id={{@$childs_1->username}}"
                                              data-toggle="tooltip" data-html="true" data-trigger="hover" title=""
                                              data-placement="bottom" data-original-title=""
                                              src="{{asset('upnl/images')}}/{{$color}}.png"
                                              style="border-width: 0px;width: 78px;height: 59px;background: #272B33;"
                                              userName="<?=@$childs_1[0]['name']?strtoupper(@$childs_1[0]['name']):""?>">
                                      </a> <br>
                                      <span id="ctl00_ContentPlaceHolder1_Label1" style=" font-weight: 700">
                                          <?=@$childs_1->name?strtoupper(@$childs_1->name):""?>
                                      </span><br>
                                      <span id="ctl00_ContentPlaceHolder1_Label8">

                                          <?=@$childs_1->username?strtoupper(@$childs_1->username):""?>
                                      </span></td>
                                  <?php
              $status = @$childs_2->active_status;
               if ($status!="")
               {
               
              if ($status == "Active" || $status == "Block")
                {
                $color = "icon-member-active";
                }
              elseif ($status == "Pending"  ||  $status == 'Inactive')
                {
                $color = "icon-member-pending";
                }
               else
                {
                  $color = "empty";
                }
                   # code...
              }else
              {
                $color = "empty";  
              }
          ?>
                                  <td colspan="4" style="border-color:#272B33; background-color:#272B33;"
                                      class="text-center"><a
                                          href="{{route('user.tree-view')}}?user_id={{@$childs_2->username}}">
                                          <input type="image" name="ctl00$ContentPlaceHolder1$ImageButton2"
                                              id="ctl00_ContentPlaceHolder1_ImageButton2" data-toggle="tooltip"
                                              title='' data-html="true"
                                              href="{{route('user.tree-view')}}?user_id={{@$childs_2->username}}e"
                                              data-toggle="tooltip" data-html="true" data-trigger="hover" title=""
                                              data-placement="bottom" data-original-title=""
                                              src="{{asset('upnl/images')}}/{{$color}}.png" style="border-width: 0px;
  width: 78px;
  height: 59px;
  background: #272B33;
 ">
                                      </a> <br>
                                      <span id="ctl00_ContentPlaceHolder1_Label2" style=" font-weight: 700">
                                          <?=@$childs_2->name?strtoupper(@$childs_2->name):""?>
                                      </span><br>
                                      <span id="ctl00_ContentPlaceHolder1_Label9">
                                          <?=@$childs_2->username?strtoupper(@$childs_2->username):""?>
                                      </span></td>
                              </tr>
                              <tr class="text-center">
                                  <td colspan="4" style="border-color:#272B33; background-color:#272B33;"
                                      class="text-center">
                                      <div class="tree-border"></div>
                                  </td>
                                  <td colspan="4" style="border-color:#272B33; background-color:#272B33;"
                                      class="text-center">
                                      <div class="tree-border"></div>
                                  </td>
                              </tr>
                              <?php
              
              $status = @$childs_3->active_status;
              if ($status!="")
               {
               
              if ($status == "Active" || $status == "Block")
                {
                $color = "icon-member-active";
                }
              elseif ($status == "Pending"  ||  $status == 'Inactive')
                {
                $color = "icon-member-pending";
                }
               else
                {
                  $color = "empty";
                }
                   # code...
              }else
              {
                $color = "empty";  
              }
          ?>
                              <tr class="text-center">
                                  <td colspan="2" style="border-color:#272B33; background-color:#272B33;"
                                      class="text-center"><a
                                          href="{{route('user.tree-view')}}?user_id={{@$childs_3->username}}">
                                          <input type="image" name="ctl00$ContentPlaceHolder1$ImageButton3"
                                              id="ctl00_ContentPlaceHolder1_ImageButton3" data-toggle="tooltip"
                                              title='' data-html="true" data-toggle="tooltip" data-html="true"
                                              data-trigger="hover" title="" data-placement="bottom"
                                              data-original-title=""
                                              src="{{asset('upnl/images')}}/{{$color}}.png" style="border-width: 0px;
  width: 78px;
  height: 59px;
  background: #272B33;
 ">
                                      </a> <br>
                                      <span id="ctl00_ContentPlaceHolder1_Label3" style=" font-weight: 700">
                                          <?=@$childs_3->name?strtoupper(@$childs_3->name):""?>
                                      </span><br>
                                      <span id="ctl00_ContentPlaceHolder1_Label10">
                                          <?=@$childs_3->username?strtoupper(@$childs_3->username):""?>
                                      </span></td>
                                  <?php
              
              $status = @$childs_4->active_status;
              if ($status!="")
               {
               
              if ($status == "Active" || $status == "Block")
                {
                $color = "icon-member-active";
                }
              elseif ($status == "Pending"  ||  $status == 'Inactive')
                {
                $color = "icon-member-pending";
                }
               else
                {
                  $color = "empty";
                }
                   # code...
              }else
              {
                $color = "empty";  
              }
          ?>
                                  <td colspan="2" style="border-color:#272B33; background-color:#272B33;"
                                      class="text-center"><a
                                          href="{{route('user.tree-view')}}?user_id={{@$childs_4->username}}">
                                          <input type="image" name="ctl00$ContentPlaceHolder1$ImageButton4"
                                              id="ctl00_ContentPlaceHolder1_ImageButton4" data-toggle="tooltip"
                                              title='' data-html="true"
                                              href="{{route('user.tree-view')}}?user_id={{@$childs_4->username}}"
                                              data-toggle="tooltip" data-html="true" data-trigger="hover" title=""
                                              data-placement="bottom" data-original-title=""
                                              src="{{asset('upnl/images')}}/{{$color}}.png" style="border-width: 0px;
  width: 78px;
  height: 59px;
  background: #272B33;
 ">
                                      </a> <br>
                                      <span id="ctl00_ContentPlaceHolder1_Label4" style=" font-weight: 700">
                                          <?=@$childs_4->name?strtoupper(@$childs_4->name):""?>
                                      </span><br>
                                      <span id="ctl00_ContentPlaceHolder1_Label11">
                                          <?=@$childs_4->username?strtoupper(@$childs_4->username):""?>
                                      </span></td>
                                  <?php
              
              $status = @$childs_5->active_status;
              if ($status!="")
               {
               
              if ($status == "Active" || $status == "Block")
                {
                $color = "icon-member-active";
                }
              elseif ($status == "Pending"  ||  $status == 'Inactive')
                {
                $color = "icon-member-pending";
                }
               else
                {
                  $color = "empty";
                }
                   # code...
              }else
              {
                $color = "empty";  
              }
          ?>
                                  <td colspan="2" style="border-color:#272B33; background-color:#272B33;"
                                      class="text-center"><a
                                          href="{{route('user.tree-view')}}?user_id={{@$childs_5->username}}">
                                          <input type="image" name="ctl00$ContentPlaceHolder1$ImageButton5"
                                              id="ctl00_ContentPlaceHolder1_ImageButton5"
                                              src="{{asset('upnl/images')}}/{{$color}}.png"
                                              data-toggle="tooltip" title='' data-html="true"
                                              href="{{route('user.tree-view')}}?user_id={{@$childs_5->username}}"
                                              data-toggle="tooltip" data-html="true" data-trigger="hover" title=""
                                              data-placement="bottom" data-original-title="" style="border-width: 0px;
  width: 78px;
  height: 59px;
  background: #272B33;
 ">
                                      </a> <br>
                                      <span id="ctl00_ContentPlaceHolder1_Label5" style=" font-weight: 700">
                                          <?=@$childs_5->name?strtoupper(@$childs_5->name):""?>
                                      </span><br>
                                      <span id="ctl00_ContentPlaceHolder1_Label12">
                                          <?=@$childs_5->username?strtoupper(@$childs_5->username):""?>
                                      </span></td>
                                  <?php
              $status = @$childs_6->active_status;
               if ($status!="")
               {
               
              if ($status == "Active" || $status == "Block")
                {
                $color = "icon-member-active";
                }
              elseif ($status == "Pending"  ||  $status == 'Inactive')
                {
                $color = "icon-member-pending";
                }
               else
                {
                  $color = "empty";
                }
                   # code...
              }else
              {
                $color = "empty";  
              }
          ?>
                                  <td colspan="2" style="border-color:#272B33; background-color:#272B33;"
                                      class="text-center"><a
                                          href="{{route('user.tree-view')}}?user_id={{@$childs_6->username}}">
                                          <input type="image" name="ctl00$ContentPlaceHolder1$ImageButton6"
                                              id="ctl00_ContentPlaceHolder1_ImageButton6" data-toggle="tooltip"
                                              title='' data-html="true" data-toggle="tooltip" data-html="true"
                                              data-trigger="hover" title="" data-placement="bottom"
                                              data-original-title=""
                                              src="{{asset('upnl/images')}}/{{$color}}.png" style="border-width: 0px;
  width: 78px;
  height: 59px;
  background: #272B33;
 ">
                                      </a> <br>
                                      <span id="ctl00_ContentPlaceHolder1_Label6" style=" font-weight: 700">
                                          <?=@$childs_6->name?strtoupper(@$childs_6->name):""?>
                                      </span><br>
                                      <span id="ctl00_ContentPlaceHolder1_Label13">
                                          <?=@$childs_6->username?strtoupper(@$childs_6->username):""?>
                                      </span></td>
                              </tr>
                          </tbody>

                      </table>


                  </div>
                      <div id="datarowsremaining" style='text-align:center'>
                      </div>
                  </div>
             
          </div>
      </div>
  </div>
</div>


<div id="userDataRes">
  <!-- Modal -->
  <div class="modal fade" id="userDataModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="userName"></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div id="userData"><span class="load-gif"><img style="width: 100%;" src="{{asset('assets/images/load.gif')}}"> System calculating reports</span></div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="{{asset('upnl/js/om_all_function.js')}}"></script>