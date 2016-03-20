'use strict';

angular.module('healthxApp')
    .directive('payclaim', () => ({
        templateUrl: 'app/pages/payclaim/payclaim.html',
        restrict: 'E',
        controller: 'PayClaimCtrl',
        controllerAs: 'payclaim'
    }));