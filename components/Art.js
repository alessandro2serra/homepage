import { cx, cy } from "../utils.js";

export default {
  methods: {
    cx,
    cy,
    t(x, y, r = 0) {
      return `translate(${x},${y}) rotate(${r})`;
    },
    line(points) {
      return d3.line().curve(d3.curveCatmullRom.alpha(0))(points);
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
        cx((360 / this.count) * i, this.size / [4, 2.5][i % 2]),
        cy((360 / this.count) * i, this.size / [4, 2.5][i % 2])
      ]);
    },
    count() {
      return this.c * 2
    }
  },
  data: () => ({ size: 200, c: 16 }),
  template: ` 
    <div>
      <svg :width="size" :height="size" :view-box.camel="viewBox">
        <path v-for="c in count / 2" :d="line([...points,points[0],points[1],points[2]].slice(c * 2,c * 2 + 3))" stroke="var(--color-blue-medium)" fill="none" stroke-width="3" />
        <path :transform="t(0,0,360 / count)" v-for="c in count / 2" :d="line([...points,points[0],points[1],points[2]].slice(c * 2,c * 2 + 3))" stroke="var(--color-blue-dark)" fill="none" stroke-width="3" />
        <!--circle
          v-for="p in points"
          :cx="p[0]"
          :cy="p[1]"
          r="2"
          fill="rgba(255,0,0,0.5)"
        /-->
      </svg>    

    </div>
  `
};
