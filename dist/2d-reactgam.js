"use strict"; Object.defineProperty(exports, "__esModule", {
  value: !0
}); var t = require("react"); var react = require("react"); function i(t, i) {
  null == window.contexts && (window.contexts = []),
  window.contexts.push({
    name: t, ctx: i
  })}exports.Canvas = s=> {
  const e = t.useRef(null); return t.useEffect((()=> {
    const t = e.current.getContext("2d"); i(s.id, t)})),
  react.createElement(react.Fragment, null, react.createElement("canvas", {
    ref: e, id: s.id, style: {
      width: `${s.width}px`, height: `${s.height}px`
    }}))}, exports.Circle = class {
  constructor({
    radius: t, position: i = {
      x: 0, y: 0
    }, velocity: s = {
      x: 0, y: 0
    }, startAngle: e = 0, endAngle: o = 2*Math.PI, antiClockWise: n=!1
  }) {
    let h = t; if ("" == h || null == h || null == h)throw new Error("(canvasjs) radius is required"); if ("number" != typeof h)throw new TypeError("(canvasjs) radius value must be a number"); this.radius = t,
    this.width = 2*this.radius,
    this.position = i,
    this.velocity = s,
    this.height = 2*this.radius,
    this.create=!1,
    this.fillcolor = "",
    this.strokecolor = "",
    this.path = "",
    this.startAngle = e,
    this.EndAngle = o,
    this.antiClockWise = n
  }draw(t, i = function() {}) {
    if ("" == t || null == t || null == t)throw new Error("(canvasjs)first argument is required"); if ("object" != typeof t)throw new TypeError("(canvasjs) the first value must be a canvas context"); if ("function" != typeof i)throw new TypeError("(canvasjs) the second argument must be a function"); let s = new Path2D; t.beginPath(),
    s.arc(this.position.x, this.position.y, this.radius, this.startAngle, this.EndAngle, !1),
    t.fillStyle = "transparent",
    t.strokeStyle = "black",
    i(t),
    t.stroke(s),
    t.fill(s),
    t.beginPath(),
    this.create=!0,
    this.fillcolor = t.fillStyle,
    this.strokecolor = t.strokeStyle,
    this.path = s
  }}, exports.Detect = class {
  constructor(t, i) {
    this.shape = i,
    this.ctx = t
  }on(t, i = function() {}) {
    "touchTheScreenTop" == t && this.shape.position.y-this.shape.height <= 0 && i(),
    "touchTheScreenBottom" == t && this.shape.position.y+this.shape.height-this.shape.velocity.y >= this.ctx.canvas.height && i(),
    "touchTheScreenRight" == t && this.shape.position.x+this.shape.width+this.shape.velocity.x >= this.ctx.canvas.width && i(),
    "touchTheScreenLeft" == t && this.shape.position.x-this.shape.width <= 0 && i()}}, exports.Diamond = class {
  constructor({
    length: t = 40, position: i = {
      x: 40, y: 100
    }, velocity: s = {
      x: 0, y: 0
    }}) {
    this.position = i,
    this.length = t,
    this.velocity = s,
    this.width = this.length,
    this.height = 1.5*this.length,
    this.create=!1,
    this.fillcolor = "",
    this.strokecolor = "",
    this.path = ""
  }draw(t, i = function() {}) {
    if ("" == t || null == t || null == t)throw new Error("(canvasjs) first argument is required"); if ("object" != typeof t)throw new TypeError("(canvasjs) the first value must be a canvas context"); if ("function" != typeof i)throw new TypeError("(canvasjs) the second argument must be a function"); let s = new Path2D; t.beginPath(),
    s.moveTo(this.position.x, this.position.y),
    s.lineTo(this.position.x-40, this.position.y-this.length),
    s.lineTo(this.position.x-80, this.position.y),
    s.lineTo(this.position.x-40, this.position.y+this.length),
    s.lineTo(this.position.x, this.position.y),
    t.fillStyle = "transparent",
    t.strokeStyle = "transparent",
    i(t, this.position),
    t.stroke(s),
    t.fill(s),
    t.beginPath(),
    this.create=!0,
    this.fillcolor = t.fillStyle,
    this.strokecolor = t.strokeStyle,
    this.path = s
  }}, exports.Ellipse = class {
  constructor({
    radius: t = [60, 30], position: i = {
      x: 100, y: 100
    }, velocity: s = {
      x: 0, y: 0
    }, rotation: e = 0, startAngle: o = 0, endAngle: n = 2*Math.PI, antiClockWise: h=!1
  }) {
    this.radius = t,
    this.width = t[0],
    this.height = t[1],
    this.create=!1,
    this.fillcolor = "",
    this.strokecolor = "",
    this.path = "",
    this.position = i,
    this.velocity = s,
    this.rotation = e,
    this.startAngle = o,
    this.EndAngle = n,
    this.antiClockWise = h
  }draw(t, i = function() {}) {
    if ("" == t || null == t || null == t)throw new Error("(canvasjs) first argument is required"); if ("object" != typeof t)throw new TypeError("(canvasjs) the first value must be a canvas context"); if ("function" != typeof i)throw new TypeError("(canvasjs) the second argument must be a function"); t.beginPath(); let s = new Path2D; s.ellipse(this.position.x, this.position.y, this.width, this.height, this.rotation, this.startAngle, this.EndAngle, this.antiClockWise),
    t.strokeStyle = "black",
    t.fillStyle = "transparent",
    i(t),
    t.fill(s),
    t.stroke(s),t.beginPath(),this.create=!0,this.fillcolor=t.fillStyle,this.strokecolor=t.strokeStyle,this.path=s}},exports.HexagonShape=class{constructor({length:t=[40,40,40,40,40,40],position:i={x:140,y:140},velocity:s={x:0,y:0}}){this.length=t,this.position=i,this.velocity=s,this.width=function(t){let i=0;for(let s=0;s<t.length;s++)t[s]>i&&(i=t[s]);return i}(this.length),this.height=function(t){let i=0;for(let s=0;s<t.length;s++)t[s]>i&&(i=t[s]);return i}(this.length),this.create=!1,this.fillcolor="",this.strokecolor="",this.path=""}draw(t,i=function(){}){if(""==t||null==t||null==t)throw new Error("(canvasjs) first argument is required");if("object"!=typeof t)throw new TypeError("(canvasjs) the first value must be a canvas context");if("function"!=typeof i)throw new TypeError("(canvasjs) the second argument must be a function");let s=this.position.x,e=this.position.y,o=new Path2D;t.beginPath(),o.moveTo(this.position.x,this.position.y),o.lineTo(s+this.length[0],e),o.lineTo(s+this.length[0]+20,e-this.length[1]),o.lineTo(s+this.length[0],e-this.length[1]-this.length[2]),o.lineTo(s+this.length[0]-this.length[3],e-this.length[1]-this.length[2]),o.lineTo(s+this.length[0]-this.length[3]-20,e-this.length[1]-this.length[2]+this.length[4]),o.lineTo(s+this.length[0]-this.length[3],e-this.length[1]-this.length[2]+this.length[4]+this.length[5]),t.fillStyle="transparent",t.strokeStyle="black",i(t),t.fill(o),t.stroke(o),t.beginPath(),this.create=!0,this.fillcolor=t.fillStyle,this.strokecolor=t.strokeStyle,this.path=o}},exports.Move=class{constructor(t){this.shape=t}forward(t){return this.shape.position.x+=t,{position:{x:this.shape.position.x,y:this.shape.position.y},speed:5}}backward(t){return this.shape.position.x-=t,{position:{x:this.shape.position.x,y:this.shape.position.y},speed:5}}diagonalRightBottom(t){return this.shape.position.x+=t,this.shape.position.y+=t,{position:{x:this.shape.position.x,y:this.shape.position.y},speed:t}}diagonalLeftBottom(t){return this.shape.position.x-=t,this.shape.position.y+=t,{position:{x:this.shape.position.x,y:this.shape.position.y},speed:t}}diagonalRightTop(t){return this.shape.position.x+=t,this.shape.position.y-=t,{position:{x:this.shape.position.x,y:this.shape.position.y},speed:t}}diagonalLeftTop(t){return this.shape.position.x-=t,this.shape.position.y-=t,{position:{x:this.shape.position.x,y:this.shape.position.y},speed:t}}top(t){return this.shape.position.y-=t,{position:{x:this.shape.position.x,y:this.shape.position.y},speed:t}}bottom(t){return this.shape.position.y+=t,{position:{x:this.shape.position.x,y:this.shape.position.y},speed:t}}},exports.Parallelogram=class{constructor({length:t=[10,40],position:i={x:140,y:140},velocity:s={x:0,y:0}}){this.length=t,this.position=i,this.velocity=s,this.width=this.length[0],this.height=this.length[1],this.create=!1,this.fillcolor="",this.strokecolor="",this.path=""}draw(t,i=function(){}){if(""==t||null==t||null==t)throw new Error("(canvasjs) first argument is required");if("object"!=typeof t)throw new TypeError("(canvasjs) the first value must be a canvas context");if("function"!=typeof i)throw new TypeError("(canvasjs) the second argument must be a function");let s=new Path2D;t.beginPath(),s.moveTo(this.position.x,this.position.y),s.lineTo(this.position.x+this.length[0],this.position.y),s.lineTo(this.position.x+this.length[0]+30,this.position.y-this.length[1]),s.lineTo(this.position.x+this.length[0]+30-this.length[0],this.position.y-this.length[1]),s.lineTo(this.position.x,this.position.y),t.strokeStyle="black",t.fillStyle="transparent",i(t),t.stroke(s),t.fill(s),t.beginPath(),this.create=!0,this.fillcolor=t.fillStyle,this.strokecolor=t.strokeStyle,this.path=s}},exports.ResponsiveCanvas=s=>{const e=t.useRef(null);return t.useEffect((()=>{const t=e.current.getContext("2d");i(s.id,t)})),react.createElement(react.Fragment,null,react.createElement("canvas",{ref:e,id:s.id,style:{width:window.innerWidth*s.width+"px",height:window.innerHeight*s.height+"px"}}))},exports.Snowflake=class{constructor({length:t=30,position:i={x:140,y:140},velocity:s={x:0,y:0}}){if(t<20||t<0)throw new Error("(canvasjs) the length must be more than 20");this.length=t,this.position=i,this.velocity=s,this.width=2*t,this.height=2*t,this.create=!1,this.fillcolor="",this.path="",this.strokecolor=""}draw(t,i=function(){}){if(""==t||null==t||null==t)throw new Error("(canvasjs) first argument is required");if("object"!=typeof t)throw new TypeError("(canvasjs) the first value must be a canvas context");if("function"!=typeof i)throw new TypeError("(canvasjs) the second argument must be a function");let s=new Path2D;t.beginPath(),s.moveTo(this.position.x,this.position.y),s.lineTo(this.position.x+this.length,this.position.y),s.moveTo(this.position.x,this.position.y),s.lineTo(this.position.x,this.position.y+this.length),s.moveTo(this.position.x,this.position.y),s.lineTo(this.position.x-this.length,this.position.y),s.moveTo(this.position.x,this.position.y),s.lineTo(this.position.x,this.position.y-this.length),s.moveTo(this.position.x,this.position.y),s.lineTo(this.position.x+this.length-15,this.position.y+this.length-15),s.moveTo(this.position.x,this.position.y),t.lineTo(this.position.x+this.length-15,this.position.y-(this.length-15)),s.moveTo(this.position.x,this.position.y),s.lineTo(this.position.x-(this.length-15),this.position.y+(this.length-15)),s.moveTo(this.position.x,this.position.y),s.lineTo(this.position.x-(this.length-15),this.position.y-(this.length-15)),t.fillStyle="transparent",t.strokeStyle="black",i(t),t.fill(s),t.stroke(s),t.beginPath(),this.create=!0,this.fillcolor=t.fillStyle,this.strokecolor=t.strokeStyle,this.path=s}},exports.Text=class{constructor({text:t="Hello World",position:i={x:100,y:100},velocity:s={x:0,y:0},maxWidth:e=0}){this.position=i,this.velocity=s,this.maxWidth=e,this.text=t}write(t,i=function(){}){if(""==t||null==t||null==t)throw new Error("(2d-gam) first argument is required");if("object"!=typeof t)throw new TypeError("(2d-gam) the first value must be a canvas context");if("function"!=typeof i)throw new TypeError("(2d-gam) the second argument must be a function");t.beginPath(),t.fillStyle="black",t.strokeStyle="transparent",i(t,this.text),t.fillText(this.text,this.position.x,this.position.y),t.beginPath()}},exports.Triangle=class{constructor({length:t=[40,50,30],position:i={x:140,y:100},velocity:s={x:0,y:0}}){this.length=t,this.position=i,this.velocity=s,this.width=function(t){let i=0;for(let s=0;s<t.length;s++)t[s]>i&&(i=t[s]);return i}(this.length),this.height=function(t){let i=0;for(let s=0;s<t.length;s++)t[s]>i&&(i=t[s]);return i}(this.length),this.create=!1,this.fillcolor="",this.strokecolor="",this.path=""}draw(t,i=function(){}){if(""==t||null==t||null==t)throw new Error("(canvasjs) first argument is required");if("object"!=typeof t)throw new TypeError("(canvasjs) the first value must be a canvas context");if("function"!=typeof i)throw new TypeError("(canvasjs) the second argument must be a function");let s=new Path2D;t.beginPath(),s.moveTo(this.position.x,this.position.y),s.lineTo(this.position.x+this.length[0],this.position.y),s.lineTo(this.position.x+this.length[2],this.position.y-this.length[1]),s.lineTo(this.position.x,this.position.y),t.strokeStyle="black",t.fillStyle="transparent",i(t),t.stroke(s),t.fill(s),t.beginPath(),this.create=!0,this.fillcolor=t.fillStyle,this.strokecolor=t.strokeStyle,this.path=s}},exports.quadrilateralShape=class{constructor({length:t=[40,40,40,40],position:i={x:140,y:140},velocity:s={x:0,y:0}}){this.length=t,this.position=i,this.velocity=s,this.width=function(t){let i=0;for(let s=0;s<t.length;s++)t[s]>i&&(i=t[s]);return i}(this.length),this.height=function(t){let i=0;for(let s=0;s<t.length;s++)t[s]>i&&(i=t[s]);return i}(this.length),this.create=!1,this.fillcolor="",this.strokecolor="",this.path=""}draw(t,i=function(){}){if(""==t||null==t||null==t)throw new Error("(canvasjs) first argument is required");if("object"!=typeof t)throw new TypeError("(canvasjs) the first value must be a canvas context");if("function"!=typeof i)throw new TypeError("(canvasjs) the second argument must be a function");let s=new Path2D;t.beginPath(),s.moveTo(this.position.x,this.position.y),s.lineTo(this.position.x+this.length[0],this.position.y),s.lineTo(this.position.x+this.length[0],this.position.y-this.length[1]),s.lineTo(this.position.x+this.length[0]-this.length[2],this.position.y-this.length[0]),s.lineTo(this.position.x,this.position.y-this.length[2]+this.length[3]),t.fillStyle="transparent",t.strokeStyle="black",i(t),t.fill(s),t.stroke(s),t.beginPath(),this.create=!0,this.fillcolor=t.fillStyle,this.strokecolor=t.strokeStyle,this.path=s}},exports.semiCircleDown=class{constructor({radius:t,position:i={x:0,y:0},velocity:s={x:0,y:0}}){let e=t;if(""==e||null==e||null==e)throw new Error("(canvasjs) radius is required");if("number"!=typeof e)throw new TypeError("(canvasjs) radius value must be a number");this.radius=t,this.width=2*this.radius,this.position=i,this.velocity=s,this.height=2*this.radius,this.create=!1,this.fillcolor="",this.strokecolor="",this.path=""}draw(t,i=function(){}){if(""==t||null==t||null==t)throw new Error("(canvasjs) first argument is required");if("object"!=typeof t)throw new TypeError("(canvasjs) the first value must be a canvas context");if("function"!=typeof i)throw new TypeError("(canvasjs) the second argument must be a function");let s=new Path2D;t.beginPath(),s.arc(this.position.x,this.position.y,this.radius,0,Math.PI,!1),t.fillStyle="transparent",t.strokeStyle="black",i(t),t.stroke(s),t.fill(s),t.beginPath(),this.create=!0,this.fillcolor=t.fillStyle,this.strokecolor=t.strokeStyle,this.path=s}},exports.semiCircleUp=class{constructor({radius:t,position:i={x:0,y:0},velocity:s={x:0,y:0}}){let e=t;if(""==e||null==e||null==e)throw new Error("(canvasjs) radius is required");if("number"!=typeof e)throw new TypeError("(canvasjs) radius value must be a number");this.radius=t,this.width=2*this.radius,this.position=i,this.velocity=s,this.height=2*this.radius,this.create=!1,this.fillcolor="",this.path="",this.strokecolor=""}draw(t,i=function(){}){if(""==t||null==t||null==t)throw new Error("(canvasjs) first argument is required");if("object"!=typeof t)throw new TypeError("(canvasjs) the first value must be a canvas context");if("function"!=typeof i)throw new TypeError("(canvasjs) the second argument must be a function");let s=new Path2D;t.beginPath(),s.arc(this.position.x,this.position.y,this.radius,0,Math.PI,!0),t.fillStyle="transparent",t.strokeStyle="black",i(t),t.stroke(s),t.fill(s),t.beginPath(),this.create=!0,this.fillcolor=t.fillStyle,this.strokecolor=t.strokeStyle,this.path=s}},exports.semiEllipseDown=class{constructor({radius:t=[60,30],position:i={x:100,y:100},velocity:s={x:0,y:0},rotation:e=0}){this.radius=t,this.width=t[0],this.height=t[1],this.create=!1,this.fillcolor="",this.strokecolor="",this.path="",this.position=i,this.velocity=s,this.rotation=e}draw(t,i=function(){}){if(""==t||null==t||null==t)throw new Error("(canvasjs) first argument is required");if("object"!=typeof t)throw new TypeError("(canvasjs) the first value must be a canvas context");if("function"!=typeof i)throw new TypeError("(canvasjs) the second argument must be a function");t.beginPath();let s=new Path2D;s.ellipse(this.position.x,this.position.y,this.width,this.height,this.rotation,0,Math.PI,!1),t.strokeStyle="black",t.fillStyle="transparent",i(t),t.fill(s),t.stroke(s),t.beginPath(),this.create=!0,this.fillcolor=t.fillStyle,this.strokecolor=t.strokeStyle,this.path=s}},exports.semiEllipseUp=class{constructor({radius:t=[60,30],position:i={x:100,y:100},velocity:s={x:0,y:0},rotation:e=0}){this.radius=t,this.width=t[0],this.height=t[1],this.create=!1,this.fillcolor="",this.strokecolor="",this.path="",this.position=i,this.velocity=s,this.rotation=e}draw(t,i=function(){}){if(""==t||null==t||null==t)throw new Error("(canvasjs) first argument is required");if("object"!=typeof t)throw new TypeError("(canvasjs) the first value must be a canvas context");if("function"!=typeof i)throw new TypeError("(canvasjs) the second argument must be a function");t.beginPath();let s=new Path2D;s.ellipse(this.position.x,this.position.y,this.width,this.height,this.rotation,0,Math.PI,!0),t.strokeStyle="black",t.fillStyle="transparent",i(t),t.fill(s),t.stroke(s),t.beginPath(),this.create=!0,this.fillcolor=t.fillStyle,this.strokecolor=t.strokeStyle,this.path=s}},exports.useSelectContext=function(t){let i=window.contexts.findIndex((i=>i.name===t));if(-1!==i)return window.contexts[i].ctx;throw new Error("[canvas] id isnot matching any canvas in `useSelectContext` Hook")};