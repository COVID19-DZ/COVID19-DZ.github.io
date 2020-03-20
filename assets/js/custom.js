/* ------------------------------------------------------------------------------
 *
 *  # Custom JS code
 *
 *  Place here all your custom js. Make sure it's loaded after app.js
 *
 * ---------------------------------------------------------------------------- */
var Gallery = function() {
    // Lightbox
    var _componentFancybox = function() {
        if (!$().fancybox) {
            console.warn('Warning - fancybox.min.js is not loaded.');
            return;
        }

        // Image lightbox
        $('[data-popup="lightbox"]').fancybox({
            padding: 3
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentFancybox();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Gallery.init();
});
