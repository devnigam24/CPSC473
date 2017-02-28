var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var THUMBNAIL_CLASS_SELECTOR = '[class="thumbnail-image"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;
var TITLE_ARRAY = ['Staying Alive', 'How Deep Is Your Love', 'You Should Be Dancing', 'Night Fever', 'To Love Somebody'];

function setDetails(imageUrl, titleText) {
    'use strict';

    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title')
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    thumb.addEventListener('click', function(event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}

function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails() {
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
    'use strict';
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function() {
        frame.classList.remove(TINY_EFFECT_CLASS);
    }, 50);
}

function addKeyPressHandler() {
    'use strict';
    document.body.addEventListener('keyup', function(event) {
        event.preventDefault();
        if (event.keyCode === ESC_KEY) {
            hideDetails();
        } else {
            switch (event.keyCode) {
                case 49:
                    setFrameAsPerKeyPressed(1);
                    break;
                case 50:
                    setFrameAsPerKeyPressed(2);
                    break;
                case 51:
                    setFrameAsPerKeyPressed(3);
                    break;
                case 52:
                    setFrameAsPerKeyPressed(4);
                    break;
                case 53:
                    setFrameAsPerKeyPressed(5);
                    break;
                case 54:
                    setFrameAsPerKeyPressed(6);
                    break;
                case 55:
                    setFrameAsPerKeyPressed(7);
                    break;
                default:
                    setFrameAsPerKeyPressed(0);
                    break;
            }
        }
    });
}

function setFrameAsPerKeyPressed(asciiOfThatKey) {
    'use strict';
    var thumbnailImageArray = [].slice.call(document.querySelectorAll(THUMBNAIL_CLASS_SELECTOR));
    for (var i = 0; i < thumbnailImageArray.length; i++) {
        if (thumbnailImageArray[i].alt === asciiOfThatKey + '') {
            SetDetailKey(i);
        }
    }
}

function SetDetailKey(selection) {
    document.querySelectorAll(THUMBNAIL_LINK_SELECTOR)[selection].click();
}

function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
}

initializeEvents();
