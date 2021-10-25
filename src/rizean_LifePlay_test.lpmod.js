const modsDir = process.env.MODS_DIR
const {LPMod} = require('lifeplayjs')

// ***** Edit Below this line ***** //

const lpMod = new LPMod({
    MODULE_UNIQUEID: 'rizean_LifePlay_test',
    MODULE_NAME: 'LifePlay.js Test Mod',
    MODULE_AUTHOR: 'Rizean',
    MODULE_LINK: '',
    MODULE_DESCRIPTION: 'LifePlay.js Test Mod',
    MODULE_REQUIREMENTS: '',
    modsDir,
})

lpMod.addFunction('generateBadCop', require('./functions/generateBadCop'))

lpMod.addStat(require('./stats/tests.lpstat'))
lpMod.addStat(require('./stats/bugs.lpstat'))

lpMod.addAction(require('./actions/onlyfans.lpaction'))
lpMod.addAction(require('./actions/open_relationship.lpaction'))

lpMod.addScene(require('./scenes/cinema_with_date_passive.lpScene'))
lpMod.addScene(require('./scenes/badcop.lpscene'))
lpMod.addScene(require('./scenes/fantasy_Elf_Cursed.lpscene'))

// ***** Edit Above this line ***** //
lpMod.writeMod()