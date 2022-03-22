import { Container, Sprite } from "pixi.js";

export class Barthat extends Container {


    constructor() {
        super();

        const Bart: Sprite = Sprite.from("Bart");
const Gorra: Sprite = Sprite.from("Gorra");

Gorra.position.set(295,10);
Gorra.scale.set(0.25,0.25);

Gorra.angle=10;

this.addChild(Bart);
this.addChild(Gorra);
    }
}