
        <!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">
            <div class="container-fluid">
				
				<div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item active"><a href="javascript:void(0)">Profit Summery </a></li>
						<li class="breadcrumb-item"><a href="javascript:void(0)">Sponsor Bonus</a></li>
					</ol>
                </div>
                <!-- row -->


                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Sponsor Bonus</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="example" class="display" style="min-width: 845px">
                                        <thead>
                                            <tr>
                                                <th>S NO.</th>
                                                <th>Name</th>
                                                <th>User ID</th>
                                                <th>Amount</th>
                                                <th>Transaction Date.</th>
                                              
                                                <th>From ID</th>
                                                <th>Remarks</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php if(is_array($level_incomes) || is_object($level_incomes)){ ?>
                
                                            <?php $cnt =$level_incomes->perPage() * ($level_incomes->currentPage() - 1); ?>
                                            @foreach($level_incomes as $value)
                                                <tr>
                                                    <td><?= $cnt += 1?></td>
                                                    <td>{{ ($value->user)?$value->user->name:'' }}</td>
                                                    <td>{{ $value->user_id_fk }}</td>
                                                    <td> {{currency()}} {{ $value->amt }} </td>
                                                    <td> {{currency()}} {{ $value->comm }} </td>
                                                    <td>{{ $value->created_at }}</td>
                
                                                    <td>{{ $value->rname }}</td>
                                                    <td>{{ $value->remarks }}</td>
                
                
                
                                                </tr>
                                            @endforeach
                
                                            <?php }?>
                
                
                                                </tbody>
                                       
                                    </table>
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
