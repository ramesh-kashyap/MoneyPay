@include('layouts.mainsite.header')

    <!-- Hero Section Start -->
    <section class="bg-repeat stp-30 hero_bg_gradient overflow-hidden">
      <img
        src="assets/images/hero_bg_element1.png"
        alt="image"
        class="absolute top-0 left-0 xxxl:left-36 max-lg:w-[300px] max-xxl:w-[500px] max-md:hidden"
      />
      <img
        src="assets/images/hero_bg_element2.png"
        alt="image"
        class="absolute top-0 right-0 max-xxl:w-[300px] max-sm:hidden"
      />
      <div
        class="absolute -left-[200px] -bottom-1/2 bg-white blur-[200px] rounded-[1176px] max-w-full lg:w-[1176px] h-[1176px] overflow-hidden"
      ></div>
      <div
        class="xxl:ml-[calc((100%-1296px)/2)] lg:max-xxl:py-10 max-xxl:container relative z-20 max-lg:pt-15 text-s1 grid grid-cols-12"
      >
        <img
          src="assets/images/hero_bg_element3.png"
          alt="image"
          class="absolute top-1/3 left-1/3 max-sm:hidden"
        />
        <div
          class="col-span-12 lg:col-span-5 flex flex-col justify-center gap-2"
        >
          <p
            class="uppercase text-base lg:text-xl font-semibold animate__animated animate__fadeInUp"
          >
          Effortless mobile recharging with just a few clicks!
          </p>
          <div class="display-2">
          QuickCharge:
            <div class="text-s3 inline-flex">Power Up</div>
            <br />
            in Seconds
          </div>
          <p class="max-w-[550px]">
          Recharge your mobile, TV, and pay your utility bills—all in one place, effortlessly
          </p>
          <div class="flex justify-start items-center gap-4 pt-6 lg:pt-8 pb-15">
            <a
              href="{{route('register')}}"
              class="font-medium bg-s2 py-2 lg:py-3 px-4 lg:px-6 rounded-full text-mainTextColor"
            >
              Get Started
            </a>
            <a href="{{route('register')}}" class="underline font-medium"> Learn More </a>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-6 lg:col-start-7">
          <img src="assets/images/hero_illus.png" alt="image" />
        </div>
      </div>
    </section>
    <!-- Hero Section End -->

    <!-- Company Slider Start -->
    <section
      class="stp-15 sbp-15 container grid grid-cols-12 gap-6 border-b border-strokeColor"
    >
      <!-- <div class="col-span-12 sm:col-span-6 xl:col-span-4">
        <p
          class="text-xl lg:text-2xl text-bodyText relative after:absolute after:top-[55%] after:right-0 after:w-[50px] after:h-[2px] after:bg-bodyText max-xxl:after:content-none"
        >
          <span class="font-bold text-mainTextColor">15,000+</span>
          businesses from small startups to household names
        </p>
      </div> -->
      <div class="col-span-12 sm:col-span-12 xl:col-span-12 flex pt-4">
        <div class="swiper company-images-carousel sponsors">
          <div
            class="swiper-wrapper !flex !justify-center !items-center sponsors"
          >
            <div class="swiper-slide">
              <a href="" class="flex justify-center items-center">
                <img src="assets/images/elebill.png" alt="image" />
              </a>
              
            </div>
            <div class="swiper-slide">
              <a href="" class="flex justify-center items-center">
                <img src="assets/images/dishbill.png" alt="image" />
              </a>
            </div>
            <div class="swiper-slide">
              <a href="" class="flex justify-center items-center">
                <img src="assets/images/mobbill.png" alt="image" />
              </a>
            </div>
            <div class="swiper-slide">
              <a href="" class="flex justify-center items-center">
                <img src="assets/images/elebill.png" alt="image" />
              </a>
            </div>
            <div class="swiper-slide">
              <a href="" class="flex justify-center items-center">
                <img src="assets/images/phone.png" alt="image" />
              </a>
            </div>           
            <div class="swiper-slide">
              <a href="" class="flex justify-center items-center">
                <img src="assets/images/train.png" alt="image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Company Slider End -->

    <!-- Solutions Section Start -->
    <section class="stp-30 sbp-30 relative">
      <img
        src="assets/images/circleIcon.png"
        alt="circle icon"
        class="absolute top-10 left-0 max-xxl:hidden xxl:-left-72 xxxl:-left-40"
      />
      <img
        src="assets/images/sliceIcon.png"
        alt="slice icon"
        class="absolute right-0 sm:right-2 lg:right-10 top-10 xl:top-32 max-md:h-[80px]"
      />
      <div class="container z-10 relative">
        <div class="flex justify-center items-center">
          <div class="flex justify-center items-center max-xxl:overflow-hidden">
            <div
              class="max-w-[700px] text-center flex justify-center items-center flex-col"
            >
              <p
                class="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp"
              >
                Solutions
              </p>

              <h1
                class="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInDown"
              >
              Your Multi-Service Recharge Platform
              </h1>

              <p
                class="text-bodyText wow animate__animated animate__fadeInDown"
              >
              From mobile and TV recharges to utility payments, we've got you covered.
              </p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-12 stp-15 max-lg:gap-6">
          <div class="col-span-12 lg:col-span-6">
            <div
              class="flex justify-center items-center overflow-hidden self-stretch"
            >
              <img
                src="assets/images/solution_illustrations.png"
                alt="image"
                class="hover:scale-110 duration-500 w-full"
              />
            </div>
          </div>
          <div
            class="col-span-12 lg:col-start-8 lg:col-span-5 flex justify-center items-start flex-col"
          >
            <h1 class="heading-1 pb-5">Effortless Recharging & Payments</h1>
            <p class="text-bodyText">
            Simplify Your Life with One Click: Quick, Secure, and Hassle-Free Payments for All Your Needs
            </p>
            <div class="grid grid-cols-2 gap-4 lg:gap-6 py-6 lg:py-10 w-full">
              <div
                class="group col-span-2 sm:col-span-1 flex justify-start items-center gap-5"
              >
                <i
                  class="ph-fill ph-file-text rounded-full border border-strokeColor bg-softBg w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] text-4xl text-s1 group-hover:text-mainTextColor group-hover:bg-s2 group-hover:border-mainTextColor duration-500 !leading-[0] flex justify-center items-center"
                ></i>
                <p class="text-lg font-medium group-hover:text-s1 duration-500">
                Mobile
                </p>
              </div>
              <div
                class="group col-span-2 sm:col-span-1 flex justify-start items-center gap-5"
              >
                <i
                  class="ph-fill ph-hand-heart rounded-full border border-strokeColor bg-softBg w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] text-4xl text-s1 group-hover:text-mainTextColor group-hover:bg-s2 group-hover:border-mainTextColor duration-500 !leading-[0] flex justify-center items-center"
                ></i>
                <p class="text-lg font-medium group-hover:text-s1 duration-500">
                Television
                </p>
              </div>
              <div
                class="group col-span-2 sm:col-span-1 flex justify-start items-center gap-5"
              >
                <i
                  class="ph-fill ph-lightbulb-filament rounded-full border border-strokeColor bg-softBg w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] text-4xl text-s1 group-hover:text-mainTextColor group-hover:bg-s2 group-hover:border-mainTextColor duration-500 !leading-[0] flex justify-center items-center"
                ></i>
                <p class="text-lg font-medium group-hover:text-s1 duration-500">
                Electricity
                </p>
              </div>
              <div
                class="group col-span-2 sm:col-span-1 flex justify-start items-center gap-5"
              >
                <i
                  class="ph-fill ph-rocket-launch rounded-full border border-strokeColor bg-softBg w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] text-4xl text-s1 group-hover:text-mainTextColor group-hover:bg-s2 group-hover:border-mainTextColor duration-500 !leading-[0] flex justify-center items-center"
                ></i>
                <p class="text-lg font-medium group-hover:text-s1 duration-500">
                Water
                </p>
              </div>
            </div>
            <div class="flex justify-start items-start">
              <a
                href="{{route('contact')}}"
                class="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium"
              >
                Contact Us
                <span
                  class="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl !leading-[0]"
                >
                  <i class="ph-bold ph-arrow-up-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Solutions Section End -->

    <!-- Features Section Start -->
    <section class="bg-softBg1 stp-30 sbp-30">
      <div class="container">
        <div
          class="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start"
        >
          <div class="max-w-[600px] flex justify-center items-start flex-col">
            <p
              class="bg-p1 py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp"
            >
              Features
            </p>
            <h1
              class="display-4 pt-4 wow animate__animated animate__fadeInDown"
            >
            Advanced Features for Modern Needs
            </h1>
          </div>
          <p class="text-bodyText max-w-[500px]">
          Experience the Next Level of Convenience, Security, and Reliability with Our State-of-the-Art Payment Platform Designed to Meet All Your Recharging and Billing Needs.
          </p>
        </div>
        <div class="grid grid-cols-12 gap-6 stp-15">
          <div
            class="col-span-12 sm:col-span-6 lg:col-span-3 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
          >
            <div
              class="bg-white p-6 xl:p-8 flex flex-col border border-white group hover:border-mainTextColor duration-700 hover:bg-s2"
            >
              <div
                class="text-4xl text-s1 pb-6 group-hover:text-mainTextColor duration-500"
              >
                <i class="ph-fill ph-users-three"></i>
              </div>
              <h4 class="heading-4 pb-5">Real-Time Processing</h4>
              <p class="text-bodyText pb-6">
              Enjoy instant recharges and bill payments with our cutting-edge technology that ensures your transactions are completed in seconds.
              </p>
              <a
                href="{{route('contact')}}"
                class="flex justify-start items-center gap-2 font-medium"
              >
                Learn more <i class="ph ph-arrow-right"></i>
              </a>
            </div>
          </div>
          <div
            class="col-span-12 sm:col-span-6 lg:col-span-3 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".2s"
          >
            <div
              class="bg-white p-6 xl:p-8 flex flex-col border border-white group hover:border-mainTextColor duration-700 hover:bg-s2"
            >
              <div
                class="text-4xl text-s1 pb-6 group-hover:text-mainTextColor duration-500"
              >
                <i class="ph-fill ph-hand-coins"></i>
              </div>
              <h4 class="heading-4 pb-5">Wide Coverage</h4>
              <p class="text-bodyText pb-6">
              Our platform supports a vast network of service providers, covering mobile, TV, electricity, and water, making us your go-to for all your payment needs.
              </p>
              <a
                href="{{route('contact')}}"
                class="flex justify-start items-center gap-2 font-medium"
              >
                Learn more <i class="ph ph-arrow-right"></i>
              </a>
            </div>
          </div>
          <div
            class="col-span-12 sm:col-span-6 lg:col-span-3 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".4s"
          >
            <div
              class="bg-white p-6 xl:p-8 flex flex-col border border-white group hover:border-mainTextColor duration-700 hover:bg-s2"
            >
              <div
                class="text-4xl text-s1 pb-6 group-hover:text-mainTextColor duration-500"
              >
                <i class="ph-fill ph-user-gear"></i>
              </div>
              <h4 class="heading-4 pb-5">Secure Transactions</h4>
              <p class="text-bodyText pb-6">
              Security is paramount. Our encrypted transactions protect your personal and financial information, giving you peace of mind with every payment.
              </p>
              <a
                href="{{route('contact')}}"
                class="flex justify-start items-center gap-2 font-medium"
              >
                Learn more <i class="ph ph-arrow-right"></i>
              </a>
            </div>
          </div>
          <div
            class="col-span-12 sm:col-span-6 lg:col-span-3 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".6s"
          >
            <div
              class="bg-white p-6 xl:p-8 flex flex-col border border-white group hover:border-mainTextColor duration-700 hover:bg-s2"
            >
              <div
                class="text-4xl text-s1 pb-6 group-hover:text-mainTextColor duration-500"
              >
                <i class="ph-fill ph-user-plus"></i>
              </div>
              <h4 class="heading-4 pb-5">24/7 Support</h4>
              <p class="text-bodyText pb-6">
              We are here for you around the clock. Our dedicated support team is always available to help you with any queries or issues you may encounter.
              </p>
              <a
                href="{{route('contact')}}"
                class="flex justify-start items-center gap-2 font-medium"
              >
                Learn more <i class="ph ph-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Features Section End -->

    <!-- Counter Section Start -->
   
    <!-- Counter Section End -->

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

    <!-- Why Accupay Section Start -->
    <section class="bg-softBg1 stp-30 sbp-30 overflow-hidden">
  <div class="container">
    <div
      class="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start"
    >
      <div class="max-w-[600px] flex justify-center items-start flex-col">
        <p class="bg-p1 py-3 px-5 rounded-full text-white">Why Money Pay</p>
        <h1 class="display-4 pt-4">The Benefits of Partnering with Us</h1>
      </div>
      <p class="text-bodyText max-w-[500px]">
      Experience Superior Service, Exceptional Security, and Unparalleled Ease with Every Transaction.
      </p>
    </div>
    <div class="grid grid-cols-12 gap-6 stp-15">
      <div
        class="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 wow animate__animated animate__fadeInUp"
      >
        <div class="">
          <img src="assets/images/payicon.png" alt="image" />
        </div>
        <h4 class="pt-8 heading-4">
        All-in-One Payment Solution with Comprehensive Service Coverage
        </h4>
      </div>
      <div
        class="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 wow animate__animated animate__fadeInUp"
        data-wow-duration="1.3s"
        data-wow-delay=".2s"
      >
        <div class="">
          <img src="assets/images/transicon.png" alt="image" />
        </div>
        <h4 class="pt-8 heading-4">
        State-of-the-Art Security Measures for Every Transaction
        </h4>
      </div>
      <div
        class="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 wow animate__animated animate__fadeInUp"
        data-wow-duration="1.3s"
        data-wow-delay=".4s"
      >
        <div class="">
          <img src="assets/images/usericon.png" alt="image" />
        </div>
        <h4 class="pt-8 heading-4">
        Effortlessly Navigate Our User-Friendly Digital Platform
        </h4>
      </div>
      
    </div>
  </div>
</section>

    <!-- Why Accupay Section End -->

    <!-- Integrations Section Start -->
    
    <!-- Integrations Section End -->

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

    <!-- Testimonial Section Start -->
    

    <!-- Testimonial Section End -->

    <!-- Pricing Section Start -->
    <section class="bg-softBg1 stp-30 sbp-30 overflow-hidden">
      <div class="container">
  <div class="flex justify-center items-center">
    <div class="text-center flex justify-center items-center flex-col">
      <div class="flex justify-center items-center">
        <div class="flex justify-center items-center">
          <div
            class="max-w-[700px] text-center flex justify-center items-center flex-col"
          >
            <p
              class="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp"
            >
              Pricing
            </p>

            <h1
              class="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInDown"
            >
              Our Pricing
            </h1>

            <p class="text-bodyText wow animate__animated animate__fadeInUp">
              At Accupay, we believe in providing clear and flexible pricing
              options tailored to your business needs.
            </p>
          </div>
        </div>
      </div>

      <div
        class="bg-mainTextColor mt-8 py-3 px-6 rounded-full relative after:absolute after:bg-s2 after:top-0 after:bottom-0 after:w-1/2 after:rounded-full after:duration-500 pricingBg pricingButtonAfterLeft"
      >
        <div class="relative z-10 flex gap-14 text-white">
          <button class="duration-500 pricingTabLinks pricingButtonActive">
            Monthly
          </button>
          <button class="duration-500 pricingTabLinks">Yearly</button>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-12 gap-6 stp-15">
    <div
      class="col-span-12 md:col-span-6 lg:col-span-4 p-6 sm:p-10 border border-strokeColor hover:border-mainTextColor flex flex-col justify-start items-start bg-white hover:bg-s2 duration-700 group relative wow animate__animated animate__fadeInUp"
      data-wow-duration="1.3s"
    >
      <div
        class="p-4 bg-softBg group-hover:bg-mainTextColor duration-500 border group-hover:text-white text-4xl leading-[0] border-strokeColor group-hover:border-mainTextColor rounded-full"
      >
        <i class="ph ph-chart-donut"></i>
      </div>
      <h3 class="heading-3 pt-5 pb-4">Basic Plan</h3>
      <p class="text-bodyText pb-8">
        Hire employees in 100+ countries where you don't have entities
      </p>
      <p class="pb-6">
        <span class="display-4"> $<span class="monthlyPrice">10</span> </span>
        <span class="text-bodyText">- monthly</span>
      </p>
      <ul class="text-bodyText flex flex-col gap-5 pb-8">
        <li class="inline-flex gap-3 justify-start items-center">
          <i
            class="ph-fill ph-check-circle text-p1 group-hover:text-mainTextColor duration-500 leading-[0] flex justify-center items-center text-2xl"
          ></i>

          Accurate and Timely
        </li>
        <li class="inline-flex gap-3">
          <i
            class="ph-fill ph-check-circle text-p1 group-hover:text-mainTextColor duration-500 leading-[0] flex justify-center items-center text-2xl"
          ></i>
          Basic Financial Records
        </li>
        <li class="inline-flex gap-3">
          <i
            class="ph-fill ph-check-circle text-p1 group-hover:text-mainTextColor duration-500 leading-[0] flex justify-center items-center text-2xl"
          ></i>
          Starting at $X per month
        </li>
      </ul>
      <a
        href="contact.html"
        class="py-4 w-full text-white font-medium bg-s1 rounded-full flex justify-center items-center gap-3 group-hover:bg-mainTextColor"
      >
        Get Started <i class="ph ph-arrow-right text-xl leading-[0]"></i>
      </a>
    </div>
    <div
      class="col-span-12 md:col-span-6 lg:col-span-4 p-6 sm:p-10 border border-strokeColor hover:border-mainTextColor flex flex-col justify-start items-start bg-white hover:bg-s2 duration-700 group relative wow animate__animated animate__fadeInUp"
      data-wow-duration="1.3s"
      data-wow-delay=".2s"
    >
      <div
        class="absolute top-9 py-1 right-4 uppercase text-[13px] text-white bg-s1 rotate-90 px-4 flex justify-center items-center"
      >
        <p class="pr-2">popular</p>
        <span
          class="rotate-90 text-7xl !leading-none absolute right-0 pb-16 group-hover:text-s2 duration-700"
        >
          <i class="ph-fill ph-caret-down"></i>
        </span>
      </div>

      <div
        class="p-4 bg-softBg group-hover:bg-mainTextColor duration-500 border group-hover:text-white text-4xl border-strokeColor group-hover:border-mainTextColor rounded-full leading-[0]"
      >
        <i class="ph ph-airplane-tilt"></i>
      </div>
      <h3 class="heading-3 pt-5 pb-4">Standard Plan</h3>
      <p class="text-bodyText pb-8">
        All packages come with mention any additional benefits, features,
      </p>
      <p class="pb-6">
        <span class="display-4"> $ <span class="monthlyPrice">20</span> </span>
        <span class="text-bodyText">- monthly</span>
      </p>
      <ul class="text-bodyText flex flex-col gap-5 pb-8">
        <li class="inline-flex gap-3">
          <i
            class="ph-fill ph-check-circle text-p1 group-hover:text-mainTextColor duration-500 leading-[0] flex justify-center items-center text-2xl"
          ></i>
          Payroll Processing
        </li>
        <li class="inline-flex gap-3">
          <i
            class="ph-fill ph-check-circle text-p1 group-hover:text-mainTextColor duration-500 leading-[0] flex justify-center items-center text-2xl"
          ></i>
          Full Bookkeeping
        </li>
        <li class="inline-flex gap-3">
          <i
            class="ph-fill ph-check-circle text-p1 group-hover:text-mainTextColor duration-500 leading-[0] flex justify-center items-center text-2xl"
          ></i>
          Tax Preparation
        </li>
      </ul>
      <a
        href="contact.html"
        class="py-4 w-full text-white font-medium bg-s1 rounded-full flex justify-center items-center gap-3 group-hover:bg-mainTextColor"
      >
        Get Started <i class="ph ph-arrow-right text-xl leading-[0]"></i>
      </a>
    </div>
    <div
      class="col-span-12 md:col-span-6 lg:col-span-4 p-6 sm:p-10 border border-strokeColor hover:border-mainTextColor flex flex-col justify-start items-start bg-white hover:bg-s2 duration-700 group relative wow animate__animated animate__fadeInUp"
      data-wow-duration="1.3s"
      data-wow-delay=".4s"
    >
      <div
        class="p-4 bg-softBg group-hover:bg-mainTextColor duration-500 border group-hover:text-white text-4xl border-strokeColor group-hover:border-mainTextColor rounded-full leading-[0]"
      >
        <i class="ph ph-rocket-launch"></i>
      </div>
      <h3 class="heading-3 pt-5 pb-4">Premium Plan</h3>
      <p class="text-bodyText pb-8">
        Explore our case studies to see how businesses like yours have benefited
      </p>
      <p class="pb-6">
        <span class="display-4"> $<span class="monthlyPrice">40</span> </span>
        <span class="text-bodyText">- monthly</span>
      </p>
      <ul class="text-bodyText flex flex-col gap-5 pb-8">
        <li class="inline-flex gap-3">
          <i
            class="ph-fill ph-check-circle text-p1 group-hover:text-mainTextColor duration-500 leading-[0] flex justify-center items-center text-2xl"
          ></i>
          Full Bookkeeping
        </li>
        <li class="inline-flex gap-3">
          <i
            class="ph-fill ph-check-circle text-p1 group-hover:text-mainTextColor duration-500 leading-[0] flex justify-center items-center text-2xl"
          ></i>
          Tax Preparation
        </li>
        <li class="inline-flex gap-3">
          <i
            class="ph-fill ph-check-circle text-p1 group-hover:text-mainTextColor duration-500 leading-[0] flex justify-center items-center text-2xl"
          ></i>
          Financial Advisory
        </li>
      </ul>
      <a
        href="contact.html"
        class="py-4 w-full text-white font-medium bg-s1 rounded-full flex justify-center items-center gap-3 group-hover:bg-mainTextColor"
      >
        Get Started <i class="ph ph-arrow-right text-xl leading-[0]"></i>
      </a>
    </div>
  </div>
</div>

    </section>
    <!-- Pricing Section End -->

    <!-- Blog Section Start -->
    <!-- <section class="stp-30 sbp-30 overflow-hidden">
      <div class="container">
        <div class="flex justify-between items-end">
          <div class="max-w-[600px] flex justify-end items-start flex-col">
            <p class="bg-p1 py-3 px-5 rounded-full text-white">News & Blog</p>
            <h1 class="display-4 pt-4 pb-6">Stay updates with Accupay News</h1>
            <p class="text-">
              Stay informed and empowered with our latest articles on
              accounting, payroll processing, and financial management.
            </p>
          </div>
          <div class="max-lg:hidden">
            <a
              href="blog-details.html"
              class="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium"
            >
              See All Blog
              <span
                class="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl"
              >
                <i class="ph-bold ph-arrow-up-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-6 stp-15">
          <div
            class="col-span-12 sm:col-span-6 md:col-span-4 text-bodyText group wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
          >
            <div class="flex flex-col justify-start items-start">
              <div class="flex justify-between items-center w-full pb-5">
                <p>Jan 15, 2024</p>
                <p
                  class="border border-strokeColor rounded-full group-hover:bg-s2 group-hover:border-mainTextColor group-hover:text-mainTextColor duration-500 py-1 lg:py-3 px-3 lg:px-5"
                >
                  Taxation
                </p>
              </div>
              <div
                class="flex justify-center items-center w-full overflow-hidden"
              >
                <img
                  src="assets/images/blogImg1.png"
                  alt="image"
                  class="object-cover hover:scale-110 duration-500"
                />
              </div>
              <h4 class="heading-4 text-mainTextColor pb-4 pt-6">
                Key Considerations in Choosing Payroll Processing Services
              </h4>
              <p class="pb-6">
                Explore essential factors to consider when selecting payroll
                processing services. From compliance expertise
              </p>
              <a
                href="blog-details.html"
                class="text-mainTextColor flex justify-start items-center gap-3 border-b border-mainTextColor hover:border-s2 duration-500"
              >
                Read more
                <i class="ph ph-arrow-right"></i>
              </a>
            </div>
          </div>
          <div
            class="col-span-12 sm:col-span-6 md:col-span-4 text-bodyText group wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".2s"
          >
            <div class="flex flex-col justify-start items-start">
              <div class="flex justify-between items-center w-full pb-5">
                <p>Jan 17, 2024</p>
                <p
                  class="border border-strokeColor rounded-full group-hover:bg-s2 group-hover:border-mainTextColor group-hover:text-mainTextColor duration-500 py-1 lg:py-3 px-3 lg:px-5"
                >
                  Processing
                </p>
              </div>
              <div
                class="flex justify-center items-center w-full overflow-hidden"
              >
                <img
                  src="assets/images/blogImg2.png"
                  alt="image"
                  class="object-cover hover:scale-110 duration-500"
                />
              </div>
              <h4 class="heading-4 text-mainTextColor pb-4 pt-6">
                The Role of Technology in Modern Accounting Practices
              </h4>
              <p class="pb-6">
                Discover how technology is reshaping modern accounting
                practices. From automation to cloud-based solutions,
              </p>
              <a
                href="blog-details.html"
                class="text-mainTextColor flex justify-start items-center gap-3 border-b border-mainTextColor hover:border-s2 duration-500"
              >
                Read more
                <i class="ph ph-arrow-right"></i>
              </a>
            </div>
          </div>
          <div
            class="col-span-12 sm:col-span-6 md:col-span-4 text-bodyText group wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".4s"
          >
            <div class="flex flex-col justify-start items-start">
              <div class="flex justify-between items-center w-full pb-5">
                <p>Jan 24, 2024</p>
                <p
                  class="border border-strokeColor rounded-full group-hover:bg-s2 group-hover:border-mainTextColor group-hover:text-mainTextColor duration-500 py-1 lg:py-3 px-3 lg:px-5"
                >
                  Taxation
                </p>
              </div>
              <div
                class="flex justify-center items-center w-full overflow-hidden"
              >
                <img
                  src="assets/images/blogImg3.png"
                  alt="image"
                  class="object-cover hover:scale-110 duration-500"
                />
              </div>
              <h4 class="heading-4 text-mainTextColor pb-4 pt-6">
                Common Mistakes in Accounting and How to Avoid Them
              </h4>
              <p class="pb-6">
                Identify and prevent common accounting mistakes with our
                insightful guide. Learn practical strategies.
              </p>
              <a
                href="blog-details.html"
                class="text-mainTextColor flex justify-start items-center gap-3 border-b border-mainTextColor hover:border-s2 duration-500"
              >
                Read more
                <i class="ph ph-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="lg:hidden flex justify-center items-center stp-15">
          <a
            href=""
            class="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium"
          >
            See All Blog
            <span
              class="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl"
            >
              <i class="ph-bold ph-arrow-up-right"></i>
            </span>
          </a>
        </div>
      </div>
    </section> -->
    <!-- Blog Section End -->

    <!-- Got Questions Section Start -->
    <section class="sbp-30 overflow-hidden">
  <div class="container">
    <div class="flex justify-center items-center">
      <div class="flex justify-center items-center max-xxl:overflow-hidden">
        <div
          class="max-w-[700px] text-center flex justify-center items-center flex-col"
        >
          <p
            class="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__zoomIn"
          >
            Contact
          </p>

          <h1
            class="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInUp"
          >
          FAQ: Your Queries, Our Solutions
          </h1>

          <p class="text-bodyText wow animate__animated animate__fadeInDown">
          Explore our comprehensive FAQ section for quick answers to common questions. Can't find what you're looking for? Reach out to our support team for personalized assistance!
          </p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-6 stp-15">
      <div
        class="col-span-12 min-[450px]:col-span-6 md:col-span-3 wow animate__animated animate__fadeInUp"
        data-wow-duration="1.3s"
      >
        <div class="flex justify-center items-center flex-col">
          <div class="text-7xl text-s1">
            <i class="ph-fill ph-binoculars"></i>
          </div>
          <h4 class="heading-4 pb-4 pt-3">Instant Assistance</h4>
          <p class="pb-5 text-center">
          Find answers to common inquiries instantly, from account setup to payment queries, in our detailed FAQ section, accessible 24/7.
          </p>
          <a href="https://softivuspro.com/accupay/contact.html" class="text-s1 underline font-medium">
            Compare Accupay
          </a>
        </div>
      </div>
      <div
        class="col-span-12 min-[450px]:col-span-6 md:col-span-3 wow animate__animated animate__fadeInUp"
        data-wow-duration="1.3s"
        data-wow-delay=".2s"
      >
        <div class="flex justify-center items-center flex-col">
          <div class="text-7xl text-s1">
            <i class="ph-fill ph-desktop"></i>
          </div>
          <h4 class="heading-4 pb-4 pt-3">Personalized Support</h4>
          <p class="pb-5 text-center">
          Can't find the answer you need? Contact our support team for tailored assistance and quick resolutions to your specific concerns.
          </p>
          <a href="https://softivuspro.com/accupay/contact.html" class="text-s1 underline font-medium">
            See Demo
          </a>
        </div>
      </div>
      <div
        class="col-span-12 min-[450px]:col-span-6 md:col-span-3 wow animate__animated animate__fadeInUp"
        data-wow-duration="1.3s"
        data-wow-delay=".4s"
      >
        <div class="flex justify-center items-center flex-col">
          <div class="text-7xl text-s1">
            <i class="ph-fill ph-headphones"></i>
          </div>
          <h4 class="heading-4 pb-4 pt-3">Wide Range of Topics</h4>
          <p class="pb-5 text-center">
          Our FAQ covers a wide array of topics, including billing, troubleshooting, and service inquiries, ensuring comprehensive support for all users.
          </p>
          <a href="https://softivuspro.com/accupay/contact.html" class="text-s1 underline font-medium">
            Contact
          </a>
        </div>
      </div>
      <div
        class="col-span-12 min-[450px]:col-span-6 md:col-span-3 wow animate__animated animate__fadeInUp"
        data-wow-duration="1.3s"
        data-wow-delay=".6s"
      >
        <div class="flex justify-center items-center flex-col">
          <div class="text-7xl text-s1">
            <i class="ph-fill ph-chat-centered"></i>
          </div>
          <h4 class="heading-4 pb-4 pt-3">Continuous Updates</h4>
          <p class="pb-5 text-center">
          We regularly update our FAQ section to include the latest information and address emerging queries, providing up-to-date solutions for our users.
          </p>
          <a href="https://softivuspro.com/accupay/contact.html" class="text-s1 underline font-medium">
            Help Center
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    <!-- Got Questions Section End -->

    <!-- CTA Section Start -->
    <section
  class="relative after:absolute after:bg-mainTextColor after:bottom-0 after:right-0 after:left-0 after:h-1/2 overflow-hidden"
>
  <div
    class="container bg-p1 py-12 sm:py-20 px-4 sm:px-10 md:px-20 lg:px-40 relative z-10 wow animate__animated animate__fadeInUp"
  >
    <img
      src="assets/images/sliceIcon.png"
      alt="image"
      class="absolute -top-4 sm:-top-6 lg:top-0 right-0 h-[60px] sm:h-[80px] lg:h-[120px] -rotate-90"
    />
    <p class="display-3 text-center text-white !leading-[130%]">
      Make Accupay Part Of Your Work And Get Daily Update
    </p>
    <form onSubmit="{handleSubmit}" class="pt-6 sm:pt-10 relative">
      <div class="flex justify-center items-center gap-3 max-[500px]:flex-col">
        <input
          type="text"
          placeholder="Enter Your Email"
          class="border border-mainTextColor outline-none bg-white py-3 sm:py-4 px-4 md:px-8 max-[500px]:w-full lg:w-2/4"
        />
        <button
          class="border border-mainTextColor bg-s2 py-3 sm:py-4 px-4 md:px-8 font-medium"
        >
          Subscribe Now
        </button>
      </div>
    </form>
  </div>
</section>

    <!-- CTA Section End -->

   @include('layouts.mainsite.footer')