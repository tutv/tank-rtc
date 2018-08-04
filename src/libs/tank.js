const Bullet = require('./bullet');
const {
    image_up_player_up_1, image_up_player_up_2, image_up_player_up_3, image_up_player_up_4,
    image_up_enemy_up_1, image_up_enemy_up_2, image_up_enemy_up_3, image_up_enemy_up_4
} = require("./utils")
const {TANK_SIZE, BULLET_SIZE, BULLET_SPEED} = require('../constants/game')

class Tank {
    constructor(x, y, speed, type, uid) {
        this.x = x
        this.y = y
        this.speed = speed
        this.type = type
        this.uid = uid
        this.image = new Image()
        this.currOrient = 1
        this.enemy_revenge = ""
        this.isRevenge = false
        this.isAlive = true

        this.size = TANK_SIZE
        this.name = ""

        this.image_up = new Image()
        this.image_down = new Image()
        this.image_left = new Image()
        this.image_right = new Image()

        if (this.type === 1) {
            // player
            this.name = "Me"
            this.image_up = image_up_player_up_1
            this.image_down = image_up_player_up_2
            this.image_left = image_up_player_up_3
            this.image_right = image_up_player_up_4
        } else {
            //enemy
            this.name = "Enemy"

            this.image_up = image_up_enemy_up_1
            this.image_down = image_up_enemy_up_2
            this.image_left = image_up_enemy_up_3
            this.image_right = image_up_enemy_up_4
        }
    }

    move(orient) {
        this.currOrient = orient
        switch (orient) {
            case 1: //up
                this.y += -this.speed
                break
            case 2: // down
                this.y += this.speed
                break
            case 3: // left
                this.x += -this.speed
                break
            case 4: // right
                this.x += this.speed
                break
        }
    }

    draw(context) {
        if (this.isAlive) {
            switch (this.currOrient) {
                case 1: //up
                    this.image = this.image_up
                    break
                case 2: // down
                    this.image = this.image_down
                    break
                case 3: // left
                    this.image = this.image_left
                    break
                case 4: // right
                    this.image = this.image_right
                    break
            }

            context.drawImage(this.image, this.x, this.y)
            context.font = "15px Georgia"
            if (!this.isRevenge) {
                context.fillStyle = "#ffffff"
            } else {
                context.fillStyle = "#FF0000"
            }

            context.fillText(this.name, this.x, this.y - 10)
            // console.log(this.name.width)
        }
    }

    shoot() {
        return new Bullet(this.x + TANK_SIZE / 2 - BULLET_SIZE / 2, this.y + TANK_SIZE / 2 - BULLET_SIZE / 2, this.currOrient, BULLET_SPEED, this.type, BULLET_SIZE, this.uid)
    }

    isInside(objX, objY, objSize) {

        const xLeft = objX
        const xRight = objX + objSize
        const yTop = objY
        const yBottom = objY + objSize

        if (this.isPointInside(xLeft, yTop)) {
            return true
        }
        if (this.isPointInside(xRight, yTop)) {
            return true
        }
        if (this.isPointInside(xLeft, yBottom)) {
            return true
        }

        return this.isPointInside(xRight, yBottom)
    }

    isPointInside(objX, objY) {
        return objX > this.x && objX < (this.x + TANK_SIZE) && objY > this.y && objY < (this.y + TANK_SIZE)
    }
}

module.exports = Tank
