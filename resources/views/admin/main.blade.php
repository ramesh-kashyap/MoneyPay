@include('layouts.admin.header')
       
	@if(isset($page) && $page != '')
		@include($page)
	@endif
		<!--end page-wrapper-->
@include('layouts.admin.footer')