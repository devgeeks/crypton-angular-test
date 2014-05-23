/**
 * NoteDetailsController.js
 */
window.app.controller('NoteDetailsController',
    function ($scope, $routeParams, NoteService) {
  "use strict";

  $scope.id = $routeParams.id;
});
