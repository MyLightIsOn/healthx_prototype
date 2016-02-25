'use strict';

angular.module('healthxApp')
    .directive('planinfo', () => ({
        templateUrl: 'app/pages/planinfo/planinfo.html',
        restrict: 'E',
        controller: 'PlaninfoCtrl',
        controllerAs: 'planinfo'
    }));