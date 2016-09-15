angular.module('app').directive('map', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var address = 'Blend Residencial';
            $(element).gMap({
                //address: address,
                latitude: -15.834285,
                longitude: -48.042507,
                zoom: 17,
                markers: [{
                    //icon
                    title: address,
                    //address: address,
                    latitude: -15.834285,
                    longitude: -48.042507,
                }]
            });
        }
    };
});