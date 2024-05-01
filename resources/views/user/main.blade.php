@include('layouts.upnl.header')

	@if(isset($page) && $page != '')
		@include($page)
	@endif
	<!--end page-wrapper-->
	@include('layouts.upnl.footer')