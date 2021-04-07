// Nathan Altice
// Paddle Parkour P3
// An endless dodging game (ported from Phaser CE)
// Barrier prefab adapted from Travis Faas, An Introduction to HTML5 Game Development with Phaser.js (2017)
// Original: 4/20/17
// Updated: 7/6/20

// keep me honest
'use strict';
console.log("Phaser Initialized");
// define and configure main Phaser game object
let config = {
    parent: 'myGame',
    type: Phaser.CANVAS,
    height: 640,
    width: 960,
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: []
}
let game = new Phaser.Game(config);

// uncomment the following line if you need to purge local storage data
//localStorage.clear();