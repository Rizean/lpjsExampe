module.exports = function generateBadCop (scene) {
    const {Player, random} = scene
    let badCopIsMale = true
    if (Player.isInterestedInWomen() && Player.isInterestedInMen()) {
        if (random(0, 1) > 0) {
            badCopIsMale = false
        }
    } else if (Player.isInterestedInWomen()) {
        badCopIsMale = false
    }

    let BadCop = scene.generatePersonTemporary(['fourties', 'bodybuilder'])
    BadCop.dressUniform('police')

    if (badCopIsMale) {
        BadCop.likes_vaginal = random(50, 100)
        BadCop.fertility = random(5, 20)
    } else {
        BadCop = scene.generatePersonTemporary(['fourties', 'bodybuilder_F'])
        BadCop.likes_tribadism = random(50, 100)
        BadCop.fertility = random(0, 2)
        BadCop.stock_pill = random(5, 20)

        // BadCop.dress(Sports-Slip_1_F, Sports-Bra_1_F, Office-Pants_1_F, Office-Top_1_F)
    }

    BadCop.masochist = random(-100, -20)
    BadCop.likes_rough = random(50, 100)
    BadCop.likes_anal = random(50, 100)
    BadCop.likes_bondage = random(50, 100)
    BadCop.prone_to_orgasm = random(50, 100)
    BadCop.stock_rapedrug = random(5, 20)
    BadCop.stock_condom = random(5, 20)
    // BadCop.glGunAmmo = 100
    // BadCop.glGunShootingSkill = random(50, 100)
    return BadCop
}