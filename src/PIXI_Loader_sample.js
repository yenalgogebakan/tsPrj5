const PIXI = require("pixi.js");

//Aliases
let Application = PIXI.Application,
	    Container = PIXI.Container,
	    sharedLoader = PIXI.Loader.shared,
	    resources = PIXI.Loader.resources,
	    TextureCache = PIXI.utils.TextureCache,
	    Sprite = PIXI.Sprite;

let app = new Application({
	//width: document.body.clientWidth, 
	//height: document.body.clientHeight,                       
	width: 800, 
	height: 600,                       
	antialiasing: true, 
	backgroundAlphe: false, 
	backgroundColor: 0x1099bb, 
	resolution: 1
});
                      
window.addEventListener("resize", function() {
	app.renderer.resize(window.innerWidth, window.innerHeight);
});
                          
app.view.addEventListener('contextmenu', (e) => {
	window.wasRightClick = true;
	e.preventDefault();
});
                               
app.view.id = 'main';

document.body.appendChild(app.view);
 
let helmet;

sharedLoader.add ("helmet", "../images/helmet.png");
sharedLoader.load ((loader, resources) => {
	helmet = new PIXI.Sprite (resources.helmet.texture);
	app.stage.addChild (helmet);
});

