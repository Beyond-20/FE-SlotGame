import { LibView } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";

const MaxCounter = 1;

export class MysteryTransformSymbol extends LibView {
    constructor(config) {
        super(config);
        this.symbol1 = CoreLib.UIUtil.getSprite(this.configData.initiateSymbol);
        this.addChild(this.symbol1);
        this.symbol1.anchor.set(0.5, 0.5);

        this.symbol2 = CoreLib.UIUtil.getSprite(this.configData.finalSymbol);
        this.addChild(this.symbol2);
        this.symbol2.anchor.set(0.5, 0.5);
        this.symbol2.scaleX = 0;
        this.symbol2.visible = false;
        this.animDuration = 0.16;
        this.startSpinning();
    }

    startSpinning() {
        this.counter = 0;
        CoreLib.EventHandler.dispatchEvent("PLAY_MYSTERY_TRANSFORM_SOUND");
        CoreLib.AnimationManager.animateTween(this.symbol1, this.animDuration, { scaleX: 0, onComplete: this.onSymbol1FullHidden.bind(this) });
    }
    onSymbol1FullHidden() {
        this.counter++;
        this.symbol1.visible = false;
        this.symbol2.visible = true;
        if (this.counter == MaxCounter) {
            this.symbol1.visible = false;
            this.symbol2.visible = true;
            let symbol = CoreLib.UIUtil.getSprite(this.configData.finalSymbol);
            this.addChild(symbol);
            symbol.visible = true;
            symbol.anchor.set(0.5, 0.5);
            CoreLib.AnimationManager.animateTween(symbol, 0.2, { scaleX: 1, onComplete: this.notifyEnd.bind(this) });
        }
    }

    notifyEnd() {
        this.emit("OnMysterySpinningCompleted", this);
    }

}