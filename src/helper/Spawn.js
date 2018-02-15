export default class Spawn {
    constructor(game, level, lane) {
        this.game = game;
        this.level = level;
        this.lane = lane;
        this.time = this.game.time;
        this.timer = this.time.create(false);
        this.active = false;
        this.current = 0;
        this.spawns = this._getLaneSpawns();

        this.SECOND = 1000;
        this.MINUTE = 60 * this.SECOND;
    }

    start(time) {
        this.active = true;
        this.spawn();
    }

    _getLaneSpawns() {
        return this.level.sections.reduce((spawns, current) => {
            let sectionSpawns = spawns;

            if (!current.hasOwnProperty('lane')) {
                return;
            }

            if (this.lane === current.lane) {
                let c = current.compasses;
                for (c; c !== 0; c--) {
                    sectionSpawns = sectionSpawns.concat(current.zombies)
                }
            }

            return sectionSpawns;
        }, []);
    }

    next() {
        this.current += 1;
        return this.spawns[this.current];
    }

    spawn() {
        const zombie = this.spawns[this.current];
        //todo Create a sprite obj with Phaser


        this.timer.add(zombie.laneTimeout, this._setupNextSpawn, this);
    }

    _setupNextSpawn() {
        this.next();
        this.spawn();
    }

    
}