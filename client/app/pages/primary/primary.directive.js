'use strict';

angular.module('healthxApp')
    .directive('primary', () => ({
        templateUrl: 'app/pages/primary/primary.html',
        restrict: 'E',
        controller: 'PrimaryCtrl',
        controllerAs: 'primary'
    }));