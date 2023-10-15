import {LibContainer} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibContainer";
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib";

export class CoinShowerAnims extends LibContainer {
    constructor(config) {
        super(config);

        this.element1 = this.elementsList["element1"];
        this.element2 = this.elementsList["element2"];
        this.element3 = this.elementsList["element3"];
        this.element4 = this.elementsList["element4"];
        this.element5 = this.elementsList["element5"];
        this.element1.onComplete = this.onAnimComplete.bind(this);
        this.element2.onComplete = this.onAnimComplete.bind(this);
        this.element3.onComplete = this.onAnimComplete.bind(this);
        this.element4.onComplete = this.onAnimComplete.bind(this);
        this.element5.onComplete = this.onAnimComplete.bind(this);
        
        this.hideAll();
        CoreLib.EventHandler.addEventListener("PLAY_EXPANDING_COINSHOWER", this.playElements.bind(this));

    }

    onAnimComplete (evt) {
        this.playIndex++;
        if (this.playIndex == this.totalPlayable) {
            CoreLib.EventHandler.dispatchEvent("COINSHOWER_TRANSITION_COMPLETED");
        }
    }

    playElements (arr) {
        this.playIndex = 0;
        this.totalPlayable = arr.length;
        for (let k = 0; k < this.totalPlayable; k++) {
            this["element" + (arr[k] + 1)].visible = true;
            this["element" + (arr[k] + 1)].playAnimation(false);
        }

    }


    hideAll () {
        this.element1.stopAnimation();
        this.element1.visible = false;
        this.element2.stopAnimation();
        this.element2.visible = false;
        this.element3.stopAnimation();
        this.element3.visible = false;
        this.element4.stopAnimation();
        this.element4.visible = false;
        this.element5.stopAnimation();
        this.element5.visible = false;
    }

};
