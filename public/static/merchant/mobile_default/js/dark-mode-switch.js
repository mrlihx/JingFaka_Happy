(function ($) {
  'use strict';

  // Dark Mode JS
  var toggleSwitch = document.getElementById('darkSwitch');
  var currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
      if (toggleSwitch) {
        toggleSwitch.checked = true;
      }
    }
  }

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }
  if (toggleSwitch) {
    toggleSwitch.addEventListener('change', switchTheme, false);
  }

  // RTL Mode JS
  var rtltoggleSwitch = document.getElementById('rtlSwitch');
  var rtlcurrentTheme = localStorage.getItem('rtl');

  if (rtlcurrentTheme) {
    document.documentElement.setAttribute('view-mode', rtlcurrentTheme);
    if (rtlcurrentTheme === 'rtl') {
      if (rtltoggleSwitch) {
        rtltoggleSwitch.checked = true;
      }
    }
  }

  function rtlswitchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('view-mode', 'rtl');
      localStorage.setItem('rtl', 'rtl');
    } else {
      document.documentElement.setAttribute('view-mode', 'ltr');
      localStorage.setItem('rtl', 'ltr');
    }
  }

  if (rtltoggleSwitch) {
    rtltoggleSwitch.addEventListener('change', rtlswitchTheme, false);
  }

})();