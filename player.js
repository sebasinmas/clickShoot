export class Player {
  constructor(game) {
    this.game = game;
    this.width = 100;
    this.height = 91.3;
    this.x = 0;
    this.y = this.game.height - this.height;
    this.velocityX = 0;
    this.velocityY = 0;

    this.image = document.getElementById("player");
  }
  update(deltaTime, input) {
    let acceleration = 350; // Aceleración en píxeles por segundo
    let maxSpeed = 200; // Velocidad máxima
    let deceleration = 290; // Desaceleración al soltar la tecla
    if (input.includes("ArrowRight")) {
      // Incrementa la velocidad hasta el máximo
      this.velocityX = Math.min(
        this.velocityX + acceleration * deltaTime,
        maxSpeed
      );
      // Actualiza la posición basada en la velocidad
      this.x += this.velocityX * deltaTime;
    } else if (input.includes("ArrowLeft")) {
      // Decrementa la velocidad hasta el máximo negativo
      this.velocityX = Math.max(
        this.velocityX - acceleration * deltaTime,
        -maxSpeed
      );
      // Actualiza la posición
      this.x += this.velocityX * deltaTime;
    } else {
      // Si no se presiona ninguna tecla, aplica desaceleración suave
      if (this.velocityX > 0) {
        this.velocityX = Math.max(this.velocityX - deceleration * deltaTime, 0); // Reduce la velocidad
      } else if (this.velocityX < 0) {
        this.velocityX = Math.min(this.velocityX + deceleration * deltaTime, 0); // Aumenta la velocidad hacia 0
      }
      // Actualiza la posición con la velocidad desacelerada
      this.x += this.velocityX * deltaTime;
    }
  }
  draw(/** @type {CanvasRenderingContext2D} */ context) {
    context.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
