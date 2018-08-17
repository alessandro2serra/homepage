import { cx, cy } from '../utils.js'

export default {
  methods: {
    cx,
    cy,
    t(x, y, r = 0) {
      return `translate(${x},${y})`;
    },
    points(r, count, rotate = 0) {
      return Array.from({ length: 24 })
        .slice(0, count)
        .map((_, i) => {
          return [
            cx((360 / count) * i + rotate, r),
            cy((360 / count) * i + rotate, r)
          ].join(",");
        })
        .join(" ");
    }
  },
  mounted() {
    anime({
      targets: this,
      val: { value: 36, duration: 30000 },
      rotate: { value: 360, duration: 30000 },
      direction: "alternate",
      loop: true,
      easing: "easeInOutQuad"
      //autoplay: false
    });
  },
  data: () => ({ val: 0, rotate: 0 }),
  template: ` 
    <div>
    <svg width="1600" height="22rem" style="background: var(--color-gray-dark)">
      <g :transform="t(-200,-100)">
      <g v-for="y in 12" :transform="t(0,y * 157)">
      <g v-for="x in 12" :transform="t(x * 182 + (y % 2 * (182 /2)),0)">
        <polygon v-for="r in 16" :key="r" :points="points((r - val) * 6.35,6,rotate)" stroke="rgba(255,255,255,0.15)" stroke-width="1" fill="none" :opacity="r / 12 / 1.2"/>
      </g>
      </g>
      </g>
    </svg>    
    </div>
  `
};