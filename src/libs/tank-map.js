const BrickManager = require('./brick-manager')
const Brick = require('./brick')

class TankMap {
    constructor(width, height, size) {
        this.width = width
        this.height = height
        this.size = size

        this.brickMgr = new BrickManager()

        this.initData()
    }

    initData() {
        const itemWidth = this.width / this.size
        const itemHeight = this.height / this.size
        for (let i = 0; i < itemWidth; i++) {
            for (let j = 0; j < itemHeight; j++) {
                if (i === 0 || j === 0 || i === itemWidth - 1 || j === itemHeight - 1) {
                    const tempBrick = new Brick(i * this.size, j * this.size, this.size)
                    this.brickMgr.addBrick(tempBrick)
                }
            }
        }

        const tempBrick1 = new Brick(200, 150, this.size)
        const tempBrick2 = new Brick(230, 400, this.size)
        const tempBrick3 = new Brick(180, 120, this.size)
        const tempBrick4 = new Brick(280, 520, this.size)
        const tempBrick5 = new Brick(620, 320, this.size)
        const tempBrick6 = new Brick(780, 420, this.size)

        this.brickMgr.addBrick(tempBrick1)
        this.brickMgr.addBrick(tempBrick2)
        this.brickMgr.addBrick(tempBrick3)
        this.brickMgr.addBrick(tempBrick4)
        this.brickMgr.addBrick(tempBrick5)
        this.brickMgr.addBrick(tempBrick6)
    }

    draw(context) {
        this.brickMgr.drawAll(context)

    }

    isMoveTable(objX, objY, size) {
        return this.brickMgr.isMoveTable(objX, objY, size)
    }
}

module.exports = TankMap
