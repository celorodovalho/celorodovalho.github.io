appModule
    .controller(
    'PortfolioController',
    [
        '$scope',
        '$http',
        function ($scope, $http) {
            $scope.$parent.toggle = false;
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
                    });
                },
                AppendProject = function (data) {
                    var project = data,
                        fields = project.fields.concat(project.tags),
                        thumb = project.covers['230'],
                        title = project.name,
                        id = project.id,
                        descriptions = project.description.split('\n'),
                        url = project.www | project.covers['original'],
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
                        /*if (/URL/.test(value)) {
                            url = value.replace(/URL:/i, '').trim();
                        }*/
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
                        agency: agency,
                        type: project.www ? 'iframe' : 'image'
                    });
                },
                PortfolioFilters = function (filters) {
                    angular.forEach(filters, function(value, index){
                        var filter = value.replace(/[\/\. ]/g, '').toLowerCase(),
                            element = $scope.listFilters.indexOf(filter);
                        if (element < 0) {
                            $scope.filters.push({
                                filter: '.' + filter,
                                value: value
                            });
                            $scope.listFilters.push(filter);
                        }
                    });
                };
            $http.get('results.json').success(function(data) {
                BehanceProjectsCallback(data);
            });
        }
    ]
);