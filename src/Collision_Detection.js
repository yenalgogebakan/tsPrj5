const PIXI = require("pixi.js");

let app;
let player, enemy;
let speed = 3;

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
	player.position.x = 16;
	player.position.y = app .view.height /2;
	app.stage.addChild (player);

	enemy = new PIXI.Sprite.from ("../images/helmet.png");
	enemy.anchor.set (0.5);
	enemy.scale.set (0.80);
	enemy.position.x = app.view.width - 16;
	enemy.position.y = app .view.height /2;
	app.stage.addChild (enemy);

	app.ticker.add (gameloop);
}

function gameloop (delta) {
	player.x += speed;
	enemy.x -= speed;

	if (rectsIntersect (player, enemy)){
		speed = 0;
	}
}

function rectsIntersect (a, b) {
	let aBox = a.getBounds ();
	let bBox = b.getBounds ();

	return aBox.x + aBox.width > bBox.x &&
		aBox.x < bBox.x + bBox.width &&
		aBox.y + aBox.height > bBox.y &&
		aBox.y < bBox.y + bBox.height;
}
