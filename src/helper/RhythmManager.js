class RhythmManager {
    /*
    Parses a level object and creates timers via Phaser.Timer that marks the cues for zombie
    spawning.
     */

    constructor(game, level) {
        this.game = game;
        this.timer = game.time.events;
        this.level = level;
        this.active = false;

        this.SECOND = 1000;
        this.MINUTE = 60 * this.SECOND;
    }

    activate() {
        this._startTime = this.timer.seconds;
        this._setSpawnTimers(this._startTime);
        this.active = true;
    }

    inactivate() {
        this.active = false;
    }

    deltaTime() {
        if (this.active) {
            return this.timer.seconds - this._startTime;
        }
    }

    _getSpawnCues(start, wait = 0) {
        //todo This implementation won't allow for multiple spawns at the same time
        const pulseRatio = 60/this.level.bpm;
        let delayArray = [];

        this.level.sections.reduce((delayAccumulator, section) => {
            let delay = delayAccumulator,
                totalRhythmArray = [];

            let c = section.compasses;
            for (c; c !== 0; c--) {
                totalRhythmArray = totalRhythmArray.concat(section.zombies);
            }

            totalRhythmArray.forEach((beat) => {
                const beatDuration = beat * pulseRatio;

                delayArray.push(delay);
                delay += beatDuration;
            });

            return delay;
        }, start + wait);

        return delayArray;
    }

    _setSpawnTimers(start) {
        const cues = this._getSpawnCues(start, 2);
        const timerCallback = (delay) => {
            console.log("Timer at " + delay.toString() + "\nCue at " + (this.deltaTime()*this.SECOND).toString());
            console.log("Delta Time is " + (this.deltaTime() * this.SECOND - delay).toString());
        };

        cues.forEach((cue) => {
            const delay = cue * this.SECOND;
            this.timer.add(delay, timerCallback, this, delay);
        }, this);


    }
}

export default {RhythmManager}