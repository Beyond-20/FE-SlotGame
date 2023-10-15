import { SlotBigWinComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotBigWinComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { LibView } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView";
import { PARTICLE_CONFIG } from "../../config/views/ParticleConfig";

export class GameResizeComp extends LibView {
    constructor(config) {
        super(config);
    }

    resizeViewComponents() {
        super.resizeViewComponents();
        this.resizeChildren();
    }


};
