(function() {
  var app = angular.module('signup', []);

  app.controller('jobList', function() {
    this.jobs = [
    ];
  });

  app.controller('jobController', function() {
    this.newJob = {};

    this.addJob = function(form) {
      form.jobs.push(this.newJob);
      this.newJob = {};
    };
  });

})();
