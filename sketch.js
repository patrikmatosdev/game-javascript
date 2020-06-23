let sceneryPicture;
let picturePerson;
let scenary;
let sound;

function preload() {
  sceneryPicture = loadImage("assets/img/cenario/floresta.png");
  picturePerson = loadImage("assets/img/personagem/correndo.png");
  sound = loadSound("assets/sounds/trilha_jogo.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenary = new Scenary(sceneryPicture, 3);
  sound.play();
}

function draw() {
  scenary.exibe();
  scenary.move();
  image(picturePerson, 0, height - 135, 110, 135, 0, 0, 220, 270);
}

class Scenary {
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.velocidade = velocidade;
    (this.x1 = 0), (this.x2 = width);
  }

  exibe() {
    image(this.imagem, this.x1, 0, width, height);
    image(this.imagem, this.x2, 0, width, height);
  }

  move() {
    this.x1 = this.x1 - this.velocidade;
    this.x2 = this.x2 - this.velocidade;

    if (this.x1 < -width) {
      this.x1 = width;
    }

    if (this.x2 < -width) {
      this.x2 = width;
    }
  }
}
