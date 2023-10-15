import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel"
import { SlotWinAmountSpineCompV2 } from "./SlotWinAmountSpineCompV2";

export class SlotWinAmountSequentialSpineCompV2 extends SlotWinAmountSpineCompV2 {
    updateForCoinCash() {
        if (this.totalWin > 0) {
            this.winText.text = CoreLib.WrapperService.formatWinCurrency(this.totalWin);
        }
        if (this.bigwinbg.visible == false) {
            this.winText.text = "";
        }
    }

    showWin(val, level = 0, callback = null) {
        CoreLib.Model.GameConfig.bigWinMultipliersSequence = [];
        CoreLib.Model.GameConfig.bigWinMultipliersSequence.push(0);
        let index = Math.round((val * 0.80) / level);
        for (let k = 1; k < level; k++) {
            CoreLib.Model.GameConfig.bigWinMultipliersSequence.push(k * index);
        }
        this.winLevel = level;
        this.callback = callback;
        let delay = 2000;
        const obj = this.configData.textData.bigWin;
        this.bigAnim.scale.x = this.bigAnim.scale.y = CoreLib.Util.getDefaultValue(this.bigAnim.configData.scale, 1);
        this.bigAnim.visible = false;
        this.glowWinNumbersAnim.scale.x = this.glowWinNumbersAnim.scale.y = CoreLib.Util.getDefaultValue(this.glowWinNumbersAnim.configData.scale, 1);
        this.glowWinNumbersAnim.visible = false;
        if (this.bigAnim.configData.start != undefined) {
            this.bigAnim.playAnimation(this.bigAnim.configData.start, false);
            this.glowWinNumbersAnim.playAnimation(this.glowWinNumbersAnim.configData.start, false);
        } else {
            this.bigAnim.playAnimation(this.bigAnim.configData.defaultState, this.bigAnim.configData.loop != undefined ? this.bigAnim.configData.loop : true);
            this.glowWinNumbersAnim.playAnimation(this.glowWinNumbersAnim.configData.defaultState, this.glowWinNumbersAnim.configData.loop != undefined ? this.glowWinNumbersAnim.configData.loop : true);
        }
        delay = 3000;
        if (this.bigwinbg) {
            this.bigwinbg.visible = true;
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

        this.lastLevel = 0;
        this.totalWin = val;
        this.duration = CoreLib.Util.getAnimationDuration(val) * 2;
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
        this.lastAnimMovie = this.bigAnim;
    }
    showValue() {
        const level = slotModel.getCurrentWinLevel(this.startScore.score);
        CoreLib.EventHandler.dispatchEvent("BIG_WIN_LEVEL_NOTIFICATION", level);
        if (level > this.lastLevel) {
            this.bigAnim.visible = true;
            this.glowWinNumbersAnim.visible = true;
            this.glowWinNumbersAnim.scale.x = this.glowWinNumbersAnim.scale.y = CoreLib.Util.getDefaultValue(this.glowWinNumbersAnim.configData.scale, 1);
            this.glowWinNumbersAnim.playAnimation(this.glowWinNumbersAnim.configData.start, this.glowWinNumbersAnim.configData.loop != undefined ? this.glowWinNumbersAnim.configData.loop : true, 0, 600);
            let obj;
            if (level == 1) {
                obj = this.configData.textData.bigWin;
                this.bigAnim.scale.x = this.bigAnim.scale.y = CoreLib.Util.getDefaultValue(this.bigAnim.configData.scale, 1);
                this.bigAnim.visible = true;
                if (this.bigAnim.configData.start != undefined) {
                    this.bigAnim.playAnimation(this.bigAnim.configData.start, false);
                } else {
                    this.bigAnim.playAnimation(this.bigAnim.configData.defaultState, this.bigAnim.configData.loop != undefined ? this.bigAnim.configData.loop : true);
                }
                CoreLib.EventHandler.dispatchEvent("PLAY_BIGWIN_SPECIAL_SOUND");
            } else
                if (level == 2) {
                    this.bigAnim.playAnimation(this.bigAnim.configData.end, false);
                    obj = this.configData.textData.megaWin;
                    this.megaAnim.scale.x = this.megaAnim.scale.y = CoreLib.Util.getDefaultValue(this.megaAnim.configData.scale, 1);
                    this.megaAnim.visible = true;
                    this.megaAnim.playAnimation(this.megaAnim.configData.start, this.megaAnim.configData.loop != undefined ? this.megaAnim.configData.loop : true, 0, 600);
                } else if (level == 3) {
                    this.megaAnim.playAnimation(this.megaAnim.configData.end, false);
                    obj = this.configData.textData.superbWin;
                    this.superbAnim.scale.x = this.superbAnim.scale.y = CoreLib.Util.getDefaultValue(this.superbAnim.configData.scale, 1);
                    this.superbAnim.visible = true;
                    this.superbAnim.playAnimation(this.superbAnim.configData.start, this.superbAnim.configData.loop != undefined ? this.superbAnim.configData.loop : true, 0, 600);
                    CoreLib.EventHandler.dispatchEvent("PLAY_SUPERB_SPECIAL_SOUND");
                } else if (level == 4) {
                    this.superbAnim.playAnimation(this.superbAnim.configData.end);
                    obj = this.configData.textData.unbelievableWin;
                    this.unbelievableWinAnim.scale.x = this.unbelievableWinAnim.scale.y = CoreLib.Util.getDefaultValue(this.unbelievableWinAnim.configData.scale, 1);
                    this.unbelievableWinAnim.visible = true;
                    this.unbelievableWinAnim.playAnimation(this.unbelievableWinAnim.configData.start, this.unbelievableWinAnim.configData.loop != undefined ? this.unbelievableWinAnim.configData.loop : true, 0, 600);
                }
        }

        this.winText.text = CoreLib.WrapperService.formatWinCurrency(this.startScore.score);
        this.winValue = this.startScore.score;
        this.lastLevel = level;
    }

    onSpineAnimComplete(data) {
        if (data.name.indexOf("start") > -1) {
            this.glowWinNumbersAnim.playAnimation(this.glowWinNumbersAnim.configData.idleState, true);
            if (this.lastLevel == 1) {
                this.bigAnim.scale.x = this.bigAnim.scale.y = CoreLib.Util.getDefaultValue(this.bigAnim.configData.scale, 1);
                if (this.bigAnim.configData.idleState) {
                    this.bigAnim.playAnimation(this.bigAnim.configData.idleState, true);
                }
            } else if (this.lastLevel == 2) {
                this.megaAnim.scale.x = this.megaAnim.scale.y = CoreLib.Util.getDefaultValue(this.megaAnim.configData.scale, 1);
                if (this.megaAnim.configData.idleState) {
                    this.megaAnim.playAnimation(this.megaAnim.configData.idleState, true);
                }
            } else if (this.lastLevel == 3) {
                this.superbAnim.scale.x = this.superbAnim.scale.y = CoreLib.Util.getDefaultValue(this.superbAnim.configData.scale, 1);
                if (this.superbAnim.configData.idleState) {
                    this.superbAnim.playAnimation(this.superbAnim.configData.idleState, true);
                }
            } else if (this.lastLevel == 4) {
                this.unbelievableWinAnim.scale.x = this.unbelievableWinAnim.scale.y = CoreLib.Util.getDefaultValue(this.unbelievableWinAnim.configData.scale, 1);
                if (this.unbelievableWinAnim.configData.idleState) {
                    this.unbelievableWinAnim.playAnimation(this.unbelievableWinAnim.configData.idleState, true);
                }
            }
        }


    }

}