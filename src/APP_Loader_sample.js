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
                      
app.view.id = 'main';
document.body.appendChild(app.view);
 
app.loader.baseUrl = "../images";
app.loader.add ("sprite01", "helmet.png");

app.loader.onProgress.add (showProgress);
app.loader.onComplete.add (doneLoading);
app.loader.onError.add (reportError);

app.loader.load ();

function showProgress (e) {
	console.log (e.progress);
}
function doneLoading (e) {
	console.log ("Done Loading !");
	
	const helmet = PIXI.Sprite.from (app.loader.resources.sprite01.texture);
	helmet.x = app.view.width / 2;
	helmet.y = app.view.height / 2;
	helmet.anchor.set (0.5);
	app.stage.addChild (helmet);
}
function reportError (e) {
	console.error (e.message);
}


