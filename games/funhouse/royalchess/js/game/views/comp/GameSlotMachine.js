import { SlotMachineV1 } from "../../../../../../../../slot_core/corelib/views/slotmachine/SlotMachineV1";
import { ReelSlotSymbol } from "../../../../../../../../slot_core/corelib/views/slotmachine/ReelSlotSymbol";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";
// import { RoyalSymbComp } from "./RoyalSymbComp";

export class GameSlotMachine extends SlotMachineV1 {
    constructor(config) {
        super(config);
        this.fsmaskRect = this.elementsList["fsmaskRect"];
        this.customSymbolsArray = [];
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.CLEAR_ALL_WIN, this.clearCustomWins.bind(this))
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.STOP_CUSTOM_WIN_ANIMATION, this.stopCustomWinAnimation.bind(this))
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.RESTART_CUSTOM_WIN_ANIMATION, this.resumeCustomWinAnimation.bind(this))
        CoreLib.EventHandler.addEventListener("CREATE_SYMBOL_ON_LAST_ROW", this.showFSintroEntry.bind(this));
        // CoreLib.EventHandler.addEventListener("SHOW_ROYAL_ELEMENT", this.showRoyalSymbolProcess.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_INITIAL_REELFRAME", this.enableInitialMask.bind(this));

        if (slotModel.getIsFreespinSession() == true) {
            if (this.fsmaskRect && this.symbolsContainer) {
                this.maskRect.visible = false;
                this.addChild(this.fsmaskRect);
                this.symbolsContainer.mask = this.fsmaskRect;
                if (this.configData.disableMask) {
                    this.disableMask();
                }
            }
        } else {
            if (this.maskRect && this.symbolsContainer) {
                this.addChild(this.maskRect);
                this.fsmaskRect.visible = false;
                this.symbolsContainer.mask = this.maskRect;
                if (this.configData.disableMask) {
                    this.disableMask();
                }
            }
        }
    }

    createAnticipations() {
        if (this.configData.anticipationConfig) {
            this.anticipationMoviesArray = [];
            this.anticipationContainer = CoreLib.UIUtil.getContainer();
            this.anticipationContainer.name = "AnticipationCont";
            this.addChild(this.anticipationContainer);
            let len = this.configData.anticipationConfig.totalElements;
            let element;
            for (let k = 0; k < len; k++) {
                if (slotModel.getIsFreespinSession() == true) {
                    element = CoreLib.UIUtil.getElement(this.configData.anticipationConfig.fselement);
                } else {
                    element = CoreLib.UIUtil.getElement(this.configData.anticipationConfig.element);
                }
                element.x = this.configData.anticipationConfig.positions[k].x;
                element.y = this.configData.anticipationConfig.positions[k].y;
                this.anticipationContainer.addChild(element);
                if (this.configData.anticipationConfig.element.type == "Spine") {
                    element.stopAnimation();
                } else {
                    element.stopAnimation();
                }
                element.visible = false;
                this.anticipationMoviesArray.push(element);
            }
        }
        this.stripsArray = [];
        this.stripsSymbolsArray = [];
        for (let i = 0; i < 5; i++) {
            this.stripsSymbolsArray[i] = [];
            let strip1 = CoreLib.UIUtil.getContainer();
            this.symbolsContainer.addChild(strip1);
            let len = 50;
            let symb;
            for (let k = 0; k < len; k++) {
                symb = CoreLib.UIUtil.getSprite(this.getNewRandomSymbolNumber() + "_blur");
                symb.y = k * this.configData.data.symbolHeight;
                symb.anchor.set(0.5, 0.5);
                strip1.addChild(symb);
                this.stripsSymbolsArray[i].push(symb);
            }
            strip1.x = this.configData.data.reelPositionX[i];
            strip1.y = -strip1.height + (5 * this.configData.data.symbolHeight);
            this.stripsArray.push(strip1);
            strip1.visible = false;
        }
    }

    enableInitialMask(){
        if (this.fsmaskRect) {
            this.fsmaskRect.visible = false;
            this.maskRect.visible = true;
            this.symbolsContainer.mask = this.maskRect;
        }
    }

    enableMask() {
        if (slotModel.getIsFreespinSession() == true) {
            if (this.maskRect) {
                this.maskRect.visible = false;
                this.fsmaskRect.visible = true;
                this.symbolsContainer.mask = this.fsmaskRect;
            }
        } else {
            if (this.fsmaskRect) {
                this.fsmaskRect.visible = false;
                this.maskRect.visible = true;
                this.symbolsContainer.mask = this.maskRect;
            }
        }
    }

    showFSintroEntry() {
        const reel = [["H2", "H3", "H4", "H1"], ["L1", "L2", "L3", "L4"], ["L4", "L5", "H1", "H2"], ["L5", "H1", "L3", "H3"], ["L4", "WW", "L2", "WW"]];
        CoreLib.Model.GameConfig.reelType = "5x4";
        this.configData.data.noOfReels = 5;
        this.configData.data.noOfRows = 4;
        this.changeReel(reel);
    }

    clearAllSymbols() {
        const len1 = this.symbolsArray.length;
        for (let k = 0; k < len1; k++) {
            const len2 = this.symbolsArray[k].length;
            for (let i = 0; i < len2; i++) {
                this.symbolsArray[k][i].destroy();
                this.symbolsArray[k][i] = null;
            }
        }
        this.symbolsArray = [];
    }

    changeReel(reel) {
        this.clearCustomWins();
        this.clearAllSymbols();
        CoreLib.Model.GameConfig.defaultReels = this.configData.data.reelsView;
        let reellen = this.configData.data.noOfReels;
        let rowlen = this.configData.data.noOfRows;
        let reelsview = reel;
        rowlen = reel[0].length;
        let xPos = this.configData.data.reelPositionX;
        let symbHeight = this.configData.data.symbolHeight;
        let symbolGap = this.configData.data.symbolGap;
        let index = 0;
        this.symbolsArray = [];
        CoreLib.Model.GameConfig.symbolHeight = this.configData.data.symbolHeight;
        CoreLib.Model.GameConfig.symbolsData = this.configData.data.symbolsData;
        CoreLib.Model.GameConfig.maskRect = this.configData.fsmaskRect;
        CoreLib.Model.GameConfig.symbolWinFrame = this.configData.data.winFrame;
        CoreLib.Model.GameConfig.symbolPositions = [];
        CoreLib.Model.GameConfig.symbolPositionsForReel = [];
        this.symbolsArray = [];
        let totalSymbols = 0;
        for (let k = 0; k < reellen; k++) {
            let flag = false;
            for (let i = 0; i < rowlen + 2; i++) {
                let symbnum = (i == 0 || i == rowlen + 1) ? undefined : reelsview[k][i - 1];
                var symb = this.getReelSymbol(symbnum);
                totalSymbols++;
                CoreLib.UIUtil.setPositionX(symb, xPos[k]);
                CoreLib.UIUtil.setPositionY(symb, (i - 1) * (symbHeight + symbolGap), false);
                this.symbolsContainer.addChild(symb);
                if (!CoreLib.Model.GameConfig.symbolPositions[k]) {
                    CoreLib.Model.GameConfig.symbolPositions[k] = [];
                }
                if (!CoreLib.Model.GameConfig.symbolPositionsForReel[k]) {
                    CoreLib.Model.GameConfig.symbolPositionsForReel[k] = [];
                }
                CoreLib.Model.GameConfig.symbolPositions[k][i] = { x: this.symbolsContainer.x + symb.x, y: this.symbolsContainer.y + symb.y };
                CoreLib.Model.GameConfig.symbolPositionsForReel[k][i] = { x: symb.x, y: symb.y };
                if (!this.symbolsArray[index]) {
                    this.symbolsArray[index] = [];
                }
                this.symbolsArray[index].push(symb);
                flag = true;
            }
            if (flag) {
                index++
            }
        }
        this.winController.symbolsArray = this.symbolsArray;
        this.spinController.symbolsArray = this.symbolsArray;
    }

    showCustomTriggerAnim(data) {
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
                            let symb = CoreLib.UIUtil.getAnimatedSprite(this.configData.data.symbolsData.WW.expandingAnimation);
                            symb.scale.set(0.92);
                            this.winFrameContainer.addChild(symb);
                            symb.playAnimation(false);
                            symb.resumeCustomAnimation = function () { };
                            symb.clearAllSymbolEffects = function () { };
                            symb.stopCustomAnimation = function () { };
                            symb.destroySymbol = function () { };
                            symb.x = this.symbolsArray[newdata[k][0].reel][1].x;
                            symb.y = this.symbolsArray[newdata[k][0].reel][2].y + CoreLib.Util.getDefaultValue(this.configData.data.symbolsData.WW.expandingAnimation.vPadding, 0);
                            this.customSymbolsArray.push(symb);
                            this.symbolsArray[newdata[k][0].reel][1].visible = false;
                            this.symbolsArray[newdata[k][0].reel][2].visible = false;
                            this.symbolsArray[newdata[k][0].reel][3].visible = false;
                            CoreLib.EventHandler.dispatchEvent("PLAY_STACKED_WILD");

                        } else {
                            CoreLib.EventHandler.dispatchEvent("PLAY_WILD_SOUND");
                            for (let i = 0; i < newlen; i++) {
                                let symb = new ReelSlotSymbol("WW", "WW");
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
            }
        }
    }

    resumeCustomWinAnimation() {
        let len = this.customSymbolsArray.length;
        if (len > 0) {
            for (let k = 0; k < len; k++) {
                this.customSymbolsArray[k].resumeCustomAnimation();
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
                    this.symbolsArray[this.wildPosData[k].reel][this.wildPosData[k].row + 1].visible = true;
                }
            }
            this.customSymbolsArray = [];
            this.winController.showAllSymbols();
        }


    }

    // //RoyalSymbol
    // showRoyalSymbolProcess() {
    //     this.customSymbolArr = [];
    //     let data = slotModel.getFeatureData();
    //     let royalSymb = data.expandingSymbol;
    //     const initialSymbol = "WW";
    //     const symb = new RoyalSymbComp({ initiateSymbol: initialSymbol, finalSymbol: royalSymb });
    //     symb.x = 315;
    //     symb.y = 349;
    //     this.customSymbolArr.push(symb);
    //     symb.on("OnSpinningCompleted", this.onRoyalSymbolShowDone.bind(this, royalSymb));
    // }

    // onRoyalSymbolShowDone(royalSymb) {
    //     this.customSymbolArr = [];
    //     CoreLib.AnimationManager.animateTween(royalSymb, 0.5, { y: 80, repeat: 2, yoyo: true, onComplete: this.showSymbOnExpandingReel.bind(this) });
    // }

    // showSymbOnExpandingReel() {
    //     console.log("SHOWING...............")
    // }

};
