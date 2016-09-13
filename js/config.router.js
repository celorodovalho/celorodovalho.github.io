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
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
        function ($stateProvider,   $urlRouterProvider, JQ_CONFIG) {

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
                    controller: 'ProfileController',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function( $ocLazyLoad ){

                            }]
                    }
                })
                .state('app.resume', {
                    url: '/resume',
                    controller: 'ResumeController',
                    templateUrl: 'views/resume.html'
                    //resolve: {
                    //  deps: ['$ocLazyLoad',
                    //    function( $ocLazyLoad ){
                    //      return $ocLazyLoad.load(['js/controllers/chart.js']);
                    //  }]
                    //}
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
                .state('app.dashboard-v2', {
                    url: '/dashboard-v2',
                    templateUrl: 'tpl/app_dashboard_v2.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function( $ocLazyLoad ){
                                return $ocLazyLoad.load(['js/controllers/chart.js']);
                            }]
                    }
                })
        }
    ]
);