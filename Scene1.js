// In the scene definition, can use Class definition
// The constructor function calls super(), which makes the class inherit all the characteristics 
    // of it's predecessor the Class Scene from Phaser


class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame"); // we pass bootGame as a parameter which is the identifier for this scene
    }

    preload() {
        this.load.image("background", "assets/pokemon-background-day.png");
        this.load.image("pokeball", "assets/pokeball.png");
        this.load.image("greatball", "assets/great-ball.png");
        this.load.image("ultraball", "assets/ultra-ball.png");
        this.load.image("masterball", "assets/master-ball.png");

        this.load.spritesheet("player", "assets/flying-pikachu.png", {
            frameWidth: 325,
            frameHeight: 410
        });
    } 
    // once I have spritesheets figured out, you can replace image with spritesheet and update the link with assets/spritesheets
    // also define the size of the frame in pixels (frameWidth and frameHeight)

    create() { // write the function create within the class
        this.add.text(20, 20, "Loading game..."); // specify the x and y axis and the text to display
        // this.scene.start("gameScreen");
        this.scene.start("playGame"); // switching to scene 2

        this.anims.create({
            key: "move",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 10,
            repeat: -1
        });

    }
}