appModule.controller('ContactController', ['$scope', '$http', function ($scope, $http) {
    // config
    $scope.$parent.toggle = false;
    $scope.address = {
        location: 'Águas Claras',
        mail: $scope.$parent.mail,
        phone: $scope.$parent.phone
    };
    $scope.contact = {};
    $scope.alert = null;
    $scope.submit = function () {
        $http({
            method: 'POST',
            url: 'php/contact.php',
            data: $.param($scope.contact),  // pass in data as strings
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
        })
            .success(function (data) {
                if (data == 'SEND') {
                    $scope.alert = {
                        type: 'success',
                        message: 'Sua mensagem foi enviada! Obrigado!'
                    };
                } else {
                    $scope.alert = {
                        type: 'error',
                        message: data
                    };
                }
            });
    };
}]);