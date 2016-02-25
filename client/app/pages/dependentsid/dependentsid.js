'use strict';

angular.module('healthxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dependentsid', {
        url: '/dependentsid',
        templateUrl: 'app/pages/dependentsid/dependentsid.html',
        controller: 'DependentsidCtrl'
      });
  });