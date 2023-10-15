import { LibContainer } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibContainer";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";

export class SlotWinAmountSpineCompV2 extends LibContainer {
    constructor(config) {
        super(config);
        this.guideRect = this.elementsList["guideRect"];
        this.guideRect.renderable = false;
        this.winText = this.elementsList["winText"];
        this.bigAnim = this.elementsList["bigAnim"];
        this.hugeAnim = this.elementsList["hugeAnim"];

        if(this.bigAnim) {
            this.bigAnim.visible = false;
            CoreLib.UIUtil.setPosition(this.bigAnim, this.guideRect.width * 0.5, this.guideRect.height * CoreLib.Util.getDefaultValue(this.bigAnim.configData.yPaddingPerc, 0.25));
            this.bigAnim.addEventListener("complete", this.onSpineAnimComplete.bind(this));
        }
        if (this.hugeAnim) {
            this.hugeAnim.visible = false;
            CoreLib.UIUtil.setPosition(this.hugeAnim, this.guideRect.width * 0.5, this.guideRect.height * CoreLib.Util.getDefaultValue(this.hugeAnim.configData.yPaddingPerc, 0.25));
            this.hugeAnim.addEventListener("complete", this.onSpineAnimComplete.bind(this));
        }
        //this.showWin(200, 0)
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.COIN_CASH_MODE_CHANGED, this.updateForCoinCash.bind(this));
    }

    updateForCoinCash() {
        if ( this.totalWin > 0 ) {
            this.winText.text = CoreLib.WrapperService.formatWinCurrency(this.totalWin);
        }
    }

    showWin (val, level = 0, callback = null) {
        let obj;
        this.winLevel = level;
        this.callback = callback;
        let delay = 2000;
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
            obj = this.configData.textData.hugeWin;
            this.hugeAnim.scale.x = this.hugeAnim.scale.y = CoreLib.Util.getDefaultValue(this.hugeAnim.configData.scale, 1);
            this.hugeAnim.visible = true;
            this.hugeAnim.playAnimation(this.hugeAnim.configData.defaultState, this.hugeAnim.configData.loop != undefined ? this.hugeAnim.configData.loop : true);
            delay = 4000;
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
            this.startScore = {score :0};
            this.scoreTween = CoreLib.AnimationManager.animateTween(this.startScore, this.duration, {score:this.totalWin,  ease:Linear.easeNone,  onUpdate :this.showValue.bind(this), onComplete : this.onScoreDone.bind(this)});
            setTimeout(this.sendCountUpEarlyNotification.bind(this), this.duration * 900)
        }
        if (!this.configData.dontDoVibration) {
            CoreLib.Util.vibrateForBigWins();
        }

        //this.winText.text = CoreLib.WrapperService.formatWinCurrency(val);
    }

    onSpineAnimComplete (data) {
        if (data.name == "idle") {
            return;
        }
        if (this.configData.loopAfterEnd) {
            if (this.winLevel == 1) {
                this.bigAnim.scale.x = this.bigAnim.scale.y = CoreLib.Util.getDefaultValue(this.bigAnim.configData.scale, 1);
                CoreLib.AnimationManager.animateTween(this.bigAnim, 0.5, {repeat : -1, yoyo : true, scaleX : this.bigAnim.scale.x * 1.1, scaleY : this.bigAnim.scale.x * 1.1})
            } else if (this.winLevel == 2) {
                this.hugeAnim.scale.x = this.hugeAnim.scale.y = CoreLib.Util.getDefaultValue(this.hugeAnim.configData.scale, 1);
                CoreLib.AnimationManager.animateTween(this.hugeAnim, 0.5, {repeat : -1, yoyo : true, scaleX : this.hugeAnim.scale.x * 1.1, scaleY : this.hugeAnim.scale.x * 1.1})
            }
        } else {
            if (this.winLevel == 1) {
                this.bigAnim.scale.x = this.bigAnim.scale.y = CoreLib.Util.getDefaultValue(this.bigAnim.configData.scale, 1);
                if (this.bigAnim.configData.idleState) {
                    this.bigAnim.playAnimation(this.bigAnim.configData.idleState, true);
                }
            } else if (this.winLevel == 2) {
                this.hugeAnim.scale.x = this.hugeAnim.scale.y = CoreLib.Util.getDefaultValue(this.hugeAnim.configData.scale, 1);
                if (this.hugeAnim.configData.idleState) {
                    this.hugeAnim.playAnimation(this.hugeAnim.configData.idleState, true);
                }
            }
        }
    }


    showValue () {
        this.winText.text = CoreLib.WrapperService.formatWinCurrency(this.startScore.score);

    }
    sendCountUpEarlyNotification () {
        this.emit("SCORE_COUNT_UP_DONE");
    }
    onScoreDone () {
        CoreLib.EventHandler.dispatchEvent("PLAY_BIG_WIN_COUNTUP_END_SOUND");
        this.winText.text = CoreLib.WrapperService.formatWinCurrency(this.totalWin);
        CoreLib.AnimationManager.animateTween(this.winText, 0.5, {delay : 0.5, onComplete : this.sendDoneNotification.bind(this)});
    }
   
    sendDoneNotification (callback) {
        if (callback) {
            callback();
        } else {
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.EXIT_SPINWIN_AMOUNT);
        }
        if (!this.configData.dontDoVibration) {
            CoreLib.Util.stopVibration();
        }

    }

    clearWin () {
        clearTimeout(this.timerId);
        this.winText.cacheAsBitmap = false;
        this.winText.text = "";
        if (this.winLevel > 0) {
            this.cleanUpAllBigWins();
        }
        
        CoreLib.EventHandler.dispatchEvent("STOP_BIG_WIN_COUNTUP");
    }
    cleanUpAllBigWins () {
        clearTimeout(this.timerId);
        
        if (this.bigAnim) {
            this.bigAnim.visible = false;
            this.bigAnim.stopAnimation(0);
            this.bigAnim.scale.x = this.bigAnim.scale.y = CoreLib.Util.getDefaultValue(this.bigAnim.configData.scale, 1);
            CoreLib.AnimationManager.killTweensOf(this.bigAnim);
        }
        if (this.hugeAnim) {
            this.hugeAnim.visible = false;
            this.hugeAnim.stopAnimation();
            this.hugeAnim.scale.x = this.hugeAnim.scale.y = CoreLib.Util.getDefaultValue(this.hugeAnim.configData.scale, 1);
            CoreLib.AnimationManager.killTweensOf(this.hugeAnim);
        }
    }

}
