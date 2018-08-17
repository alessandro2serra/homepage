import Art from './components/Art.js'

new Vue({
  components: { Art },
  el: "#app",
  data: () => ({
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
      "var(--color-brown)",
      "var(--color-blue)",
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
      <Art style="position: absolute; top: 0, right: 0, left: 0; z-index: -1000"/>
      <div class="headr">
        <div>
          <h1>DesignSTEM</h1>
          <div class="intro">Here comes somewhat short, somewhat long introduction. Here comes somewhat short, somewhat long introduction. Here comes somewhat short, somewhat long introduction. Here comes somewhat short, somewhat long introduction.</div>
        </div>
      </div>
      <div class="main">
        <div>
          <h2>Try out our interactive learning scenarios: </h2>
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
