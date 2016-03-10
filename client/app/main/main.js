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
            })
            .state('main.primaryid', {
                url: 'primaryid',
                authenticate: true
            })
            .state('main.dependentid', {
                url: 'dependentid',
                authenticate: true
            })
            .state('main.planinfo', {
                url: 'planinfo',
                authenticate: true
            })
            .state('main.notifications', {
                url: 'notifications',
                authenticate: true
            })
            .state('main.findpharmacy', {
                url: 'findpharmacy',
                authenticate: true
            })
            .state('main.nocontent', {
                url: 'nocontent',
                authenticate: true
            });
    });
