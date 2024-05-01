   <!--**********************************
            Content body start
        ***********************************-->
   <div class="content-body">
       <div class="container-fluid">
           <div class="row page-titles">
               <ol class="breadcrumb">
                   <li class="breadcrumb-item active"><a href="javascript:void(0)">User Management</a></li>
                   <li class="breadcrumb-item"><a href="javascript:void(0)">User Profile View</a></li>
               </ol>
           </div>
           <!-- row -->
           <div class="row">


               <div class="col-xl-6 col-lg-12">
                   <div class="card">
                       <div class="card-header">
                           <h4 class="card-title">User Profile View</h4>
                       </div>
                       <div class="card-body">
                           <div class="basic-form">
                               <form action="{{ route('admin.update-user-profile') }}" method="POST">
                                {{ csrf_field() }}
                                   <div class="row">
                                       <div class="mb-3 col-md-12">
                                           <label class="form-label">Sponsor ID</label>
                                           <input class="form-control" type="text" name=""
                                               value="{{ $profile->sponsor_detail ? $profile->sponsor_detail->username : '0' }}"
                                               readonly>
                                       </div>

                                       <input  type="hidden" name="id"
                                       value="{{ $profile ? $profile->id : '0' }}"
                                       >
                                       <div class="mb-3 col-md-12">
                                           <label class="form-label">UserID</label>
                                           <input class="form-control" type="text" name="memberID"
                                               value="{{ $profile ? $profile->username : '' }}" readonly>
                                       </div>
                                       <div class="mb-3 col-md-12">
                                           <label class="form-label">Full Name</label>
                                           <input class="form-control" type="text" id="firstName" name="name"
                                               value="{{ $profile ? $profile->name : '0' }}" autofocus />
                                       </div>
                                       <div class="mb-3 col-md-12">
                                           <label class="form-label">Email</label>
                                           <input class="form-control" type="email" name="email"
                                               value="{{ $profile ? $profile->email : '' }}" placeholder="Email ID" />
                                       </div>

                                       <div class="mb-3 col-md-12">
                                        <label class="form-label">Mobile No</label>
                                        <input type="text" value="{{($profile)?$profile->phone:''}}" id="phoneNumber" name="phone" class="form-control"
                                            placeholder="202 555 0111" />
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
                                   <button type="submit" class="btn btn-primary">Save Changes</button>
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
