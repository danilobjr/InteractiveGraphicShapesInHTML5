(function (exports) {
    exports.view = function () {

        var _form = $('form');
        var _componentField = $('[name=component]');
        var _zoomInBtn = $('#zoomInBtn');
        var _zoomOutBtn = $('#zoomOutBtn');

        var _api = {
            form: {
                onSubmit: onSubmitForm,
                reset: resetForm,
                createHiddenField: createHiddenField
            },
            controls: {
                onClickZoomIn: onClickZoomIn,
                onClickZoomOut: onClickZoomOut
            }
        };

        return _api;

        ////////////

        function onSubmitForm(callback) {
            _form.on('submit', function (e) {
                e.preventDefault();

                var componentName = _componentField.val();
                callback(componentName);
                return false;
            });
        }

        function createHiddenField(identifier) {
            var hidden = $('<input>', {
                type: 'hidden',
                name: identifier
            });

            hidden.appendTo(_form);

            return hidden;
        }

        function resetForm() {
            _componentField.val('');
        }

        function onClickZoomIn(callback) {
            _zoomInBtn.on('click', function () {
                callback();
            });
        }

        function onClickZoomOut(callback) {
            _zoomOutBtn.on('click', function () {
                callback();
            });
        }
    };
}(window));
