var SHUFFLEJS = (function( $ ) {
  'use strict';

  var $grid = $('.projects'),
      $filterOptions = $('.filters'),
      $sizer = $grid.find('.shuffle-sizer'),

  init = function() {

    // No need to execute setupFilters synchronously... the DOM shall display :D
    setTimeout(function() {
      setupFilters();
    }, 100);

    // instantiates the plugin
    $grid.shuffle({
      itemSelector: '.project-item',
      sizer: $sizer
    });

    // Destroy it! o_O (Don't in production...)
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
