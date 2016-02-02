'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.awesomeThings = [];

    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      socket.syncUpdates('thing', this.awesomeThings);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });

    $scope.isActive = false;

    $scope.$on("navClicked", function() {
        $scope.isActive = true
    });

    $scope.$on("navClosed", function() {
        $scope.isActive = false
    });


    $scope.pageActive = false;

    /*$scope.pageActive = function(){
      $scope.pageActive = true;
    }*/
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('healthxApp')
  .controller('MainController', MainController);

})();
