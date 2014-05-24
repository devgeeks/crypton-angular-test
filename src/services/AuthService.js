/**
 * AuthService.js
 */
window.app.factory('AuthService', function() {
  "use strict";

  var isAuthenticated = false;
  var obj = {
    setAuthenticated: function(value){
      isAuthenticated = value;
    },
    isAuthenticated: function(){
      return isAuthenticated;
    }
  };

  return obj;
});
