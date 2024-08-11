const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red = 0, Green = 1, Blue = 2 };

let backgroundColor = Color.Red;



let message: string  = 'abc';
let endWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');


//interfact
interface Point {
    x: number,
    y: number,
    drawA: () => void //don't return anything
}

let drawPointA = (point: Point) => {
    //...
}

let getDistanceA = (pointA: Point, pointB: Point) => {
    //...
}

//class
class Point {
    x: number;
    y: number;

    drawB() {
        console.log('X: ' + this.x + 'Y: ' + this.y);
    }

    getDistanceB(another: Point) {
        //...
    }
}

let point = new Point;
point.x = 1;
point.y = 2;
point.drawB();

