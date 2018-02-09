class Lane extends Phaser.group {
    /*
    Represents one of two lanes: W and E

    The zombies come from these two lanes and are spawned and managed by this
    class
     */

    constructor(game, parent, name, side) {
        super(game, parent, name);

        this.side = _setSide(side);
    }

    _setSide(side) {
        this.x = side === 'e' ? 750 : 50;
        this.y = 300;

        return side;
    };

    spawn(type) {}

}