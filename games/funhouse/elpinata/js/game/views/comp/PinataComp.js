import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib";
import {LibContainer} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibContainer";

export class PinataComp extends LibContainer {
    constructor(config) {
        super(config);
        this.animation = CoreLib.UIUtil.getSpineAnim("effects", {defaultState: "PinataBlast", loop: true});
        this.animation.y = 0;
        this.addChild(this.animation);
        this.animation.stopAnimation();

    }

    showWin () {
        this.animation.playAnimation("PinataBlast", false);
    }

    reset() {
        this.animation.playAnimation("PinataBlast", false);
        this.animation.stopAnimation();
    }




};
