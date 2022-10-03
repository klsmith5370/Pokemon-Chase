// players will be able to choose a character (may use a randomizer)

// class ChooseCharacter extends Phaser.Scene {
//     constructor() {
//         super("chooseCharacter")
//     }

//     preload() {
//         this.load.image("background", "assets/pokemon-background-day.png");

//     }

//     create() {
//         this.background = this.add.tileSprite(0, 0, config.width, config.height, 'background'); // if you want the background image to move
//         this.background.setOrigin(0,0);

//         this.add.text(20, 20, "Choose your Character!", {font: "20px Helvetica", fill: "black" });

//         setTimeout(() => {
//             this.scene.start("bootGame")
//         }, 9000)
//     }

//     update() {
//         this.background.tilePositionX += 1;
//     }
// }