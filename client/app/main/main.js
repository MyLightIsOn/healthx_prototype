'use strict';

angular.module('healthxApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
        .state('main.profile', { // added view mode
            url: "profile"
        })
  });
