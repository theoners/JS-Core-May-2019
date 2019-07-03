function solve(input) {
    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }

        area() {
            return this.width * this.height;
        }

        compareTo(rectangle){
            return rectangle.area()-this.area() || (rectangle.width-this.width);
        }
    }
let rect = [];
    for (let [width,height] of input) {
        let rectangle = new Rectangle(width,height);
        rect.push(rectangle);
    }

    rect.sort((a,b)=>a.compareTo(b));
    return rect;
}

solve([[10,5],[5,12]]);