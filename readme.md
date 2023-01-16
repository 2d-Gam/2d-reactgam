# 2d-Reactgam

2d-reactgam is a library for react to develop 2d games 🤘🤠. 
see also: [2d_gam](https://npmjs.com/package/2d_gam) 

## Installition. 

- npm:
```bash
npm install 2d_reactgam
```
- yarn:
```bash 
  yarn add 2d_reactgam
```

## Overview.
<ul>
  <li><a href="#set">Setups</a></li>
  <ul>
    <li><a href="#nor">Normal Canvas</a></li>
    <li><a href="#res">Responsive Canvas</a></li>
  </ul>
  <li><a href="#sha">Shapes</a></li>
  <li><a href="#eve">Events</a></li>
  <li><a href="#det">Detections</a></li>
  <li><a href="#ani">Movements</a></li>
  <li><a href="#tex">Texts</a></li>
</ul>

## Documentation.

<h3 id="set">Setups</h3>

Navigate to any jsx file and add the following code to it:
```jsx
import {useEffect} from "react"
import {Canvas} from "2d_reactgam"
function App() { 
  const select = useSelectContext
  useEffect(()=>{
     const ctx = select("good")
  })
  return(
    <></>
  );
}

export default App;

```

Note all drawing code and animate functions must be in the useEffect Hook.
`useSelectContext` select canvas by its id.
<h3 id="nor">Normal Canvas</h3>

With a normal Canvas you will have to give a specific number of pxiles that might not be perfect with anthor devices.

In order to setup one add the following code:

```javascript
...
 return(
   <Canvas id="good" width="300" height="300"/>
 );
```


<h3 id="res">Responsive Canvas</h3>

With a responsive Canvas you can give a decimal number wich presents how much of height or width you want to take of the whole viewport's width or height.

To create one add this 

```jsx
import {useEffect} from "react"
import {ResponsiveCanvas} from "2d_reactgam"
function App() { 
  const select = useSelectContext
  useEffect(()=>{
     const ctx = select("good")
  })
  return(
    <ResponsiveCanvas id="good" width="300"  height="300" />
  );
}

export default App;

```
NOTE:
> All code below must be written in the `useEffect` Hook
So we are good to go with creating different shapes.

<h3 id="sha">Shapes</h3>

In our library we developed 13 different shapes. All feuaters we added in the library are only working with our shapes Api.

Every shape-classe takes specific arguments , but all shapes have to have a `position:Object` and you can add a `velocity:Object` too.

Example:
```javascript
Import {Circle} from "2d_reactgam"

function App(){
  const select = useSelectContext
  useEffect(()=>{
     const ctx = select("good")
     const shape = new Circle({
        radius:12,
        position:{x:100,y:100}
     })
  })
  ...
```
Then every shape-class returns a `draw` method. It takes two arguments first the context and a callbackfunction wich can be used to style the shape.
```javascript
//draw the Circle
shape.draw(ctx, // The context
  (c)=>{
    // Use the c object to style your shape here
    c.strokeStyle = "black"
  }
)
```
In order To grap a specific values form the shape you can grap it directly.

```javascript 
//get Values from the circle object
//Tipp: Values change when the shape moves or when you let something change 
console.log(shape[value],shape.value)
```
Note:You can use the same Api in [2d_gam](https://npmjs.com/package/2d_gam)
Note: In order to have an animated shape the draw-method must be in the animataion-loop function and the shape constructor outside it.

ShapeName | Arguments required|optinal
----------|-------------------|----------
Circle    | `radius:number` | `startAngle:number` <br>`endAngle:number` `antiClockWise:boolean`
semiCircleUp & semiCircleDown| `radius:number` |none
Ellipse | `radius:[number,number]`|`rotation:0` <br> `startAngle:0` <br> `endAngle:number` <br> `antiClockWise:boolean`
semiEllipseUp & semiEllipseDown | `radius:[number,number]` | `rotation:number`
Diamond | `length:number` |none
HexagonShape | `length:[number,number,...6]` | none
Parallelogram | `length:[number,number]` |none
quadrilateralShape | `length:[number,number,...4]` |none
Snowflake | `length:number` |none
Square | `width:number` <br> `height:number` |none
Triangel | `length:[number,number,...3]` |none

<h3 id="det">Detections</h3>

**Our detections Api can only work with our shape Api**

Detections are used to detect if something happend to the element.You can detect different things.

First create an element.
```javascript 
//draw any shape; here a circle
  const circle = new Circle({
      radius: 102,
      position: {
        x: 120,
        y: 120
      }
    })
```

Then create a detect api for that element.
```javascript 
//create an detect api for this Circle
const deApi = new Detect(
  circle,//circle object
  ctx,//context
)
```

It is very good to try it with an animated shape. So let us animate it.

```javascript 
//let's animate the circle
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  requestAnimationFrame(aniamte)
  circle.position.x += 5
  circle.draw(ctx,(c)=>{
     c.strokeStyle = "black"
  })
```

Then trigger it and determine what have to happen in the callBackFunction.
```javascript 
  //trigger Detections 
  deApi.on(detectName,()=>{
    //what do you want to do when the detect is triggered 
  })
}
```

detectName | Description 
-----------|------------
touchTheScreenLeft | Trigger if the shape's edge touchs the left side of the canvas
touchTheScreenRight | Trigger if the shape's edge touchs the right side of the canvas
touchTheScreenBottom | Trigger if the shape's edge touchs the bottom  of the canvas
touchTheScreenTop | Trigger if the shape's edge touchs the top of the canvas

<h3 id="ani">Movements</h3>

**Our animations Api can only work with our shapes Api**


"No Movement, No game" and that is why we create a really huge Movements Api. With every Movement you can think about.

First create a shape.
```javascript
    const circle = new gam.Circle({
        radius:12,
        position:{
          x:120,
          y:120
        }
      })
```

And create a Movement api for it.
```javascript 
    //create a move api for the circle
    const move = new gam.Move(circle)
  ```
  
Animate the shape.
```javascript 
    //Animation
    function animate(){
      requestAnimationFrame(a,1)
      ctx.clearRect (0,0,canvas.width, canvas.height)
      
      circle.draw(ctx)
      
```

Move it now. Every move method returns the current position of the shape.

```javascript
      //move the circle to the bottom
      console.log(move.bottom(5/*speed*/))
    }
    
    animate()
```
Movement|Arguments 
--------|---------
`gam.Move(shapeName).forward(5)`  | speed
`gam.Move(shapeName).backward(5)`  | speed
`gam.Move(shapeName).top(5)`  | speed
`gam.Move(shapeName).bottom(5)`  | speed
`gam.Move(shapeName).diagonalRightBottom(5)`  | speed
`gam.Move(shapeName).diagonalLeftBottom(5)`  | speed
`gam.Move(shapeName).diagonalRightTop(5)`  | speed
`gam.Move(shapeName).diagonalLeftTop(5)`  | speed

<h3 id="tex">Text</h3>

Create a text:
```javascript 
const text = new gam.Text({
  //Required 
text = "Hello gam,
    position = {
      x: 100,
      y: 100
    },
    //optional
    velocity = {
      x: 0,
      y: 0
    },
    maxWidth = 0
})

//write it
text.write(ctx,(c)=>{
  //use the c object to style it
  c.fillStyle = "blue"
})
```


## Contact Us 📨. 
If you have any suggestions or a seucrity issue you can visit our github page or contact us per Email **abdelrahmanshaheen2007@gmail.com**.

## History ⛑. 

<ul> <li>v1.12.6 First release under the name 2d_reactgam</li> </ul> 

2d-Gam & Co
