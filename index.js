new Vue({
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
        url: "https://designstem.github.io/vinylfrequency",
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
        title: "World without colors",
        desc: "Emphatize and design for color blindness",
        tags: ["Color", "Inclusive design"],
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
    <div>
      <div class="header">
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
            }"
            @click="go(card.url)"
            >
              <div>
                <h2>{{ card.title }}</h2>
                <p>{{ card.desc }}</p>
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
