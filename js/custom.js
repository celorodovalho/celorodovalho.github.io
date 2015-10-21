Pace.on('done', function () {
    $('div.overlay').hide();
});
var BehanceProjectsCallback = function (data) {
        //if (data && data.http_code === 200) {}
        if (!data.length) {
            return false;
        } else {
            $.each(data, function (index, project) {
                AppendProject(project);
                if (index + 1 == data.length) {
                    StartPortfolio();
                }
            });
        }
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
        $.each(project.tools, function (index, value) {
            fields.push(value.title);
        });
        $.each(descriptions, function (index, value) {
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
        $('#portfolio-list').append(
            '<li class="' + fields + '" id="project' + id + '">' +
            '<a href="' + url + '" title="' + title + '" class="folio fancybox.iframe">' +
            '<img src="' + thumb + '" alt="">' +
            '<h2 class="title">' + title + '</h2>' +
            '<span class="categorie">' + tools.join(' / ') + '<br><strong>' + agency + '</strong>' + '</span>' +
            '</a>' +
            '</li>'
        );
    },
    StartPortfolio = function () {
        // Needed variables
        var $container = $('#portfolio-list');
        var $filter = $('#portfolio-filter');

        // Run Isotope
        $container.isotope({
            filter: '*',
            layoutMode: 'masonry',
            animationOptions: {
                duration: 750,
                easing: 'linear'
            }
        });

        // Isotope Filter
        $filter.find('a').click(function () {
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
        });

        // Portfolio image animation
        $container.find('img').adipoli({
            'startEffect': 'transparent',
            'hoverEffect': 'boxRandom',
            'imageOpacity': 0.6,
            'animSpeed': 100
        });

        // Copy categories to item classes
        $filter.find('a').click(function () {
            var currentOption = $(this).attr('data-filter');
            $filter.find('a').removeClass('current');
            $(this).addClass('current');
        });

        /* ---------------------------------------------------------------------- */
        /*	Fancybox
         /* ---------------------------------------------------------------------- */
        $container.find('.folio').fancybox({
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
        });
        clearInterval(ajaxRepeater.interval);
    },
    ajaxRepeater = {},
    PortfolioFilters = function (filters) {
        $.each(filters, function (index, value) {
            var filter = value.replace(/[\/\. ]/g, '').toLowerCase(),
                element = $('#portfolio-filter').find('[class="' + filter + '"]');
            if (!element.length) {
                $('#portfolio-filter').append(
                    '<li><a class="' + filter + '" href="#" data-filter=".' + filter + '">' + value + '</a></li>'
                );
            }
        });
    };
jQuery(document).ready(function () {
    $.ajax({
        url: 'results.json',
        type: 'GET',
        success: BehanceProjectsCallback
    });
    /*var pages = 0;
     ajaxRepeater.render = function () {
     pages++;
     var url = 'http://behance.net/v2/users/marcelorodovalho/projects?api_key=D5zGvHfQB4zF5bjD3sZD9EB3yt0TulEs&page=' + pages; //&callback=BehanceCallback
     $.ajax({
     url: url,
     type: 'GET',
     success: function (data) {
     if (data && data.responseText && data.responseText.indexOf('"http_code":200') > -1) {
     BehanceProjectsCallback(JSON.parse($(data.responseText).text()));
     } else {
     clearInterval(ajaxRepeater.interval);
     StartPortfolio();
     }
     }
     });
     };
     ajaxRepeater.interval = setInterval(ajaxRepeater.render, 2500);
     ajaxRepeater.render();*/

    /* ---------------------------------------------------------------------- */
    /*	Custom Functions
     /* ---------------------------------------------------------------------- */

    // Needed variables
    var $logo = $('#logo');

    // Show logo
    $('.tab-resume,.tab-portfolio,.tab-contact').click(function () {
        //$logo.fadeIn('slow');
    });
    // Hide logo
    $('.tab-profile').click(function () {
        //$logo.fadeOut('slow');
    });

    /* ---------------------------------------------------------------------- */
    /*	Menu
     /* ---------------------------------------------------------------------- */

    // Needed variables
    var $content = $("#content");

    // Run easytabs
    $content.easytabs({
        animate: true,
        updateHash: false,
        transitionIn: 'slideDown',
        transitionOut: 'slideUp',
        animationSpeed: 600,
        tabs: "> .menu > ul > li",
        tabActiveClass: 'active',
    });

    // Hover menu effect
    $content.find('.tabs li a').hover(
        function () {
            $(this).stop().animate({marginTop: "-7px"}, 200);
        }, function () {
            $(this).stop().animate({marginTop: "0px"}, 300);
        }
    );
    /* ---------------------------------------------------------------------- */
    /*	Portfolio
     /* ---------------------------------------------------------------------- */


    /* ---------------------------------------------------------------------- */
    /*	Contact Form
     /* ---------------------------------------------------------------------- */

    // Needed variables
    var $contactform = $('#contactform'),
        $success = 'Sua mensagem foi enviada! Obrigado!';

    $contactform.submit(function () {
        $.ajax({
            type: "POST",
            url: "php/contact.php",
            data: $(this).serialize(),
            success: function (msg) {
                if (msg == 'SEND') {
                    response = '<div class="success">' + $success + '</div>';
                }
                else {
                    response = '<div class="error">' + msg + '</div>';
                }
                // Hide any previous response text
                $(".error,.success").remove();
                // Show response message
                $contactform.prepend(response);
            }
        });
        return false;
    });
    /* ---------------------------------------------------------------------- */
    /*	Google Maps
     /* ---------------------------------------------------------------------- */

    // Needed variables
    var $map = $('#map'),
        $tabContactClass = ('tab-contact'),
        $address = 'Praça das Andorinhas, Águas Claras';

    $content.bind('easytabs:after', function (evt, tab, panel) {
        if (tab.hasClass($tabContactClass)) {
            $map.gMap({
                address: $address,
                zoom: 16,
                markers: [
                    {'address': $address}
                ]
            });
        }
    });
});