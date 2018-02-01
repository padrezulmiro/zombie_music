let loadGame = function() {};
loadGame.prototype = {
    preload: function() {
        this.game.load.spritesheet("hero_standing", "assets/graphic/hero_standing.png", 32, 32, 1);
    },
    create: function() {
        this.game.state.start("PlayGame");
    }
};

export default {loadGame};