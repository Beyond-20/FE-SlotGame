import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { SlotSplashComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotSplashComp";

export class GameSplashComp extends SlotSplashComp {
    constructor(config) {
        super(config);
        CoreLib.EventHandler.dispatchEvent("PLAY_RACETRACK_MEGABOARD_SOUND");
    }
};
