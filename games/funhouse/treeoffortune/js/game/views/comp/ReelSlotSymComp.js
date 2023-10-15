import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { ReelSlotSymbol } from "../../../../../../../../slot_core/corelib/views/slotmachine/ReelSlotSymbol";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";

export class ReelSlotSymComp extends ReelSlotSymbol {
    constructor(val, symbname) {
        super(val, symbname);
    }
    showLandingAnimation(reelno) {
        let value = slotModel.getSlotGameResult().reelView;
        if (value[reelno - 1][0] != "BL") {
            let anim1 = CoreLib.Model.GameConfig.symbolsData[this.symbolNumber].landingWildAnimation;
            let anim2 = CoreLib.Model.GameConfig.symbolsData[this.symbolNumber];
            if (anim1.type === "Spine") {
                this.winSymbol = CoreLib.UIUtil.getSpineAnim(anim2.spineName);
                this.winSymbol.playAnimation(anim2.winAnimation, anim1.loop == undefined ? true : anim1.loop);
                this.addChild(this.winSymbol);
                if (anim2.scale || anim2.scale.x) {
                    this.winSymbol.scale.x = anim2.scale || anim2.scale.x;
                }
                if (anim2.scale || anim2.scale.y) {
                    this.winSymbol.scale.y = anim2.scale || anim2.scale.y;
                }
                this.winSymbol.onComplete = this.onLandingDone.bind(this);
                this.symbol.visible = false;
                CoreLib.EventHandler.dispatchEvent("START_COIN_ANIMATION", reelno);
            }
        }
    }
};
