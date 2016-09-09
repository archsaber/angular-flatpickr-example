'use strict';

angular.module('myApp.view2', ['ngRoute', 'angular-flatpickr'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
    });
}])

.controller('View2Ctrl', ['$scope', '$timeout', function($scope, $timeout) {


    var fpObject;
    var fpFormat = 'm/d/Y';

    $scope.dateOpts = {
        dateFormat: fpFormat,
    };

    $scope.datePostSetup = function(fpItem) {
        fpObject = fpItem;
    };

    // Setting the date using a async call
    $timeout(function() {
        fpObject.setDate((new Date('2011-02-01')), false);
        // IMP : You also need to set the ng-model as its a one-way binding from
        //       model to flatpickr 
        $scope.dateVal = fpObject.formatDate(fpFormat);
    }, 2000);
}]);
