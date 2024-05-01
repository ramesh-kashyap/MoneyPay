   <!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">
            <div class="container-fluid">
                <div class="row page-titles">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active"><a href="javascript:void(0)">Settings</a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Edit  Kyc Details</a></li>
                    </ol>
                </div>
                <!-- row -->
                <div class="row">
     
     
                    <div class="col-xl-6 col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Edit  Kyc Details</h4>
                            </div>
                            <div class="card-body">
                                <div class="basic-form">
                                    <form action="{{ route('admin.update-user-kyc-detail') }}" method="POST">
                                     {{ csrf_field() }}
                                        <div class="row">
                                            <div class="mb-3 col-md-12">
                                                <label class="form-label">User ID.</label>
                                                <input class="form-control check_sponsor_exist" data-response="username_res"  required id="inputEmail3" placeholder="Username" type="text" name="user_id" value="{{($profile)?$profile->username:""}}" readonly >
                                              
                                            </div>
                                            <span id="username_res"></span>
                                           
                                            <div class="mb-3 col-md-12">
                                                <label class="form-label">Account Holder.</label>
                                                <input class="form-control"  required id="inputEmail3" placeholder="Account Holder" type="text" name="account_holder" onkeyup="this.value=this.value.toUpperCase()" value="{{($bank)?$bank->account_holder:""}}" >
                                            </div>
                                            <div class="mb-3 col-md-12">
                                                <label class="form-label">Bank Name</label>
                                                <input class="form-control"  required id="inputEmail3" placeholder="Bank Name" onkeyup="this.value=this.value.toUpperCase()" type="text" name="bank_name" value="{{($bank)?$bank->bank_name:""}}" >
                                            </div>

                                            <div class="mb-3 col-md-12">
                                                <label class="form-label">Branch Name.</label>
                                                <input class="form-control" onkeyup="this.value=this.value.toUpperCase()"  required id="inputEmail3" placeholder="Branch Name" type="text" name="branch_name" value="{{($bank)?$bank->branch_name:""}}" >
                                            </div>

                                            <div class="mb-3 col-md-12">
                                                <label class="form-label">Account Number.</label>
                                                <input class="form-control" onkeyup="this.value=this.value.toUpperCase()"  required id="inputEmail3" placeholder="Account Number" type="text" name="account_no" value="{{($bank)?$bank->account_no:""}}" >
                                            </div>

                                            <div class="mb-3 col-md-12">
                                                <label class="form-label">Ifsc  Code.</label>
                                                <input class="form-control" onkeyup="this.value=this.value.toUpperCase()"  required id="inputEmail3" placeholder="Ifsc  Code" type="text" name="ifsc_code" value="{{($bank)?$bank->ifsc_code:""}}" >
                                            </div>

                                            <div class="mb-3 col-md-12">
                                                <label class="form-label">Pancard  No.</label>
                                                <input class="form-control" onkeyup="this.value=this.value.toUpperCase()"  required id="inputEmail3" placeholder="Pancard  No" type="text" name="pancard_no" value="{{($bank)?$bank->pancard_no:""}}" >
                                            </div>
                                         
     
                                        </div>
     
                                        <div class="mb-3">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox">
                                                <label class="form-check-label">
                                                    Check me out
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Confirm</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
     
     
     
     
                </div>
            </div>
        </div>
        <!--**********************************
                 Content body end
                 
             ***********************************-->

             <script src="https://code.jquery.com//jquery-3.3.1.min.js"> </script>     

             <script type="text/javascript">
                $('.check_sponsor_exist').keyup(function (e) { 
                    var ths = $(this);
                    var res_area = $(ths).attr('data-response');
                    var sponsor = $(this).val();       
                    // alert(sponsor); 
                    $.ajax({
                      type: "post",
                      url: "{{route('getUserName')}}",
                      data: {"user_id":sponsor, "_token": "{{ csrf_token() }}",},          
                      success: function (response) {      
                      // alert(response);      
                        if(response!=1){
                          // alert("hh");
                          $('#'+res_area).html(response).css('color','#000').css('font-weight','800').css('margin-buttom','10px');
                        }else{
                          // alert("hi");
                          $('#'+res_area).html("User Not exists!").css('color','red').css('margin-buttom','10px');
                        }
                      }
                    });
                });
            
               
               </script> 
            