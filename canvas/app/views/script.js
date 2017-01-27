/*
	code by Shklyarov Valera
	coursework "Snake"
	2017
*/

'use strict';

//----> CONSTS <------//
const 	COLS = 26 , 
		ROWS = 26;
//----> IDs <--------//
const 	EMPTY = 0 , 
		SNAKE = 1 , 
		FRUIT = 2;
//-----> DIRECTIONS <-----//
const 	LEFT = 0, 
		UP = 1, 
		RIGHT = 2 , 
		DOWN = 3;
//---------> keycodes <----------//
const 	KEY_LEFT = 37,
		KEY_UP = 38,
		KEY_RIGHT = 39,
		KEY_DOWN = 40,
		ENTER = 13; 
//-------> Clases <------//
class Grid {

	constructor () {
		this.width = null;
		this.height = null;
		this._grid = null;
	}

	init (d,c,r) {

		this.width = c;
		this.height = r;

		this._grid = [];
		for (let x=0; x<c; x++) {
			this._grid.push([]);
			for (let y=0; y<r; y++) {
				this._grid[x].push(d);
			}
		}
	}

	set (val,x,y) {
		this._grid[x][y] = val;
	}

	get (x,y) {
		return this._grid[x][y];
	}
}


class Snake {

	constructor() {
		this.direction = null;
		this.last = null;
		this._queue = null;
	}

	init(d,x,y) {
		this.direction = d;

		this._queue = [];
		this.insert(x,y);
	}

	insert(x,y) {
		this._queue.unshift({x:x , y:y});
		this.last = this._queue[0];
	}

	remove() {
		return this._queue.pop();
	}
}

//---------> Food Creator <--------//
function setFood() {
	let empty = [];
	for (let x = 0; x<grid.width; x++) {
		for (var y = 0; y<grid.height; y++) {
			if (grid.get(x,y) === EMPTY) {
				empty.push({x:x , y:y});
			}
		}
	}
	let randpos = empty[Math.floor(Math.random()*empty.length)];
	grid.set(FRUIT, randpos.x , randpos.y);
}

//-----------> create class obj <--------//
let snake = new Snake();
let grid = new Grid();
//----------> Game objects <-----------//

let canvas,
	ctx,
	keystate,
	frames,
	score,
	name,
	gameLoop;

function main() {
	//document.querySelector("#canvas").style.visibility = "visible";
	canvas = document.querySelector("canvas");
	canvas.style.display = "block";
	canvas.width = COLS*20;
	canvas.height = ROWS*20;
	ctx = canvas.getContext("2d");
	document.body.appendChild(canvas);

	ctx.font = "12px Helvetica";

	frames = 0;
	keystate = {};
	document.addEventListener("keydown" , function(evt) {
		keystate[evt.keyCode] = true;
	});
	document.addEventListener("keyup" , function(evt) {
		delete keystate[evt.keyCode];
	});

	init();
	loop();
}

function init() {
	score = 0;

	grid.init(EMPTY, COLS, ROWS);

	let sp = {x:Math.floor(COLS/2), y:ROWS-1};
	snake.init(UP , sp.x , sp.y);
	grid.set(SNAKE, sp.x , sp.y);

	setFood();
}

function loop() {
	update();
	draw();

	gameLoop = window.requestAnimationFrame(loop, canvas);
}

function update() {
	frames++;

	if (keystate[KEY_LEFT] && snake.direction !== RIGHT) snake.direction = LEFT;
	if (keystate[KEY_UP] && snake.direction !== DOWN) snake.direction = UP;
	if (keystate[KEY_RIGHT] && snake.direction !== LEFT) snake.direction = RIGHT;
	if (keystate[KEY_DOWN] && snake.direction !== UP) snake.direction = DOWN;

	if (frames%5 === 0) {
		let nx = snake.last.x;
		let ny = snake.last.y;

		switch (snake.direction) {
			case LEFT:
				nx--;
				break;
			case RIGHT:
				nx++;
				break;
			case UP:
				ny--;
				break;
			case DOWN: 
				ny++;
				break;
		}

		if (0 > nx || nx > grid.width-1 || 0 > ny || ny > grid.height-1 || grid.get(nx,ny) === SNAKE) {
			//ctx.fillText("Press enter to try again" , 100,100);
			document.querySelector("canvas").style.display = "none";
			document.querySelector("#table").style.display = "block";
			getRecords();
			window.cancelAnimationFrame(gameLoop);
			//ctx.fillStyle = '#fff';
			//ctx.fillRect(0, 0, canvas.width, canvas.height);
			
		}

		if (grid.get(nx , ny) === FRUIT) {
			var tail = {x:nx, y:ny}
			score++;
			setFood();
		} else {
			var tail = snake.remove();
			grid.set(EMPTY, tail.x , tail.y);
			tail.x = nx;
			tail.y = ny;
		}

		grid.set(SNAKE, tail.x , tail.y);

		snake.insert(tail.x, tail.y);
	}
}

function draw() {
	let tw = canvas.width/grid.width;
	let th = canvas.height/grid.height;

	for (let x = 0; x<grid.width; x++) {
		for (var y = 0; y<grid.height; y++) {
			switch (grid.get(x,y)) {
				case EMPTY:
					ctx.fillStyle = "#fff";
					break;
				case SNAKE:
					ctx.fillStyle = "#0ff"; 
					break;
				case FRUIT:
					ctx.fillStyle = "#f00"; 
					break;
			}
			ctx.fillRect(x*tw, y*th , tw , th);
		}
	}
	ctx.fillStyle = "#000";
	ctx.fillText("SCORE: " + score , 10, canvas.height-10);
}

document.querySelector("#go").addEventListener("click" , () => {
	if (document.querySelector("#name").value === "") {
		alert("Enter your name, fucking morron!!!");
	} else {
		name = document.querySelector("#name").value;
		document.querySelector("#login").style.display = "none";
		main();
	}
});

function getRecords () {
	document.querySelector("#table_value").innerHTML = name + "  .....................  " + score;
}

let server = require("server.js");
console.log(server.a);


