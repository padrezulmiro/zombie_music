import Lane from './Lane'

 export default class Lanes extends Phaser.Group {
    /*
    Creates and manages access to the lanes from which the zombies attack: West and East.
     */

    constructor(game, name) {
        /*
        @ https://photonstorm.github.io/phaser-ce/Phaser.Group.html#parent:

        "All DisplayObjects must belong to a parent in order to be rendered"

        todo Does this mean that with this.parent = null will Lanes render?
         */

        super(game, null, name);

        this.lanes = {};
        this.LANE_CONFIG = {
            west: {
                x: 50,
                y: 360,
                side: 'west'
            },

            east: {
                x: 1230,
                y: 360,
                side: 'east'
            }
        };

        const westLane = new Lane(game, this, 'west', this.LANE_CONFIG.west);
        const eastLane = new Lane(game, this, 'east', this.LANE_CONFIG.east);

        this.lanes.west = westLane;
        this.lanes.east = eastLane;

        this.addMultiple([westLane, eastLane]);
    }

    startSpawning() {
        const startTime = this.game.time.now;
        this.callAll('startSpawning', null, startTime);
    }
}