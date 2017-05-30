import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Shape} from "./Shape";
import {Triangle} from "./Triangle";

window.onload = (): void => {
    draw();
};
const selector: HTMLInputElement = document.getElementById("current-shape") as HTMLInputElement;
selector.onclick = (): void => {
    switch (selector.value) {
    case "circle":
        document.getElementById("circle-block").style.display = "block";
        document.getElementById("triangle-block").style.display = "none";
        document.getElementById("rectangle-block").style.display = "none";
        break;
    case "triangle":
        document.getElementById("circle-block").style.display = "none";
        document.getElementById("triangle-block").style.display = "block";
        document.getElementById("rectangle-block").style.display = "none";
        break;
    case "rectangle":
        document.getElementById("circle-block").style.display = "none";
        document.getElementById("triangle-block").style.display = "none";
        document.getElementById("rectangle-block").style.display = "block";
        break;
    }
};
const form: HTMLInputElement = document.getElementById("settings-form") as HTMLInputElement;
form.onchange = (): void => draw();
function draw(): void {
    const canvas: HTMLCanvasElement = document.getElementById("holst") as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
    const info: HTMLElement = document.getElementById("info-block");
    const type: string = (document.getElementById("current-shape") as HTMLInputElement).value;
    const fillColor: string = (document.getElementById("shape-fill-color")as HTMLInputElement).value;
    const borderColor: string = (document.getElementById("shape-border-color")as HTMLInputElement).value;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    switch (type) {
    case "circle" :
        drawCircle(ctx, info, fillColor, borderColor);
        break;
    case "triangle" :
        drawTriangle(ctx, info, fillColor, borderColor);
        break;
    case "rectangle" :
        drawRectangle(ctx, info, fillColor, borderColor);
        break;
    }
}
function drawCircle(ctx: CanvasRenderingContext2D, info: HTMLElement, fillColor: string, borderColor: string): void {
    const radius: number = Number((document.getElementById("radius") as HTMLInputElement).value);
    const posX: number = Number((document.getElementById("circleX") as HTMLInputElement).value);
    const posY: number = Number((document.getElementById("circleY") as HTMLInputElement).value);

    const circle = new Circle();
    if (radius) { circle.setRadius(radius); }
    if (posX) { circle.setX(posX); }
    if (posY) { circle.setY(posY); }
    if (fillColor) { circle.setFillColor(fillColor); }
    if (borderColor) { circle.setBorderColor(borderColor); }
    circle.draw(ctx);
    info.innerHTML = "Площадь: " + circle.calculateArea() + "<br />Периметр: " + circle.calculatePerimeter();
}
function drawTriangle(ctx: CanvasRenderingContext2D, info: HTMLElement, fillColor: string, borderColor: string): void {
    const posX1: number = Number((document.getElementById("triangleX1") as HTMLInputElement).value);
    const posY1: number = Number((document.getElementById("triangleY1") as HTMLInputElement).value);
    const posX2: number = Number((document.getElementById("triangleX2") as HTMLInputElement).value);
    const posY2: number = Number((document.getElementById("triangleY2") as HTMLInputElement).value);
    const posX3: number = Number((document.getElementById("triangleX3") as HTMLInputElement).value);
    const posY3: number = Number((document.getElementById("triangleY3") as HTMLInputElement).value);

    const triangle = new Triangle();
    if (posX1) { triangle.setX1(posX1); }
    if (posY1) { triangle.setY1(posY1); }
    if (posX2) { triangle.setX2(posX2); }
    if (posY2) { triangle.setY2(posY2); }
    if (posX3) { triangle.setX3(posX3); }
    if (posY3) { triangle.setY3(posY3); }
    if (fillColor) { triangle.setFillColor(fillColor); }
    if (borderColor) { triangle.setBorderColor(borderColor); }
    triangle.draw(ctx);
    info.innerHTML = "Площадь: " + triangle.calculateArea() + "<br />Периметр: " + triangle.calculatePerimeter();
}
function drawRectangle(ctx: CanvasRenderingContext2D, info: HTMLElement, fillColor: string, borderColor: string): void {
    const posX1 = Number((document.getElementById("rectangleX1") as HTMLInputElement).value);
    const posY1 = Number((document.getElementById("rectangleY1") as HTMLInputElement).value);
    const posX2 = Number((document.getElementById("rectangleX2") as HTMLInputElement).value);
    const posY2 = Number((document.getElementById("rectangleY2") as HTMLInputElement).value);

    const rectangle = new Rectangle();
    if (posX1) { rectangle.setX1(posX1); }
    if (posY1) { rectangle.setY1(posY1); }
    if (posX2) { rectangle.setX2(posX2); }
    if (posY2) { rectangle.setY2(posY2); }
    if (fillColor) { rectangle.setFillColor(fillColor); }
    if (borderColor) { rectangle.setBorderColor(borderColor); }
    rectangle.draw(ctx);
    info.innerHTML = "Площадь: " + rectangle.calculateArea() + "<br />Периметр: " + rectangle.calculatePerimeter();
}
