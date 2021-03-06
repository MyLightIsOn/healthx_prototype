'use strict';

angular.module('healthxApp', [
  'healthxApp.auth',
  'healthxApp.admin',
  'healthxApp.constants',
  'healthxApp.navbar',
  'healthxApp.mockdata',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
