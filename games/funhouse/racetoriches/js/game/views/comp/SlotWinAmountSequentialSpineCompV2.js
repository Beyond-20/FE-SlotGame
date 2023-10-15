
import { SlotWinAmountSpineCompV2 } from './SlotWinAmountSpineCompv2'
import { CoreLib } from '../../../../../../../../slot_core/corelib/core/CoreLib';
import { slotModel } from '../../../../../../../../slot_core/corelib/models/SlotModel';

export class SlotWinAmountSequentialSpineCompV2 extends SlotWinAmountSpineCompV2 {
    updateForCoinCash() {
        if (this.totalWin > 0) {
            this.winText.text = CoreLib.WrapperService.formatWinCurrency(this.totalWin);
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
        if (this.bigAnim.configData.start != undefined) {
            this.bigAnim.playAnimation(this.bigAnim.configData.start, false);
        } else {
            this.bigAnim.playAnimation(this.bigAnim.configData.defaultState, this.bigAnim.configData.loop != undefined ? this.bigAnim.configData.loop : true);
        }
        delay = 3000;
        
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
                    obj = this.configData.textData.hugeWin;
                    this.hugeAnim.scale.x = this.hugeAnim.scale.y = CoreLib.Util.getDefaultValue(this.hugeAnim.configData.scale, 1);
                    this.hugeAnim.visible = true;
                    this.hugeAnim.playAnimation(this.hugeAnim.configData.start, this.hugeAnim.configData.loop != undefined ? this.hugeAnim.configData.loop : true, 0, 600);
                    CoreLib.EventHandler.dispatchEvent("PLAY_HUGEWIN_SPECIAL_SOUND");
                } else if (level == 3) {
                    obj = this.configData.textData.luckOfTheTrisbWin;
                    this.luckOfTheTrisbAnim.scale.x = this.luckOfTheTrisbAnim.scale.y = CoreLib.Util.getDefaultValue(this.luckOfTheTrisbAnim.configData.scale, 1);
                    this.luckOfTheTrisbAnim.visible = true;
                    this.luckOfTheTrisbAnim.playAnimation(this.luckOfTheTrisbAnim.configData.start, this.luckOfTheTrisbAnim.configData.loop != undefined ? this.luckOfTheTrisbAnim.configData.loop : true, 0, 600);
                    CoreLib.EventHandler.dispatchEvent("PLAY_LUCK_OF_THE_TRISBWIN_SPECIAL_SOUND");
                } 
        }

        this.winText.text = CoreLib.WrapperService.formatWinCurrency(this.startScore.score);
        this.winValue = this.startScore.score;
        this.lastLevel = level;
    }

    onSpineAnimComplete (data) {
        if (data.name.indexOf("start") > -1) {
            if (this.lastLevel == 1) {
                this.bigAnim.scale.x = this.bigAnim.scale.y = CoreLib.Util.getDefaultValue(this.bigAnim.configData.scale, 1);
                if (this.bigAnim.configData.idleState) {
                    this.bigAnim.playAnimation(this.bigAnim.configData.idleState, true);
                }
            } else if (this.lastLevel == 2) {
                this.hugeAnim.scale.x = this.hugeAnim.scale.y = CoreLib.Util.getDefaultValue(this.hugeAnim.configData.scale, 1);
                if (this.hugeAnim.configData.idleState) {
                    this.hugeAnim.playAnimation(this.hugeAnim.configData.idleState, true);
                }
            } else if (this.lastLevel == 3) {
                this.luckOfTheTrisbAnim.scale.x = this.luckOfTheTrisbAnim.scale.y = CoreLib.Util.getDefaultValue(this.luckOfTheTrisbAnim.configData.scale, 1);
                if (this.luckOfTheTrisbAnim.configData.idleState) {
                    this.luckOfTheTrisbAnim.playAnimation(this.luckOfTheTrisbAnim.configData.idleState, true);
                }
            } 
        }


    }

}