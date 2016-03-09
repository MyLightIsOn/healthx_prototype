'use strict';

angular.module('healthxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('findpharmacy', {
        url: '/findpharmacy',
        templateUrl: 'app/pages/findpharmacy/findpharmacy.html',
        controller: 'FindPharmacyCtrl'
      });
  });