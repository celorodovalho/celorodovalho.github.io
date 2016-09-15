angular.module('app').directive('map', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var address = 'Praça das Andorinhas, Águas Claras';
            $(element).gMap({
                address: address,
                zoom: 16,
                markers: [
                    {'address': address}
                ]
            });
        }
    };
});