import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";
import { ReelSlotSymbol } from "../../../../../../../../slot_core/corelib/views/slotmachine/ReelSlotSymbol";
const reelPositionMap = [
    { "reel": 0, "row": 0 },
    { "reel": 1, "row": 0 },
    { "reel": 2, "row": 0 },
    { "reel": 3, "row": 0 },
    { "reel": 4, "row": 0 },
    { "reel": 0, "row": 1 },
    { "reel": 1, "row": 1 },
    { "reel": 2, "row": 1 },
    { "reel": 3, "row": 1 },
    { "reel": 4, "row": 1 },
    { "reel": 0, "row": 2 },
    { "reel": 1, "row": 2 },
    { "reel": 2, "row": 2 },
    { "reel": 3, "row": 2 },
    { "reel": 4, "row": 2 },
]

export class ReelSlotSymbolV2 extends ReelSlotSymbol {
    constructor(val, symbname) {
        super(val, symbname);
    }

    showLandingAnimation() {
        let anim = CoreLib.Model.GameConfig.symbolsData[this.symbolNumber].landingAnimation;
        if (this.winSymbol) {
            this.removeChild(this.winSymbol);
            this.winSymbol.destroy();
            this.winSymbol = null;
        }
        if (anim) {
            this.winSymbol = CoreLib.UIUtil.getAnimatedSprite(anim);
            this.addChild(this.winSymbol);
            this.winSymbol.loop = false;
            this.winSymbol.play();
            //base game spin result
            let data = slotModel.getSlotGameResult();
            let scatterPos = data.scatterPositions;
            if (data.scatterMultiplier > 1 && scatterPos.length > 0) {
                let convertedPos = this.convertPosition(scatterPos);
                if (convertedPos.length > 0) {
                    CoreLib.EventHandler.dispatchEvent("PLAY_CHEST_OPEN_SOUND");
                    CoreLib.EventHandler.dispatchEvent("SHOW_SCATTER_MULTIPLIER", convertedPos);
                }
            }
            //fs spin Result
            if (slotModel.getIsFreespinSession == true) {
                let fsResult = slotModel.getFeatureData();
                let index = fsResult[0].spinResults.length - 1;
                let spinresult = fsResult[0].spinResults[index];
                let fsScatterPos = spinresult.scatterPositions;
                let fsScatterMulti = spinresult.scatterMultiplier;
                if (fsScatterPos.length > 0 && fsScatterMulti > 1) {
                    let convertedPos = this.convertPosition(fsScatterPos);
                    if (convertedPos.length > 0) {
                        CoreLib.EventHandler.dispatchEvent("PLAY_CHEST_OPEN_SOUND");
                        CoreLib.EventHandler.dispatchEvent("SHOW_SCATTER_MULTIPLIER", convertedPos);
                    }
                }
            }
            this.winSymbol.onComplete = this.onLandingDone.bind(this);
            this.symbol.visible = false;
        }
    }

    convertPosition(arr) {
        let result = [];
        let len = arr.length;
        for (let k = 0; k < len; k++) {
            result.push(reelPositionMap[arr[k]]);
        }
        return result;
    }

};
