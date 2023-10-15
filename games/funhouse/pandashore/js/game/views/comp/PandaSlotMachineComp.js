import { SlotMachineComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotMachineComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";

export class PandaSlotMachineComp extends SlotMachineComp {
    constructor(config) {
        super(config);
        this.gamelogo = this.elementsList["gamelogo"];
    }

    resizeViewComponents() {
        super.resizeViewComponents();
        if (CoreLib.Model.DeviceConfig.isDesktop) {
        } else {
            if (CoreLib.Model.DeviceConfig.isTablet) {
                if (this.gamelogo) {
                    this.gamelogo.scale.set(1.5);
                    this.gamelogo.position.x = this.gamelogo.configData.tabx;
                    this.gamelogo.position.y = this.gamelogo.configData.ly;
                }
            }
        }

    }

};
