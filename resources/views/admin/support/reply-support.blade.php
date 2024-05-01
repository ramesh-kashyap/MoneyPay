   <!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">
            <div class="container-fluid">
                <div class="row page-titles">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active"><a href="javascript:void(0)">Support</a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Generate Ticket</a></li>
                    </ol>
                </div>
                <!-- row -->
                <div class="row">
     
     
                    <div class="col-xl-6 col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Reply to  #order id  {{@$open_ticket_msg}}</h4>
                            </div>
                            <div class="card-body">
                                <div class="basic-form">
                                  
                                    <form action="{{ route('admin.admin_ticket_submit') }}" method="POST">
                                     {{ csrf_field() }}

                                     <br>    
                                        <div class="row">
                                            <div class="mb-3 col-md-12">
                                                <label class="form-label">Ticket No</label>
                                                <input class="form-control"  text="text" name="ticket_no" value="{{@$open_ticket_msg}}" readonly required="">
                                            </div>
     
                                        

                                            <div class="mb-3 col-md-12">
                                                <label class="form-label">Message</label>
                                                <textarea class="form-control" name="message" placeholder="Message"></textarea>
                                            </div>
                                           
                                        </div>
     
                                        <div class="mb-3">
                                            <div class="form-check">
                                                <input class="form-check-input" required type="checkbox">
                                                <label class="form-check-label">
                                                    Check me out
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
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
     