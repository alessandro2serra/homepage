import * as components from "https://designstem.github.io/framework/framework.js";
import * as utils from "https://designstem.github.io/framework/utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

import FCard from "./FCard.js"
Vue.component('FCard', FCard)

new Vue({
  el: "#app",
  methods: utils,
  template: `
  <div>
    <f-fetch-data url="./README.md">
      <f-theme slot-scope="data" theme="white">
        <f-content-editor
          style="--emphasis: var(--yellow)"
          :content="data.value"
        />
      </f-theme>
    </f-fetch-data>
  </div>
  `
});
