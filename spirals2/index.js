import * as components from "https://designstem.github.io/framework/framework.js";
import * as utils from "https://designstem.github.io/framework/utils.js";

for (const name in components) {
  Vue.component(name, components[name])
}

new Vue({
  el: "#app",
  methods: { ...utils },
  template: `
  <div>
    <f-fetch-data url="./README.md">
      <f-theme slot-scope="data" theme="blue">
        <f-content-slides
          :content="data.value"
          style="height: 100vh;"
        />
      </f-theme>
    <f-fetch-data>
  </div>
  `
});
