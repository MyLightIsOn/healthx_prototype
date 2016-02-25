'use strict';

angular.module('healthxApp')
    .directive('primaryid', () => ({
        templateUrl: 'app/pages/primaryid/primaryid.html',
        restrict: 'E',
        controller: 'PrimaryidCtrl',
        controllerAs: 'primaryid'
    }));