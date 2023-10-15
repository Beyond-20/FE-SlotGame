import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";
import { LibView } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView";
import { UIUtil } from "../../../../../../../../slot_core/corelib/pixiwrapper/UIUtilService";

let xBetArr = [1, 5, 8, 10, 13, 15, 19, 23, 26, 28, 31, 33, 37, 41, 44, 46, 49, 51];
let mysteriesArr = [3, 6, 9, 14, 21, 24, 27, 32, 39, 42, 45, 50];
let wildArr = [2, 7, 12, 17, 20, 25, 30, 35, 38, 43, 48, 53];
let _1RemovedSymb = [{ x: 1440, y: 380, scale: { x: 0.3, y: 0.3 } }]
let _2RemovedSymb = [{ x: 1440, y: 335, scale: { x: 0.2, y: 0.2 } }, { x: 1440, y: 445, scale: { x: 0.2, y: 0.2 } }];
let _3RemovedSymb = [{ x: 1400, y: 335, scale: { x: 0.18, y: 0.18 } }, { x: 1480, y: 335, scale: { x: 0.18, y: 0.18 } }, { x: 1440, y: 445, scale: { x: 0.18, y: 0.18 } }];
let _4RemovedSymb = [{ x: 1400, y: 335, scale: { x: 0.18, y: 0.18 } }, { x: 1480, y: 335, scale: { x: 0.18, y: 0.18 } }, { x: 1400, y: 445, scale: { x: 0.18, y: 0.18 } }, { x: 1480, y: 445, scale: { x: 0.18, y: 0.18 } }];
let _5RemovedSymb = [{ x: 1400, y: 325, scale: { x: 0.14, y: 0.14 } }, { x: 1480, y: 325, scale: { x: 0.14, y: 0.14 } }, { x: 1400, y: 400, scale: { x: 0.14, y: 0.14 } }, { x: 1480, y: 400, scale: { x: 0.14, y: 0.14 } }, { x: 1440, y: 475, scale: { x: 0.14, y: 0.14 } }];
let _6RemovedSymb = [{ x: 1400, y: 325, scale: { x: 0.14, y: 0.14 } }, { x: 1480, y: 325, scale: { x: 0.14, y: 0.14 } }, { x: 1400, y: 400, scale: { x: 0.14, y: 0.14 } }, { x: 1480, y: 400, scale: { x: 0.14, y: 0.14 } }, { x: 1400, y: 475, scale: { x: 0.14, y: 0.14 } }, { x: 1480, y: 475, scale: { x: 0.14, y: 0.14 } }];

export class HighlightElementsComp extends LibView {
    constructor(config) {
        super(config);
        this.guideRect = this.elementsList["guideRect"];
        this.removedBoxbg = this.elementsList["removedBoxbg"];
        //level1
        this.clubs = this.elementsList["clubs"];
        this.allReelWins2 = this.elementsList["allReelWins2"];
        this.daimond = this.elementsList["daimond"];
        //level2
        this.spade = this.elementsList["spade"];
        this.allReelWins3 = this.elementsList["allReelWins3"];
        this.heart = this.elementsList["heart"];
        //level3
        this.beer = this.elementsList["beer"];
        this.allReelWins5 = this.elementsList["allReelWins5"];
        this.cap = this.elementsList["cap"];

        this.removedSymbArr = [];
        this.removedSymbArr.push({ key: "L5", value: this.clubs }, { key: "L4", value: this.daimond }, { key: "L3", value: this.spade }, { key: "L2", value: this.heart }, { key: "L1", value: this.beer }, { key: "H4", value: this.cap });

        this.allReelWinsMuliplierArr = [{ key: 2, value: this.allReelWins2 }, { key: 3, value: this.allReelWins3 }, { key: 5, value: this.allReelWins5 }];

        this.initiateView();
        CoreLib.EventHandler.addEventListener("ON_MAN_AND_DICE_HIDE_COMPLETED", this.showWinningElement.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_REMOVED_SYMBOL_IN_REMOVEDBG", this.unfinishedRemovedSymbolInBg.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_FINAL_SYMBOLS_ON_BG", this.removedSymbolInUnfinished.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_ALL_WINS_MULTIPLIER", this.showUnfinishedAllWinsMultiplier.bind(this));

        this.removedSymbolIndexArr = [];

    }

    initiateView() {
        this.removedSymbolIndexArr = [];
        this.removedBoxbg.visible = false;
        //level1
        this.clubs.visible = false;
        this.allReelWins2.visible = false;
        this.daimond.visible = false;
        //level2
        this.spade.visible = false;
        this.allReelWins3.visible = false;
        this.heart.visible = false;
        //level3
        this.beer.visible = false;
        this.allReelWins5.visible = false;
        this.cap.visible = false;
    }

    showWinningElement(value) {
        this.element = UIUtil.getSprite(this.configData.data[value].image);
        this.addChild(this.element);
        this.element.anchor.set(0.5, 0.5);
        this.element.x = this.guideRect.width / 2 + 40;
        this.element.y = this.guideRect.height / 2;
        this.element.scale.set(1);
        if (xBetArr.includes(value)) {
            CoreLib.EventHandler.dispatchEvent("PLAY_X_BET_SOUND");
            CoreLib.EventHandler.dispatchEvent("UPDATE_TOTAL_WIN_WITH_MULTIPLIER_X_BET");
            this.emit("PLAY_COIN_ANIMATION");
        }
        if (mysteriesArr.includes(value)) {
            CoreLib.EventHandler.dispatchEvent("PLAY_MYSTERY_ADDED_SOUND");
            CoreLib.EventHandler.dispatchEvent("SHOW_RANDOM_MYSTERIES_ON_REEL");
        }
        if (wildArr.includes(value)) {
            CoreLib.EventHandler.dispatchEvent("PLAY_JOCKEY_WILD_PLACEMENT_SOUND");
            CoreLib.EventHandler.dispatchEvent("SHOW_RANDOM_WILDS_ON_REEL");
        }
        if (value >= 54) {
            CoreLib.EventHandler.dispatchEvent("PLAY_BIG_MONEY_TROPHY_HEIGHTLIGHT_SOUND");
        }
        if (wildArr.includes(value) || mysteriesArr.includes(value)) {
            CoreLib.AnimationManager.animateTween(this.element, 0.5, { scaleX: 1.1, scaleY: 1.1, repeat: 9, yoyo: true, onComplete: this.onAnimDone.bind(this, value) });
        } else {
            CoreLib.AnimationManager.animateTween(this.element, 0.5, { scaleX: 1.1, scaleY: 1.1, repeat: 4, yoyo: true, onComplete: this.onAnimDone.bind(this, value) });
        }
    }



    onAnimDone(value) {
        if (xBetArr.includes(value)) {
            CoreLib.EventHandler.dispatchEvent("STOP_X_BET_SOUND");
            this.emit("STOP_COIN_ANIMATION");
        }
        if (value >= 54) {
            setTimeout(() => {
                CoreLib.EventHandler.dispatchEvent("SHOW_BIG_MONEY_TRIGGERED_ANIM");
            }, 5000);
        }
        CoreLib.EventHandler.dispatchEvent("WINNING_ELEMENT_ANIM_DONE");
        this.destroyWinningElement();
    }

    destroyWinningElement() {
        this.element.destroy();
        this.showDestroyedElementInRemovedBox();
        this.showAllReelWinMultiplier();
    }

    removedSymCordDecider(len) {
        let val = [];
        switch (len) {
            case 1:
                val = _1RemovedSymb;
                break;
            case 2:
                val = _2RemovedSymb;
                break;
            case 3:
                val = _3RemovedSymb;
                break;
            case 4:
                val = _4RemovedSymb;
                break;
            case 5:
                val = _5RemovedSymb;
                break;
            case 6:
                val = _6RemovedSymb;
                break;
            default:
                break;
        }
        return val;
    }

    showDestroyedElementInRemovedBox() {
        let data = slotModel.getFeatureData();
        this.totalGreenDiceCount = data.totalNumberOfHopsByGreen;
        //level1
        if (this.totalGreenDiceCount == 4) {
            this.removedBoxbg.visible = true;
            CoreLib.EventHandler.dispatchEvent("PLAY_ELEMENT_REMOVED_BOX_ADDED_SOUND");
            this.clubs.visible = true;
            this.removedSymbolIndexArr.push(this.clubs);
            let len = this.removedSymbolIndexArr.length;
            let path = this.removedSymCordDecider(len);
            this.repositionRemovedElem(path);
        }
        if (this.totalGreenDiceCount == 16) {
            if (this.removedBoxbg.visible == true) {
                this.daimond.visible = true;
                this.removedSymbolIndexArr.push(this.daimond);
                let len = this.removedSymbolIndexArr.length;
                let path = this.removedSymCordDecider(len);
                this.repositionRemovedElem(path);
            } else {
                this.removedBoxbg.visible = true;
                CoreLib.EventHandler.dispatchEvent("PLAY_ELEMENT_REMOVED_BOX_ADDED_SOUND");
                this.daimond.visible = true;
                this.removedSymbolIndexArr.push(this.daimond);
                let len = this.removedSymbolIndexArr.length;
                let path = this.removedSymCordDecider(len);
                this.repositionRemovedElem(path);
            }
        }
        //level2
        if (this.totalGreenDiceCount == 22) {
            if (this.removedBoxbg.visible == true) {
                this.spade.visible = true;
                this.removedSymbolIndexArr.push(this.spade);
                let len = this.removedSymbolIndexArr.length;
                let path = this.removedSymCordDecider(len);
                this.repositionRemovedElem(path);
            } else {
                this.removedBoxbg.visible = true;
                CoreLib.EventHandler.dispatchEvent("PLAY_ELEMENT_REMOVED_BOX_ADDED_SOUND");
                this.spade.visible = true;
                this.removedSymbolIndexArr.push(this.spade);
                let len = this.removedSymbolIndexArr.length;
                let path = this.removedSymCordDecider(len);
                this.repositionRemovedElem(path);
            }
        }
        if (this.totalGreenDiceCount == 34) {
            if (this.removedBoxbg.visible == true) {
                this.heart.visible = true;
                this.removedSymbolIndexArr.push(this.heart);
                let len = this.removedSymbolIndexArr.length;
                let path = this.removedSymCordDecider(len);
                this.repositionRemovedElem(path);
            } else {
                this.removedBoxbg.visible = true;
                CoreLib.EventHandler.dispatchEvent("PLAY_ELEMENT_REMOVED_BOX_ADDED_SOUND");
                this.heart.visible = true;
                this.removedSymbolIndexArr.push(this.heart);
                let len = this.removedSymbolIndexArr.length;
                let path = this.removedSymCordDecider(len);
                this.repositionRemovedElem(path);
            }
        }
        //level3
        if (this.totalGreenDiceCount == 40) {
            if (this.removedBoxbg.visible == true) {
                this.beer.visible = true;
                this.removedSymbolIndexArr.push(this.beer);
                let len = this.removedSymbolIndexArr.length;
                let path = this.removedSymCordDecider(len);
                this.repositionRemovedElem(path);
            } else {
                this.removedBoxbg.visible = true;
                CoreLib.EventHandler.dispatchEvent("PLAY_ELEMENT_REMOVED_BOX_ADDED_SOUND");
                this.beer.visible = true;
                this.removedSymbolIndexArr.push(this.beer);
                let len = this.removedSymbolIndexArr.length;
                let path = this.removedSymCordDecider(len);
                this.repositionRemovedElem(path);
            }
        }
        if (this.totalGreenDiceCount == 52) {
            if (this.removedBoxbg.visible == true) {
                this.cap.visible = true;
                this.removedSymbolIndexArr.push(this.cap);
                let len = this.removedSymbolIndexArr.length;
                let path = this.removedSymCordDecider(len);
                this.repositionRemovedElem(path);
            } else {
                this.removedBoxbg.visible = true;
                CoreLib.EventHandler.dispatchEvent("PLAY_ELEMENT_REMOVED_BOX_ADDED_SOUND");
                this.cap.visible = true;
                this.removedSymbolIndexArr.push(this.cap);
                let len = this.removedSymbolIndexArr.length;
                let path = this.removedSymCordDecider(len);
                this.repositionRemovedElem(path);
            }
        }
    }

    repositionRemovedElem(cordArr) {
        for (let i = 0; i < cordArr.length; i++) {
            this.removedSymbolIndexArr[i].scale.x = cordArr[i].scale.x;
            this.removedSymbolIndexArr[i].scale.y = cordArr[i].scale.y;
            this.removedSymbolIndexArr[i].x = cordArr[i].x;
            this.removedSymbolIndexArr[i].y = cordArr[i].y;
        }
    }

    unfinishedRemovedSymbolInBg() {
        let data = slotModel.getFeatureData();
        let removedSymb = data.symbolsRemoved;
        CoreLib.EventHandler.dispatchEvent("SHOW_REMOVED_SYMB_ON_BG", removedSymb);
    }

    removedSymbolInUnfinished(symb) {
        this.removedBoxbg.visible = true;
        for (let i = 0; i < this.removedSymbArr.length; i++) {
            if (this.removedSymbArr[i].key === symb.name) {
                this.removedSymbArr[i].value.visible = true;
                this.removedSymbolIndexArr.push(this.removedSymbArr[i].value);
                let len = this.removedSymbolIndexArr.length;
                let path = this.removedSymCordDecider(len);
                this.repositionRemovedElem(path);
                break; // Exit the loop once the value is found
            }
        }
    }

    showAllReelWinMultiplier() {
        let data = slotModel.getFeatureData();
        this.totalGreenDiceCount = data.totalNumberOfHopsByGreen;
        //level1
        if (this.totalGreenDiceCount == 11) {
            this.allReelWins2.visible = true;
        }
        //level2
        if (this.totalGreenDiceCount == 29) {
            this.allReelWins2.visible = false;
            this.allReelWins3.visible = true;
        }
        //level3
        if (this.totalGreenDiceCount == 47) {
            this.allReelWins3.visible = false;
            this.allReelWins5.visible = true;
        }
    }

    showUnfinishedAllWinsMultiplier() {
        let arr = slotModel.featureResult.featureResults;
        let index = arr[0].awards.length - 1;
        let awardType = arr[0].awards[index];
        for (let i = 0; i < this.allReelWinsMuliplierArr.length; i++) {
            if (this.allReelWinsMuliplierArr[i].key === (awardType.allWinsMultiplier)) {
                this.allReelWinsMuliplierArr[i].value.visible = true;
            }
        }
    }


}