import {Shape} from "./Shape";
class Circle extends Shape {
    private coordinateX: number = 100;
    private coordinateY: number = 100;
    private circleRadius: number = 100;
    public setRadius(radius: number): void {
        this.circleRadius = radius;
    }
    public setX(x: number): void {
        this.coordinateX = x;
    }
    public setY(y: number): void {
        this.coordinateY = y;
    }
    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this.coordinateX, this.coordinateY, this.circleRadius, 0, Math.PI * 2);
        ctx.fillStyle = this.getFillColor();
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = this.getBorderColor();
        ctx.stroke();
        ctx.closePath();
    }
    public calculateArea(): number {
        return Math.PI * this.circleRadius * this.circleRadius;
    }
    public calculatePerimeter(): number {
        return 2 * Math.PI * this.circleRadius;
    }
}
export {Circle};
