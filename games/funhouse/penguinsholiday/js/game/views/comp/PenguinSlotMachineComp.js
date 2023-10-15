import { SlotMachineComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotMachineComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";

export class PenguinSlotMachineComp extends SlotMachineComp {
    constructor(config) {
        super(config);
        this.gamelogo = this.elementsList["gamelogo"];
    }

    resizeViewComponents() {
        let layoutData = this.getLayoutData();
        super.resizeViewComponents();
        if (CoreLib.Model.DeviceConfig.isDesktop) {
        } else {
            if (CoreLib.Model.DeviceConfig.isTablet) {
                if (CoreLib.Model.DeviceConfig.isPortrait) {
                    if (this.gamelogo) {
                        this.gamelogo.scale.set(this.gamelogo.configData.tabScale);
                        this.gamelogo.position.x = this.gamelogo.configData.tabX;
                    }
                }
                else {
                    if (this.gamelogo) {
                        this.gamelogo.scale.set(this.gamelogo.configData.scale);
                        this.gamelogo.position.x = this.gamelogo.configData.x;
                    }
                }
            }
        }

    }

};
