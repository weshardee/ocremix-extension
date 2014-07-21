// inject the stylesheet
var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('styles.css');
document.head.appendChild(style);

// setup the iframe
var songID = window.location.pathname.split('/')[2].substr(3),
    url = $("#panel-download li a").eq(songID % 4).attr('href'),
    $iframe = $('<iframe>', {
        'src': url,
        'frameborder': 0,
        'class': 'iframe'
    }),
    $saveBtn = $('<a>', {
        'class': 'save',
        'href': url
    }),
    $iframeWrapper = $('<div>', {
        'class': 'player'
    }).prependTo('html').append($('.breadcrumb > div a'), $saveBtn, $iframe );

