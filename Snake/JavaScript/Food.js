// JavaScript Document
    //Self calling function of Food
    (function (win) {
        var element = [];

        function Food(width, height, color, x, y) {
            this.width = width || 20;
            this.height = height || 20;
            this.color = color || "green";
            this.x = x || 0;
            this.y = y || 0;
        }

        win.Food = Food;
        Food.prototype.init = function (map) {
            remove();
            var div = document.createElement("div");
            map.appendChild(div);
            div.style.position = "absolute";
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";
            div.style.backgroundColor = this.color;
            this.x=parseInt(Math.random() * map.offsetWidth / this.width) * this.width;
            this.y=parseInt(Math.random() * map.offsetHeight / this.height) * this.height;
            div.style.left = this.x + "px";
            div.style.top = this.y + "px";
            element.push(div);
        }

        function remove() {
            for (var i = 0; i < element.length; i++) {
                var ele = element[i];
                ele.parentElement.removeChild(ele);
                element.splice(i, 1);
            }
        }
    }(window));