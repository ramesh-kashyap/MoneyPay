<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="{{asset('')}}assets/images/fav.png" />
    <title>Login -{{siteName()}}</title>
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <link rel="stylesheet" href="{{asset('')}}assets/css/swiper.min.css" />
    <link rel="stylesheet" href="{{asset('')}}assets/css/animate.min.css" />
    <script defer src="{{asset('')}}assets/js/index.js"></script>
    <link href="{{asset('')}}assets/css/style.css" rel="stylesheet">
</head>

<body>
    <main>
        <section class="flex justify-start items-center gap-8 xl:gap-20 xxl:gap-32 max-xl:flex-col">
            <div class="relative lg:max-h-screen lg:min-h-screen overflow-hidden max-xl:order-2">
                <img src="{{asset('')}}assets/images/login_bg_img.png" alt="image" class="object-cover h-full" />

                <div
                    class="absolute bottom-10 xl:bottom-20 left-4 xl:left-16 xxl:left-24 xxxl:left-32 testimonial-bg p-4 sm:p-8 max-xl:container lg:w-[550px] rounded-xl overflow-hidden">
                    <div class="swiper review-carousel">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="relative">
                                    <p class="text-lg sm:text-xl">
                                        "Incredible customer service. Their responsiveness and
                                        dedication to understanding our unique needs make them a
                                        trusted ally in our financial journey."
                                    </p>
                                    <div class="flex gap-3 pt-3 justify-between">
                                        <div class="">
                                            <p class="text-lg sm:text-2xl font-medium">
                                                David Warner
                                            </p>
                                            <p class="max-sm:text-xs">Web Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="relative">
                                    <p class="text-lg sm:text-xl">
                                        "Incredible customer service. Their responsiveness and
                                        dedication to understanding our unique needs make them a
                                        trusted ally in our financial journey."
                                    </p>
                                    <div class="flex gap-3 pt-3 justify-between">
                                        <div class="">
                                            <p class="text-lg sm:text-2xl font-medium">
                                                David Warner
                                            </p>
                                            <p class="max-sm:text-xs">Web Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="relative">
                                    <p class="text-lg sm:text-xl">
                                        "Incredible customer service. Their responsiveness and
                                        dedication to understanding our unique needs make them a
                                        trusted ally in our financial journey."
                                    </p>
                                    <div class="flex gap-3 pt-3 justify-between">
                                        <div class="">
                                            <p class="text-lg sm:text-2xl font-medium">
                                                David Warner
                                            </p>
                                            <p class="max-sm:text-xs">Web Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-end items-center gap-3 absolute right-0 sm:right-4 bottom-4 z-20">
                            <button class="bg-mainTextColor rounded-full text-white p-3 ara-prev !leading-[0]">
                                <i class="ph ph-arrow-left"></i>
                            </button>
                            <button class="bg-mainTextColor rounded-full text-white p-3 ara-next !leading-[0]">
                                <i class="ph ph-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="max-xl:container xl:w-[650px] xl:pr-8 max-xl:stp-30">
                <a href="index.html">
                    <img src="{{asset('')}}assets/images/newlogo.png" style="width: 200px" alt="image" />
                </a>
                <h2 class="display-4 py-5">Login</h2>
                <p class="text-bodyText pb-6 lg:pb-10">
                    Grow with expert consulting support.
                </p>
                <a href="{{route('register')}}" class="flex justify-center items-center gap-2 font-semibold bg-softBg py-4 rounded-xl w-full">
                    <span>
                        <img src="{{asset('')}}assets/images/google.png" alt="image" />
                    </span>
                    Sign up 
                </a>

                <div class="py-6 lg:py-8 text-center">
                    <p
                        class="relative after:absolute after:top-3 after:left-0 after:h-px after:bg-strokeColor after:w-[40%] before:absolute before:top-3 before:right-0 before:h-px before:bg-strokeColor max-md:before:content-none max-md:after:content-none before:w-[40%]">
                        Or Sign In With
                    </p>
                </div>
                <form  method="POST" action="{{route('login')}}">
                    {{ csrf_field() }}
                <div class="grid grid-cols-2 gap-6">
                  
                    <div class="col-span-2 py-4 px-8 border flex justify-start items-center gap-2">
                        <span class="text-xl text-bodyText">
                            <i class="ph-fill ph-envelope"></i>
                        </span>
                        <input type="text" placeholder="Username"
                            class="placeholder:text-bodyText w-full outline-none" />
                    </div>
                    <div class="col-span-2 py-4 px-8 border flex justify-start items-center gap-2">
                        <span class="text-xl text-bodyText">
                            <i class="ph-fill ph-lock"></i>
                        </span>
                        <input type="text" placeholder="Password"
                            class="placeholder:text-bodyText w-full outline-none" />
                    </div>
                    <div class="col-span-2 table-checkbox flex justify-between items-center">
                        <label class="flex justify-start items-center gap-2">
                            <input type="checkbox" class=" " />
                            <p>Remember me</p>
                        </label>
                        <a class="font-medium"> Forget Password? </a>
                    </div>
                    <div class="col-span-2">
                        <button
                            class="py-4 bg-p1 text-white block text-center border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500 w-full">
                            Login
                        </button>
                    </div>
             
                </div>
            </form>
                
            </div>
        </section>
    </main>

    <!-- Scroll To top Button Start -->
    <button
        class="fixed text-white text-xl sm:text-2xl rounded-full bg-p1 hover:bg-s2 border border-p1 hover:border-white right-6 md:right-10 p-2 sm:p-3 z-40 jumping1 duration-700 scrollButton scrollButtonHide !leading-[0]"
        aria-label="bottom to top button">
        <span class="block">
            <i class="ph ph-arrow-up"></i>
        </span>
    </button>

    <!-- Scroll To top Button End -->

    <!--==================================================================-->

    <!-- ==== js dependencies start ==== -->
    <script src="index.js"></script>
    <script src="{{asset('')}}assets/js/main.js"></script>
    <script src="{{asset('')}}assets/js/plugins/plugins.js"></script>
    <script src="{{asset('')}}assets/js/plugins/plugin-custom.js"></script>
</body>

</html>
