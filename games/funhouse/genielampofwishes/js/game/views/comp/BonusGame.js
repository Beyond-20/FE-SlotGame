import { SlotGameBonusComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotGameBonusComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";

import { soundFactory } from "../../../../../../../../slot_core/corelib/sound/SoundFactory";

export class BonusGame extends SlotGameBonusComp {
    constructor(config) {
        super(config);
        this.bonusContainer = this.elementsList["bonusContainer"];
        this.guideRect = this.bonusContainer.elementsList["guideRect"];
        this.totalWinAmountComp = this.elementsList["totalWinAmountComp"];
        this.winAmountComp = this.bonusContainer.elementsList["winAmountComp"];
        this.winTitlebg = this.totalWinAmountComp.elementsList["winTitlebg"];
        this.winTextbg = this.totalWinAmountComp.elementsList["winTextbg"];
        this.winText = this.totalWinAmountComp.elementsList["winText"];
        this.winTitle = this.totalWinAmountComp.elementsList["winTitle"];
        this.lamp1 = this.bonusContainer.elementsList["lamp1"];
        this.lamp2 = this.bonusContainer.elementsList["lamp2"];
        this.lamp3 = this.bonusContainer.elementsList["lamp3"];
        this.bonusTitle = this.elementsList["bonusTitle"];
        this.bonusSubTitle = this.elementsList["bonusSubTitle"];
        this.totalLamps = 3;
        for (let k = 1; k <= this.totalLamps; k++) {
            this["lamp" + k].on("lamp_CLICKED", this.onLampClicked.bind(this));
            //this["lamp" + k].on("lamp_OPENED", this.onLampOpened.bind(this));
        }
        this.winAmountComp = this.bonusContainer.elementsList["winAmountComp"];
        this.winAmountComp.on("WinAmountCountUpDone", this.onWinAmountDone.bind(this));
        this.winAmountComp.on("WinAmountFinalValueShown", this.onWinAmountCountUpDone.bind(this));
        this.totalWinAmountComp.on("WinAmountCountUpDone", this.onTotalWinAmountDone.bind(this));
        CoreLib.EventHandler.addEventListener("EnableBonusButtons", this.enableBonusElements.bind(this));
    }

    initiateBonusGame() {
        super.initiateBonusGame();
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_BONUSGAME_BG);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_SLOTMACHINE_AND_PANEL, false);
        this.visible = true;
        this.reset();
        this.setValues();

    }

    enableBonusElements() {
        this.enableLamps(true);
    }

    enableLamps(flag) {
        for (let k = 1; k <= this.totalLamps; k++) {
            this["lamp" + k].setEnabled(flag);
        }
    }

    reset() {

    }

    setValues() {
        let data = slotModel.getFeatureData();
        if (data.level > 1 && data.level <= 5) {
            this.totalWinAmountComp.showText(CoreLib.WrapperService.formatCurrency(data.totalWin));
            this.lamp1.playIdleAnimation(data.level);
            this.lamp2.playIdleAnimation(data.level);
            this.lamp3.playIdleAnimation(data.level);
        } else {
            this.lamp1.playIdleAnimation(1);
            this.lamp2.playIdleAnimation(1);
            this.lamp3.playIdleAnimation(1);
            this.totalWinAmountComp.showText("0");
        }
        CoreLib.EventHandler.dispatchEvent("START_BONUS_BG_MUSIC");
    }

    handleFeatureResponse() {
        //this["lamp" + this.clickedLamp].showLampOpen(1, true);       
        this.coinSoundPlaying = false;
        this.isLampOpened = false;
        let data = slotModel.getFeatureData();
        if (data.collect) {
            this["lamp" + this.clickedLamp].showLampOpen(data.level, false);
        } else {
            this.lastTotalWin = data.totalWin;
            this["lamp" + this.clickedLamp].showLampOpen(data.level - 1, true);
        }
        setTimeout(this.onLampOpened.bind(this), 750);
    }

    onLampClicked(id) {
        this.enableLamps(false);
        this.clickedLamp = id;
        this.sendFeatureRequest(id);
        CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_ITEM_CLICK_SOUND");

    }

    onLampOpened() {
        // this.winAmountComp.showWin(50);
        // this.winAmountComp.x = this["lamp" + this.clickedLamp].x +this["lamp" + this.clickedLamp].width / 2
        // this.winAmountComp.y = this["lamp" + this.clickedLamp].y + this["lamp" + this.clickedLamp].height / 2 - 300 ;
        if (this.isLampOpened) {
            return;
        }
        this.isLampOpened = true;
        let data = slotModel.getFeatureData();
        if (data.collect && data.bonusResults.length < 5) {
            setTimeout(this.roundWinAnimated.bind(this), 1000);
        } else {
            this.winAmountComp.alpha = 1;
            let win = data.bonusResults[data.bonusResults.length - 1].win;
            if (data.bonusResults.length == 5) {
                this.winAmountComp.showText("X" + win);
                if (CoreLib.Model.DeviceConfig.isDevice) {
                    if (CoreLib.Model.DeviceConfig.isPortrait) {
                        CoreLib.AnimationManager.animateTween(this.winAmountComp, 0.5, { delay: 1.5, x: this.totalWinAmountComp.x + 850, y: this.totalWinAmountComp.y - 100, alpha: 0.1, onComplete: this.lastRoundWinAnimated.bind(this) });
                    } else {
                        CoreLib.AnimationManager.animateTween(this.winAmountComp, 0.5, { delay: 1.5, x: this.totalWinAmountComp.x - 50, y: this.totalWinAmountComp.y + 70, alpha: 0.1, onComplete: this.lastRoundWinAnimated.bind(this) });
                    }
                } else {
                    CoreLib.AnimationManager.animateTween(this.winAmountComp, 0.5, { delay: 1.5, x: this.totalWinAmountComp.x - 50, y: this.totalWinAmountComp.y + 70, alpha: 0.1, onComplete: this.lastRoundWinAnimated.bind(this) });
                }
                CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_MULTIPLIER_SCORE_SOUND");
            } else {
                this.winAmountComp.showWin(win);
                if (!this.coinSoundPlaying) {
                    this.coinSoundPlaying = true;
                    CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_COIN_SCORE_SOUND");
                }
            }
            this.winAmountComp.x = this["lamp" + this.clickedLamp].x + this["lamp" + this.clickedLamp].width / 2 - 20;
            this.winAmountComp.y = this["lamp" + this.clickedLamp].y + this["lamp" + this.clickedLamp].height / 2 - 450;
        }
    }

    onWinAmountCountUpDone() {
        CoreLib.EventHandler.dispatchEvent("STOP_BONUS_COIN_SCORE_SOUND");
        soundFactory.stopSound({ name: "Game Point Counter" });
        this.coinSoundPlaying = false;
    }

    onWinAmountDone() {
        CoreLib.AnimationManager.animateTween(this.winAmountComp, 0.5, { alpha: 0, onComplete: this.roundWinAnimated.bind(this) });
    }

    roundWinAnimated() {
        // CoreLib.AnimationManager.animateTween(this.winAmountComp, 0.2, {alpha: 0, onComplete : this.checkToEnableRound.bind(this)});
        // this["lamp" + this.clickedLamp].showCloseAnimation(1);
        //this.totalWinAmountComp.showText(5000);
        CoreLib.EventHandler.dispatchEvent("STOP_BONUS_COIN_SCORE_SOUND");
        CoreLib.AnimationManager.animateTween(this.winAmountComp, 0.2, { alpha: 0 });
        this.coinSoundPlaying = false;
        let data = slotModel.getFeatureData();
        if (data.collect) {
            this["lamp" + this.clickedLamp].showCloseAnimation(data.level);
            CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_ITEM_CLOSE_SOUND");
        } else {
            this["lamp" + this.clickedLamp].showCloseAnimation(data.level - 1);
            CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_ITEM_CLOSE_SOUND");
        }
        this.totalWinAmountComp.showText(CoreLib.WrapperService.formatCurrency(data.totalWin));
        if (data.collect) {
            this.showEnd();
        } else {
            this.slideLampstoNxtLevel();
        }
    }
    slideLampstoNxtLevel() {
        let data = slotModel.getFeatureData();
        if (data && data.level > 1) {
            setTimeout(() => {
                this.lamp1.playOutAnimation(data.level - 1);
                CoreLib.EventHandler.dispatchEvent("PLAY_CARPET_MOVING_SOUND");
            }, 100);
            setTimeout(() => {
                this.lamp2.playOutAnimation(data.level - 1);
                CoreLib.EventHandler.dispatchEvent("PLAY_CARPET_MOVING_SOUND");
            }, 250);
            setTimeout(() => {
                this.lamp3.playOutAnimation(data.level - 1);
                CoreLib.EventHandler.dispatchEvent("PLAY_CARPET_MOVING_SOUND");
            }, 400);

            setTimeout(() => {
                this.lamp1.playStartAnimation(data.level);
                CoreLib.EventHandler.dispatchEvent("PLAY_CARPET_MOVING_SOUND");
            }, 1500);

            setTimeout(() => {
                this.lamp2.playStartAnimation(data.level);
                CoreLib.EventHandler.dispatchEvent("PLAY_CARPET_MOVING_SOUND");
            }, 1650);
            setTimeout(() => {
                this.lamp3.playStartAnimation(data.level);
                CoreLib.EventHandler.dispatchEvent("PLAY_CARPET_MOVING_SOUND");
            }, 1800);
        } else {
            this.lamp1.playStartAnimation(1);
            this.lamp2.playStartAnimation(1);
            this.lamp3.playStartAnimation(1);
        }
        if (!data.collect) {
            setTimeout(this.enableNextRound.bind(this), 2500);
        } else {

        }
    }


    lastRoundWinAnimated() {
        let data = slotModel.getFeatureData();
        let win = data.bonusResults[data.bonusResults.length - 1].win;
        if (win > 1) {
            this.totalWinAmountComp.showWin(data.totalWin, true, this.lastTotalWin);
        } else {
            this.onTotalWinAmountDone();
        }
    }

    onTotalWinAmountDone() {
        setTimeout(this.highlightTotalWin.bind(this), 1000);
    }

    highlightTotalWin() {
        CoreLib.AnimationManager.animateTween(this.winAmountComp, 0.2, { alpha: 0 });
        CoreLib.AnimationManager.animateTween(this.totalWinAmountComp.winText, 0.4, { scaleX: 1.2, scaleY: 1.2, repeat: 3, yoyo: true, onComplete: this.highlightWinCompleted.bind(this) })
    }

    highlightWinCompleted() {
        this.totalWinAmountComp.winText.scale.set(1);
        this.winAmountComp.clearWin();
        this.showEnd();
    }

    showEnd() {
        let data = slotModel.getFeatureData();
        let msgObj = {};
        msgObj.title = CoreLib.Util.getContent("congratText");
        msgObj.message1 = CoreLib.Util.getContent("youhavewonText");
        msgObj.message2 = CoreLib.WrapperService.formatCurrency(data.totalWin);
        msgObj.callbankFunc = this.endBonusRound.bind(this);
        CoreLib.EventHandler.dispatchEvent("STOP_BONUS_SELECTION_BG_MUSIC");
        setTimeout(this.showBonusResultPopup.bind(this, msgObj), 500);
    }

    showBonusResultPopup(msgObj) {
        this.winAmountComp.clearWin();
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_MESSAGE_POPUP, msgObj);
    }

    endBonusRound() {
        this.visible = false;
        CoreLib.EventHandler.dispatchEvent("STOP_BONUS_BG_MUSIC");
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.NOTIFY_BONUS_ROUND_END);
    }

    enableNextRound() {
        this.setValues();
        this.resetElements();
    }

    resetElements() {
        this.winAmountComp.alpha = 1;
        this.winAmountComp.clearWin();
        this.enableLamps(true);
    }

    resizeViewComponents() {
        super.resizeViewComponents();
        CoreLib.UIUtil.adjustElement(this.bonusContainer);
        CoreLib.UIUtil.positionObjectForDevice(this.bonusContainer);
        CoreLib.UIUtil.adjustElement(this.guideRect);
        CoreLib.UIUtil.adjustWidthHeightForMobile(this.guideRect);
        CoreLib.UIUtil.adjustElement(this.bonusTitle);
        CoreLib.UIUtil.positionObjectForDevice(this.bonusTitle);
        CoreLib.UIUtil.adjustElement(this.bonusSubTitle);
        CoreLib.UIUtil.positionObjectForDevice(this.bonusSubTitle);
        CoreLib.UIUtil.adjustElement(this.lamp1);
        CoreLib.UIUtil.positionObjectForDevice(this.lamp1);
        CoreLib.UIUtil.adjustElement(this.lamp2);
        CoreLib.UIUtil.positionObjectForDevice(this.lamp2);
        CoreLib.UIUtil.adjustElement(this.lamp3);
        CoreLib.UIUtil.positionObjectForDevice(this.lamp3);

        CoreLib.UIUtil.adjustElement(this.winTitlebg);
        CoreLib.UIUtil.positionObjectForDevice(this.winTitlebg);
        CoreLib.UIUtil.adjustElement(this.winTextbg);
        CoreLib.UIUtil.positionObjectForDevice(this.winTextbg);
        CoreLib.UIUtil.adjustElement(this.winText);
        CoreLib.UIUtil.positionObjectForDevice(this.winTitle);
        CoreLib.UIUtil.adjustElement(this.winTitle);
        CoreLib.UIUtil.positionObjectForDevice(this.winText);
        CoreLib.UIUtil.adjustElement(this.winAmountComp);
        CoreLib.UIUtil.positionObjectForDevice(this.winAmountComp);

        CoreLib.UIUtil.adjustElement(this.totalWinAmountComp);
        CoreLib.UIUtil.positionObjectForDevice(this.totalWinAmountComp);

        if (this.clickedLamp != undefined) {
            this.winAmountComp.x = this["lamp" + this.clickedLamp].x + this["lamp" + this.clickedLamp].width / 2 - 20;
            this.winAmountComp.y = this["lamp" + this.clickedLamp].y + this["lamp" + this.clickedLamp].height / 2 - 450;
        }

        this.handleCustomResize();
        setTimeout(this.handleCustomResize.bind(this), 100);
    }

    handleCustomResize() {
        let wsc;
        let hsc;
        this.bonusContainer.scale.set(1);
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                wsc = (CoreLib.UIUtil.getGameWidth() * 0.85) / this.guideRect.width;
                hsc = (CoreLib.UIUtil.getGameHeight() * 0.8) / this.guideRect.height;
            } else {
                wsc = (CoreLib.UIUtil.getGameWidth() * 0.8) / this.guideRect.width;
                hsc = (CoreLib.UIUtil.getGameHeight() * 0.8) / this.guideRect.height;
            }
        } else {
            wsc = (CoreLib.UIUtil.getGameWidth()) / this.guideRect.width;
            hsc = (CoreLib.UIUtil.getGameHeight() * 0.8) / this.guideRect.height;

        }
        this.bonusContainer.scale.set(Math.min(wsc, hsc));
        this.bonusContainer.x = (CoreLib.UIUtil.getGameWidth() - this.guideRect.width * this.bonusContainer.scale.x) / 2;
        if (CoreLib.Model.DeviceConfig.isDesktop) {
            this.bonusContainer.y = (CoreLib.UIUtil.getGameHeight() - this.guideRect.height * this.bonusContainer.scale.y) / 2 + CoreLib.UIUtil.getGameHeight() * 0.1;
        } else {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.bonusContainer.y = (CoreLib.UIUtil.getGameHeight() - this.guideRect.height * this.bonusContainer.scale.y) / 2 + CoreLib.UIUtil.getGameHeight() * 0.1;
            } else {
                this.bonusContainer.y = (CoreLib.UIUtil.getGameHeight() - this.guideRect.height * this.bonusContainer.scale.y) + CoreLib.UIUtil.getGameHeight() * 0.05;
            }
        }

    }
};
