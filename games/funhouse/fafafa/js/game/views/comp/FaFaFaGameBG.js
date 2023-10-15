import {GameBGComp} from "../../../../../../../../slot_core/corelib/views/containers/GameBGComp";
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib";
import {slotModel} from "../../../../../../../../slot_core/corelib/models/SlotModel";

export class FaFaFaGameBG extends GameBGComp {
    constructor(config) {
        super(config);
        this.fireworks = this.elementsList["fireworks"];
    }

    showMaingameBG (fadein = true) {
        super.showMaingameBG(fadein);
        this.addChild(this.fireworks);
    }
    showFreegameBG (fadein = true) {
        super.showFreegameBG(fadein);
        this.addChild(this.fireworks);
    }

};
