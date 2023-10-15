import {SlotGameBonusComp} from "../../../../../../../../slot_core/corelib/views/containers/SlotGameBonusComp";
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib";
import {slotModel} from "../../../../../../../../slot_core/corelib/models/SlotModel";

export class BonusGame extends SlotGameBonusComp {
    constructor(config) {
        super(config);
        this.bonusContainer = this.elementsList["bonusContainer"];
        this.guideRect = this.bonusContainer.elementsList["guideRect"];
        if (this.guideRect) {
            this.guideRect.renderable = false;
        }
        this.loopAnim = this.bonusContainer.elementsList["loopAnim"];
        this.loopAnim.visible = false;
        this.frame = this.bonusContainer.elementsList["frame"];
        this.cashWinAnim = this.bonusContainer.elementsList["cashWinAnim"];
        this.fsWinAnim = this.bonusContainer.elementsList["fsWinAnim"];
        this.cashWinAnim.visible = this.fsWinAnim.visible = false;
        this.cashWinAnim.onComplete = this.loopCashWin.bind(this);
        this.fsWinAnim.onComplete = this.loopFSWin.bind(this);

        this.cashWinAnim.onComplete = this.onCashWinAnimComplete.bind(this);
        this.fsWinAnim.onComplete = this.onFSWinAnimComplete.bind(this);

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
        //this.winAmountComp.on("WinAmountUpdate", this.onWinAmountUpdate.bind(this));
        this.winAmountComp.on("WinAmountCountUpDone", this.onWinAmountCountUpDone.bind(this));
        this.winAmountComp.on("WinAmountFinalValueShown", this.onWinAmountFinalValueShown.bind(this));


        this.cashBtn.alpha = 0;
        this.freeBtn.alpha = 0;


    }
    resetRound () {
        this.loopAnim.gotoAndStop(0);
        this.cashWinAnim.gotoAndStop(0);
        this.fsWinAnim.gotoAndStop(0);
        this.loopAnim.visible = false;
        this.cashWinAnim.visible = false;
        this.fsWinAnim.visible = false;
        this.winAmountComp.clearWin();
    }

    reset() {

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

        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_BONUSGAME_BG);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_SLOTMACHINE_AND_PANEL, false);
        this.reset();
        this.setValues();
        this.loopAnim.visible = true;
        this.loopAnim.gotoAndPlay(0);
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
        this.cashWinAnim.gotoAndPlay(0);

    }
    showFSAward () {
        this.loopAnim.visible = false;
        this.fsWinAnim.visible = true;
        this.fsWinAnim.gotoAndPlay(0);
    }
    onFSWinAnimComplete () {
        let obj = slotModel.getFeatureData();
        let msgObj = {};
        msgObj.title = CoreLib.Util.getContent("congratText");
        msgObj.message1 = CoreLib.Util.getContent("youhavewonText");
        let arr = [obj.totalCount, (obj.multiplier + "X")];
        let str = CoreLib.Util.parseMessage(CoreLib.Util.getContent("numberOfFreespins"), arr);
        msgObj.message2 = str;
        msgObj.callbankFunc = this.endFSAwardRound.bind(this);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_MESSAGE_POPUP, msgObj);
        this.resetRound();
    }
    onCashWinAnimComplete () {
        this.winAmountComp.showWin(this.totalWin);
        CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_COIN_SCORE_SOUND");
    }
    onWinAmountFinalValueShown () {
        CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_COIN_SCORE_END_SOUND");
    }
    onWinAmountCountUpDone () {
        setTimeout(this.showCashAwardEnd.bind(this), 1000);
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
        this.cashWinAnim.gotoAndPlay(44);
    }

    loopFSWin () {
        this.fsWinAnim.gotoAndPlay(60);
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

                this.frame.visible = false;
                CoreLib.UIUtil.setPosition(this.topPanel, this.topPanel.configData.px, this.topPanel.configData.py);
                CoreLib.UIUtil.setPosition(this.leftPanel, this.leftPanel.configData.px, this.leftPanel.configData.py);
                CoreLib.UIUtil.setPosition(this.rightPanel, this.rightPanel.configData.px, this.rightPanel.configData.py);
                CoreLib.UIUtil.setPosition(this.loopAnim, this.loopAnim.configData.px, this.loopAnim.configData.py);
                CoreLib.UIUtil.setPosition(this.cashWinAnim, this.cashWinAnim.configData.px, this.cashWinAnim.configData.py);
                CoreLib.UIUtil.setPosition(this.fsWinAnim, this.fsWinAnim.configData.px, this.fsWinAnim.configData.py);
                CoreLib.UIUtil.setPosition(this.cashBtn, this.cashBtn.configData.px, this.cashBtn.configData.py);
                CoreLib.UIUtil.setPosition(this.freeBtn, this.freeBtn.configData.px, this.freeBtn.configData.py);
                CoreLib.UIUtil.setPosition(this.winAmountComp, this.winAmountComp.configData.px, this.winAmountComp.configData.py);
            } else {
                this.guideRect.width = this.guideRect.configData.width;
                this.guideRect.height = this.guideRect.configData.height;
                this.frame.visible = true;
                CoreLib.UIUtil.setPosition(this.topPanel, this.topPanel.configData.x, this.topPanel.configData.y);
                CoreLib.UIUtil.setPosition(this.leftPanel, this.leftPanel.configData.x, this.leftPanel.configData.y);
                CoreLib.UIUtil.setPosition(this.rightPanel, this.rightPanel.configData.x, this.rightPanel.configData.y);
                CoreLib.UIUtil.setPosition(this.loopAnim, this.loopAnim.configData.x, this.loopAnim.configData.y);
                CoreLib.UIUtil.setPosition(this.cashWinAnim, this.cashWinAnim.configData.x, this.cashWinAnim.configData.y);
                CoreLib.UIUtil.setPosition(this.fsWinAnim, this.fsWinAnim.configData.x, this.fsWinAnim.configData.y);
                CoreLib.UIUtil.setPosition(this.cashBtn, this.cashBtn.configData.x, this.cashBtn.configData.y);
                CoreLib.UIUtil.setPosition(this.freeBtn, this.freeBtn.configData.x, this.freeBtn.configData.y);
                CoreLib.UIUtil.setPosition(this.winAmountComp, this.winAmountComp.configData.x, this.winAmountComp.configData.y);
            }
        }
        CoreLib.UIUtil.adjustElement(this.bonusContainer);
    }

};
