// noinspection JSUnresolvedVariable
const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'badcop'}, (scene) => {
    scene.WHAT([''])
    scene.WHERE([''])
    scene.WHEN([0, 24])
    scene.WHO('none')
    scene.OTHER()

    scene.start((scene) => {
        let generateBadCop = scene.lpMod.getFunction('generateBadCop')
        let BadCop = generateBadCop(scene)

        BadCop.dialogue('test')
    })
})
module.exports = scene