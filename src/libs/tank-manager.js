
class TankManager {

    constructor(size) {
        this.size = size

        this.tankArr = []
    }

    addNewTank(newTank) {
        this.tankArr.push(newTank)
    }

    removeTank(uid) {
        var tempArr = new Array()
        for (var i = 0; i < this.tankArr.length; i++) {
            var tempTank = this.tankArr[i]
            if (tempTank.uid != uid) {
                tempArr.push(this.tankArr[i])
            } else {
                // explore(tempTank.x, tempTank.y, 1)
            }
        }
        this.tankArr = tempArr
    }

    getNameTankByUid(uid) {
        for (var i = 0; i < this.tankArr.length; i++) {
            var tempTank = this.tankArr[i]
            if (tempTank.uid == uid) {
                return tempTank.name
            }
        }
    }

    updateTankRevenge(uid) {
        for (var i = 0; i < this.tankArr.length; i++) {
            if (this.tankArr[i].uid == uid) {
                this.tankArr[i].isRevenge = true
            } else {
                this.tankArr[i].isRevenge = false
            }
        }
    }

    updateTank(newX, newY, newOrient, uid) {
        for (var i = 0; i < this.tankArr.length; i++) {
            if (this.tankArr[i].uid == uid) {
                this.tankArr[i].x = newX
                this.tankArr[i].y = newY
                this.tankArr[i].currOrient = newOrient
            }
        }
    }

    drawAll(context) {
        for (var i = 0; i < this.tankArr.length; i++) {
            this.tankArr[i].draw(context)
        }
    }
}

module.exports = TankManager
