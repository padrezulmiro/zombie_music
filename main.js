"use strict";

import Rhythm from 'src/RhythmManager.js';

let game;

let gameOptions = {
    gameWidth: 800,
    gameHeight: 600
};

window.onload = function() {
    game = new Phaser.Game(
        gameOptions.gameWidth,
        gameOptions.gameHeight,
        Phaser.AUTO,
        "game_canvas"
    );

    game.state.add("LoadGame", loadGame);
    game.state.add("PlayGame", playGame);
    game.state.start("LoadGame");
};

let loadGame = function() {};
loadGame.prototype = {
    preload: function() {
        game.load.spritesheet("hero_standing", "assets/graphic/hero_standing.png", 32, 32, 1);
    },
    create: function() {
        game.state.start("PlayGame");
    }
};

let playGame = function() {};
playGame.prototype = {
    preload: function() {

    },
    create: function() {
        let hero = this.add.sprite(0, 0, "hero_standing", 0);
        hero.scale.setTo(2,2);
        this.centerSprite(hero);

    },
    centerSprite: function(spr) {
        let center_x, center_y;

        center_x = spr.game.width/2 - spr.width/2;
        center_y = spr.game.height/2 - spr.height/2;

        spr.position.setTo(center_x, center_y);
    }

};

