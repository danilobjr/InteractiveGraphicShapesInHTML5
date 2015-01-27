$(function () {
    'use strict';

    var _canvas = shape.factory()
        .background({
            imgHtmlElementSelector: '.component-img',
            width: 900
        })
        .init();

    var _view = view();
    controller(_view, _canvas);
});
