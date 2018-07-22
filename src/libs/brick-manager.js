
class BrickManager {

    constructor() {
        this.brickArr = [];
    }

    addBrick(brick) {
        this.brickArr.push(brick);
    }

    drawAll(context) {
        for (let i = 0; i < this.brickArr.length; i++) {
            this.brickArr[i].draw(context);
        }
    }

    isMoveTable(x, y, size) {
        for (let i = 0; i < this.brickArr.length; i++) {
            if (this.brickArr[i].isInside(x, y, size)) {
                return false;
            }
        }

        return true;
    }
}

module.exports = BrickManager;
