var Enemy = function (x, y, speed) {
  this.speed = speed;
  this.x = x; // enemy x coordinate
  this.y = y; // enemy y coordinate
  this.sprite = 'images/enemy-bug.png';
};


Enemy.prototype.update = function(dt) {

  this.x += this.speed * dt;

  if (this.x > 510) {
    this.x = -50;
    this.speed = 100 + Math.floor(Math.random() * 100);
  }

};


Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var Player = function(x, y) {
  this.x = x; //player x coordinate
  this.y = y; //player y coordinate
  this.sprite = 'images/char-cat-girl.png';
};

Player.prototype.update = function(dt) {

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress) {

  if (keyPress === 'up' && this.y > 0) {
    this.y -= 100;
  };

  if (keyPress === 'down' && this.y < 500) {
    this.y += 100;
  };

  if (keyPress === 'right' && this.x < 500) {
    this.x += 100;
  };

  if (keyPress === 'left' && this.x > 0) {
    this.x -= 100;
  };

  if (this.y < 0) {
    this.x = 200;
    this.y = 400;
  };
};


var allEnemies = [];
var eCoordinates = [100, 200, 300];

eCoordinates.forEach(function(y) {
  var enemy = new Enemy(0, y, 100 + Math.floor(Math.random() * 300)); // creates new enemy with x, y, and speed
  allEnemies.push(enemy);
});

var player = new Player(200, 400);

document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
    };

  player.handleInput(allowedKeys[e.keyCode]);
});
