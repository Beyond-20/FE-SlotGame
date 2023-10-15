import { LibView } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";

const symbolsData = ["WD", "H1", "H2", "H3", "H4", "L1", "L2", "L3", "L4", "L5", "FG"];
const MaxCounter = 8;

export class SpinWinSymbol extends LibView {
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
        this.animDuration = 0.10;
        this.startSpinning();
    }

    startSpinning() {
        this.counter = 0;
        CoreLib.AnimationManager.animateTween(this.symbol1, this.animDuration, { scaleX: 0, onComplete: this.onSymbol1FullHidden.bind(this) });
    }
    onSymbol1FullHidden() {
        this.counter++;
        this.symbol1.visible = false;
        this.symbol1.texture = CoreLib.UIUtil.getTexture(symbolsData[CoreLib.Util.getRandomRange(0, symbolsData.length - 1)]);
        this.symbol2.visible = true;
        CoreLib.AnimationManager.animateTween(this.symbol2, this.animDuration, { scaleX: 1, onComplete: this.onSymbol2AnimationFullShown.bind(this) });
        if (this.counter == MaxCounter) {
            this.symbol1.visible = false;
            this.symbol2.visible = false;
            let symbol = CoreLib.UIUtil.getSprite(this.configData.finalSymbol);
            this.addChild(symbol);
            symbol.visible = true;
            symbol.anchor.set(0.5, 0.5);
            CoreLib.AnimationManager.animateTween(symbol, 0.2, { scaleX: 1, onComplete: this.notifyEnd.bind(this) });
        }
    }

    onSymbol2AnimationFullShown() {
        CoreLib.AnimationManager.animateTween(this.symbol2, this.animDuration, { scaleX: 0, onComplete: this.onSymbol2FullHidden.bind(this) });
    }
    onSymbol2FullHidden() {
        this.symbol1.visible = true;
        CoreLib.AnimationManager.animateTween(this.symbol1, this.animDuration, { scaleX: 1, onComplete: this.onSymbol1AnimationFullShown.bind(this) });
        this.symbol2.texture = CoreLib.UIUtil.getTexture(symbolsData[CoreLib.Util.getRandomRange(0, symbolsData.length - 1)]);
    }
    onSymbol1AnimationFullShown() {
        CoreLib.AnimationManager.animateTween(this.symbol1, this.animDuration, { scaleX: 0, onComplete: this.onSymbol1FullHidden.bind(this) });
    }

    notifyEnd() {
        this.emit("OnSpinningCompleted", this);
    }

}