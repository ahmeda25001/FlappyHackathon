import { Application, Sprite, Texture } from "pixi.js";
import { BaseSprite } from "./baseSprite";

let score = 0;
const WIDTH = window.innerWidth / 3;
const HEIGHT = window.innerHeight;

let app = new Application({
  width: WIDTH,
  height: HEIGHT,
  backgroundColor: 0xf00,
});

document.body.querySelector("#app")!.appendChild(app.view);

let bird = new Sprite(Texture.from("/assets/sprites/yellowbird_01.png"));

let pipe = new Sprite(Texture.from("/assets/sprites/pipe-green.png"));
let pipe2 = new Sprite(Texture.from("/assets/sprites/pipe-green.png"));
let pipe3 = new Sprite(Texture.from("/assets/sprites/pipe-green.png"));
let pipe4 = new Sprite(Texture.from("/assets/sprites/pipe-green.png"));
pipe2.scale.x = -1;
pipe.x = WIDTH;
pipe.y = HEIGHT - 100;
pipe2.x = WIDTH;
pipe.y = 100

const resetPipe1 = () => {
	pipe.x = WIDTH;
	pipe2.x = WIDTH;
}

const resetPipe2 = () => {
	pipe3.x = WIDTH;
	pipe4.x = WIDTH;
}
const gravity = () => {
	bird.y += 4;
	pipe.x -= 2;
	pipe2.x -= 2;
};

const runningLoop = () => {
	gravity();
	if (bird.x === pipe.x) {
		score++;
	}
	if (pipe.x < 0) {
		resetPipe1
	}
	if (pipe3.x < 0) {
		resetPipe2
	}
  // Gravity - Push the Bird sprite downwards
  // Move the pipes to the left, move pipe on the left once it goes out of the viewport to the right of the screen and keep cycling pipes
  // Increment score when bird goes in between pipes
  // Stop loop when bird collides with pipe
};

app.ticker.add(runningLoop);

bird.x = WIDTH / 2;
bird.y = HEIGHT / 2;
bird.anchor.set(0.5, 0.5);

app.stage.addChild(bird);

document.body.addEventListener("keydown", () => {
  bird.y -= 15;
  for (let i = 0; i < 5; i++) {
    setTimeout(() => (bird.y -= 7), 50);
  }
});
