'use strict';

(function() {
    class ContactsCtrl {

        constructor($scope) {
            $scope.selectContact = function($event){
                var listItem = angular.element($event.currentTarget),
                    listItemValue = listItem[0].attributes[2].value,
                    detailPages = angular.element('.contact-detail');
                
                for(var i = 0; i < detailPages.length; i++){
                    if(listItemValue === detailPages[i].id){
                        detailPages[i].classList.add('active')
                    }
                }
            };

            $scope.closeContact = function(){
                var detailPages = angular.element('.contact-detail');

                for(var i = 0; i < detailPages.length; i++){
                    detailPages[i].classList.remove('active')
                }
            }
        }
    }

    angular.module('healthxApp')
        .controller('ContactsCtrl', ContactsCtrl);
})();
