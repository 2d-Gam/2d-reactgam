export default class Circle {
  constructor({
    radius,
    position = {
      x: 0,
      y: 0
    },
    velocity = {
      x: 0,
      y: 0
    },
    startAngle = 0,
    endAngle = Math.PI * 2,
    antiClockWise = false
  }) {
    //required values
    let width = radius
    if (width == "" ||
      width == undefined ||
      width == null) {
      throw new Error("(canvasjs) radius is required")
    } else if (typeof(width) !== "number") {
      throw new TypeError("(canvasjs) radius value must be a number")
    }
    this.radius = radius
    this.width = this.radius * 2
    this.position = position
    this.velocity = velocity
    this.height = this.radius * 2
    this.create = false
    this.fillcolor = ""
    this.strokecolor = ""
    this.path = ""
    this.startAngle = startAngle
    this.EndAngle = endAngle
    this.antiClockWise = antiClockWise
  }
  draw(c, callBackFunction = function() {}) {
    //required value
    if (c == "" ||
      c == undefined ||
      c == null) {
      throw new Error("(canvasjs)first argument is required")
    } else if (typeof(c) !== "object") {
      throw new TypeError("(canvasjs) the first value must be a canvas context")
    }
    //checking the type of the second argu
    if (typeof(callBackFunction) !== "function") {
      throw new TypeError("(canvasjs) the second argument must be a function")
    }

    //darwing the circle
    let circle = new Path2D()
    c.beginPath()
    circle.arc(this.position.x, this.position.y, this.radius, this.startAngle, this.EndAngle, false)
    c.fillStyle = "transparent"
    c.strokeStyle = "black"
    callBackFunction(c)
    c.stroke(circle)
    c.fill(circle)
    c.beginPath()
    this.create = true
    this.fillcolor = c.fillStyle
    this.strokecolor = c.strokeStyle
    this.path = circle
  }
}