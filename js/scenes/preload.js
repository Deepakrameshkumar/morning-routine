class PreloadScene extends Phaser.Scene {
    constructor() {
        super('PreloadScene');
    }

    preload() {
        this.load.image('ashton', 'assets/images/ashton.png');
        this.load.image('ice_bucket', 'assets/images/ice_bucket.png');
        this.load.image('banana_peel', 'assets/images/banana_peel.png');
        this.load.image('background', 'assets/images/background.png');
        this.load.audio('splash', 'assets/sounds/splash.mp3');
        this.load.audio('boing', 'assets/sounds/boing.mp3');
    }

    create() {
        this.scene.start('MainScene');
    }
}

// export default PreloadScene;