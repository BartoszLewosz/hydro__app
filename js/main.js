!function(e){var t={};function n(c){if(t[c])return t[c].exports;var l=t[c]={i:c,l:!1,exports:{}};return e[c].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(c,l,function(t){return e[t]}.bind(null,l));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function() {\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function(err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\nconst add_water = document.querySelector('.glass__button--add-js');\nconst remove_water = document.querySelector('.glass__button--remove-js');\nconst count_water = document.querySelector('.glass__counter--js');\nconst today_date = new Date().toISOString().slice(0,10);\n\n//console.log(key);\n\n//const key = new Date().toISOString().slice(0, 10)\n\n\nif (!localStorage.getItem(today_date)) {\n  localStorage.setItem(today_date, 0);\n  count_water.innerHTML = '0';\n}\nelse {\n  count_water.innerHTML = localStorage.getItem(today_date);\n}\n\nadd_water.addEventListener('click', (e) => {\n  const current_water = parseInt(localStorage.getItem(today_date));\n  if (current_water < 12) {\n    localStorage.setItem(today_date, parseInt(localStorage.getItem(today_date)) +1);\n    count_water.innerHTML = parseInt(localStorage.getItem(today_date));\n  }\n  \n})\n\nremove_water.addEventListener('click', (e) => {\n  const current_water = parseInt(localStorage.getItem(today_date));\n  if (current_water > 0) {\n    localStorage.setItem(today_date, localStorage.getItem(today_date) - 1);\n    count_water.innerHTML = parseInt(localStorage.getItem(today_date));\n  }\n})\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcblxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4gICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuY29uc3QgYWRkX3dhdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdsYXNzX19idXR0b24tLWFkZC1qcycpO1xuY29uc3QgcmVtb3ZlX3dhdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdsYXNzX19idXR0b24tLXJlbW92ZS1qcycpO1xuY29uc3QgY291bnRfd2F0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2xhc3NfX2NvdW50ZXItLWpzJyk7XG5jb25zdCB0b2RheV9kYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApO1xuXG4vL2NvbnNvbGUubG9nKGtleSk7XG5cbi8vY29uc3Qga2V5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKVxuXG5cbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0odG9kYXlfZGF0ZSkpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odG9kYXlfZGF0ZSwgMCk7XG4gIGNvdW50X3dhdGVyLmlubmVySFRNTCA9ICcwJztcbn1cbmVsc2Uge1xuICBjb3VudF93YXRlci5pbm5lckhUTUwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0b2RheV9kYXRlKTtcbn1cblxuYWRkX3dhdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc3QgY3VycmVudF93YXRlciA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRvZGF5X2RhdGUpKTtcbiAgaWYgKGN1cnJlbnRfd2F0ZXIgPCAxMikge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRvZGF5X2RhdGUsIHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRvZGF5X2RhdGUpKSArMSk7XG4gICAgY291bnRfd2F0ZXIuaW5uZXJIVE1MID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0odG9kYXlfZGF0ZSkpO1xuICB9XG4gIFxufSlcblxucmVtb3ZlX3dhdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc3QgY3VycmVudF93YXRlciA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRvZGF5X2RhdGUpKTtcbiAgaWYgKGN1cnJlbnRfd2F0ZXIgPiAwKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odG9kYXlfZGF0ZSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0odG9kYXlfZGF0ZSkgLSAxKTtcbiAgICBjb3VudF93YXRlci5pbm5lckhUTUwgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0b2RheV9kYXRlKSk7XG4gIH1cbn0pXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);