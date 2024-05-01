// // script.js
// var link = document.getElementById('whiteCss');
// var checkbox = document.getElementById('customSwitch1');
// var label = document.querySelector('.custom-control-label');
// var container = document.querySelector('.header-mobile');
// // Check if the CSS state is stored in local storage
// var storedCSS = localStorage.getItem('isDarkMode');

// // Check if the checkbox state is stored in local storage
// var storedCheckbox = localStorage.getItem('isCheckboxChecked');

// // Apply stored CSS state
// if (storedCSS === 'true') {
//   link.href = '/assets/member_assets/css/themes/layout/aside/white.css';
//   document.body.classList.add('theme-white');
//   container.classList.add('dark-nav');
//   label.textContent = 'Dark Mode';
//   checkbox.checked = true;
// } else {
//   link.href = '';
//   document.body.classList.remove('theme-white');
//   container.classList.remove('dark-nav');
//   label.textContent = 'Light Mode';
//   checkbox.checked = false;
// }

// // Add event listener to checkbox change event
// checkbox.addEventListener('change', function() {
//   if (this.checked) {
//     link.href = '/assets/member_assets/css/themes/layout/aside/white.css';
//     document.body.classList.add('theme-white');
//     container.classList.add('dark-nav');
//     label.textContent = 'Dark Mode';

//     // Store CSS state in local storage
//     localStorage.setItem('isDarkMode', true);
//     localStorage.setItem('isCheckboxChecked', true);
//   } else {
//     link.href = '';
//     document.body.classList.remove('theme-white');
//     container.classList.remove('dark-nav');
//     label.textContent = 'Light Mode';

//     // Store CSS state in local storage
//     localStorage.setItem('isDarkMode', false);
//     localStorage.setItem('isCheckboxChecked', false);
//   }
// });




// script.js
var link = document.getElementById('whiteCss');

// Retrieve all switch elements
var switches = document.querySelectorAll('.custom-control-input');
var labels = document.querySelectorAll('.custom-control-label');
var container = document.querySelector('.header-mobile');

// Apply stored CSS state for each switch
for (var i = 0; i < switches.length; i++) {
  var switchId = switches[i].id;
  var storedCSS = localStorage.getItem(switchId);

  if (storedCSS === 'true') {
    link.href = '/assets/member_assets/css/themes/layout/aside/white.css';
    document.getElementById(switchId).checked = true;
    document.body.classList.add('theme-white');
    container.classList.add('dark-nav');
    labels[i].textContent = 'Dark Mode';
  } else {
    link.href = '';
    document.getElementById(switchId).checked = false;
    document.body.classList.remove('theme-white');
    container.classList.remove('dark-nav');
    labels[i].textContent = 'Light Mode';
  }
}

// Add event listener to each switch change event
for (var i = 0; i < switches.length; i++) {
  switches[i].addEventListener('change', function() {
    var switchId = this.id;
    var switchLabel = document.querySelector('label[for="' + switchId + '"]');

    if (this.checked) {
      link.href = '/assets/member_assets/css/themes/layout/aside/white.css';
      document.body.classList.add('theme-white');
      container.classList.add('dark-nav');
      switchLabel.textContent = 'Dark Mode';

      // Store CSS state in local storage
      localStorage.setItem(switchId, true);
    } else {
      link.href = '';
      document.body.classList.remove('theme-white');
      container.classList.remove('dark-nav');
      switchLabel.textContent = 'Light Mode';

      // Store CSS state in local storage
      localStorage.setItem(switchId, false);
    }
  });
}