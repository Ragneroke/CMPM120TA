class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
      this.speed = 5;
      // add object to existing scene
      scene.add.existing(this);
      this.isFiring = false;
    }
    update(){
      if(this.isFiring){
        this.y -= this.speed;
        if(this.y < borderUISize + borderPadding){
          this.y = game.config.height - borderUISize - borderPadding;
          this.isFiring = false;
        }
      }else{
        if(keyLeft.isDown && this.x > 0){
          this.x -= this.speed;
        }
  
        if(keyRight.isDown && this.x < game.config.width){
          this.x += this.speed;
        }
        
        if(Phaser.Input.Keyboard.JustDown(keyF)){
          this.isFiring = true;
          console.log("fire");
        }

      }

      this.x = Phaser.Math.Clamp(this.x, borderUISize + borderPadding, game.config.width - borderUISize - borderPadding);
    }
  }
