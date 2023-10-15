import { PaytablePage } from "../../../../../../../../slot_core/corelib/views/comps/PaytablePage";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";

export class PaytablePageV2 extends PaytablePage {
    constructor(config) {
        super(config);
        this.winUptoText = this.elementsList["winUptoText"];
        if (this.winUptoText) {
            let data = slotModel.getGameInitData();
            if (data.maximumWinUpto != undefined) {
                let str = CoreLib.Util.parseMessage(CoreLib.Util.getContent("winUptoText"), [data.maximumWinUpto]);
                this.winUptoText.text = str;
            }
        }
    }
}
