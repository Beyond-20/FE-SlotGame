import { SlotMachineComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotMachineComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";


export class GameSlotMachineComp extends SlotMachineComp {
    constructor(config) {
        super(config);
        this.gamelogo = this.elementsList["gamelogo"];
        this.gamelogoL = this.elementsList["gamelogoL"];
    }



    resizeViewComponents() {
        super.resizeViewComponents();
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.gamelogo.visible = true;
                this.gamelogoL.visible = false;
            } else {
                this.gamelogo.visible = false;
                if (this.gamelogoL.width * 0.35 * this.scale.x > this.x) {
                    this.gamelogoL.visible = false;
                } else {
                    this.gamelogoL.visible = true;
                }

            }

        } else {
            this.gamelogo.visible = true;
            this.gamelogoL.visible = false;
        }
    }

};
