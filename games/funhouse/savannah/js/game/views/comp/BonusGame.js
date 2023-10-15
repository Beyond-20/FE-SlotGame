import { SlotGameBonusComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotGameBonusComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";

export class BonusGame extends SlotGameBonusComp {
    constructor(config) {
        super(config);
        this.bgContainer = this.elementsList["bgContainer"];
        this.bonusgamebg = this.bgContainer.elementsList["bonusgamebg"];
        this.bonusContainer = this.elementsList["bonusContainer"];
        this.guideRect = this.bonusContainer.elementsList["guideRect"];
        this.elementsArray = [];
        this.element1 = this.bonusContainer.elementsList["element1"];
        this.element2 = this.bonusContainer.elementsList["element2"];
        this.element3 = this.bonusContainer.elementsList["element3"];
        this.element4 = this.bonusContainer.elementsList["element4"];
        this.element5 = this.bonusContainer.elementsList["element5"];
        this.element6 = this.bonusContainer.elementsList["element6"];
        this.elementsArray.push(
            this.element1,
            this.element2,
            this.element3,
            this.element4,
            this.element5,
            this.element6);


        this.fstitlebg = this.bonusContainer.elementsList["fstitlebg"];
        this.multititlebg = this.bonusContainer.elementsList["multititlebg"];
        this.fsvaluebg = this.bonusContainer.elementsList["fsvaluebg"];
        this.multivaluebg = this.bonusContainer.elementsList["multivaluebg"];
        if (this.guideRect) {
            this.guideRect.renderable = false;
        }
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_BONUSGAME_BG);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_SLOTMACHINE_AND_PANEL, false);
        this.isActive = true;
        CoreLib.UIUtil.addInteraction(this.element1, this.onHoleBtnClicked.bind(this, 1));
        CoreLib.UIUtil.addInteraction(this.element2, this.onHoleBtnClicked.bind(this, 2));
        CoreLib.UIUtil.addInteraction(this.element3, this.onHoleBtnClicked.bind(this, 3));
        CoreLib.UIUtil.addInteraction(this.element4, this.onHoleBtnClicked.bind(this, 4));
        CoreLib.UIUtil.addInteraction(this.element5, this.onHoleBtnClicked.bind(this, 5));
        CoreLib.UIUtil.addInteraction(this.element6, this.onHoleBtnClicked.bind(this, 6));

        this.element1.addEventListener("complete", this.onSpineAnimComplete.bind(this));
        this.element2.addEventListener("complete", this.onSpineAnimComplete.bind(this));
        this.element3.addEventListener("complete", this.onSpineAnimComplete.bind(this));
        this.element4.addEventListener("complete", this.onSpineAnimComplete.bind(this));
        this.element5.addEventListener("complete", this.onSpineAnimComplete.bind(this));
        this.element6.addEventListener("complete", this.onSpineAnimComplete.bind(this));


        this.bonusText = this.bonusContainer.elementsList["bonusText"];
        this.freespinsTitleText = this.bonusContainer.elementsList["freespinsTitleText"];
        this.multiplierTitleText = this.bonusContainer.elementsList["multiplierTitleText"];
        this.bonusTitleText = this.bonusContainer.elementsList["bonusTitleText"];
        this.bonusSubtitleText = this.bonusContainer.elementsList["bonusSubtitleText"];
        this.freespinValueText = this.bonusContainer.elementsList["freespinValueText"];
        this.multiplierValueText = this.bonusContainer.elementsList["multiplierValueText"];
        this.fstitlebg.addChild(this.freespinsTitleText);
        this.multititlebg.addChild(this.multiplierTitleText);
        this.fsvaluebg.addChild(this.freespinValueText);
        this.multivaluebg.addChild(this.multiplierValueText);
        this.bonusTitleText.text = CoreLib.Util.getContent("pickBonusTitle");
        this.bonusSubtitleText.text = CoreLib.Util.getContent("pickBonusTitleHeading");
        this.freespinsTitleText.text = CoreLib.Util.getContent("totalFreeSpinBonus");
        this.freespinValueText.text = 8;
        this.multiplierTitleText.text = CoreLib.Util.getContent("totalMultiplierBonus");
        this.multiplierValueText.text = "X2";
        this.disableAllHoleBtn();
        CoreLib.EventHandler.addEventListener("EnableBonusButtons", this.enableAllHoleBtn.bind(this));
    }

    initiateBonusGame() {
        super.initiateBonusGame();
        this.resetBonus();
    }

    resetBonus() {

        this.visible = true;
        this.holeBtnClicked = 0;
        this.bonusText.alpha = 0;
        this.freespinValueText.text = 8;
        this.multiplierValueText.text = "X2";
        for (let i = 1; i <= 6; i++) {
            this["element" + i].playAnimation("idle", true);
        }
        this.bonusgamebg.playAnimation("animation", true);
        let data = slotModel.getLastFeatureResult();
        if (data && data.featureType != "freespin" && data.freespinCount > 0) {
            this.freespinValueText.text = data.freespinCount;
            this.multiplierValueText.text = "X" + data.freespinMultiplier;
        }
    }

    showWinAmountWin(val, isFreeSpin) {
        CoreLib.EventHandler.dispatchEvent("PLAY_FREESPIN_MULTIPLIER_SOUND");
        CoreLib.AnimationManager.animateTween(this.bonusText, 0.5, { alpha: 1, ease: Linear.easeNone })
        if (isFreeSpin) {
            this.bonusText.text = val + " Free Spins";
        } else {
            this.bonusText.text = val + "X Multiplier";
        }
        let data = slotModel.getFeatureResult().featureResults[0];
        this.freespinValueText.text = data.freespinCount;
        this.multiplierValueText.text = "X" + data.freespinMultiplier;
        this.bonusText.x = this["element" + this.holeBtnClicked].x;
        this.bonusText.y = this["element" + this.holeBtnClicked].y;
        setTimeout(this.showCashAwardEnd.bind(this), 50);
    }

    showCashAwardEnd() {
        let data = slotModel.getFeatureResult().featureResults[0];
        if (data && !data.closed) {
            this.enableAllHoleBtn(this.holeBtnClicked);
        }
    }
    onSpineAnimComplete (data) {
        if (data.name == "open") {
            this["element" + this.holeBtnClicked].playAnimation("open_idle", true);
        }

    }

    onHoleBtnClicked(num) {
        this.holeBtnClicked = num;
        this.disableAllHoleBtn();
        this.sendFeatureRequest(num);
    }

    disableAllHoleBtn() {
        for (let i = 1; i <= 6; i++) {
            CoreLib.UIUtil.setClickable(this["element" + i], false);
        }
    }

    enableAllHoleBtn(btnClicked) {
        for (let i = 1; i <= 6; i++) {
            CoreLib.UIUtil.setClickable(this["element" + i], true);
        }
        if (btnClicked) {
            CoreLib.UIUtil.setClickable(this["element" + btnClicked], false);
        }
    }

    handleFeatureResponse() {
        CoreLib.AnimationManager.animateTween(this.bonusText, 0.5, { alpha: 0, ease: Linear.easeNone });
        let data = slotModel.getFeatureResult().featureResults[0];
        CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_ITEM_CLICK_OPEN");
        this["element" + this.holeBtnClicked].loop = false;
        this["element" + this.holeBtnClicked].playAnimation("open", false);
        if (data.awardedFreespins > 0) {
            setTimeout(this.showWinAmountWin.bind(this, data.awardedFreespins, true), 1000);
        } else {
            setTimeout(this.showWinAmountWin.bind(this, data.awardedMultiplier, false), 1000);
        }
        if (data.closed) {
            this.disableAllHoleBtn();
            let msgObj = {};
            msgObj.title = CoreLib.Util.getContent("congratText");
            msgObj.message1 = CoreLib.Util.getContent("youhavewonText");
            let arr = [data.freespinCount, (data.freespinMultiplier + "X")];
            let str = CoreLib.Util.parseMessage(CoreLib.Util.getContent("numberOfFreespins"), arr);
            msgObj.message2 = str;
            msgObj.callbankFunc = this.endFSAwardRound.bind(this);
            setTimeout(this.showBonusResultPopup.bind(this, msgObj), 7000);
        }
    }

    showBonusResultPopup(msgObj) {
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_MESSAGE_POPUP, msgObj);
    }

    endFSAwardRound() {
        this.visible = false;
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.NOTIFY_FS_ENTRY_SHOWN);
    }

    resizeViewComponents() {

        super.resizeViewComponents();
        this.guideRect.width = CoreLib.UIUtil.getGameWidth();
        this.guideRect.height = CoreLib.UIUtil.getGameHeight();
        CoreLib.UIUtil.adjustElement(this.bgContainer);


        let sc = 1;
        if (CoreLib.Model.DeviceConfig.isDesktop) {
           let wsc = CoreLib.UIUtil.getGameWidth() / this.guideRect.configData.width;
           let hsc = CoreLib.UIUtil.getGameHeight() / this.guideRect.configData.height;
            sc = Math.min(wsc, hsc);
        }
        let val = 0.60;
        this.element1.scale.set(sc * val);
        this.element2.scale.set(sc * val);
        this.element3.scale.set(sc * val);
        this.element4.scale.set(sc * val);
        this.element5.scale.set(sc * val);
        this.element6.scale.set(sc * val);
        this.fstitlebg.scale.set(sc);
        this.multititlebg.scale.set(sc);
        this.fsvaluebg.scale.set(sc);
        this.multivaluebg.scale.set(sc);
        this.bonusTitleText.scale.set(sc);
        this.bonusSubtitleText.scale.set(sc);

        CoreLib.UIUtil.setPosition(this.bonusTitleText, this.guideRect.width / 2, this.guideRect.height * 0.02);
        CoreLib.UIUtil.setPosition(this.bonusSubtitleText, this.guideRect.width / 2, this.bonusTitleText.y + this.bonusTitleText.height);
        if (CoreLib.Model.DeviceConfig.isDesktop) {
            CoreLib.UIUtil.setPosition(this.fstitlebg, this.guideRect.width * 0.05, this.guideRect.height * 0.02);
            CoreLib.UIUtil.setPosition(this.fsvaluebg, this.fstitlebg.x + (this.fstitlebg.width - this.fsvaluebg.width) / 2, this.fstitlebg.y + this.fstitlebg.height * 0.6);

            CoreLib.UIUtil.setPosition(this.multititlebg, this.guideRect.width - this.multititlebg.width - this.guideRect.width * 0.05, this.guideRect.height * 0.02);
            CoreLib.UIUtil.setPosition(this.multivaluebg, this.multititlebg.x + (this.multititlebg.width - this.multivaluebg.width) / 2, this.multititlebg.y + this.multititlebg.height * 0.6);

            CoreLib.UIUtil.setPosition(this.element1, this.guideRect.width * 0.02 + this.element1.width / 2, this.guideRect.height * 0.5);
            CoreLib.UIUtil.setPosition(this.element2, this.guideRect.width * 0.5, this.guideRect.height * 0.5);
            CoreLib.UIUtil.setPosition(this.element3, this.guideRect.width - this.element1.width / 2 - this.guideRect.width * 0.02, this.guideRect.height * 0.5);

            CoreLib.UIUtil.setPosition(this.element4, this.guideRect.width * 0.02 + this.element1.width / 2, this.guideRect.height * 0.75);
            CoreLib.UIUtil.setPosition(this.element5, this.guideRect.width * 0.5, this.guideRect.height * 0.75);
            CoreLib.UIUtil.setPosition(this.element6, this.guideRect.width - this.element1.width / 2 - this.guideRect.width * 0.02, this.guideRect.height * 0.75);

        } else {
            if (CoreLib.Model.DeviceConfig.isLandscape) {
                this.bonusTitleText.scale.set(1);
                let sc = (CoreLib.UIUtil.getGameHeight() * 0.1) / this.bonusTitleText.height;
                this.bonusTitleText.scale.set(sc);
                this.bonusSubtitleText.scale.set(sc);
                this.fstitlebg.scale.set(sc);
                this.fsvaluebg.scale.set(sc);
                this.multititlebg.scale.set(sc);
                this.multivaluebg.scale.set(sc);

                sc = sc * 0.75;
                this.element1.scale.set(sc);
                this.element2.scale.set(sc);
                this.element3.scale.set(sc);
                this.element4.scale.set(sc);
                this.element5.scale.set(sc);
                this.element6.scale.set(sc);

                CoreLib.UIUtil.setPositionY(this.bonusSubtitleText, this.bonusTitleText.y + this.bonusTitleText.height);

                CoreLib.UIUtil.setPosition(this.fstitlebg, this.guideRect.width * 0.05, this.bonusSubtitleText.y);
                CoreLib.UIUtil.setPosition(this.fsvaluebg, this.fstitlebg.x + (this.fstitlebg.width - this.fsvaluebg.width) / 2, this.fstitlebg.y + this.fstitlebg.height * 0.6);

                CoreLib.UIUtil.setPosition(this.multititlebg, this.guideRect.width - this.multititlebg.width - this.guideRect.width * 0.05, this.fstitlebg.y);
                CoreLib.UIUtil.setPosition(this.multivaluebg, this.multititlebg.x + (this.multititlebg.width - this.multivaluebg.width) / 2, this.fsvaluebg.y);

                CoreLib.UIUtil.setPosition(this.element1, this.guideRect.width * 0.05 + this.element1.width / 2, this.guideRect.height * 0.5);
                CoreLib.UIUtil.setPosition(this.element2, this.guideRect.width * 0.5, this.guideRect.height * 0.5);
                CoreLib.UIUtil.setPosition(this.element3, this.guideRect.width - this.element1.width / 2 - this.guideRect.width * 0.05, this.guideRect.height * 0.5);

                CoreLib.UIUtil.setPosition(this.element4, this.guideRect.width * 0.05 + this.element1.width / 2, this.guideRect.height * 0.75);
                CoreLib.UIUtil.setPosition(this.element5, this.guideRect.width * 0.5, this.guideRect.height * 0.75);
                CoreLib.UIUtil.setPosition(this.element6, this.guideRect.width - this.element1.width / 2 - this.guideRect.width * 0.05, this.guideRect.height * 0.75);
            } else {
                this.bonusTitleText.scale.set(1);
                let sc = (CoreLib.UIUtil.getGameWidth() * 0.50) / this.bonusTitleText.width;
                this.bonusTitleText.scale.set(sc);
                this.bonusSubtitleText.scale.set(sc);
                this.fstitlebg.scale.set(sc);
                this.fsvaluebg.scale.set(sc);
                this.multititlebg.scale.set(sc);
                this.multivaluebg.scale.set(sc);
                sc = sc * 0.65;
                this.element1.scale.set(sc);
                this.element2.scale.set(sc);
                this.element3.scale.set(sc);
                this.element4.scale.set(sc);
                this.element5.scale.set(sc);
                this.element6.scale.set(sc);

                CoreLib.UIUtil.setPositionY(this.bonusSubtitleText, this.bonusTitleText.y + this.bonusTitleText.height);

                CoreLib.UIUtil.setPosition(this.fstitlebg, this.guideRect.width * 0.02, this.bonusSubtitleText.y + this.bonusSubtitleText.height * 1.2);
                CoreLib.UIUtil.setPosition(this.fsvaluebg, this.fstitlebg.x + (this.fstitlebg.width - this.fsvaluebg.width) / 2, this.fstitlebg.y + this.fstitlebg.height * 0.6);

                CoreLib.UIUtil.setPosition(this.multititlebg, this.guideRect.width - this.multititlebg.width - this.guideRect.width * 0.02, this.fstitlebg.y);
                CoreLib.UIUtil.setPosition(this.multivaluebg, this.multititlebg.x + (this.multititlebg.width - this.multivaluebg.width) / 2, this.fsvaluebg.y);

                CoreLib.UIUtil.setPosition(this.element1, this.guideRect.width - this.element1.width / 2 - this.guideRect.width * 0.10, this.guideRect.height * 0.4);
                CoreLib.UIUtil.setPosition(this.element2, this.guideRect.width * 0.10 + this.element2.width / 2, this.guideRect.height * 0.5);

                CoreLib.UIUtil.setPosition(this.element3, this.guideRect.width - this.element1.width / 2 - this.guideRect.width * 0.10, this.guideRect.height * 0.6);
                CoreLib.UIUtil.setPosition(this.element4, this.guideRect.width * 0.10 + this.element2.width / 2, this.guideRect.height * 0.7);

                CoreLib.UIUtil.setPosition(this.element5, this.guideRect.width - this.element1.width / 2 - this.guideRect.width * 0.10, this.guideRect.height * 0.8);
                CoreLib.UIUtil.setPosition(this.element6, this.guideRect.width * 0.10 + this.element2.width / 2, this.guideRect.height * 0.9);
            }
        }


    }


};
