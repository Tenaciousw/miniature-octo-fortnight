import { Loader } from 'pixi.js';
import { Application, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 500,
	height: 344
});

Loader.shared.add({url: "./kramer.jpg", name: "Cosmo"});

Loader.shared.onComplete.add(()=>{

const kramer: Sprite = Sprite.from("Cosmo");

console.log("Hola Mundo!",kramer.width,kramer.height);

kramer.x = 0;
kramer.y = 0;

app.stage.addChild(kramer);

});

Loader.shared.load();