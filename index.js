import Art from "./components/Art.js";
import Buttons from "https://rawgit.com/designstem/framework/master/components/Buttons.js";

import cards from "./cards.js";

const unique = array => [...new Set(array)];
const flatten = array => [].concat(...array);

const flags = {
  England: '🇬🇧',
  Germany: '🇩🇪',
  Greece: '🇬🇷',
  Italy: '🇮🇹',
  Kuressaare: '🇪🇪',
  Netherlands: '🇳🇱',
  Portugal: '🇵🇹',
  Slovenia: '🇸🇮',
  Tartu: '🇪🇪',
}

new Vue({
  components: { Buttons, Art },
  el: "#app",
  computed: {
    // workshops() {
    //   return unique(flatten(this.cards.map(c => c.workshop))).sort((a, b) =>
    //     a.localeCompare(b)
    //   );
    // },
    workshops() {
      return [
        'Amsterdam workshop','Tartu presentation','Trento workshop',
        'Bragança workshop', 'No workshop'
      ]
    },
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
    flags: flags,
    al: 0.5,
    sTag: "All",
    dTag: "All",
    cards: cards,
    statuses: [
      { title: "Unknown", color: "#eaeaea" },
      { title: "Needs scenario", color: "#cacaca" },
      { title: "Has scenario", color: "var(--color-gray-medium)" },
      { title: "Early slides", color: "var(--color-blue-dark)" },
      { title: "Slides + interactives", color: "var(--color-purple)" },
      { title: "Tested, needs work", color: "var(--color-red)" }
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

          <!--h2>{{ dCards.length }} scenarios </h2-->
          
          <div v-for="workshop in workshops">
          <br />
          <h2>{{ workshop }}</h2>
          <div class="cards">
            <div v-for="(card, i) in dCards.filter(c => c.workshop == workshop)" class="card" :style="{
              background: statuses[card.status].color,
              cursor: !card.url ? 'not-allowed' : 'pointer',
            }"
            @click="!card.disabled && card.url && go(card.url)"
            >
              <div>
                <div style="margin: -0.5rem 0 1rem 0; color: white">{{ flags[card.country] }} {{ card.country }}</div>
                
                <div class="status">{{ statuses[card.status].title }}</div>
                                
                <h2 style="margin-top: 0.75rem">{{ card.title }}</h2>
                
                <!--p v-html="card.desc" style="margin-bottom: 0.5rem" /-->

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
        
      </div>

      <div style="width: 100vw; padding: 2rem;">

      <a id="breakdown"><h2>Breakdown by country</h2></a>
        <div v-for="c in Object.keys(flags)">
            <div style="display: flex; padding: 1rem; border-bottom: 1px solid var(--color-gray-medium);">
              <div style="flex: 2">
                {{ flags[c] }} {{ c }}
              </div>
              <div style="flex: 1">
                <h3>{{ dCards.filter(card => card.country == c).map(card => card.title).length }}</h3>
              </div>
              <div style="flex: 15">
                {{ dCards.filter(card => card.country == c).map(card => card.title).join(' ') }}
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
