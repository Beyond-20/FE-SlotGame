import {LibContainer} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibContainer";
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib";

export class FaFSReelTransition extends LibContainer {
    constructor(config) {
        super(config);

        this.ts1 = this.elementsList["ts1"];
        this.ts2 = this.elementsList["ts2"];
        this.ts3 = this.elementsList["ts3"];
        this.ts4 = this.elementsList["ts4"];
        this.ts5 = this.elementsList["ts5"];

        this.ts1.addEventListener("complete", this.onAnimComplete.bind(this));
        this.ts2.addEventListener("complete", this.onAnimComplete.bind(this));
        this.ts3.addEventListener("complete", this.onAnimComplete.bind(this));
        this.ts4.addEventListener("complete", this.onAnimComplete.bind(this));
        this.ts5.addEventListener("complete", this.onAnimComplete.bind(this));

        this.hideAll();
        CoreLib.EventHandler.addEventListener("PLAY_SCATTER_TRIGGER_DRAGONS", this.playScatterTrigger.bind(this));

    }

    onAnimComplete (evt) {
        this.playIndex++;
        if (this.playIndex == 5) {
            this.hideAll();
            CoreLib.EventHandler.dispatchEvent("DRAGON_TRANSITION_COMPLETED");
        }
    }

    playScatterTrigger () {
        this.playIndex = 0;
        this.ts1.visible = true;
        this.ts2.visible = true;
        this.ts3.visible = true;
        this.ts4.visible = true;
        this.ts5.visible = true;
        CoreLib.UIUtil.fadeInElement(this.ts1, null, 0);
        CoreLib.UIUtil.fadeInElement(this.ts2, null, 0.1);
        CoreLib.UIUtil.fadeInElement(this.ts3, null, 0.2);
        CoreLib.UIUtil.fadeInElement(this.ts4, null, 0.3);
        CoreLib.UIUtil.fadeInElement(this.ts5, null, 0.4);
        setTimeout(this.playAnimToHide.bind(this), 1000);
    }

    playAnimToHide () {
        this.ts1.playAnimation();
        this.ts2.playAnimation();
        this.ts3.playAnimation();
        this.ts4.playAnimation();
        this.ts5.playAnimation();
    }

    hideAll () {
        this.ts1.stopAnimation();
        this.ts1.visible = false;
        this.ts2.stopAnimation();
        this.ts2.visible = false;
        this.ts3.stopAnimation();
        this.ts3.visible = false;
        this.ts4.stopAnimation();
        this.ts4.visible = false;
        this.ts5.stopAnimation();
        this.ts5.visible = false;
    }

};
