'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .run(
    [          '$rootScope', '$state', '$stateParams',
        function ($rootScope,   $state,   $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]
)
    .config(
    [          '$stateProvider', '$urlRouterProvider',
        function ($stateProvider,   $urlRouterProvider) {

            $urlRouterProvider
                .otherwise('/app/profile');
            $stateProvider
                //.state('profile', {
                //    url: '/profile',
                //    templateUrl: 'views/app.home.html'
                //})
                .state('app', {
                    abstract: true,
                    url: '/app',
                    templateUrl: 'views/app.html'
                })
                .state('app.profile', {
                    url: '/profile',
                    controller: 'ProfileController'
                })
                .state('app.resume', {
                    url: '/resume',
                    controller: 'ResumeController',
                    templateUrl: 'views/resume.html'
                })
                .state('app.portfolio', {
                    url: '/portfolio',
                    controller: 'PortfolioController',
                    templateUrl: 'views/portfolio.html'
                })
                .state('app.contact', {
                    url: '/contact',
                    controller: 'ContactController',
                    templateUrl: 'views/contact.html'
                })
        }
    ]
);