
export class Marcador {

    constructor(scene) {
      this.relatedScene = scene;
    }
  
    create(velocidadGlobal) {

        this.marcador = this.relatedScene.add.sprite(100, 10, 'barra')
            .setOrigin(0, 0).setScale(velocidadGlobal / 100, 1);

        this.graphics = this.relatedScene.add.graphics();
        this.dibujaMarcador(velocidadGlobal);
        this.dibujaTexto(0.7);
    }

    update(velocidadGlobal) {
        this.dibujaMarcador(velocidadGlobal);
    }

    dibujaMarcador(velocidadGlobal) {

        const posicion = [100, 10, velocidadGlobal[0], 30, 400];
        const [x, y, ancho, alto, anchoFijo] = posicion;

        const attr = [4, 0.7, 1, 1];
        const [padding, alpha, width] = attr;

        this.graphics.lineStyle(width, 0x80ffff, alpha);
        this.graphics.strokeRect(x - padding, y - padding, anchoFijo + padding * 2, alto + padding * 2);

        this.marcador.setScale(ancho / 100, 1);
        this.marcador.setX(x + (ancho / 100) / 2);
    }

    dibujaTexto(alpha) {

        const txt1 = this.relatedScene.add.text(
            this.relatedScene.sys.game.config.width / 5,
            this.relatedScene.sys.game.config.height - 50 ,
            ' Toque pantalla repetidamente a la izda. o dcha. ', {

            fontSize: '20px',
            fontStyle: '500',
            align: 'left',
            shadow: {
                offsetX: 1,
                offsetY: 1,
                color: '#fff',
                blur: 7,
                fill: true
            },
            fill: '#ffa',
            fontFamily: 'verdana, arial, sans-serif'
        });

        txt1.setAlpha(alpha);
    }
}
