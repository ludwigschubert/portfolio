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
      // setupSorting();
      // setupSearching();
    }, 100);

    // You can subscribe to custom events.
    // shrink, shrunk, filter, filtered, sorted, load, done
    $grid.on('loading.shuffle done.shuffle shrink.shuffle shrunk.shuffle filter.shuffle filtered.shuffle sorted.shuffle layout.shuffle', function(evt, shuffle) {
      // Make sure the browser has a console
      if ( window.console && window.console.log && typeof window.console.log === 'function' ) {
        console.log( 'Shuffle:', evt.type );
      }
    });

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

  // Re layout shuffle when images load. This is only needed
  // below 768 pixels because the .picture-item height is auto and therefore
  // the height of the picture-item is dependent on the image
  // I recommend using imagesloaded to determine when an image is loaded
  // but that doesn't support IE7
  // listen = function() {
  //   var debouncedLayout = $.throttle( 300, function() {
  //     $grid.shuffle('update');
  //   });
  // 
  //   // Get all images inside shuffle
  //   $grid.find('img').each(function() {
  //     var proxyImage;
  // 
  //     // Image already loaded
  //     if ( this.complete && this.naturalWidth !== undefined ) {
  //       return;
  //     }
  // 
  //     // If none of the checks above matched, simulate loading on detached element.
  //     proxyImage = new Image();
  //     $( proxyImage ).on('load', function() {
  //       $(this).off('load');
  //       debouncedLayout();
  //     });
  // 
  //     proxyImage.src = this.src;
  //   });
  // 
  //   // Because this method doesn't seem to be perfect.
  //   setTimeout(function() {
  //     debouncedLayout();
  //   }, 500);
  // };

  return {
    init: init
  };
}( jQuery ));



$(document).ready(function() {
  SHUFFLEJS.init();
});


// Shuffleable project grid
// Shuffle.options = {
//   // group: ALL_ITEMS, // Initial filter group.
//   speed: 250, // Transition/animation speed (milliseconds).
//   easing: 'ease-out', // CSS easing function to use.
//   // itemSelector: '.project-item', // e.g. '.picture-item'.
//   // sizer: null, // Sizer element. Use an element to determine the size of columns and gutters.
//   // gutterWidth: 0, // A static number or function that tells the plugin how wide the gutters between columns are (in pixels).
//   // columnWidth: 0, // A static number or function that returns a number which tells the plugin how wide the columns are (in pixels).
//   // delimeter: null, // If your group is not json, and is comma delimeted, you could set delimeter to ','.
//   // buffer: 0, // Useful for percentage based heights when they might not always be exactly the same (in pixels).
//   // columnThreshold: HAS_COMPUTED_STYLE ? 0.01 : 0.1, // Reading the width of elements isn't precise enough and can cause columns to jump between values.
//   // initialSort: null, // Shuffle can be initialized with a sort object. It is the same object given to the sort method.
//   // throttle: throttle, // By default, shuffle will throttle resize events. This can be changed or removed.
//   // throttleTime: 300, // How often shuffle can be called on resize (in milliseconds).
//   // sequentialFadeDelay: 150, // Delay between each item that fades in when adding items.
//   // supported: CAN_TRANSITION_TRANSFORMS // Whether to use transforms or absolute positioning.
// };
// 
// $(document).ready(function() {
//   var $grid = $('.projects'),
//       $sizer = $grid.find('.project-item');
// 
//   $grid.shuffle({
//     itemSelector: '.project-item',
//     sizer: $sizer
//   });
//   
//   $grid.on('done.shuffle', function() {
//     console.log('Finished initializing shuffle!');
//   });
// });

