import {SlotMachineV1} from "../../../../../../../../slot_core/corelib/views/slotmachine/SlotMachineV1";
import {ReelSlotSymbol} from "../../../../../../../../slot_core/corelib/views/slotmachine/ReelSlotSymbol";
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib";

export class GameSlotMachine extends SlotMachineV1 {
    constructor(config) {
        super(config);
        this.customSymbolsArray = [];
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.CLEAR_ALL_WIN, this.clearCustomWins.bind(this))
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.STOP_CUSTOM_WIN_ANIMATION, this.stopCustomWinAnimation.bind(this))
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.RESTART_CUSTOM_WIN_ANIMATION, this.resumeCustomWinAnimation.bind(this))



    }

    showCustomTriggerAnim (data) {
        this.wildPosData = data;
        let len = data.length;
        this.customSymbolsArray = [];
        let newdata = [];
        for (let k = 0; k < len; k++) {
            if (newdata[data[k].reel] == undefined) {
                newdata[data[k].reel] = [];
            }
            newdata[data[k].reel].push(data[k]);
        }
        len = newdata.length;
        if (len > 0) {
            for (let k = 0; k < len; k++) {
                if (newdata[k]) {
                    let newlen = newdata[k].length;
                    if (newlen > 0) {
                        if (newlen == 3) {
                            let symb = CoreLib.UIUtil.getAnimatedSprite(this.configData.data.symbolsData.WD.expandingAnimation);
                            this.winFrameContainer.addChild(symb);
                            symb.gotoAndPlay(0);
                            symb.resumeCustomAnimation = function () {};
                            symb.clearAllSymbolEffects = function () {};
                            symb.stopCustomAnimation = function () {};
                            symb.destroySymbol = function () {};
                            symb.x = this.symbolsArray[newdata[k][0].reel][1].x;
                            symb.y = this.symbolsArray[newdata[k][0].reel][2].y;
                            this.customSymbolsArray.push(symb);
                            this.symbolsArray[newdata[k][0].reel][1].visible = false;
                            this.symbolsArray[newdata[k][0].reel][2].visible = false;
                            this.symbolsArray[newdata[k][0].reel][3].visible = false;
                            CoreLib.EventHandler.dispatchEvent("PLAY_STACKED_WILD");

                        } else {
                            CoreLib.EventHandler.dispatchEvent("PLAY_WILD_SOUND");
                            for (let i = 0; i < newlen; i++) {
                                let symb = new ReelSlotSymbol("WD", "WD");
                                this.winFrameContainer.addChild(symb);
                                symb.showCustomAnim();
                                symb.x = this.symbolsArray[newdata[k][i].reel][newdata[k][i].row + 1].x;
                                symb.y = this.symbolsArray[newdata[k][i].reel][newdata[k][i].row + 1].y;
                                this.customSymbolsArray.push(symb);
                                this.symbolsArray[newdata[k][i].reel][newdata[k][i].row + 1].visible = false;
                            }

                        }
                    }
                }
            }
            // if (this.maskRect) {
            //     this.addChild(this.maskRect);
            //     this.winFrameContainer.mask = this.maskRect;
            // }
        }
    }
    changeCustomSymbolDepth () {
        let len = this.customSymbolsArray.length;
        if (len > 0) {
            for (let k = 0; k < len; k++) {
                this.winFrameContainer.addChild(this.customSymbolsArray[k]);
            }
        }
    }
    stopCustomWinAnimation () {
        let len = this.customSymbolsArray.length;
        if (len > 0) {
            for (let k = 0; k < len; k++) {
                this.customSymbolsArray[k].stopCustomAnimation();
            }
        }
    }
    resumeCustomWinAnimation () {
        let len = this.customSymbolsArray.length;
        if (len > 0) {
            for (let k = 0; k < len; k++) {
                this.customSymbolsArray[k].resumeCustomAnimation();
            }
        }
    }
    clearCustomWins (forceClear = false) {
        if (forceClear) {
            let len = this.customSymbolsArray.length;
            if (len > 0) {
                for (let k = 0; k < len; k++) {
                    this.winFrameContainer.removeChild(this.customSymbolsArray[k]);
                    this.customSymbolsArray[k].clearAllSymbolEffects();
                    this.customSymbolsArray[k].destroySymbol();
                    this.customSymbolsArray[k].destroy();
                    this.customSymbolsArray[k] = null;
                    this.symbolsArray[this.wildPosData[k].reel][this.wildPosData[k].row + 1].visible = true;
                }
            }
            this.customSymbolsArray = [];
            this.winController.showAllSymbols();
        }


    }
};
