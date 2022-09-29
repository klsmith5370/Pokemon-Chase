// Similar to Scene1, but with a different parameter


class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame"); // we pass playGame as a parameter which is the identifier for this scene
    }
    
    create() {
        // this.background = this.add.image(0, 0, "background");
        this.background = this.add.tileSprite(0, 0, config.width, config.height, 'background'); // if you want the background image to move
        this.background.setOrigin(0,0);

        this.pikachu = this.add.image(config.width/2 - 50, config.height/2, "pikachu");
        this.pikachu.setScale(.2);

        // this.pokeball = this.add.image(config.width/2 - 50, config.height/2, "pokeball");
        // this.pokeball.setScale(.1);
        // after adding in spritesheets, image can be changed to sprite so they can be used with animations

        // this.anims.create({
        //     key:"pokeball",
        //     frames: this.anims.generateFrameNumbers("pokeball", {
        //         start: 0,
        //         end: 1
        //     }),
        //     frameRate: 10,
        //     repeat: -1
        // });

        // this.pokeballs = this.physics.add.group();

        // let maxPokeballs = 10;
        // for(let i = 0; i <= maxPokeballs; i++) {
        //     let pokeball = this.physics.add.image(.2, .2, "pokeball");
        //     this.pokeballs.add(pokeball);
        //     pokeball.setRandomPosition(0, 0, config.width/2 , config.height/2); 
        // }

        // this.pokeball = this.physics.add.group({
        //     key: "pokeball",
        //     repeat: 5,
        //     setXY: { x: 12, y: 0, stepX: 70 }
        // });
        // this.pokeball.children.iterate(function (child) {
        //     child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
        // })

        this.add.text(20, 20, "Welcome to Flying Pikachu!", {font: "25px Arial", fill: "black"});
    }

    movePikachu(pikachu, speed) {
        pikachu.x += speed;
        if (pikachu.x > config.height) {
            this.resetPikachuPosition(pikachu);
        }
    }

    resetPikachuPosition(pikachu) {
        pikachu.x = 0;
        let randomX = Phaser.Math.Between(0, config.width);
        pikachu.y = randomX;
    }

    update() {
        this.movePikachu(this.pikachu, 3)

        this.background.tilePositionX += 1; // this creates the position
    }
}