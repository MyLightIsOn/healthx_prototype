angular.module('healthxApp')
    .directive('profile', () => ({
        templateUrl: 'app/profile/profile.html',
        restrict: 'E',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
    }));