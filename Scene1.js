// In the scene definition, can use Class definition
// The constructor function calls super(), which makes the class inherit all the characteristics 
    // of it's predecessor the Class Scene from Phaser

// const Phaser = require("phaser");

class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame"); // we pass bootGame as a parameter which is the identifier for this scene
    }

    preload() {
        this.load.image("background", "assets/pokemon-background-day.png");
        this.load.spritesheet("pikachu", "assets/flying-pikachu.png")
        this.load.image("pokeball", "assets/pokeball.png")
    } 
    // once I have spritesheets figured out, you can replace image with spritesheet and update the link with assets/spritesheets
    // also define the size of the frame in pixels (frameWidth and frameHeight)

    create() { // write the function create within the class
        this.add.text(20, 20, "Loading game..."); // specify the x and y axis and the text to display
        this.scene.start("playGame"); // switching to scene 2
    }
}