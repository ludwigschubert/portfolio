var SHUFFLEJS = (function( $ ) {
  'use strict';

  var $grid = $('.projects'),
      $filterOptions = $('.filters'),
      $sizer = $grid.find('.shuffle-sizer'),

  init = function() {

    // None of these need to be executed synchronously
    setTimeout(function() {
      // listen();
      setupFilters();
    }, 100);

    // // You can subscribe to custom events.
    // // shrink, shrunk, filter, filtered, sorted, load, done
    // $grid.on('loading.shuffle done.shuffle shrink.shuffle shrunk.shuffle filter.shuffle filtered.shuffle sorted.shuffle layout.shuffle', function(evt, shuffle) {
    //   // Make sure the browser has a console
    //   if ( window.console && window.console.log && typeof window.console.log === 'function' ) {
    //     console.log( 'Shuffle:', evt.type );
    //   }
    // });

    // instantiate the plugin
    $grid.shuffle({
      itemSelector: '.project-item',
      sizer: $sizer
    });

    // Destroy it! o_O
    // $grid.shuffle('destroy');
  },

  // Set up button clicks
  setupFilters = function() {
    var $btns = $('.filter');
    $btns.on('click', function() {
      var $this = $(this),
          isActive = $this.hasClass( 'active' ),
          group = isActive ? 'all' : $this.data('group');

      // Hide current label, show current label in title
      if ( !isActive ) {
        $('.filters .active').removeClass('active');
      }

      $this.toggleClass('active');

      // Filter elements
      $grid.shuffle( 'shuffle', group );
    });

    $btns = null;
  };

  return {
    init: init
  };
}( jQuery ));



$(document).ready(function() {
  SHUFFLEJS.init();
});
