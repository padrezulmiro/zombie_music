import Level from "../config/Level1"
import Spawn from '../helper/Spawn'

export default class Lane extends Phaser.Group {
    /*
    Represents one of two lanes: W and E

    The zombies come from these two lanes and are spawned and managed by this
    class
     */

    constructor(game, parent, name, config) {
        super(game, parent, name, false, true, Phaser.Physics.ARCADE);

        this.game = game;
        this.x = config.x;
        this.y = config.y;
        this.side = config.side;
        this.spawns = new Spawn(this.game, Level.LEVEL, this.side)


    }

    startSpawning(time) {
        this.spawns.start(time);
    }

    //todo Add functionality for the rings in the lane which denote "distance" from the player in units of beats

}