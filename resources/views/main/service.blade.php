@include('layouts.mainsite.header')
        <section class="stp-30 bg-softBg1 relative max-xxl:overflow-hidden"><img src="{{asset('')}}assets/images/breadcrump_icon.png"
                alt="" class="absolute bottom-0 left-[-10%] xxl:left-0 max-lg:hidden">
            <div class="container grid grid-cols-12 gap-6 max-md:stp-15 relative z-10">
                <div class="col-span-12 md:col-span-6 flex justify-center items-start flex-col">
                    <ul class="flex justify-start items-center gap-1 flex-wrap">
                        <li><a href="{{route('Index')}}" class="flex justify-start items-center gap-1"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em" height="1em"
                                    fill="currentColor">
                                    <g>
                                        <path
                                            d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z">
                                        </path>
                                    </g>
                                </svg><span class="hover:text-s2 duration-300">Home</span></a></li>
                        <!---->
                        <li class="flex justify-start items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256" width="1em" height="1em" fill="currentColor">
                                <g>
                                    <path
                                        d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z">
                                    </path>
                                </g>
                            </svg> Service</li>
                    </ul>
                    <h1 class="display-3 pt-4">Our All Services</h1>
                    <p class="text-bodyText pt-6">Welcome to AccuPay, your trusted partner for comprehensive financial
                        solutions. Explore our range of services tailored to meet your
                        business needs.</p>
                </div>
                <div class="col-span-12 md:col-span-6 flex justify-center items-center"><img
                        src="{{asset('')}}assets/images/breadcrumb_img_1.png" alt="" class="object-fit max-sm:max-h-[300px]"></div>
            </div>
        </section>
        
        <section class="bg-softBg1 stp-30 sbp-30 overflow-hidden">
            <div class="container">
                <div class="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
                    <div class="max-w-[600px] flex justify-center items-start flex-col">
                        <p class="bg-p1 py-3 px-5 rounded-full text-white">Why Money Pay</p>
                        <h1 class="display-4 pt-4">The Benefits of Partnering with Us</h1>
                    </div>
                    <p class="text-bodyText max-w-[500px]"> Experience Superior Service, Exceptional Security, and Unparalleled Ease with Every Transaction. </p>
                </div>
                <div class="grid grid-cols-12 gap-6 stp-15">
                    <div
                        class="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2">
                        <div class=""><img src="{{asset('')}}assets/images/payicon.png" alt=""></div>
                        <h4 class="pt-8 heading-4">All-in-One Payment Solution with Comprehensive Service Coverage</h4>
                    </div>
                    <div
                        class="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2">
                        <div class=""><img src="{{asset('')}}assets/images/transicon.png" alt=""></div>
                        <h4 class="pt-8 heading-4">State-of-the-Art Security Measures for Every Transaction</h4>
                    </div>
                    <div
                        class="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2">
                        <div class=""><img src="{{asset('')}}assets/images/usericon.png" alt=""></div>
                        <h4 class="pt-8 heading-4">Effortlessly Navigate Our User-Friendly Digital Platform</h4>
                    </div>
             
                   
                </div>
            </div>
        </section>
        <!-- Step By Step Guide Start -->
    <section class="stp-30 sbp-30">
  <div class="container">
    <div class="flex justify-center items-center">
      <div class="flex justify-center items-center max-xxl:overflow-hidden">
        <div
          class="max-w-[700px] text-center flex justify-center items-center flex-col"
        >
          <p
            class="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp"
          >
            How it works
          </p>

          <h1
            class="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInDown"
          >
          Quick Start Guide
          </h1>

          <p class="text-bodyText wow animate__animated animate__fadeInUp">
          Recharge Your Services and Pay Your Bills in Just Three Easy Steps: Quick, Secure, and Convenient
          </p>
        </div>
      </div>
    </div>

    <div
      class="flex justify-between items-center gap-6 md:gap-4 lg:gap-6 stp-15 relative max-md:flex-col"
    >
      <img
        src="assets/images/stepArrow1.png"
        alt="image"
        class="absolute top-28 right-[22%] max-xxl:right-[23%] max-xxl:top-24 max-xxl:w-[200px] max-lg:right-[25%] max-lg:w-[100px] max-md:hidden"
      />
      <img
        src="assets/images/stepArrow2.png"
        alt="image"
        class="absolute top-16 left-[21%] max-xxl:top-20 max-xxl:left-[23%] max-xxl:w-[200px] max-lg:left-[25%] max-lg:w-[100px] max-md:hidden"
      />

      <div
        class="flex justify-center items-center text-center flex-col max-w-[350px]"
      >
        <div
          class="text-s1 bg-softBg border border-strokeColor rounded-full p-6 lg:p-7 text-3xl lg:text-5xl"
        >
          <i class="ph-fill ph-file-plus"></i>
        </div>
        <h4 class="heading-4 pt-8 pb-6">Register and Log In</h4>
        <p class="text-bodyText">
        Create your account using your email or mobile number. Quick and easy registration gets you ready to access all features
        </p>
      </div>
      <div
        class="flex justify-center items-center text-center flex-col max-w-[350px]"
      >
        <div
          class="text-s1 bg-softBg border border-strokeColor rounded-full p-6 lg:p-7 text-3xl lg:text-5xl"
        >
          <i class="ph-fill ph-user"></i>
        </div>
        <h4 class="heading-4 pt-8 pb-6">Select Your Service</h4>
        <p class="text-bodyText">
        Choose from a variety of services including mobile, TV, and utility payments. Our platform supports all major providers for your convenience.
        </p>
      </div>
      <div
        class="flex justify-center items-center text-center flex-col max-w-[350px]"
      >
        <div
          class="text-s1 bg-softBg border border-strokeColor rounded-full p-6 lg:p-7 text-3xl lg:text-5xl"
        >
          <i class="ph-fill ph-hand-coins"></i>
        </div>
        <h4 class="heading-4 pt-8 pb-6">Make a Payment</h4>
        <p class="text-bodyText">
        Enter your payment details, confirm the amount, and click 'Pay'. Your transaction is secure and you'll receive instant confirmation.
        </p>
      </div>
    </div>
  </div>
</section>

    <!-- Step By Step Guide End -->
<!-- Experience Accupay Section Start -->
<div class="bg-p1 pt-15 overflow-hidden">
      <div
        class="max-xxl:container xxl:ml-[calc((100%-1296px)/2)] flex justify-between text-white sm:max-xxl:gap-6 max-lg:flex-col"
      >
        <div
          class="flex flex-col justify-center items-start w-full lg:max-xxl:w-1/2 xxl:max-w-[550px] max-xxl:pb-8 max-xxl:overflow-hidden"
        >
          <p
            class="text-lg font-medium underline wow animate__animated animate__fadeInUp"
          >
            Experience Money Pay
          </p>

          <h1
            class="display-4 pb-6 pt-4 wow animate__animated animate__fadeInDown"
          >
          Your One-Stop Shop for All Essential Services!
          </h1>

          <p class="pb-8 wow animate__animated animate__fadeInUp">
          Discover ultimate convenience with Money Pay. Recharge phones, pay bills, and manage essential services all in one place. Our secure platform ensures hassle-free transactions. Join now and experience seamless efficiency for your everyday needs!
          </p>

          <a
            href="{{route('contact')}}"
            class="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium"
          >
            Contact Us
            <span
              class="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl"
            >
              <i class="ph-bold ph-arrow-up-right"></i>
            </span>
          </a>
        </div>
        <div
          class="w-full lg:max-xxl:w-1/2 self-stretch flex justify-center max-xxl:items-center lg:pt-10 wow animate__animated animate__fadeInUp"
        >
          <img
            src="assets/images/contact_illus.png"
            alt="image"
            class="object-cover"
          />
        </div>
      </div>
    </div>
    <!-- Experience Accupay Section End -->
        <section class="stp-30 sbp-30">
            <div class="container">
                <div class="flex justify-center items-center">
                    <div class="flex justify-center items-center max-w-[600px] flex-col">
                        <h1 class="display-4">Our Core Services</h1>
                        <p class="text-bodyText text-center pt-6">Unlock a World of Convenience: From Mobile Recharges to Travel Bookings, Explore a Comprehensive Range of Tailored Solutions Designed to Simplify Your Life. </p>
                    </div>
                </div>
                <div class="grid grid-cols-12 stp-15 gap-6">
                    <div class="col-span-12 sm:col-span-6 md:col-span-4">
                        <div
                            class="flex justify-start items-start flex-col p-6 lg:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500">
                            <div
                                class="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em" height="1em"
                                    fill="currentColor">
                                    <g>
                                        <path
                                            d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z">
                                        </path>
                                    </g>
                                </svg></div><a href="/services/accounting-services" class="">
                                <h4 class="heading-4 pb-5 pt-8">Mobile Recharge</h4>
                            </a>
                            <p class="text-bodyText lg:pr-4">Top up your mobile phone instantly with our secure and reliable recharge service. Choose from various denominations and enjoy uninterrupted connectivity.</p>
                        </div>
                    </div>
                    <div class="col-span-12 sm:col-span-6 md:col-span-4">
                        <div
                            class="flex justify-start items-start flex-col p-6 lg:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500">
                            <div
                                class="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em" height="1em"
                                    fill="currentColor">
                                    <g>
                                        <path
                                            d="M128.09,57.38a36,36,0,0,1,55.17-27.82,4,4,0,0,1-.56,7A52.06,52.06,0,0,0,152,84c0,1.17,0,2.34.12,3.49a4,4,0,0,1-6,3.76A36,36,0,0,1,128.09,57.38ZM240,160.61a24.47,24.47,0,0,1-13.6,22l-.44.2-38.83,16.54a6.94,6.94,0,0,1-1.19.4l-64,16A7.93,7.93,0,0,1,120,216H16A16,16,0,0,1,0,200V160a16,16,0,0,1,16-16H44.69l22.62-22.63A31.82,31.82,0,0,1,89.94,112H140a28,28,0,0,1,27.25,34.45l41.84-9.62A24.61,24.61,0,0,1,240,160.61Zm-16,0a8.61,8.61,0,0,0-10.87-8.3l-.31.08-67,15.41a8.32,8.32,0,0,1-1.79.2H112a8,8,0,0,1,0-16h28a12,12,0,0,0,0-24H89.94a15.86,15.86,0,0,0-11.31,4.69L56,155.31V200h63l62.43-15.61,38-16.18A8.56,8.56,0,0,0,224,160.61ZM168,84a36,36,0,1,0,36-36A36,36,0,0,0,168,84Z">
                                        </path>
                                    </g>
                                </svg></div><a href="/services/payroll-processing" class="">
                                <h4 class="heading-4 pb-5 pt-8">Utility Bill Payments</h4>
                            </a>
                            <p class="text-bodyText lg:pr-4">Easily pay your electricity, water, and gas bills hassle-free. Our platform supports payments for major utility providers, ensuring convenience at your fingertips.</p>
                        </div>
                    </div>
                    <div class="col-span-12 sm:col-span-6 md:col-span-4">
                        <div
                            class="flex justify-start items-start flex-col p-6 lg:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500">
                            <div
                                class="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em" height="1em"
                                    fill="currentColor">
                                    <g>
                                        <path
                                            d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,176H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm-8-56V44l44,44Z">
                                        </path>
                                    </g>
                                </svg></div><a href="/services/taxation-services" class="">
                                <h4 class="heading-4 pb-5 pt-8">TV Subscription Renewal</h4>
                            </a>
                            <p class="text-bodyText lg:pr-4">Never miss a moment of your favorite shows. Renew your television subscription effortlessly, whether it's cable, satellite, or streaming services.</p>
                        </div>
                    </div>
                    <div class="col-span-12 sm:col-span-6 md:col-span-4">
                        <div
                            class="flex justify-start items-start flex-col p-6 lg:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500">
                            <div
                                class="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em" height="1em"
                                    fill="currentColor">
                                    <g>
                                        <path
                                            d="M239.73,208H224V96a16,16,0,0,0-16-16H164a4,4,0,0,0-4,4V208H144V32.41a16.43,16.43,0,0,0-6.16-13,16,16,0,0,0-18.72-.69L39.12,72A16,16,0,0,0,32,85.34V208H16.27A8.18,8.18,0,0,0,8,215.47,8,8,0,0,0,16,224H240a8,8,0,0,0,8-8.53A8.18,8.18,0,0,0,239.73,208ZM76,184a8,8,0,0,1-8.53,8A8.18,8.18,0,0,1,60,183.72V168.27A8.19,8.19,0,0,1,67.47,160,8,8,0,0,1,76,168Zm0-56a8,8,0,0,1-8.53,8A8.19,8.19,0,0,1,60,127.72V112.27A8.19,8.19,0,0,1,67.47,104,8,8,0,0,1,76,112Zm40,56a8,8,0,0,1-8.53,8,8.18,8.18,0,0,1-7.47-8.26V168.27a8.19,8.19,0,0,1,7.47-8.26,8,8,0,0,1,8.53,8Zm0-56a8,8,0,0,1-8.53,8,8.19,8.19,0,0,1-7.47-8.26V112.27a8.19,8.19,0,0,1,7.47-8.26,8,8,0,0,1,8.53,8Z">
                                        </path>
                                    </g>
                                </svg></div><a href="/services/real-state-services" class="">
                                <h4 class="heading-4 pb-5 pt-8">Internet Services</h4>
                            </a>
                            <p class="text-bodyText lg:pr-4">Stay connected with seamless internet services. From broadband to mobile data plans, we've got you covered with flexible options to suit your needs.</p>
                        </div>
                    </div>
                    <div class="col-span-12 sm:col-span-6 md:col-span-4">
                        <div
                            class="flex justify-start items-start flex-col p-6 lg:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500">
                            <div
                                class="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em" height="1em"
                                    fill="currentColor">
                                    <g>
                                        <path
                                            d="M240,94c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0c-3.35-1.8-63.55-34.69-92.68-80.89A4,4,0,0,1,34.92,136H72a8,8,0,0,0,6.66-3.56l9.34-14,25.34,38a8,8,0,0,0,9.16,3.16,8.23,8.23,0,0,0,4.28-3.34L140.28,136H160a8,8,0,0,0,8-8.53,8.18,8.18,0,0,0-8.25-7.47H136a8,8,0,0,0-6.66,3.56l-9.34,14-25.34-38a8,8,0,0,0-9.17-3.16,8.25,8.25,0,0,0-4.27,3.34L67.72,120H23.53a4,4,0,0,1-3.83-2.81A76.93,76.93,0,0,1,16,94,62.07,62.07,0,0,1,78,32c20.65,0,38.73,8.88,50,23.89C139.27,40.88,157.35,32,178,32A62.07,62.07,0,0,1,240,94Z">
                                        </path>
                                    </g>
                                </svg></div><a href="/services/healthcare-services" class="">
                                <h4 class="heading-4 pb-5 pt-8">Online Shopping</h4>
                            </a>
                            <p class="text-bodyText lg:pr-4">Shop for essentials and treats from the comfort of your home. Explore a wide range of products and enjoy secure transactions with our trusted partners.</p>
                        </div>
                    </div>
                    <div class="col-span-12 sm:col-span-6 md:col-span-4">
                        <div
                            class="flex justify-start items-start flex-col p-6 lg:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500">
                            <div
                                class="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em" height="1em"
                                    fill="currentColor">
                                    <g>
                                        <path
                                            d="M168,24H88A56,56,0,0,0,32,79.75c0,42.72,8,75.4,14.7,95.28,8.72,25.8,20.62,45.49,32.64,54A15.67,15.67,0,0,0,88.47,232a16.09,16.09,0,0,0,16-14.9c.85-11.52,5-49.11,23.53-49.11s22.68,37.59,23.53,49.11a16.09,16.09,0,0,0,9.18,13.36,15.69,15.69,0,0,0,15.95-1.41c12-8.53,23.92-28.22,32.64-54C216,155.15,224,122.47,224,79.75A56,56,0,0,0,168,24Zm3,56.57A8,8,0,1,1,165,95.42L128,80.61,91,95.42A8,8,0,1,1,85,80.57L106.46,72,85,63.42A8,8,0,1,1,91,48.57l37,14.81,37-14.81A8,8,0,1,1,171,63.42L149.54,72Z">
                                        </path>
                                    </g>
                                </svg></div><a href="/services/dentist-services" class="">
                                <h4 class="heading-4 pb-5 pt-8">Travel Booking</h4>
                            </a>
                            <p class="text-bodyText lg:pr-4">Plan your next adventure with ease. Book flights, hotels, and car rentals conveniently through our platform, ensuring a smooth travel experience from start to finish.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section
            class="relative after:absolute after:bg-mainTextColor after:bottom-0 after:right-0 after:left-0 after:h-1/2">
            <div class="container bg-p1 py-12 sm:py-20 px-4 sm:px-10 md:px-20 lg:px-40 relative z-10"><img
                    src="{{asset('')}}assets/images/sliceIcon.png" alt=""
                    class="absolute -top-4 sm:-top-6 lg:top-0 right-0 h-[60px] sm:h-[80px] lg:h-[120px] -rotate-90">
                <p class="display-3 text-center text-white !leading-[130%]"> Make Accupay Part Of Your Work And Get
                    Daily Update </p>
                <form class="pt-6 sm:pt-10 relative">
                    <div class="flex justify-center items-center gap-3 max-[500px]:flex-col"><input type="text"
                            placeholder="Enter Your Email"
                            class="border border-mainTextColor outline-none bg-white py-3 sm:py-4 px-4 md:px-8 max-[500px]:w-full lg:w-2/4"><button
                            class="border border-mainTextColor bg-s2 py-3 sm:py-4 px-4 md:px-8 font-medium"> Subscribe
                            Now </button></div>
                    <p class="text-s3 text-center pt-2 invisible opacity-0"> Please enter your email </p>
                </form>
            </div>
        </section><button data-v-02549250=""
            class="fixed -bottom-40 text-white text-xl sm:text-2xl rounded-full bg-p1 hover:bg-s2 border border-p1 hover:border-white right-6 md:right-10 p-2 sm:p-3 z-40 jumping1 duration-700"
            aria-label="bottom to top button"><span data-v-02549250="" class="block"><svg data-v-02549250=""
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em" height="1em"
                    fill="currentColor">
                    <g>
                        <path
                            d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z">
                        </path>
                    </g>
                </svg></span></button>
                @include('layouts.mainsite.footer')