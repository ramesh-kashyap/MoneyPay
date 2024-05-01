

        <!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">
            <div class="container-fluid">
				
				<div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item active"><a href="javascript:void(0)">Support </a></li>
						<li class="breadcrumb-item"><a href="javascript:void(0)">Support Query</a></li>
					</ol>
                </div>
                <!-- row -->


                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Support Query</h4>
                            </div>
                            <div class="card-body">

                                <div id="example_wrapper" class="dataTables_wrapper">
                                    <form action="{{ route('admin.support-query') }}" method="GET">
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
                                                    <a href="{{ route('admin.support-query') }}" style="padding: 0.6rem 2rem;"
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
                                                <th>User ID</th>
                                                <th>Ticket Number</th>
                                               <th>Category</th>
                                               <th>Request Date</th>
                                               <th>Closing Date</th>
                                               <th>Status</th>
                                               <th>View</th>
                                               <th>close</th>
                                               <th>Reply</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php if(is_array($support_query) || is_object($support_query)){ ?>

                                                <?php $cnt =  $support_query->perPage() * ($support_query->currentPage() - 1); ?>
                                                 @foreach($support_query as $value)
                                                  <tr>
                                                      <td><?= $cnt += 1?></td>
                                                   
                                                      <td>{{$value->user_id_fk}}</td>
                                                    
                                                      <td>{{$value->ticket_no}}</td>
                                                      <td>{{$value->category}}</td>
                                                      <td>{{$value->gen_date}}</td>
                                                      <td>{{$value->closing_date}}</td>
                                                      <td><?=($value->status) ? "Closed" : "Open"?></td>
                                                      
                                                      <td> <a class="btn btn-primary" href="{{route('admin.get_support_msg')}}?ticket_no=<?=$value->ticket_no?>">View all message</a></td>
                                                      
                                                        <td><a class="btn btn-danger" href="{{route('admin.close_ticket_')}}?ticket_no=<?=$value->ticket_no?>">Close Ticket</a></td>
                                                       
                                                        <td> <a class="btn btn-success" href="{{route('admin.reply_support_msg')}}?ticket_no=<?=$value->ticket_no?>">Reply Ticket</a></td>
                                                 
                                                     
                                                     
                                                     
                                                  </tr>
                                                  @endforeach
                                
                                             <?php }?>    
                                        </tbody>
                                       
                                    </table>

                                    <br>

                                    {{ $support_query->withQueryString()->links() }}
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
