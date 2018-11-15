let d=[];const getCssVariable=(variable,el=document.body)=>getComputedStyle(document.body).getPropertyValue(variable);d.push(`\n## color\n\n<code>color('name')</i></code>\n\nReturns a color value. If \`name\` matches one of framework colors, framework color value is returned. If not, a standard CSS color name is returned.\n\n{{ color('red') }}\n\n{{ color('papayawhip')}}\n\n`);const color=name=>{const color=getCssVariable(`--${name}`);return color?color.trim():name.trim()};d.push(`\n## rgb\n\n<code>rgb(r, g, b, a = 1)</code>\n\nOutputs a CSS <code>rgba()</code> string\n\n#### Example:\n\n    rgb(50,100,50,0.5)\n    rgb(50,100,50)\n\n#### Output:\n\n    {{ rgb(50,100,50,0.5) }}\n    {{ rgb(50,100,50) }}\n\n`);const rgb=(r,g,b,a=1)=>`rgba(${r},${g},${b},${a})`;d.push(`\n## hsl\n\n<code>hsl(h, s = 100, l = 50, a = 1)</code>\n\nOutputs a CSS <code>hsla()</code> string\n\n#### Example\n\n    hsl(50,100,50,0.5)\n    hsl(50,100,50)\n    hsl(50)\n\n#### Output\n\n    {{ hsl(50,100,50,0.5) }}\n    {{ hsl(50,100,50) }}\n    {{ hsl(50) }}\n\n`);const hsl=(h,s=100,l=50,a=1)=>`hsl(${h},${s}%,${l}%,${a})`;d.push(`\n## scale\n\n<code>scale(value, start1, stop1, start2 = -2, stop2 = 2)</code>\n\nScales linearily the input <code>value</code>\nfrom the input range between <code>start1</code> and <code>stop1</code>\nto the output range  <code>start2</code> and <code>stop2</code>.\n\n#### Example:\n\n    scale(50, 0, 100, 0, 1)\n\n#### Output:\n\n    {{ scale(50, 0, 100, 0, 1) }}\n\n  `);const scale=(value,start1,stop1,start2=-2,stop2=2)=>{return(value-start1)/(stop1-start1)*(stop2-start2)+start2};d.push(`\n## round\n\n<code>round(value, decimals = 0)</code>\n\nRounds a number <code>value</code> to optional <code>decimals</code>.\n\nExample:\n    \n    round(0.1234)\n    round(0.1234, 2)\n\nOutput:\n  \n    {{ round(0.1234) }}\n    {{ round(0.1234, 2) }}\n\n`);const round=(value,decimals=0)=>{return Number(Math.round(value+"e"+decimals)+"e-"+decimals)};d.push(`\n## random\n\n<code>random(from, to, float = false)</code>\n\nGenerates a random integer number between <code>from</code> and <code>to</code>. \nIf <code>float = true</code>, the output value will be floating point number.\n\nExample:\n    \n    random(0, 2)\n    random(0, 2, true)\n\nOutput:\n  \n    {{ random(0, 2) }}\n    {{ random(0, 2, true) }}\n`);const random=(from,to,float=false)=>{const r=from+Math.random()*(to-from);return float?r:Math.floor(r,2)};d.push(`\n## range\n\n<code>range(from, to, step = 1)</code>\n\nGenerates an array of integer numbers in between <code>from</code> and <code>to</code> with optional <code>step</code> parameter.\n\nExample\n\n    range(-1, 1, 0.5)\n\nOutput\n\n    {{ range(-1, 1, 0.5) }}\n\n`);const range=(from,to,step=1)=>{const length=Math.floor((to-from)/step)+1;return Array.from({length:length}).map((_,i)=>from+i*step)};d.push(`\n## cx cy\n\n<code>cx(angle, radius)</code>\n<code>cy(angle, radius)</code>\n\nReturn 2D x and y coordinates on point on the circle (_polar coordinates_) based on <code>angle</code> in degrees and circle's <code>radius</code>.\n\n#### Example\n\n    cx(90, 10) cy(90, 10)\n\n#### Output\n\n    {{ cx(90, 10) }} {{ cy(90, 10) }}\n\n\n`);const cx=(deg,radius)=>{return Math.cos((deg-90)*(Math.PI/180))*radius};const cy=(deg,radius)=>{return Math.sin((deg-90)*(Math.PI/180))*radius};d.push(`\n## cpoints\n\n<code>cpoints(count, radius)</code>\n\nBased on <code>cx</code> and <code>cy</code> functions above calculates and <code>count</code> of <code>{ x, y }</code> points on the circle.\n\n#### Example\n\n    cpoints(4,10)\n\n#### Output\n\n    {{ cpoints(4,10) }}\n`);const cpoints=(count,radius)=>{return Array.from({length:count}).map((p,i)=>({x:cx(360/count*i,radius),y:cy(360/count*i,radius)}))};d.push(`\n## deg2rad\n\n<code>deg2rad(angle)</code>\n\nConverts angle in degrees to radians.\n\n#### Example\n\n<f-math>\nradians = \\frac{degrees \\cdot \\pi}{180} = \\frac{180 \\cdot \\pi}{180} = \\pi\n</f-math>\n\n    deg2rad(180)\n\n#### Output\n\n    {{ deg2rad(180) }}\n`);const deg2rad=deg=>deg*Math.PI/180;d.push(`\n## rad2deg\n\n<code>rad2deg(angle)</code>\n\nConverts angle in radians to degrees.\n\n#### Example\n\n    rad2deg(Math.PI)\n\n#### Output\n\n    {{ rad2deg(Math.PI) }}\n`);const rad2deg=rad=>rad*180/Math.PI;d.push(`\n## shuffle\n\n<code>shuffle(array)</code>\n\nSorts the array in random order.\n\n#### Example\n\n    shuffle(range(0,3))\n\n#### Output\n\n    {{ shuffle(range(0,3)) }}\n\n`);const shuffle=arr=>arr.sort(()=>Math.random()-.5);d.push(`\n## any\n\n<code>any(array)</code>\n\nPicks a random element from the array.\nSupports both array and function argument syntax.\n\n#### Example\n\n    any([0,1,2])\n    any(0,1,2)\n\n#### Output\n\n    {{ any([0,1,2]) }}\n    {{ any(0,1,2) }}\n\n`);const any=function(arr){return arr instanceof Array?shuffle(arr)[0]:shuffle(Array.from(arguments))[0]};d.push(`\n## flatten\n\n<code>flatten(array)</code>\n\nFlattens multidimensional array\n\n#### Example\n\n    flatten([0,1,[2,[3,4]]])\n\n#### Output\n\n    {{ flatten([0,1,[2,[3,4]]]) }}\n\n`);const flatten=list=>list.reduce((a,b)=>a.concat(Array.isArray(b)?flatten(b):b),[]);d.push(`\n## chunk\n\n<code>chunk(array, length)</code>\n\nChunks array into smaller <code>length</code>-sized arrays\n\n#### Example\n\n    chunk([0,1,2,3],2)\n\n#### Output\n\n    {{ chunk([0,1,2,3],2) }}\n\n`);const chunk=(arr,length)=>Array.from({length:Math.ceil(arr.length/length)}).map((_,n)=>arr.slice(n*length,n*length+length));d.push(`\n## unique\n\n<code>unique(array)</code>\n\nRemoves duplicates from the array\n\n#### Example\n\n    unique([0,0,1,2])\n\n#### Output\n\n    {{ unique([0,0,1,2]) }}\n\n`);const unique=arr=>[...new Set(arr)];d.push(`\n## snapToGrid\n\n<code>snapToGrid(value, gridsize)</code>\n\nReturns the value in the closest point of 2D grid.\n\n#### Input\n\n    snapToGrid(0.51,0.5)\n\n#### Output\n\n    {{ snapToGrid(0.51,0.5) }}\n`);const snapToGrid=(value,gridsize)=>{return value%gridsize<gridsize/2?value-value%gridsize:value+gridsize-value%gridsize};d.push(`\n## log\n\n<code>log(message) = console.log(message) </code>\n\n\n`);const log=value=>console.log(value);const parseSheet=data=>{return data.feed.entry.map(entry=>{return Object.keys(entry).map(field=>{if(field.startsWith("gsx$")){return[field.split("$")[1],entry[field].$t]}}).filter(field=>field).reduce((field,item)=>{field[item[0]]=item[1];return field},{})})};const cleanColumns=content=>{const pattern=/(\|[0-9\s]+\n)/g;return content.replace(pattern,"")};const parseColumns=slide=>{const pattern=/(\|[0-9\s]+\n)/g;const match=slide.match(pattern);if(match){const rowCount=match.length;const cols=match.map(m=>{return m.trim().replace(/\|/g,"").split("").filter(m=>!m.match(/\s+/))});const colCount=cols[0].length;const areas=cols.map(m=>`'${m.map(m=>`a${m}`).join(" ")}'`).join("\n");const content=slide.split(/\n-\n/).map(c=>c.replace(pattern,""));return{rowCount:rowCount,colCount:colCount,areas:areas,content:content}}else{const content=slide.split(/\n-\n/);return{rowCount:1,colCount:content.length,areas:`'${content.map((_,i)=>`a${i+1}`).join(" ")}'`,content:content}}};const kebabCase=string=>string.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase();const docs=()=>d;export{getCssVariable,color,rgb,hsl,scale,round,random,range,cx,cy,cpoints,deg2rad,rad2deg,shuffle,any,chunk,unique,flatten,snapToGrid,log,parseSheet,docs,parseColumns,cleanColumns,kebabCase};