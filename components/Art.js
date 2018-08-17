import { cx, cy } from '../utils.js'

export default {
  methods: {
    cx,
    cy,
    t(x, y, r = 0) {
      return `translate(${x},${y})`;
    }
  },
  mounted() {
    anime({
      targets: this,
      step: 300
    })
  },
  data: () => ({ step: 200, r: 0 }),
  template: ` 
    <div>
    <svg width="1600" height="5rem" style="background: var(--color-gray-dark)">
      <g :transform="t(-150,-150)">
      <template v-for="(x,i) in 10">
      <template v-for="(y,j) in 10">
        <g :key="i + '-' + j" :transform="t(x * step, y * step, r)">
          <!--circle
            stroke-width="3" 
            stroke="rgba(255,255,255,0.5)"
            cx="0"
            cy="0"
            :r="step"
            fill="none"
          /-->
          <template v-for="a in 6">
          <circle
            stroke-width="3" 
            stroke="rgba(255,255,255,0.5)"
            :cx="cx(r + (360/6*a),step)"
            :cy="cy(r + (360/6*a),step)"
            :r="step * 10"
            fill="none"
            opacity="0.5"
          />
          </template>
        </g>
      </template>
      </template>
        </g>
    </svg>    
    </div>
  `
};