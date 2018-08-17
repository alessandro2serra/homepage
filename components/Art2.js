import { cx, cy } from '../utils.js'

export default {
  methods: {
    cx,
    cy,
    t(x, y, r = 0) {
      return `translate(${x},${y})`;
    }
  },
  computed: {
    points() {
      return Array.from({ length: 12 })
        .slice(0, this.count)
        .map((_, i) => {
          return [
            cx((360 / this.count) * i, this.r),
            cy((360 / this.count) * i, this.r)
          ].join(",");
        })
        .join(" ");
    }
  },
  mounted() {
    anime({
      targets: this,
      count: 12,
      loop: true,
      direction: "alternate",
      duration: 10000,
      easing: "linear"
      //round: true,
      //autoplay: false
    });
  },
  data: () => ({ count: 3, r: 50 }),
  template: ` 
    <div>
    <svg width="1600" height="25rem">
      <g :transform="t(100,100)">
        <polygon :points="points" stroke="red" fill="none" />
      </g>
    </svg>    
    {{ points }}
    </div>
  `
};