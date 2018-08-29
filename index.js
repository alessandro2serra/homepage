import Art from "./components/Art.js";
import Buttons from "https://rawgit.com/designstem/style/master/components/Buttons.js";

import cards from "./cards.js"

const unique = array => [...new Set(array)]
const flatten = array => [].concat(...array)

new Vue({
  components: { Buttons, Art },
  el: "#app",
  computed: {
    tags() {
      return unique(flatten(this.cards.map(c => c.tags)));
    }
  },
  data: () => ({
    al: 0.5,
    activeType: 0,
    types: ["All", "Math", "Biology", "Physics", "Geometry"],
    cards: cards,
    colors: [
      "var(--color-red)",
      "var(--color-blue-dark)",
      "var(--color-blue-medium)",
      "var(--color-purple)"
    ]
  }),
  methods: {
    go(url) {
      document.location = url;
    }
  },
  template: `
    <div style="overflow: hidden">
      <div class="headr">
        <div>
          <div class="slider">
            <label>Color opacity: <code>{{Math.floor(al * 100)}}%</code></label>
            <input type="range" v-model="al" min="0" max="1" step="0.01" />
          </div>
          <div class="arts">
            <div v-for="c in [8,4,3]" style="margin-left: -1.5rem"><Art :c="c" :al="al" /></div>
          </div>
          <h1>DesignSTEM</h1>
          <h2>Real sciences for future designers and craftsmen. Learn STEM topics in fun, visual and interactive way</h2>
        </div>
      </div>
      <div class="main">
        <div>
          <Buttons :buttons="types" v-model="activeType" />
          <br><br>
          <div class="cards">
            <div v-for="(card, i) in cards" class="card" :style="{
              background: card.disabled ? 'var(--color-gray-dark)' : colors[i % 5],
              opacity: card.disabled ? 0.3 : 1,
              cursor: card.disabled ? 'not-allowed' : 'pointer'
            }"
            @click="!card.disabled && card.url && go(card.url)"
            >
              <div>
                <h2>{{ card.title }}</h2>
                <p v-html="card.desc" />
              </div>
              <div class="tags">
                <div class="tag" v-for="tag in card.tags">{{tag}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div>
          <div>
            <p>Project is supported by European Social Fund</p>
            <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
          </div>
          <img src="esf_logo.svg" style="width:140px" />
        </div>
      </div>

    </div>
  `
});
