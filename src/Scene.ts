import { Container } from "pixi.js";
import { Barthat } from "./Barthat";

export class Scene extends Container {

constructor()
{
super();

const bartwithhat: Barthat = new Barthat();

bartwithhat.scale.set(0.5);

this.addChild(bartwithhat);

}
}