class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    create() {
        this.add.image(400, 300, 'background');
        this.ashton = this.physics.add.sprite(400, 500, 'ashton').setInteractive();
        this.iceBucket = this.physics.add.sprite(200, 300, 'ice_bucket').setInteractive();
        this.bananaPeel = this.physics.add.sprite(600, 300, 'banana_peel').setInteractive();

        this.score = 0;
        this.timeLeft = 60; // Seconds for demo (adjust for 3:50-9:30 later)

        // Click/touch events
        this.ashton.on('pointerdown', () => {
            this.sound.play('boing');
            this.score += 10;
            this.ashton.y -= 20; // Jump animation
            this.tweens.add({ targets: this.ashton, y: 500, duration: 200 });
        });

        this.iceBucket.on('pointerdown', () => {
            this.sound.play('splash');
            this.score += 20;
            this.iceBucket.setScale(1.2).setTint(0x00ffff);
            this.time.delayedCall(200, () => this.iceBucket.setScale(1).clearTint());
        });

        this.bananaPeel.on('pointerdown', () => {
            this.sound.play('boing');
            this.score += 15;
            this.bananaPeel.rotation += 0.5;
        });

        this.scene.launch('UIScene', { mainScene: this });
    }

    update() {
        this.timeLeft -= 1 / 60; // Decrease time (60 FPS)
        if (this.timeLeft <= 0) {
            this.scene.pause();
            alert('Time’s up! Score: ' + this.score);
        }
    }
}