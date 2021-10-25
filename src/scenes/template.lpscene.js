// noinspection JSUnresolvedVariable
const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'cinema_with_date_passive'}, (scene) => {
    const {Player, CurrentCompanion, random, option, choice, isModEnabled, start, paren, WHAT, narrative} = scene
    scene.WHAT([])
    scene.WHERE([])
    scene.WHEN([0, 24])
    scene.WHO('none')
    scene.OTHER(($IF) => {
    })

    scene.start(() => {

    })

})
module.exports = scene
