'use strict';

angular.module('healthxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('primaryid', {
        url: '/primaryid',
        templateUrl: 'app/pages/primaryid/primaryid.html',
        controller: 'PrimaryidCtrl'
      });
  });