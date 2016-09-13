appModule
    .controller(
    'ContactController',
    [
        '$scope',
        '$translate',
        '$localStorage',
        '$window',
        function ($scope, $translate, $localStorage, $window) {
            // config
            $scope.$parent.toggle = false;
        }
    ]
);