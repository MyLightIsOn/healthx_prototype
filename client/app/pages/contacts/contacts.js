'use strict';

angular.module('healthxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contacts', {
        url: '/contacts',
        templateUrl: 'app/pages/contacts/contacts.html',
        controller: 'ContactsCtrl'
      });
  });