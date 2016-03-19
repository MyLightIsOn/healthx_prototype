'use strict';

(function() {

    function MockDataService() {

        var Charts = {

            'Health1' : [
                {
                    value: 750,
                    color: '#2aaeac',
                    highlight: '#FFC870',
                    label: 'Paid'
                },
                {
                    value: 250,
                    color: '#2f5f5e',
                    highlight: '#FFC870',
                    label: 'Remaining'
                }
            ],

            'Health2' : [
                {
                    value: 100,
                    color: '#2aaeac',
                    highlight: '#FFC870',
                    label: 'Paid'
                },
                {
                    value: 900,
                    color: '#2f5f5e',
                    highlight: '#FFC870',
                    label: 'Remaining'
                }
            ],

            'Health3' : [
                {
                    value: 0,
                    color: '#2aaeac',
                    highlight: '#FFC870',
                    label: 'Paid'
                },
                {
                    value: 1000,
                    color: '#2f5f5e',
                    highlight: '#FFC870',
                    label: 'Remaining'
                }
            ],

            'chartOptions' : [
                {
                    animationEasing: 'linear',
                    animationSteps: 40,
                    responsive: true,
                    maintainAspectRatio: true,
                    segmentShowStroke : false
                }
            ]
        };

        return Charts;
    }

    angular.module('healthxApp.mockdata')
        .factory('MockDataService', MockDataService);

})();