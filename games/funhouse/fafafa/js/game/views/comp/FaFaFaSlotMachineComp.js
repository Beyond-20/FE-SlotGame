import {SlotMachineComp} from "../../../../../../../../slot_core/corelib/views/containers/SlotMachineComp";
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib";
import {slotModel} from "../../../../../../../../slot_core/corelib/models/SlotModel";

export class FaFaFaSlotMachineComp extends SlotMachineComp {
    constructor(config) {
        super(config);
        this.buyBonusBtn = this.elementsList["buyBonusBtn"];


    }

    resizeViewComponents () {
        super.resizeViewComponents();
        if (this.buyBonusBtn) {
            CoreLib.UIUtil.setPositionBasedOnDevice(this.buyBonusBtn);
        }

    }

};
