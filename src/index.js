import { Game } from './scenes/game.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'contenedor',
  scene: [Game],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  // audio: {
  //   disableWebAudio: true
  // }
}

export default new Phaser.Game(config);
