class Shape{
    private color:string;
    private filled:boolean;

    constructor(color:string ,filled:boolean){
        this.color=color;
        this.filled=filled;
    }

    public getColor():string{
        return this.color
    }

    public setColor(color:string):void{

    }

    public isFilled():boolean{
        return this.filled
    }

    public setFilled(filled:boolean):void{

    }

    public toString():string{
        return `shape [color =${this.color} , filled = ${this.filled}]`
    }
}

class Circle extends Shape{
    private radius:number;

    constructor(color:string ,filled:boolean ,radius:number){
        this.radius=
    }
}

class Rectangle extends Shape {

}

class Square extends Shape

export { Shape, Circle, Rectangle, Square };