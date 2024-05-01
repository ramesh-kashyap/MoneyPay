   <!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">
            <div class="container-fluid">
                <div class="row page-titles">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active"><a href="javascript:void(0)">Settings</a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Change Password</a></li>
                    </ol>
                </div>
                <!-- row -->
                <div class="row">
     
     
                    <div class="col-xl-6 col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Change Password</h4>
                            </div>
                            <div class="card-body">
                                <div class="basic-form">
                                    <form action="{{ route('admin.change-password-post') }}" method="POST">
                                     {{ csrf_field() }}
                                        <div class="row">
                                            <div class="mb-3 col-md-12">
                                                <label class="form-label">Old Password</label>
                                                <input class="form-control" id="inputEmail3" placeholder="Old password" type="text" name="old_password">
                                            </div>
     
                                           
                                            <div class="mb-3 col-md-12">
                                                <label class="form-label">New Password</label>
                                                <input class="form-control" id="inputEmail3" placeholder="New password" type="text" name="password">
                                            </div>
                                            <div class="mb-3 col-md-12">
                                                <label class="form-label">Retype New password</label>
                                                <input class="form-control" id="inputEmail3" placeholder="Retype New password" type="text" name="password_confirmation">
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
     