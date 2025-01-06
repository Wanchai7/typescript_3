"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = exports.Rectangle = exports.Circle = exports.Shape = void 0;
class Shape {
    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
    }
    isFilled() {
        return this.filled;
    }
    setFilled(filled) {
    }
    toString() {
        return `shape [color =${this.color} , filled = ${this.filled}]`;
    }
}
exports.Shape = Shape;
class Circle extends Shape {
    constructor(color, filled, radius) {
        this.radius =
        ;
    }
}
exports.Circle = Circle;
class Rectangle extends Shape {
}
exports.Rectangle = Rectangle;
class Square extends Shape {
}
exports.Square = Square;
