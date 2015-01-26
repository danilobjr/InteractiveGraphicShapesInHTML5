$(function () {
    'use strict';

    var shapeFactory = shape.factory()
        .background({
            imgHtmlElementSelector: '.component-img',
            width: 900
        })
        .init();

    var _view = view();
    controller(_view, shapeFactory);
});
