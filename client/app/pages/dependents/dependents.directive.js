'use strict';

angular.module('healthxApp')
    .directive('dependents', () => ({
        templateUrl: 'app/pages/dependents/dependents.html',
        restrict: 'E',
        controller: 'DependentsCtrl',
        controllerAs: 'dependents'
    }));