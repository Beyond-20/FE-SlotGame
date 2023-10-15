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
        let len = data.length;
        this.customSymbolsArray = [];
        if (len > 0) {
            for (let k = 0; k < len; k++) {
                let symb = new ReelSlotSymbol("WD", "WD");
                this.winFrameContainer.addChild(symb);
                symb.showCustomAnim();
                symb.x = this.symbolsArray[data[k].reel][data[k].row + 1].x;
                symb.y = this.symbolsArray[data[k].reel][data[k].row + 1].y;
                this.customSymbolsArray.push(symb);
            }
            if (this.maskRect) {
                this.addChild(this.maskRect);
                this.winFrameContainer.mask = this.maskRect;
            }
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
                }
            }
            this.customSymbolsArray = [];
        }


    }
};
