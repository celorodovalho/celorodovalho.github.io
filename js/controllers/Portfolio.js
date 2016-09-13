appModule
    .controller(
    'PortfolioController',
    [
        '$scope',
        '$http',
        function ($scope, $http) {
            $scope.projects = [];
            $scope.filters = [{
                default: true,
                filter: '*',
                value: 'Todos'
            }];
            $scope.listFilters = [];
            var BehanceProjectsCallback = function (data) {
                    angular.forEach(data, function(project, index){
                        AppendProject(project);
                        if (index + 1 == data.length) {
                            StartPortfolio();
                        }
                    });
                },
                AppendProject = function (data) {
                    var project = data,
                        fields = project.fields.concat(project.tags),
                        thumb = project.covers['230'],
                        title = project.name,
                        id = project.id,
                        descriptions = project.description.split('\n'),
                        url = project.url,
                        tools = [],
                        agency = '© ';
                    angular.forEach(project.tools, function(value, index){
                        fields.push(value.title);
                    });
                    angular.forEach(descriptions, function(value, index){
                        if (/Agency/.test(value)) {
                            value = value.replace(/Agency:/i, '').trim();
                            fields.push(value);
                            agency += value;
                        }
                        if (/Tools/.test(value)) {
                            var tool = value.replace(/Tools:/i, '').trim().split(',');
                            $.each(tool, function (key, valor) {
                                fields.push(valor.trim());
                                tools.push(valor.trim());
                            });
                        }
                        if (/URL/.test(value)) {
                            url = value.replace(/URL:/i, '').trim();
                        }
                    });
                    PortfolioFilters(fields);
                    fields = fields.join('#').replace(/[\/\. ]/g, '').replace(/#/g, ' ').toLowerCase();
                    $scope.projects.push({
                        id: id,
                        fields: fields,
                        url: url,
                        title: title,
                        thumb: thumb,
                        tools: tools.join(' / '),
                        agency: agency
                    });
                },
                StartPortfolio = function () {
                    // Needed variables

                    // Run Isotope
                    /*$container.isotope({
                        filter: '*',
                        layoutMode: 'masonry',
                        animationOptions: {
                            duration: 750,
                            easing: 'linear'
                        }
                    });*/

                    // Isotope Filter
                    /*$filter.find('a').click(function () {
                        var selector = $(this).attr('data-filter');
                        $container.isotope({
                            filter: selector,
                            animationOptions: {
                                duration: 750,
                                easing: 'linear',
                                queue: false
                            }
                        });
                        return false;
                    });*/
/*
                    // Copy categories to item classes
                    $filter.find('a').click(function () {
                        var currentOption = $(this).attr('data-filter');
                        $filter.find('a').removeClass('current');
                        $(this).addClass('current');
                    });
*/
                    /* ---------------------------------------------------------------------- */
                    /*	Fancybox
                     /* ---------------------------------------------------------------------- */
                    /*$container.find('.folio').fancybox({
                        'transitionIn': 'elastic',
                        'transitionOut': 'elastic',
                        'speedIn': 200,
                        'speedOut': 200,
                        'overlayOpacity': 0.6,
                        maxWidth	: 1200,
                        maxHeight	: 600,
                        fitToView	: false,
                        width		: '70%',
                        height		: '70%',
                    });*/
                },
                PortfolioFilters = function (filters) {
                    angular.forEach(filters, function(value, index){
                        var filter = value.replace(/[\/\. ]/g, '').toLowerCase(),
                            element = $scope.listFilters.indexOf(filter);
                        if (element < 0) {
                            $scope.filters.push({
                                filter: filter,
                                value: value
                            });
                            $scope.listFilters.push(filter);
                        }
                    });
                };
            $scope.$parent.toggle = false;
            $http.get('results.json').success(function(data) {
                BehanceProjectsCallback(data);
            });
        }
    ]
).directive('adipoli', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
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