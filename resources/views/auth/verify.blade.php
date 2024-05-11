<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="assets/images/fav.png" />
    <title>{{siteName()}}</title>
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <link rel="stylesheet" href="{{ asset('') }}assets/css/animate.min.css" />
  <script defer src="{{ asset('') }}assets/js/index.js"></script><link href="{{ asset('') }}assets/css/style.css" rel="stylesheet"></head>
  <body>
    
</header>

      <!-- Header Section End -->

      <!-- Breadcrump Section Start -->
      <!-- <section class="stp-30 bg-softBg1 relative max-xxl:overflow-hidden">
</section> -->

      <!-- Cart Total Area Start -->
      <section class="stp-15 grid grid-cols-12 container sbp-30">
        <di class="border p-8 col-span-12 md:col-span-6 md:col-start-4">
        <div class="bg-p1 pt-15 overflow-hidden" style="color: #fff; text-align:center;padding:10px; margin-bottom: 10px; border-radius:20px">
        Congratulations on becoming MoneyPay Distributor. We look forward to a long and successful association.
       </div>
        <img src="{{asset('')}}assets/images/moneyl.png" alt="accupay logo" style="width:180px; margin-bottom:50px; text-align:center; margin-left: 170px;"/>
        <h1 style="font-size:30px; font-weight:600; font-color:rgba(26, 147, 138); text-align:center">"Welcome Letter"</h1>
        <!-- <div class="bg-p1 pt-15 overflow-hidden" style="color: #fff; text-align:center;padding:10px; margin-bottom: 10px; border-radius:20px">
            User Details
       </div> -->
       @csrf
                @if(session()->has('messages'))
                                        <?php
                                $user_details=session()->get('messages')
                              ?>                
                @if ($errors->any())                   
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                       
                @endif
          <div
            class="flex justify-between items-center font-medium pt-6 pb-6 border-b mb-8"
          >
            <p>Name</p>
            <p>{{$user_details->name }} </p>
          </div>
          @endif
          <div
            class="flex justify-between items-center font-medium pt-6 pb-6 border-b mb-8"
          >
            <p>Gender</p>
            <p>{{$user_details->gender }}</p>
            
          </div>
          <div
            class="flex justify-between items-center font-medium pt-6 pb-6 border-b mb-8"
          >
            <p>Regstration</p>
            <p>{{$user_details->created_at}}</p>
          </div>
          <div
            class="flex justify-between items-center font-medium pt-6 pb-6 border-b mb-8"
          >
            <p>Mobile</p>
            <p>{{$user_details->phone}}</p>
          </div>
          <div
            class="flex justify-between items-center font-medium pt-6 pb-6 border-b mb-8"
          >
            <p>Email</p>
            <p>{{$user_details->email}}</p>
          </div>
          <div
            class="flex justify-between items-center font-medium pt-6 pb-6 border-b mb-8"
          >
            <p>Adhar Card</p>
            <p>{{$user_details->adhar}}</p>
          </div>
          <div
            class="flex justify-between items-center font-medium pt-6 pb-6 border-b mb-8"
          >
            <p>PAN No</p>
            <p>{{$user_details->pan}}</p>
          </div>
          <div
            class="flex justify-between items-center font-medium pt-6 pb-6 border-b mb-8"
          >
            <p>Username</p>
            <p>{{$user_details->username}}</p>
          </div>
          <div
            class="flex justify-between items-center font-medium pt-6 pb-6 border-b mb-8"
          >
            <p>Password</p>
            <p>{{$user_details->TPSR}}</p>
          </div>
          <div
            class="flex justify-between items-center font-medium pt-6 pb-6 border-b mb-8"
          >
            <p>Nominee Name</p>
            <p>{{$user_details->nominee_name}}</p>
          </div>
          <div
            class="flex justify-between items-center font-medium pt-6 pb-6 border-b mb-8"
          >
            <p>Nominee Relation</p>
            <p>{{$user_details->nominee_relation}}</p>
          </div>
          <button class="bg-p1 pt-15 overflow-hidden" style="color: #fff; margin-left:250px; padding:10px; margin-bottom: 10px; border-radius:20px">
            Login
          </button>
        </div>
      </section>
      <!-- Cart Total Area End -->

      <!-- CTA Section Start -->
      <section
  class="relative after:absolute after:bg-mainTextColor after:bottom-0 after:right-0 after:left-0 after:h-1/2 overflow-hidden"
>

</section>

    

    <!--==================================================================-->

    <!-- ==== js dependencies start ==== -->
    <script src="{{ asset('') }}assets/js/index.js"></script>
    <script src="{{ asset('') }}assets/js/main.js"></script>
    <script src="{{ asset('') }}assets/js/plugins/plugins.js"></script>
    <script src="{{ asset('') }}assets/js/plugins/plugin-custom.js"></script>
  </body>
</html>
