import Art from "./components/Art.js";
import Buttons from "https://rawgit.com/designstem/style/master/components/Buttons.js";

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
    activeType: 0,
    types: ["All", "Math", "Biology", "Physics", "Geometry"],
    cards: [
      {
        title: "Looking for triangles",
        desc: "Build an bird nest box from classic Euclidean shapes",
        tags: ["Geometry", "Crafts"],
        url: "./triangles"
      },
      {
        title: "Smart Tattoo",
        desc: "Design a biosensor tattoo that helps to save lives",
        tags: ["Biology", "Information design"],
        url: "./tattoo"
      },
      {
        title: "Vinyl frequency",
        desc:
          "Spin that record and learn about frequencies and early days of cinema",
        tags: ["Math", "Physics", "Animation"],
        url: "https://designstem.github.io/vinylfrequency"
      },
      {
        title: "3D Tessellations",
        desc: "Arrange mosaics in space",
        tags: ["Geometry", "Physics", "Animation"],
        disabled: true
      },
      {
        title: "Waste is a design mistake",
        desc: "Explore sustainable material usage",
        tags: ["Materials", "Crafts", "Sustainablity"],
        disabled: true
      },
      {
        title: "Different kind of colors",
        desc: "Emphatize and design for color blindness",
        tags: ["Color", "Inclusive design"],
        disabled: true
      },
      {
        title: "Robots on the Beach",
        desc: "Build your own <i>strandbeest</i>",
        tags: ["Crafts", "Physics", "Kinetics"],
        disabled: true
      },
      {
        title: "Painting with numbers",
        desc: "Generate artwork from sensor signals",
        tags: ["Generative art", "Sensors"],
        disabled: true
      },
      {
        title: "Buzzing Hexagons",
        desc: "Learn about the divine geometry of beehives",
        tags: ["Geometry", "Tesselation"],
        disabled: true
      },
      {
        title: "Call me Red, Green or Blue",
        desc: "Build the RGB lamp for inner peace and enlightenment",
        tags: ["Color", "Electronics", "Psychology"],
        disabled: true
      },
      {
        title: "Down the Spiral",
        desc: "Learn about the divine geometry of spirals",
        tags: ["Geometry", "3D Printing"],
        disabled: true
      },
      {
        title: "Blame it on the oven",
        desc: "Pottery process with occasional explosions",
        tags: ["Phyics", "Pottery"],
        disabled: true
      },
      {
        title: "Honey, I shrunk the...",
        desc: "Scaling from Gulliver to Meirelles to AR",
        tags: ["Geometry", "Human scale"],
        disabled: true
      },
      {
        title: "Construction of Chaos",
        desc: "Learn about the divine architecture of nature",
        tags: ["Material", "Construction"],
        disabled: true
      },
      {
        title: "Unbearable lightness of structures",
        desc: "Lightness in all its forms",
        tags: ["Material", "Construction"],
        disabled: true
      }
    ],
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
          <div style="margin: 2rem 0 0 -1.5rem; display: flex">
            <div v-for="c in [8,4,3]" style="margin-left: -1.5rem"><Art :c="c" /></div>
          </div>
          <h1>DesignSTEM</h1>
          <h3>Real sciences for future designers and craftsmen.<br />Learn STEM topics in fun, visual and interactive way</h3>
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
            <p><a>Relevant</a>&nbsp; <a>Links</a>&nbsp; <a>Stay</a>&nbsp; <a>Here</a></p>
          </div>
          <img src="esf_logo.svg" style="width: 200px" />
        </div>
      </div>

    </div>
  `
});
