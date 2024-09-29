import {Player} from "./player.js";
import { InputHandler } from "./input.js";

window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  /** @type {CanvasRenderingContext2D}*/
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.player = new Player(this);
      this.inputHandler = new InputHandler();
    }
    update(deltaTime) {
        this.player.update(deltaTime,this.inputHandler.keys);
    }

    draw(context) {
        this.player.draw(context);
    }

  }

  

  const game = new Game(canvas.width, canvas.height);
  let lastTime = 0;
  function animate(timestamp){  // This is the game loop so here we do actual things >:)
    const deltaTime=(timestamp-lastTime)/1000;
    lastTime = timestamp;
    //Delta time things up this
    ctx.clearRect(0,0,canvas.width, canvas.height);
    //Update and draw below
    game.update(deltaTime);
    game.draw(ctx);
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate)
});
