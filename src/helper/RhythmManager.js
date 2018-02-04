class RhythmManager extends Phaser.Timer{
    constructor(game, level) {
        super(game, false);
        this.level = level;
    }

    setSpawnTimers() {
        //todo This implementation won't allow for multiple spawns at the same time
        const pulseRatio = 60/this.level.pulse;
        let delayArray = [];

        this.level.rhythmSections.reduce((delayAccumulator, section) => {
            let delay = delayAccumulator,
                totalRhythmArray = [];

            let c = section.compasses;
            for (c; c !== 0; c--) {
                totalRhythmArray = totalRhythmArray.concat(section.rhythm);
            }

            console.log(totalRhythmArray);

            totalRhythmArray.forEach((beat) => {
                const beatDuration = beat * pulseRatio;

                delayArray.push(delay);
                delay += beatDuration;
            });

            return delay;
        }, 0);
    }
}

export default {RhythmManager}