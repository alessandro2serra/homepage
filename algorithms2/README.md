<div style="display:flex; flex-direction:column; justify-content: center; align-items: center; height: 85vh;">
  <h2>
    Become an<br>
    <big>Algorist!</big>
  </h2>

<code>alt+🡺</code> to move forward | <code>alt+🡸</code> to move back

</div>

---

| 1 2 2

## Warming up...

Let's start with a small warming-up exercise.

-

1. Take a sheet of A4 paper
2. **Fold it in half** along the longer edge
3. Find the **center** and mark it with a pen <small>*(don't have to be TOO precise)*</small>
4. From the **<u>closed edge</u> cut the paper** to the center point
5. Unfold the paper and push it inside **<- the end here needs probably more exact instructions**

---

| 1 2

## Nice work!

You probably ended up with something like this 🡺

By following the steps of cutting and folding you were following something that is called an **algorithm**.

-

![Origami result](./images/origami-output.jpg "Origami result")

---

<div class="slide-centered">

<div>

so...

# **An Algorithm**
#### is a __set of steps__ needed for __solving a certain problem__.
</div>
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
    { title: 'rotation', from: -180, to: 180, value:0, float: true },
  ]">
  <f-scene slot-scope="sdataB" width="1000" height="500">
    <f-repeat-grid :step="sdataB.value[0]">
      <f-group slot-scope="rdata" :rotation="{z: sdataB.value[3] }">
          <f-box
            :points="[
              { x: 0, y: 0 },
              { x: sdataB.value[1], y: sdataB.value[2] },
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
    { title: 'radius', from: 0, to: 3, value: 1, float: true },
  ]">
  <f-scene slot-scope="sdataC" width="1000" height="500">
    <f-repeat-grid :step="sdataC.value[0]">
      <f-group slot-scope="rdata">
          <f-circle
            :stroke-width="1" 
            :r = "sdataC.value[1]"
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

#### Random?
<div>
<f-slider-data :sliders="[
    { title: 'step', from: 0.1, to: 2, value: 0.5, float: true },
    { title: 'x-shift', from: -3, to: 3, value: 0, float: true },
    { title: 'y-shift', from: -3, to: 3, value: 0, float: true },
    { title: 'rotation', from: -180, to: 180, value: 0, float: true },
    { title: 'randomness coeficent', from: -2, to: 2, value: 0, float: true },
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

