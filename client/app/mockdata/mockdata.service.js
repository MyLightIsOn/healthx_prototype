'use strict';

(function() {

    function MockDataService() {

        var Charts = {

            'Health1' : [
                {
                    value: 300,
                    color:'#27817f',
                    highlight: '#FFC870',
                    label: 'Deductible'
                },
                {
                    value: 50,
                    color: '#2f5f5e',
                    highlight: '#FFC870',
                    label: 'Paid'
                },
                {
                    value: 100,
                    color: '#2aaeac',
                    highlight: '#FFC870',
                    label: 'Remaining'
                }
            ],

            'Health2' : [
                {
                    value: 50,
                    color:'#27817f',
                    highlight: '#FFC870',
                    label: 'Deductible'
                },
                {
                    value: 300,
                    color: '#2f5f5e',
                    highlight: '#FFC870',
                    label: 'Paid'
                },
                {
                    value: 100,
                    color: '#2aaeac',
                    highlight: '#FFC870',
                    label: 'Remaining'
                }
            ],

            'Health3' : [
                {
                    value: 50,
                    color:'#27817f',
                    highlight: '#FFC870',
                    label: 'Deductible'
                },
                {
                    value: 100,
                    color: '#2f5f5e',
                    highlight: '#FFC870',
                    label: 'Paid'
                },
                {
                    value: 300,
                    color: '#2aaeac',
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