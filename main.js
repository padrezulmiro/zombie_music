 "use strict";

import load from "./src/states/LoadGame.js";
import play from "./src/states/PlayGame.js";

class Game extends Phaser.Game {

    constructor(game_options) {
        super(game_options);
    }
}

let gameOptions = {
    gameWidth: 800,
    gameHeight: 600,
    renderer: Phaser.AUTO,
    parent: "game_canvas"
};

window.onload = function() {
    const GAME = new Game(gameOptions);

    GAME.state.add("LoadGame", load.LoadGame);
    GAME.state.add("PlayGame", play.PlayGame);
    GAME.state.start("LoadGame");
};

//todo Replace let's with const's where applicable
