/**
 * app.js
 */
function onDeviceReady() {
  // ...
}

document.addEventListener("deviceready", onDeviceReady, false);


// Useragent sniffin. Ew.                                        
if (navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS 7_\d/i)) {
  window.angular.element(document.querySelector(".app"))
    .css({"top":"20px"});
}


var app = window.angular.module('notemindr',
    ['ui.router', 'ngTouch']);

