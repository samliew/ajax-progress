(function(jQuery) {
    
    // Plugin options
    const maxTimeout = 30000;

    // Plugin CSS
    jQuery('body').append(`
        <style>
        .ajax-progressbar {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            z-index: 999999;
            background-color: white;
            -webkit-appearance: none;
            appearance: none;
        }
        .ajax-progressbar::-webkit-progress-bar,
        .ajax-progressbar::-moz-progress-bar {
            background-color: white;
        }
        .ajax-progressbar::-webkit-progress-value {
            background-color: #F48024;
        }
        </style>`);

    jQuery.fn.showAjaxProgress = function(num, styles = {}) {

        const progressbar = jQuery(`<progress class="ajax-progressbar" value="0" max="${num}"></progress>`).css(styles).prependTo(this);
        let count = 0, max = num;

        jQuery(document).ajaxComplete(function() {
            progressbar.val(++count);
            if(count == max) progressbar.remove();
        });

        jQuery(document).ajaxStop(function() {
            progressbar.remove();
        });
        
        // Maximum time to wait for completion
        setTimeout(function() {
            progressbar.remove();
        }, maxTimeout, progressbar);
    }

})(jQuery);
