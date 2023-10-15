import {SlotGameBonusComp} from "../../../../../../../../slot_core/corelib/views/containers/SlotGameBonusComp";
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib";
import {slotModel} from "../../../../../../../../slot_core/corelib/models/SlotModel";

export class BonusGame extends SlotGameBonusComp {
    constructor(config) {
        super(config);
        this.bonusgamebg = this.elementsList["bonusgamebg"];
        this.bonusContainer = this.elementsList["bonusContainer"];
        this.guideRect = this.bonusContainer.elementsList["guideRect"];
        this.bonus_game = this.bonusContainer.elementsList["Bonus_game"];
        this.holeBtn1 = this.bonusContainer.elementsList["holeBtn1"];
        this.holeBtn2 = this.bonusContainer.elementsList["holeBtn2"];
        this.holeBtn3 = this.bonusContainer.elementsList["holeBtn3"];
        this.holeBtn4 = this.bonusContainer.elementsList["holeBtn4"];
        this.holeBtn5 = this.bonusContainer.elementsList["holeBtn5"];
        if (this.guideRect) {
            this.guideRect.renderable = false;
        }
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_BONUSGAME_BG);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_SLOTMACHINE_AND_PANEL, false);
        this.isActive = true;
        this.holeBtn1.alpha = 0;
        this.holeBtn2.alpha = 0;
        this.holeBtn3.alpha = 0;
        this.holeBtn4.alpha = 0;
        this.holeBtn5.alpha = 0;
        CoreLib.UIUtil.addInteraction(this.holeBtn1, this.onHoleBtnClicked1.bind(this, this.holeBtn1));
        CoreLib.UIUtil.addInteraction(this.holeBtn2, this.onHoleBtnClicked2.bind(this, this.holeBtn2));
        CoreLib.UIUtil.addInteraction(this.holeBtn3, this.onHoleBtnClicked3.bind(this, this.holeBtn3));
        CoreLib.UIUtil.addInteraction(this.holeBtn4, this.onHoleBtnClicked4.bind(this, this.holeBtn4));
        CoreLib.UIUtil.addInteraction(this.holeBtn5, this.onHoleBtnClicked5.bind(this, this.holeBtn5));
        this.bonus_game.addEventListener("complete", this.onBonusSpineAnimCompleted.bind(this));
        this.bonusText = this.bonusContainer.elementsList["bonusText"];
        this.bonusText2 = this.bonusContainer.elementsList["bonusText2"];
        this.bonusText3 = this.bonusContainer.elementsList["bonusText3"];
        let str = CoreLib.Util.getContent("totalFreeSpinBonus");
        let arr = [];
        arr.push(8);
        this.bonusText2.text = CoreLib.Util.parseMessage(str, arr);
        let str2 = CoreLib.Util.getContent("totalMultiplierBonus");
        let arr2 = [];
        arr2.push(2);
        this.bonusText3.text = CoreLib.Util.parseMessage(str2, arr2);
        this.disableAllHoleBtn();
        CoreLib.EventHandler.addEventListener("EnableBonusButtons", this.enableAllHoleBtn.bind(this));
    }

    initiateBonusGame () {
        super.initiateBonusGame();
        this.resetBonus();
    }

    resetBonus(){
        this.visible = true;
        this.holeBtnClicked = 0;
        this.bonusText.alpha = 0;
        let str = CoreLib.Util.getContent("totalFreeSpinBonus");
        let arr = [];
        arr.push(8);
        this.bonusText2.text = CoreLib.Util.parseMessage(str, arr);
        let str2 = CoreLib.Util.getContent("totalMultiplierBonus");
        let arr2 = [];
        arr2.push(2);
        this.bonusText3.text = CoreLib.Util.parseMessage(str2, arr2);
        this.bonus_game.playAnimation("Idle_ALL", true);
    }

    showWinAmountWin (val, isFreeSpin) {
        CoreLib.AnimationManager.animateTween(this.bonusText, 0.5, {alpha : 1, ease : Linear.easeNone})
        if(isFreeSpin){
            this.bonusText.text = val + " Free Spins";
        }else{
            this.bonusText.text = val + "X Multiplier";
        }
        let data = slotModel.getFeatureResult().featureResults[0];
        let str = CoreLib.Util.getContent("totalFreeSpinBonus");
        let arr = [];
        arr.push(data.freespinCount);
        this.bonusText2.text = CoreLib.Util.parseMessage(str, arr);
        let str2 = CoreLib.Util.getContent("totalMultiplierBonus");
        let arr2 = [];
        arr2.push(data.freespinMultiplier);
        this.bonusText3.text = CoreLib.Util.parseMessage(str2, arr2);
        this.bonusText.x = this["holeBtn" + this.holeBtnClicked].x + this["holeBtn" + this.holeBtnClicked].width/2;
        this.bonusText.y = this["holeBtn" + this.holeBtnClicked].y + this["holeBtn" + this.holeBtnClicked].height/2;
        setTimeout(this.showCashAwardEnd.bind(this), 50);
    }

    showCashAwardEnd () {
        let data = slotModel.getFeatureResult().featureResults[0];
        if(data && !data.closed) {
            this.enableAllHoleBtn(this.holeBtnClicked);
        }
    }

    onHoleBtnClicked1 () {
        CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_ITEM_CLICK_SOUND");
        this.holeBtnClicked = 1;
        this.disableAllHoleBtn();
        this.sendFeatureRequest(1);
    }
    onHoleBtnClicked2 () {
        CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_ITEM_CLICK_SOUND");
        this.holeBtnClicked = 2;
        this.disableAllHoleBtn();
        this.sendFeatureRequest(2);
    }
    onHoleBtnClicked3 () {
        CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_ITEM_CLICK_SOUND");
        this.holeBtnClicked = 3;
        this.disableAllHoleBtn();
        this.sendFeatureRequest(3);
    }
    onHoleBtnClicked4 () {
        CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_ITEM_CLICK_SOUND");
        this.holeBtnClicked = 4;
        this.disableAllHoleBtn();
        this.sendFeatureRequest(4);
    }
    onHoleBtnClicked5 () {
        CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_ITEM_CLICK_SOUND");
        this.holeBtnClicked = 5;
        this.disableAllHoleBtn();
        this.sendFeatureRequest(5);
    }

    disableAllHoleBtn(){
        for(let i = 1; i <= 5; i++) {
            CoreLib.UIUtil.setClickable(this["holeBtn"+i], false);
        }
    }

    enableAllHoleBtn(btnClicked){
        for(let i = 1; i <= 5; i++) {
            CoreLib.UIUtil.setClickable(this["holeBtn"+i], true);
        }
        if(btnClicked) {
            CoreLib.UIUtil.setClickable(this["holeBtn" + btnClicked], false);
        }
    }

    handleFeatureResponse () {
        CoreLib.AnimationManager.animateTween(this.bonusText, 0.5, {alpha : 0, ease : Linear.easeNone});
        let data = slotModel.getFeatureResult().featureResults[0];
        if(this.holeBtnClicked == 1) {
            if (data.awardedFreespins > 0) {
                this.bonus_game.playAnimation("Fishing_Glow_Hole_1", false)
                setTimeout(this.showWinAmountWin.bind(this, data.awardedFreespins, true), 1000);
            } else {
                this.bonus_game.playAnimation("Fishing_Boot_Hole_1", false)
                setTimeout(this.showWinAmountWin.bind(this, data.awardedMultiplier, false), 1000);
            }
        }
        if(this.holeBtnClicked == 2) {
            if (data.awardedFreespins > 0) {
                this.bonus_game.playAnimation("Fishing_Glow_Hole_2", false)
                setTimeout(this.showWinAmountWin.bind(this, data.awardedFreespins, true), 1000);
            } else {
                this.bonus_game.playAnimation("Fishing_Boot_Hole_2", false)
                setTimeout(this.showWinAmountWin.bind(this, data.awardedMultiplier, false), 1000);
            }
        }
        if(this.holeBtnClicked == 3) {
            if (data.awardedFreespins > 0) {
                this.bonus_game.playAnimation("Fishing_Glow_Hole_3", false)
                setTimeout(this.showWinAmountWin.bind(this, data.awardedFreespins, true), 1000);
            } else {
                this.bonus_game.playAnimation("Fishing_Boot_Hole_3", false)
                setTimeout(this.showWinAmountWin.bind(this, data.awardedMultiplier, false), 1000);
            }
        }
        if(this.holeBtnClicked == 4) {
            if (data.awardedFreespins > 0) {
                this.bonus_game.playAnimation("Fishing_Glow_Hole_4", false)
                setTimeout(this.showWinAmountWin.bind(this, data.awardedFreespins, true), 1000);
            } else {
                this.bonus_game.playAnimation("Fishing_Boot_Hole_4", false)
                setTimeout(this.showWinAmountWin.bind(this, data.awardedMultiplier, false), 1000);
            }
        }
        if(this.holeBtnClicked == 5) {
            if (data.awardedFreespins > 0) {
                this.bonus_game.playAnimation("Fishing_Glow_Hole_5", false)
                setTimeout(this.showWinAmountWin.bind(this, data.awardedFreespins, true), 1000);
            } else {
                this.bonus_game.playAnimation("Fishing_Boot_Hole_5", false)
                setTimeout(this.showWinAmountWin.bind(this, data.awardedMultiplier, false), 1000);
            }
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

    showBonusResultPopup (msgObj) {
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_MESSAGE_POPUP, msgObj);
    }

    endFSAwardRound () {
        this.visible = false;
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.NOTIFY_FS_ENTRY_SHOWN);
    }

    onBonusSpineAnimCompleted(data){
        if(data.name == "Fishing_Glow_Hole_1" || data.name == "Fishing_Glow_Hole_2" || data.name == "Fishing_Glow_Hole_3" || data.name == "Fishing_Glow_Hole_4" || data.name == "Fishing_Glow_Hole_5"){
            this.bonus_game.playAnimation("Idle_2_Glow_ALL")
        }else if(data.name == "Fishing_Boot_Hole_1" || data.name == "Fishing_Boot_Hole_2" || data.name == "Fishing_Boot_Hole_3" || data.name == "Fishing_Boot_Hole_4" || data.name == "Fishing_Boot_Hole_5"){
            this.bonus_game.playAnimation("Idle_2_Boot_ALL")
        }else if(data.name == "Idle_2_Glow_ALL"){
            this.bonus_game.playAnimation("Disappearance_Glow_ALL")
        }else if(data.name == "Idle_2_Boot_ALL"){
            this.bonus_game.playAnimation("Disappearance_Boot_ALL")
        }else if(data.name == "Disappearance_Glow_ALL" || data.name == "Disappearance_Boot_ALL"){
            this.bonus_game.playAnimation("Idle_ALL", true)
        }
    }

    resizeViewComponents () {
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
    }


};
