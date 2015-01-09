$(function () {
    'use strict';

    // extensions

    fabric.Image.prototype.setWidthProportionally = function (newWidth) {
        var width = this.getWidth();
        var height = this.getHeight();
        var proportion = height / width;

        this.setWidth(newWidth);
        this.setHeight(newWidth * proportion);
    }

    var canvas = new fabric.Canvas('canvas');

    var componentImg = new fabric.Image($('.coponent-img').get(0), {
        'selectable': false,
    });

    componentImg.setWidthProportionally(500);
    canvas.setWidth(componentImg.getWidth());
    canvas.setHeight(componentImg.getHeight());
    canvas.add(componentImg);

    var rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'red',
        width: 50,
        height: 50
    });

    canvas.add(rect);

    // rect.set({ left: 150, top: 200 });

    // canvas.renderAll();
});
