(function (ReactDOM, React) {
    'use strict';

    var App = (function () {
        return React.createElement("h1", null, "Hello world!");
    });

    ReactDOM.render(React.createElement(App, null), document.getElementById("root"));

})(ReactDOM, React);
