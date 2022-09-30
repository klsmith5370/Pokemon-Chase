// describes the configurations/basic characteristics of the game screen, such as dimensions or background color
// pass the config varible as a parameter to the Phaser game instance

let gameSettings = {
    playerSpeed: 200,
}

let config = {
    width: 705,
    height: 304,
    backgroundColor:0xfffed53f,
    scene: [Scene1, Scene2],
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
}


// creates a new instance of a game
window.onload = function() {
    let game = new Phaser.Game(config);
}