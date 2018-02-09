import level from "../config/level1"
import RM from "../helper/RhythmManager"

class PlayGame extends Phaser.State {
    constructor() {
        super();
    }

    preload() {}

    create() {
        this.hero = this.add.sprite(0, 0, "hero_standing", 0);
        this.hero.scale.setTo(2, 2);
        this.centerSprite(this.hero);

        this.rhythmManager = new RM.RhythmManager(this.game, level.LEVEL);
        this.rhythmManager.activate();
    }

    update() {}

    centerSprite(spr) {
        let center_x, center_y;

        center_x = spr.game.width / 2 - spr.width / 2;
        center_y = spr.game.height / 2 - spr.height / 2;

        spr.position.setTo(center_x, center_y);
    }
}

export default {PlayGame};