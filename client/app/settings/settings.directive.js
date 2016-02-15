'use strict';

angular.module('healthxApp')
    .directive('settings', () => ({
        templateUrl: 'app/settings/settings.html',
        restrict: 'E',
        controller: 'SettingsCtrl',
        controllerAs: 'settings'
    }));