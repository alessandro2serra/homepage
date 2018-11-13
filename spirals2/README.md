# Spirals
## Equations of 2D Archimedian spirals

Assume that a point is described by its **polar coordinates (r, θ)**. Remember that **r is the radius**, the distance of the point from the center of the axes and **θ is the angle** formed between the radius and x axis (see next figure).

---

Any point on a circle can be described through <f-sidebar width="60vw" src="./MathCartesian.md">cartesian</f-sidebar> and <f-sidebar width="60vw" src="./MathPolar.md">polar</f-sidebar> coordinates.

<f-slider-data :sliders="[
  { title: 'Circle radius', from: 0, to: 200, value: 150, float: true },
  { title: 'Active point', from: 0, to: 35, value: 8, float: false },
]">
  <f-svg slot-scope="data" :inner-width="600" :inner-height="400" :inner-x="-300" :inner-y="-200" style="width:100%; height:50vh;">
    <Spiral :cycles="1" :padding="0" :startX="data.value[0]" :activePoint="data.value[1]" :info="true" />
  </f-svg>
</f-slider-data>

---

<f-slider-data :sliders="[
  { title: 'cycles', from: 0, to: 5, value: 1, float: true },
  { title: 'padding', from: 0, to: 300, value: 0, float: true },
  { title: 'starting point', from: 0, to: 400, value: 200, float: true },
]" class="layout-hack">
  <f-svg slot-scope="data" :inner-width="600" :inner-height="500" :inner-x="-300" :inner-y="-250" style="width:100%; height:50vh;">
    <Spiral :cycles="data.value[0]" :padding="data.value[1]" :startX="data.value[2]"  />
  </f-svg>
  
</f-slider-data>
    

<!-- 

        <div style="position:absolute; top:10px; left:10px;font-size:70%;">
          

          <div style="display:flex; width:65vw;">
            <div style="flex:1">
            <b>ACTIVE POINT COORDINATES:</b>
            </div>
            <div style="flex:1">
              <b>CARTESIAN</b><br>  
              <b>x:</b> {{yComputedPoints[yActivePoint][0]}}<br>
              <b>y:</b> {{yComputedPoints[yActivePoint][1]}}
            </div>
            <div style="flex:1">
              <b>POLAR</b><br>  
              <b>θ:</b> {{Math.atan(yComputedPoints[yActivePoint][1]/yComputedPoints[yActivePoint][0])* (180 / Math.PI) }}°<br>
              <b>r:</b> {{Math.sqrt(Math.pow(yComputedPoints[yActivePoint][0], 2) + Math.pow(yComputedPoints[yActivePoint][1], 2))}}
            </div>
          </div>

          
           
        </div> -->

---

# Here we are