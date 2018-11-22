
import * as components from "https://designstem.github.io/framework/framework.js";
import * as utils from "https://designstem.github.io/framework/utils.js";


for (const name in components) {
  Vue.component(name, components[name]);
}

Vue.prototype.$events = new Vue();

 import TextRepeater from "./components/TextRepeater.js";
Vue.component('TextRepeater', TextRepeater);

Vue.config.devtools = true;

new Vue({
  el: "#app",
  methods: utils,
  template: `
  <div>
    <f-fetch-data url="./README.md">
      <f-theme slot-scope="data">
        <f-content-slides
          style="--emphasis: var(--blue);"
          :content="data.value"
          :index="0"
          :base="'1.75vh'"
        />
      </f-theme>
    </f-fetch-data>

    <div style="position:absolute; top:45vh; left:0; right:0; width:100%; display:flex; justify-content:space-between; z-index:100; padding:0.1rem;" >
      <kbd @click="send('prev');" style="cursor:pointer;">&lsaquo;</kbd>
      <kbd @click="send('next');" style="cursor:pointer;">&rsaquo;</kbd>
    </div>

  </div>
  `
});

