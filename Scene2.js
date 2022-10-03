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
        this.pokeball = this.add.sprite(config.width/2 - 100, config.height/2, "pokeball");
        this.pokeball.setScale(.2)

        this.greatball = this.add.sprite(config.width/2 - 50, config.height/2, "greatball");
        this.greatball.setScale(.2)

        this.ultraball = this.add.sprite(config.width/2, config.height/2, "ultraball");
        this.ultraball.setScale(.2)

        this.masterball = this.add.sprite(config.width/2 + 50, config.height/2, "masterball");
        this.masterball.setScale(.2)

        // this.anims.create({
        //     key:"pokeball",
        //     frames: this.anims.generateFrameNumbers("ball"),
        //     frameRate: 10,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: "greatball",
        //     frames: this.anims.generateFrameNumbers("ball"),
        //     frameRate: 10,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key:"ultraball",
        //     frames: this.anims.generateFrameNumbers("ball"),
        //     frameRate: 10,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: "masterball",
        //     frames: this.anims.generateFrameNumbers("ball"),
        //     frameRate: 10,
        //     repeat: -1
        // });

        // this.balls = this.physics.add.group();
        // let maxBalls = 4;
        // for(let i = 0; i <= maxBalls; i++) {
        //     let ball = this.physics.add.sprite(16, 16, "ball");
        //     this.balls.add(ball);
        //     ball.setRandomPosition(0, 0, config.width, config.height);

        //     // this.pokeball.setVelocity(100, 100);
        //     ball.setCollideWorldBounds(true);
        // }


        // PLAYER 
        this.player = this.physics.add.sprite(config.width/2 - 8, config.height - 64, "player");
        // this.player.play("move");
        this.player.setCollideWorldBounds(true);
        this.player.setScale(.2);

        // this.anims.create({
        //     key: "move",
        //     frames: this.anims.generateFrameNumbers("player"),
        //     frameRate: 10,
        //     repeat: -1
        // });
        
        // KEYBOARD INPUT
        this.cursorKeys = this.input.keyboard.createCursorKeys();


        // COLLISIONS(collect)
        this.physics.add.collider(this.pokeball, this.player);
        // this.physics.add.collider(this.greatball, this.player);
        // this.physics.add.collider(this.ultraball, this.player);
        // this.physics.add.collider(this.masterball, this.player);

        // checking to see if player overlaps with the balls to collect
        this.physics.add.overlap(this.player, this.pokeball, this.collectPokeBall, null);
        // this.physics.add.overlap(this.player, this.greatball);
        // this.physics.add.overlap(this.player, this.ultraball);
        // this.physics.add.overlap(this.player, this.masterball);
        
        // SCORE
        this.score = 0;
        this.scoreLabel = this.add.text(20, 20, "Score:", { font: "20px Helvetica", fill: "black" })
        
    }

    // creating different balls on different planes
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

    // resets the balls positions randomly
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

    // a function to keep track of the score when balls are collected
    collect(player, ball) {
        ball.disableBody(true, true);

        this.score += 10;
        this.scoreLabel.setText('Score:' + this.score);


    }

    update() {
        this.moveBall1(this.pokeball, 2);
        this.moveBall2(this.greatball, 2);
        this.moveBall1(this.ultraball, 3);
        this.moveBall2(this.masterball, 3);

        this.movePlayerManager();

        // this.collect(this.pokeball)

        this.background.tilePositionX += 1; // this creates the position of the background and how it moves

    }

    // this will control the player icon
    movePlayerManager(){
        // left and right arrow keys
        if(this.cursorKeys.left.isDown){
            this.player.setVelocityX(-gameSettings.playerSpeed);
        } else if (this.cursorKeys.right.isDown) {
            this.player.setVelocityX(gameSettings.playerSpeed);
        }

        // up and down arrow keys
        if(this.cursorKeys.up.isDown) {
            this.player.setVelocityY(-gameSettings.playerSpeed);
        } else if (this.cursorKeys.down.isDown) {
            this.player.setVelocityY(gameSettings.playerSpeed);
        }
    }
} 