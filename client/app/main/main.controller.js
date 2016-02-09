'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.awesomeThings = [];

      /*Sets all of the views to false*/
      $scope.isActive = false;
      $scope.pageActive = false;

      $http.get('/api/things').then(response => {
        this.awesomeThings = response.data;
        socket.syncUpdates('thing', this.awesomeThings);
      });

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });

      $scope.$on("navClicked", function() {
        $scope.isActive = true
      });

      $scope.$on("navClosed", function() {
        $scope.isActive = false
      });

      /**
       * Opens Selected Page
       * Removes the active class from all pages then
       * adds it only to the page selected
       */
      $scope.$on("pageSelected", function(event, page) {
        var pageToOpen = angular.element.find(page),
            allPages = angular.element('#myPages').children();

        for (var pages of allPages) {
          pages.removeAttribute('class');
        }
        if(pageToOpen[0] != undefined){
          pageToOpen[0].className = 'active'
        }

      });
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
