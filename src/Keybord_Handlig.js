const PIXI = require("pixi.js");

let app;
let player;
let keys = {};
let keysDiv;

window.onload = function () {
	app = new PIXI.Application (
		{
			width:800,
			height:600,
			backgroundColor: 0xAAAAAA
		}
	);
	document.body.appendChild (app.view);

	player = new PIXI.Sprite.from ("../images/Attack__009.png");
	player.anchor.set (0.5);
	player.scale.set (0.15);
	player.position.x = app.view.width / 2;
	player.position.y = app .view.height /2;
	app.stage.addChild (player);

	window.addEventListener ("keydown", keysDown);
	window.addEventListener ("keyup", keysUp);

	app.ticker.add (gameloop);

	keysDiv = document.querySelector ("#keys");

}

function keysDown (e) {
	console.log (e.keyCode);
	keys [e.keyCode] = true;
}

function keysUp (e) {
	keys[e.keyCode] = false;
}

function gameloop (delta) {
	keysDiv.innerHTML = JSON.stringify (keys);

	//W
	if (keys["87"]) {
		player.y -= 5;
	}
	//A
	if (keys["65"]) {
		player.x -= 5;
	}
	//S
	if (keys["83"]) {
		player.y += 5;
	}
	//D
	if (keys["68"]) {
		player.x += 5;
	}
	
}
