import {SlotGameBonusComp} from "../../../../../../../../slot_core/corelib/views/containers/SlotGameBonusComp";
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib";
import {slotModel} from "../../../../../../../../slot_core/corelib/models/SlotModel";

export class BonusGame extends SlotGameBonusComp {
    constructor(config) {
        super(config);
        this.bonusContainer = this.elementsList["bonusContainer"];
        this.guideRect = this.bonusContainer.elementsList["guideRect"];
        this.loopAnim = this.bonusContainer.elementsList["loopAnim"];
        this.loopAnim.visible = false;
        // this.frame = this.bonusContainer.elementsList["frame"];
        this.cashWinAnim = this.bonusContainer.elementsList["cashWinAnim"];
        this.fsWinAnim = this.bonusContainer.elementsList["fsWinAnim"];
        this.cashWinAnim.visible = this.fsWinAnim.visible = false;

        this.cashWinAnim.addEventListener("complete", this.onCashWinAnimComplete.bind(this));
        this.fsWinAnim.addEventListener("complete", this.onFSWinAnimComplete.bind(this));

        this.cashBtn = this.bonusContainer.elementsList["cashBtn"];
        this.freeBtn = this.bonusContainer.elementsList["freeBtn"];

        this.topPanel = this.bonusContainer.elementsList["topPanel"];
        this.leftPanel = this.bonusContainer.elementsList["leftPanel"];
        this.rightPanel = this.bonusContainer.elementsList["rightPanel"];

        this.awardMaxValueText = this.leftPanel.elementsList["awardMaxValueText"];
        this.awardMinValueText = this.leftPanel.elementsList["awardMinValueText"];
        this.fsMultiValueText = this.rightPanel.elementsList["fsMultiValueText"];
        this.fsNumberText = this.rightPanel.elementsList["fsNumberText"];

        CoreLib.UIUtil.addInteraction(this.cashBtn, this.onCashBtnClicked.bind(this));
        CoreLib.UIUtil.addInteraction(this.freeBtn, this.onFSBtnClicked.bind(this));

        this.winAmountComp = this.bonusContainer.elementsList["winAmountComp"];
        // this.winAmountComp.on("WinAmountUpdate", this.onWinAmountUpdate.bind(this));
        this.winAmountComp.on("WinAmountCountUpDone", this.onWinAmountCountUpDone.bind(this));
        this.winAmountComp.on("WinAmountFinalValueShown", this.onWinAmountFinalValueShown.bind(this));


            this.cashBtn.alpha = 0;
            this.freeBtn.alpha = 0;


    }
    resetRound () {
        console.log("resetRound happen");
        // this.loopAnim.gotoAndStop(0);
        this.loopAnim.visible = false;
        this.cashWinAnim.visible = false;
        this.fsWinAnim.visible = false;
        // this.winAmountComp.clearWin();
    }

    reset() {
        console.log("reset happens");
        this.loopAnim.visible = false;
        this.cashWinAnim.visible = false;
        this.fsWinAnim.visible = false;
    }

    setValues () {
        let data = slotModel.getFeatureData();
        this.awardMaxValueText.text = CoreLib.WrapperService.formatCurrency(data.maxCashAward);
        this.awardMinValueText.text = CoreLib.WrapperService.formatCurrency(data.minCashAward);
        this.fsMultiValueText.text = data.freespinMultiplier + "X";
        this.fsNumberText.text = data.freespinCount;
    }

    initiateBonusGame () {
        super.initiateBonusGame();
        this.cashAwardPlayed = false;
        this.fsAwardPlayed = false;
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_BONUSGAME_BG);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_SLOTMACHINE_AND_PANEL, false);
        this.reset();
        this.setValues();
        this.loopAnim.visible = true;
        // this.loopAnim.gotoAndPlay(0);
        this.visible = true;
        this.isActive = true;

    }
    triggerSelectFeature () {
        CoreLib.UIUtil.setClickable(this.cashBtn, true);
        CoreLib.UIUtil.setClickable(this.freeBtn, true);
        this.resizeViewComponents();
    }

    handleFeatureResponse () {
        let data = slotModel.getFeatureData();
        console.log(data);
        this.totalWin = data.win;
        if (data.featureType == CoreLib.Model.GameConfig.featureTypes.cashaward) {
            if (data.closed) {
                this.showCashAward(this.totalWin);
            } else {
                this.sendFeatureRequest(-1);
            }
        } else if (data.featureType == CoreLib.Model.GameConfig.featureTypes.freespins) {
            if (this.isActive) {
                this.showFSAward();
            }
        }
    }

    showCashAward() {
        this.loopAnim.visible = false;
        this.cashWinAnim.visible = true;
        this.fsWinAnim.visible = true;
        this.winType = "cash";
        this.cashWinAnim.playAnimation("win_start", false);
        this.fsWinAnim.playAnimation("los_start", false);
    }
    showFSAward () {
        this.loopAnim.visible = false;
        this.cashWinAnim.visible = true;
        this.fsWinAnim.visible = true;
        this.winType = "fs";
        this.cashWinAnim.playAnimation("los_start", false);
        this.fsWinAnim.playAnimation("win_start", false);
        //this.onFSWinAnimComplete();
    }
    onFSWinAnimComplete () {
        if (this.winType == "cash") {
            return;
        }
        if (this.fsAwardPlayed) {
            return;
        }
        this.fsAwardPlayed = true;
        this.cashWinAnim.playAnimation("los_idle", false);
        this.fsWinAnim.playAnimation("win_idle", false);
        let obj = slotModel.getFeatureData();
        let msgObj = {};
        msgObj.title = CoreLib.Util.getContent("congratText");
        msgObj.message1 = CoreLib.Util.getContent("youhavewonText");
        let arr = [obj.totalCount, (obj.multiplier + "X")];
        let str = CoreLib.Util.parseMessage(CoreLib.Util.getContent("numberOfFreespins"), arr);
        msgObj.message2 = str;
        msgObj.callbankFunc = this.endFSAwardRound.bind(this);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_MESSAGE_POPUP, msgObj);

    }
    onCashWinAnimComplete () {
        if (this.winType == "fs") {
            return;
        }
        if (this.cashAwardPlayed) {
            return;
        }
        this.cashAwardPlayed = true;
        this.cashWinAnim.playAnimation("win_idle", true);
        this.fsWinAnim.playAnimation("los_idle", true);
        this.winAmountComp.showWin(this.totalWin);
        CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_COIN_SCORE_SOUND");

    }
    onWinAmountFinalValueShown () {
        CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_COIN_SCORE_END_SOUND");
    }
    onWinAmountCountUpDone () {
        setTimeout(this.showCashAwardEnd.bind(this), 1000);
        this.winAmountComp.clearWin();
    }

    showCashAwardEnd () {
        let msgObj = {};
        msgObj.title = CoreLib.Util.getContent("congratText");
        msgObj.message1 = CoreLib.Util.getContent("youhavewonText");
        msgObj.message2 = CoreLib.WrapperService.formatCurrency(this.totalWin);
        msgObj.callbankFunc = this.endCashAwardRound.bind(this);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_MESSAGE_POPUP, msgObj);
        this.resetRound();
    }

    endCashAwardRound () {
        this.visible = false;
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.NOTIFY_BONUS_ROUND_END);
    }

    endFSAwardRound () {
        this.visible = false;
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.NOTIFY_FS_ENTRY_SHOWN);
    }

    onWinAnimAppearead () {

    }

    loopCashWin () {
        //this.cashWinAnim.gotoAndPlay(44);
    }

    loopFSWin () {
        //this.fsWinAnim.gotoAndPlay(60);
    }

    onCashBtnClicked () {
        this.disableGame();
        this.sendFeatureRequest(1);
        CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_ITEM_CLICK_SOUND");
        // this.loopAnim.visible = false;
        // this.cashWinAnim.visible = true;
        // this.cashWinAnim.gotoAndPlay(0);
    }
    onFSBtnClicked () {
        this.disableGame();
        this.sendFeatureRequest(0);
        CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_ITEM_CLICK_SOUND");
    }
    disableGame() {
        CoreLib.UIUtil.setClickable(this.cashBtn, false);
        CoreLib.UIUtil.setClickable(this.freeBtn, false);
    }

    resizeViewComponents () {
        super.resizeViewComponents();
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.guideRect.width = this.guideRect.configData.pwidth;
                this.guideRect.height = this.guideRect.configData.pheight;
            } else {
                this.guideRect.width = this.guideRect.configData.width;
                this.guideRect.height = this.guideRect.configData.height;
                // this.frame.visible = true;
            }
            for (let p in this.elementsList) {
                CoreLib.UIUtil.setPositionBasedOnDevice(this.elementsList[p]);
            }
            for (let p in this.bonusContainer.elementsList) {
                CoreLib.UIUtil.setPositionBasedOnDevice(this.bonusContainer.elementsList[p]);
            }
            for (let p in this.leftPanel.elementsList) {
                CoreLib.UIUtil.setPositionBasedOnDevice(this.leftPanel.elementsList[p]);
            }
            for (let p in this.rightPanel.elementsList) {
                CoreLib.UIUtil.setPositionBasedOnDevice(this.rightPanel.elementsList[p]);
            }
            for (let p in this.topPanel.elementsList) {
                CoreLib.UIUtil.setPositionBasedOnDevice(this.topPanel.elementsList[p]);
            }

        }
        CoreLib.UIUtil.adjustElement(this.bonusContainer);
    }

};
