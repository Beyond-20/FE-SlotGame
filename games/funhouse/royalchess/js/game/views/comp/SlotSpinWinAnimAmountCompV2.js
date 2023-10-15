import { SlotSpinWinAnimAmountComp } from "../../../../../../../../slot_core/corelib/views/comps/SlotSpinWinAnimAmountComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";

export class SlotSpinWinAnimAmountCompV2 extends SlotSpinWinAnimAmountComp {
    constructor(config) {
        super(config);

    }

    showWin(val, level = 0, callback = null) {
        super.showWin(val, level = 0, callback = null);
        CoreLib.EventHandler.dispatchEvent("SHOW_STONE_ANIM");
    }



};
