import {LibContainer} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibContainer";
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib";

export class FaBatIcons extends LibContainer {
    constructor(config) {
        super(config);

        this.batIcon1 = this.elementsList["batIcon1"];
        this.batIcon2 = this.elementsList["batIcon2"];
        this.batIcon3 = this.elementsList["batIcon3"];
        this.batIcon4 = this.elementsList["batIcon4"];
        this.batIcon5 = this.elementsList["batIcon5"];
        this.batIcon1.addEventListener("complete", this.onAnimComplete.bind(this));
        this.batIcon2.addEventListener("complete", this.onAnimComplete.bind(this));
        this.batIcon3.addEventListener("complete", this.onAnimComplete.bind(this));
        this.batIcon4.addEventListener("complete", this.onAnimComplete.bind(this));
        this.batIcon5.addEventListener("complete", this.onAnimComplete.bind(this));
        
        this.hideAll();
        CoreLib.EventHandler.addEventListener("PLAY_BATICONS", this.playBatIcons.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.UPDATE_UI_FOR_FS_END, this.hideBatIcons.bind(this));

    }

    onAnimComplete (evt) {
        this.playIndex++;
        if (this.playIndex == 5) {
            CoreLib.EventHandler.dispatchEvent("BAT_TRANSITION_COMPLETED");
        }
    }

    playBatIcons () {
        this.playIndex = 0;
        this.batIcon1.visible = true;
        this.batIcon2.visible = true;
        this.batIcon3.visible = true;
        this.batIcon4.visible = true;
        this.batIcon5.visible = true;
        setTimeout(this.playAnimToHide.bind(this), 0);
    }

    playAnimToHide () {
        this.batIcon1.playAnimation();
        this.batIcon2.playAnimation();
        this.batIcon3.playAnimation();
        this.batIcon4.playAnimation();
        this.batIcon5.playAnimation();
    }

    hideAll () {
        this.batIcon1.stopAnimation();
        this.batIcon1.visible = false;
        this.batIcon2.stopAnimation();
        this.batIcon2.visible = false;
        this.batIcon3.stopAnimation();
        this.batIcon3.visible = false;
        this.batIcon4.stopAnimation();
        this.batIcon4.visible = false;
        this.batIcon5.stopAnimation();
        this.batIcon5.visible = false;
        this.batIcon1.alpha = 1;
        this.batIcon2.alpha = 1;
        this.batIcon3.alpha = 1;
        this.batIcon4.alpha = 1;
        this.batIcon5.alpha = 1;
    }
    hideBatIcons () {
        CoreLib.AnimationManager.animateTween(this.batIcon1, 0.5, {alpha : 0})
        CoreLib.AnimationManager.animateTween(this.batIcon2, 0.5, {alpha : 0})
        CoreLib.AnimationManager.animateTween(this.batIcon3, 0.5, {alpha : 0})
        CoreLib.AnimationManager.animateTween(this.batIcon4, 0.5, {alpha : 0})
        CoreLib.AnimationManager.animateTween(this.batIcon5, 0.5, {alpha : 0, onComplete : this.hideAll.bind(this)});
    }

};
