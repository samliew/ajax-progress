(function(jQuery) {
    
    // Plugin options
    let maxTimeout = 30000;

    // Plugin CSS
    jQuery('body').append(`
        <style>
        .ajax-progressbar {
            position: fixed;
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
        let count = 0, max = num, activeTimeout = 0;
        maxTimeout = 1000 * num;

        jQuery(document).ajaxComplete(function() {
            progressbar.val(++count);
            if(count == max) {
                progressbar.remove();
                jQuery(document).unbind('ajaxComplete');
            }
            
            // Also remove progressbar only if there are no further ajax completions after X seconds
            if(activeTimeout) clearTimeout(activeTimeout);
            activeTimeout = setTimeout(() => { progressbar.remove(); }, 10000);
        });
        
        // Maximum time to wait for completion
        setTimeout(function() {
            progressbar.remove();
        }, maxTimeout, progressbar);
    }

})(jQuery);
