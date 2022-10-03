// will be the opening scene upon opening the game

class OpeningScene extends Phaser.Scene {
    constructor() {
        super("openingScene")
    }
    
    preload() {
        this.load.image("background", "assets/pokemon-background-day.png");
        this.load.image("pikachu", "assets/flying-pikachu.png");
        this.load.image("ball", "assets/pokeball-range.png");

    }

    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, 'background'); // if you want the background image to move
        this.background.setOrigin(0,0);

        this.openingImage = this.add.image(config.width/2 - 150, config.height/2, "pikachu");
        this.openingImage.setScale(.3);

        this.ballImage = this.add.image(config.width/2 + 150, config.height/2, "ball");
        this.ballImage.setScale(.2);

        this.add.text(20, 20, "Welcome to Pokemon Catch!", {font: "20px Helvetica", fill: "yellow" });

        setTimeout(() => {
            this.scene.start("bootGame");
        }, 5000)
    }

    update() {
        this.background.tilePositionX += 1;
    }
}
