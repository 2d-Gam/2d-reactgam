export default class Ellipse {
  constructor({
    radius = [60,30],
    position = {
      x: 100,
      y: 100
    },
    velocity = {
      x: 0,
      y: 0
    },
    rotation = 0,
    startAngle = 0,
    endAngle = Math.PI * 2,
    antiClockWise = false
  }) {
    this.radius = radius
    this.width = radius[0]
    this.height = radius[1]
    this.create = false
    this.fillcolor = ""
    this.strokecolor = ""
    this.path = ""
    this.position = position
    this.velocity = velocity
    this.rotation = rotation
    this.startAngle = startAngle
    this.EndAngle = endAngle
    this.antiClockWise = antiClockWise
  }

  draw(c, callBackFunction = function() {}) {
    if (c == "" ||
      c == undefined ||
      c == null) {
      throw new Error("(canvasjs) first argument is required")
    } else if (typeof(c) !== "object") {
      throw new TypeError("(canvasjs) the first value must be a canvas context")
    }
    //checking the type of the second argu
    if (typeof(callBackFunction) !== "function") {
      throw new TypeError("(canvasjs) the second argument must be a function")
    }
    
    c.beginPath()
    let ellipse = new Path2D()
    ellipse.ellipse(this.position.x,this.position.y
    ,this.width,this.height,this.rotation,this.startAngle,this.EndAngle,this.antiClockWise)
    c.strokeStyle = "black"
    c.fillStyle = "transparent"
    callBackFunction(c)
    c.fill(ellipse)
    c.stroke(ellipse)
    c.beginPath()
    
    this.create = true
    this.fillcolor = c.fillStyle
    this.strokecolor = c.strokeStyle
    this.path = ellipse
  }
}
