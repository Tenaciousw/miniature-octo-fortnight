import { Loader } from 'pixi.js';
import { Application, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 720,
	height: 720
});

window.addEventListener("resize", ()=>{
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY);

	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeight + "px";

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";

	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";
});
window.dispatchEvent(new Event("resize"));

Loader.shared.add({url: "./bart.png", name: "Bart"});
Loader.shared.add({url: "./Gorrito.png", name: "Gorra"});

Loader.shared.onComplete.add(()=>{

const Bart: Sprite = Sprite.from("Bart");
const Gorra: Sprite = Sprite.from("Gorra");

console.log("Multiplicate por cero!",Bart.width,Bart.height);

Gorra.scale.set(0.13,0.13);

Gorra.angle=10;

app.stage.addChild(Bart);
app.stage.addChild(Gorra);

});

Loader.shared.load();


