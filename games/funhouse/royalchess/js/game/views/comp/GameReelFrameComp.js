import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { LibView } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView";

const reel_1x3 = ["reel_1x3_static", "reel_1x3_to_1x4"];
const reel_1x4 = ["reel_1x4_static", "reel_1x4_to_1x4"];

export class GameReelFrameComp extends LibView {
    constructor(config) {
        super(config);
        this.gameReelFrame = this.elementsList["gameReelFrame"];
        CoreLib.EventHandler.addEventListener("SHOW_FS_REELFRAME", this.showFSReelFrame.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_INITIAL_REELFRAME", this.showInitialReel.bind(this));

        this.showInitialReel();
    }

    showInitialReel() {
        this.gameReelFrame.playAnimation("reel_1x3_static", false);
    }

    showFSReelFrame(){
        this.gameReelFrame.playAnimation("reel_1x3_to_1x4", false);
        setTimeout(() => {
            this.gameReelFrame.playAnimation("reel_1x4_static", false);
            CoreLib.EventHandler.dispatchEvent("FS_REELFRAME_ANIMATION_DONE");
        }, 500);
    }

}
