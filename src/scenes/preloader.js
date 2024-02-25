// import { Scene } from 'phaser';

export class Preloader extends Phaser.Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        const txt1 = this.add.text(
            this.sys.game.config.width / 3,
            this.sys.game.config.height / 2 ,
            ' Cargando... ', {

            fontSize: '30px',
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

        //  We loaded this image in our Boot Scene, so we can display it here
        // this.add.image(512, 384, 'background');

        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffffff);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress) => {

            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);

        });
    }

    preload ()
    {
        //  Load the assets for the game - Replace with your own assets
        // this.load.setPath('assets');

        // this.load.image('logo', 'logo.png');

        this.load.image('estrellaSparkle', './src/img/sparkle1.png');
        this.load.image('fondo', './src/img/fondo-espacial-azulRojizo.png');
        this.load.image('barra', './src/img/barra-energia.png');

        this.load.spritesheet(
            'boton-fullscreen', './src/img/boton-fullscreen.png', {frameWidth: 64, frameHeight: 64}
        );

        this.load.audio('musica-fondo', './src/audio/backgroundMusic.wav');
    }

    create ()
    {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('game');
    }
}
