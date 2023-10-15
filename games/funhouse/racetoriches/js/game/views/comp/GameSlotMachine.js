import { SlotMachineV1 } from "../../../../../../../../slot_core/corelib/views/slotmachine/SlotMachineV1";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";
import { SpinWinSymbol } from "./SpinWinSymbol";
import { MysteryTransformSymbol } from "./MysteryTransformSymbol";
import { coreClassUtil } from "../../../../../../../../slot_core/corelib/core/CoreClassUtil";

export class GameSlotMachine extends SlotMachineV1 {
    constructor(config) {
        super(config);
        this.mysteryCloverAnimation = { name: "mysteryCloverAnimation", type: "AnimatedSprite", animation: { prefix: "clover_", postfix: "", start: 0, end: 40, toAddZero: false, scale: 0.9, loop: false } };
        this.wildJockyIndex = 0;
        this.customSymbolsArray = [];
        CoreLib.EventHandler.addEventListener("SHOW_WILD_PLACEMENT", this.showWildPlacement.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_WIN_SPIN_PLACEMENT", this.showWinSpinInSlot.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_MYSTERY_TRANSFORM_SYMBOL_PLACEMENT", this.showMysteryTransformSymbInSlot.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.CLEAR_ALL_WIN, this.clearCustomWins.bind(this))
        // CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.STOP_CUSTOM_WIN_ANIMATION, this.stopCustomWinAnimation.bind(this))
        // CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.RESTART_CUSTOM_WIN_ANIMATION, this.resumeCustomWinAnimation.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_RANDOM_WILDS_ON_REEL", this.showRandomWildOnReel.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_RANDOM_MYSTERIES_ON_REEL", this.showRandomMysteriesOnReel.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_REMOVED_SYMB_ON_BG", this.removedSymb.bind(this));

    }

    showRandomWildOnReel() {
        let rnd = CoreLib.Util.getRandomRange(5, 13);
        let tempArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        let arr = slotModel.convertPosition(tempArray);
        let posArray = [];
        for (let k = 0; k < rnd; k++) {
            let newrnd = CoreLib.Util.getRandomRange(0, arr.length - 1);
            let temp = arr[newrnd];
            posArray.push(temp);
            arr.splice(newrnd, 1);
            CoreLib.EventHandler.dispatchEvent("PLAY_JOCKEY_WILD_PLACEMENT_SOUND");
        }
        for (let k = 0; k < rnd; k++) {
            let sp = CoreLib.UIUtil.getSprite(this.configData.data.symbolsData.WD.animation.image);
            this.addChild(sp);
            sp.scale.set(1);
            sp.x = this.symbolsArray[posArray[k].reel][posArray[k].row + 1].x + 230;
            sp.y = this.symbolsArray[posArray[k].reel][posArray[k].row + 1].y + 100;
            CoreLib.AnimationManager.animateTween(sp, 1, { alpha: 1, delay: k * 1.2, scaleX: 1.2, scaleY: 1.2 });
            CoreLib.AnimationManager.animateTween(sp, 1, { alpha: 0, delay: k * 0.25, onComplete: this.clearSpecialElement.bind(this, sp) });
        }
    }

    showRandomMysteriesOnReel() {
        this.showRandomMysteryIndex = 0;
        let rnd = CoreLib.Util.getRandomRange(5, 14);
        let tempArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        let arr = slotModel.convertPosition(tempArray);
        let posArray = [];
        for (let k = 0; k < rnd; k++) {
            let newrnd = CoreLib.Util.getRandomRange(0, arr.length - 1);
            let temp = arr[newrnd];
            posArray.push(temp);
            arr.splice(newrnd, 1);
            CoreLib.EventHandler.dispatchEvent("PLAY_MYSTERY_ADDED_SOUND");
        }
        for (let k = 0; k < rnd; k++) {
            let sp = CoreLib.UIUtil.getSprite(this.configData.data.symbolsData.MS.animation.image);
            this.addChild(sp);
            sp.x = this.symbolsArray[posArray[k].reel][posArray[k].row + 1].x + 270;
            sp.y = this.symbolsArray[posArray[k].reel][posArray[k].row + 1].y + 130;
            CoreLib.AnimationManager.animateTween(sp, 1, { alpha: 1, delay: k * 1.2, scaleX: 1.2, scaleY: 1.2 });
            CoreLib.AnimationManager.animateTween(sp, 1, { alpha: 0, delay: k * 0.25, onComplete: this.clearSpecialElement.bind(this, sp) });
        }
    }

    clearSpecialElement(element) {
        element.destroy();
    }

    spinStrip(reelno) {
        this.animatingSymbols = [];
        let reel;
        if (slotModel.getSlotGameResult().winSpinPositions && slotModel.getSlotGameResult().winSpinPositions.length > 0) {
            reel = CoreLib.gameUtil.getPreWinReelsView(this.reelStopIndex);
        } else if (slotModel.getSlotGameResult().preRainbowRespinReelView && slotModel.getSlotGameResult().preRainbowRespinReelView.length > 0) {
            reel = CoreLib.gameUtil.getPreRespinReelsView(this.reelStopIndex);
        } else {
            reel = CoreLib.gameUtil.getReelView(this.reelStopIndex);
        }
        this.spinController.notifyStripStart(reelno);
        let reelview = slotModel.getReelsView();
        const len = reelview.length;
        for (let k = 0; k < len; k++) {
            const len2 = reelview[k].length;
            for (let i = 0; i < len2; i++) {
                if (reelview[k][i] === "FG") {
                    this.symbolsArray[k][i + 1].showSymbolWin("FG", true, false)
                    this.animatingSymbols.push(this.symbolsArray[k][i + 1]);
                }
            }
        }
        setTimeout(this.stopRainbowRespin.bind(this), 4000);
    }

    stopRainbowRespin() {
        this.spinController.stopReelStrip(4, slotModel.getReelsView()[4]);
        CoreLib.EventHandler.dispatchEvent("RAINBOW_RESPIN_SYMBOLS_PLACEMENT_DONE");
    }

    clearAnimatingSymbols() {
        let len = this.animatingSymbols.length;
        for (let k = 0; k < len; k++) {
            this.animatingSymbols[k].clearSymbolSpinWin();
        }
    }

    showMysteryTransformSymbInSlot(data) {
        this.mysterySymbPositions = data.positions;
        const mysteryPositions = data.positions;
        this.customSymbolsArray = [];
        this.customCloverArray = [];
        this.totalMysterySymbols = mysteryPositions.length;
        this.mysterySymbIndex = 0;
        const len = mysteryPositions.length;
        for (let k = 0; k < len; k++) {
            const initiateSymbol = this.symbolsArray[mysteryPositions[k].reel][mysteryPositions[k].row + 1].getSymbolNumber();
            this.symbolsArray[mysteryPositions[k].reel][mysteryPositions[k].row + 1].visible = false;
            this.symbolsArray[mysteryPositions[k].reel][mysteryPositions[k].row + 1].swapSymbolTexture(data.symbol, data.symbol);
            const symb = new MysteryTransformSymbol({ initiateSymbol: initiateSymbol, finalSymbol: data.symbol });
            symb.x = this.symbolsArray[mysteryPositions[k].reel][mysteryPositions[k].row + 1].x;
            symb.y = this.symbolsArray[mysteryPositions[k].reel][mysteryPositions[k].row + 1].y;
            this.customSymbolsArray.push(symb);
            symb.on("OnMysterySpinningCompleted", this.showMysterySymbolSpinCompleted.bind(this));
            this.winFrameContainer.addChild(symb);

            //play the animated sprite
            const animatedSprite = CoreLib.UIUtil.getElement(this.mysteryCloverAnimation);
            this.winFrameContainer.addChild(animatedSprite);
            animatedSprite.playAnimation(animatedSprite.configData.animation.loop);
            this.customCloverArray.push(animatedSprite);
            animatedSprite.x = this.symbolsArray[mysteryPositions[k].reel][mysteryPositions[k].row + 1].x;
            animatedSprite.y = this.symbolsArray[mysteryPositions[k].reel][mysteryPositions[k].row + 1].y;
        }
    }

    showMysterySymbolSpinCompleted(symb) {
        this.mysterySymbIndex++;
        this.symbolsContainer.removeChild(symb);
        if (this.mysterySymbIndex == this.totalMysterySymbols) {
            let len = this.customSymbolsArray.length;
            if (len > 0) {
                for (let k = 0; k < len; k++) {
                    this.customSymbolsArray[k].destroy();
                }
            }
            const len2 = this.mysterySymbPositions.length;
            for (let k = 0; k < len2; k++) {
                this.symbolsArray[this.mysterySymbPositions[k].reel][this.mysterySymbPositions[k].row + 1].visible = true;
            }
            this.customSymbolsArray = [];
            CoreLib.EventHandler.dispatchEvent("PLAY_LAUGH_SOUND_BEFORE_WIN");
            CoreLib.EventHandler.dispatchEvent("MYSTERY_SYMBOLS_REPLACEMENT_DONE");
        }
    }

    stopCustomWinAnimation() {
        let len = this.customSymbolsArray.length;
        if (len > 0) {
            for (let k = 0; k < len; k++) {
                this.customCloverArray[k].stopAnimation();
            }
        }
    }

    resumeCustomWinAnimation() {
        let len = this.customSymbolsArray.length;
        if (len > 0) {
            for (let k = 0; k < len; k++) {
                this.customSymbolsArray[k].resumeCustomAnimation();
                let winFrame = this.customCloverArray[k];
                winFrame.playAnimation(winFrame.configData.animation.loop);
            }
        }
    }

    //winSpin
    showWinSpinInSlot(data) {
        this.winPositions = data.positions;
        const positions = data.positions;
        this.customSymbolsArray = [];
        this.totalWinSpinSymbols = positions.length;
        this.spinWinSymbolIndex = 0;
        const len = positions.length;
        for (let k = 0; k < len; k++) {
            const initiateSymbol = this.symbolsArray[positions[k].reel][positions[k].row + 1].getSymbolNumber();
            this.symbolsArray[positions[k].reel][positions[k].row + 1].visible = false;
            this.symbolsArray[positions[k].reel][positions[k].row + 1].swapSymbolTexture(data.symbol, data.symbol);
            const symb = new SpinWinSymbol({ initiateSymbol: initiateSymbol, finalSymbol: data.symbol });
            symb.x = this.symbolsArray[positions[k].reel][positions[k].row + 1].x;
            symb.y = this.symbolsArray[positions[k].reel][positions[k].row + 1].y;
            this.customSymbolsArray.push(symb);
            symb.on("OnSpinningCompleted", this.showWinSpinSymbolSpinCompleted.bind(this));
            this.winFrameContainer.addChild(symb);
        }
    }

    showWinSpinSymbolSpinCompleted(symb) {
        CoreLib.EventHandler.dispatchEvent("STOP_WIN_SPIN_SYMBOL_ROTATING_SOUND");
        this.spinWinSymbolIndex++;
        this.symbolsContainer.removeChild(symb);

        if (this.spinWinSymbolIndex == this.totalWinSpinSymbols) {
            let len = this.customSymbolsArray.length;
            if (len > 0) {
                for (let k = 0; k < len; k++) {
                    this.customSymbolsArray[k].destroy();
                }
            }
            const len2 = this.winPositions.length;
            for (let k = 0; k < len2; k++) {
                this.symbolsArray[this.winPositions[k].reel][this.winPositions[k].row + 1].visible = true;
            }
            this.customSymbolsArray = [];
            CoreLib.EventHandler.dispatchEvent("WINSPIN_SYMBOLS_PLACEMENT_DONE");
            CoreLib.EventHandler.dispatchEvent("PLAY_LAUGH_SOUND_BEFORE_WIN");
        }
    }

    //jockeyWild
    showWildPlacement(positions) {
        this.wildJockyIndex = 0;
        this.wildJockyData = positions;
        this.customSymbolsArray = [];
        this.showNextWild();
    }

    showNextWild() {
        let symb = CoreLib.UIUtil.getSprite(this.configData.data.symbolsData.WD.animation.image);
        this.winFrameContainer.addChild(symb);
        symb.anchor.set(0.5, 0.5);
        let position = this.wildJockyData[this.wildJockyIndex];
        symb.x = this.symbolsArray[position.reel][position.row + 1].x;
        symb.y = this.symbolsArray[position.reel][position.row + 1].y;
        this.customSymbolsArray.push(symb);
        symb.scale.set(0.8);
        symb.alpha = 0;
        CoreLib.AnimationManager.animateTween(symb, 0.2, { alpha: 1 })
        CoreLib.EventHandler.dispatchEvent("PLAY_JOCKEY_WILD_PLACEMENT_SOUND");
        CoreLib.AnimationManager.animateTween(symb, 0.5, { scaleX: 1.2, scaleY: 1.2, onComplete: this.wildShowFirstStepCompleted.bind(this, symb) }, false);
    }

    wildShowFirstStepCompleted(symb) {
        CoreLib.AnimationManager.animateTween(symb, 0.5, { scaleX: 1, scaleY: 1, onComplete: this.wildShowSecondStepCompleted.bind(this, symb) });
    }

    wildShowSecondStepCompleted() {
        if (this.wildJockyIndex < this.wildJockyData.length - 1) {
            this.wildJockyIndex++;
            setTimeout(this.showNextWild.bind(this), 500);
        } else {
            setTimeout(this.onWildPlacementDone.bind(this), 600);
        }
    }

    onWildPlacementDone() {
        CoreLib.EventHandler.dispatchEvent("JOCKEY_WILD_PLACEMENT_DONE")
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.START_STOPPING_REELS);
        CoreLib.EventHandler.dispatchEvent("PLAY_LAUGH_SOUND_BEFORE_WIN");
    }

    //clearing custom wins, create scatter Anticipation, check anticipation
    clearCustomWins(forceClear = false) {
        if (forceClear) {
            let len = this.customSymbolsArray.length;
            if (this.customCloverArray) {
                let len2 = this.customCloverArray.length;
                if (len2 > 0) {
                    for (let k = 0; k < len2; k++) {
                        this.winFrameContainer.removeChild(this.customCloverArray[k]);
                        this.customCloverArray[k].destroy();
                        this.customCloverArray[k] = null;
                    }
                }
                this.customCloverArray = [];
            }
            if (len > 0) {
                for (let k = 0; k < len; k++) {
                    this.winFrameContainer.removeChild(this.customSymbolsArray[k]);
                    this.customSymbolsArray[k].destroy();
                    this.customSymbolsArray[k] = null;
                }
            }
            this.customSymbolsArray = [];
            this.winController.showAllSymbols();
        }
    }

    createScatterAnticipationArray() {
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

    checkAnticipation(reelno) {
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

    checkToStopQuickSpin() {
        if (this.allReelsSpinStarted && this.gameResultReceived) {
            this.reelStopIndex = 0;
            for (let k = 0; k < this.configData.data.noOfReels; k++) {
                let reel;
                if (slotModel.getSlotGameResult().winSpinPositions && slotModel.getSlotGameResult().winSpinPositions.length > 0) {
                    reel = CoreLib.gameUtil.getPreWinReelsView(this.reelStopIndex);
                } else if (slotModel.getSlotGameResult().preRainbowRespinReelView && slotModel.getSlotGameResult().preRainbowRespinReelView.length > 0) {
                    reel = CoreLib.gameUtil.getPreRespinReelsView(this.reelStopIndex);
                } else {
                    reel = CoreLib.gameUtil.getReelView(this.reelStopIndex);
                }
                this.stopReelStripQuickOnPress(this.reelStopIndex, reel, 0);
                this.reelStopIndex++;
                if (this.stopStripTimerIds && this.stopStripTimerIds[k]) {
                    clearTimeout(this.stopStripTimerIds[k]);
                }
            }
            clearTimeout(this.antiTimerId);
        }
    }

    stopSpinNow() {
        this.isAnticipationShown = false;
        let delay = 200;
        let anti = false;
        this.stopStripTimerIds = [];
        for (let k = 0; k < this.configData.data.noOfReels; k++) {
            let reel;
            if (slotModel.getSlotGameResult().winSpinPositions && slotModel.getSlotGameResult().winSpinPositions.length > 0) {
                reel = CoreLib.gameUtil.getPreWinReelsView(this.reelStopIndex);
            } else {
                reel = CoreLib.gameUtil.getReelView(this.reelStopIndex);
            }
            if (this.checkAnticipation(k) > 1) {
                delay += 2000;
                anti = true;
            } else {
                anti = false;
                delay += 200;
            }
            if (anti) {
                this.antiTimerId = setTimeout(this.startShowingAnticipation.bind(this, k), k * 200);
            }
            this.stopStripTimerIds[k] = setTimeout(this.stopReelStrip.bind(this, this.reelStopIndex, reel), delay);
            this.reelStopIndex++;
        }
    }

    removedSymb(symb) {
        for (let i = 0; i < symb.length; i++) {
            let removedSymb = CoreLib.UIUtil.getSprite(this.configData.data.symbolsData[symb[i]].animation.image);
            CoreLib.EventHandler.dispatchEvent("SHOW_FINAL_SYMBOLS_ON_BG", removedSymb);
        }
    }

};
