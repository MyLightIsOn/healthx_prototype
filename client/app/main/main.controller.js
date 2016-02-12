'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.awesomeThings = [];
      this.data = [
        {
          value: 300,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
        },
        {
          value: 50,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
        },
        {
          value: 100,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Yellow"
        }
      ];


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

      this.createChart();
    }
    createChart(){
      var ctx = document.getElementById('myChart').getContext('2d');
      var myNewChart = new Chart(ctx).Doughnut(this.data);
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
