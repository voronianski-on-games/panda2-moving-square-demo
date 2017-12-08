game.module('game.main')
.require('game.utils')
.body(function() {
  game.createScene('Main', {
    init: function() {
      this.mob = new game.Mob();
      this.mob.gfx.addTo(this.stage);
    },

    update: function() {
      if (game.keyboard.down('DOWN')) {
        this.mob.down();
      }

      if (game.keyboard.down('UP')) {
        this.mob.up();
      }

      if (game.keyboard.down('RIGHT')) {
        this.mob.right();
      }

      if (game.keyboard.down('LEFT')) {
        this.mob.left();
      }

      this.mob.checkBounds();
    }
  });

  game.createClass('Mob', {
    speed: 150,

    init: function() {
      var mob = game.config.mob;

      this.gfx = new game.Graphics();
      this.gfx.fillColor = mob.color;
      this.gfx.x = game.utils.int(game.width);
      this.gfx.y = game.utils.int(game.height);
      this.gfx.drawRect(0, 0, mob.width, mob.height);
    },

    down: function() {
      this.gfx.y += this.speed * game.delta;
    },

    up: function() {
      this.gfx.y -= this.speed * game.delta;
    },

    right: function() {
      this.gfx.x += this.speed * game.delta;
    },

    left: function() {
      this.gfx.x -= this.speed * game.delta;
    },

    checkBounds: function() {
      if (this.gfx.x < 0) {
        this.gfx.x = game.width;
      } else if (this.gfx.x > game.width) {
        this.gfx.x = 0;
      }

      if (this.gfx.y < 0) {
        this.gfx.y = game.height;
      } else if (this.gfx.y > game.height) {
        this.gfx.y = 0
      }
    }
  });
});
