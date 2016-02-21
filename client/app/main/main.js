'use strict';

angular.module('healthxApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main',
                authenticate: true
            })
            .state('main.profile', {
                url: 'profile',
                templateUrl: 'app/profile/profile.html',
                controller: 'ProfileCtrl',
                controllerAs: 'profile',
                authenticate: true
            })
            .state('main.settings', {
                url: 'settings',
                templateUrl: 'app/settings/settings.html',
                controller: 'SettingsCtrl',
                controllerAs: 'settings',
                authenticate: true
            });
    });
