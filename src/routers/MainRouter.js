/**
 * MainRouter.js
 */
// configure our routes
window.app.config(function($stateProvider, $urlRouterProvider){
  "use strict";

  $stateProvider
    .state("notes", {
      url: "/notes",
      templateUrl: "templates/notesList.html",
      controller: "NotesListAllController",
      authenticate: true
    })
    .state("login", {
      url: "/login",
      templateUrl: "templates/login.html",
      controller: "LoginController",
      authenticate: false
    });
  // Send to login if the URL was not found
  $urlRouterProvider.otherwise("/notes");
});

window.app.run(function ($rootScope, $state, AuthService) {
  "use strict";

  $rootScope.$on("$stateChangeStart",
      function(event, toState, toParams, fromState, fromParams){
    if (toState.authenticate && !AuthService.isAuthenticated()){
      // User isn’t authenticated
      window.console.log("Unauthenticated... switch to login");
      $state.transitionTo("login");
      event.preventDefault();
    }
  });
});
