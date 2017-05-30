abstract class Shape {
    private fillColor: string;
    private borderColor: string;
    public setFillColor(color: string): void {
        this.fillColor = color;
    }
    public getFillColor(): string {
        return this.fillColor;
    }
    public setBorderColor(color: string): void {
        this.borderColor = color;
    }
    public getBorderColor(): string {
        return this.borderColor;
    }
    public abstract draw(ctx: CanvasRenderingContext2D): void;
    public abstract calculateArea(): void;
    public abstract calculatePerimeter(): void;
}
export {Shape};
