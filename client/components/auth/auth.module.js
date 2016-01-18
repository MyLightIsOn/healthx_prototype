'use strict';

angular.module('healthxApp.auth', [
  'healthxApp.constants',
  'healthxApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
