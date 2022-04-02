    //////////--------variables
//--->button-right
var buttonFirstRight;
var buttonTwoRight;
var buttonTreeRight;
var buttonFourRight;
//--->button-left
var buttonFirstLeft;
var buttonTwoLeft;
var buttonTreeLeft;
var buttonFourLeft;

var handErrorTweens;
var handErrorHiddenTweens;
var womanPlayer;
var manPlayer
var manFinallSceneAnimation;

var buttonHiddenFirstAnim;
var buttonTwoHiddenAnim;
var buttonTreeHiddenAnim;
var buttonFourHiddenAnim;

var chooseDressHiddenAnimation;
var chooseBagHiddenAnimation;
var chooseAcsHiddenAnimation;
var choosePlaceHiddenAnimation;

var background1;
var background2;
var background3;
//end variables

var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 900,
    scene: {
        preload: preload,
        create: create,
        update: update
    },

};
var game = new Phaser.Game(config);

function preload ()
{

    this.load.image('background1','assets/background1.jpg');
    // button
    this.load.image('button-first-right','assets/buttonDress/button-first-right.png');
    this.load.image('button-first-left','assets/buttonDress/button-first-left.png');
    this.load.image('button-two-right','assets/buttonDress/button-two-right.png');
    this.load.image('button-two-left','assets/buttonDress/button-two-left.png');
    this.load.image('button-tree-right','assets/buttonDress/button-tree-right.png');
    this.load.image('button-tree-left','assets/buttonDress/button-tree-left.png');
    this.load.image('button-four-right','assets/buttonDress/button-four-right.png');
    this.load.image('button-four-left','assets/buttonDress/button-four-left.png');
    // this.load.image()
    // this.load.image()
    //up-text-window

    this.load.image('chooseDress','assets/chooseDress.png');
    this.load.image('chooseBag','assets/chooseBag.png');
    this.load.image('chooseAcs','assets/chooseAcs.png');
    this.load.image('choosePlace','assets/choosePlace.png');
    //player
    this.load.spritesheet('man-sprite', 'assets/man-sprite.png', { frameWidth: 400  , frameHeight: 909});
    this.load.spritesheet('woman-sprite', 'assets/woman-sprite.png', { frameWidth: 399.8  , frameHeight: 909});
    //talk Player
    this.load.image('manPlayer-talk','assets/manPlayer-talk.png');
    this.load.image('womanPlayer-talk','assets/womanPlayer-talk.png');
    this.load.image('finally-Text-True','assets/finallyTextTrue.png')
    ///help-heders
    this.load.image('handError','assets/handError.png');
    this.load.image('background2','assets/background2.jpg')
    this.load.image('background3','assets/background3.jpg')
    //audio
    this.load.audio('myStorySound',['assets/audio/myStory.mp3','assets/audio/myStory.ogg'])
}


function create ()
{   
//////////--------background
    background1 = this.add.image(200, 450, 'background1').setScale(0.5).setAlpha(0.2);
    background2 = this.add.image(200, 450, 'background2').setScale(0.5).setAlpha(0);
    background3 = this.add.image(200, 450, 'background3').setScale(0.5).setAlpha(0);

//////////--------music
var music = this.sound.add('myStorySound')
music.play()

//////////--------window-text
    var chooseDress = this.add.image(300,60,'chooseDress').setScale(0);
    var chooseBag = this.add.image(300,60,'chooseBag').setScale(0);
    var chooseAcs = this.add.image(300,60,'chooseAcs').setScale(0);
    var choosePlace = this.add.image(300,60,'choosePlace').setScale(0);

//////////--------player man/woman - animation
    manPlayer = this.add.sprite(100,0,'man-sprite').setOrigin(0,0);
    womanPlayer = this.add.sprite(-750,0,'woman-sprite').setOrigin(0,0);
    var manText= this.add.image(300,450,'manPlayer-talk').setScale(0.0);
    var playerContainer = this.add.container(0,0,[manPlayer,manText,womanPlayer]);
    var womanText =this.add.image(300,450,'womanPlayer-talk').setScale(0.0);
    var finallyTextTrue = this.add.image(300,500,'finally-Text-True').setScale(0)

//////////--------ANIMATION PROCESS PLAYER AND TEXT PLAYER
    /// face-man-anims-2
    this.anims.create({
        key:'face-man-anims',
        frames: this.anims.generateFrameNumbers('man-sprite',{start:0,end:1}),
        frameRate: 2,
        repeat: 0,
        duration: 750,
    });

    //face-woman-anim-5
    this.anims.create({
        key:'face-woman-anims',
        frames: this.anims.generateFrameNumbers('woman-sprite',{start:0,end:3}),
        frameRate: 2,
        repeat: 0,
        duration: 750
    });

    //------------------------->face-woman-anim-№2
    this.anims.create(
            {
            key:'face-first-button-anims',
            frames: this.anims.generateFrameNumbers('woman-sprite',{start:2,end:3}),
            frameRate: 1,
            repeat: 0,
            duration: 750
    });
    //------------------------->face-woman-anim-№3
    this.anims.create(
            {
            key:'face-tree-right-button-anims',
            frames: this.anims.generateFrameNumbers('woman-sprite',{start:3,end:4}),
            frameRate: 5,
            repeat: 0,
            duration: 750
    });

    /// man-text-anim-1
    var manTextTweens = this.tweens.add({
        delay:400,
        targets: manText,
        duration: 500,
        scaleX:0.3,
        scaleY:0.3,
        onStart(){
            manPlayer.play('face-man-anims');
        },
        onComplete(){
            playerChangePosition.play()
        }
    });

        /// woman-text-anim-4
    var womenTextTweens = this.tweens.add({
        targets: womanText,
        delay:400,
        duration:500,
        scaleX:0.3,
        scaleY:0.3,
        yoyo:true,
        hold:800,
        onStart(){
            womanPlayer.play('face-woman-anims')
        },
        onComplete(){
            background1.setAlpha(1)
            chooseDressAnimation.play()
            buttonFirstAnim.play()
            womenScaleAnim.play()
        }
    }).pause();
    var finallyTextTrueTweens = this.tweens.add({
        targets: finallyTextTrue,
        delay:400,
        duration:500,
        scaleX:0.5,
        scaleY:0.5
    }).pause();
    
    var womenScaleAnim = this.tweens.add({
        targets:womanPlayer,
        delay:400,
        duration:500,
        scaleX:1.2,
        scaleY:1.2,
        onComplete(){
            handErrorTweens.play()
            handErrorScaleTweens.play()
        }
    }).pause();

    ////// textContainer 
    /////---->Animation-appearance-all-text-block
    var chooseDressAnimation = this.tweens.add({
        delay:400,
        targets:chooseDress,
        duration:300,
        scaleX:1,
        scaleY:1
    }).pause();
    var chooseBagAnimation = this.tweens.add({
        delay:400,
        targets:chooseBag,
        duration:300,
        scaleX:1,
        scaleY:1
    }).pause();
    var chooseAcsAnimation = this.tweens.add({
        delay:400,
        targets:chooseAcs,
        duration:300,
        scaleX:1,
        scaleY:1
    }).pause();
    var choosePlaceAnimation = this.tweens.add({
        delay:400,
        targets:choosePlace,
        duration:300,
        scaleX:1,
        scaleY:1
    }).pause();
    ///--->Hidden-animation-all-text-block
    chooseDressHiddenAnimation = this.tweens.add({
        targets:chooseDress,
        duration:250,
        scaleX:0,
        scaleY:0,
        onComplete(){
            chooseBagAnimation.play()
        }
    }).pause();
    chooseBagHiddenAnimation = this.tweens.add({
        targets:chooseBag,
        duration:250,
        scaleX:0,
        scaleY:0,
        onComplete(){
            chooseAcsAnimation.play()
        }
    }).pause();
    chooseAcsHiddenAnimation = this.tweens.add({
        targets:chooseAcs,
        duration:250,
        scaleX:0,
        scaleY:0,
        onComplete(){
            choosePlaceAnimation.play()
        }
    }).pause();
    choosePlaceHiddenAnimation = this.tweens.add({
        targets:choosePlace,
        duration:250,
        scaleX:0,
        scaleY:0
    }).pause();
    // ///change position players-3
    var playerChangePosition = this.tweens.add({
        delay:400,
        targets: playerContainer,
        duration: 700,
        repeat: 0,
        x: {

            getEnd: function ()
            {   
                return destX = 800;
            }
        },
        onComplete(){
            womenTextTweens.play()
        }
    }).pause();
    manFinallSceneAnimation = this.tweens.add({
        delay:400,
        targets: manPlayer,
        duration: 700,
        repeat: 0,
        x: {
            getEnd: function ()
            {   
                return destMan = -580;
            }
        },
        onComplete(){
            finallyTextTrueTweens.play()
        }
    }).pause();
//////////--------END ANIMATION PROCESS

buttonFirstRight = this.add.image(480,780,"button-first-right").setScale(0).setInteractive();
buttonFirstLeft = this.add.image(120,780,"button-first-left").setScale(0).setInteractive();

//////////--------BUTTON
///button-anims 
var buttonFirstAnim = this.tweens.add({
    delay:400,
    targets:[buttonFirstRight,buttonFirstLeft],
    duration:300,
    scaleX:0.4,
    scaleY:0.4
}).pause();

buttonFirstRight
.on('pointerup', hoverButtonFirstRight , this)
.on('pointerover',()=>{
    this.tweens.add({
        targets:buttonFirstRight,
        duration:300,
        scaleX:0.35,
        scaleY:0.35,
    })
},this)
.on('pointerout',()=>{
    this.tweens.add({
        targets:buttonFirstRight,
        duration:300,
        scaleX:0.4,
        scaleY:0.4,
    })
});

buttonFirstLeft
.on('pointerup', hoverButtonFirstLeft, this)
.on('pointerover',()=>{
    this.tweens.add({
        targets:buttonFirstLeft,
        duration:300,
        scaleX:0.35,
        scaleY:0.35,
    })
},this)
.on('pointerout',()=>{
    this.tweens.add({
        targets:buttonFirstLeft,
        duration:300,
        scaleX:0.4,
        scaleY:0.4,
    })
});

buttonHiddenFirstAnim = this.tweens.add({
    targets:[buttonFirstRight,buttonFirstLeft],

    duration:250,
    scaleX:0,
    scaleY:0,
    onComplete(){
        buttonTwoAnim.play()
    }
}).pause();

buttonTwoRight = this.add.image(480,780,'button-two-right').setScale(0).setInteractive();
buttonTwoLeft = this.add.image(120,780,'button-two-left').setScale(0).setInteractive();

var buttonTwoAnim = this.tweens.add({
    delay:400,
    targets:[buttonTwoRight,buttonTwoLeft],
    duration:300,
    scaleX:0.8,
    scaleY:0.8,
}).pause();

buttonTwoRight.on('pointerup', hoverButtonTwoRight, this)
.on('pointerover',()=>{
    this.tweens.add({
        targets:buttonTwoRight,
        duration:300,
        scaleX:0.75,
        scaleY:0.75 ,
    })
},this)
.on('pointerout',()=>{
    this.tweens.add({
        targets:buttonTwoRight,
        duration:300,
        scaleX:0.8,
        scaleY:0.8,
    })
});

buttonTwoLeft.on('pointerup', hoverButtonTwoLeft, this)
.on('pointerover',()=>{
    this.tweens.add({
        targets:buttonTwoLeft,
        duration:300,
        scaleX:0.75,
        scaleY:0.75 ,
    })
},this)
.on('pointerout',()=>{
    this.tweens.add({
        targets:buttonTwoLeft,
        duration:300,
        scaleX:0.8,
        scaleY:0.8,
    })
});

buttonTwoHiddenAnim = this.tweens.add({
    targets:[buttonTwoRight,buttonTwoLeft],

    duration:250,
    scaleX:0,
    scaleY:0,
    onComplete(){
        buttonTreeAnim.play()
    }
}).pause();

buttonTreeRight = this.add.image(480,780,'button-tree-right').setScale(0).setInteractive();
buttonTreeLeft = this.add.image(120,780,'button-tree-left').setScale(0).setInteractive();

var buttonTreeAnim = this.tweens.add({
    delay:400,
    targets:[buttonTreeRight,buttonTreeLeft],
    duration:300,
    scaleX:0.4,
    scaleY:0.4
}).pause();

buttonTreeRight.on('pointerup', hoverButtonTreeRight, this)
.on('pointerover',()=>{
    this.tweens.add({
        targets:buttonTreeRight,
        duration:300,
        scaleX:0.35,
        scaleY:0.35
    })
},this)
.on('pointerout',()=>{
    this.tweens.add({
        targets:buttonTreeRight,
        duration:300,
        scaleX:0.4,
        scaleY:0.4
    })
});

buttonTreeLeft.on('pointerup', hoverButtonTreeLeft, this)
.on('pointerover',()=>{
    this.tweens.add({
        targets:buttonTreeLeft,
        duration:300,
        scaleX:0.35,
        scaleY:0.35
    })
},this)
.on('pointerout',()=>{
    this.tweens.add({
        targets:buttonTreeLeft,
        duration:300,
        scaleX:0.4,
        scaleY:0.4
    })
});

buttonTreeHiddenAnim = this.tweens.add({
    targets:[buttonTreeRight,buttonTreeLeft],

    duration:250,
    scaleX:0,
    scaleY:0,
    onComplete(){
        buttonFourAnim.play()
    }
}).pause();

buttonFourRight = this.add.image(480,780,'button-four-right').setScale(0).setInteractive();
buttonFourLeft = this.add.image(120,780,'button-four-left').setScale(0).setInteractive();

var buttonFourAnim = this.tweens.add({
    delay:400,
    targets:[buttonFourRight,buttonFourLeft],
    duration:300,
    scaleX:0.8,
    scaleY:0.8
}).pause();

buttonFourRight.on('pointerup', hoverButtonFourRight, this)
.on('pointerover',()=>{
    this.tweens.add({
        targets:buttonFourRight,
        duration:300,
        scaleX:0.75,
        scaleY:0.75
    })
},this)
.on('pointerout',()=>{
    this.tweens.add({
        targets:buttonFourRight,
        duration:300,
        scaleX:0.8,
        scaleY:0.8
    })
});

buttonFourHiddenAnim = this.tweens.add({
    targets:[buttonFourRight,buttonFourLeft],
    duration:250,
    scaleX:0,
    scaleY:0
}).pause();
buttonFourLeft.on('pointerup', hoverButtonFourLeft, this)
.on('pointerover',()=>{
    this.tweens.add({
        targets:buttonFourLeft,
        duration:300,
        scaleX:0.75,
        scaleY:0.75
    })
},this)
.on('pointerout',()=>{
    this.tweens.add({
        targets:buttonFourLeft,
        duration:300,
        scaleX:0.8,
        scaleY:0.8
    })
});
//////////--------END BUTTON

//////////--------HAND-ERROR
 var handError = this.add.image(120,800,'handError').setScale(0);
 handErrorTweens = this.tweens.add({ 
    targets:handError,
     delay:2000,
     duration:1000,
     repeat: -1,
     yoyo:true,
     hold:150,
     x: {

        getEnd: function ()
        {   

            return handDest  = 500;
        }
    }
 }).pause();

var handErrorScaleTweens = this.tweens.add({
    targets:handError,
    delay:2000,
    duration:500,
    scaleX:0.5,
    scaleY:0.5
 }).pause();

handErrorHiddenTweens = this.tweens.add({
    targets:handError,
    duration:100,
    scaleX:0,
    scaleY:0,
    onComplete(){
        handErrorScaleTweens.pause()
    }
 }).pause();
//////////--------END-HAND-ERROR

//random image

}

function update ()
{
    
}

//////////--------button-event
//------>first-button
function hoverButtonFirstRight(){
    chooseDressHiddenAnimation.play();
    buttonHiddenFirstAnim.play();
    handErrorHiddenTweens.play();
    womanPlayer.play('face-first-button-anims');
    buttonFirstRight.destroy();
    return 
}
function hoverButtonFirstLeft(){
    chooseDressHiddenAnimation.play();
    buttonHiddenFirstAnim.play();
    handErrorHiddenTweens.play();
    womanPlayer.play('face-first-button-anims');
    buttonFirstLeft.destroy();
    return 
}
//------>two-button
function hoverButtonTwoRight (){
    chooseBagHiddenAnimation.play();
    handErrorHiddenTweens.play();
    womanPlayer.play('face-first-button-anims');
    handErrorHiddenTweens.play();
    buttonTwoHiddenAnim.play();
    buttonTwoRight.destroy();
    return
}
function hoverButtonTwoLeft (){
    chooseBagHiddenAnimation.play();
    womanPlayer.play('face-first-button-anims');
    buttonTwoHiddenAnim.play();
    buttonTwoLeft.destroy();
    return
}
//------>tree-button
function hoverButtonTreeRight (){
    chooseAcsHiddenAnimation.play();
    womanPlayer.play('face-first-button-anims');
    handErrorHiddenTweens.play();
    buttonTreeHiddenAnim.play();
    buttonTreeRight.destroy();
    return
}
function hoverButtonTreeLeft (){
    chooseAcsHiddenAnimation.play();
    womanPlayer.play('face-tree-right-button-anims');
    handErrorHiddenTweens.play();
    buttonTreeHiddenAnim.play();
    buttonTreeLeft.destroy();
    return
}
function hoverButtonFourRight (){
    buttonFourHiddenAnim.play();
    choosePlaceHiddenAnimation.play();
    handErrorHiddenTweens.play();
    background2.setAlpha(1);
    buttonFourRight.destroy();
    manFinallSceneAnimation.play();
    return
}
function hoverButtonFourLeft (){
    buttonFourHiddenAnim.play();
    choosePlaceHiddenAnimation.play();
    handErrorHiddenTweens.play();
    background3.setAlpha(1);
    buttonFourLeft.destroy();
    manFinallSceneAnimation.play();
    return
}