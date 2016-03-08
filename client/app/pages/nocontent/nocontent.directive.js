'use strict';

angular.module('healthxApp')
    .directive('nocontent', () => ({
        templateUrl: 'app/pages/nocontent/nocontent.html',
        restrict: 'E',
        controller: 'NocontentCtrl',
        controllerAs: 'nocontent'
    }));