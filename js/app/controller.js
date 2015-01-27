(function (exports) {
    'use strict';

    exports.controller = function (view, canvas) {
        var _view = view;
        var _canvas = canvas;
        // var _components = {};

        init();

        function init() {
            registerEvents();
        }

        function registerEvents() {
            _view.form.onSubmit(addShape);
            _view.controls.onClickZoomIn(canvasZoomIn);
            _view.controls.onClickZoomOut(canvasZoomOut);
        }

        function addShape(componentName) {
            var hiddenField = _view.form.createHiddenField(componentName);

            var newShape = _canvas
                .addRectangle({
                    fill: 'red'
                })
                .bindTo(hiddenField);

            _view.form.reset();

            // _components[componentName] = {
            //     shape: newShape,
            //     element: _view.form.createHiddenField(componentName)
            // };
        }

        function canvasZoomIn() {
            canvas.zoomIn();
        }

        function canvasZoomOut() {
            canvas.zoomOut();
        }
    };
}(window));
