export class BotonFullScreen {

    constructor(scene) {
      this.relatedScene = scene;
    }
  
    create() {
  
      const ancho = this.relatedScene.sys.game.config.width;
      const alto = this.relatedScene.sys.game.config.height;
      const escala = 0.8;
      const sizeXY = Math.floor((64 * escala) / 2);
  
      this.boton = this.relatedScene.add.sprite(Math.floor(ancho / 1.05), sizeXY, 'boton-fullscreen').setInteractive();
      this.boton.setScale(escala).setAngle(0).setFrame(0);
  
      this.boton.on('pointerover', () => {
        this.boton.setScale(escala + 0.3);
      });
      this.boton.on('pointerout', () => {
        this.boton.setScale(escala);
      });
  
      this.boton.on('pointerdown', () => {
        if (!this.relatedScene.scale.isFullscreen) {
          this.relatedScene.scale.startFullscreen();
        } else {
          this.relatedScene.scale.stopFullscreen();
        }
      });
    }
}
