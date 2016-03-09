'use strict';

angular.module('healthxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('notifications', {
        url: '/notifications',
        templateUrl: 'app/pages/notifications/notifications.html',
        controller: 'NotificationsCtrl'
      });
  });