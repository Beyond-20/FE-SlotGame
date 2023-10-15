import { SlotGameView } from "../../../../../../../slot_core/corelib/views/layoutcomps/SlotGameView";
import { View } from "../../../../../../../slot_core/corelib/views/GameView";
import { CoreLib } from "../../../../../../../slot_core/corelib/core/CoreLib";

export class GameView extends SlotGameView {
    constructor(config) {
        super(config);
        setTimeout(this.checkSlotDepth.bind(this), 500);
    }

    checkSlotDepth() {
        let gameview = View.getSlotGameView();
        if (gameview) {
            for (const p in gameview.children) {
                if (gameview.children[p].name == "slotMachineComp") {
                    CoreLib.Model.GameConfig.slotMachineDepth = p;
                }
            }
        }
    }

}

