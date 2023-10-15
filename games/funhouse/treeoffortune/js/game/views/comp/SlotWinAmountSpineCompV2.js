import { LibContainer } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibContainer"
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";

export class SlotWinAmountSpineCompV2 extends LibContainer {
    constructor(config) {
        super(config);
        this.guideRect = this.elementsList["guideRect"];
        this.guideRect.renderable = false;
        this.bigwinbg = this.elementsList["bigwinbg"];
        this.winText = this.elementsList["winText"];
        this.bigAnim = this.elementsList["bigAnim"];
        this.megaAnim = this.elementsList["megaAnim"];
        this.superbAnim = this.elementsList["superbAnim"];
        this.unbelievableWinAnim = this.elementsList["unbelievableWinAnim"];
        this.glowWinNumbersAnim = this.elementsList["glowWinNumbersAnim"];

        if (this.bigAnim) {
            this.bigAnim.visible = false;
            CoreLib.UIUtil.setPosition(this.bigAnim, this.guideRect.width * 0.5, this.guideRect.height * CoreLib.Util.getDefaultValue(this.bigAnim.configData.yPaddingPerc, 0.25));
            this.bigAnim.addEventListener("complete", this.onSpineAnimComplete.bind(this));
        }
        if (this.megaAnim) {
            this.megaAnim.visible = false;
            CoreLib.UIUtil.setPosition(this.megaAnim, this.guideRect.width * 0.5, this.guideRect.height * CoreLib.Util.getDefaultValue(this.megaAnim.configData.yPaddingPerc, 0.25));
            this.megaAnim.addEventListener("complete", this.onSpineAnimComplete.bind(this));
        }
        if (this.superbAnim) {
            this.superbAnim.visible = false;
            CoreLib.UIUtil.setPosition(this.superbAnim, this.guideRect.width * 0.5, this.guideRect.height * CoreLib.Util.getDefaultValue(this.superbAnim.configData.yPaddingPerc, 0.25));
            this.superbAnim.addEventListener("complete", this.onSpineAnimComplete.bind(this));
        }
        if (this.unbelievableWinAnim) {
            this.unbelievableWinAnim.visible = false;
            CoreLib.UIUtil.setPosition(this.unbelievableWinAnim, this.guideRect.width * 0.5, this.guideRect.height * CoreLib.Util.getDefaultValue(this.unbelievableWinAnim.configData.yPaddingPerc, 0.25));
            this.unbelievableWinAnim.addEventListener("complete", this.onSpineAnimComplete.bind(this));
        }
        if (this.glowWinNumbersAnim) {
            this.glowWinNumbersAnim.visible = false;
            CoreLib.UIUtil.setPosition(this.glowWinNumbersAnim, this.guideRect.width * 0.5, this.guideRect.height * CoreLib.Util.getDefaultValue(this.glowWinNumbersAnim.configData.yPaddingPerc, 0.25))
            this.glowWinNumbersAnim.addEventListener("complete", this.onGlowWinSpineAnimComplete.bind(this));
        }
        if (this.bigwinbg) {
            this.bigwinbg.anchor.set(0.5, 0);
            CoreLib.UIUtil.setPositionX(this.bigwinbg, this.guideRect.width * 0.5 + CoreLib.Util.getDefaultValue(this.bigwinbg.configData.xPadding, 0));
        }
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.COIN_CASH_MODE_CHANGED, this.updateForCoinCash.bind(this));
        //this.showWin(200, 0)
    }

    updateForCoinCash() {
        if (this.finalWinAmount > 0) {
            this.winText.text = CoreLib.WrapperService.formatWinCurrency(this.finalWinAmount);
        }
    }

    showWin(val, level = 0, callback = null) {
        let obj;
        this.winLevel = level;
        this.callback = callback;
        this.finalWinAmount = val;
        let delay = 2000;
        this.glowWinNumbersAnim.visible = true;
        this.glowWinNumbersAnim.scale.x = this.glowWinNumbersAnim.scale.y = CoreLib.Util.getDefaultValue(this.glowWinNumbersAnim.configData.scale, 1);
        this.glowWinNumbersAnim.playAnimation(this.glowWinNumbersAnim.configData.defaultState, this.glowWinNumbersAnim.configData.loop != undefined ? this.glowWinNumbersAnim.configData.loop : true);
        if (level == 1) {
            obj = this.configData.textData.bigWin;
            this.bigAnim.scale.x = this.bigAnim.scale.y = CoreLib.Util.getDefaultValue(this.bigAnim.configData.scale, 1);
            this.bigAnim.visible = true;
            if (this.bigAnim.configData.start != undefined) {
                this.bigAnim.playAnimation(this.bigAnim.configData.start, false);
            } else {
                this.bigAnim.playAnimation(this.bigAnim.configData.defaultState, this.bigAnim.configData.loop != undefined ? this.bigAnim.configData.loop : true);
            }

            delay = 3000;
        } else if (level == 2) {
            obj = this.configData.textData.megaWin;
            this.megaAnim.scale.x = this.megaAnim.scale.y = CoreLib.Util.getDefaultValue(this.megaAnim.configData.scale, 1);
            this.megaAnim.visible = true;
            this.megaAnim.playAnimation(this.megaAnim.configData.defaultState, this.megaAnim.configData.loop != undefined ? this.megaAnim.configData.loop : true);
            delay = 4000;
        } else if (level == 3) {
            obj = this.configData.textData.superbWin;
            this.superbAnim.scale.x = this.superbAnim.scale.y = CoreLib.Util.getDefaultValue(this.superbAnim.configData.scale, 1);
            this.superbAnim.visible = true;
            this.superbAnim.playAnimation(this.superbAnim.configData.defaultState, this.superbAnim.configData.loop != undefined ? this.superbAnim.configData.loop : true);
            delay = 5000;
        } else if (level == 4) {
            obj = this.configData.textData.unbelievableWin;
            this.unbelievableWinAnim.scale.x = this.unbelievableWinAnim.scale.y = CoreLib.Util.getDefaultValue(this.unbelievableWinAnim.configData.scale, 1);
            this.unbelievableWinAnim.visible = true;
            this.unbelievableWinAnim.playAnimation(this.unbelievableWinAnim.configData.defaultState, this.unbelievableWinAnim.configData.loop != undefined ? this.unbelievableWinAnim.configData.loop : true);
            delay = 7000;
        } else {
            obj = this.configData.textData.win;
            this.addChild(this.winText)
        }
        if (obj.x != undefined) {
            CoreLib.UIUtil.setPositionY(this.winText, obj.x);
        }
        if (obj.y != undefined) {
            CoreLib.UIUtil.setPositionY(this.winText, obj.y);
        }
        if (this.winText.configData.dynamicFont) {
            CoreLib.UIUtil.updateTextSize(this.winText, obj.fontSize);
        } else {
            CoreLib.UIUtil.updateBitmapTextSize(this.winText, obj.fontSize);
        }


        this.totalWin = val;
        this.duration = CoreLib.Util.getAnimationDuration(val);
        if (CoreLib.Model.GameConfig.dontCountUp) {
            this.winText.text = CoreLib.WrapperService.formatWinCurrency(val);
            setTimeout(this.onScoreDone.bind(this), this.duration);
        } else {
            this.startScore = { score: 0 };
            this.scoreTween = CoreLib.AnimationManager.animateTween(this.startScore, this.duration, { score: this.totalWin, ease: Linear.easeNone, onUpdate: this.showValue.bind(this), onComplete: this.onScoreDone.bind(this) });
            setTimeout(this.sendCountUpEarlyNotification.bind(this), this.duration * 900)
        }
        if (!this.configData.dontDoVibration) {
            CoreLib.Util.vibrateForBigWins();
        }

        //this.winText.text = CoreLib.WrapperService.formatWinCurrency(val);
    }

    onGlowWinSpineAnimComplete(data) {
        if (data.name == "idle") {
            return;
        }
        if (this.configData.loopAfterEnd) {
            this.glowWinNumbersAnim.playAnimation(this.glowWinNumbersAnim.configData.idleState, true);
        } else {
            this.glowWinNumbersAnim.playAnimation(this.glowWinNumbersAnim.configData.idleState, true);
        }
    }

    onSpineAnimComplete(data) {
        if (data.name == "idle") {
            return;
        }
        if (this.configData.loopAfterEnd) {
            if (this.winLevel == 1) {
                this.bigAnim.scale.x = this.bigAnim.scale.y = CoreLib.Util.getDefaultValue(this.bigAnim.configData.scale, 1);
                CoreLib.AnimationManager.animateTween(this.bigAnim, 0.5, { repeat: -1, yoyo: true, scaleX: this.bigAnim.scale.x * 1.1, scaleY: this.bigAnim.scale.x * 1.1 })
            } else if (this.winLevel == 2) {
                this.megaAnim.scale.x = this.megaAnim.scale.y = CoreLib.Util.getDefaultValue(this.megaAnim.configData.scale, 1);
                CoreLib.AnimationManager.animateTween(this.megaAnim, 0.5, { repeat: -1, yoyo: true, scaleX: this.megaAnim.scale.x * 1.1, scaleY: this.megaAnim.scale.x * 1.1 })
            } else if (this.winLevel == 3) {
                this.superbAnim.scale.x = this.superbAnim.scale.y = CoreLib.Util.getDefaultValue(this.superbAnim.configData.scale, 1);
                CoreLib.AnimationManager.animateTween(this.superbAnim, 0.5, { repeat: -1, yoyo: true, scaleX: this.superbAnim.scale.x * 1.1, scaleY: this.superbAnim.scale.x * 1.1 })
            } else if (this.winLevel == 4) {
                this.unbelievableWinAnim.scale.x = this.unbelievableWinAnim.scale.y = CoreLib.Util.getDefaultValue(this.unbelievableWinAnim.configData.scale, 1);
                CoreLib.AnimationManager.animateTween(this.unbelievableWinAnim, 0.5, { repeat: -1, yoyo: true, scaleX: this.unbelievableWinAnim.scale.x * 1.1, scaleY: this.unbelievableWinAnim.scale.x * 1.1 })
            }
        } else {
            if (this.winLevel == 1) {
                this.bigAnim.scale.x = this.bigAnim.scale.y = CoreLib.Util.getDefaultValue(this.bigAnim.configData.scale, 1);
                if (this.bigAnim.configData.idleState) {
                    this.bigAnim.playAnimation(this.bigAnim.configData.idleState, true);
                }
            } else if (this.winLevel == 2) {
                this.megaAnim.scale.x = this.megaAnim.scale.y = CoreLib.Util.getDefaultValue(this.megaAnim.configData.scale, 1);
                if (this.megaAnim.configData.idleState) {
                    this.megaAnim.playAnimation(this.megaAnim.configData.idleState, true);
                }
            } else if (this.winLevel == 3) {
                this.superbAnim.scale.x = this.superbAnim.scale.y = CoreLib.Util.getDefaultValue(this.superbAnim.configData.scale, 1);
                if (this.superbAnim.configData.idleState) {
                    this.superbAnim.playAnimation(this.superbAnim.configData.idleState, true);
                }
            } else if (this.winLevel == 4) {
                this.unbelievableWinAnim.scale.x = this.unbelievableWinAnim.scale.y = CoreLib.Util.getDefaultValue(this.unbelievableWinAnim.configData.scale, 1);
                if (this.unbelievableWinAnim.configData.idleState) {
                    this.unbelievableWinAnim.playAnimation(this.unbelievableWinAnim.configData.idleState, true);
                }
            }
        }
    }


    showValue() {
        this.winText.text = CoreLib.WrapperService.formatWinCurrency(this.startScore.score);

    }
    sendCountUpEarlyNotification() {
        this.emit("SCORE_COUNT_UP_DONE");
    }
    onScoreDone() {
        CoreLib.EventHandler.dispatchEvent("PLAY_BIG_WIN_COUNTUP_END_SOUND");
        this.winText.text = CoreLib.WrapperService.formatWinCurrency(this.totalWin);
        CoreLib.AnimationManager.animateTween(this.winText, 0.5, { delay: 0.5, scaleX: CoreLib.Util.getDefaultValue(this.winText.configData.zoomScale, 1.32), scaleY: CoreLib.Util.getDefaultValue(this.winText.configData.zoomScale, 1.32), repeat: 5, yoyo: true, onComplete: this.winZoomInOutComplete.bind(this) });
    }
    winZoomInOutComplete() {
        this.winText.scale.x = this.winText.scale.y = 1;
        this.timerId = setTimeout(this.sendDoneNotification.bind(this, this.callback), 1000);
    }
    sendDoneNotification(callback) {
        if (callback) {
            callback();
        } else {
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.EXIT_SPINWIN_AMOUNT);
        }
        if (!this.configData.dontDoVibration) {
            CoreLib.Util.stopVibration();
        }

    }

    clearWin() {
        clearTimeout(this.timerId);
        this.winText.cacheAsBitmap = false;
        this.winText.text = "";
        if (this.winLevel > 0) {
            this.cleanUpAllBigWins();
        }
        if (this.bigwinbg) {
            this.bigwinbg.visible = false;
        }
        CoreLib.EventHandler.dispatchEvent("STOP_BIG_WIN_COUNTUP");
    }
    cleanUpAllBigWins() {
        clearTimeout(this.timerId);
        this.glowWinNumbersAnim.visible = false;
        this.glowWinNumbersAnim.stopAnimation(0);
        this.glowWinNumbersAnim.scale.x = this.glowWinNumbersAnim.scale.y = CoreLib.Util.getDefaultValue(this.glowWinNumbersAnim.configData.scale, 1);
        if (this.bigAnim) {
            this.bigAnim.visible = false;
            this.bigAnim.stopAnimation(0);
            this.bigAnim.scale.x = this.bigAnim.scale.y = CoreLib.Util.getDefaultValue(this.bigAnim.configData.scale, 1);
            CoreLib.AnimationManager.killTweensOf(this.bigAnim);
        }
        if (this.megaAnim) {
            this.megaAnim.visible = false;
            this.megaAnim.stopAnimation();
            this.megaAnim.scale.x = this.megaAnim.scale.y = CoreLib.Util.getDefaultValue(this.megaAnim.configData.scale, 1);
            CoreLib.AnimationManager.killTweensOf(this.megaAnim);
        }
        if (this.superbAnim) {
            this.superbAnim.visible = false;
            this.superbAnim.stopAnimation();
            this.superbAnim.scale.x = this.superbAnim.scale.y = CoreLib.Util.getDefaultValue(this.superbAnim.configData.scale, 1);
            CoreLib.AnimationManager.killTweensOf(this.superbAnim);
        }
        if (this.unbelievableWinAnim) {
            this.unbelievableWinAnim.visible = false;
            this.unbelievableWinAnim.stopAnimation();
            this.unbelievableWinAnim.scale.x = this.unbelievableWinAnim.scale.y = CoreLib.Util.getDefaultValue(this.unbelievableWinAnim.configData.scale, 1);
            CoreLib.AnimationManager.killTweensOf(this.unbelievableWinAnim);
        }

    }

}
