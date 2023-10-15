import { SlotGameBonusComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotGameBonusComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";

export class BonusGame extends SlotGameBonusComp {
    constructor(config) {
        super(config);
        this.bgContainer = this.elementsList["bgContainer"];
        this.bonusgamebg = this.bgContainer.elementsList["bonusgamebg"];
        this.bonusContainer = this.elementsList["bonusContainer"];
        this.textContainer = this.elementsList["textContainer"];
        this.freespinCont = this.textContainer.elementsList["freespinCont"];
        this.multiplierCont = this.textContainer.elementsList["multiplierCont"];


        this.frame = this.bonusContainer.elementsList["frame"];
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



        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_BONUSGAME_BG);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_SLOTMACHINE_AND_PANEL, false);
        this.isActive = true;
        CoreLib.UIUtil.addInteraction(this.element1, this.onHoleBtnClicked.bind(this, 1));
        CoreLib.UIUtil.addInteraction(this.element2, this.onHoleBtnClicked.bind(this, 2));
        CoreLib.UIUtil.addInteraction(this.element3, this.onHoleBtnClicked.bind(this, 3));
        CoreLib.UIUtil.addInteraction(this.element4, this.onHoleBtnClicked.bind(this, 4));
        CoreLib.UIUtil.addInteraction(this.element5, this.onHoleBtnClicked.bind(this, 5));
        CoreLib.UIUtil.addInteraction(this.element6, this.onHoleBtnClicked.bind(this, 6));


        this.element1.on("complete", this.onSpineAnimComplete.bind(this));
        this.element2.on("complete", this.onSpineAnimComplete.bind(this));
        this.element3.on("complete", this.onSpineAnimComplete.bind(this));
        this.element4.on("complete", this.onSpineAnimComplete.bind(this));
        this.element5.on("complete", this.onSpineAnimComplete.bind(this));
        this.element6.on("complete", this.onSpineAnimComplete.bind(this));


        this.bonusText = this.elementsList["bonusText"];

        this.freespinsTitleText = this.freespinCont.elementsList["freespinsTitleText"];
        this.freespinValueText = this.freespinCont.elementsList["freespinValueText"];

        this.multiplierTitleText = this.multiplierCont.elementsList["multiplierTitleText"];
        this.multiplierValueText = this.multiplierCont.elementsList["multiplierValueText"];

        this.bonusTitleText = this.textContainer.elementsList["bonusTitleText"];
        this.bonusSubtitleText = this.textContainer.elementsList["bonusSubtitleText"];


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
        this.element1.reset();
        this.element2.reset();
        this.element3.reset();
        this.element4.reset();
        this.element5.reset();
        this.element6.reset();

        let data = slotModel.getLastFeatureResult();
        if (data && data.featureType != "freespin" && data.freespinCount > 0) {
            this.freespinValueText.text = data.freespinCount;
            this.multiplierValueText.text = "X" + data.freespinMultiplier;
        }
    }

    showWinAmountWin(val, isFreeSpin) {
        this.bonusText.x = this.bonusContainer.x + this["element" + this.holeBtnClicked].x * this.bonusContainer.scale.x;
        this.bonusText.y = this.bonusContainer.y + this["element" + this.holeBtnClicked].y * this.bonusContainer.scale.y;
        CoreLib.AnimationManager.animateTween(this.bonusText, 0.25, { alpha: 1, ease: Linear.easeNone, onComplete : this.onWinAmountAppeared.bind(this, val, isFreeSpin) });
    }

    onWinAmountAppeared(val, isFreeSpin) {
        this.bonusText.scale.set(this.textContainer.scale.x);
        if (isFreeSpin) {
            this.bonusText.text = val;
            CoreLib.AnimationManager.animateTween(this.bonusText, 0.6, {delay: 1, scaleX: 0.4, scaleY: 0.25, x : this.textContainer.x + (this.freespinCont.x + this.freespinValueText.x) * this.textContainer.scale.x, y: this.textContainer.y + (this.freespinCont.y + this.freespinValueText.y + this.freespinValueText.height / 2) * this.textContainer.scale.y, onComplete: this.showCashAwardEnd.bind(this)}, false);
        } else {
            this.bonusText.text = val;
            CoreLib.AnimationManager.animateTween(this.bonusText, 0.6, {delay: 1, scaleX: 0.4, scaleY: 0.25, x : this.textContainer.x + (this.multiplierCont.x + this.multiplierValueText.x) * this.textContainer.scale.x, y: this.textContainer.y + (this.multiplierCont.y + this.multiplierValueText.y + this.multiplierValueText.height / 2) * this.textContainer.scale.y, onComplete: this.showCashAwardEnd.bind(this)}, false);
        }
    }

    showCashAwardEnd() {
        CoreLib.EventHandler.dispatchEvent("PLAY_FREESPIN_MULTIPLIER_SOUND");
        this.bonusText.text = "";
        let data = slotModel.getFeatureResult().featureResults[0];
        this.freespinValueText.text = data.freespinCount;
        this.multiplierValueText.text = "X" + data.freespinMultiplier;
        if (data && !data.closed) {
            this.enableAllHoleBtn(this.holeBtnClicked);
        }
    }
    onSpineAnimComplete (data) {
        if (data.name == "open") {
            //this["element" + this.holeBtnClicked].playAnimation("open_idle", true);
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
        this["element" + this.holeBtnClicked].loop = true;
        //this["element" + this.holeBtnClicked].playAnimation("open", false);

        this["element" + this.holeBtnClicked].showWin();
        if (data.awardedFreespins > 0) {
            setTimeout(this.showWinAmountWin.bind(this, data.awardedFreespins, true), 500);
        } else {
            setTimeout(this.showWinAmountWin.bind(this, data.awardedMultiplier, false), 500);
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
            setTimeout(this.showBonusResultPopup.bind(this, msgObj), 3000);
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
        CoreLib.UIUtil.adjustElement(this.bgContainer)
        if (CoreLib.Model.DeviceConfig.isDesktop) {
            this.textContainer.scale.set(1);
            let sc = (CoreLib.UIUtil.getGameWidth() * 0.7) / this.textContainer.width;
            let hsc = (CoreLib.UIUtil.getGameHeight() * 0.16) / this.textContainer.height;
            this.textContainer.scale.set(Math.min(sc, hsc));
            this.bonusContainer.scale.set(1);
            this.bonusText.scale.set(this.textContainer.scale.x);
            sc = (CoreLib.UIUtil.getGameWidth()) / this.bonusContainer.width;
            hsc = (CoreLib.UIUtil.getGameHeight() * 0.85) / this.bonusContainer.height;
            this.bonusContainer.scale.set(Math.min(sc, hsc));
            CoreLib.UIUtil.setPosition(this.bonusContainer, (CoreLib.UIUtil.getGameWidth() - this.bonusContainer.width) / 2, CoreLib.UIUtil.getGameHeight() - this.bonusContainer.getHeight() * 0.90);
            CoreLib.UIUtil.setPosition(this.textContainer, (CoreLib.UIUtil.getGameWidth() - this.textContainer.width) / 2, this.bonusContainer.y - this.textContainer.height);
        } else {
            this.adjustChildrenForDevice(this.bonusContainer)
            this.setPositionBasedOnDevice(this.bonusContainer);
            this.adjustChildrenForDevice(this.textContainer)
            this.setPositionBasedOnDevice(this.textContainer);
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.textContainer.scale.set(1);
                let sc = (CoreLib.UIUtil.getGameWidth() * 0.9) / this.textContainer.getWidth();
                let hsc = (CoreLib.UIUtil.getGameHeight() * 0.20) / this.textContainer.getHeight();
                this.textContainer.scale.set(Math.min(sc, hsc));
                this.bonusContainer.scale.set(1);
                sc = (CoreLib.UIUtil.getGameWidth()) / this.bonusContainer.getWidth();
                hsc = (CoreLib.UIUtil.getGameHeight() * 0.6) / this.bonusContainer.getHeight();
                this.bonusContainer.scale.set(Math.min(sc, hsc));
                //this.bonusContainer.scale.set(0.4)
                CoreLib.UIUtil.setPosition(this.bonusContainer, (CoreLib.UIUtil.getGameWidth() - this.bonusContainer.getWidth()) / 2, CoreLib.UIUtil.getGameHeight() - this.bonusContainer.getHeight() * 1.18);
                CoreLib.UIUtil.setPosition(this.textContainer, (CoreLib.UIUtil.getGameWidth() - this.textContainer.getWidth()) / 2, this.bonusContainer.y - this.textContainer.getHeight());
            } else {
                this.textContainer.scale.set(1);
                let sc = (CoreLib.UIUtil.getGameWidth() * 0.7) / this.textContainer.width;
                let hsc = (CoreLib.UIUtil.getGameHeight() * 0.16) / this.textContainer.height;
                this.textContainer.scale.set(Math.min(sc, hsc));
                this.bonusContainer.scale.set(1);
                sc = (CoreLib.UIUtil.getGameWidth()) / this.bonusContainer.width;
                hsc = (CoreLib.UIUtil.getGameHeight() * 0.8) / this.bonusContainer.height;
                this.bonusContainer.scale.set(Math.min(sc, hsc));
                CoreLib.UIUtil.setPosition(this.bonusContainer, (CoreLib.UIUtil.getGameWidth() - this.bonusContainer.width) / 2, CoreLib.UIUtil.getGameHeight() - this.bonusContainer.getHeight());
                CoreLib.UIUtil.setPosition(this.textContainer, (CoreLib.UIUtil.getGameWidth() - this.textContainer.width) / 2, this.bonusContainer.y - this.textContainer.height);
            }
            this.bonusText.scale.set(this.textContainer.scale.x);
        }
    }
};
