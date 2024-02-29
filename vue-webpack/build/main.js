'use strict';

var vue = require('vue');

var HelloTsx = (function () {
  return vue.createVNode("div", null, [vue.createTextVNode("Hello JSX")]);
});

var script = {
  setup() {
    return {};
  },
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", null, "Hello SFC"))
}

script.render = render;
script.__file = "src/HelloSfc.vue";

var App = function App() {
  return vue.createVNode("div", null, [vue.createVNode(HelloTsx, null, null), vue.createVNode(script, null, null)]);
};
vue.createApp(App).mount("#root");
