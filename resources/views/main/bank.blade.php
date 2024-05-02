@include('layouts.mainsite.header')
    <!-- Header Section End -->
      <!-- Breadcrump Section Start -->
      <section class="stp-30 bg-softBg1 relative max-xxl:overflow-hidden">
        <img
          src="assets/images/breadcrump_icon.png"
          alt="image"
          class="absolute bottom-0 left-[-10%] xxl:left-0 max-lg:hidden"
        />
        <div
          class="container grid grid-cols-12 gap-6 max-md:stp-15 relative z-10"
        >
          <div
            class="col-span-12 md:col-span-6 flex justify-center items-start flex-col"
          >
            <ul class="flex justify-start items-center gap-1 flex-wrap">
              <li>
                <a
                  href="index.html"
                  class="flex justify-start items-center gap-1"
                >
                  <i class="ph ph-house"></i>
                  <span class="hover:text-s2 duration-300">Home</span>
                </a>
              </li>

              <li class="flex justify-start items-center gap-1">
                <i class="ph ph-caret-right"></i>
                Contact
              </li>
            </ul>

            <h1 class="display-3 pt-4">Bank Details</h1>

            <p class="text-bodyText pt-6">
              Connect with us for expert accounting and payroll services. Reach
              out via the form or contact information below.
            </p>
          </div>
          <div
            class="col-span-12 md:col-span-6 flex justify-center items-center"
          >
            <img
              src="assets/images/breadcrumb_img_21.png"
              alt="image"
              class="object-fit max-sm:max-h-[300px]"
            />
          </div>
        </div>
      </section>
      <!-- Breadcrump Section End -->

      <!-- Contact Section Start -->
      <section class="container grid grid-cols-12 stp-30 sbp-30">
        
        <div
          class="col-span-12 lg:col-span-8 lg:col-start-3 border p-4 sm:p-6 lg:p-10"
        >
          <h4 class="heading-4 pb-6">Fill the From Below</h4>
          <table border="1" cellspacing="0" cellpadding="5" style="width:100%">
  <tr>
    <td style="border: 1px solid black; padding:20px"><b>Name:</b></td>
    <td style="border: 1px solid black; padding:20px"><b>MONEYPAY ENTERPRISES</b></td>
  </tr>
  <tr>
    <td style="border: 1px solid black;  padding:20px"><b>Bank Name:</b></td>
    <td style="border: 1px solid black; padding:20px"><b>HDFC BANK</b></td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding:20px"><b>Account No:</b></td>
    <td style="border: 1px solid black; padding:20px"><b>50200092863785</b></td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding:20px"><b>IFSC Code:</b></td>
    <td style="border: 1px solid black; padding:20px"><b>HDFC0004160</b></td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding:20px"><b>Type:</b></td>
    <td style="border: 1px solid black; padding:20px"><b>Current Account</b></td>
  </tr>
</table>


        </div>
        <ToastContainer position="bottom-left" />
      </section>
      <!-- Contact Section End -->

      <!-- Office Address Section Start -->
      
      <!-- Office Address Section End -->

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