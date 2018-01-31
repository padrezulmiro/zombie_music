(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

//import Phaser from "./node_modules/phaser-ce/build/phaser.min.js"

var game = void 0;

var gameOptions = {
    gameWidth: 800,
    gameHeight: 600
};

window.onload = function () {
    game = new Phaser.Game(gameOptions.gameWidth, gameOptions.gameHeight, Phaser.AUTO, "game_canvas");
    game.state.add("LoadGame", loadGame);
    game.state.add("PlayGame", playGame);
    game.state.start("LoadGame");
};

var loadGame = function loadGame() {};
loadGame.prototype = {
    preload: function preload() {
        game.load.spritesheet("hero_standing", "assets/graphic/hero_standing.png", 32, 32, 1);
    },
    create: function create() {
        game.state.start("PlayGame");
    }
};

var playGame = function playGame() {};
playGame.prototype = {
    preload: function preload() {},
    create: function create() {
        var hero = this.add.sprite(0, 0, "hero_standing", 0);
        hero.scale.setTo(2, 2);
        this.centerSprite(hero);
    },
    centerSprite: function centerSprite(spr) {
        var center_x = void 0,
            center_y = void 0;

        center_x = spr.game.width / 2 - spr.width / 2;
        center_y = spr.game.height / 2 - spr.height / 2;

        spr.position.setTo(center_x, center_y);
    }

};

},{}]},{},[1]);
