'use strict';

angular.module('healthxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('nocontent', {
        url: '/nocontent',
        templateUrl: 'app/pages/primaryid/nocontent.html',
        controller: 'NocontentCtrl'
      });
  });