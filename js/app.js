var Enemy = function (x, y, speed) {
  this.speed = speed;
  this.x = x; // enemy x coordinate
  this.y = y; // enemy y coordinate
  this.sprite = 'images/enemy-bug.png';
};


Enemy.prototype.update = function(dt) {

  this.x += this.speed * dt; // multiplied by delta time to make speed, the same speed for everyone

  if (this.x > 510) { // allows the enemeny to go off map and reset
    this.x = -50;
    this.speed = 300 + Math.floor(Math.random() * 300);
  }

  if (player.x < this.x +70 && // collision detection with the player.
    player.x + 70 > this.x &&
    player.y < this.y + 50 &&
    50 + player.y > this.y) {
    player.x = 200;
    player.y = 400;
  };
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

// handles the input the player makes with the arrow keys
Player.prototype.handleInput = function(keyPress) {

  if (keyPress === 'up' && this.y > 0) {
    this.y -= 85;
  };

  if (keyPress === 'down' && this.y < 400) {
    this.y += 85;
  };

  if (keyPress === 'right' && this.x < 400) {
    this.x += 100;
  };

  if (keyPress === 'left' && this.x > 0) {
    this.x -= 100;
  };

  if (this.y < 0) { // check for if the player reaches the end and resets the player.
    this.x = 200;
    this.y = 400;
    alert('You have reached the goal! Want to play again?')
  };
};


var allEnemies = []; // array for enemy objects to be pushed into
var eCoordinates = [60, 145, 225]; // array for Y coordinates of enemys

eCoordinates.forEach(function(y) { // creates new enemys to be pushed into an array
  var enemy = new Enemy(0, y, 300 + Math.floor(Math.random() * 300));
  allEnemies.push(enemy);
});

var player = new Player(200, 400); // new player coordinates

document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
    };

  player.handleInput(allowedKeys[e.keyCode]);
});
