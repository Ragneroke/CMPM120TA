class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }

    create(){
        console.log("Enter Play Scene");
        this.add.rectangle(0, 0, game.config.width, 100,0x00FF00).setOrigin(0, 0);
        
    }
}