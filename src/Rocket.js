class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
      this.speed = 2;
      // add object to existing scene
      scene.add.existing(this);
    }
    update(){
      if(keyLeft.isDown && this.x > 0){
        this.x -= this.speed;
      }

      if(keyRight.isDown && this.x < game.config.width){
        this.x += this.speed;
      }
    }
  }
