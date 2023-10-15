import { SlotMachineV1 } from "../../../../../../../../slot_core/corelib/views/slotmachine/SlotMachineV1";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";
import { UIUtil } from "../../../../../../../../slot_core/corelib/pixiwrapper/UIUtilService";

export class GameSlotMachine extends SlotMachineV1 {
    constructor(config) {
        super(config);
        this.customSymbolsArray = [];
        this.maskRect = this.elementsList["maskRect"];
        this.scatterAnim = { name: "scatterAnim", type: "AnimatedSprite", animation: { prefix: "chest_start_000", postfix: "", start: 0, end: 55, toAddZero: true, loop: false } };
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.CLEAR_ALL_WIN, this.clearCustomWins.bind(this))
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.STOP_CUSTOM_WIN_ANIMATION, this.stopCustomWinAnimation.bind(this))
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.RESTART_CUSTOM_WIN_ANIMATION, this.resumeCustomWinAnimation.bind(this))
        CoreLib.EventHandler.addEventListener("SHOW_SCATTER_MULTIPLIER", this.showScatterMultiplier.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.CLEAR_ALL_WIN, this.clearScatter.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.SHOW_LINE_WIN, this.showAlternateWin.bind(this));
        CoreLib.EventHandler.addEventListener("CONVERTED_SCATTER_POSITIONS", this.showLineWinScatterMultiplier.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.SPIN_CLICKED, this.clearScatter.bind(this));
    }

    showAlternateWin() {
        let winlines = slotModel.getWinLines();
        if (winlines && winlines.length > 0) {
            let obj = winlines[CoreLib.Model.GameConfig.lineWinIndex];
            if (obj.lineNumber == 0) {
                CoreLib.EventHandler.dispatchEvent("CONVERT_POSITION_OF_SCATTER", obj.winningPosition);
            } else {
                this.clearScatter();
            }
        }
    }

    showLineWinScatterMultiplier(scatterPos) {
        this.showScatterMultiplier(scatterPos, false);
    }

    showScatterMultiplier(scatterPos, toSendEvent = true) {
        if (slotModel.getIsFreespinSession == false) {
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.DISABLE_ALL_BUTTONS);
        }
        setTimeout(this.showScatterMultiplierNow.bind(this, scatterPos, toSendEvent), 100);
    }
    showScatterMultiplierNow(scatterPos, toSendEvent) {
        if (slotModel.getIsFreespinSession == false) {
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.DISABLE_ALL_BUTTONS);
        }
        this.customMuliplierArray = [];
        let scatterMultiplierValue;
        if (slotModel.getFeatureData() == true) {
            let fsResult = slotModel.getFeatureData();
            let index = fsResult[0].spinResults.length - 1;
            let spinresult = fsResult[0].spinResults[index];
            scatterMultiplierValue = spinresult.scatterPositionsMultipliers;
        } else {
            let data = slotModel.getSlotGameResult();
            scatterMultiplierValue = data.scatterPositionsMultipliers;
        }
        let rect = CoreLib.UIUtil.getRectangle(1617, 829, 0xffffff, -160, -145);
        rect.alpha = 0.5;
        rect.visible = true;
        const len = scatterPos.length;
        this.scatterLen = len;
        for (let k = 0; k < len; k++) {
            if (slotModel.getIsFreespinSession == false) {
                CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.DISABLE_ALL_BUTTONS);
            }
            let tConfig;
            if (scatterMultiplierValue[k] <= 9) {
                tConfig = {
                    name: "multiText",
                    type: "Text",
                    contentText: "",
                    style: "winAmountStyle",
                    fontSize: 300,
                    anchor: { x: 0.5, y: 0.5 }
                }
            } else {
                tConfig = {
                    name: "multiText",
                    type: "Text",
                    contentText: "",
                    style: "winAmountStyle",
                    fontSize: 200,
                    anchor: { x: 0.5, y: 0.5 }
                }
            }

            const multiText = CoreLib.UIUtil.getElement(tConfig);
            const element = UIUtil.getSprite(this.configData.data.multiSymb.image);
            const animatedSprite = CoreLib.UIUtil.getElement(this.scatterAnim);
            this.winFrameContainer.addChildAt(rect, 0);
            this.winFrameContainer.addChild(animatedSprite);
            animatedSprite.playAnimation(animatedSprite.configData.animation.loop);
            this.customMuliplierArray.push(animatedSprite);
            animatedSprite.x = this.symbolsArray[scatterPos[k].reel][scatterPos[k].row + 1].x;
            animatedSprite.y = this.symbolsArray[scatterPos[k].reel][scatterPos[k].row + 1].y;
            this.symbolsArray[scatterPos[k].reel][scatterPos[k].row + 1].visible = false;
            if (scatterMultiplierValue[k] <= 9) {
                element.scale.set(0.6);
                element.x = this.symbolsArray[scatterPos[k].reel][scatterPos[k].row + 1].x - 154;
                element.y = this.symbolsArray[scatterPos[k].reel][scatterPos[k].row + 1].y - 75;
                multiText.x = this.symbolsArray[scatterPos[k].reel][scatterPos[k].row + 1].x + 75;
                multiText.y = this.symbolsArray[scatterPos[k].reel][scatterPos[k].row + 1].y + 30;
            } else {
                element.scale.set(0.45);
                element.x = this.symbolsArray[scatterPos[k].reel][scatterPos[k].row + 1].x - 154;
                element.y = this.symbolsArray[scatterPos[k].reel][scatterPos[k].row + 1].y - 61;
                multiText.x = this.symbolsArray[scatterPos[k].reel][scatterPos[k].row + 1].x + 60;
                multiText.y = this.symbolsArray[scatterPos[k].reel][scatterPos[k].row + 1].y + 20;
            }
            multiText.text = element + scatterMultiplierValue[k];
            this.winFrameContainer.addChild(element);
            this.winFrameContainer.addChild(multiText);
            this.customMuliplierArray.push(multiText, element);
            setTimeout(() => {
                CoreLib.AnimationManager.animateTween(rect, 1, { alpha: 0, delay: 0.25, onComplete: this.clearBlurEffect.bind(this, rect) });
            }, 1000);
            if (toSendEvent) {
                setTimeout(() => {
                    this.winFrameContainer.removeChild(multiText, element);
                }, 2000);
                setTimeout(this.notifyScatterAnimDone.bind(this), 1000);
            }
        }
    }
    notifyScatterAnimDone() {
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.ENTER_SPINWIN_STATE);
    }

    clearScatter() {
        let len = this.customMuliplierArray.length;
        if (len > 0) {
            for (let k = 0; k < len; k++) {
                this.winFrameContainer.removeChild(this.customMuliplierArray[k]);
                this.customMuliplierArray[k].destroy();
            }
            this.customMuliplierArray = [];
            len = this.symbolsArray.length;
            for (let k = 0; k < len; k++) {
                let len2 = this.symbolsArray[k].length;
                for (let i = 0; i < len2; i++) {
                    this.symbolsArray[k][i].visible = true;
                }
            }
        }
    }

    hideScatterMultiplier() {
        this.customMuliplierArray.pop();
        this.customMuliplierArray = [];
    }

    clearSpecialElement(element) {
        element.destroy();
    }

    clearBlurEffect(element) {
        element.destroy();
    }

    changeCustomSymbolDepth() {
        let len = this.customSymbolsArray.length;
        if (len > 0) {
            for (let k = 0; k < len; k++) {
                this.winFrameContainer.addChild(this.customSymbolsArray[k]);
            }
        }
    }
    stopCustomWinAnimation() {
        let len = this.customSymbolsArray.length;
        if (len > 0) {
            for (let k = 0; k < len; k++) {
                this.customSymbolsArray[k].stopCustomAnimation();
                this.customMuliplierArray[k].stopAnimation();
                this.customMuliplierArray = [];
            }
        }
    }
    resumeCustomWinAnimation() {
        let len = this.customSymbolsArray.length;
        if (len > 0) {
            for (let k = 0; k < len; k++) {
                this.customSymbolsArray[k].resumeCustomAnimation();
                this.customMuliplierArray = [];
            }
        }
    }
    clearCustomWins(forceClear = false) {
        if (forceClear) {
            let len = this.customSymbolsArray.length;
            if (len > 0) {
                for (let k = 0; k < len; k++) {
                    this.winFrameContainer.removeChild(this.customSymbolsArray[k]);
                    this.customSymbolsArray[k].clearAllSymbolEffects();
                    this.customSymbolsArray[k].destroySymbol();
                    this.customSymbolsArray[k].destroy();
                    this.customSymbolsArray[k] = null;
                }
            }
            this.customSymbolsArray = [];
            this.winController.showAllSymbols();
            this.customMuliplierArray = [];
        }
    }
};
