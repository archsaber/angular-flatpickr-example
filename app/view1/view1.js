'use strict';

angular.module('myApp.view1', ['ngRoute', 'angular-flatpickr'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
    $scope.dateOpts = {
        dateFormat: 'Y-m-d',
        defaultDate: '2016-03-01 03:30:00 -0300',
        // noCalendar: true,
        // enableTime: true,
        // enableSeconds: true
    };

    $scope.datePostSetup = function(fpItem) {
        console.log('flatpickr', fpItem);
    }
}]);
