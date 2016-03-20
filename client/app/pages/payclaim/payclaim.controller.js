'use strict';

(function() {

    class PayClaimCtrl {

        constructor($scope) {
            $scope.selectClaim = function(value){
                if(value === ''){
                    $scope.foundClaim = false;
                } else {
                    var claimToPay = document.getElementsByClassName('claim-selected');
                    $scope.foundClaim = true;
                    claimToPay[0].textContent = value;
                }
            };
        }
    }

    angular.module('healthxApp')
        .controller('PayClaimCtrl', PayClaimCtrl);
})();
