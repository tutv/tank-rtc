const {img_brick} = require('./utils')

class Brick {
    constructor(x, y, size) {
        this.x = x
        this.y = y
        this.size = size

        this.image = img_brick
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y)
    }

    isInside(objX, objY, objSize) {
        let xLeft = objX
        let xRight = objX + objSize
        let yTop = objY
        let yBottom = objY + objSize

        if (this.isPointInside(xLeft, yTop, this.x, this.y, this.size)) {
            return true
        }

        if (this.isPointInside(xRight, yTop, this.x, this.y, this.size)) {
            return true
        }

        if (this.isPointInside(xLeft, yBottom, this.x, this.y, this.size)) {
            return true
        }

        if (this.isPointInside(xRight, yBottom, this.x, this.y, this.size)) {
            return true
        }

        ////// is inside tank
        let brickXLeft = this.x
        let brickXRight = this.x + this.size
        let brickYTop = this.y
        let brickYBottom = this.y + this.size
        if (this.isPointInside(brickXLeft, brickYTop, objX, objY, objSize)) {
            return true
        }
        if (this.isPointInside(brickXRight, brickYTop, objX, objY, objSize)) {
            return true
        }
        if (this.isPointInside(brickXLeft, brickYBottom, objX, objY, objSize)) {
            return true
        }

        return this.isPointInside(brickXRight, brickYBottom, objX, objY, objSize)
    }

    isPointInside(objX, objY, obj2X, obj2Y, obj2Size) {
        return objX > obj2X && objX < (obj2X + obj2Size) && objY > obj2Y && objY < (obj2Y + obj2Size)
    }
}

module.exports = Brick
