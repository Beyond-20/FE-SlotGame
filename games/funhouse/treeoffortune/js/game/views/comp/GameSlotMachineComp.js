import { SlotMachineComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotMachineComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";

export class GameSlotMachineComp extends SlotMachineComp {
    constructor(config) {
        super(config);
        this.coinParentArray = [];
        this.guideRect = this.elementsList["guideRect"];
        this.coinAnimContainer = this.elementsList["coinAnimContainer"];
        this.treeSpineAnim = this.elementsList["treeAnimContainer"];
        this.treeSpine = this.treeSpineAnim.elementsList["treeSpineAnim"]
        this.coinAnim = this.coinAnimContainer.elementsList["coinAnim"];
        this.gameSlotMachine = this.elementsList["slotMachine"];
        this.multiplierAnimContainer = this.elementsList["multiplierAnimContainer"];
        this.multiplier5x = this.multiplierAnimContainer.elementsList["multiplier5x"];
        this.multiplier8x = this.multiplierAnimContainer.elementsList["multiplier8x"];
        this.multiplier10x = this.multiplierAnimContainer.elementsList["multiplier10x"];
        this.infoText = this.elementsList["infoText"];
        this.InfoTextMsg = this.infoText.elementsList["InfoTextMsg"];
        this.highlight1 = this.elementsList["highlight1"];
        this.highlight2 = this.elementsList["highlight2"];
        this.highlight3 = this.elementsList["highlight3"];
        this.highlight4 = this.elementsList["highlight4"];
        this.highlight1.visible = false;
        this.highlight2.visible = false;
        this.highlight3.visible = false;
        this.highlight4.visible = false;
        this.prizeTable = this.elementsList["prizeTable"];
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.prizeTable.visible = false;
                this.treeSpine.scale.set(1);
            } else {
                this.prizeTable.visible = true;
                this.treeSpine.scale.set(0.5);
            }
        } else {
            this.prizeTable.visible = true;
            this.treeSpine.scale.set(0.5);
        }

        this.coinAnim.visible = false;
        this.multiplier5x.visible = false;
        this.multiplier8x.visible = false;
        this.multiplier10x.visible = false;

        CoreLib.EventHandler.addEventListener("SPIN_STARTED", this.onSpinStarted.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.REELSTRIP_SPIN_JERK, this.onSpinStopped.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_RESPIN_TRIGGER", this.onRespinTriggered.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.CLEAR_GAME_FOR_SPIN, this.clearGameWin.bind(this));
        CoreLib.EventHandler.addEventListener("START_COIN_ANIMATION", this.playCoinAnimation.bind(this));
        CoreLib.EventHandler.addEventListener("PLAY_WILD_MULTIPLIER_ANIMATION", this.playWildMultiplierAnimation.bind(this));
        // this.playWildMultiplierAnimation(5);
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.EXIT_SPINWIN_AMOUNT, this.clearGameWin.bind(this));
        CoreLib.EventHandler.addEventListener("PLAY_ANTICIPATION_ANIMATION_FOR_RESPIN", this.playAnticipationAnim.bind(this));
        CoreLib.EventHandler.addEventListener("STOP_ANTICIPATION_ANIMATION_FOR_RESPIN", this.stopAnticipationAnim.bind(this));
        CoreLib.EventHandler.addEventListener("CLEAR_TIMEOUT_AND_KILL_TWEENS", this.clearSetTimeouts.bind(this));

        this.isRespinTriggered = false;
        setInterval(() => { this.toggleInfoMessage() }, 5000);

        //coin Animation:
        this.coinIndex = 1;
        this.coin11 = CoreLib.UIUtil.getSpineAnim("coin");
        this.coin12 = CoreLib.UIUtil.getSpineAnim("coin");
        this.coin13 = CoreLib.UIUtil.getSpineAnim("coin");
        this.coin11.visible = this.coin12.visible = this.coin13.visible = false;
        this.coin21 = CoreLib.UIUtil.getSpineAnim("coin");
        this.coin22 = CoreLib.UIUtil.getSpineAnim("coin");
        this.coin23 = CoreLib.UIUtil.getSpineAnim("coin");
        this.coin21.visible = this.coin22.visible = this.coin23.visible = false;
        this.coin31 = CoreLib.UIUtil.getSpineAnim("coin");
        this.coin32 = CoreLib.UIUtil.getSpineAnim("coin");
        this.coin33 = CoreLib.UIUtil.getSpineAnim("coin");
        this.coin31.visible = this.coin32.visible = this.coin33.visible = false;

        //particle Animation:
        this.particle11 = CoreLib.UIUtil.getSpineAnim("particles");
        this.particle12 = CoreLib.UIUtil.getSpineAnim("particles");
        this.particle13 = CoreLib.UIUtil.getSpineAnim("particles");
        this.particle11.visible = this.particle12.visible = this.particle13.visible = false;
        this.particle21 = CoreLib.UIUtil.getSpineAnim("particles");
        this.particle22 = CoreLib.UIUtil.getSpineAnim("particles");
        this.particle23 = CoreLib.UIUtil.getSpineAnim("particles");
        this.particle21.visible = this.particle22.visible = this.particle23.visible = false;
        this.particle31 = CoreLib.UIUtil.getSpineAnim("particles");
        this.particle32 = CoreLib.UIUtil.getSpineAnim("particles");
        this.particle33 = CoreLib.UIUtil.getSpineAnim("particles");
        this.particle31.visible = this.particle32.visible = this.particle33.visible = false;
    }

    clearSetTimeouts() {
        clearTimeout(this.clearStartRespinTime, this.clearFeatureResTime, this.bigwintimeoutId, this.clearTreeAnimTime, this.clearWildAnim5Time, this.clearWildAnim8Time, this.clearWildAnim10Time)
        CoreLib.AnimationManager.killTweensOf(this.animateTween5Mul, this.animateTween8Mul, this.animateTween10Mul)
    }

    playAnticipationAnim(reelNo) {
        if (reelNo == 0) {
            this.highlight1.visible = true;
            this.highlight2.visible = true;
            this.highlight3.visible = false;
            this.highlight4.visible = false;
        }
        if (reelNo == 1) {
            this.highlight1.visible = false;
            this.highlight2.visible = true;
            this.highlight3.visible = true;
            this.highlight4.visible = false;
        }
        if (reelNo == 2) {
            this.highlight1.visible = false;
            this.highlight2.visible = false;
            this.highlight3.visible = true;
            this.highlight4.visible = true;
        }
    }

    stopAnticipationAnim() {
        this.highlight1.visible = false;
        this.highlight2.visible = false;
        this.highlight3.visible = false;
        this.highlight4.visible = false;
    }

    handleFeatureResponse() {
        let preReelView = slotModel.getSlotGameResult().preRespinReelView;
        let reelNo = -1;
        for (let i = 0; i < preReelView.length; i++) {
            for (let j = 0; j < preReelView[i].length; j++) {
                if (preReelView[i][j] === "BL") {
                    reelNo = i;
                }
            }
        }
        CoreLib.EventHandler.dispatchEvent("STOP_INDIVIDUAL_REELSPIN", reelNo);
    }

    onRespinTriggered() {
        this.isRespinTriggered = true;
        this.clearStartRespinTime = setTimeout(this.startRespinFeature.bind(this), 1000);
    }

    toggleInfoMessage() {
        let value = Math.floor(Math.random() * 3 + 1)
        this.InfoTextMsg.text = CoreLib.Util.getContent("advertiseText" + value);
    }

    playWildMultiplierAnimation(multiplier) {
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.DISABLE_ALL_BUTTONS);
        this.coinAnim.visible = true;
        CoreLib.EventHandler.dispatchEvent("PLAY_MULTPLIER_COINS_EXPLOSION_SOUND");
        this.coinAnim.playAnimation(false);
        this.coinAnim.onComplete = this.startWildAnim.bind(this, multiplier);
        // this.treeCoinAnim = CoreLib.UIUtil.getAnimatedSprite(this.coinAnim.animation);
        // this.addChild(this.treeCoinAnim);
        // this.treeCoinAnim.loop = true;
        // this.treeCoinAnim.play();
        // this.treeCoinAnim.onComplete = this.onLandingDone.bind(this);
    }
    startWildAnim(multiplier) {
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.DISABLE_ALL_BUTTONS);
        this.coinAnim.visible = false;
        CoreLib.EventHandler.dispatchEvent("PLAY_MULTPLIER_COINS_FALL_SOUND");
        if (multiplier === 5) {
            this.multiplier5x.visible = true;
            CoreLib.UIUtil.fadeInElement(this.multiplier5x, this.playwildAnimation5x.bind(this), 0, 0.25, 1);
        } else if (multiplier === 8) {
            this.multiplier8x.visible = true;
            CoreLib.UIUtil.fadeInElement(this.multiplier8x, this.playwildAnimation8x.bind(this), 0, 0.25, 1);
        } else {
            this.multiplier10x.visible = true;
            CoreLib.UIUtil.fadeInElement(this.multiplier10x, this.playwildAnimation10x.bind(this), 0, 0.25, 1);
        }
    }
    playwildAnimation5x() {
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.DISABLE_ALL_BUTTONS);
        this.animateTween5Mul = CoreLib.AnimationManager.animateTween(this.multiplier5x, 0.8, {
            y: -500, ease: Linear.easeNone, delay: 0.2, onComplete: () => {
                this.clearWildAnim5Time = setTimeout(() => {
                    CoreLib.UIUtil.fadeOutElement(this.multiplier5x, this.showBigWinAfterMultiplier.bind(this, 5), 0.25);
                }, 1000);

            }
        })
    }
    playwildAnimation8x() {
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.DISABLE_ALL_BUTTONS);
        this.animateTween8Mul = CoreLib.AnimationManager.animateTween(this.multiplier8x, 0.8, {
            y: -500, ease: Linear.easeNone, delay: 0.2, onComplete: () => {
                this.clearWildAnim8Time = setTimeout(() => {
                    CoreLib.UIUtil.fadeOutElement(this.multiplier8x, this.showBigWinAfterMultiplier.bind(this, 8), 0.25);
                }, 1000);
            }
        })
    }
    playwildAnimation10x() {
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.DISABLE_ALL_BUTTONS);
        this.animateTween10Mul = CoreLib.AnimationManager.animateTween(this.multiplier10x, 0.8, {
            y: -500, ease: Linear.easeNone, delay: 0.2, onComplete: () => {
                this.clearWildAnim10Time = setTimeout(() => {
                    CoreLib.UIUtil.fadeOutElement(this.multiplier10x, this.showBigWinAfterMultiplier.bind(this, 10), 0.25);
                }, 1000);
            }
        })
    }
    showBigWinAfterMultiplier(multiplier) {
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.DISABLE_ALL_BUTTONS);
        if (multiplier === 5) {
            this.multiplier5x.y = this.multiplier5x.y + 500;
            this.multiplier5x.alpha = 0;
        } else if (multiplier === 8) {
            this.multiplier8x.y = this.multiplier8x.y + 500;
            this.multiplier8x.alpha = 0;
        } else {
            this.multiplier10x.y = this.multiplier10x.y + 500;
            this.multiplier10x.alpha = 0;

        }
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.ENTER_SPINWIN_STATE);
    }
    startRespinFeature() {
        let preReelView = slotModel.getSlotGameResult().preRespinReelView;
        let reelNo = -1;
        for (let i = 0; i < preReelView.length; i++) {
            for (let j = 0; j < preReelView[i].length; j++) {
                if (preReelView[i][j] === "BL") {
                    reelNo = i;
                }
            }
        }
        CoreLib.EventHandler.dispatchEvent("START_INDIVIDUAL_REELSPIN", reelNo);
        CoreLib.EventHandler.dispatchEvent("PLAY_ANTICIPATION_ANIMATION_FOR_RESPIN", reelNo);
        CoreLib.EventHandler.dispatchEvent("PLAY_RESPIN_ANTICIPATION_RISE1_SOUND");
        this.clearFeatureResTime = setTimeout(this.handleFeatureResponse.bind(), 2000);
    }

    onSpinStopped() {
        CoreLib.EventHandler.dispatchEvent("STOP_REEL_SOUND");
    }

    onRetriggerElementsAppeared() {

    }

    onSpinStarted() {
        CoreLib.EventHandler.dispatchEvent("PLAY_REEL_SOUND");
    }

    showWinInWinAmountComp(toShowWin = false) {
        if (toShowWin) {
            this.slotMachine.enterSpinWinState();
        }
        let win = slotModel.getTotalWin();
        if (win > 0) {
            let level = slotModel.getWinLevel();
            if (level > 0) {
                // this.winAmountComp.showWin(win, slotModel.getWinLevel());
                if (this.configData.showSymbolBeforeBigWin) {
                    this.bigwintimeoutId = setTimeout(this.showBigWinNow.bind(this, level), 100);
                } else {
                    this.showBigWinNow();
                }
            } else {
                this.winAmountComp.showWin(win, slotModel.getWinLevel());
                /*this.winAmountComp.scale.set(0);
                CoreLib.AnimationManager.animateTween(this.winAmountComp, 0.5, {scaleX : 1, scaleY : 1, ease : Power2.easeOUt});*/
            }
        } else {
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.EXIT_SPINWIN_AMOUNT);

        }

    }
    playCoinAnimation(reelno) {
        let data = slotModel.getSlotGameResult();
        if (data.spinWin > 0) {

        } else {
            let coin1, coin2, coin3, particle1, particle2, particle3;
            if (this.coinIndex == 1) {
                coin1 = this.coin11;
                coin2 = this.coin12;
                coin3 = this.coin13;
                particle1 = this.particle11;
                particle2 = this.particle12;
                particle3 = this.particle13;
            } else if (this.coinIndex == 2) {
                coin1 = this.coin21;
                coin2 = this.coin22;
                coin3 = this.coin23;
                particle1 = this.particle21;
                particle2 = this.particle22;
                particle3 = this.particle23;
            } else {
                coin1 = this.coin31;
                coin2 = this.coin32;
                coin3 = this.coin33;
                particle1 = this.particle31;
                particle2 = this.particle32;
                particle3 = this.particle33;
            }
            let reel = reelno - 1;
            let value = this.gameSlotMachine.getSymbolPosition(reel, 1);
            coin1.visible = coin2.visible = coin3.visible = true;
            CoreLib.EventHandler.dispatchEvent("PLAY_WILD_LANDING_COIN_START_SOUND");
            coin1.playAnimation("coin_anim1", true);
            coin2.playAnimation("coin_anim1", true);
            coin3.playAnimation("coin_anim1", true);
            this.addChild(coin1, coin2, coin3);
            coin1.scale.set(0.5, 0.5);
            coin2.scale.set(0.5, 0.5);
            coin3.scale.set(0.5, 0.5);
            coin1.x = value.x + this.gameSlotMachine.x + this.gameSlotMachine.symbolsContainer.x - 100;
            coin1.y = value.y + this.gameSlotMachine.y + this.gameSlotMachine.symbolsContainer.y + this.gameSlotMachine.configData.data.symbolHeight * 0.6;
            coin2.x = value.x + this.gameSlotMachine.x + this.gameSlotMachine.symbolsContainer.x;
            coin2.y = value.y + this.gameSlotMachine.y + this.gameSlotMachine.symbolsContainer.y + this.gameSlotMachine.configData.data.symbolHeight * 0.6;
            coin3.x = value.x + this.gameSlotMachine.x + this.gameSlotMachine.symbolsContainer.x + 100;
            coin3.y = value.y + this.gameSlotMachine.y + this.gameSlotMachine.symbolsContainer.y + this.gameSlotMachine.configData.data.symbolHeight * 0.6;
            this.killCoin1Anim = CoreLib.AnimationManager.animateTween(coin1, 0.8, {
                y: this.treeSpineAnim.y - 100, x: this.treeSpineAnim.x - 100, ease: Linear.easeNone, onComplete: () => {
                    this.playTreeAnimation();
                    CoreLib.EventHandler.dispatchEvent("PLAY_WILD_LANDING_COIN_END_SOUND");
                    coin1.stopAnimation();
                    coin1.visible = false;
                    particle1.visible = true;
                    particle1.playAnimation("animation", false);
                    this.addChild(particle1);
                    particle1.x = this.treeSpineAnim.x - 100;
                    particle1.y = this.treeSpineAnim.y - 100;
                    particle1.onComplete = () => {
                        particle1.stopAnimation();
                        particle1.visible = false;
                    };
                }
            })
            this.killCoin2Anim = CoreLib.AnimationManager.animateTween(coin2, 0.8, {
                y: this.treeSpineAnim.y - 200, x: this.treeSpineAnim.x, ease: Linear.easeNone, onComplete: () => {
                    CoreLib.EventHandler.dispatchEvent("PLAY_WILD_LANDING_COIN_END_SOUND");
                    coin2.stopAnimation();
                    coin2.visible = false;
                    particle2.visible = true;
                    particle2.playAnimation("animation", false);
                    this.addChild(particle2);
                    particle2.x = this.treeSpineAnim.x;
                    particle2.y = this.treeSpineAnim.y - 200;
                    particle2.onComplete = () => {
                        particle2.stopAnimation();
                        particle2.visible = false;
                    };
                }
            })
            this.killCoin3Anim = CoreLib.AnimationManager.animateTween(coin3, 0.8, {
                y: this.treeSpineAnim.y - 100, x: this.treeSpineAnim.x + 100, ease: Linear.easeNone, onComplete: () => {
                    CoreLib.EventHandler.dispatchEvent("PLAY_WILD_LANDING_COIN_END_SOUND");
                    coin3.stopAnimation();
                    coin3.visible = false;
                    particle3.visible = true;
                    particle3.playAnimation("animation", false);
                    this.addChild(particle3);
                    particle3.x = this.treeSpineAnim.x + 100;
                    particle3.y = this.treeSpineAnim.y - 100;
                    particle3.onComplete = () => {
                        particle3.stopAnimation();
                        particle3.visible = false;
                    };
                }
            });
            if (this.coinIndex == 3) {
                this.coinIndex = 1;
            } else {
                this.coinIndex++;
            }
        }
    }

    playTreeAnimation() {
        this.treeSpine.playAnimation("tree_top_action", false);
        this.clearTreeAnimTime = setTimeout(() => {
            this.treeSpine.playAnimation("tree_top_idle", true);
        }, 1500);
    }
    clearSpinAllWin() {
        this.slotMachine.clearSpinAllWin();
    }

    clearGameWin() {
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.CLEAR_SLOT_BIG_WIN);
        this.winAmountComp.clearWin();
    }
    resizeViewComponents() {
        super.resizeViewComponents();
        CoreLib.UIUtil.adjustWidthHeightForMobile(this.guideRect);
        CoreLib.UIUtil.positionObjectForDevice(this.guideRect);

        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.prizeTable.visible = false;
                this.treeSpine.scale.set(1);
            } else {
                this.prizeTable.visible = true;
                this.treeSpine.scale.set(0.5);
            }
        } else {
            this.prizeTable.visible = true;
            this.treeSpine.scale.set(0.5);
        }
    }
};
