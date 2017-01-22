appModule
    .controller(
    'ResumeController',
    [
        '$scope',
        function ($scope) {
            // config
            $scope.$parent.toggle = false;
            $scope.timeline = [
                {
                    title: 'Analista Sênior',
                    period: '2016 - Atual',
                    company: 'Cast IT - Fábrica de Software - Ministério da Educação',
                    attribution: 'Análise e desenvolvimento de sistemas, como PAT, SIEV e SFC.' +
                    'Frameworks: AngularJS, Zend 2, Apigility.'
                },
                {
                    title: 'Arquiteto de Software/Desenvolvedor',
                    period: '2015 - Atual',
                    company: 'Profissão Estudo / OndeQ',
                    attribution: 'Análise e desenvolvimento de sistema. ' +
                    'Administração de banco de dados, análise de requisitos, testes e negócio. UX e líder de projeto.'
                },
                {
                    title: 'Programador Sênior/Analista Pleno',
                    period: '2014 - 2015',
                    company: 'Cast IT - Fábrica de Software - Instituto Nacional de Estudos e Pesquisas',
                    attribution: 'Desenvolvimento web para sistemas educacionais, como ENEM e Prêmio Inovação.' +
                    'Frameworks: Zend 1 e Zend 2.'
                },
                {
                    title: 'Programador Pleno',
                    period: '2013 - 2014',
                    company: 'Gestão TI – Fábrica de Software',
                    attribution: 'Desenvolvimento de sistemas web, para Ministério da Pesca e ICMBio.' +
                    'Frameworks: Zend 1'
                },
                {
                    title: 'Analista de Sistemas',
                    period: '2013',
                    company: 'Notoriun Tecnologia',
                    attribution: 'Desenvolvimento de sistemas GEO. Utilizando linguagem Node.js.'
                },
                {
                    title: 'Desenvolvedor Web',
                    period: '2010 - 2013',
                    company: 'Agências: Velum, Tool Interativa, Virtualiza Interativa',
                    attribution: 'Desenvolvimento de sites. Com CakePHP e Wordpress.'
                },
                {
                    title: 'Desenvolvedor Web/Soldado',
                    period: '2004 - 2009',
                    company: 'Força Aérea Brasileira',
                    attribution: 'Desenvolvimento de portais internos e pequenos sistemas de gerenciamento de pessoal.'
                }
            ];
            $scope.formation = [
                {
                    course: 'Análise e Desenvolvimento de Sistemas',
                    colleague: 'Faculdades UniCesumar',
                    year: '2014'
                },
                {
                    course: 'SCRUM',
                    colleague: 'TI Exames',
                    year: '2014',
                    description: 'Metodologia ágil para gestão e planejamento de projetos de software.'
                },
                {
                    course: 'HTML5 - CSS3',
                    colleague: 'e-Genial',
                    year: '2011',
                    description: 'Linguagem HTML5 e CSS3.'
                },
                {
                    course: 'SEO - Search Engine Optimization',
                    colleague: 'OlhóSeo',
                    year: '2011',
                    description: 'Otimização em Sistemas de Busca.'
                },
                {
                    course: 'PHP/MySQL',
                    colleague: 'Faculdades Anhanguera',
                    year: '2008',
                    description: 'Linguagem PHP, banco de dados MySQL.'
                },
                {
                    course: 'Web Designer',
                    colleague: 'Microlins',
                    year: '2005 - 2006',
                    description: 'HTML/CSS/JS, Dreamweaver, Fireworks, Photoshop e Flash.'
                }
            ];
            $scope.skills = [
                {
                    type: 'Especialidades',
                    skills: {
                        PHP: 7,
                        HTML5: 7,
                        CSS3: 7,
                        JS: 7
                    }
                },
                {
                    type: 'Frameworks/CMS',
                    skills: {
                        Symfony2: 6,
                        Laravel: 6,
                        AngularJS: 5,
                        Doctrine2: 5,
                        Zend2: 5,
                        Zend1: 4,
                        CakePHP: 6,
                        Wordpress: 6,
                        Magento: 3,
                        OpenCart: 3,
                        Joomla: 3,
                        'Ruby on Rails': 3,
                        jQuery: 7
                    }
                },
                {
                    type: 'Bancos de Dados',
                    skills: {
                        MySQL: 6,
                        PostgreSQL: 6,
                        Oracle: 4,
                        MongoDB: 4,
                        SQLite3: 3
                    }
                },
                {
                    type: 'Outros',
                    skills: {
                        Bootstrap: 7,
                        'Angular Material': 5,
                        'LESS, SASS': 6,
                        'GIT, SVN': 6,
                        'Corel Draw': 3,
                        Photoshop: 5,
                        Linux: 5,
                        'C#, Asp, .NET': 4,
                        Python: 3,
                        Grunt: 6,
                        Gulp: 6,
                        NodeJS: 6,
                        Bower: 6
                    }
                }
            ];
        }
    ]
);