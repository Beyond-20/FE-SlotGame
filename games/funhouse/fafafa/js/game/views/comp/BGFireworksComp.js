import {LibContainer} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibContainer";
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib";

const totalStars = 6;
export class BGFireworksComp extends LibContainer {
    constructor(config) {
        super(config);
        this.star1 = this.elementsList["star1"];
        this.star2 = this.elementsList["star2"];
        this.star3 = this.elementsList["star3"];
        this.star4 = this.elementsList["star4"];
        this.star5 = this.elementsList["star5"];
        this.star6 = this.elementsList["star6"];

        for (let k = 1; k <= totalStars; k++) {
            this["star" + k].stopAnimation();
            this["star" + k].visible = false;
        }

        this.star1.onComplete = this.onStarAnimComplete.bind(this, this.star1);
        this.star2.onComplete = this.onStarAnimComplete.bind(this, this.star2);
        this.star3.onComplete = this.onStarAnimComplete.bind(this, this.star3);
        this.star4.onComplete = this.onStarAnimComplete.bind(this, this.star4);
        this.star5.onComplete = this.onStarAnimComplete.bind(this, this.star5);
        this.star6.onComplete = this.onStarAnimComplete.bind(this, this.star6);
        this.isAnimationOn = false;
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.SHOW_MAINGAME_BG, this.hideFireworks.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.SHOW_FREEGAME_BG, this.showFireworks.bind(this));
    }

    showFireworks () {
        this.isAnimationOn = true;
        for (let k = 1; k <= totalStars; k++) {
            this["star" + k].visible = true;
            setTimeout(this.onStarAnimComplete.bind(this, this["star" + k], k * Math.random() * 1000));
        }
    }

    hideFireworks () {
        this.isAnimationOn = false;
    }

    onStarAnimComplete (star) {
        if (this.isAnimationOn) {
            star.x = Math.random() * CoreLib.UIUtil.getGameWidth();
            star.y = Math.random() * 400;
            star.scale.set(Math.random())
            star.playAnimation(false);
        } else {
            star.stopAnimation();
            star.visible = false;
        }

    }


};
