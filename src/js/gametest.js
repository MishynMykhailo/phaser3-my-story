// //variables
// var buttonRight;
// var buttonLeft;
// var handErrorHiddenTweens;
// //end variables

// var config = {
//     type: Phaser.AUTO,
//     width: 600,
//     height: 900,
//     scene: {
//         preload: preload,
//         create: create,
//         update: update
//     },

// };
// var game = new Phaser.Game(config);


// var background12
// function preload ()
// {

//     this.load.image('background1','assets/background1.jpg');
//     this.load.image('star','assets/star.png');
//     // button
//     this.load.image('button-first-right','assets/buttonDress/button-first-right.png');
//     this.load.image('button-first-left','assets/buttonDress/button-first-left.png');
//     //up-text-window
//     this.load.image('up-text-window','assets/up-text-window.png');
//     this.load.image('chooseYourDress','assets/chooseYourDress.png');
//     //player
//     this.load.spritesheet('man-sprite', 'assets/man-sprite.png', { frameWidth: 400  , frameHeight: 909});
//     this.load.spritesheet('woman-sprite', 'assets/woman-sprite1.png', { frameWidth: 399.8  , frameHeight: 909});
//     //talk Player
//     this.load.image('manPlayer-talk','assets/manPlayer-talk.png');
//     this.load.image('womanPlayer-talk','assets/womanPlayer-talk.png');
//     ///help-heders
//     this.load.image('handError','assets/handError.png')
// }


// var button;
// function create ()
// {   
//     //background//
//     background12 = this.add.image(200, 450, 'background1').setScale(0.5).setAlpha(0.2)

//     //window-text//
//     var textWindow = this.add.image(0,0,'up-text-window').setScale(0.5);
//     var textInWindow = this.add.image(0,0,'chooseYourDress')
//     var containerTextWindow = this.add.container(300,60, [textWindow,textInWindow]).setScale(0);

//     ///player man/woman - animation
//     var manPlayer = this.add.sprite(100,0,'man-sprite').setOrigin(0,0);
//     var womanPlayer = this.add.sprite(-750,0,'woman-sprite').setOrigin(0,0);
//     var manText= this.add.image(300,450,'manPlayer-talk').setScale(0.0);
//     var playerContainer = this.add.container(0,0,[manPlayer,manText,womanPlayer]);
//     var womanText =this.add.image(300,450,'womanPlayer-talk').setScale(0.0);
// /////////////////////////////////////------------------ANIMATION PROCESS PLAYER AND TEXT PLAYER -----------------///////////////
//     /// face-man-anims-2
//     this.faceManAnims =this.anims.create({
//         key:'face-man-anims',
//         frames: this.anims.generateFrameNumbers('man-sprite',{start:0,end:1}),
//         frameRate: 2,
//         repeat: 0,
//         duration: 750,
//     }); 
//     //face-woman-anim-5
//     this.faceWomanAnim =this.anims.create({
//         key:'face-woman-anims',
//         frames: this.anims.generateFrameNumbers('woman-sprite',{start:0,end:3}),
//         frameRate: 2,
//         repeat: 0,
//         duration: 750
//     });   
//     /// man-text-anim-1
//     var manTextTweens = this.tweens.add({
//         delay:400,
//         targets: manText,
//         duration: 500,
//         scaleX:0.3,
//         scaleY:0.3,
//         onStart(){
//             manPlayer.play('face-man-anims');
//         },
//         onComplete(){
//             playerChangePosition.play()
//         }
//     });
//         /// woman-text-anim-4
//     var womenTextTweens = this.tweens.add({
//         targets: womanText,
//         delay:400,
//         duration:500,
//         scaleX:0.3,
//         scaleY:0.3,
//         yoyo:true,
//         hold:800,
//         onStart(){
//             womanPlayer.play('face-woman-anims')
//         },
//         onComplete(){
//             background12.setAlpha(1)
//             textContainerAnimation.play()
//             buttonTweensAnim.play()
//             womenScaleAnim.play()
//         }
//     }).pause();
    
//     var womenScaleAnim = this.tweens.add({
//         targets:womanPlayer,
//         delay:400,
//         duration:500,
//         scaleX:1.2,
//         scaleY:1.2,
//         onComplete(){
//             handErrorScaleTweens.play()
//             handErrorTweens.play()
//         }
//     }).pause()
//     ////// textContainer 
//     var textContainerAnimation = this.tweens.add({
//         delay:400,
//         targets:containerTextWindow,
//         duration:300,
//         scaleX:1,
//         scaleY:1
//     }).pause()
//     // ///change position players-3
//     var playerChangePosition = this.tweens.add({
//         delay:400,
//         targets: playerContainer,
//         duration: 700,
//         repeat: 0,
//         x: {

//             getEnd: function ()
//             {   
//                 destX = 800;

//                 return destX = 800;
//             }
//         },
//         onComplete(){
//             womenTextTweens.play()
//         }
//     }).pause();
// /////////////////////////////////////------------------END ANIMATION PROCESS -----------------------------///////////////
    
// buttonRight = this.add.image(480,780,"button-first-right").setScale(0).setInteractive();
// buttonLeft = this.add.image(120,780,"button-first-left").setScale(0).setInteractive();

// ///////////////////////////BUTTON/////////////////////////////
// ///button-anims 
// var buttonTweensAnim = this.tweens.add({
//     delay:400,
//     targets:[buttonRight,buttonLeft],
//     duration:300,
//     scaleX:0.4,
//     scaleY:0.4
// }).pause();

// buttonRight
// .on('pointerup', hoverButtonRight, this)
// .on('pointerover',()=>{
//     this.tweens.add({
//         targets:buttonRight,
//         duration:300,
//         scaleX:0.35,
//         scaleY:0.35,
//     })
// },this)
// .on('pointerout',()=>{
//     this.tweens.add({
//         targets:buttonRight,
//         duration:300,
//         scaleX:0.4,
//         scaleY:0.4,
//     })
// });

// buttonLeft
// .on('pointerup', hoverButtonLeft, this)
// .on('pointerover',()=>{
//     this.tweens.add({
//         targets:buttonLeft,
//         duration:300,
//         scaleX:0.35,
//         scaleY:0.35,
//     })
// },this)
// .on('pointerout',()=>{
//     this.tweens.add({
//         targets:buttonLeft,
//         duration:300,
//         scaleX:0.4,
//         scaleY:0.4,
//     })
// });
// ///////////////////////////--------END BUTTON/////////////////////
//  var handError = this.add.image(120,800,'handError').setScale(0);
//  handErrorTweens = this.tweens.add({
//      targets:handError,
//      delay:2000,
//      duration:1000,
//      repeat: -1,
//      yoyo:true,
//      hold:150,
//      x: {

//         getEnd: function ()
//         {   

//             return handDest  = 500;
//         }
//     }
//  }).pause()
//  var handErrorScaleTweens = this.tweens.add({
//     targets:handError,
//     delay:2000,
//     duration:500,
//     scaleX:0.5,
//     scaleY:0.5, 
//  }).pause()
// handErrorHiddenTweens = this.tweens.add({
//     targets:handError,
//     duration:500,
//     scaleX:0,
//     scaleY:0, 
//     onComplete(){
//         handErrorScaleTweens.pause()
//     }
//  }).pause()
// //random image
//     this.starrr = this.add.image(0,0, 'star').setPosition(300,450);
// }

// function update ()
// {
//     if(this.input.activePointer.isDown){
//         this.starrr.rotation += 0.5;

//     }
    
// }


// function hoverButtonRight(){

//     handErrorHiddenTweens.play()
//     this.anims.create({
//         key:'face-woman-button-right',
//         frames: this.anims.generateFrameNumbers('woman-sprite',4),
//         frameRate: 2,
//         repeat: 0,
//         duration: 750
//     }); 
//     return 
// }
// function hoverButtonLeft(){

//     handErrorHiddenTweens.play()
//     .play('face-woman-anims')
//     return 
// }
