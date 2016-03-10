'use strict';

angular.module('healthxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dependentid', {
        url: '/dependentid',
        templateUrl: 'app/pages/dependentid/dependentid.html',
        controller: 'DependentidCtrl'
      });
  });