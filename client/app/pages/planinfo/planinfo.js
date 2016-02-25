'use strict';

angular.module('healthxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('planinfo', {
        url: '/planinfo',
        templateUrl: 'app/pages/planinfo/planinfo.html',
        controller: 'PlaninfoCtrl'
      });
  });