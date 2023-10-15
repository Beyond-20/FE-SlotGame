import { SlotMachineComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotMachineComp";
import { LibParticleComp } from "../../../../../../../../slot_core/corelib/views/comps/LibParticleComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";
import {PARTICLE_CONFIG} from "../../config/views/ParticleConfig";

export class GameSlotMachineComp extends SlotMachineComp {
    constructor(config) {
        super(config);
        this.gamelogoL = this.elementsList["gamelogoL"];
        this.gameLogo = this.elementsList["gamelogo"];


    }

    onInitialViewCreated() {
        super.onInitialViewCreated();
    }


    resizeViewComponents() {
        super.resizeViewComponents();
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.gamelogo.visible = true;
                this.gamelogoL.visible = false;
            } else {
                this.gamelogo.visible = false;
                if (this.gamelogoL.width * 0.4 * this.scale.x > this.x) {
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
