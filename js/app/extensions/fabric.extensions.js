fabric.Image.prototype.setWidthProportionally = function (newWidth) {
    var width = this.getWidth();
    var height = this.getHeight();
    var proportion = height / width;

    this.setWidth(newWidth);
    this.setHeight(newWidth * proportion);
};
