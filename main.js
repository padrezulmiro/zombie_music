 "use strict";

import loadGame from "./src/states/loadGame.js";
import playGame from "./src/states/playGame.js";

let gameOptions = {
    gameWidth: 800,
    gameHeight: 600
};

window.onload = function() {
    const GAME = new Phaser.Game(
        gameOptions.gameWidth,
        gameOptions.gameHeight,
        Phaser.AUTO,
        "game_canvas"
    );

    console.log(GAME);

    GAME.state.add("LoadGame", loadGame.loadGame);
    GAME.state.add("PlayGame", playGame.playGame);
    GAME.state.start("LoadGame");
};
