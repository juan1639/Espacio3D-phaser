import { BotonFullScreen } from '../components/boton-fullScreen.js';
import { Marcador } from '../components/marcador.js';
import { Estrella } from '../components/estrella.js';

export class Game extends Phaser.Scene {

  constructor() {
    super({ key: 'game' });
  }

  init() {
    this.estrella = new Estrella(this);
    this.marcador = new Marcador(this);
    this.botonfullscreen = new BotonFullScreen(this);
  }

  preload() {

    this.load.image('estrellaSparkle', './src/img/sparkle1.png');
    this.load.image('estrellaRed', './src/img/red.png');
    this.load.image('estrellaBlue', './src/img/blue.png');
    this.load.image('estrellaStar', './src/img/star.png');
    this.load.image('estrellaWhite', './src/img/white.png');
    this.load.image('estrellaYellow', './src/img/yellow.png');
    this.load.image('fondo', './src/img/fondo-espacial-azulRojizo.png');
    this.load.image('barra', './src/img/barra-energia.png');

    this.load.spritesheet(
      'boton-fullscreen', './src/img/boton-fullscreen.png', {frameWidth: 64, frameHeight: 64}
    );
  }

  create() {

    this.add.image(0, 0, 'fondo').setOrigin(0, 0);

    this.estrella.create();
    this.marcador.create(this.velocidadGlobal);
    this.botonfullscreen.create();

    this.eventosControles();
  }

  update() {
    this.estrella.update();
    this.marcador.update(this.velocidadGlobal);
  }

  eventosControles() {

    this.input.on('pointerdown', (e) => {

      // console.log(e.downX, e.downY);

      if (e.downX < this.sys.game.config.width / 2) {
        this.velocidadGlobal[0] -= this.velocidadGlobal[2];
        this.velocidadGlobal[1] -= this.velocidadGlobal[2];

      } else if (e.downX >= this.sys.game.config.width / 2) {
        this.velocidadGlobal[0] += this.velocidadGlobal[2];
        this.velocidadGlobal[1] += this.velocidadGlobal[2];
      }

      if (this.velocidadGlobal[0] < 100) this.velocidadGlobal = [100, 200, 5];
      if (this.velocidadGlobal[0] > 400) this.velocidadGlobal = [400, 500, 5];

      // console.log(this.velocidadGlobal[0], this.velocidadGlobal[1], this.velocidadGlobal[2]);
    });
  }
}
