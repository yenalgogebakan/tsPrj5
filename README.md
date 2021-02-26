# Sample Playable Ad Project

# TsPrj5

> mkdir tsPrj5
> cd tsPrj5
> npm init -y // Creates package.json

> npm install pixi.js@5.3.8
> npm install webpack webpack-cli // creates node_modules directory

> mkdir src
> mkdir dist

> vi webpack.config.js

---
const path = require ('path');

module.exports = {
	entry: "/src/index.js",
	output : {
		filename : "main.js",
		path: path.resolve (__dirname, "dist"),
	}
};
---

> cd dist
> vi index.html

---
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8">
	<title> Hello Pixi tstPrj5 </title>
</head>
<body>
	<script type="module" src="main.js"></script>
</body>
</html>
---

`http://kazan1:8080/dist`

Two ways to load resource

**src/PIXI_Loader_Sample.js**

and

**src/APP_Loader_Sample.js**


## Some useful commands
npm list -g --depth 0 //get list of globally installed packages




