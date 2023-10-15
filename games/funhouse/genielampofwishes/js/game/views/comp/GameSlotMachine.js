import {SlotMachineV1} from "../../../../../../../../slot_core/corelib/views/slotmachine/SlotMachineV1";
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib";
import {slotModel} from "../../../../../../../../slot_core/corelib/models/SlotModel";
import {ReelSlotSymbol} from "../../../../../../../../slot_core/corelib/views/slotmachine/ReelSlotSymbol";
export class GameSlotMachine extends SlotMachineV1 {
    constructor(config) {
        super(config);
        this.customSymbolsArray = [];
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.CLEAR_ALL_WIN, this.clearCustomWins.bind(this))
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.STOP_CUSTOM_WIN_ANIMATION, this.stopCustomWinAnimation.bind(this))
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.RESTART_CUSTOM_WIN_ANIMATION, this.resumeCustomWinAnimation.bind(this));


    }

    showCustomTriggerAnim (data) {
        this.wildPosData = data;
        let len = data.length;
        this.customWinFramesArray = [];
        this.customSymbolsArray = [];
        if (len > 0) {
            for (let k = 0; k < len; k++) {

                let winFrame = CoreLib.UIUtil.getElement(CoreLib.Model.GameConfig.symbolWinFrame);
                this.winFrameContainer.addChild(winFrame);
                winFrame.playAnimation(winFrame.configData.defaultState, winFrame.configData.loop);
                this.customWinFramesArray.push(winFrame);
                winFrame.x = this.symbolsArray[data[k].reel][data[k].row + 1].x;
                winFrame.y = this.symbolsArray[data[k].reel][data[k].row + 1].y;

                let symb = new ReelSlotSymbol("WD", "WD");
                this.winFrameContainer.addChild(symb);
                symb.showCustomAnim();
                symb.x = this.symbolsArray[data[k].reel][data[k].row + 1].x;
                symb.y = this.symbolsArray[data[k].reel][data[k].row + 1].y;
                this.customSymbolsArray.push(symb);
                this.symbolsArray[data[k].reel][data[k].row + 1].visible = false;
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
                this.customWinFramesArray[k].stopAnimation();
            }
        }
    }
    resumeCustomWinAnimation () {
        let len = this.customSymbolsArray.length;
        if (len > 0) {
            for (let k = 0; k < len; k++) {
                this.customSymbolsArray[k].resumeCustomAnimation();
                let winFrame = this.customWinFramesArray[k];
                winFrame.playAnimation(winFrame.configData.defaultState, winFrame.configData.loop);
            }
        }
    }
    clearCustomWins (forceClear = false) {
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

        if(this.customWinFramesArray) {
            let len2 = this.customWinFramesArray.length;
            if (len2 > 0) {
                for (let k = 0; k < len2; k++) {
                    this.winFrameContainer.removeChild(this.customWinFramesArray[k]);
                    this.customWinFramesArray[k].destroy();
                    this.customWinFramesArray[k] = null;
                }
            }
            this.customWinFramesArray = [];
        }
        this.winController.showAllSymbols();


    }

    createScatterAnticipationArray () {
        this.scatterAnticipArray = [];
        let len = slotModel.getReelsView().length;
        let totalScatters, scatter;;
        this.scatterAnticipArray[0] = [0];

        let scattersLen = this.configData.data.anticipationSymbols.length;
        for (let p = 0; p < scattersLen; p++) {
            totalScatters = 0;
            scatter = this.configData.data.anticipationSymbols[p];
            for (let k = 1; k < len; k++) {
                if (!this.scatterAnticipArray[k]) {
                    this.scatterAnticipArray[k] = [];
                }
                let reel = slotModel.getReelsView()[k - 1];
                if (reel) {
                    let symbLen = reel.length;
                    for (let i = 0; i < symbLen; i++) {
                        if (reel[i] === scatter) {
                            totalScatters++;
                        }
                    }
                    this.scatterAnticipArray[k].push(totalScatters);

                }
            }
        }
    }

    checkAnticipation (reelno) {
        if (CoreLib.Model.GameConfig.isTurboOn || this.configData.anticipationConfig == null) {
            return 0;
        }
        if (this.scatterAnticipArray && this.scatterAnticipArray[reelno] != undefined) {
            if (this.scatterAnticipArray[reelno].length > 1) {
                let final = 0;
                let len = this.scatterAnticipArray[reelno].length;
                for (let k = 0; k < len; k++) {
                    if (this.scatterAnticipArray[reelno][k] > final) {
                        final = this.scatterAnticipArray[reelno][k];
                    }
                }
                return final;
            }
            return this.scatterAnticipArray[reelno];
        } else {
            return 0;
        }


    }

};
