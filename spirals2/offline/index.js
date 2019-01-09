import * as components from "./framework.js";
import * as utils from "./utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  el: "#app",
  methods: { ...utils },
  template: `
  <f-theme>
    <f-content-editor style="--font-mono: monospace;" autosave-id="offline" />
  </f-theme>
  `
});
