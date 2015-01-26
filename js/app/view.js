(function (exports) {
    exports.view = function () {

        var _form = $('form');
        var _componentField = $('[name=component]');

        var _api = {
            form: {
                onSubmit: onSubmitForm,
                createHiddenField: createHiddenField
            }
        };

        return _api;

        ////////////

        function onSubmitForm(callback) {
            _form.on('submit', function (e) {
                e.preventDefault();
                debugger;
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
    };
}(window));
