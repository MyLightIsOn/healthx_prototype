'use strict';

(function() {

    function MockDataService() {

        var Charts = {

            'Health1' : [
                {
                    value: 300,
                    color:'#27817f',
                    highlight: '#FF5A5E',
                    label: 'Red'
                },
                {
                    value: 50,
                    color: '#2f5f5e',
                    highlight: '#5AD3D1',
                    label: 'Green'
                },
                {
                    value: 100,
                    color: '#2aaeac',
                    highlight: '#FFC870',
                    label: 'Yellow'
                }
            ],

            'Health2' : [
                {
                    value: 50,
                    color:'#27817f',
                    highlight: '#FF5A5E',
                    label: 'Red'
                },
                {
                    value: 300,
                    color: '#2f5f5e',
                    highlight: '#5AD3D1',
                    label: 'Green'
                },
                {
                    value: 100,
                    color: '#2aaeac',
                    highlight: '#FFC870',
                    label: 'Yellow'
                }
            ],

            'Health3' : [
                {
                    value: 50,
                    color:'#27817f',
                    highlight: '#FF5A5E',
                    label: 'Red'
                },
                {
                    value: 100,
                    color: '#2f5f5e',
                    highlight: '#5AD3D1',
                    label: 'Green'
                },
                {
                    value: 300,
                    color: '#2aaeac',
                    highlight: '#FFC870',
                    label: 'Yellow'
                }
            ],

            'chartOptions' : [
                {
                    animationEasing: "linear",
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