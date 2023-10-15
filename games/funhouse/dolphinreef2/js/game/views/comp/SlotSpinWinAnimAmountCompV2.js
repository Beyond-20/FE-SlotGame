import { SlotSpinWinAnimAmountComp } from "../../../../../../../../slot_core/corelib/views/comps/SlotSpinWinAnimAmountComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { SlotEvents } from "../../../../../../../../slot_core/corelib/events/SlotEvents";

export class SlotSpinWinAnimAmountCompV2 extends SlotSpinWinAnimAmountComp {
    constructor(config) {
        super(config);
    }

    onScoreDone() {
        this.winText.text = CoreLib.WrapperService.formatCurrency(this.totalWin);
        this.emit("WinAmountFinalValueShown");
        CoreLib.EventHandler.dispatchEvent(SlotEvents.NORMAL_WIN_COUNTUP_DONE);
        clearTimeout(this.timeoutId);
        // this.timeoutId = setTimeout(this.notifyEnd.bind(this), 1000);
        this.timeoutId = CoreLib.AnimationManager.animateTween(this.winText, 0.5, { scaleX: 1.2, scaleY: 1.2, repeat: 2, yoyo: true, delay: 0.5, onComplete: this.notifyEnd.bind(this) });
    }
};
