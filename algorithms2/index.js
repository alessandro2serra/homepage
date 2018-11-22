
import * as components from "https://designstem.github.io/framework/framework.js";
import * as utils from "https://designstem.github.io/framework/utils.js";


for (const name in components) {
  Vue.component(name, components[name]);
}

Vue.prototype.$events = new Vue();

// import FContentSlides2 from "./FContentSlides.js";
//  Vue.component('FContentSlides2', FContentSlides2);

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
          :base="'1.5vh'"
        />
      </f-theme>
    </f-fetch-data>
  </div>
  `
});

