var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
var message = 'abc';
var endWithC = message.endsWith('c');
var alternativeWay = message.endsWith('c');
var drawPointA = function (point) {
    //...
};
var getDistanceA = function (pointA, pointB) {
    //...
};
//class
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.drawB = function () {
        console.log('X: ' + this.x + 'Y: ' + this.y);
    };
    Point.prototype.getDistanceB = function (another) {
        //...
    };
    return Point;
}());
var point = new Point;
point.x = 1;
point.y = 2;
point.drawB();
