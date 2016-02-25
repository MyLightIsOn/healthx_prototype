'use strict';

angular.module('healthxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dependents', {
        url: '/dependents',
        templateUrl: 'app/pages/dependents/dependents.html',
        controller: 'DependentsCtrl'
      });
  });