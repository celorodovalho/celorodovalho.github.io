appModule.controller('ContactController', ['$scope', '$http', function ($scope, $http) {
    // config
    $scope.$parent.toggle = false;
    $scope.address = {
        location: 'Quadra 203, Águas Claras (Sul)',
        mail: 'contato@marcelorodovalho.com',
        phone: '+55 61 99302 5413',
        website: 'www.marcelorodovalho.com'
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
                        type: 'success',
                        message: 'Sua mensagem foi enviada! Obrigado!'
                    };
                    $scope.errorName = data.errors.name;
                    $scope.errorSuperhero = data.errors.superheroAlias;
                    // if successful, bind success message to message

                }
            });
    };

    // Needed variables
    var $contactform = $('#contactform'),
        $success = 'Sua mensagem foi enviada! Obrigado!';

    $contactform.submit(function () {
        $.ajax({
            type: "POST",
            url: "php/contact.php",
            data: $(this).serialize(),
            success: function (msg) {
                if (msg == 'SEND') {
                    response = '<div class="success">' + $success + '</div>';
                }
                else {
                    response = '<div class="error">' + msg + '</div>';
                }
                // Hide any previous response text
                $(".error,.success").remove();
                // Show response message
                $contactform.prepend(response);
            }
        });
        return false;
    });
}]);