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
    <link rel="stylesheet" type="text/css" href="css/app.css"/>
    <link rel="stylesheet" type="text/css" href="css/fancybox.css"/>
    <link rel="stylesheet" type="text/css" href="js/vendor/angular-loading-bar/build/loading-bar.min.css"/>
<!--    <link rel="stylesheet" type="text/css" href="js/vendor/bootstrap/dist/css/bootstrap.min.css"/>-->
    <link rel="stylesheet" type="text/css"
          href="http://fonts.googleapis.com/css?family=Open+Sans:400,600,300,800,700,400italic|PT+Serif:400,400italic"/>
</head>
<body ng-controller="AppController">
    <!-- Container -->
    <div class="app" id="container" ui-view></div>
    <!-- /Container -->
<!--<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>-->
<!--<script type="text/javascript" src="js/jquery.browser.min.js"></script>-->
<!--<script type="text/javascript" src="js/jquery.easytabs.min.js"></script>-->
<!--<script type="text/javascript" src="js/respond.min.js"></script>-->
<!--<script type="text/javascript" src="js/jquery.easytabs.min.js"></script>-->
<!--<script type="text/javascript" src="js/jquery.adipoli.min.js"></script>-->
<!--<script type="text/javascript" src="js/jquery.fancybox-1.3.4.pack.js"></script>-->
<!--<script type="text/javascript" src="js/jquery.fancybox.pack.js"></script>-->
<!--<script type="text/javascript" src="js/jquery.isotope.min.js"></script>-->
<!--<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>-->
<!--<script type="text/javascript" src="js/jquery.gmap.min.js"></script>-->
<!--<script type="text/javascript" src="http://projetos.lucaspeperaio.com.br/ajax-cross-domain/jquery.xdomainajax.js"></script>-->
<!--<script type="text/javascript" src="js/custom.js"></script>-->
<!--<script type="text/javascript" src="js/pace.min.js"></script>-->
<script src="js/vendor/jquery/dist/jquery.min.js"></script>
<script src="js/vendor/angular/angular.js"></script>
<script src="js/vendor/angular-animate/angular-animate.min.js"></script>
<script src="js/vendor/angular-route/angular-route.min.js"></script>
<script src="js/vendor/angular-cookies/angular-cookies.min.js"></script>
<script src="js/vendor/angular-resource/angular-resource.min.js"></script>
<script src="js/vendor/angular-sanitize/angular-sanitize.min.js"></script>
<script src="js/vendor/angular-touch/angular-touch.min.js"></script>
<script src="js/vendor/angular-ui-router/release/angular-ui-router.min.js"></script>
<script src="js/vendor/ngstorage/ngStorage.min.js"></script>
<script src="js/vendor/angular-ui-utils/ui-utils.min.js"></script>
<script src="js/vendor/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
<script src="js/vendor/oclazyload/dist/ocLazyLoad.min.js"></script>
<script src="js/vendor/angular-translate/angular-translate.min.js"></script>
<script src="js/vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js"></script>
<script src="js/vendor/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js"></script>
<script src="js/vendor/angular-translate-storage-local/angular-translate-storage-local.min.js"></script>
<script src="js/vendor/angular-loading-bar/build/loading-bar.min.js"></script>
<script src="js/vendor/isotope/jquery.isotope.min.js"></script>
<script src="js/vendor/angular-isotope/dist/angular-isotope.min.js"></script>
<script src="js/vendor/angular-fancybox-plus/js/angular-fancybox-plus.js"></script>


<script src="js/config.js"></script>
<script src="js/config.lazyload.js"></script>
<script src="js/config.router.js"></script>

<script src="js/controllers/Main.js"></script>
<script src="js/controllers/Profile.js"></script>
<script src="js/controllers/Resume.js"></script>
<script src="js/controllers/Portfolio.js"></script>
<script src="js/controllers/Contact.js"></script>

<!--    <script src="http://yandex.st/highlightjs/8.0/highlight.min.js"></script>-->
<!--    <script src="http://pc035860.github.io/angular-highlightjs/angular-highlightjs.min.js"></script>-->

<script src="js/directives/setnganimate.js"></script>
<script src="js/directives/ui-butterbar.js"></script>
<script src="js/directives/ui-focus.js"></script>
<script src="js/directives/ui-fullscreen.js"></script>
<script src="js/directives/ui-jq.js"></script>
<script src="js/directives/ui-module.js"></script>
<script src="js/directives/ui-nav.js"></script>
<script src="js/directives/ui-scroll.js"></script>
<script src="js/directives/ui-shift.js"></script>
<script src="js/directives/ui-toggleclass.js"></script>

<script src="js/services/ui-load.js"></script>

<script src="js/filters/fromNow.js"></script>


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