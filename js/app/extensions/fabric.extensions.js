fabric.Image.prototype.setWidthProportionally = function (newWidth) {
    var width = this.getWidth();
    var height = this.getHeight();
    var proportion = height / width;

    this.setWidth(newWidth);
    this.setHeight(newWidth * proportion);
};

fabric.Object.prototype.bindTo = function (htmlElement) {
    this.boundHtmlElement = htmlElement;

    htmlElement.setAttribute('data-left', this.getLeft());
    htmlElement.setAttribute('data-top', this.getTop());
    htmlElement.setAttribute('data-scale-y', this.getScaleY());
    htmlElement.setAttribute('data-scale-x', this.getScaleX());
    htmlElement.setAttribute('data-angle', this.getAngle());

    this.on('moving', this.updateBoundElement);
    this.on('scaling', this.updateBoundElement);
    this.on('resizing', this.updateBoundElement);
    this.on('rotating', this.updateBoundElement);
};

fabric.Object.prototype.updateBoundElement = function () {
    this.boundHtmlElement.setAttribute('data-left', this.getLeft());
    this.boundHtmlElement.setAttribute('data-top', this.getTop());
    this.boundHtmlElement.setAttribute('data-scale-y', this.getScaleY());
    this.boundHtmlElement.setAttribute('data-scale-x', this.getScaleX());
    this.boundHtmlElement.setAttribute('data-angle', this.getAngle());

    console.log(this.boundHtmlElement.getAttribute('data-top'));
};
