appModule
    .controller(
    'ContactController',
    [
        '$scope',
        function ($scope) {
            // config
            $scope.$parent.toggle = false;
        }
    ]
);