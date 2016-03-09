'use strict';

angular.module('healthxApp')
    .directive('notifications', () => ({
        templateUrl: 'app/pages/notifications/notifications.html',
        restrict: 'E',
        controller: 'NotificationsCtrl',
        controllerAs: 'notifications'
    }));