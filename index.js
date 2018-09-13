import Art from "./components/Art.js";
import Buttons from "https://rawgit.com/designstem/style/master/components/Buttons.js";

import cards from "./cards.js";

const unique = array => [...new Set(array)];
const flatten = array => [].concat(...array);

new Vue({
  components: { Buttons, Art },
  el: "#app",
  computed: {
    sTags() {
      return unique(flatten(this.cards.map(c => c.sTags))).sort((a, b) =>
        a.localeCompare(b)
      );
    },
    dTags() {
      return unique(flatten(this.cards.map(c => c.dTags))).sort((a, b) =>
        a.localeCompare(b)
      );
    },
    sCards() {
      if (this.sTag !== "All") {
        return this.cards.filter(c => {
          return c.sTags.findIndex(t => t == this.sTag) > -1;
        });
      }
      return this.cards;
    },
    dCards() {
      if (this.dTag !== "All") {
        return this.sCards.filter(c => {
          return c.dTags.findIndex(t => t == this.dTag) > -1;
        });
      }
      return this.sCards;
    }
  },
  data: () => ({
    al: 0.5,
    sTag: "All",
    dTag: "All",
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
          <!--div class="slider">
            <label>Color opacity: <code>{{Math.floor(al * 100)}}%</code></label>
            <input type="range" v-model="al" min="0" max="1" step="0.01" />
          </div-->
          <div class="arts">
            <div v-for="c in [8,4,3]" style="margin-left: -1.5rem"><Art :c="c" :al="al" /></div>
          </div>
          <h1>DesignSTEM</h1>
          <h2>Science, Technology, Engineering and Math for future designers and craftsmen. Learn STEM topics in fun, visual and interactive way</h2>
        </div>
      </div>
      <div class="main">
        <div>
          <div style="display: flex">
            <div style="flex: 1;">
              <h3>Select a STEM topic</h3>
              <div style="display: flex; flex-wrap: wrap;">
                <a :style="{color: sTag == 'All' ? 'var(--color-red)': '', borderColor: sTag == 'All' ? 'var(--color-red)': ''}" style="font-weight: 600; cursor: pointer; margin: 0 5px 5px 0; display: block" @click="sTag = 'All'">All topics</a>
                <a :style="{color: sTag == tag ? 'var(--color-red)': '', borderColor: sTag == tag ? 'var(--color-red)': ''}" style="font-weight: 600; cursor: pointer; margin: 0 10px 5px 0; display: block" v-for="tag in sTags" @click="sTag = tag">{{tag}}</a>
               </div>
            </div>
            <div style="flex: 1; margin-left: 0.5rem;">
              <h3>Select a design topic</h3>
              <div style="display: flex; flex-wrap: wrap;">
                <a :style="{color: dTag == 'All' ? 'var(--color-red)': '', borderColor: dTag == 'All' ? 'var(--color-red)': ''}" style="font-weight: 600; cursor: pointer; margin: 0 5px 5px 0; display: block" @click="dTag = 'All'">All topics</a>
                <a :style="{color: dTag == tag ? 'var(--color-red)': '', borderColor: dTag == tag ? 'var(--color-red)': ''}" style="font-weight: 600; cursor: pointer; margin: 0 10px 5px 0; display: block" v-for="tag in dTags" @click="dTag = tag">{{tag}}</a>
              </div>
            </div>
          </div>
          <br><br>
          <div class="cards">
            <div v-for="(card, i) in dCards" class="card" :style="{
              background: card.disabled ? 'var(--color-gray-dark)' : card.testable ? 'var(--color-red)' : 'var(--color-blue-medium)',
              opacity: card.disabled ? 0.3 : 1,
              cursor: card.disabled ? 'not-allowed' : 'pointer'
            }"
            @click="!card.disabled && card.url && go(card.url)"
            >
              <div>
                <h2>{{ card.title }}</h2>
                <p v-html="card.desc" style="margin-bottom: 0.5rem" />
                <div class="tags" style="line-height: 1.5em">
                  <div class="tag" v-for="tag in card.sTags">{{tag}}</div>
                  <div class="tag" v-for="tag in card.dTags">{{tag}}</div>
                </div>
              </div>
              <div style="line-height: 1.5em">
                <div v-for="tool in card.tools">
                  <a v-if="tool.url" style="color: white; border-color: white" :href="tool.url">{{tool.title}}</a>
                  <div v-else style="color: rgba(255,255,255,0.5);">{{tool.title}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div>
          <div>
            <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
          </div>
          <img src="erasmus_logo.svg" style="width:240px" />
        </div>
      </div>

    </div>
  `
});
