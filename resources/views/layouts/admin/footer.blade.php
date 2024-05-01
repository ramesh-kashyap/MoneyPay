@include('partials.notify')
        <!--**********************************
            Footer start
        ***********************************-->
        <div class="footer">
		
            <div class="copyright">
                <p>Copyright © Designed &amp; Developed by <a href="{{generalDetail()->siteurl}}" target="_blank">{{siteName()}}</a> 2023</p>
            </div>
        </div>
        <!--**********************************
            Footer end
        ***********************************-->

		<!--**********************************
           Support ticket button start
        ***********************************-->
		
        <!--**********************************
           Support ticket button end
        ***********************************-->


	</div>
    <!--**********************************
        Main wrapper end
    ***********************************-->

    <!--**********************************
        Scripts
    ***********************************-->
    <!-- Required vendors -->
    <script src="{{asset('')}}admin/vendor/global/global.min.js"></script>
	<script src="{{asset('')}}admin/vendor/chart.js/Chart.bundle.min.js"></script>
	<script src="{{asset('')}}admin/vendor/jquery-nice-select/js/jquery.nice-select.min.js"></script>
	
	
	<!-- Apex Chart -->
	{{-- <script src="{{asset('')}}admin/vendor/apexchart/apexchart.js"></script> --}}
	
       <!-- Datatable -->
       <script src="{{asset('')}}admin/vendor/datatables/js/jquery.dataTables.min.js"></script>
       <script src="{{asset('')}}admin/js/plugins-init/datatables.init.js"></script>

	<!-- Chart piety plugin files -->
    <script src="{{asset('')}}admin/vendor/peity/jquery.peity.min.js"></script>
    <script src="{{asset('')}}admin/vendor/sweetalert2/dist/sweetalert2.min.js"></script>
    <script src="./js/plugins-init/sweetalert.init.js"></script>

	<!-- Dashboard 1 -->
	<script src="{{asset('')}}admin/js/dashboard/dashboard-1.js"></script>

    <script src="{{asset('')}}admin/js/custom.min.js"></script>
	<script src="{{asset('')}}admin/js/deznav-init.js"></script>
	{{-- <script src="{{asset('')}}admin/js/demo.js"></script> --}}
    <script src="{{asset('')}}admin/js/styleSwitcher.js"></script>
</body>
</html>