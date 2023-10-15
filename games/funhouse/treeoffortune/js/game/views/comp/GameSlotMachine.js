import { SlotMachineV1 } from "../../../../../../../../slot_core/corelib/views/slotmachine/SlotMachineV1";
import { ReelSlotSymbol } from "../../../../../../../../slot_core/corelib/views/slotmachine/ReelSlotSymbol";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";
import { ReelSlotSymComp } from "./ReelSlotSymComp";

export class GameSlotMachine extends SlotMachineV1 {
    constructor(config) {
        super(config);
        this.customSymbolsArray = [];
        CoreLib.EventHandler.addEventListener("START_INDIVIDUAL_REELSPIN", this.startIndividualReelSpin.bind(this));
        CoreLib.EventHandler.addEventListener("STOP_INDIVIDUAL_REELSPIN", this.stopIndividualReelSpin.bind(this));
        CoreLib.EventHandler.addEventListener("STOP_INDIVIDUAL_BLANK_REELSPIN", this.stopIndividualBlankReelSpin.bind(this));

    }
    onInitialViewCreated() {
        super.onInitialViewCreated();
        let reelsview = slotModel.getReelsView() ? slotModel.getReelsView() : this.configData.data.reelsView;
        let reelno = -1;
        let reellen = reelsview.length;
        for (let i = 0; i < reellen; i++) {
            let reellen2 = reelsview[i].length;
            for (let j = 0; j < reellen2; j++) {
                if (reelsview[i][j] === "BL") {
                    reelno = i;
                }
            }

        }
        if (reelno >= 0) {
            let len = 3;
            for (let i = 0; i < 3; i++) {
                this.symbolsArray[reelno][i].y = (i - 1) * (this.configData.data.symbolHeight) + this.configData.data.symbolHeight / 2;
            }
        }


    }

    startSlotSpin () {
        this.enableMask();
        this.dontShowAnticipation = false;
        this.isSpinning = true;
        this.anticipationStarted = false;
        this.maingameSoundStopped = false;
        this.maingameSoundStarted = false;
        this.spinStartIndex = 0;
        this.gameResultReceived = false;
        this.allReelsSpinStarted = false;
        this.reelStopIndex = 0;
        this.winController.showAllSymbols();
        this.spinController.startAllSpin();
        for (let k = 0; k < this.configData.data.noOfReels; k++) {
            this.startReelStripSpin(k);
            this.reelStartIndex++;
        }
    }
    
    doGameSpecificStop() {
    
    }

    stopIndividualReelSpin(reelno) {
        CoreLib.EventHandler.dispatchEvent("STOP_ANTICIPATION_ANIMATION_FOR_RESPIN");
        let arr = [];
        arr = slotModel.getSlotGameResult().reelView;
        arr[reelno][0] = slotModel.getSlotGameResult().respinSymbol;
        slotModel.getSlotGameResult().reelView = arr;
        let data = slotModel.getSlotGameResult();
        this.spinController.stopReelStrip(reelno, data.reelView[reelno]);
    }

    stopIndividualBlankReelSpin(reelno) {
        let data = slotModel.getSlotGameResult();
        this.spinController.stopReelStrip(reelno, data.reelView[reelno]);
    }

    startIndividualReelSpin(reelno) {
        this.spinController.startIndividualSpin();
        this.spinController.startReelStripSpin(reelno);
    }

    getSymbolPosition(reel, row) {
        return { x: this.symbolsArray[reel][row].x, y: this.symbolsArray[reel][row].y }
    }
    getReelSymbol(val) {
        if (val == undefined) {
            let index = 0;
            let target = CoreLib.Util.getRandomRange(0, 2);
            for (let p in this.configData.data.symbolsData) {
                if (index == target) {
                    val = p;
                }
                index++;
            }
        }
        if (val == "BL") {
            val = "M1";
        }
        let symbname = this.getSymbolName(val);
        if (this.configData.symbolClass != undefined) {
            // to do dynamically instantiate the class
            let symbHeight = this.configData.data.symbolHeight;
            let symbolGap = this.configData.data.symbolGap;
            let totalht = symbHeight + symbolGap;
            return new ReelSlotSpinningSymbol(val, symbname, this.configData.data.symbolsData, this.configData.wildFrameAnim, totalht);
        } else {
            return new ReelSlotSymComp(val, symbname);
        }
    }


};
