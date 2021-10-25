const {LPStat} = require('lifeplayjs')

module.exports = new LPStat({
    STAT_ID: 'tests',
    STAT_NAME: 'Tests; Mo test mo problems!',
    PLAYER_ONLY: true,
    HIGHER_BETTER: true,
    STAT_MIN: 0,
    STAT_MAX: 1337,
    DAILY_CHANGE: 0,
    DEFAULT_VALUE: 0,
    NPC_ONLY: false,
})