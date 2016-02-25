'use strict';

angular.module('healthxApp')
    .directive('dependentsid', () => ({
        templateUrl: 'app/pages/dependentsid/dependentsid.html',
        restrict: 'E',
        controller: 'DependentsidCtrl',
        controllerAs: 'dependentsid'
    }));