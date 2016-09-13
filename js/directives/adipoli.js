angular.module('app').directive('adipoli', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var options = {};
            options['startEffect'] = attrs.startEffect ? attrs.startEffect : 'transparent';
            options['hoverEffect'] = attrs.hoverEffect ? attrs.hoverEffect : 'boxRandom';
            options['animSpeed'] = attrs.animSpeed ? attrs.animSpeed : 100;
            options['imageOpacity'] = attrs.imageOpacity ? attrs.imageOpacity : 0.6;
            if (attrs.boxCols) options['boxCols'] = attrs.boxCols;
            if (attrs.boxRows) options['boxRows'] = attrs.boxRows;
            if (attrs.slices) options['slices'] = attrs.slices;
            element.adipoli(options);
        }
    };
});