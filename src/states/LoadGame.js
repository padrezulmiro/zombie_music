export default class LoadGame extends Phaser.State {
    constructor() {
        super();
    }

    preload() {
        this.game.load.spritesheet("hero_standing", "assets/graphic/hero_standing.png", 32, 32, 1);
        this.game.load.spritesheet("enemy_standing", "assets/graphic/enemy_standing.png", 32, 32, 1);
        this.game.load.image("background", "assets/graphic/simple_background.png");
    }

    create() {
        this.game.input.mousePointer.leftButton.onDown.addOnce(function() {
            this.game.state.start("PlayGame");
        }, this);
    }

    update() {}
}
