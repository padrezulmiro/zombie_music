class LoadGame extends Phaser.State {
    constructor() {
        super();
    }

    preload() {
        this.game.load.spritesheet("hero_standing", "assets/graphic/hero_standing.png", 32, 32, 1);
        this.game.load.spritesheet("enemy_standing", "assets/graphic/enemy_standing.png", 32, 32, 1);
    }

    create() {
        this.game.state.start("PlayGame")
    }
}

export default {LoadGame};
