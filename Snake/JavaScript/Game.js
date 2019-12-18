// JavaScript Document
//Self calling function of Game
(function (win) {
    var that = null;
    var score = 0;
    var num = document.getElementById("number");
    console.log(num.textContent);

    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;

    }

    Game.prototype.init = function () {
        this.food.init(this.map);
        this.snake.init(this.map);
        this.runSnake(this.food, this.map);
        this.bindKey();
    };
    Game.prototype.runSnake = function (food, map) {
        var timeId = setInterval(function () {                  //‘this’ here represents the window object, which should be replaced by ‘that’
            this.snake.move(food, map);
            this.snake.init(map);
            var maxX = map.offsetWidth / this.snake.width;
            var maxY = map.offsetHeight / this.snake.height;
            var x = this.snake.body[0].x;
            var y = this.snake.body[0].y;

            score = this.snake.body.length;
            num.textContent = score - 3;
            for (i = 1; i < this.snake.body.length; i++) {
                if ((this.snake.body[0].x == this.snake.body[i].x) && (this.snake.body[0].y == this.snake.body[i].y)) {
                    clearInterval(timeId);
                    alert("Game over");
                    location.reload();
                }

            }

            if (x < 0 || x >= maxX) {
                clearInterval(timeId);
                alert("Game over");
                location.reload();
            }
            if (y < 0 || y >= maxY) {
                clearInterval(timeId);
                alert("Game over");
                location.reload();
            }
        }.bind(that), 100);
    };
    Game.prototype.bindKey = function () {
        document.addEventListener("keydown", function (e) {
            switch (e.keyCode) {
                case 65:
                    if (this.snake.direction == "right") {
                        break;
                    }
                    this.snake.direction = "left";
                    break;
                case 87:
                    if (this.snake.direction == "bottom") {
                        break;
                    }
                    this.snake.direction = "top";
                    break;
                case 68:
                    if (this.snake.direction == "left") {
                        break;
                    }
                    this.snake.direction = "right";
                    break;
                case 83:
                    if (this.snake.direction == "top") {
                        break;
                    }
                    this.snake.direction = "bottom";
                    break;
            }
        }.bind(that), false);
    }
    win.Game = Game;
}(window));