  <!--begin::Footer-->
  @include('partials.notify')
  <div class="footer bg-black py-4 d-flex flex-lg-column footer-bg" id="kt_footer">
      <!--begin::Container-->
      <div class="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-center">
          <!--begin::Copyright-->
          <div class="text-white order-2 order-md-1">
              <span class="text-info font-weight-bold mr-2">{{siteName()}}</span>
              <a href="{{generalDetail()->siteurl}}" target="_blank" class="text-white text-hover-primary">{{siteName()}}. 
              </a>
          </div>
          <!--end::Copyright-->
          <!--begin::Nav-->
          <div class="nav nav-dark">
          </div>
          <!--end::Nav-->
      </div>
      <!--end::Container-->
  </div>
  <!--end::Footer-->
  </div>
  <!--end::Wrapper-->
  </div>
  <!--end::Page-->
  </div>
  <!--end::Main-->

  <!--begin::Scrolltop-->
  <div id="kt_scrolltop" class="scrolltop">
      <span class="svg-icon">
          <!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Up-2.svg-->
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
              height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <polygon points="0 0 24 0 24 24 0 24" />
                  <rect fill="#000000" opacity="0.3" x="11" y="10" width="2" height="10"
                      rx="1" />
                  <path
                      d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z"
                      fill="#000000" fill-rule="nonzero" />
              </g>
          </svg>
          <!--end::Svg Icon-->
      </span>
  </div>
  <!--end::Scrolltop-->
  <!-- chat block::begin -->
  <!-- BEGIN ProvideSupport.com Graphics Chat Button Code -->
  <!-- END ProvideSupport.com Graphics Chat Button Code -->
  <!-- chat block::end -->
  <!-- whatsapp::begin -->
  </div>
  <!--end::Demo Panel-->
  <!--begin::Global Config(global config for global JS scripts)-->
  <script>
      var KTAppSettings = {
          "breakpoints": {
              "sm": 576,
              "md": 768,
              "lg": 992,
              "xl": 1200,
              "xxl": 1200
          },
          "colors": {
              "theme": {
                  "base": {
                      "white": "#ffffff",
                      "primary": "#6993FF",
                      "secondary": "#E5EAEE",
                      "success": "#1BC5BD",
                      "info": "#8950FC",
                      "warning": "#FFA800",
                      "danger": "#F64E60",
                      "light": "#F3F6F9",
                      "dark": "#212121"
                  },
                  "light": {
                      "white": "#ffffff",
                      "primary": "#E1E9FF",
                      "secondary": "#ECF0F3",
                      "success": "#C9F7F5",
                      "info": "#EEE5FF",
                      "warning": "#FFF4DE",
                      "danger": "#FFE2E5",
                      "light": "#F3F6F9",
                      "dark": "#D6D6E0"
                  },
                  "inverse": {
                      "white": "#ffffff",
                      "primary": "#ffffff",
                      "secondary": "#212121",
                      "success": "#ffffff",
                      "info": "#ffffff",
                      "warning": "#ffffff",
                      "danger": "#ffffff",
                      "light": "#464E5F",
                      "dark": "#ffffff"
                  }
              },
              "gray": {
                  "gray-100": "#F3F6F9",
                  "gray-200": "#ECF0F3",
                  "gray-300": "#E5EAEE",
                  "gray-400": "#D6D6E0",
                  "gray-500": "#B5B5C3",
                  "gray-600": "#80808F",
                  "gray-700": "#464E5F",
                  "gray-800": "#1B283F",
                  "gray-900": "#212121"
              }
          },
          "font-family": "Poppins"
      };
  </script>
  <!--end::Global Config-->
  <!--begin::Global Theme Bundle(used by all pages)-->
  <script src="{{ asset('') }}upnl/js/bundle.js"></script>
  <script src="{{ asset('') }}upnl/js/prismjs.bundle.js"></script>
  <script src="{{ asset('') }}upnl/js/scripts.bundle.js"></script>
  <script src="{{ asset('') }}upnl/js/chart.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/js/ion.rangeSlider.min.js"></script>
  <script>
      $(".js-range-slider").ionRangeSlider({
          skin: "round",
          min: 100,
          max: 100000,
      });
  </script>
  <!--end::Global Theme Bundle-->
  <!--begin::Page Vendors(used by this page)-->
  <script src="{{ asset('') }}upnl/js/fullcalendar.bundle.js"></script>
  <!--end::Page Vendors-->

  <!--begin::Page Scripts(used by this page)-->

  <!--end::Page Scripts-->
  {{-- <script src="{{ asset('') }}upnl/js/local-sort.js"></script> --}}
  <!--begin::Page Scripts(used by this page)-->
  {{-- <script src="{{ asset('') }}upnl/js/bootstrap-datepicker.js"></script> --}}
  <script src="{{ asset('') }}upnl/js/wizard-4.js"></script>
  <script src="{{ asset('') }}upnl/js/nouislider.js"></script>
  <!-- Javascript -->


  <script language="JavaScript" type="text/javascript" src="{{ asset('') }}assets/guest-assets/js/bootstrap.min.js">
  </script>



  <script>
      $(function() {
          $('[data-toggle="popover"]').popover()
      })
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.6/clipboard.min.js"></script>

  <script src="https://cdn.tiny.cloud/1/ksuxa9cnxwvbo1fbz4jbcbqvi4ujfntrj1b4k8keye2jrg6g/tinymce/6/tinymce.min.js"
      referrerpolicy="origin"></script>


  <script>
      tinymce.init({
          selector: 'textarea#newsdesc',
          plugins: 'a11ychecker advcode casechange export formatpainter image editimage linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tableofcontents tinycomments tinymcespellchecker',
          toolbar: 'a11ycheck addcomment showcomments casechange checklist code export formatpainter image editimage pageembed permanentpen table tableofcontents',
          toolbar_mode: 'floating',
          tinycomments_mode: 'embedded',
          tinycomments_author: 'Author name',
      });
  </script>

  <script>
      var clipboard = new ClipboardJS('.affilatecopy');

      clipboard.on('success', function(e) {
          alert("Above details copied!");
      });
      clipboard.on('error', function(e) {
          alert("Sorry, something is wrong!");
      });
  </script>

  <script>
      var clipboard = new ClipboardJS('.copyafflink');

      clipboard.on('success', function(e) {
          alert("Above details copied!");
      });
      clipboard.on('error', function(e) {
          alert("Sorry, something is wrong!");
      });
  </script>

  <script>
      var clipboard = new ClipboardJS('.copyafflink1');

      clipboard.on('success', function(e) {
          alert("Above details copied!");
      });
      clipboard.on('error', function(e) {
          alert("Sorry, something is wrong!");
      });
  </script>

  <script>
      var clipboard = new ClipboardJS('.copybannerlink'); //console.log('clipboard');

      clipboard.on('success', function(e) {
          alert("Above details copied!");
      });
      clipboard.on('error', function(e) {
          alert("Sorry, something is wrong!");
      });
  </script>
  <script type="text/javascript">
      (function(c, l, a, r, i, t, y) {
          c[a] = c[a] || function() {
              (c[a].q = c[a].q || []).push(arguments)
          };
          t = l.createElement(r);
          t.async = 1;
          t.src = "https://www.clarity.ms/tag/" + i;
          y = l.getElementsByTagName(r)[0];
          y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", "6r9vyywxgd");
  </script>
  <script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.10/dist/clipboard.min.js"></script>
  <script>
      var clipboard = new ClipboardJS('.copy-btn');
  </script>
  <script>
      $(".copy-btn").click(function() {
          $(this).addClass("bxs-check-circle");
          $(this).removeClass("bx-copy")
      });
  </script>
  <script>
      var clipboard = new ClipboardJS('.copy-btn1');
  </script>
  <script src="https://kit.fontawesome.com/e1e67fdafd.js" crossorigin="anonymous"></script>
  <script>
      $(document).ready(function() {
          var timer;

          $('.dropdown button, .dropdown-menu').hover(function() {

              clearTimeout(timer);
              $('.dropdown').addClass('open');

          }, function() {

              timer = setTimeout(function() {
                  $('.dropdown').removeClass("open");
              }, 500);

          });
      });
  </script>
  <script>
      function getDateTime() {

          var now = new Date().toLocaleString("en-US", {
              timeZone: "Europe/London"
          })

          now = new Date(now);

          return now.toLocaleString("en-US", {
              'dateStyle': 'medium',
              'timeStyle': 'medium'
          });

      }

      // example usage: realtime clock
      setInterval(function() {
          currentTime = getDateTime();
          document.getElementById("server-time").innerHTML = currentTime;
          document.getElementById("server-time-mobile").innerHTML = currentTime;
      }, 1000);
  </script>
  <!-- language -->
  <script type="text/javascript" src="{{ asset('') }}upnl/js/jquery-2-2.js"></script>
  <script type="text/javascript" src="{{ asset('') }}upnl/js/bootstrap-select.js"></script>
  <script type="text/javascript" src="{{ asset('') }}upnl/js/lang.js"></script>
  <script>

    
function copyclipboardleft(id) {
        var copyText = document.getElementById(id);
        copyText.select();
        document.execCommand("copy");
    }

    $(".copyclipbtn").click(function() {
        $(".copyclipbtn").removeClass("btn-success");
        $(".copyclipbtn").addClass("btn-primary");
        $(".copyclipbtn").children('i').addClass('fa-copy');
        $(".copyclipbtn").children('i').removeClass('fa-check');
        $(this).removeClass("btn-primary");
        $(this).addClass("btn-success");
        $(this).children('i').removeClass('fa-copy');
        $(this).children('i').addClass('fa-check');
    });

    function copyclipboardright(id) {
        var copyText = document.getElementById(id);
        copyText.select();
        document.execCommand("copy");
    }


      function googleTranslateElementInit() {
          new google.translate.TranslateElement({
              pageLanguage: 'en',
              layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false
          }, 'google_translate_element');
      }

      function translateLanguage(lang) {
          googleTranslateElementInit();
          var $frame = $('.goog-te-menu-frame:first');
          if (!$frame.size()) {
              alert("Error: Could not find Google translate frame.");
              return false;
          }
          $frame.contents().find('.goog-te-menu2-item span.text:contains(' + lang + ')').get(0).click();
          return false;
      }
      $(function() {
          $('.selectpicker').selectpicker();
      });
  </script>
  <script src="{{ asset('') }}upnl/js/social-share.min.js"></script>
  <script>
      $(function() {
          $('[data-toggle="popover"]').tooltip()
      })
  </script>
  <script language="JavaScript" type="text/javascript" src="{{ asset('') }}upnl/js/popover.min"></script>
  <script>
      $(document).ready(function() {
          if (localStorage.getItem('popState') != 'shown') {
              $("#mrpopup").delay(2000).fadeIn();
              // localStorage.setItem('popState','shown')
          }
          $('#popup-close').click(function(e) // You are clicking the close button
              {
                  $('#mrpopup').fadeOut(); // Now the pop up is hiden.
              });
          $('#mrpopup').click(function(e) {
              $('#mrpopup').fadeOut();
          });
      });
  </script>
  <script language="JavaScript" type="text/javascript" src="{{ asset('') }}upnl/js/theme-switch.js"></script>
  </body>
  <!--end::Body-->

  </html>
