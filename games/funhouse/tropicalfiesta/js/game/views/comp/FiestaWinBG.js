import {SlotBigWinComp} from "../../../../../../../../slot_core/corelib/views/containers/SlotBigWinComp";
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib";
import {slotModel} from "../../../../../../../../slot_core/corelib/models/SlotModel";
import {LibContainer} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibContainer";

export class FiestaWinBG extends LibContainer {
    constructor(config) {
        super(config);
        this.bg = this.elementsList["bg"];
        this.inner = this.elementsList["inner"];
        this.outer = this.elementsList["outer"];

    }

    playAnimation() {
        this.inner.alpha = 1;
        this.outer.alpha = 1;
        CoreLib.AnimationManager.animateTween(this.inner, 0.25, {alpha : 0, repeat : -1, yoyo: true});
        CoreLib.AnimationManager.animateTween(this.outer, 0.25, {delay:  0.25, alpha : 0, repeat : -1, yoyo: true});
    }
    stopAnimation () {
        CoreLib.AnimationManager.killTweensOf(this.inner);
        CoreLib.AnimationManager.killTweensOf(this.outer);
    }




};
