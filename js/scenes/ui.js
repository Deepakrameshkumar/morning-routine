class UIScene extends Phaser.Scene {
    constructor() {
        super('UIScene');
    }

    init(data) {
        this.mainScene = data.mainScene;
    }

    create() {
        this.scoreText = this.add.text(10, 10, 'Fitness Points: 0', { fontSize: '20px', color: '#000' });
        this.timeText = this.add.text(10, 40, 'Time Left: 60', { fontSize: '20px', color: '#000' });
    }

    update() {
        this.scoreText.setText('Fitness Points: ' + this.mainScene.score);
        this.timeText.setText('Time Left: ' + Math.ceil(this.mainScene.timeLeft));
    }
}