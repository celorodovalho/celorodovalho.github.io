<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" ng-app="app">
<head>
    <title>Marcelo Rodovalho :: Web Developer</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="description" content="Programador PHP, NodeJS, Javascript. Atuação em desenvolvimento web, suporte a usuários e ministração de cursos de desenvolvimento de sistemas e sites." />
    <meta property="og:url" content="http://marcelorodovalho.com/">
    <meta property="og:title" content="Marcelo Rodovalho :: Desenvolvedor Web">
    <meta property="og:site_name" content="Marcelo Rodovalho">
    <meta property="og:description" content="Programador PHP, NodeJS, Javascript. Atuação em desenvolvimento web, suporte a usuários e ministração de cursos de desenvolvimento de sistemas e sites.">
    <meta property="og:image" content="http://marcelorodovalho.com/images/logo.jpg">
    <meta property="og:type" content="website">

    <link rel="stylesheet" type="text/css" href="css/reset.css"/>
    <link rel="stylesheet" type="text/css" href="js/vendor/animate.css/animate.min.css"/>
    <link rel="stylesheet" type="text/css" href="js/vendor/hover/css/hover-min.css"/>
    <link rel="stylesheet" type="text/css" href="css/app.css"/>
    <link rel="stylesheet" type="text/css" href="js/vendor/fancybox/source/jquery.fancybox.css"/>
    <link rel="stylesheet" type="text/css" href="js/vendor/angular-loading-bar/build/loading-bar.min.css"/>
<!--    <link rel="stylesheet" type="text/css" href="js/vendor/bootstrap/dist/css/bootstrap.min.css"/>-->
    <link rel="stylesheet" type="text/css"
          href="http://fonts.googleapis.com/css?family=Open+Sans:400,600,300,800,700,400italic|PT+Serif:400,400italic"/>
</head>
<body ng-controller="MainController">
    <!-- Container -->
    <div class="app" id="container" ui-view></div>
    <!-- /Container -->
<script src="js/vendor/jquery/dist/jquery.min.js"></script>
<script src="js/vendor/angular/angular.js"></script>
<script src="js/vendor/angular-animate/angular-animate.min.js"></script>
<script src="js/vendor/angular-route/angular-route.min.js"></script>
<script src="js/vendor/angular-ui-router/release/angular-ui-router.min.js"></script>
<script src="js/vendor/angular-loading-bar/build/loading-bar.min.js"></script>
<script src="js/vendor/isotope/jquery.isotope.min.js"></script>
<script src="js/vendor/angular-isotope/dist/angular-isotope.min.js"></script>
<script src="js/vendor/fancybox/source/jquery.fancybox.js"></script>
<script src="js/jquery.adipoli.min.js"></script>
<script src="http://maps.google.com/maps/api/js?key=AIzaSyDpl9_txzvSzCy0E37p38pTQyRuW3UfbmY"></script>
<script src="js/jquery.gmap.min.js"></script>


<script src="js/config.js"></script>
<script src="js/config.router.js"></script>
<script src="js/directives/adipoli.js"></script>
<script src="js/directives/fancybox.js"></script>
<script src="js/directives/map.js"></script>

<script src="js/controllers/Main.js"></script>
<script src="js/controllers/Profile.js"></script>
<script src="js/controllers/Resume.js"></script>
<script src="js/controllers/Portfolio.js"></script>
<script src="js/controllers/Contact.js"></script>

<!--    <script src="http://yandex.st/highlightjs/8.0/highlight.min.js"></script>-->
<!--    <script src="http://pc035860.github.io/angular-highlightjs/angular-highlightjs.min.js"></script>-->

<!--<script src="js/app.src.js"></script>-->
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-15455939-5', 'auto');
    ga('send', 'pageview');
</script>
</body>
</html>