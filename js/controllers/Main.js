'use strict';

/* Controllers */
var appModule = angular.module('app');
appModule.controller('MainController', ['$scope', '$location', '$window', function ($scope, $location, $window) {
    $scope.year = new Date().getFullYear();
    $scope.mail = 'contato@marcelorodovalho.com';
    $scope.phone = '+55 61 99302 5413';
    $scope.social = {
        facebook: 'https://www.facebook.com/MarceloRodovalhoDeveloper',
        linkedin: 'https://br.linkedin.com/in/marcelorodovalho',
        google: 'https://plus.google.com/+MarceloRodovalho'
    };
    $scope.$on('$viewContentLoaded', function (event) {
        $window.ga('send', 'pageview', {page: $location.url()});
    });
}]);