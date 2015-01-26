(function (exports) {
    'use strict';

    exports.controller = function (view, shapeFactory) {
        var _view = view;
        var _shapeFactory = shapeFactory;
        var _components = {};

        init();

        function init() {
            registerEvents();
        }

        function registerEvents() {
            _view.form.onSubmit(addShape);
        }

        function addShape(componentName) {
            var newShape = _shapeFactory.addRectangle();

            _components[componentName] = {
                shape: newShape,
                element: _view.form.createHiddenField(componentName)
            };
        }
    };
}(window));
