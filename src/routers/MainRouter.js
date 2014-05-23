/**
 * MainRouter.js
 */
// configure our routes
window.app.config(function($routeProvider) {
  "use strict";

  $routeProvider

  // route for the home page
  .when('/', {
    templateUrl : 'templates/notesList.html',
    controller  : 'NotesListAllController'
  })
  // route for the note details
  .when('/note/:id', {
    templateUrl : 'templates/noteDetails.html',
    controller : 'NoteDetailsController'
  });
});

