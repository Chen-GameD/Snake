// JavaScript Document
    //Self calling function of Snake
    (function (win) {
        var element = [];

        function Snake(width, height, direction) {
            this.width = width || 20;
            this.height = height || 20;
            this.body = [
                {x: 3, y: 2, color: "red"},
                {x: 2, y: 2, color: "orange"},
                {x: 1, y: 2, color: "orange"}
            ];
            this.direction = direction || "right";
        }

        Snake.prototype.init = function (map) {
            remove();
            for (var i = 0; i < this.body.length; i++) {
                var dv = document.createElement("div");
                map.appendChild(dv);
                dv.style.position = "absolute";
                dv.style.width = this.width + "px";
                dv.style.height = this.height + "px";
                dv.style.left = this.body[i].x * this.width + "px";
                dv.style.top = this.body[i].y * this.height + "px";
                dv.style.backgroundColor = this.body[i].color;
                element.push(dv);
            }
        }
        Snake.prototype.move = function (food, map) {
            //Movement of the body
            for (var i = this.body.length - 1; i > 0; i--) {
                this.body[i].x = this.body[i - 1].x;
                this.body[i].y = this.body[i - 1].y;
            }
            //Movement of the head
            switch (this.direction) {
                case "right":
                    this.body[0].x += 1;
                    break;
                case "left":
                    this.body[0].x -= 1;
                    break;
                case "top":
                    this.body[0].y -= 1;
                    break;
                case "bottom":
                    this.body[0].y += 1;
                    break;
            }
            var headX=this.body[0].x*this.width;
            var headY=this.body[0].y*this.width;
            var x=food.x;
            var y=food.y;
            if(headX==x&&headY==y){
                var neo=this.body[this.body.length-1];
                this.body.push({
                    x: neo.x,
                    y: neo.y,
                    color:neo.color
                });
                food.init(map);
            }
        }

        function remove() {
            for (var i = element.length - 1; i >= 0; i--) {
                var ele = element[i];
                ele.parentElement.removeChild(ele);
                element.splice(i, 1);
            }
        }

        win.Snake = Snake;
    }(window));