angular.module('app').directive('fancybox', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $(element).fancybox({
                transitionIn: attrs['transitionIn'] ? attrs['transitionIn'] : 'elastic',
                transitionOut: attrs['transitionOut'] ? attrs['transitionOut'] : 'elastic',
                speedIn: attrs['speedIn'] ? attrs['speedIn'] : 200,
                speedOut: attrs['speedOut'] ? attrs['speedOut'] : 200,
                overlayOpacity: attrs['overlayOpacity'] ? attrs['overlayOpacity'] : 0.6,
                type: attrs['fancyboxType'] ? attrs['fancyboxType'] : 'iframe',
                scrolling: attrs['scrolling'] ? attrs['scrolling'] : 'no',
                maxWidth: attrs['maxWidth'] ? attrs['maxWidth'] : 1200,
                maxHeight: attrs['maxHeight'] ? attrs['maxHeight'] : 600,
                fitToView: attrs['fitToView'] ? attrs['fitToView'] : false,
                width: attrs['width'] ? attrs['width'] : '70%',
                height: attrs['height'] ? attrs['height'] : '70%',
                autoSize: attrs['autoSize'] ? attrs['autoSize'] : false,
                closeClick: attrs['closeClick'] ? attrs['closeClick'] : true,
                openEffect: attrs['openEffect'] ? attrs['openEffect'] : 'none',
                closeEffect: attrs['closeEffect'] ? attrs['closeEffect'] : 'none'
            });
        }
    }
});