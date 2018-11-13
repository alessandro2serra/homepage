<div style="display:flex; justify-content: center; align-items: center; height: 85vh:">
<h2 >
<big>
Yo!
</big>
</h2>
</div>

---


#### Repeating dots
<div>
<f-slider-data :sliders="[
    { title: 'step', from: 0.1, to: 2, value: 0.5, float: true },
  ]">
  <f-scene slot-scope="sdata" width="1000" height="500">
    <f-repeat-grid :step="sdata.value[0]">
      <f-group slot-scope="rdata">
        <f-group>  
          <f-line
            :points="[
              { x: 0, y: 0 },
              { x: 0, y: 0 },
            ]" 
            :stroke-width="3"
          />
        <f-group>
      </f-group>
    </f-repeat-grid>
  </f-scene>
</f-slider-data>
</div>

---

#### Adding x dimension
<div>
<f-slider-data :sliders="[
    { title: 'step', from: 0.1, to: 2, value: 0.5, float: true },
    { title: 'x-shift', from: -3, to: 3, value: 0.02, float: true },
  ]">
  <f-scene slot-scope="sdata" width="1000" height="500">
    <f-repeat-grid :step="sdata.value[0]">
      <f-group slot-scope="rdata">
          <f-line
            :points="[
              { x: 0, y: 0 },
              { x: sdata.value[1], y: 0 },
            ]" 
            :stroke-width="3" 
          />
      </f-group>
    </f-repeat-grid>
  </f-scene>
</f-slider-data>
</div>

---

#### Adding y dimension
<div>
<f-slider-data :sliders="[
    { title: 'step', from: 0.1, to: 2, value: 0.5, float: true },
    { title: 'x-shift', from: -3, to: 3, value: 0, float: true },
    { title: 'y-shift', from: -3, to: 3, value: 0.02, float: true },
  ]">
  <f-scene slot-scope="sdata" width="1000" height="500">
    <f-repeat-grid :step="sdata.value[0]">
      <f-group slot-scope="rdata">
          <f-line
            :points="[
              { x: 0, y: 0 },
              { x: sdata.value[1], y: sdata.value[2] },
            ]" 
            :stroke-width="3" 
          />
      </f-group>
    </f-repeat-grid>
  </f-scene>
</f-slider-data>
</div>

---

#### Rotate
<div>
<f-slider-data :sliders="[
    { title: 'step', from: 0.1, to: 2, value: 0.5, float: true },
    { title: 'x-shift', from: -3, to: 3, value: 0, float: true },
    { title: 'y-shift', from: -3, to: 3, value: 0, float: true },
    { title: 'rotation', from: -180, to: 180, value: 0.001, float: true },
  ]">
  <f-scene slot-scope="sdata" width="1000" height="500">
    <f-repeat-grid :step="sdata.value[0]">
      <f-group slot-scope="rdata" :rotation="{z: sdata.value[3] }">
          <f-line
            :points="[
              { x: 0, y: 0 },
              { x: sdata.value[1], y: sdata.value[2] },
            ]" 
            :stroke-width="3" 
          />
      </f-group>
    </f-repeat-grid>
  </f-scene>
</f-slider-data>
</div>

---

#### A box
<div>
<f-slider-data :sliders="[
    { title: 'step', from: 0.1, to: 2, value: 0.5, float: true },
    { title: 'x-shift', from: -3, to: 3, value: 0, float: true },
    { title: 'y-shift', from: -3, to: 3, value: 0, float: true },
    { title: 'rotation', from: -180, to: 180, value: 0.001, float: true },
  ]">
  <f-scene slot-scope="sdata" width="1000" height="500">
    <f-repeat-grid :step="sdata.value[0]">
      <f-group slot-scope="rdata" :rotation="{z: sdata.value[3] }">
          <f-box
            :points="[
              { x: 0, y: 0 },
              { x: sdata.value[1], y: sdata.value[2] },
            ]" 
            :stroke-width="1" 
          />
      </f-group>
    </f-repeat-grid>
  </f-scene>
</f-slider-data>
</div>

---

#### A circle
<div>
<f-slider-data :sliders="[
    { title: 'step', from: 0.1, to: 2, value: 0.5, float: true },
    { title: 'x-shift', from: -3, to: 3, value: 0, float: true },
    { title: 'y-shift', from: -3, to: 3, value: 0, float: true },
    { title: 'radius', from: 0, to: 3, value: 1, float: true },
  ]">
  <f-scene slot-scope="sdata" width="1000" height="500">
    <f-repeat-grid :step="sdata.value[0]">
      <f-group slot-scope="rdata">
          <f-circle
            :points="[
              { x: sdata.value[1], y: sdata.value[2] },
            ]" 
            :stroke-width="1" 
            :r = "sdata.value[3]"
          />
      </f-group>
    </f-repeat-grid>
  </f-scene>
</f-slider-data>
</div>

---

#### A polygon
<div>
<f-slider-data :sliders="[
    { title: 'step', from: 0.1, to: 2, value: 0.5, float: true },
    { title: 'rotation', from: -180, to: 180, value: 0, float: true },
    { title: 'radius', from: 0, to: 3, value: 1, float: true },
    { title: 'sides', from: 3, to: 8, value: 3, float: false },
    
  ]">
  <f-scene slot-scope="sdata" width="1000" height="500">
    <f-repeat-grid :step="sdata.value[0]">
      <f-group slot-scope="rdata">
          <f-regularpolygon
            :rotation="{ z: sdata.value[1] }"
            :count="sdata.value[3]"
            :stroke-width="1" 
            :r = "sdata.value[2]"
          />
      </f-group>
    </f-repeat-grid>
  </f-scene>
</f-slider-data>
</div>

---

#### Too mechanic? Let's add some randomness
<div>
<f-slider-data :sliders="[
    { title: 'step', from: 0.1, to: 2, value: 0.5, float: true },
    { title: 'x-shift', from: -3, to: 3, value: 0, float: true },
    { title: 'y-shift', from: -3, to: 3, value: 0.02, float: true },
    { title: 'rotation', from: -180, to: 180, value: 0, float: true },
    { title: 'randomness coeficent', from: 0, to: 2, value: 1, float: true },
  ]">
  <f-scene slot-scope="sdata" width="500" height="500">
    <f-repeat-grid :step="sdata.value[0]">
      <f-group slot-scope="rdata" :rotation="{x: sdata.value[3] * random(0, sdata.value[4], true) }">
          <f-line
            :points="[
              { x: 0, y: 0 },
              { x: sdata.value[1], y: sdata.value[2] },
            ]" 
            :stroke-width="3" 
          />
      </f-group>
    </f-repeat-grid>
  </f-scene>
</f-slider-data>
</div>

