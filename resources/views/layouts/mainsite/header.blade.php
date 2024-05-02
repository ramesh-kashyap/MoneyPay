<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="{{asset('')}}assets/images/fav.png" />

    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <link rel="stylesheet" href="{{asset('')}}assets/css/swiper.min.css" />
    <link rel="stylesheet" href="{{asset('')}}assets/css/odometer.css" />
    <link rel="stylesheet" href="{{asset('')}}assets/css/animate.min.css" />

    <title>{{sitename()}}</title>
  <script defer src="{{asset('')}}assets/js/index.js"></script><link href="{{asset('')}}assets/css/style.css" rel="stylesheet"></head>
  <body>
    <!-- Header Start -->
    <header class="">
  <div class="top-0 left-0 right-0 z-50 header headerAbsolute 2">
    <div class="flex justify-between items-center container text-s1 py-6">
      <div class="pb-1 flex justify-start items-center gap-3">
        <button class="lg:hidden text-3xl mobileMenuOpenButton">
          <i class="ph ph-list"></i>
        </button>
        <a href="{{route('Index')}}">
          <img src="{{asset('')}}assets/images/newlogo.png" alt="accupay logo" style="width:180px;"/>
        </a>
      </div>
      <!-- Desktop Menu Start -->
      <nav class="max-lg:hidden">
        <ul class="flex justify-center items-center gap-3">
          <li class="">
            <a
              href="{{route('Index')}}"
              class="menu hover:header_menu_shadow duration-700 px-2 py-3 rounded-lg"
              >Home</a
            >
          </li>
          <li class="">
            <a
              href="{{route('about-us')}}"
              class="menu hover:header_menu_shadow duration-700 px-2 py-3 rounded-lg"
              >About</a
            >
          </li>
          <li class="">
            <a
              href="{{route('services')}}"
              class="menu hover:header_menu_shadow duration-700 px-2 py-3 rounded-lg"
              >Services</a
            >
          </li>
          <li class="">
            <a
              href=""
              class="menu hover:header_menu_shadow duration-700 px-2 py-3 rounded-lg"
              >Opportunity</a
            >
          </li>
          <li class="">
            <a
              href="{{route('bank')}}"
              class="menu hover:header_menu_shadow duration-700 px-2 py-3 rounded-lg"
              >Bank</a
            >
          </li>
          <li class="">
            <a
              href="{{route('contact')}}"
              class="menu hover:header_menu_shadow duration-700 px-2 py-3 rounded-lg"
              >Contact</a
            >
          </li>
          <li>
            <a
              href="{{route('register')}}"
              class="hover:header_menu_shadow duration-700 px-2 py-3 rounded-lg menu"
              >Register</a
            >
          </li>
          <li class="">
            <a
              href="{{route('login')}}"
              class="menu hover:header_menu_shadow duration-700 px-2 py-3 rounded-lg"
              >Login</a
            >
          </li>
        </ul>
      </nav>
      <!-- Desktop Menu End -->

      <div
        class="flex justify-end items-center gap-2 sm:gap-6 xl:gap-10 font-medium max-sm:hidden"
      >
        <div class="flex justify-between items-center gap-1">
          <i
            class="ph ph-phone-call bg-s1 rounded-full text-s2 p-2 md:p-3 text-lg lg:text-2xl !leading-none"
          ></i>
          <a href="tel:+123456789" class="max-xl:hidden"> + 1234 567 865 </a>
        </div>
        <a
          href="{{route('login')}}"
          class="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium"
        >
          Login
          <i
            class="ph-bold ph-arrow-up-right group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl !leading-[0]"
          ></i>
        </a>
      </div>
    </div>
  </div>

  <!--  Mobile Menu Start -->
  <nav class="">
    <div
      class="fixed top-0 left-0 bg-s1/80 h-full w-full lg:hidden duration-700 z-[998] mobileMenuBg mobileMenuBgClose"
    ></div>

    <div
      class="flex justify-start flex-col items-start gap-8 pb-10 lg:gap-20 fixed lg:hidden top-0 left-0 w-3/4 min-[500px]:w-1/2 h-full bg-s2 overflow-y-auto duration-700 z-[999] mobileMenu mobileMenuClose"
    >
      <div class="flex justify-between items-center w-full p-4 sm:p-8">
        <a href="{{route('Index')}}">
          <img src="{{asset('')}}assets/images/newlogo.png" alt="logo" style="width:200px,"/>
        </a>
        <i class="ri-close-line !text-3xl cursor-pointer mobileMenuCloseButton">
          <i class="ph ph-x"></i>
        </i>
      </div>

      <ul
        class="text-lg sm:text-xl flex gap-6 lg:gap-10 items-start flex-col pl-8"
      >
        <li>
          <a href="{{route('Index')}}" class="menu-hover hover:after:border-p1">
            Home
          </a>
        </li>
        <li>
          <div
            class="flex flex-col justify-start items-start group subMenuToggle"
          >
            <div class="flex justify-start items-center cursor-pointer">
            <a href="{{route('services')}}">
              <span>Services</span>
            </a>
              <i class="!text-xl pl-1 pt-1 duration-500">
                <i class="ph ph-caret-right"></i>
              </i>
            </div>

            
          </div>
        </li>
        <li>
          <div
            class="flex flex-col justify-start items-start group subMenuToggle"
          >
            <div class="flex justify-start items-center cursor-pointer">
            <a href="">
              <span>Opportunity</span>
</a>
              <i class="!text-xl pl-1 pt-1 duration-500">
                <i class="ph ph-caret-right"></i>
              </i>
            </div>
            
          </div>
        </li>
        <li>
          <div
            class="flex flex-col justify-start items-start group subMenuToggle"
          >
            <div class="flex justify-start items-center cursor-pointer">
            <a href="{{route('register')}}">
              <span>Register</span>
            </a>
              <i class="!text-xl pl-1 pt-1 duration-500">
                <i class="ph ph-caret-right"></i>
              </i>
            </div>
          </div>
        </li>
        <li>
          <a href="{{route('contact')}}" class="menu-hover hover:after:border-p1">
            Contact
          </a>
        </li>
        <li>
          <div
            class="flex flex-col justify-start items-start group subMenuToggle"
          >
            <div class="flex justify-start items-center cursor-pointer">
            <a href="{{route('login')}}">
              <span>Login</span>
            </a>
              <i class="!text-xl pl-1 pt-1 duration-500">
                <i class="ph ph-caret-right"></i>
              </i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  <!--  Mobile Menu End -->
</header>

    <!-- Header Section End -->