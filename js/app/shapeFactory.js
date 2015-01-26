(function (exports) {
    'use strict';

    exports.shape.factory = function () {

        var _backgroundSettings = undefined;
        var _canvasElementId = 'canvas';
        var _canvas = undefined;

        var _factoryApi = {
            elementId: setCanvasElementId,
            background: setBackgroundSettings,
            init: init
        };

        return _factoryApi;

        ///////////////////

        function setCanvasElementId(elementId) {
            _canvasElementId = elementId;

            return _factoryApi;
        }

        function setBackgroundSettings(backgroundSettings) {
            _backgroundSettings = backgroundSettings;

            return _factoryApi;
        }

        function init() {
            _canvas = new fabric.Canvas(_canvasElementId);
            renderBackground();

            var _api = {
                addRectangle: addRectangle
            };

            return _api;

            ////////////

            function addRectangle(settings) {

                var defaultSettings = {
                    width: 50,
                    height: 50,
                    fill: '#D6D5EB',
                    // fill: 'white',
                    opacity: 0.8
                };

                settings = $.extend({}, defaultSettings, settings);

                var rectangle = new fabric.Rect(settings);

                _canvas.add(rectangle);

                rectangle.center();
                rectangle.setCoords();

                _canvas.renderAll();

                return rectangle;
            }
        }

        function renderBackground() {
            var imgElement = $(_backgroundSettings.imgHtmlElementSelector).get(0);

            var background = new fabric.Image(imgElement, {
                left: 0,
                top: 0,
                'selectable': false,
            });

            background.setWidthProportionally(_backgroundSettings.width);

            _canvas.setWidth(background.getWidth());
            _canvas.setHeight(background.getHeight());
            _canvas.add(background);
        }
    };
}(window));
