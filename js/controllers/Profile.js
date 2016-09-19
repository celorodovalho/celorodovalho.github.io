appModule
    .controller(
    'ProfileController',
    [
        '$scope',
        function ($scope) {
            // config
            $scope.$parent.toggle = true;
            $scope.profile = {
                name: 'Marcelo Rodovalho',
                title: 'Web Developer',
                description: 'Gosto de desenvolver projetos criativos e inovadores. ' +
                'Busco sempre implementar códigos padronizados e documentados que sejam fáceis de manter. ' +
                'Fique à vontade para apreciar meu portfólio e entrar em contato.',
                birthday: '22 de Agosto de 1985',
                address: 'Águas Claras, Distrito Federal',
                mail: $scope.$parent.mail,
                phone: $scope.$parent.phone
            }
        }
    ]
);