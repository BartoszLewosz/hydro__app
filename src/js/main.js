"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

const add_water = document.querySelector('.glass__button--add-js');
const remove_water = document.querySelector('.glass__button--remove-js');
const count_water = document.querySelector('.glass__counter--js');
const today_date = new Date().toISOString().slice(0,10);

//console.log(key);

//const key = new Date().toISOString().slice(0, 10)


if (!localStorage.getItem(today_date)) {
  localStorage.setItem(today_date, 0);
  count_water.innerHTML = '0';
}
else {
  count_water.innerHTML = localStorage.getItem(today_date);
}

add_water.addEventListener('click', (e) => {
  const current_water = parseInt(localStorage.getItem(today_date));
  if (current_water < 12) {
    localStorage.setItem(today_date, parseInt(localStorage.getItem(today_date)) +1);
    count_water.innerHTML = parseInt(localStorage.getItem(today_date));
  }
  
})

remove_water.addEventListener('click', (e) => {
  const current_water = parseInt(localStorage.getItem(today_date));
  if (current_water > 0) {
    localStorage.setItem(today_date, localStorage.getItem(today_date) - 1);
    count_water.innerHTML = parseInt(localStorage.getItem(today_date));
  }
})

