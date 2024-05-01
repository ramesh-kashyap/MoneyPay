
        <!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">
            <div class="container-fluid">
				
				<div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item active"><a href="javascript:void(0)">Bank </a></li>
						<li class="breadcrumb-item"><a href="javascript:void(0)">View Bank Details</a></li>
					</ol>
                </div>
                <!-- row -->


                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">View Bank Details</h4>
                            </div>
                            <div class="card-body">
                                <div id="example_wrapper" class="dataTables_wrapper">
                                    <form action="{{ route('admin.view-bank-detail') }}" method="GET">
                                        <div class="row">
                                            <div class="col-xl-4">
                                                <div class="form-group mb-3">
                                                    <input type="text" style="height: 3rem;" Placeholder="Search Users"
                                                        name="search" class="form-control" value="{{ @$search }}">
                                                </div>
                                            </div>
                                            <div class="col-xl-2">
                                                <div class="form-group mb-3">
                                                    <select name="limit" style="height: 3rem;" class="form-control">
                                                        <option value="10">10</option>
                                                        <option value="25">25</option>
                                                        <option value="50">50</option>
                                                        <option value="100">100</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-xl-2">
                                                <div class="form-group mb-3">
                                                    <input type="submit" style="padding: 0.6rem 2rem;" name="submit"
                                                        class="btn btn-outline-theme btn-lg d-block w-100 btn-primary"
                                                        value="Search" />
                                                </div>
                                            </div>
                                            <div class="col-xl-2">
                                                <div class="form-group mb-3">
                                                    <a href="{{ route('admin.view-bank-detail') }}" style="padding: 0.6rem 2rem;"
                                                        name="reset"
                                                        class="btn btn-outline-theme btn-lg d-block w-100 btn-primary"
                                                        value="Reset">Reset</a>
                                                </div>
                                            </div>
        
        
                                        </div>
                                    </form>
                                </div>

                                <div class="table-responsive">
                                    <table id="example" class="display" style="min-width: 845px">
                                        <thead>
                                            <tr>
                                                <th>S NO.</th>
                                                <th>User Name</th>
                                               <th>User Id</th>
                                               <th>Account Holder</th>
                                               
                                                <th>Bank Name</th>
                                                <!--<th>Rank</th>-->
                                                <th>Branch Name</th>
                                                <th>Account Number</th>
                                                 <th>Ifsc Code</th>
                                                 <th>Pancard No</th>
                                                 <th>Date</th>
                                                 <th>Edit</th>
                                                 <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php if(is_array($active_user) || is_object($active_user)){ ?>

                                                <?php $cnt =$active_user->perPage() * ($active_user->currentPage() - 1); ?>
                                                 @foreach($active_user as $value)
                                                  <tr>
                                                      <td><?= $cnt += 1?></td>
                                                      <td>{{$value->name}}</td>
                                                      <td>{{$value->username}}</td>
                                                      <td>{{$value->account_holder}}</td>
                                                      <td>{{$value->bank_name}}</td>
                                                      <td>{{$value->branch_name}}</td>
                                                      <td>{{$value->account_no}}</td>
                                                      <td >{{$value->ifsc_code}}</td>
                                                      <td >{{$value->pancard_no}}</td>
                                                      <td >{{$value->created_at}}</td>
                                
                                                      <td ><a href="{{route('admin.edit-bank-kyc')}}?id={{$value->id}}" class="badge green" style="    background: green;">Edit Detail</a></td> 
                                                      
                                                      <td ><a href="{{route('admin.remove-bank-detail')}}?id={{$value->id}}" class="badge green" style="    background: red;">Remove</a></td>
                                                     
                                                  </tr>
                                                  @endforeach
                                
                                             <?php }?>      
                                                 
                                        </tbody>
                                       
                                    </table>

                                    <br>

                                    {{ $active_user->withQueryString()->links() }}
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
