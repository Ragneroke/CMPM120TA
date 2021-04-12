class Ship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
      this.speed = 5;
      // add object to existing scene
      scene.add.existing(this);
    }
    update(){
        this.x -= this.speed;
        if(this.x < 0){
            this.x = game.config.width;
        }
    }
}