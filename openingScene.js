// will be the opening scene upon opening the game

class OpeningScene extends Phaser.Scene {
    constructor() {
        super("openingScene")
    }
    
    preload() {
        this.load.image('background', "assets/pokemon-background-day.png");
    }

    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, 'background'); // if you want the background image to move
        this.background.setOrigin(0,0);

        this.add.text(20, 20, "Welcome to Pokemon Catch!", {font: "20px Helvetica", fill: "yellow" });

        setTimeout(() => {
            this.scene.start("bootGame")
        }, 6000)
    }
}
