// Similar to Scene1, but with a different parameter

// after adding in spritesheets, image can be changed to sprite so they can be used with animations


class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame"); // we pass playGame as a parameter which is the identifier for this scene
    }
    
    create() {
        // BACKGROUND
        // this.background = this.add.image(0, 0, "background");
        this.background = this.add.tileSprite(0, 0, config.width, config.height, 'background'); // if you want the background image to move
        this.background.setOrigin(0,0);
        
        // adding in pokeballs to catch
        this.pokeball = this.add.image(config.width/2 - 100, config.height/2, "pokeball");
        this.pokeball.setScale(.2)

        this.greatball = this.add.image(config.width/2 - 50, config.height/2, "greatball");
        this.greatball.setScale(.2)

        this.ultraball = this.add.image(config.width/2, config.height/2, "ultraball");
        this.ultraball.setScale(.2)

        this.masterball = this.add.image(config.width/2 + 50, config.height/2, "masterball");
        this.masterball.setScale(.2)


        // PLAYER 
        // this.player = this.add.sprite(config.width/2 - 50, config.height/2, "player");
        this.player = this.physics.add.sprite(config.width/2 - 8, config.height - 64, "player");
        this.player.play("move");
        this.player.setCollideWorldBounds(true);
        this.player.setScale(.2);

        this.cursorKeys = this.input.keyboard.createCursorKeys();

        // this.scoreText = this.add.text(16, 16, "score: 0", { font: "20px Helvetica", fill: "black" });

        this.add.text(20, 20, "Welcome to Pokemon Catch!", {font: "20px Helvetica", fill: "yellow", align: "right" });
    }

    moveBall1(ball, speed) {
        ball.x += speed;
        if(ball.x > config.height) {
            this.resetBallPosition2(ball);
        }
    }

    moveBall2(ball, speed) {
        ball.y += speed;
        if(ball.y > config.height) {
            this.resetBallPosition1(ball);
        }
    }

    resetBallPosition1(ball) {
        ball.y = 0;
        let randomX = Phaser.Math.Between(0, config.width);
        ball.x = randomX;
    }

    resetBallPosition2(ball) {
        ball.x = 0;
        let randomY = Phaser.Math.Between(0, config.width);
        ball.y = randomY; 
    }

    update() {
        this.moveBall1(this.pokeball, 2);
        this.moveBall2(this.greatball, 2);
        this.moveBall1(this.ultraball, 3);
        this.moveBall2(this.masterball, 3);

        this.movePlayerManager();

        this.background.tilePositionX += 1; // this creates the position of the background and how it moves

    }

    // this will control the player icon
    movePlayerManager(){
        if(this.cursorKeys.left.isDown){
            this.player.setVelocityX(-gameSettings.playerSpeed);
        } else if (this.cursorKeys.right.isDown) {
            this.player.setVelocityX(gameSettings.playerSpeed);
        }

        if(this.cursorKeys.up.isDown) {
            this.player.setVelocityY(-gameSettings.playerSpeed);
        } else if (this.cursorKeys.down.isDown) {
            this.player.setVelocityY(gameSettings.playerSpeed);
        }
    }
} 