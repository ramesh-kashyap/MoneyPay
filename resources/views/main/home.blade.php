@include('layouts.mainsite.header')
        <main class="relative overflow-hidden">
            <section class="bg-repeat stp-30 hero_bg_gradient overflow-hidden"><img src="{{asset('')}}assets/images/hero_bg_element1.png"
                    alt=""
                    class="absolute top-0 left-0 xxxl:left-36 max-lg:w-[300px] max-xxl:w-[500px] max-md:hidden"><img
                    src="{{asset('')}}assets/images/hero_bg_element2.png" alt=""
                    class="absolute top-0 right-0 max-xxl:w-[300px] max-sm:hidden">
                <div
                    class="absolute -left-[200px] -bottom-1/2 bg-white blur-[200px] rounded-[1176px] max-w-full lg:w-[1176px] h-[1176px] overflow-hidden">
                </div>
                <div
                    class="xxl:ml-[calc((100%-1296px)/2)] lg:max-xxl:py-10 max-xxl:container relative z-20 max-lg:pt-15 text-s1 grid grid-cols-12">
                    <img src="{{asset('')}}assets/images/hero_bg_element3.png" alt="" class="absolute top-1/3 left-1/3 max-sm:hidden">
                    <div class="col-span-12 lg:col-span-5 flex flex-col justify-center gap-2">
                        <p class="uppercase text-base lg:text-xl font-semibold animate__animated animate__fadeInUp">
                            Efficiency Payroll and workforce mastery </p>
                        <div class="display-2"> We Make <div class="text-s3 inline-flex">Payroll</div><br> Painless.
                        </div>
                        <p class="max-w-[550px]"> We get your employees paid while providing online access to paystubs,
                            tax reports &amp; payroll tax filings. </p>
                        <div class="flex justify-start items-center gap-4 pt-6 lg:pt-8 pb-15"><a href="{{route('Index')}}"
                                class="font-medium bg-s2 py-2 lg:py-3 px-4 lg:px-6 rounded-full text-mainTextColor"> Get
                                Started </a><a href="{{route('Index')}}" class="underline font-medium"> Learn More </a></div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 lg:col-start-7"><img src="{{asset('')}}assets/images/hero_illus.png" alt="">
                    </div>
                </div>
            </section>
            <section class="stp-15 sbp-15 container grid grid-cols-12 gap-6 border-b border-strokeColor">
               
                <div style="margin-left:300px;" class="col-span-12 sm:col-span-6 xl:col-span-8 flex pt-4">
                  

                
                            <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="2"
                                style="width: 170px; margin-right: 24px;"><a aria-current="page" href="{{route('Index')}}"
                                    class="router-link-active router-link-exact-active flex justify-center items-center"><img
                                        src="{{asset('')}}assets\images\icons8-electricity-55.png" alt="sponsor image"></a>
                                        <p>ectricity Bill</p>
                                <!---->
                            </div>
                            <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="3"
                                style="width: 170px; margin-right: 24px;"><a aria-current="page" href="{{route('Index')}}"
                                    class="router-link-active router-link-exact-active flex justify-center items-center"><img
                                        src="{{asset('')}}assets\images\icons8-bill-55.png" alt="sponsor image"></a>
                                        <p>Phone Bill</p>
                                <!---->
                            </div>
                            <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="4"
                                style="width: 170px; margin-right: 24px;"><a aria-current="page" href="{{route('Index')}}"
                                    class="router-link-active router-link-exact-active flex justify-center items-center"><img
                                        src="{{asset('')}}assets\images\icons8-gps-signal-55.png" alt="sponsor image"></a>
                                        <p>DTH Bill</p>
                                <!---->
                            </div>
                            <div class="swiper-slide" data-swiper-slide-index="5" style="width: 170px; margin-right: 24px;">
                           <a aria-current="page" href="{{route('Index')}}" class="router-link-active router-link-exact-active flex flex-col items-center">
                               <img src="{{asset('')}}assets\images\icons8-insurance-55.png" alt="sponsor image">
                                 
                                        </a>
                                        <p>Insurance</p>
                             </div>

                        
                        <!---->
                        <!---->
                   
                </div>
            </section>
            <section class="stp-30 sbp-30 relative">
                <div class=""></div><img src="{{asset('')}}assets/images/circleIcon.png" alt=""
                    class="absolute top-10 left-0 max-xxl:hidden xxl:-left-72 xxxl:-left-40"><img
                    src="{{asset('')}}assets\images\sliceIcon.png" alt=""
                    class="absolute right-0 sm:right-2 lg:right-10 top-10 xl:top-32 max-md:h-[80px]">
                <div class="container z-10 relative">
                    <div class="flex justify-center items-center">
                        <div class="flex justify-center items-center max-xxl:overflow-hidden">
                            <div class="max-w-[700px] text-center flex justify-center items-center flex-col">
                                <p
                                    class="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp">
                                    Solutions </p>
                                <h1 class="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInDown"> The
                                    global payroll solution </h1>
                                <p class="text-bodyText wow animate__animated animate__fadeInDown"> When it comes to
                                    payroll solutions, we have a variety of options that benefit both your company and
                                    your contractor. </p>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 stp-15 max-lg:gap-6">
                        <div class="col-span-12 lg:col-span-6">
                            <div class="flex justify-center items-center overflow-hidden self-stretch"><img
                                    src="{{asset('')}}assets/images/solution_illustrations.png" alt=""
                                    class="hover:scale-110 duration-500 w-full"></div>
                        </div>
                        <div class="col-span-12 lg:col-start-8 lg:col-span-5 flex justify-center items-start flex-col">
                            <h1 class="heading-1 pb-5">Consolidate Payroll Processing</h1>
                            <p class="text-bodyText"> We have designed a fast and effective payroll system that
                                streamlines your payment process. </p>
                            <div class="grid grid-cols-2 gap-4 lg:gap-6 py-6 lg:py-10 w-full">
                                <div class="group col-span-2 sm:col-span-1 flex justify-start items-center gap-5"><span
                                        class="rounded-full border border-strokeColor bg-softBg w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] text-4xl text-s1 group-hover:text-mainTextColor group-hover:bg-s2 group-hover:border-mainTextColor duration-500 !leading-[0] flex justify-center items-center"><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em"
                                            height="1em" fill="currentColor">
                                            <g>
                                                <path
                                                    d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,176H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm-8-56V44l44,44Z">
                                                </path>
                                            </g>
                                        </svg></span>
                                    <p class="text-lg font-medium group-hover:text-s1 duration-500">Tax Preparation</p>
                                </div>
                                <div class="group col-span-2 sm:col-span-1 flex justify-start items-center gap-5"><span
                                        class="rounded-full border border-strokeColor bg-softBg w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] text-4xl text-s1 group-hover:text-mainTextColor group-hover:bg-s2 group-hover:border-mainTextColor duration-500 !leading-[0] flex justify-center items-center"><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em"
                                            height="1em" fill="currentColor">
                                            <g>
                                                <path
                                                    d="M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56Zm-10.9,27.15-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z">
                                                </path>
                                            </g>
                                        </svg></span>
                                    <p class="text-lg font-medium group-hover:text-s1 duration-500">Payroll Processing
                                    </p>
                                </div>
                                <div class="group col-span-2 sm:col-span-1 flex justify-start items-center gap-5"><span
                                        class="rounded-full border border-strokeColor bg-softBg w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] text-4xl text-s1 group-hover:text-mainTextColor group-hover:bg-s2 group-hover:border-mainTextColor duration-500 !leading-[0] flex justify-center items-center"><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em"
                                            height="1em" fill="currentColor">
                                            <g>
                                                <path
                                                    d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-50.34,2.34a8,8,0,0,0-11.32,0L128,132.69l-26.34-26.35a8,8,0,0,0-11.32,11.32L120,147.31V184a8,8,0,0,0,16,0V147.31l29.66-29.65A8,8,0,0,0,165.66,106.34Z">
                                                </path>
                                            </g>
                                        </svg></span>
                                    <p class="text-lg font-medium group-hover:text-s1 duration-500">Cost Effective</p>
                                </div>
                                <div class="group col-span-2 sm:col-span-1 flex justify-start items-center gap-5"><span
                                        class="rounded-full border border-strokeColor bg-softBg w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] text-4xl text-s1 group-hover:text-mainTextColor group-hover:bg-s2 group-hover:border-mainTextColor duration-500 !leading-[0] flex justify-center items-center"><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em"
                                            height="1em" fill="currentColor">
                                            <g>
                                                <path
                                                    d="M103.77,185.94C103.38,187.49,93.63,224,40,224a8,8,0,0,1-8-8c0-53.63,36.51-63.38,38.06-63.77a8,8,0,0,1,3.88,15.53c-.9.25-22.42,6.54-25.56,39.86C81.7,204.48,88,183,88.26,182a8,8,0,0,1,15.51,4Zm93-67.4L192,123.31v58.33A15.91,15.91,0,0,1,187.32,193L153,227.3A15.91,15.91,0,0,1,141.7,232a16.11,16.11,0,0,1-5.1-.83,15.94,15.94,0,0,1-10.78-12.92l-5.37-38.49L76.24,135.55l-38.47-5.37A16,16,0,0,1,28.7,103L63,68.68A15.91,15.91,0,0,1,74.36,64h58.33l4.77-4.77c26.68-26.67,58.82-27.82,71.41-27.07a16,16,0,0,1,15,15C224.6,59.71,223.45,91.86,196.78,118.54ZM116.69,80H74.36L40,114.34l37.15,5.18ZM176,139.31l-39.53,39.53L141.67,216,176,181.64Z">
                                                </path>
                                            </g>
                                        </svg></span>
                                    <p class="text-lg font-medium group-hover:text-s1 duration-500">Scale Rapidly</p>
                                </div>
                            </div>
                            <div class="flex justify-start items-start"><a href="{{route('Index')}}"
                                    class="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium">
                                    Contact Us <span
                                        class="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl !leading-[0]"><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em"
                                            height="1em" fill="currentColor">
                                            <g>
                                                <path
                                                    d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z">
                                                </path>
                                            </g>
                                        </svg></span></a></div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- <section class="bg-softBg1 stp-30 sbp-30">
                <div class="container">
                    <div class="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
                        <div class="max-w-[600px] flex justify-center items-start flex-col">
                            <p class="bg-p1 py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp">
                                Features </p>
                            <h1 class="display-4 pt-4 wow animate__animated animate__fadeInDown"> Perfect solutions for
                                your business </h1>
                        </div>
                        <p class="text-bodyText max-w-[500px]"> We’re simplifying every aspect of managing a world-wide
                            team, from benefits and equity to working visas and equipment. It’s one platform made to get
                            you set up. </p>
                    </div>
                    <div class="grid grid-cols-12 gap-6 stp-15">
                        <div class="col-span-12 sm:col-span-6 lg:col-span-3">
                            <div
                                class="bg-white p-6 xl:p-8 flex flex-col border border-white group hover:border-mainTextColor duration-700 hover:bg-s2">
                                <div class="text-4xl text-s1 pb-6 group-hover:text-mainTextColor duration-500"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em"
                                        height="1em" fill="currentColor">
                                        <g>
                                            <path
                                                d="M64.12,147.8a4,4,0,0,1-4,4.2H16a8,8,0,0,1-7.8-6.17,8.35,8.35,0,0,1,1.62-6.93A67.79,67.79,0,0,1,37,117.51a40,40,0,1,1,66.46-35.8,3.94,3.94,0,0,1-2.27,4.18A64.08,64.08,0,0,0,64,144C64,145.28,64,146.54,64.12,147.8Zm182-8.91A67.76,67.76,0,0,0,219,117.51a40,40,0,1,0-66.46-35.8,3.94,3.94,0,0,0,2.27,4.18A64.08,64.08,0,0,1,192,144c0,1.28,0,2.54-.12,3.8a4,4,0,0,0,4,4.2H240a8,8,0,0,0,7.8-6.17A8.33,8.33,0,0,0,246.17,138.89Zm-89,43.18a48,48,0,1,0-58.37,0A72.13,72.13,0,0,0,65.07,212,8,8,0,0,0,72,224H184a8,8,0,0,0,6.93-12A72.15,72.15,0,0,0,157.19,182.07Z">
                                            </path>
                                        </g>
                                    </svg></div>
                                <h4 class="heading-4 pb-5">EOR employees</h4>
                                <p class="text-bodyText pb-6">Easily hire and pay employees where you don’t have
                                    entities with Jonny’s world-wide infrastructure.</p><a href="/contact"
                                    class="flex justify-start items-center gap-2 font-medium"> Learn more <svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em"
                                        height="1em" fill="currentColor">
                                        <g>
                                            <path
                                                d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z">
                                            </path>
                                        </g>
                                    </svg></a>
                            </div>
                        </div>
                        <div class="col-span-12 sm:col-span-6 lg:col-span-3">
                            <div
                                class="bg-white p-6 xl:p-8 flex flex-col border border-white group hover:border-mainTextColor duration-700 hover:bg-s2">
                                <div class="text-4xl text-s1 pb-6 group-hover:text-mainTextColor duration-500"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em"
                                        height="1em" fill="currentColor">
                                        <g>
                                            <path
                                                d="M128.09,57.38a36,36,0,0,1,55.17-27.82,4,4,0,0,1-.56,7A52.06,52.06,0,0,0,152,84c0,1.17,0,2.34.12,3.49a4,4,0,0,1-6,3.76A36,36,0,0,1,128.09,57.38ZM240,160.61a24.47,24.47,0,0,1-13.6,22l-.44.2-38.83,16.54a6.94,6.94,0,0,1-1.19.4l-64,16A7.93,7.93,0,0,1,120,216H16A16,16,0,0,1,0,200V160a16,16,0,0,1,16-16H44.69l22.62-22.63A31.82,31.82,0,0,1,89.94,112H140a28,28,0,0,1,27.25,34.45l41.84-9.62A24.61,24.61,0,0,1,240,160.61Zm-16,0a8.61,8.61,0,0,0-10.87-8.3l-.31.08-67,15.41a8.32,8.32,0,0,1-1.79.2H112a8,8,0,0,1,0-16h28a12,12,0,0,0,0-24H89.94a15.86,15.86,0,0,0-11.31,4.69L56,155.31V200h63l62.43-15.61,38-16.18A8.56,8.56,0,0,0,224,160.61ZM168,84a36,36,0,1,0,36-36A36,36,0,0,0,168,84Z">
                                            </path>
                                        </g>
                                    </svg></div>
                                <h4 class="heading-4 pb-5">Global Payroll</h4>
                                <p class="text-bodyText pb-6">Streamline your global payroll with precision and
                                    compliance. Our expert services ensure accurate and timely.</p><a href="/contact"
                                    class="flex justify-start items-center gap-2 font-medium"> Learn more <svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em"
                                        height="1em" fill="currentColor">
                                        <g>
                                            <path
                                                d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z">
                                            </path>
                                        </g>
                                    </svg></a>
                            </div>
                        </div>
                        <div class="col-span-12 sm:col-span-6 lg:col-span-3">
                            <div
                                class="bg-white p-6 xl:p-8 flex flex-col border border-white group hover:border-mainTextColor duration-700 hover:bg-s2">
                                <div class="text-4xl text-s1 pb-6 group-hover:text-mainTextColor duration-500"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em"
                                        height="1em" fill="currentColor">
                                        <g>
                                            <path
                                                d="M198.13,194.85A8,8,0,0,1,192,208H24a8,8,0,0,1-6.12-13.15c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM247.18,154a8,8,0,0,1-6.94,4,7.92,7.92,0,0,1-4-1.07l-4.67-2.7a23.92,23.92,0,0,1-7.58,4.39V164a8,8,0,0,1-16,0v-5.38a23.92,23.92,0,0,1-7.58-4.39l-4.67,2.7a7.92,7.92,0,0,1-4,1.07,8,8,0,0,1-4-14.93l4.66-2.69a23.6,23.6,0,0,1,0-8.76l-4.66-2.69a8,8,0,1,1,8-13.86l4.67,2.7a23.92,23.92,0,0,1,7.58-4.39V108a8,8,0,0,1,16,0v5.38a23.92,23.92,0,0,1,7.58,4.39l4.67-2.7a8,8,0,0,1,8,13.86l-4.66,2.69a23.6,23.6,0,0,1,0,8.76l4.66,2.69A8,8,0,0,1,247.18,154ZM216,144a8,8,0,1,0-8-8A8,8,0,0,0,216,144Z">
                                            </path>
                                        </g>
                                    </svg></div>
                                <h4 class="heading-4 pb-5">Contractors</h4>
                                <p class="text-bodyText pb-6">Reliable contractors delivering quality craftsmanship and
                                    exceptional service. Your perfect project,</p><a href="/contact"
                                    class="flex justify-start items-center gap-2 font-medium"> Learn more <svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em"
                                        height="1em" fill="currentColor">
                                        <g>
                                            <path
                                                d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z">
                                            </path>
                                        </g>
                                    </svg></a>
                            </div>
                        </div>
                        <div class="col-span-12 sm:col-span-6 lg:col-span-3">
                            <div
                                class="bg-white p-6 xl:p-8 flex flex-col border border-white group hover:border-mainTextColor duration-700 hover:bg-s2">
                                <div class="text-4xl text-s1 pb-6 group-hover:text-mainTextColor duration-500"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em"
                                        height="1em" fill="currentColor">
                                        <g>
                                            <path
                                                d="M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17A8,8,0,0,0,24,208H192a8,8,0,0,0,6.13-13.15C183.18,177.07,164.6,164.44,144,157.68Z">
                                            </path>
                                        </g>
                                    </svg></div>
                                <h4 class="heading-4 pb-5">Direct employees</h4>
                                <p class="text-bodyText pb-6">Maximize workforce efficiency with our Direct Employees
                                    services. Streamline hiring, payroll,</p><a href="/contact"
                                    class="flex justify-start items-center gap-2 font-medium"> Learn more <svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em"
                                        height="1em" fill="currentColor">
                                        <g>
                                            <path
                                                d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z">
                                            </path>
                                        </g>
                                    </svg></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            -->
            <section class="stp-30 sbp-30">
                <div class="container">
                    <div class="flex justify-center items-center">
                        <div class="flex justify-center items-center max-xxl:overflow-hidden">
                            <div class="max-w-[700px] text-center flex justify-center items-center flex-col">
                                <p
                                    class="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp">
                                    How it works </p>
                                <h1 class="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInDown"> A
                                    Step-by-Step Guide to Our Platform </h1>
                                <p class="text-bodyText wow animate__animated animate__fadeInUp"> Explore our platform
                                    with ease! Sign up, select your industry, and seamlessly integrate our tailored
                                    payment solutions. </p>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex justify-between items-center gap-6 md:gap-4 lg:gap-6 stp-15 relative max-md:flex-col">
                        <img src="{{asset('')}}assets/images/stepArrow1.png" alt=""
                            class="absolute top-28 right-[22%] max-xxl:right-[23%] max-xxl:top-24 max-xxl:w-[200px] max-lg:right-[25%] max-lg:w-[100px] max-md:hidden"><img
                            src="{{asset('')}}assets/images/stepArrow2.png" alt=""
                            class="absolute top-16 left-[21%] max-xxl:top-20 max-xxl:left-[23%] max-xxl:w-[200px] max-lg:left-[25%] max-lg:w-[100px] max-md:hidden">
                        <div class="flex justify-center items-center text-center flex-col max-w-[350px]">
                            <div
                                class="text-s1 bg-softBg border border-strokeColor rounded-full p-6 lg:p-7 text-3xl lg:text-5xl">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em" height="1em"
                                    fill="currentColor">
                                    <g>
                                        <path
                                            d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,160H136v16a8,8,0,0,1-16,0V160H104a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16Zm0-72V43.31L196.69,88Z">
                                        </path>
                                    </g>
                                </svg></div>
                            <h4 class="heading-4 pt-8 pb-6">Create An Account</h4>
                            <p class="text-bodyText">Join our platform effortlessly! Streamlined user registration with
                                secure verification.</p>
                        </div>
                        <div class="flex justify-center items-center text-center flex-col max-w-[350px]">
                            <div
                                class="text-s1 bg-softBg border border-strokeColor rounded-full p-6 lg:p-7 text-3xl lg:text-5xl">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em" height="1em"
                                    fill="currentColor">
                                    <g>
                                        <path
                                            d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z">
                                        </path>
                                    </g>
                                </svg></div>
                            <h4 class="heading-4 pt-8 pb-6">Add Your Employees</h4>
                            <p class="text-bodyText">Join our platform effortlessly! Streamlined user registration with
                                secure verification.</p>
                        </div>
                        <div class="flex justify-center items-center text-center flex-col max-w-[350px]">
                            <div
                                class="text-s1 bg-softBg border border-strokeColor rounded-full p-6 lg:p-7 text-3xl lg:text-5xl">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em" height="1em"
                                    fill="currentColor">
                                    <g>
                                        <path
                                            d="M128.09,57.38a36,36,0,0,1,55.17-27.82,4,4,0,0,1-.56,7A52.06,52.06,0,0,0,152,84c0,1.17,0,2.34.12,3.49a4,4,0,0,1-6,3.76A36,36,0,0,1,128.09,57.38ZM240,160.61a24.47,24.47,0,0,1-13.6,22l-.44.2-38.83,16.54a6.94,6.94,0,0,1-1.19.4l-64,16A7.93,7.93,0,0,1,120,216H16A16,16,0,0,1,0,200V160a16,16,0,0,1,16-16H44.69l22.62-22.63A31.82,31.82,0,0,1,89.94,112H140a28,28,0,0,1,27.25,34.45l41.84-9.62A24.61,24.61,0,0,1,240,160.61Zm-16,0a8.61,8.61,0,0,0-10.87-8.3l-.31.08-67,15.41a8.32,8.32,0,0,1-1.79.2H112a8,8,0,0,1,0-16h28a12,12,0,0,0,0-24H89.94a15.86,15.86,0,0,0-11.31,4.69L56,155.31V200h63l62.43-15.61,38-16.18A8.56,8.56,0,0,0,224,160.61ZM168,84a36,36,0,1,0,36-36A36,36,0,0,0,168,84Z">
                                        </path>
                                    </g>
                                </svg></div>
                            <h4 class="heading-4 pt-8 pb-6">Run Your First Payroll</h4>
                            <p class="text-bodyText">Join our platform effortlessly! Streamlined user registration with
                                secure verification.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-softBg1 stp-30 sbp-30 overflow-hidden">
                <div class="container">
                    <div class="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
                        <div class="max-w-[600px] flex justify-center items-start flex-col">
                            <p class="bg-p1 py-3 px-5 rounded-full text-white">Why Accupay</p>
                            <h1 class="display-4 pt-4">A platform for your global team</h1>
                        </div>
                        <p class="text-bodyText max-w-[500px]"> Your dependable guide to achieving freedom from manual
                            HR work and building that perfect workplace you have always aspired to build. Your
                            dependable guide to achieving freedom. </p>
                    </div>
                    <div class="grid grid-cols-12 gap-6 stp-15">
                        <div
                            class="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2">
                            <div class=""><img src="{{asset('')}}assets/images/whyAccoupayCard_1.png" alt=""></div>
                            <h4 class="pt-8 heading-4">Hire or relocate team member with in house visa support</h4>
                        </div>
                        <div
                            class="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2">
                            <div class=""><img src="{{asset('')}}assets/images/whyAccoupayCard_2.png" alt=""></div>
                            <h4 class="pt-8 heading-4">Create complaint contracts with a single click</h4>
                        </div>
                        <div
                            class="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2">
                            <div class=""><img src="{{asset('')}}assets/images/whyAccoupayCard_3.png" alt=""></div>
                            <h4 class="pt-8 heading-4">Send equipment worldwide, without the hassle</h4>
                        </div>

                 
                    </div>
                </div>
            </section>
         
            <div class="bg-p1 pt-15 overflow-hidden">
                <div
                    class="max-xxl:container xxl:ml-[calc((100%-1296px)/2)] flex justify-between text-white sm:max-xxl:gap-6 max-lg:flex-col">
                    <div
                        class="flex flex-col justify-center items-start w-full lg:max-xxl:w-1/2 xxl:max-w-[550px] max-xxl:pb-8 max-xxl:overflow-hidden">
                        <p class="text-lg font-medium underline wow animate__animated animate__fadeInUp"> Experience
                            AccuPay </p>
                        <h1 class="display-4 pb-6 pt-4 wow animate__animated animate__fadeInDown"> We’ve got everything
                            you need? </h1>
                        <p class="pb-8 wow animate__animated animate__fadeInUp"> We save you from all that boring
                            paperwork! From global hiring, to instant payments, and taxes, we’ve got your back. </p><a
                            href="/contact"
                            class="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium">
                            Contact Us <span
                                class="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl"><i
                                    class="ph-bold ph-arrow-up-right"></i></span></a>
                    </div>
                    <div
                        class="w-full lg:max-xxl:w-1/2 self-stretch flex justify-center max-xxl:items-center lg:pt-10 wow animate__animated animate__fadeInUp">
                        <img src="{{asset('')}}assets/images/contact_illus.png" alt="" class="object-cover"></div>
                </div>
            </div>
            <section class="stp-30 sbp-30 relative">
                <div class="overflow-hidden"><img src="{{asset('')}}assets/images/sliceIcon.png" alt=""
                        class="absolute top-0 right-2 -rotate-90 max-md:h-[80px]"></div>
                <div class="container">
                    <div class="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
                        <div class="max-w-[600px] flex justify-center items-start flex-col">
                            <p class="bg-p1 py-3 px-5 rounded-full text-white">Testimonial</p>
                            <h1 class="display-4 pt-4">Accupay Customer Stories</h1>
                        </div>
                        <p class="text-bodyText max-w-[500px]"> Startups thrive with AccuPay. Their flexible payroll
                            solutions have been instrumental in our journey, providing the support </p>
                    </div>
                </div>
               
                
            </section>
            
     
            <section class="sbp-30 overflow-hidden">
                <div class="container">
                    <div class="flex justify-center items-center">
                        <div class="flex justify-center items-center max-xxl:overflow-hidden">
                            <div class="max-w-[700px] text-center flex justify-center items-center flex-col">
                                <p
                                    class="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__zoomIn">
                                    Contact </p>
                                <h1 class="display-4 pt-4 pb-4 lg:pb-6">Questions? Meet Answer</h1>
                                <p class="text-bodyText wow animate__animated animate__fadeInDown"> Startups thrive with
                                    AccuPay. Their flexible payroll solutions have been instrumental in our journey,
                                    providing the support </p>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-6 stp-15">
                        <div class="col-span-12 min-[450px]:col-span-6 md:col-span-3">
                            <div class="flex justify-center items-center flex-col">
                                <div class="text-7xl text-s1"><svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 256 256" width="1em" height="1em" fill="currentColor">
                                        <g>
                                            <path
                                                d="M237.22,151.9l0-.1a1.42,1.42,0,0,0-.07-.22,48.46,48.46,0,0,0-2.31-5.3L193.27,51.8a8,8,0,0,0-1.67-2.44,32,32,0,0,0-45.26,0A8,8,0,0,0,144,55V80H112V55a8,8,0,0,0-2.34-5.66,32,32,0,0,0-45.26,0,8,8,0,0,0-1.67,2.44L21.2,146.28a48.46,48.46,0,0,0-2.31,5.3,1.72,1.72,0,0,0-.07.21s0,.08,0,.11a48,48,0,0,0,90.32,32.51,47.49,47.49,0,0,0,2.9-16.59V96h32v71.83a47.49,47.49,0,0,0,2.9,16.59,48,48,0,0,0,90.32-32.51Zm-143.15,27a32,32,0,0,1-60.2-21.71l1.81-4.13A32,32,0,0,1,96,167.88V168h0A32,32,0,0,1,94.07,178.94ZM203,198.07A32,32,0,0,1,160,168h0v-.11a32,32,0,0,1,60.32-14.78l1.81,4.13A32,32,0,0,1,203,198.07Z">
                                            </path>
                                        </g>
                                    </svg></div>
                                <h4 class="heading-4 pb-4 pt-3">Compare Accupay</h4>
                                <p class="pb-5 text-center">Explore how AccuPay stands out. Check our comparison.</p><a
                                    href="/contact" class="text-s1 underline font-medium">Compare Accupay</a>
                            </div>
                        </div>
                        <div class="col-span-12 min-[450px]:col-span-6 md:col-span-3">
                            <div class="flex justify-center items-center flex-col">
                                <div class="text-7xl text-s1"><svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 256 256" width="1em" height="1em" fill="currentColor">
                                        <g>
                                            <path
                                                d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm0,144H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z">
                                            </path>
                                        </g>
                                    </svg></div>
                                <h4 class="heading-4 pb-4 pt-3">Explore The Demo</h4>
                                <p class="pb-5 text-center">Curious about our services? Request a demo to experience
                                    firsthand</p><a href="/contact" class="text-s1 underline font-medium">See Demo</a>
                            </div>
                        </div>
                        <div class="col-span-12 min-[450px]:col-span-6 md:col-span-3">
                            <div class="flex justify-center items-center flex-col">
                                <div class="text-7xl text-s1"><svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 256 256" width="1em" height="1em" fill="currentColor">
                                        <g>
                                            <path
                                                d="M232,136v56a24,24,0,0,1-24,24H192a24,24,0,0,1-24-24V152a24,24,0,0,1,24-24h23.65a87.71,87.71,0,0,0-87-80H128a88,88,0,0,0-87.64,80H64a24,24,0,0,1,24,24v40a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V136A104.11,104.11,0,0,1,201.89,62.66,103.41,103.41,0,0,1,232,136Z">
                                            </path>
                                        </g>
                                    </svg></div>
                                <h4 class="heading-4 pb-4 pt-3">Give Us a Ring </h4>
                                <p class="pb-5 text-center">Monday through Friday from 6AM - 6PM MST </p><a
                                    href="/contact" class="text-s1 underline font-medium">Call Us</a>
                            </div>
                        </div>
                        <div class="col-span-12 min-[450px]:col-span-6 md:col-span-3">
                            <div class="flex justify-center items-center flex-col">
                                <div class="text-7xl text-s1"><svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 256 256" width="1em" height="1em" fill="currentColor">
                                        <g>
                                            <path
                                                d="M232,56V184a16,16,0,0,1-16,16H156.53l-14.84,24.29a16,16,0,0,1-27.41-.06L99.5,200.06,40,200a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z">
                                            </path>
                                        </g>
                                    </svg></div>
                                <h4 class="heading-4 pb-4 pt-3">Help Center</h4>
                                <p class="pb-5 text-center">Looking for answers? Visit our Help Center for detailed
                                    guides</p><a href="/contact" class="text-s1 underline font-medium">Help Center</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
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
                <style>
                    .swiper-slide {
    text-align: center; /* Center the content horizontally */
}

.swiper-slide a {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center the content vertically */
}


                    </style>
                @include('layouts.mainsite.footer')