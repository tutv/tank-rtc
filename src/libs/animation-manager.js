
class AnimationManager {
    constructor() {
        this.animArr = []
    }

    addNewAnim(newAnim) {
        this.animArr.push(newAnim)
    }

    runAllAnim(context) {
        let tempArr = []
        for (let i = 0; i < this.animArr.length; i++) {
            let anim = this.animArr[i]
            if (anim.runAnimation(context)) {
                tempArr.push(anim)
            }
        }
        this.animArr = tempArr
    }
}

module.exports = AnimationManager
