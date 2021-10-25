const {LPStat} = require('lifeplayjs')


module.exports = new LPStat({
    STAT_ID: 'bugs',
    STAT_NAME: 'Bugs; 99 bugs in the queue. Take one down, patch it around, 137 bugs in the queue.',
    PLAYER_ONLY: false,
    HIGHER_BETTER: 'no_difficulty_adjustment',
    STAT_MIN: 1,
    STAT_MAX: 7331,
    DAILY_CHANGE: 1,
    DEFAULT_VALUE: 1,
    NPC_ONLY: true,
})