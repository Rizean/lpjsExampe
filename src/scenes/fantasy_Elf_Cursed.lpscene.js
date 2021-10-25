// noinspection JSUnresolvedVariable
const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'fantasy_Elf_Cursed'}, (scene) => {
    const {Player, CurrentCompanion, random, option, choice} = scene
    scene.WHAT(['all'])
    scene.WHERE(['all', '-home', '-work', '-university:school', '-university:work'])
    scene.WHEN([0, 24])
    scene.WHO('none')
    scene.OTHER(($IF) => {
        $IF(!Player.isAtHome() && scene.percentageElves > 0 && scene.isModEnabled('vin_NonConsensual'))
    })

    scene.start(() => {
        let attempts = 0
        let eElf = scene.generatePersonTemporary(['Elf'])
        while (!Player.isInterestedIn(eElf) && attempts < 5) {
            eElf = scene.generatePersonTemporary(['Elf'])
            attempts += 1
        }
        eElf.blendPreset('Elf')
        eElf.makeInterested(Player)
        eElf.masochist = random(10, 100) * -1
        Player.dialogue('Oh!... Oh!')
        eElf.dress()
        eElf.show()
        scene.narrative("I'm getting very hot right now & horny")

        eElf.dialogue("Ha, ha, ha.")
        scene.narrative("That Elf cursed me!")
        scene.narrative("Trying to force me to masturbate, furiously!.")
        option([
            {text: "Give in"},
            {text: "Give in"},
            {text: "Try to resist", condition: () => (Player.intelligence > 70 && Player.karma > 50)},
            {text: "Give in"},
        ])

        if (choice(2)) {
            scene.narrative("By some miracle and a force of will. I resisted the elf's magic.")
            Player.perversion -= 10
            Player.arousal = 10
        } else {
            scene.narrative("I... can't... resist... it...!")
            Player.strip()
            Player.arousal += 100

            option([
                {text: "Give in"},
                {text: "...Help me!"},
                {text: "...Run", condition: () => (Player.fitness > 50)},
                {text: "...Revenge", condition: () => (Player.masochist < -20)},
            ])

            if (choice(3)) {
                scene.narrative("If I'm going to be this elf's plaything, then I'm going to teach <eElf.him_or_her> a lesson.")
                Player.animate('martialart')
                Player.moveToPersonStand(eElf, 100)
                scene.faceEachOther(eElf, Player)
                eElf.animate('martialart')
                Player.animate()
                eElf.animate()

                if (Player.martial > eElf.martial) {
                    eElf.animate('fightlost')
                    eElf.dialogue("Ah!", 'Pain')
                    eElf.strip()
                    Player.dialogue("Who is fucking who now.", 'Angry')
                    scene.filter('Aggressive')
                    scene.talkNonConsensual()
                    scene.sexNoAffair([Player, eElf])
                    Player.masochist -= 10
                    Player.perversion += 20
                } else {
                    Player.animate('FightLost')
                    Player.dialogue("Ah!", 'Pain')
                    eElf.dialogue("Ha! You really thought you could match me in a fight?", 'Evil')
                    scene.filter('Solo')
                    scene.sex([Player])
                    eElf.dialogue("Now it is my turn.", 'Evil')
                    scene.filter('Aggressive')
                    scene.talkNonConsensual()
                    scene.sexNoAffair([eElf, Player])
                    Player.masochist += 10
                    Player.perversion += 40
                }

            } else if (choice(1)) {
                let Helper = CurrentCompanion
                if (!Helper.isValid()) {
                    Helper = scene.generatePersonTemporary()
                    while (!Helper.isInterestedIn(Player) || Helper.age > 35) {
                        Helper = scene.generatePersonTemporary()
                    }
                    Helper.randomizeHairs()
                    Helper.randomizeSexy()
                    Helper.randomizeFace()
                    Helper.dress()
                    Helper.show(2)
                }

                if (!scene.isModEnabled('vin_Incest') && Helper.isRelative()) {
                    scene.narrative("I can't ask my <Relative.relationship> to help me...")
                    scene.narrative("I could not fight my urges any longer.")
                    scene.narrative("And start masturbating right there.")
                    scene.filter('Solo')
                    scene.sex([Player])
                    Player.perversion += 10
                } else {
                    if (Helper.isRace('Elf') && (Helper.intelligence + random(0, 15)) > eElf.intelligence) {
                        scene.narrative("Luck for me <Helper.name> was there and was able to counter the curse.")
                        Helper.rapportwithplayer += random(5, 15)
                    } else {
                        Player.dialogue("<Helper.name> help me...")
                        Helper.dialogue("What do you need me to do?")
                        Player.dialogue("I'm losing control of myself...")
                        Helper.dialogue("Will this help?")
                        let inLust = random(135, 400) < Helper.attractiontoplayer + Helper.incest + Helper.perversion + Helper.rapportwithplayer
                        if (inLust) {
                            Helper.incest += random(1, 2)

                            if (Helper.perversion < 50) {
                                scene.filter(['Handjob', 'Blowjob', 'Boobjob'])
                                scene.sexNoAffair([Player, Helper])
                                Helper.arousal += 50

                                if (Helper.arousal > 70 || Helper.perversion > 75) {
                                    Helper.dialogue("Oh no! I think I'm being cursed too.", 'Flirty')
                                    Player.dialogue("More!", 'Flirty')
                                    scene.sex([Player, Helper])
                                    Helper.incest += 10
                                    Helper.attractiontoplayer += 10
                                    Helper.perversion += 10
                                    Player.perversion += 10
                                }
                            } else {
                                Helper.incest += 10
                                Helper.attractiontoplayer += 10
                                scene.sex([Player, Helper])
                            }
                            Helper.incest += 10
                            Helper.attractiontoplayer += 10
                            Helper.perversion += 10
                        } else {
                            scene.narrative("<Helper.name> got some cold water and dumped it on me.")
                            scene.narrative("It did not work...")
                            scene.filter('Solo')
                            scene.sex([Player])
                            Player.perversion += 10
                        }
                    }
                }
            } else if (choice(2)) {
                scene.narrative("I make a run for it.")
                scene.setBackground('toilets')

                option([
                    {text: "Give in"},
                    {text: "...Run", condition: () => (Player.intelligence > 45 && Player.karma > 25)},
                ])
                if (choice(2)) {
                    scene.narrative("I resisted the elf's magic this time.")
                    Player.perversion -= 5
                    Player.arousal -= random(0, 90)
                } else {
                    scene.narrative("I could not fight my urges any longer.")
                    scene.narrative("And start masturbating right there.")
                    scene.filter('Solo')
                    scene.sex([Player])
                    Player.perversion += 5
                    scene.narrative("At least no one saw me.")
                }
            } else {
                scene.narrative("I could not fight my urges any longer.")
                scene.narrative("And start masturbating right there.")
                scene.filter('Solo')
                scene.sex([Player])
                Player.perversion += 10
                let Stranger = CurrentCompanion
                if (!Stranger.isValid()) {
                    while (!Stranger.isInterestedIn(Player) || Stranger.age > 35) {
                        Stranger = scene.generatePersonTemporary([])
                    }
                    Stranger.randomizeHairs()
                    Stranger.randomizeSexy()
                    Stranger.randomizeFace()
                    Stranger.dress()
                }

                let inLust = random(150, 300) < Stranger.attractiontoplayer + Stranger.incest + Stranger.perversion
                if (inLust && Player.isInterestedIn(Stranger) && (scene.isModEnabled('vin_Incest') || !Stranger.isRelative())) {
                    Stranger.show()
                    scene.narrative("No longer able to hold back <Stranger.his_or_her> arousal, a <Stranger.name> approaches me ...")

                    option([
                        {text: "Yes"},
                        {text: "No"},
                    ])

                    if (choice(0)) {
                        scene.filter()
                        scene.sex([Player, Stranger])
                        Player.perversion += 10
                        Stranger.incest += 10
                        Stranger.perversion += 10
                        Stranger.attractiontoplayer += 10
                    }
                }
            }
        }
    })
    scene.timeout(300, ['fantasy_Elf_Cursed'])

})
module.exports = scene
