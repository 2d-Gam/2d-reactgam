function GreateX(array) {
  let GreateX = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > GreateX) {
      GreateX = array[i]
    }
    else {
      continue
    }
  }
  return GreateX
}
 function GreateY(array) {
  let GreateY = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > GreateY) {
      GreateY = array[i]
    }
    else {
      continue
    }
  }
  return GreateY
}

export default class quadrilateralShape {
  constructor({
    length = [40, 40, 40, 40],
    position = {
      x: 140,
      y: 140
    },
    velocity = {
      x: 0,
      y: 0
    }
  }) {
    this.length = length
    this.position = position
    this.velocity = velocity
    this.width = GreateX(this.length)
    this.height = GreateY(this.length)
    this.create = false
    this.fillcolor = ""
    this.strokecolor = ""
    this.path = ""
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
    
    let quadrilateralShape  = new Path2D()
    c.beginPath()
    quadrilateralShape.moveTo(this.position.x, this.position.y)
    quadrilateralShape.lineTo(this.position.x + this.length[0], this.position.y)
    quadrilateralShape.lineTo(this.position.x + this.length[0], this.position.y - this.length[1])

    quadrilateralShape.lineTo((this.position.x + this.length[0]) - this.length[2], this.position.y - this.length[0])
    quadrilateralShape.lineTo(this.position.x, (this.position.y - this.length[2]) + this.length[3])
    c.fillStyle = "transparent"
    c.strokeStyle = "black"
    callBackFunction(c)
    c.fill(quadrilateralShape)
    c.stroke(quadrilateralShape)
    c.beginPath()
    
    this.create = true
    this.fillcolor = c.fillStyle
    this.strokecolor = c.strokeStyle
    this.path = quadrilateralShape
  }
}
