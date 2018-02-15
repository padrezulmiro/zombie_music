 "use strict";

import load from "./src/states/LoadGame";
import play from "./src/states/PlayGame";

class Game extends Phaser.Game {

    constructor(options) {
        super(options);
    }
}

let gameOptions = {
    width: 1280,
    height: 720,
    renderer: Phaser.AUTO,
    parent: "game_canvas"
};

window.onload = function() {
    const GAME = new Game(gameOptions);

    GAME.state.add("LoadGame", load);
    GAME.state.add("PlayGame", play);
    GAME.state.start("LoadGame");
};

//todo Replace let's with const's where applicable
