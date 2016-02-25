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
            .state('main.primary', {
                url: 'primary',
                authenticate: true
            })
            .state('main.dependents', {
                url: 'dependents',
                authenticate: true
            });
    });
