import Art from "./components/Art.js";
import { parseSheet } from "https://designstem.github.io/framework/utils.js";


const unique = array => [...new Set(array)];
const flatten = array => [].concat(...array);

//import cards from "./cards.js";

const Percentage = {
  props: ['percentage'],
  template: `
  <div style="
    position: relative;
    height: 1.5rem;
    color: white;
    padding: 0.1rem 0.4rem;
    border-radius: 3px;
    font-size: 0.8rem;
    text-transform: uppercase;
    border: 2px solid rgba(255,255,255,0.1);
  ">
    <div :style="{
      position: 'absolute',
      width: percentage + '%',
      top: '0px',
      bottom: '0px',
      left: '0px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      padding: '0 0.3rem',
      borderRight: '2px solid rgba(255,255,255,1)',
      //background: 'rgba(255,255,255,0.2)'
    }">D</div>
    <div :style="{
      position: 'absolute',
      width: (100 - percentage) + '%',
      top: '0px',
      bottom: '0px',
      right: '0px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      padding: '0 0.35rem',
      background: 'rgba(0,0,0,0.2)',
      justifyContent: 'flex-end'
    }">S</div>
  </div>
  `
}

const flags = {
  England: '🇬🇧',
  Germany: '🇩🇪',
  Greece: '🇬🇷',
  Italy: '🇮🇹',
  Kuressaare: '🇪🇪🇸🇲',
  Netherlands: '🇳🇱',
  Portugal: '🇵🇹',
  Slovenia: '🇸🇮',
  Tartu: '🇪🇪🇵🇱',
  Finland: '🇫🇮'
}

const Card = {
  props: ['card', 'statuses','flags'],
  components: { Percentage },
  methods: {
    go(url) {
      document.location = url;
    }
  },
  template: `
  <div
    style="
      border-radius: calc(var(--border-radius) * 1.5);
      color: var(--white);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.1s;
      cursor: pointer;
      height: 22rem;
      border: 3px solid var(--darkergray);
    "
    :style="{
      background: statuses[card.status].color,
      cursor: !card.url ? 'not-allowed' : 'pointer',
    }"
    @click="!card.disabled && card.url && go(card.url)"
  >
    <div style="padding: 1rem;">
      <div style="margin: -0.5rem 0 1rem 0; color: white">{{ flags[card.country] }} {{ card.country }}</div>
      <h2 style="color: white; margin-top: 0.75rem">{{ card.title }}</h2>
      <div class="tags" style="line-height: 1.5em">
        <div class="tag" v-for="tag in card.sTags">{{tag}}</div>
        <div class="tag" v-for="tag in card.dTags">{{tag}}</div>
      </div>
    </div>
    <div style="
      padding: 1rem;
      background: var(--darkergray);
      border-bottom-left-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    ">
      <div>{{ statuses[card.status].title }}</div>
      <div>{{ card.object }}</div>
      <Percentage :percentage="card.ds" />
    </div>
  </div>
  `
}

new Vue({
  components: { Art, Percentage, Card },
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
        'Bragança workshop', 'No workshop','Other experiments'
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
    //cards: cards,
    cards: [],
    statuses: [
      { title: "Unknown", color: "#eaeaea" },
      { title: "Needs scenario", color: "#cacaca" },
      { title: "Has scenario", color: "var(--gray)" },
      { title: "Early slides", color: "var(--darkblue)" },
      { title: "Slides + interactives", color: "var(--purple)" },
      { title: "Tested, needs work", color: "var(--red)" }
    ]
  }),
  methods: {
    go(url) {
      document.location = url;
    }
  },
  created() {
    const id = '10bZyw9SpnslEKgQu-cqGxrJfuCCd9e8a-mly2J_ul_E'
    fetch(
      `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`
    )
      .then(res => res.json())
      .then(res => {
        this.cards = parseSheet(res);
      });
  },
  template: `
    <div style="overflow: hidden">
      <header style="">
        🚜 Work in progress, launching Spring 2019
        <a href="https://github.com/designstem" style="border: none;">
        <img src="https://rawgit.com/designstem/framework/master/images/github_logo.svg" style="
          width: 1.75rem;
          height: 1.75rem;
          opacity: 0.7;
        " />
        </a>
      </header>
      
      <div class="hero" style="
       background: var(--yellow);
      ">
        <div style="display: flex">
          <h1 style="color: var(--primary)">DesignSTEM</h1>
          <div style="margin: -2rem 0 0 0"><Art :c="6" :al="al" /></div>
        </div>
        <h2 style="color: var(--primary)">Science, Technology, Engineering and Math for future designers and craftsmen. Learn STEM topics in fun, visual and interactive way.</h2>
      </div>

      <div style="
        padding: 2.5rem;
        display: flex;
        background: var(--white);
      "
      >
      <div style="flex: 1; margin-right: 2rem;">
          <a href="#scenarios">
            <div class="button_primary" style="font-size: 1.2rem;">
            Learning scenarios ↓
            </div>
          </a>
          <br><br>
          <div class="intro">
            {{ dCards.length }} learning scenarios, ready to be used in a classroom. Suitable for design and STEM students and covering a wide range of mediums: digital, tangible, VR and more.
          </div>
        </div>
        <div style="flex: 1; margin-right: 2rem;">
          <a href="https://designstem.github.io/framework">
            <div class="button_primary" style="font-size: 1.2rem;">
            Web framework →
            </div>
          </a>
          <br><br>
          <div class="intro">
            We gathered all our custom tooling to a web framework, a MIT-licenced set of free components, styling and utilities for all the educators and creative coders to use.
          </div>
        </div>
        <div style="flex: 1">
        <a href="https://designstem.github.io/editor">
            <div class="button_primary" style="font-size: 1.2rem;">
              Content editor →
            </div>
          </a>
          <br><br>
          <div class="intro">
            Building off the framework, here is the simple but powerful content editor, based on Markdown and our custom components.
          </div>
        </div>
      </div>

      <div style="
        padding: 2.5rem;
        border-top: 3px solid var(--primary)"
      >
      <a id="scenarios"><h1>Scenario progress tracker</h1></a>

      <!--div style="
        display: flex;
      ">
        <div style="flex: 1;">
          <h3>Select a STEM topic</h3>
          <div style="display: flex; flex-wrap: wrap;">
            <a :style="{color: sTag == 'All' ? 'var(--red)': '', borderColor: sTag == 'All' ? 'var(--red)': ''}" style="font-weight: 600; cursor: pointer; margin: 0 5px 5px 0; display: block" @click="sTag = 'All'">All topics</a>
            <a :style="{color: sTag == tag ? 'var(--red)': '', borderColor: sTag == tag ? 'var(--red)': ''}" style="font-weight: 600; cursor: pointer; margin: 0 10px 5px 0; display: block" v-for="tag in sTags" @click="sTag = tag">{{tag}}</a>
            </div>
        </div>
        <div style="flex: 1; margin-left: 0.5rem;">
          <h3>Select a design topic</h3>
          <div style="display: flex; flex-wrap: wrap;">
            <a :style="{color: dTag == 'All' ? 'var(--red)': '', borderColor: dTag == 'All' ? 'var(--red)': ''}" style="font-weight: 600; cursor: pointer; margin: 0 5px 5px 0; display: block" @click="dTag = 'All'">All topics</a>
            <a :style="{color: dTag == tag ? 'var(--red)': '', borderColor: dTag == tag ? 'var(--red)': ''}" style="font-weight: 600; cursor: pointer; margin: 0 10px 5px 0; display: block" v-for="tag in dTags" @click="dTag = tag">{{tag}}</a>
          </div>
        </div>
      </div-->
      
      </div>

      <div style="margin: 2.5rem;">
        <div>          
          <div v-for="workshop in workshops">
          <br />
          <a :id="workshop.replace(/\\s+/g,'-')"><h2>{{ workshop }}</h2></a>
       
       
          <div class="cards">
            <Card
              v-for="(card, i) in dCards.filter(c => c.workshop == workshop)"
              :card="card"
              :statuses="statuses"
              :flags="flags"
              :key="i"
            />
            <!--
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
                
                <p v-html="card.desc" style="margin-bottom: 0.5rem" />

                <Percentage v-if="card.ds" :percentage="card.ds" />

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
            -->

          </div>

          </div>

        </div>
        
      </div>

      <div style="width: 100vw; padding: 2rem; color: var(--primary);">

      <a id="breakdown"><h2>Scenario breakdown by country</h2></a>
        <div v-for="c in Object.keys(flags)">
            <div style="display: flex; padding: 1rem; border-bottom: 1px solid var(--gray);">
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
        <p>
          All code is licenced under
          <a href="https://choosealicense.com/licenses/mit/" rel="licence">
            MIT licence
          </a>.
          All content is licenced under
          <br>
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
            Creative Commons Attribution 4.0 International License
          </a>.
        </p>
      </div>
      <img src="https://rawgit.com/designstem/framework/master/images/erasmus_logo.svg" style="width:240px" />
    </div>

    </div>
  `
});
