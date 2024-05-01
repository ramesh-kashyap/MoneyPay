    <!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">
            <div class="container-fluid">
				
				<div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item active"><a href="javascript:void(0)">User Management</a></li>
						<li class="breadcrumb-item"><a href="javascript:void(0)">Pending Users</a></li>
					</ol>
                </div>
                <!-- row -->


                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Pending Users</h4>
                            </div>
                            <div class="card-body">
                                <div id="example_wrapper" class="dataTables_wrapper">
                                    <form action="{{ route('admin.pending-user') }}" method="GET">
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
                                                    <a href="{{ route('admin.pending-user') }}" style="padding: 0.6rem 2rem;"
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
                                                <th>Email ID</th>
                    
                                                <th>Mobile No.</th>
                                                <!--<th>Rank</th>-->
                                                <th>Joining Date</th>
                                             
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php if(is_array($active_user) || is_object($active_user)){ ?>
                    
                                            <?php $cnt = $active_user->perPage() * ($active_user->currentPage() - 1); ?>
                                            @foreach ($active_user as $value)
                                                <tr>
                                                    <td><?= $cnt += 1 ?></td>
                                                    <td>{{ $value->name }}</td>
                                                    <td>{{ $value->username }}</td>
                                                    <td>{{ $value->email }}</td>
                                                    <td>{{ $value->phone }}</td>
                                                    <td>{{ $value->created_at }}</td>
                                                   
                                                    <td><span
                                                            class="badge bg-{{ $value->active_status == 'Active' ? 'success' : 'danger' }}">{{ $value->active_status }}</span>
                                                    </td>
                    
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
