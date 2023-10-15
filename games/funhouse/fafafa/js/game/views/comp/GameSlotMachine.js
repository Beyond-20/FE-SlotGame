import {SlotMachineV1} from "../../../../../../../../slot_core/corelib/views/slotmachine/SlotMachineV1";
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib";
import {slotModel} from "../../../../../../../../slot_core/corelib/models/SlotModel";

export class GameSlotMachine extends SlotMachineV1 {
    constructor(config) {
        super(config);
        CoreLib.Model.GameConfig.expandedReels = [];
    }

    createExpandingWildData () {
        if (slotModel.getIsFreespinSession()) {
            CoreLib.Model.GameConfig.expandedReels = slotModel.getSlotGameResult().featureFWReelNumbers;
            CoreLib.Model.GameConfig.godExpandedReels = slotModel.getSlotGameResult().featureGodReelNumbers;
            let len = CoreLib.Model.GameConfig.expandedReels.length;
            if (len > 0) {
                for (let k = len - 1; k >= 0; k--) {
                    if (CoreLib.Model.GameConfig.godExpandedReels.indexOf(CoreLib.Model.GameConfig.expandedReels[k]) > -1) {
                        CoreLib.Model.GameConfig.expandedReels.splice(k, 1);
                    }
                }
            }
            if (CoreLib.Model.GameConfig.expandedReels.length > 0 || CoreLib.Model.GameConfig.godExpandedReels.length > 0) {
                for (let k = 0; k < this.configData.data.noOfReels; k++) {
                    let reel = CoreLib.gameUtil.getReelView(k);
                    if (CoreLib.Model.GameConfig.godExpandedReels.indexOf(k) > -1) {
                        slotModel.setReelViewForReel(k, ["WDF", "WDF", "WDF"]);
                    }
                    if (CoreLib.Model.GameConfig.expandedReels.indexOf(k) > -1) {
                        slotModel.setReelSymbolForReelAtPosition(k, 0, "WDF");
                    }
                }
            }

        } else {
            CoreLib.Model.GameConfig.expandedReels = slotModel.getSlotGameResult().featureFWReelNumbers;
            if (CoreLib.Model.GameConfig.expandedReels.length > 0) {
                for (let k = 0; k < this.configData.data.noOfReels; k++) {
                    let reel = CoreLib.gameUtil.getReelView(k);
                    if (CoreLib.Model.GameConfig.expandedReels.indexOf(k) > -1) {
                        slotModel.setReelSymbolForReelAtPosition(k, 0, "WDF");
                    }
                }
            } else {
                for (let k = 0; k < this.configData.data.noOfReels; k++) {
                    let reel = CoreLib.gameUtil.getReelView(k);
                    if (reel.indexOf("WD") > -1) {
                        let rnd = CoreLib.Util.getRandomRange(1, 2);
                        if (rnd == 1) {
                            if (reel.indexOf("WD") == 0) {
                                //slotModel.setReelSymbolForReelAtPositionRegular(k, reel.indexOf("WD"), "WD");
                            } else {
                                slotModel.setReelSymbolForReelAtPositionRegular(k, reel.indexOf("WD"), "WDF");
                            }

                        }

                    }
                }
            }
        }
    }
    checkToStopQuickSpin () {
        if (this.allReelsSpinStarted && this.gameResultReceived) {
            let delay = 200;
            let anti = false;
            this.stopStripTimerIds = [];

            this.createExpandingWildData();
            this.reelStopIndex = 0;
            for (let k = 0; k < this.configData.data.noOfReels; k++) {
                let reel = CoreLib.gameUtil.getReelView(this.reelStopIndex);
                this.stopReelStripQuick(this.reelStopIndex, reel);
                this.reelStopIndex++;
                if (this.stopStripTimerIds && this.stopStripTimerIds[k]) {
                    clearTimeout(this.stopStripTimerIds[k]);
                }
            }
            clearTimeout(this.antiTimerId);
        }
    }

    doGameSpecificStop() {
        for (let k = 0; k < this.configData.data.noOfReels; k++) {
            if (this.stopStripTimerIds && this.stopStripTimerIds[k]) {
                clearTimeout(this.stopStripTimerIds[k]);
            }
        }
    }

    stopSpinNow () {
        this.isAnticipationShown = false;
        let delay = 200;
        let anti = false;
        this.stopStripTimerIds = [];

        this.createExpandingWildData();
        for (let k = 0; k < this.configData.data.noOfReels; k++) {
            let reel = CoreLib.gameUtil.getReelView(this.reelStopIndex);
            anti = false;
            clearTimeout(this.stopStripTimerIds[k]);
            this.stopStripTimerIds[k] = setTimeout(this.stopReelStrip.bind(this, this.reelStopIndex, reel), delay);
            this.reelStopIndex++;
        }
    }

    getTotalWildCount (arr) {
        let len = arr.length;
        let total = 0;
        for (let k = 0; k < len; k++) {
            if (arr[k] == "WD") {
                total++;
            }
        }
        return total;
    }



};
