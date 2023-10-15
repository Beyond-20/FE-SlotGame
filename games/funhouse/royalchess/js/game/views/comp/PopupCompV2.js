import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";
import { LibContainer } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibContainer";
import { RoyalSymbComp } from "./RoyalSymbComp";
import { UIUtil } from "../../../../../../../../slot_core/corelib/pixiwrapper/UIUtilService";

export class PopupCompV2 extends LibContainer {
    constructor(config, layoutconfig) {
        super(config, layoutconfig);
        this.popupbg = this.elementsList["popupbg"];
        CoreLib.UIUtil.setModalState(this.popupbg, true);

        this.elements = this.elementsList["elements"];
        this.elements.visible = false;
        this.message1 = this.elements.elementsList["message1"];
        this.message2 = this.elements.elementsList["message2"];
        this.message3 = this.elements.elementsList["message3"];
        this.symbRoyalTxt = this.elements.elementsList["symbRoyalTxt"];
        this.okBtn = this.elements.elementsList["okBtn"];
        this.okBtn.text = CoreLib.Util.getContent("buttonText");
        this.okBtn.interactive = true;
        this.okBtn.buttonMode = true;
        CoreLib.UIUtil.addInteraction(this.okBtn, this.onOKClicked.bind(this))
        this.royalSymb = this.elementsList["royalSymb"];
        this.royalSymbExpansionFrame = this.royalSymb.elementsList["royalSymbExpansionFrame"];
        this.celebrationComp = this.elementsList["celebrationComp"];
        this.celebrationConfetti1 = this.celebrationComp.elementsList["celebrationConfetti1"];
        this.celebrationConfetti2 = this.celebrationComp.elementsList["celebrationConfetti2"];
        this.celebrationConfetti3 = this.celebrationComp.elementsList["celebrationConfetti3"];
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.SHOW_MESSAGE_POPUP,this.showPopupOpenAnim.bind(this));
        CoreLib.EventHandler.addEventListener("END_FS_POPUP", this.hideRoyalElements.bind(this));
    }

    hideRoyalElements(){
        this.symbRoyalTxt.visible = false;
        this.royalSymb.visible = false;
        this.royalSymbExpansionFrame.visible = false;
    }

    showPopupOpenAnim(){
        this.popupbg.playAnimation("flag_open", false);
    }

    updatePopup(obj) {
        this.resultObj = obj;
        this.elements.visible = false;
        this.onPopupBGOpened();
    }

    onPopupBGOpened() {
        setTimeout(() => {
            this.popupbg.playAnimation("flag_static", true);
            this.showElements(this.resultObj);
        }, 1000);
    }

    showElements(obj) {
        this.elements.visible = true;
        this.message1.scale.set(1);
        this.message2.scale.set(1);
        this.message3.scale.set(1);
        if (obj.textScale != undefined) {
            this.message1.scale.set(obj.textScale);
            this.message2.scale.set(obj.textScale);
            this.message3.scale.set(obj.textScale);
        }
        this.callback = obj.callbankFunc;
        this.message1.text = obj.message1;
        this.message2.text = obj.message2;
        this.message3.text = obj.message3;
        setTimeout(() => {
            this.celebrationConfetti1.playAnimation("animation", false);
        }, 100);
        setTimeout(() => {
            this.celebrationConfetti2.playAnimation("animation", false);
        }, 500);
        setTimeout(() => {
            this.celebrationConfetti3.playAnimation("animation", false);
        }, 1000)
        // this.showRoyalElement();
        // CoreLib.EventHandler.dispatchEvent("SHOW_ROYAL_ELEMENT");
    }

    showRoyalElement() {
        // this.customSymbolArr = [];
        let data = slotModel.getFeatureData();
        // let royalSymb = CoreLib.UIUtil.getSprite(data.expandingSymbol);
        // const initialSymbol = "WW";
        // const symb = new RoyalSymbComp({ initiateSymbol: initialSymbol, finalSymbol: royalSymb });
        // symb.x = 315;
        // symb.y = 349;
        // this.customSymbolArr.push(symb);
        // symb.on("OnSpinningCompleted", this.onRoyalSymbolShowDone.bind(this, royalSymb));

        let symb = data.expandingSymbol;
        this.element = UIUtil.getSprite(this.configData.data[symb].image);
        this.addChild(this.element);
        this.element.anchor.set(0.5, 0.5);
        this.element.x = this.guideRect.width / 2 + 40;
        this.element.y = this.guideRect.height / 2;
        this.element.scale.set(1);
    }

    onRoyalSymbolShowDone(royalSymb) {
        this.customSymbolArr = [];
        CoreLib.AnimationManager.animateTween(royalSymb, 0.5, { y: 80, repeat: 2, yoyo: true, onComplete: this.showSymbOnExpandingReel.bind(this) });
    }

    showSymbOnExpandingReel() {
        // console.log("SHOWING...............")
    }

    reset() {
        this.message1.text = "";
        this.message2.text = "";
        this.message3.text = "";
    }

    onOKClicked() {
        this.answerType = "ok";
        this.elements.visible = false;
        this.popupbg.playAnimation("flag_end", false);
        this.onPopupBGClosed();
    }

    onPopupBGClosed() {
        if (this.answerType == "ok") {
            if (this.callback != undefined) {
                this.callback();
                this.callback = undefined;
            }
        }
    }

}
