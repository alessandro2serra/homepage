import * as components from "./offline/components.js";
import * as utils from "./offline/utils.js";

for (const name in components) {
  Vue.component(name, components[name])
}

import Spiral from "./Spiral.js";
Vue.component("Spiral", Spiral);

// const Spiral = {
//   computed: {
//     something(){
//       return "dddLoloo";
//     }
//   },
//   methods: {
//     ok(){
//       return "DADAA";
//     }
//   },
//   template: `
//     <slot :value="something">
//       Bazooka pekaap {{something}}
//     </slot>
//   `
// };

//Vue.component("f-spiral", Spiral);

new Vue({

  el: "#app",
  data: () => ({
    dummy: 0,
  }),
  computed: {

    d3Line(){
      return d3.line().curve(d3.curveCardinal.tension(0));
    },
    
  },
  methods: { ...utils },
  template: `
  <div>
    <f-fetch-data url="./README.md">
      <f-theme slot-scope="data" theme="white">
        <f-content-slides
          :content="data.value"
          style="height: 100vh;"
        />
      </f-theme>
    </f-fetch-data>
  </div>
  `
});
