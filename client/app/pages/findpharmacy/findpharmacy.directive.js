'use strict';

angular.module('healthxApp')
    .directive('findpharmacy', () => ({
        templateUrl: 'app/pages/findpharmacy/findpharmacy.html',
        restrict: 'E',
        controller: 'FindPharmacyCtrl',
        controllerAs: 'findpharmacy'
    }));