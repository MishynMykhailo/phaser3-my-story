import Phaser from "phaser";
class MyScene extends Phaser.Scene {
  constructor(config) {
    super(config);
  }

  preload() {
    this.load.image("background1", "assets/background1.jpg");
    // button
    this.load.image(
      "button-first-right",
      "assets/buttonDress/button-first-right.png"
    );
    this.load.image(
      "button-first-left",
      "assets/buttonDress/button-first-left.png"
    );
    this.load.image(
      "button-two-right",
      "assets/buttonDress/button-two-right.png"
    );
    this.load.image(
      "button-two-left",
      "assets/buttonDress/button-two-left.png"
    );
    this.load.image(
      "button-tree-right",
      "assets/buttonDress/button-tree-right.png"
    );
    this.load.image(
      "button-tree-left",
      "assets/buttonDress/button-tree-left.png"
    );
    this.load.image(
      "button-four-right",
      "assets/buttonDress/button-four-right.png"
    );
    this.load.image(
      "button-four-left",
      "assets/buttonDress/button-four-left.png"
    );
    // this.load.image()
    // this.load.image()
    //up-text-window

    this.load.image(
      "chooseDress",
      "assets/chooseDress.png",
      "chooseBag",
      "assets/chooseBag.png"
    );
    this.load.image("chooseBag", "assets/chooseBag.png");
    this.load.image("chooseAcs", "assets/chooseAcs.png");
    this.load.image("choosePlace", "assets/choosePlace.png");
    //player
    this.load.spritesheet("man-sprite", "assets/man-sprite.png", {
      frameWidth: 400,
      frameHeight: 909,
    });
    this.load.spritesheet("woman-sprite", "assets/woman-sprite.png", {
      frameWidth: 399.8,
      frameHeight: 909,
    });
    //talk Player
    this.load.image("manPlayer-talk", "assets/manPlayer-talk.png");
    this.load.image("womanPlayer-talk", "assets/womanPlayer-talk.png");
    this.load.image("finally-Text-True", "assets/finallyTextTrue.png");
    ///help-heders
    this.load.image("handError", "assets/handError.png");
    this.load.image("background2", "assets/background2.jpg");
    this.load.image("background3", "assets/background3.jpg");
    //audio
    this.load.audio("myStorySound", [
      "assets/audio/myStory.mp3",
      "assets/audio/myStory.ogg",
    ]);
  }

  create() {
    //////////--------background
    const backgroundPhoto = {
      background1: this.add
        .image(200, 450, "background1")
        .setScale(0.5)
        .setAlpha(0.2),
      background2: this.add
        .image(200, 450, "background2")
        .setScale(0.5)
        .setAlpha(0),
      background3: this.add
        .image(200, 450, "background3")
        .setScale(0.5)
        .setAlpha(0),
    };
    //////////--------music
    this.sound.add("myStorySound", { volume: 0.05 }).play();

    //////////--------window-text
    const chooseWindow = {
      chooseDress: this.add.image(300, 60, "chooseDress").setScale(0),
      chooseBag: this.add.image(300, 60, "chooseBag").setScale(0),
      chooseAcs: this.add.image(300, 60, "chooseAcs").setScale(0),
      choosePlace: this.add.image(300, 60, "choosePlace").setScale(0),
    };

    //////////--------player man/woman - animation
    const manPlayer = this.add.sprite(100, 0, "man-sprite").setOrigin(0, 0);
    const womanPlayer = this.add
      .sprite(-750, 0, "woman-sprite")
      .setOrigin(0, 0);
    const manText = this.add.image(300, 450, "manPlayer-talk").setScale(0.0);
    const playerContainer = this.add.container(0, 0, [
      manPlayer,
      manText,
      womanPlayer,
    ]);
    const womanText = this.add
      .image(300, 450, "womanPlayer-talk")
      .setScale(0.0);
    const finallyTextTrue = this.add
      .image(300, 500, "finally-Text-True")
      .setScale(0);

    //////////--------ANIMATION PROCESS PLAYER AND TEXT PLAYER
    const animFacePlayers = {
      //------------------------->face-man-anim-
      faceManAnim: this.anims.create({
        key: "face-man-anims",
        frames: this.anims.generateFrameNumbers("man-sprite", {
          start: 0,
          end: 1,
        }),
        frameRate: 2,
        repeat: 0,
        duration: 750,
      }),
      //------------------------->face-woman-anim-№1
      faceWomenAnimOne: this.anims.create({
        key: "face-woman-anims",
        frames: this.anims.generateFrameNumbers("woman-sprite", {
          start: 0,
          end: 3,
        }),
        frameRate: 2,
        repeat: 0,
        duration: 750,
      }),

      //------------------------->face-woman-anim-№2
      faceFirstButtonAnims: this.anims.create({
        key: "face-first-button-anims",
        frames: this.anims.generateFrameNumbers("woman-sprite", {
          start: 2,
          end: 3,
        }),
        frameRate: 1,
        repeat: 0,
        duration: 750,
      }),
      //------------------------->face-woman-anim-№3
      faceTreeRightButtonAnims: this.anims.create({
        key: "face-tree-right-button-anims",
        frames: this.anims.generateFrameNumbers("woman-sprite", {
          start: 3,
          end: 4,
        }),
        frameRate: 5,
        repeat: 0,
        duration: 750,
      }),
    };

    /// man-text-anim-1
    this.tweens.add({
      delay: 400,
      targets: manText,
      duration: 500,
      scaleX: 0.3,
      scaleY: 0.3,
      onStart() {
        manPlayer.play("face-man-anims");
      },
      onComplete() {
        playerChangePosition.play();
      },
    });

    /// woman-text-anim-4
    const womenTextTweens = this.tweens
      .add({
        targets: womanText,
        delay: 400,
        duration: 500,
        scaleX: 0.3,
        scaleY: 0.3,
        yoyo: true,
        hold: 800,
        onStart() {
          womanPlayer.play("face-woman-anims");
        },
        onComplete() {
          backgroundPhoto.background1.setAlpha(1);
          animAcsImg.animDress.play();
          buttonFirstAnim.play();
          womenScaleAnim.play();
        },
      })
      .pause();
    const finallyTextTrueTweens = this.tweens
      .add({
        targets: finallyTextTrue,
        delay: 400,
        duration: 500,
        scaleX: 0.5,
        scaleY: 0.5,
      })
      .pause();

    const womenScaleAnim = this.tweens
      .add({
        targets: womanPlayer,
        delay: 400,
        duration: 500,
        scaleX: 1.2,
        scaleY: 1.2,
        onComplete() {
          handErrorTweens.play();
          handErrorScaleTweens.play();
        },
      })
      .pause();

    ////// textContainer
    /////---->Animation-appearance-all-text-block
    const animAcsImg = {
      animDress: this.tweens
        .add({
          delay: 400,
          targets: chooseWindow.chooseDress,
          duration: 300,
          scaleX: 1,
          scaleY: 1,
        })
        .pause(),
      animBag: this.tweens
        .add({
          delay: 400,
          targets: chooseWindow.chooseBag,
          duration: 300,
          scaleX: 1,
          scaleY: 1,
        })
        .pause(),
      animAcs: this.tweens
        .add({
          delay: 400,
          targets: chooseWindow.chooseAcs,
          duration: 300,
          scaleX: 1,
          scaleY: 1,
        })
        .pause(),
      animPlace: this.tweens
        .add({
          delay: 400,
          targets: chooseWindow.choosePlace,
          duration: 300,
          scaleX: 1,
          scaleY: 1,
        })
        .pause(),
    };
    ///--->Hidden-animation-all-text-block
    const hiddenAnimationChoose = {
      dress: this.tweens
        .add({
          targets: chooseWindow.chooseDress,
          duration: 250,
          scaleX: 0,
          scaleY: 0,
          onComplete() {
            animAcsImg.animBag.play();
          },
        })
        .pause(),
      bag: this.tweens
        .add({
          targets: chooseWindow.chooseBag,
          duration: 250,
          scaleX: 0,
          scaleY: 0,
          onComplete() {
            animAcsImg.animAcs.play();
          },
        })
        .pause(),
      acs: this.tweens
        .add({
          targets: chooseWindow.chooseAcs,
          duration: 250,
          scaleX: 0,
          scaleY: 0,
          onComplete() {
            animAcsImg.animPlace.play();
          },
        })
        .pause(),
      place: this.tweens
        .add({
          targets: chooseWindow.choosePlace,
          duration: 250,
          scaleX: 0,
          scaleY: 0,
        })
        .pause(),
    };

    // ///change position players-3
    const playerChangePosition = this.tweens
      .add({
        delay: 400,
        targets: playerContainer,
        duration: 700,
        repeat: 0,
        x: {
          getEnd: function () {
            const destX = 800;
            return destX;
          },
        },
        onComplete() {
          womenTextTweens.play();
        },
      })
      .pause();
    const manFinallSceneAnimation = this.tweens
      .add({
        delay: 400,
        targets: manPlayer,
        duration: 700,
        repeat: 0,
        x: {
          getEnd: function () {
            const destMan = -580;
            return destMan;
          },
        },
        onComplete() {
          finallyTextTrueTweens.play();
        },
      })
      .pause();
    //////////--------END ANIMATION PROCESS//////////////////
    const allBtn = {
      buttonFirstRight: this.add
        .image(480, 780, "button-first-right")
        .setScale(0)
        .setInteractive(),
      buttonFirstLeft: this.add
        .image(120, 780, "button-first-left")
        .setScale(0)
        .setInteractive(),
      buttonTwoRight: this.add
        .image(480, 780, "button-two-right")
        .setScale(0)
        .setInteractive(),
      buttonTwoLeft: this.add
        .image(120, 780, "button-two-left")
        .setScale(0)
        .setInteractive(),
      buttonTreeRight: this.add
        .image(480, 780, "button-tree-right")
        .setScale(0)
        .setInteractive(),
      buttonTreeLeft: this.add
        .image(120, 780, "button-tree-left")
        .setScale(0)
        .setInteractive(),
      buttonFourRight: this.add
        .image(480, 780, "button-four-right")
        .setScale(0)
        .setInteractive(),
      buttonFourLeft: this.add
        .image(120, 780, "button-four-left")
        .setScale(0)
        .setInteractive(),
    };

    //////////--------BUTTON
    ///button-anims
    const buttonFirstAnim = this.tweens
      .add({
        delay: 400,
        targets: [allBtn.buttonFirstRight, allBtn.buttonFirstLeft],
        duration: 300,
        scaleX: 0.4,
        scaleY: 0.4,
      })
      .pause();

    allBtn.buttonFirstRight
      .on("pointerup", hoverButtonFirstRight, this)
      .on(
        "pointerover",
        () => {
          this.tweens.add({
            targets: allBtn.buttonFirstRight,
            duration: 300,
            scaleX: 0.35,
            scaleY: 0.35,
          });
        },
        this
      )
      .on("pointerout", () => {
        this.tweens.add({
          targets: allBtn.buttonFirstRight,
          duration: 300,
          scaleX: 0.4,
          scaleY: 0.4,
        });
      });

    allBtn.buttonFirstLeft
      .on("pointerup", hoverButtonFirstLeft, this)
      .on(
        "pointerover",
        () => {
          this.tweens.add({
            targets: allBtn.buttonFirstLeft,
            duration: 300,
            scaleX: 0.35,
            scaleY: 0.35,
          });
        },
        this
      )
      .on("pointerout", () => {
        this.tweens.add({
          targets: allBtn.buttonFirstLeft,
          duration: 300,
          scaleX: 0.4,
          scaleY: 0.4,
        });
      });

    const buttonHiddenFirstAnim = this.tweens
      .add({
        targets: [allBtn.buttonFirstRight, allBtn.buttonFirstLeft],

        duration: 250,
        scaleX: 0,
        scaleY: 0,
        onComplete() {
          buttonTwoAnim.play();
        },
      })
      .pause();

    const buttonTwoAnim = this.tweens
      .add({
        delay: 400,
        targets: [allBtn.buttonTwoRight, allBtn.buttonTwoLeft],
        duration: 300,
        scaleX: 0.8,
        scaleY: 0.8,
      })
      .pause();

    allBtn.buttonTwoRight
      .on("pointerup", hoverButtonTwoRight, this)
      .on(
        "pointerover",
        () => {
          this.tweens.add({
            targets: allBtn.buttonTwoRight,
            duration: 300,
            scaleX: 0.75,
            scaleY: 0.75,
          });
        },
        this
      )
      .on("pointerout", () => {
        this.tweens.add({
          targets: allBtn.buttonTwoRight,
          duration: 300,
          scaleX: 0.8,
          scaleY: 0.8,
        });
      });

    allBtn.buttonTwoLeft
      .on("pointerup", hoverButtonTwoLeft, this)
      .on(
        "pointerover",
        () => {
          this.tweens.add({
            targets: allBtn.buttonTwoLeft,
            duration: 300,
            scaleX: 0.75,
            scaleY: 0.75,
          });
        },
        this
      )
      .on("pointerout", () => {
        this.tweens.add({
          targets: allBtn.buttonTwoLeft,
          duration: 300,
          scaleX: 0.8,
          scaleY: 0.8,
        });
      });

    const buttonTwoHiddenAnim = this.tweens
      .add({
        targets: [allBtn.buttonTwoRight, allBtn.buttonTwoLeft],

        duration: 250,
        scaleX: 0,
        scaleY: 0,
        onComplete() {
          buttonTreeAnim.play();
        },
      })
      .pause();

    const buttonTreeAnim = this.tweens
      .add({
        delay: 400,
        targets: [allBtn.buttonTreeRight, allBtn.buttonTreeLeft],
        duration: 300,
        scaleX: 0.4,
        scaleY: 0.4,
      })
      .pause();

    allBtn.buttonTreeRight
      .on("pointerup", hoverButtonTreeRight, this)
      .on(
        "pointerover",
        () => {
          this.tweens.add({
            targets: allBtn.buttonTreeRight,
            duration: 300,
            scaleX: 0.35,
            scaleY: 0.35,
          });
        },
        this
      )
      .on("pointerout", () => {
        this.tweens.add({
          targets: allBtn.buttonTreeRight,
          duration: 300,
          scaleX: 0.4,
          scaleY: 0.4,
        });
      });

    allBtn.buttonTreeLeft
      .on("pointerup", hoverButtonTreeLeft, this)
      .on(
        "pointerover",
        () => {
          this.tweens.add({
            targets: allBtn.buttonTreeLeft,
            duration: 300,
            scaleX: 0.35,
            scaleY: 0.35,
          });
        },
        this
      )
      .on("pointerout", () => {
        this.tweens.add({
          targets: allBtn.buttonTreeLeft,
          duration: 300,
          scaleX: 0.4,
          scaleY: 0.4,
        });
      });

    const buttonTreeHiddenAnim = this.tweens
      .add({
        targets: [allBtn.buttonTreeRight, allBtn.buttonTreeLeft],

        duration: 250,
        scaleX: 0,
        scaleY: 0,
        onComplete() {
          buttonFourAnim.play();
        },
      })
      .pause();

    const buttonFourAnim = this.tweens
      .add({
        delay: 400,
        targets: [allBtn.buttonFourRight, allBtn.buttonFourLeft],
        duration: 300,
        scaleX: 0.8,
        scaleY: 0.8,
      })
      .pause();

    allBtn.buttonFourRight
      .on("pointerup", hoverButtonFourRight, this)
      .on(
        "pointerover",
        () => {
          this.tweens.add({
            targets: allBtn.buttonFourRight,
            duration: 300,
            scaleX: 0.75,
            scaleY: 0.75,
          });
        },
        this
      )
      .on("pointerout", () => {
        this.tweens.add({
          targets: allBtn.buttonFourRight,
          duration: 300,
          scaleX: 0.8,
          scaleY: 0.8,
        });
      });

    const buttonFourHiddenAnim = this.tweens
      .add({
        targets: [allBtn.buttonFourRight, allBtn.buttonFourLeft],
        duration: 250,
        scaleX: 0,
        scaleY: 0,
      })
      .pause();
    allBtn.buttonFourLeft
      .on("pointerup", hoverButtonFourLeft, this)
      .on(
        "pointerover",
        () => {
          this.tweens.add({
            targets: allBtn.buttonFourLeft,
            duration: 300,
            scaleX: 0.75,
            scaleY: 0.75,
          });
        },
        this
      )
      .on("pointerout", () => {
        this.tweens.add({
          targets: allBtn.buttonFourLeft,
          duration: 300,
          scaleX: 0.8,
          scaleY: 0.8,
        });
      });
    //////////--------END BUTTON

    //////////--------HAND-ERROR
    const handError = this.add.image(120, 800, "handError").setScale(0);
    const handErrorTweens = this.tweens
      .add({
        targets: handError,
        delay: 2000,
        duration: 1000,
        repeat: -1,
        yoyo: true,
        hold: 150,
        x: {
          getEnd: function () {
            const handDest = 500;
            return handDest;
          },
        },
      })
      .pause();

    const handErrorScaleTweens = this.tweens
      .add({
        targets: handError,
        delay: 2000,
        duration: 500,
        scaleX: 0.5,
        scaleY: 0.5,
      })
      .pause();

    const handErrorHiddenTweens = this.tweens
      .add({
        targets: handError,
        duration: 100,
        scaleX: 0,
        scaleY: 0,
        onComplete() {
          handErrorScaleTweens.pause();
        },
      })
      .pause();
    //////////--------END-HAND-ERROR

    //////////--------button-event
    //------>first-button
    function hoverButtonFirstRight() {
      allBtn.buttonFirstRight.destroy();
      allBtn.buttonFirstLeft.destroy();
      hiddenAnimationChoose.dress.play();
      buttonHiddenFirstAnim.play();
      handErrorHiddenTweens.play();
      womanPlayer.play("face-first-button-anims");

      return;
    }
    function hoverButtonFirstLeft() {
      allBtn.buttonFirstRight.destroy();
      allBtn.buttonFirstLeft.destroy();
      hiddenAnimationChoose.dress.play();
      buttonHiddenFirstAnim.play();
      handErrorHiddenTweens.play();
      womanPlayer.play("face-first-button-anims");

      return;
    }
    //------>two-button
    function hoverButtonTwoRight() {
      allBtn.buttonTwoLeft.destroy();
      allBtn.buttonTwoRight.destroy();
      hiddenAnimationChoose.bag.play();
      handErrorHiddenTweens.play();
      womanPlayer.play("face-first-button-anims");
      handErrorHiddenTweens.play();
      buttonTwoHiddenAnim.play();

      return;
    }
    function hoverButtonTwoLeft() {
      allBtn.buttonTwoLeft.destroy();
      allBtn.buttonTwoRight.destroy();
      hiddenAnimationChoose.bag.play();
      womanPlayer.play("face-first-button-anims");
      buttonTwoHiddenAnim.play();

      return;
    }
    //------>tree-button
    function hoverButtonTreeRight() {
      allBtn.buttonTreeLeft.destroy();
      allBtn.buttonTreeRight.destroy();
      hiddenAnimationChoose.acs.play();
      womanPlayer.play("face-first-button-anims");
      handErrorHiddenTweens.play();
      buttonTreeHiddenAnim.play();

      return;
    }
    function hoverButtonTreeLeft() {
      allBtn.buttonTreeLeft.destroy();
      allBtn.buttonTreeRight.destroy();
      hiddenAnimationChoose.acs.play();
      womanPlayer.play("face-tree-right-button-anims");
      handErrorHiddenTweens.play();
      buttonTreeHiddenAnim.play();

      return;
    }
    function hoverButtonFourRight() {
      allBtn.buttonFourLeft.destroy();
      allBtn.buttonFourRight.destroy();
      buttonFourHiddenAnim.play();
      hiddenAnimationChoose.place.play();
      handErrorHiddenTweens.play();
      backgroundPhoto.background2.setAlpha(1);
      manFinallSceneAnimation.play();
      return;
    }
    function hoverButtonFourLeft() {
      allBtn.buttonFourLeft.destroy();
      allBtn.buttonFourRight.destroy();
      buttonFourHiddenAnim.play();
      hiddenAnimationChoose.place.play();
      handErrorHiddenTweens.play();
      backgroundPhoto.background3.setAlpha(1);
      manFinallSceneAnimation.play();
      return;
    }
  }
}
const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 900,
};
const game = new Phaser.Game(config);
game.scene.add("myScene", MyScene, true);
