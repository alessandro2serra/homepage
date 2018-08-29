import { cx, cy } from "../utils.js";

export default {
  props: ["c", "al"],
  methods: {
    cx,
    cy,
    t(x, y, r = 0) {
      return `translate(${x},${y}) rotate(${r})`;
    },
    line(points) {
      return d3.line().curve(d3.curveBundle.beta(this.curve))(points);
    }
  },
  computed: {
    viewBox() {
      return `-${this.size / 2} -${this.size / 2} ${this.size} ${this.size}`;
    },
    points() {
      return Array.from({
        length: this.count
      }).map((_, i) => [
        cx((360 / this.count) * i, this.size / [5 * this.offset, 3][i % 2]),
        cy((360 / this.count) * i, this.size / [5 * this.offset, 3][i % 2])
      ]);
    },
    count() {
      return this.c * 2;
    }
  },
  mounted() {
    anime({
      targets: this,
      curve: [-2, 2],
      duration: 10000,
      easing: "linear",
      loop: true,
      direction: "alternate"
    });
    anime({
      targets: this,
      offset: [-2, 1],
      duration: 10000,
      //easing: "linear",
      loop: true,
      direction: "alternate"
    });
    anime({
      targets: this,
      r: [1, 360],
      duration: 20000,
      easing: "linear",
      loop: true
    });
  },
  data: () => ({ a: 8, r: 10, bla: 0, size: 160, offset: 1, curve: -1 }),
  template: ` 
    <div>
      <svg :width="size" :height="size" :view-box.camel="viewBox">
        <g v-for="(o,oi) in a" :transform="t(0,0,r)">
          <path stroke-linecap="round" stroke-linejoin="round" v-for="c in count / 2" :transform="t(0,0,(360 / a) * o)" :d="line([...points,points[0],points[1],points[2]].slice(c * 2,c * 2 + 3))" stroke="var(--color-gray-dark)" :fill="'hsla(358, 100%, 67%, ' + al + ')'" stroke-width="3" />
        </g>
      </svg>    
    </div>
  `
};
