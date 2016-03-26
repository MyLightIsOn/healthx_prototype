'use strict';

angular.module('healthxApp')
    .directive('contacts', () => ({
        templateUrl: 'app/pages/contacts/contacts.html',
        restrict: 'E',
        controller: 'ContactsCtrl',
        controllerAs: 'contacts'
    }));