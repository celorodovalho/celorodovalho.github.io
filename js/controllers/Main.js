'use strict';

/* Controllers */
var appModule = angular.module('app');
appModule.controller('AppController', ['$scope',
      function($scope) {
        // config
        $scope.toggle = false;
        $scope.contentClass = 'size-down';
        $scope.app = {
          name: 'Angulr',
          version: '2.0.1',
          // for chart colors
          color: {
            primary: '#7266ba',
            info:    '#23b7e5',
            success: '#27c24c',
            warning: '#fad733',
            danger:  '#f05050',
            light:   '#e8eff0',
            dark:    '#3a3f51',
            black:   '#1c2b36'
          },
          settings: {
            themeID: 1,
            navbarHeaderColor: 'bg-black',
            navbarCollapseColor: 'bg-white-only',
            asideColor: 'bg-black',
            headerFixed: true,
            asideFixed: false,
            asideFolded: false,
            asideDock: false,
            container: false
          }
        };
      }]);