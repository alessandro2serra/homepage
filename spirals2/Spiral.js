import { round } from "./offline/utils.js";
export default {
  props: {
    pointCount: { default: 36, type: Number },
    padding: { default: 20, type: Number },
    cycles: { default: 3, type: Number },
    startX: { default: 20, type: Number },
    activePoint: { default:30 , type: Number },
    r: { default:2 , type: Number },
    info: { default:false , type: Boolean },
  },
  computed: {
    d3Line(){
        return d3.line().curve(d3.curveCardinal.tension(0));
      },
    computedPoints(){
        const temp = [[this.startX, 0]];
        let a = parseFloat(this.startX);    
        let b = this.padding / (2 * Math.PI); 
        let theta0 = 2 * Math.PI / this.pointCount;
        for(let j = 1; j <= this.pointCount * this.cycles; j++){
          let theta = j * theta0;
          let r = a + b * theta;
          let x = r * Math.cos(theta);
          let y = r * Math.sin(theta);
          let coords = [x, -y];
          if( !isNaN(x) && !isNaN(y) ){
            temp.push(coords);
          } 
        }
        return temp;
      },
      computedTriangle() {
        //let points = [ {x:0, y:0}, {x:this.computedPoints[this.activePoint][0], y:0}, {x:this.computedPoints[this.activePoint][0], y:this.computedPoints[this.activePoint][1]} ];
        let points =  `M0,0 L ${this.computedPoints[this.activePoint][0]} 0 L ${this.computedPoints[this.activePoint][0]} ${this.computedPoints[this.activePoint][1]} Z`
        return points;
      }
  },
  methods: {
    round,
  },
  template: `
    <g>
      <circle r="3" />
      <path
        :d="d3Line( computedPoints)"
        stroke="black"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle v-for="p in computedPoints"
        :cx="p[0]"
        :cy="p[1]"
        :r="r"
      />
      <circle 
        :cx="computedPoints[activePoint][0]"
        :cy="computedPoints[activePoint][1]"
        r="9" 
        stroke="red"
        stroke-width="3"
        fill="none"
      /> 
      <path 
        :d="computedTriangle"  
        stroke="purple"
        stroke-width="1.5"
        fill="none"
      /> 
      <text v-if="info"
        :dy="computedPoints[activePoint][1]-20" :dx="computedPoints[activePoint][0]" 
        text-anchor="middle" 
        style="font-family: var(--font-mono); fill:var(--red); font-size:14px">
        x:{{ round(computedPoints[activePoint][0], 3) }} | 
        y:{{ round(computedPoints[activePoint][1], 3) }} |
        θ:{{round( Math.atan(computedPoints[activePoint][1]/computedPoints[activePoint][0])*(180 / Math.PI), 3) }}° |
        r:{{round( Math.sqrt(Math.pow(computedPoints[activePoint][0], 2) + Math.pow(computedPoints[activePoint][1], 2)), 3) }}
      </text>
    </g>
    `
};