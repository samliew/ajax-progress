# ajax-progress

Shows a simple progress bar on the top of the page tracking the completion of multiple ajax requests

## Example Usage

    // 3 = show completion of any three ajax requests
    $(element).showAjaxProgress(3);
    
    // Override progress bar CSS
    $(element).showAjaxProgress(3, {
      'position': 'fixed',
      'top': 'initial',
      'bottom': '0'
    });
