import { PopupComp } from "../../../../../../../../slot_core/corelib/views/comps/PopupComp"
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";

export class PopupCompV2 extends PopupComp {
    constructor(config) {
        super(config);

    }

    onOKClicked () {
        CoreLib.EventHandler.dispatchEvent("STOP_DOLPHIN_ANIM");
        this.okBtn.setEnabled(false);
        if (this.callback != undefined) {
            this.callback();
            this.callback = undefined;
        }
    }
}
