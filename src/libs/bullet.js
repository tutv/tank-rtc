const {audio_tank_shoot, img_bullet} = require('./utils')

class Bullet {
    constructor(x, y, orient, speed, type, size, uid) {
        this.x = x
        this.y = y
        this.orient = orient
        this.speed = speed
        this.type = type
        this.size = size
        this.uid = uid
        this.id = window.bulletID++

        this.image = img_bullet

        audio_tank_shoot.play().then(() => console.log('played'))
    }

    setID(id) {
        this.id = id
    }

    move() {
        switch (this.orient) {
            case 1:
                this.y -= this.speed
                break
            case 2:
                this.y += this.speed
                break
            case 3:
                this.x -= this.speed
                break
            case 4:
                this.x += this.speed
                break
        }
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y)
    }
}

module.exports = Bullet
