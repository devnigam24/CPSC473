function hackOttersPage() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    thumbnails.forEach(hackedThumbClickHandler);
}

function hackedThumbClickHandler(thumb) {
    thumb.addEventListener('click', function(event) {
        event.preventDefault();
        alert('hacked');
        setDetails('img/otterssssss.png', 'otters hacked');
        return;
    });
}
