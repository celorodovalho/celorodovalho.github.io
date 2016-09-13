// lazyload config

angular.module('app')
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  .constant('JQ_CONFIG', {
      easyPieChart:   [   'js/vendor/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'],
      sparkline:      [   'js/vendor/jquery.sparkline/dist/jquery.sparkline.retina.js'],
      plot:           [   'js/vendor/flot/jquery.flot.js',
                          'js/vendor/flot/jquery.flot.pie.js', 
                          'js/vendor/flot/jquery.flot.resize.js',
                          'js/vendor/flot.tooltip/js/jquery.flot.tooltip.js',
                          'js/vendor/flot.orderbars/js/jquery.flot.orderBars.js',
                          'js/vendor/flot-spline/js/jquery.flot.spline.js'],
      moment:         [   'js/vendor/moment/moment.js'],
      screenfull:     [   'js/vendor/screenfull/dist/screenfull.min.js'],
      slimScroll:     [   'js/vendor/slimscroll/jquery.slimscroll.min.js'],
      sortable:       [   'js/vendor/html5sortable/jquery.sortable.js'],
      nestable:       [   'js/vendor/nestable/jquery.nestable.js',
                          'js/vendor/nestable/jquery.nestable.css'],
      filestyle:      [   'js/vendor/bootstrap-filestyle/src/bootstrap-filestyle.js'],
      slider:         [   'js/vendor/bootstrap-slider/bootstrap-slider.js',
                          'js/vendor/bootstrap-slider/bootstrap-slider.css'],
      chosen:         [   'js/vendor/chosen/chosen.jquery.min.js',
                          'js/vendor/bootstrap-chosen/bootstrap-chosen.css'],
      TouchSpin:      [   'js/vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
                          'js/vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],
      wysiwyg:        [   'js/vendor/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                          'js/vendor/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
      dataTable:      [   'js/vendor/datatables/media/js/jquery.dataTables.min.js',
                          'js/vendor/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
                          'js/vendor/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
      vectorMap:      [   'js/vendor/bower-jvectormap/jquery-jvectormap-1.2.2.min.js', 
                          'js/vendor/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                          'js/vendor/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
                          'js/vendor/bower-jvectormap/jquery-jvectormap-1.2.2.css'],
      footable:       [   'js/vendor/footable/dist/footable.all.min.js',
                          'js/vendor/footable/css/footable.core.css'],
      fullcalendar:   [   'js/vendor/moment/moment.js',
                          'js/vendor/fullcalendar/dist/fullcalendar.min.js',
                          'js/vendor/fullcalendar/dist/fullcalendar.css',
                          'js/vendor/fullcalendar/dist/fullcalendar.theme.css'],
      daterangepicker:[   'js/vendor/moment/moment.js',
                          'js/vendor/bootstrap-daterangepicker/daterangepicker.js',
                          'js/vendor/bootstrap-daterangepicker/daterangepicker-bs3.css'],
      tagsinput:      [   'js/vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
                          'js/vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.css']
                      
    }
  )
  // oclazyload config
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
      // We configure ocLazyLoad to use the lib script.js as the async loader
      $ocLazyLoadProvider.config({
          debug:  true,
          events: true,
          modules: [
              {
                  name: 'ngGrid',
                  files: [
                      'js/vendor/ng-grid/build/ng-grid.min.js',
                      'js/vendor/ng-grid/ng-grid.min.css',
                      'js/vendor/ng-grid/ng-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.grid',
                  files: [
                      'js/vendor/angular-ui-grid/ui-grid.min.js',
                      'js/vendor/angular-ui-grid/ui-grid.min.css',
                      'js/vendor/angular-ui-grid/ui-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.select',
                  files: [
                      'js/vendor/angular-ui-select/dist/select.min.js',
                      'js/vendor/angular-ui-select/dist/select.min.css'
                  ]
              },
              {
                  name:'angularFileUpload',
                  files: [
                    'js/vendor/angular-file-upload/angular-file-upload.min.js'
                  ]
              },
              {
                  name:'ui.calendar',
                  files: ['js/vendor/angular-ui-calendar/src/calendar.js']
              },
              {
                  name: 'ngImgCrop',
                  files: [
                      'js/vendor/ngImgCrop/compile/minified/ng-img-crop.js',
                      'js/vendor/ngImgCrop/compile/minified/ng-img-crop.css'
                  ]
              },
              {
                  name: 'angularBootstrapNavTree',
                  files: [
                      'js/vendor/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                      'js/vendor/angular-bootstrap-nav-tree/dist/abn_tree.css'
                  ]
              },
              {
                  name: 'toaster',
                  files: [
                      'js/vendor/angularjs-toaster/toaster.js',
                      'js/vendor/angularjs-toaster/toaster.css'
                  ]
              },
              {
                  name: 'textAngular',
                  files: [
                      'js/vendor/textAngular/dist/textAngular-sanitize.min.js',
                      'js/vendor/textAngular/dist/textAngular.min.js'
                  ]
              },
              {
                  name: 'vr.directives.slider',
                  files: [
                      'js/vendor/venturocket-angular-slider/build/angular-slider.min.js',
                      'js/vendor/venturocket-angular-slider/build/angular-slider.css'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular',
                  files: [
                      'js/vendor/videogular/videogular.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.controls',
                  files: [
                      'js/vendor/videogular-controls/controls.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.buffering',
                  files: [
                      'js/vendor/videogular-buffering/buffering.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.overlayplay',
                  files: [
                      'js/vendor/videogular-overlay-play/overlay-play.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.poster',
                  files: [
                      'js/vendor/videogular-poster/poster.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.imaads',
                  files: [
                      'js/vendor/videogular-ima-ads/ima-ads.min.js'
                  ]
              },
              {
                  name: 'xeditable',
                  files: [
                      'js/vendor/angular-xeditable/dist/js/xeditable.min.js',
                      'js/vendor/angular-xeditable/dist/css/xeditable.css'
                  ]
              },
              {
                  name: 'smart-table',
                  files: [
                      'js/vendor/angular-smart-table/dist/smart-table.min.js'
                  ]
              }
          ]
      });
  }])
;
