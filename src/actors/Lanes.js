import RhythmManager from "../helper/RhythmManager";

class Lanes extends Phaser.Group {
    /*
    Creates and manages access to the lanes from which the zombies attack: West and East.
     */

    constructor(game, name, level) {
        /*
        @ https://photonstorm.github.io/phaser-ce/Phaser.Group.html#parent:

        "All DisplayObjects must belong to a parent in order to be rendered"

        todo Does this mean that with this.parent = null will Lanes render?
         */

        super(game, null, name);

        this.rhythms = new RhythmManager(game, level);
        this.lanes = {};

        const westLane = new Lane(game, this, 'west', 'w');
        const eastLane = new Lane(game, this, 'east', 'e');

        this.lanes.w = westLane;
        this.lanes.e = eastLane;

        this.addMultiple([westLane, eastLane]);
    }

    spawn(type, lane) {
        if (!this.lanes.hasOwnProperty(lane)) {
            return false;
        }

        this.lanes[lane].spawn(type);
    }
}