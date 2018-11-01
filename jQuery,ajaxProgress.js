(function(jQuery) {

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

    jQuery.fn.showAjaxProgress = function(num) {

        const progressbar = jQuery(`<progress class="ajax-progressbar" value="0" max="${num}"></progress>`).appendTo('body');
        let count = 0, max = num;

        jQuery(document).ajaxComplete(function() {
            progressbar.val(++count);
            if(count == max) progressbar.remove();
        });
    }

})(jQuery);
