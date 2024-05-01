
        <!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">
            <div class="container-fluid">
				
				<div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item active"><a href="javascript:void(0)">Deposit </a></li>
						<li class="breadcrumb-item"><a href="javascript:void(0)">Approved Deposit</a></li>
					</ol>
                </div>
                <!-- row -->


                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Approved Deposit</h4>
                            </div>
                            <div class="card-body">
                                <div id="example_wrapper" class="dataTables_wrapper">
                                    <form action="{{ route('admin.deposit-list') }}" method="GET">
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
                                                    <a href="{{ route('admin.deposit-list') }}" style="padding: 0.6rem 2rem;"
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
                                                <th>Amount</th>
                                                <th>Transaction Date.</th>
                
                                                <th>Transaction ID</th>
                
                                                <th>Status</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php if(is_array($deposit_list) || is_object($deposit_list)){ ?>

                                                <?php $cnt = $deposit_list->perPage() * ($deposit_list->currentPage() - 1); ?>
                                                 @foreach($deposit_list as $value)
                
                                                  <tr>
                                                      <td><?= $cnt += 1?></td>
                                                      <td>{{$value->user->name}}</td>
                                                      <td>{{$value->user_id_fk}}</td>
                                                      <td>{{currency()}} {{$value->amount}}</td>
                                                      <td>{{$value->created_at}}</td>
                                                      <td>{{$value->transaction_id}}</td>
                
                                                      <td ><span class="badge bg-{{ $value->status == 'Active' ? 'success' : 'danger' }}">{{$value->status}}</span></td>
                                                  @endforeach
                
                                             <?php }?>
                                        </tbody>
                                       
                                    </table>

                                    <br>

                                    {{ $deposit_list->withQueryString()->links() }}
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
