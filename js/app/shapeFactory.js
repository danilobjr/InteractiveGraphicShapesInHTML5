(function (exports) {
    'use strict';

    exports.shape.factory = function () {

        var _backgroundSettings = undefined;
        var _canvasElementId = 'canvas';
        var _canvas = undefined;
        var _zoomScale = 0.4;
        var _panActive = true;

        var defaultShapeSettings = {
            fill: '#D6D5EB',
            // fill: 'white',
            opacity: 0.8,
            borderColor: 'red',
            cornerColor: 'green',
            cornerSize: 6,
            transparentCorners: false
        };

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
                zoomIn: zoomIn,
                zoomOut: zoomOut,
                addRectangle: addRectangle
            };

            return _api;

            ////////////

            function zoomIn() {
                var currentZoomLevel = _canvas.getZoom();
                _canvas.setZoom(currentZoomLevel + _zoomScale);
            }

            function zoomOut() {
                var currentZoomLevel = _canvas.getZoom();
                _canvas.setZoom(currentZoomLevel - _zoomScale);
            }

            function addRectangle(settings) {

                var defaultRectangleSettings = {
                    width: 50,
                    height: 50
                };

                settings = $.extend({}, defaultShapeSettings, defaultRectangleSettings, settings);

                var rectangle = new fabric.Rect(settings);
                addToCanvas(rectangle);

                return rectangle;
            }

            function addToCanvas(shape) {
                _canvas.add(shape);

                shape.center();
                shape.setCoords();

                _canvas.renderAll();
            }
        }

        function renderBackground() {
            var imgElement = $(_backgroundSettings.imgHtmlElementSelector).get(0);

            fabric.Image.fromURL(imgElement.src, function(background) {
                background.selectable = false;
                background.setWidthProportionally(_backgroundSettings.width);

                _canvas.setWidth(background.getWidth());
                _canvas.setHeight(background.getHeight());

                _canvas.add(background);
            });
        }
    };
}(window));
