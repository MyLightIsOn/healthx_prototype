'use strict';

angular.module('healthxApp')
  .controller('NotificationsCtrl', function ($scope) {
    $scope.message = 'Hello';

      $scope.toggleSwitch = function($event){
          $event.currentTarget.classList.toggle('on')
      }

  });
