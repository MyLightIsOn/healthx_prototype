'use strict';

angular.module('healthxApp')
    .directive('dependentid', () => ({
        templateUrl: 'app/pages/dependentid/dependentid.html',
        restrict: 'E',
        controller: 'DependentidCtrl',
        controllerAs: 'dependentid'
    }));