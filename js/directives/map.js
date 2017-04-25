angular.module('app').directive('map', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var address = 'Águas Claras';
            $(element).gMap({
                //address: address,
                latitude: -15.837201,
                longitude: -48.025805,
                zoom: 17,
                markers: [{
                    //icon
                    title: address,
                    //address: address,
                    latitude: -15.837201,
                    longitude: -48.025805,
                }]
            });
        }
    };
});