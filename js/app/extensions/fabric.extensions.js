fabric.Image.prototype.setWidthProportionally = function (newWidth) {
    var width = this.getWidth();
    var height = this.getHeight();
    var proportion = height / width;

    this.setWidth(newWidth);
    this.setHeight(newWidth * proportion);
};

fabric.Object.prototype.bindTo = function (htmlElement) {
    this.boundHtmlElement = htmlElement;

    this.boundHtmlElement.attr('data-left', this.getLeft());
    this.boundHtmlElement.attr('data-top', this.getTop());
    this.boundHtmlElement.attr('data-scale-y', this.getScaleY());
    this.boundHtmlElement.attr('data-scale-x', this.getScaleX());
    this.boundHtmlElement.attr('data-angle', this.getAngle());

    this.on('moving', this.updateBoundElement);
    this.on('scaling', this.updateBoundElement);
    this.on('resizing', this.updateBoundElement);
    this.on('rotating', this.updateBoundElement);
};

fabric.Object.prototype.updateBoundElement = function () {
    this.boundHtmlElement.attr('data-left', this.getLeft());
    this.boundHtmlElement.attr('data-top', this.getTop());
    this.boundHtmlElement.attr('data-scale-y', this.getScaleY());
    this.boundHtmlElement.attr('data-scale-x', this.getScaleX());
    this.boundHtmlElement.attr('data-angle', this.getAngle());

    console.log(this.boundHtmlElement.data().top);
};
