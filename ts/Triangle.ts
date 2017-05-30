import {Shape} from "./Shape";
class Triangle extends Shape {
    private coordinateX1: number = 400;
    private coordinateY1: number = 400;
    private coordinateX2: number = 0;
    private coordinateY2: number = 400;
    private coordinateX3: number = 200;
    private coordinateY3: number = 0;
    public setX1(x: number): void {
        this.coordinateX1 = x;
    }
    public setY1(y: number): void {
        this.coordinateY1 = y;
    }
    public setX2(x: number): void {
        this.coordinateX2 = x;
    }
    public setY2(y: number): void {
        this.coordinateY2 = y;
    }
    public setX3(x: number): void {
        this.coordinateX3 = x;
    }
    public setY3(x: number): void {
        this.coordinateY3 = x;
    }
    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.moveTo(this.coordinateX1, this.coordinateY1);
        ctx.lineTo(this.coordinateX2, this.coordinateY2);
        ctx.lineTo(this.coordinateX3, this.coordinateY3);
        ctx.lineTo(this.coordinateX1, this.coordinateY1);
        ctx.fillStyle = this.getFillColor();
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = this.getBorderColor();
        ctx.stroke();
        ctx.closePath();
    }
    public calculatePerimeter(): number {
        let firstEdge = Math.sqrt(Math.pow(this.coordinateX2 - this.coordinateX1, 2));
        firstEdge += Math.pow(this.coordinateY3 - this.coordinateY3, 2);
        let secondEdge = Math.sqrt(Math.pow(this.coordinateX3 - this.coordinateX2, 2));
        secondEdge += Math.pow(this.coordinateY3 - this.coordinateY3, 2);
        let thirdEdge = Math.sqrt(Math.pow(this.coordinateX1 - this.coordinateX3, 2));
        thirdEdge += Math.pow(this.coordinateY3 - this.coordinateY3, 2);
        return firstEdge + secondEdge + thirdEdge;
    }
    public calculateArea(): number {
        const Geron = this.calculatePerimeter() / 2;
        let firstEdge = Math.sqrt(Math.pow(this.coordinateX2 - this.coordinateX1, 2));
        firstEdge += Math.pow(this.coordinateY2 - this.coordinateY1, 2);
        let secondEdge = Math.sqrt(Math.pow(this.coordinateX3 - this.coordinateX2, 2));
        secondEdge += Math.pow(this.coordinateY3 - this.coordinateY2, 2);
        let thirdEdge = Math.sqrt(Math.pow(this.coordinateX1 - this.coordinateX3, 2));
        thirdEdge += Math.pow(this.coordinateY1 - this.coordinateY3, 2);
        return Math.sqrt(Geron * (Geron - firstEdge) * (Geron - secondEdge) * (Geron - thirdEdge));
    }
}
export {Triangle};
