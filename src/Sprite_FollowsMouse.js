const PIXI = require("pixi.js");

let app;
let player;

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
	
	app.stage.interactive = true;
	app.stage.on ("pointermove", movePlayer);

}

function movePlayer (e) {
	let pos = e.data.global;

	if (pos.x < 10)
		pos.x = 10;
	if (pos.x > app.view.width - 10)
		pos.x = app.view.width - 10;

	if (pos.y <10)
		pos.y =10;
	if (pos.y > app.view.height - 10)
		pos.y = app.view.height - 10;

	player.position.x = pos.x;
	player.position.y = pos.y;
}
