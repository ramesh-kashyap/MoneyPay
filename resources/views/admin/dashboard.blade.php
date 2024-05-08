
		<!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">
            <!-- row -->
			<style>
			.card {
				margin-bottom: 1.875rem;
				background-color: #21252a;
				transition: all .5s ease-in-out;
				position: relative;
				border: 0rem solid transparent;
				border-radius: 10px;
				box-shadow: 0rem 0.25rem 0.25rem rgb(0 0 0 / 10%);
				height: calc(100% - 30px);
			}
			.fs-16 {
				font-size: 1.2rem !important;
				line-height: 1.6;
				color: #fff;
				text-shadow: 0.5px 0.5px #9e9e9e;
			}
			h2 {
				margin-top: 0;
				margin-bottom: 0.5rem;
				font-weight: 500;
				line-height: 1.2;
				color: #fff;
			}
			.card-body {
				padding: 1.995rem;
			}
			</style>
			<div class="container-fluid">
				<div class="mb-sm-4 d-flex flex-wrap align-items-center text-head">
					<h2 class="mb-3 me-auto" style="color:#000">Dashboard</h2>
					<div>
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="javascript:void(0)">Dashboard</a></li>
							<li class="breadcrumb-item"><a href="javascript:void(0)">Dashboard</a></li>
						</ol>
					</div>
				</div>	
				<div class="row">
					<div class="col-xl-12">
						<div class="row">
							<div class="col-xl-4 col-sm-4">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Total User</span>
											<h2>{{\App\Models\User::count()}}</h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
										
											<img src="{{asset('admin/images/streamline.png')}}" style="width: 80px;" alt="">
											
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-4 col-sm-4">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Active User</span>
											<h2>{{\App\Models\User::where('active_status','Active')->count()}}</h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
											
                                                <img src="{{asset('admin/images/streamline.png')}}" style="width: 80px;" alt="">
											
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-4 col-sm-4">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Pending User</span>
											<h2>{{\App\Models\User::where('active_status','Pending')->count()}}</h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
											
                                                <img src="{{asset('admin/images/streamline.png')}}" style="width: 80px;" alt="">
											
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-4 col-sm-4">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Today Registration</span>
											<h2>{{\App\Models\User::where('jdate',Date("Y-m-d"))->count()}}</h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
											
                                                <img src="{{asset('admin/images/streamline.png')}}" style="width: 80px;" alt="">
											
										</div>
									</div>
								</div>
							</div>
                            <div class="col-xl-4 col-sm-4">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Today Activated</span>
											<h2>{{\App\Models\Investment::where('sdate',Date("Y-m-d"))->where('status','Active')->count()}}</h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
										
                                                <img src="{{asset('admin/images/investment.png')}}" style="width: 80px;" alt="">
											
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-4 col-sm-4">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Total Business</span>
											<h2>{{currency()}}{{  number_format((\App\Models\Investment::where('status','Active')->sum('amount')),2)   }}</h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
                                            
											
                                                <img src="{{asset('admin/images/withdrawal.png')}}" style="width: 80px;" alt="">
									
										</div>
									</div>
								</div>
							</div>
							
							<div class="col-xl-4 col-sm-4">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Total Level Income</span>
											<h2>{{currency()}}{{  number_format((\App\Models\Income::where('remarks','Level Income')->sum('comm')),2)   }}</h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
										
                                                <img src="{{asset('admin/images/medal.png')}}" style="width: 80px;" alt="">
										
										</div>
									</div>
								</div>	
							</div>


                            <div class="col-xl-4 col-sm-4">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Referral Income</span>
											<h2>{{currency()}}{{  number_format((\App\Models\Income::where('remarks','Referral Income')->sum('comm')),2)   }}</h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
											
                                                <img src="{{asset('admin/images/investment.png')}}" style="width: 80px;" alt="">
											
										</div>
									</div>
								</div>
							</div>


						

                            <div class="col-xl-4 col-sm-4">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Pending Withdrawal</span>
											<h2>{{currency()}}{{  number_format((\App\Models\Withdraw::where('status','Pending')->sum('amount')),2)   }}</h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
											
                                                <img src="{{asset('admin/images/withdrawal.png')}}" style="width: 80px;" alt="">
											
										</div>
									</div>
								</div>
							</div>

                            <div class="col-xl-4 col-sm-4">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Approved Withdrawal</span>
											<h2>{{currency()}}{{  number_format((\App\Models\Withdraw::where('status','Approved')->sum('amount')),2)   }}</h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
											
                                                <img src="{{asset('admin/images/withdrawal.png')}}" style="width: 80px;" alt="">
											
										</div>
									</div>
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
		
		
	