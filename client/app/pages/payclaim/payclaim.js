'use strict';

angular.module('healthxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('payclaim', {
        url: '/payclaim',
        templateUrl: 'app/pages/payclaim/payclaim.html',
        controller: 'PayClaimCtrl'
      });
  });