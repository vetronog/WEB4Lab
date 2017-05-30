import {Shape} from "./Shape";
class Rectangle extends Shape {
    private coordinateX1: number = 100;
    private coordinateY1: number = 100;
    private coordinateX2: number = 50;
    private coordinateY2: number = 50;
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
    public getWidth(): number {
        return Math.abs(this.coordinateX2 - this.coordinateX1);
    }
    public getHeight(): number {
        return Math.abs(this.coordinateY2 - this.coordinateY1);
    }
    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.fillStyle = this.getFillColor();
        ctx.fillRect(this.coordinateX1, this.coordinateY1, this.getWidth(), this.getHeight());
        ctx.strokeStyle = this.getBorderColor();
        ctx.lineWidth = 5;
        ctx.strokeRect(this.coordinateX1, this.coordinateY1, this.getWidth(), this.getHeight());
        ctx.closePath();
    }
    public calculatePerimeter(): number {
        return (2 * this.getWidth() + 2 * this.getHeight());
    }
    public calculateArea(): number {
        return this.getHeight() * this.getWidth();
    }
}
export {Rectangle};
