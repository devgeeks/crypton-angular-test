/**
 * NotesListAllController.js
 */
window.app.controller('NotesListAllController',
    function ($scope, NoteService) {
  "use strict";


  $scope.notes = $scope.notes || {};
  $scope.notes.companies = NoteService.notes;

  $scope.showDetails = function(id) {
    window.console.log("This is supposed to display ID: " + id);
  };

  window.console.log("notes list screen loaded...");

});
