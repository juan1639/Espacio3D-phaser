
export class Estrella {

    static NRO_ESTRELLAS = 400;

    constructor(scene) {
        this.relatedScene = scene;
    }

    create() {

        const arrayStars = [
            'estrellaRed',
            'estrellaBlue',
            'estrellaBlue',
            'estrellaBlue',
            'estrellaBlue',
            'estrellaWhite',
            'estrellaWhite',
            'estrellaYellow',
            'estrellaYellow',
            'estrellaYellow'
        ];

        this.estrella = this.relatedScene.physics.add.group();

        this.relatedScene.velocidadGlobal = [100, 200, 5];

        for (let i = 0; i < Estrella.NRO_ESTRELLAS; i ++) {
            
            this.estrella.create(
                this.relatedScene.sys.game.config.width / 2,
                this.relatedScene.sys.game.config.height / 2,
                arrayStars[Phaser.Math.Between(0, arrayStars.length - 1)]
            );
        }

        this.estrella.children.iterate(star => {

            this.resetEstrella(star, false);
        });

        console.log(this.estrella);
    }

    update() {

        this.estrella.children.iterate(star => {

            star.setScale(star.scale + star.getData('inc-scale'));
            star.setAngle(star.angle + 0.3 * star.getData('inc-angle'));
            star.setAlpha(star.alpha + star.getData('inc-alpha'));

            if (star.alpha >= 1.0) star.setAlpha(1);

            if (star.x > 850 || star.y > 650 || star.x < -50 || star.y < -50) {

                this.resetEstrella(star, true);
            }
        });
    }

    resetEstrella(star, inicial) {

        const velocidad = Phaser.Math.Between(
            this.relatedScene.velocidadGlobal[0], this.relatedScene.velocidadGlobal[1]
        );

        this.relatedScene.physics.velocityFromRotation(
            Phaser.Math.Between(0, 359),
            velocidad,
            star.body.velocity
        );

        star.setX(this.relatedScene.sys.game.config.width / 2);
        star.setY(this.relatedScene.sys.game.config.height /2);
        star.setScale(0.01).setAlpha(0.3);
        star.setAngle(Phaser.Math.Between(0, 359));
        star.setData('inc-scale', 0.000009 * velocidad);
        star.setData('inc-alpha', 0.02);
        star.setData('inc-angle', Phaser.Math.Between(-1, 1));
        star.setVisible(inicial);
    }

    get() {
        return this.estrella;
    }
}
