let playGame = function() {};
playGame.prototype = {
    preload: function() {},
    create: function () {
        let hero = this.add.sprite(0, 0, "hero_standing", 0);
        hero.scale.setTo(2, 2);
        this.centerSprite(hero);
    },
    centerSprite: function (spr) {
        let center_x, center_y;

        center_x = spr.game.width / 2 - spr.width / 2;
        center_y = spr.game.height / 2 - spr.height / 2;

        spr.position.setTo(center_x, center_y);
    }
};
export default {playGame};