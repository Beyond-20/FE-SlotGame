import { SlotGameBonusComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotGameBonusComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";

export class BonusGame extends SlotGameBonusComp {
    constructor(config) {
        super(config);
        this.bonusgamebg = this.elementsList["bonusgamebg"];
        this.bonusContainer = this.elementsList["bonusContainer"];
        this.guideRect = this.bonusContainer.elementsList["guideRect"];
        this.elementsArray = [];
        this.holeBtn1 = this.bonusContainer.elementsList["holeBtn1"];
        this.holeBtn2 = this.bonusContainer.elementsList["holeBtn2"];
        this.holeBtn3 = this.bonusContainer.elementsList["holeBtn3"];
        this.holeBtn4 = this.bonusContainer.elementsList["holeBtn4"];
        this.holeBtn5 = this.bonusContainer.elementsList["holeBtn5"];
        this.elementsArray.push(
            this.holeBtn1,
            this.holeBtn2,
            this.holeBtn3,
            this.holeBtn4,
            this.holeBtn5)

        this.shellShadow1 = this.bonusContainer.elementsList["shellShadow1"];
        this.shellShadow2 = this.bonusContainer.elementsList["shellShadow2"];
        this.shellShadow3 = this.bonusContainer.elementsList["shellShadow3"];
        this.shellShadow4 = this.bonusContainer.elementsList["shellShadow4"];
        this.shellShadow5 = this.bonusContainer.elementsList["shellShadow5"];
        this.elementsArray.push(
            this.shellShadow1,
            this.shellShadow2,
            this.shellShadow3,
            this.shellShadow4,
            this.shellShadow5)

        this.textBase1 = this.bonusContainer.elementsList["textBase1"];
        this.textBase2 = this.bonusContainer.elementsList["textBase2"];
        this.textBase3 = this.bonusContainer.elementsList["textBase3"];
        this.textBase4 = this.bonusContainer.elementsList["textBase4"];
        this.elementsArray.push(
            this.textBase1,
            this.textBase2,
            this.textBase3,
            this.textBase4);
        if (this.guideRect) {
            this.guideRect.renderable = false;
        }
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_BONUSGAME_BG);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_SLOTMACHINE_AND_PANEL, false);
        this.isActive = true;
        CoreLib.UIUtil.addInteraction(this.shellShadow1, this.onHoleBtnClicked.bind(this, 1));
        CoreLib.UIUtil.addInteraction(this.shellShadow2, this.onHoleBtnClicked.bind(this, 2));
        CoreLib.UIUtil.addInteraction(this.shellShadow3, this.onHoleBtnClicked.bind(this, 3));
        CoreLib.UIUtil.addInteraction(this.shellShadow4, this.onHoleBtnClicked.bind(this, 4));
        CoreLib.UIUtil.addInteraction(this.shellShadow5, this.onHoleBtnClicked.bind(this, 5));
        this.bonusText = this.bonusContainer.elementsList["bonusText"];
        this.bonusText2 = this.bonusContainer.elementsList["bonusText2"];
        this.bonusText3 = this.bonusContainer.elementsList["bonusText3"];
        this.bonusText4 = this.bonusContainer.elementsList["bonusText4"];
        this.bonusText5 = this.bonusContainer.elementsList["bonusText5"];
        this.bonusText6 = this.bonusContainer.elementsList["bonusText6"];
        this.bonusText7 = this.bonusContainer.elementsList["bonusText7"];
        this.textBase1.addChild(this.bonusText2);
        this.textBase2.addChild(this.bonusText3);
        this.textBase3.addChild(this.bonusText6);
        this.textBase4.addChild(this.bonusText7);
        this.elementsArray.push(
            this.bonusText2,
            this.bonusText3,
            this.bonusText4,
            this.bonusText5,
            this.bonusText6,
            this.bonusText7)
        this.bonusText4.text = CoreLib.Util.getContent("pickBonusTitle");
        this.bonusText5.text = CoreLib.Util.getContent("pickBonusTitleHeading");
        this.bonusText2.text = CoreLib.Util.getContent("totalFreeSpinBonus");
        this.bonusText6.text = 8;
        this.bonusText3.text = CoreLib.Util.getContent("totalMultiplierBonus");
        this.bonusText7.text = "X2";
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
        this.bonusText6.text = 8;
        this.bonusText7.text = "X2";
        for (let i = 1; i <= 5; i++) {
            this["holeBtn" + i].gotoAndStop(0);
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
        this.bonusText6.text = data.freespinCount;
        this.bonusText7.text = "X" + data.freespinMultiplier;
        this.bonusText.x = this["holeBtn" + this.holeBtnClicked].x;
        this.bonusText.y = this["holeBtn" + this.holeBtnClicked].y;
        setTimeout(this.showCashAwardEnd.bind(this), 50);
    }

    showCashAwardEnd() {
        let data = slotModel.getFeatureResult().featureResults[0];
        if (data && !data.closed) {
            this.enableAllHoleBtn(this.holeBtnClicked);
        }
    }

    onHoleBtnClicked(num) {
        this.holeBtnClicked = num;
        this.disableAllHoleBtn();
        this.sendFeatureRequest(num);
    }

    disableAllHoleBtn() {
        for (let i = 1; i <= 5; i++) {
            CoreLib.UIUtil.setClickable(this["shellShadow" + i], false);
        }
    }

    enableAllHoleBtn(btnClicked) {
        for (let i = 1; i <= 5; i++) {
            CoreLib.UIUtil.setClickable(this["shellShadow" + i], true);
        }
        if (btnClicked) {
            CoreLib.UIUtil.setClickable(this["shellShadow" + btnClicked], false);
        }
    }

    handleFeatureResponse() {
        CoreLib.AnimationManager.animateTween(this.bonusText, 0.5, { alpha: 0, ease: Linear.easeNone });
        let data = slotModel.getFeatureResult().featureResults[0];
        CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_ITEM_CLICK_OPEN");
        this["holeBtn" + this.holeBtnClicked].loop = false;
        this["holeBtn" + this.holeBtnClicked].play();
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
        CoreLib.UIUtil.adjustElement(this.bonusgamebg);
        this.bonusContainer.scale.set(1);
        let sc, hsc;
        sc = (CoreLib.UIUtil.getGameWidth()) / this.guideRect.width;
        hsc = (CoreLib.UIUtil.getGameHeight()) / this.guideRect.height;

        let finalsc = Math.min(sc, hsc)
        this.bonusContainer.scale.set(finalsc);
        CoreLib.UIUtil.setPositionX(this.bonusContainer, (CoreLib.UIUtil.getGameWidth() - this.guideRect.width * this.bonusContainer.scale.x) / 2);
        CoreLib.UIUtil.setPositionY(this.bonusContainer, (CoreLib.UIUtil.getGameHeight() - this.guideRect.height * this.bonusContainer.scale.x) / 2);
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                for (let i = 0; i < this.elementsArray.length; i++) {
                    if(this.elementsArray[i].name == "shellShadow1" || this.elementsArray[i].name == "shellShadow2" || this.elementsArray[i].name == "shellShadow3" || this.elementsArray[i].name == "shellShadow4" || this.elementsArray[i].name == "shellShadow5"){
                        this.elementsArray[i].scale.set(1.2);
                    }else {
                        this.elementsArray[i].scale.set(1.5);
                    }
                    CoreLib.UIUtil.setPositionX(this.elementsArray[i], this.elementsArray[i].configData.px);
                    CoreLib.UIUtil.setPositionY(this.elementsArray[i], this.elementsArray[i].configData.py);
                }
            } else {
                for (let i = 0; i < this.elementsArray.length; i++) {
                    if(this.elementsArray[i].name == "shellShadow1" || this.elementsArray[i].name == "shellShadow2" || this.elementsArray[i].name == "shellShadow3" || this.elementsArray[i].name == "shellShadow4" || this.elementsArray[i].name == "shellShadow5"){
                        this.elementsArray[i].scale.set(0.75);
                    }else {
                        this.elementsArray[i].scale.set(1);
                    }
                    CoreLib.UIUtil.setPositionX(this.elementsArray[i], this.elementsArray[i].configData.x);
                    CoreLib.UIUtil.setPositionY(this.elementsArray[i], this.elementsArray[i].configData.y);
                }
            }
        }
    }


};
