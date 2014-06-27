angular.module('signup', [])
  .controller('formController', function($scope) {
    $scope.jobs = [];
    $scope.newJob = {};

    $scope.addJob = function() {
      $scope.jobs.push($scope.newJob)
      $scope.newJob = {};
    };
  });
