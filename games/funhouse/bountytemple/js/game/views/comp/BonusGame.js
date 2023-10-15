import { SlotGameBonusComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotGameBonusComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";

import { soundFactory } from "../../../../../../../../slot_core/corelib/sound/SoundFactory";

export class BonusGame extends SlotGameBonusComp {
    constructor(config) {
        super(config);
        this.bonusContainer = this.elementsList["bonusContainer"];
        this.animBG = this.bonusContainer.elementsList["animBG"];
        this.animBGP = this.bonusContainer.elementsList["animBGP"];
        this.animBG.x = this.animBG.width / 2;
        this.animBG.y = this.animBG.height / 2;
        this.animBGP.x = this.animBGP.width / 2;
        this.animBGP.y = this.animBGP.height / 2;
        this.lWidth = this.animBG.width;
        this.lHeight = this.animBG.height;
        this.pWidth = this.animBGP.width;
        this.pHeight = this.animBGP.height;
        this.bonusTitle = this.elementsList["bonusTitle"];
        this.winTitle = this.bonusContainer.elementsList["winTitle"];
        if (CoreLib.Model.DeviceConfig.isDesktop) {
            this.animBGP.renderable = false;
        }
        this.door1 = this.bonusContainer.elementsList["door1"];
        this.door2 = this.bonusContainer.elementsList["door2"];
        this.door3 = this.bonusContainer.elementsList["door3"];
        this.totalDoors = 3;
        for (let k = 1; k <= this.totalDoors; k++) {
            this["door" + k].on("DOOR_CLICKED", this.onDoorClicked.bind(this));
            //this["door" + k].on("DOOR_OPENED", this.onDoorOpened.bind(this));
        }
        this.winAmountComp = this.bonusContainer.elementsList["winAmountComp"];
        this.totalWinAmountComp = this.bonusContainer.elementsList["totalWinAmountComp"];
        this.winAmountComp.on("WinAmountCountUpDone", this.onWinAmountDone.bind(this));
        this.winAmountComp.on("WinAmountFinalValueShown", this.onWinAmountCountUpDone.bind(this));
        this.totalWinAmountComp.on("WinAmountCountUpDone", this.onTotalWinAmountDone.bind(this));
        this.wellAnimation = ["well_1-2", "well_2-3", "well_3-4", "well_4-5"];
        //this.animBG.addEventListener("complete", this.onBGAnimCompleted.bind(this));
        //this.animBGP.addEventListener("complete", this.onBGPAnimCompleted.bind(this));
        if (CoreLib.Model.DeviceConfig.isDevice) {
            this.animBG.playAnimation("well_1_3_static", false);
            this.animBGP.playAnimation("well_1-2_static", false);
        } else {
            this.animBG.playAnimation("well_1_3_static", false);
        }
        CoreLib.EventHandler.addEventListener("EnableBonusButtons", this.enableBonusElements.bind(this));
    }
    resetRound() {

    }

    reset() {

    }

    setValues() {
        let data = slotModel.getFeatureData();
        if (data && data.level > 1) {
            this.totalWinAmountComp.showText(CoreLib.WrapperService.formatCurrency(data.totalWin));
            if (data.level <= 3) {
                if (CoreLib.Model.DeviceConfig.isDevice) {
                    this.animBG.playAnimation("well_1_3_static", false);
                    this.animBGP.playAnimation("well_1-2_static", false);
                } else {
                    this.animBG.playAnimation("well_1_3_static", false);
                }

            } else if (data.level == 4) {
                this.animBG.playAnimation("well_4_static", false);
                if (this.animBGP) {
                    this.animBGP.playAnimation("well_4_static", false);
                }

            } else if (data.level == 5) {
                this.animBG.playAnimation("well_5_static", false);
                if (this.animBGP) {
                    this.animBGP.playAnimation("well_5_static", false);
                }
            }
            this.door1.playIdleAnimation(data.level);
            this.door2.playIdleAnimation(data.level);
            this.door3.playIdleAnimation(data.level);
        } else {
            this.door1.playIdleAnimation(1);
            this.door2.playIdleAnimation(1);
            this.door3.playIdleAnimation(1);
            this.totalWinAmountComp.showText("0.00");
        }

    }

    enableBonusElements() {
        this.enableDoors(true);
    }

    initiateBonusGame() {
        super.initiateBonusGame();
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_BONUSGAME_BG);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_SLOTMACHINE_AND_PANEL, false);
        this.reset();
        this.setValues();
        this.visible = true;
    }

    enableDoors(flag) {
        for (let k = 1; k <= this.totalDoors; k++) {
            this["door" + k].setEnabled(flag);
        }
    }

    onDoorClicked(id) {
        this.enableDoors(false);
        this.clickedDoor = id;
        this.sendFeatureRequest(id);
        CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_ITEM_CLICK_SOUND");
        //this.handleFeatureResponse();
    }

    handleFeatureResponse() {
        this.coinSoundPlaying = false;
        this.isDoorOpened = false;
        let data = slotModel.getFeatureData();
        if (data.collect) {
            this["door" + this.clickedDoor].showDoorOpen(data.level, false);
        } else {
            this.lastTotalWin = data.totalWin;
            this["door" + this.clickedDoor].showDoorOpen(data.level - 1, true);
        }
        setTimeout(this.onDoorOpened.bind(this), 750);
    }

    onDoorOpened() {
        if (this.isDoorOpened) {
            return;
        }
        this.isDoorOpened = true;
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
                        CoreLib.AnimationManager.animateTween(this.winAmountComp, 0.5, { delay: 1.5, x: this.totalWinAmountComp.x + 650, y: this.totalWinAmountComp.y - 50, alpha: 0.1, onComplete: this.lastRoundWinAnimated.bind(this) });
                    } else {
                        CoreLib.AnimationManager.animateTween(this.winAmountComp, 0.5, { delay: 1.5, x: this.totalWinAmountComp.x + 950, y: this.totalWinAmountComp.y - 50, alpha: 0.1, onComplete: this.lastRoundWinAnimated.bind(this) });
                    }
                } else {
                    CoreLib.AnimationManager.animateTween(this.winAmountComp, 0.5, { delay: 1.5, x: this.totalWinAmountComp.x + 950, y: this.totalWinAmountComp.y - 50, alpha: 0.1, onComplete: this.lastRoundWinAnimated.bind(this) });
                }
                CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_MULTIPLIER_SCORE_SOUND");
            } else {
                this.winAmountComp.showWin(win);
                if (!this.coinSoundPlaying) {
                    this.coinSoundPlaying = true;
                    CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_COIN_SCORE_SOUND");
                }

            }
            this.winAmountComp.x = this["door" + this.clickedDoor].x + 163;
            this.winAmountComp.y = this["door" + this.clickedDoor].y + this["door" + this.clickedDoor].height / 2 + 70;
        }

    }
    onWinAmountCountUpDone() {
        CoreLib.EventHandler.dispatchEvent("STOP_BONUS_COIN_SCORE_SOUND");
        soundFactory.stopSound({ name: "Game Point Counter" });
        this.coinSoundPlaying = false;
    }
    onWinAmountDone() {
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                CoreLib.AnimationManager.animateTween(this.winAmountComp, 0.5, { alpha: 0, onComplete: this.roundWinAnimated.bind(this) });
            } else {
                CoreLib.AnimationManager.animateTween(this.winAmountComp, 0.5, { alpha: 0, onComplete: this.roundWinAnimated.bind(this) });
            }
        } else {
            CoreLib.AnimationManager.animateTween(this.winAmountComp, 0.5, { alpha: 0, onComplete: this.roundWinAnimated.bind(this) });
        }
        CoreLib.EventHandler.dispatchEvent("STOP_BONUS_COIN_SCORE_SOUND");
        soundFactory.stopSound({ name: "Game Point Counter" });
        this.coinSoundPlaying = false;

    }

    roundWinAnimated() {
        CoreLib.EventHandler.dispatchEvent("STOP_BONUS_COIN_SCORE_SOUND");
        CoreLib.AnimationManager.animateTween(this.winAmountComp, 0.2, { alpha: 0 });
        this.coinSoundPlaying = false;
        let data = slotModel.getFeatureData();
        if (data.collect) {
            this["door" + this.clickedDoor].showCloseAnimation(data.level);
            CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_ITEM_CLOSE_SOUND");
        } else {
            this["door" + this.clickedDoor].showCloseAnimation(data.level - 1);
            CoreLib.EventHandler.dispatchEvent("PLAY_BONUS_ITEM_CLOSE_SOUND");
        }
        this.totalWinAmountComp.showText(CoreLib.WrapperService.formatCurrency(data.totalWin));
        this.resizeViewComponents();
        if (data.collect) {
            this.showEnd();
        } else {
            this.moveBackground();
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
    moveBackground() {
        let data = slotModel.getFeatureData();
        //this.door1.visible = this.door2.visible = this.door3.visible = false;
        this.animBG.playAnimation(this.wellAnimation[data.level - 2], false);
        this.animBGP.playAnimation(this.wellAnimation[data.level - 2], false);
        this.door1.playIdleAnimation(data.level);
        this.door2.playIdleAnimation(data.level);
        this.door3.playIdleAnimation(data.level);
        if (!data.collect) {
            setTimeout(this.enableNextRound.bind(this), 1500);
        }

    }
    onBGAnimCompleted(obj) {
        if (this.animBG.visible) {
            if (obj.name.indexOf("static") > -1) {
                return;
            }
            let data = slotModel.getFeatureData();
            if (data) {
                this.door1.playIdleAnimation(data.level);
                this.door2.playIdleAnimation(data.level);
                this.door3.playIdleAnimation(data.level);
                this.door1.visible = this.door2.visible = this.door3.visible = true;

            }
        }


    }
    onBGPAnimCompleted(obj) {
        if (this.animBGP.visible) {
            if (obj.name.indexOf("static") > -1) {
                return;
            }
            let data = slotModel.getFeatureData();
            if (data) {
                this.door1.playIdleAnimation(data.level);
                this.door2.playIdleAnimation(data.level);
                this.door3.playIdleAnimation(data.level);
                this.door1.visible = this.door2.visible = this.door3.visible = true;
                if (!data.collect) {
                    this.enableNextRound();
                }
            }
        }
    }
    checkToEnableRound() {
        this.enableNextRound();
    }

    enableNextRound() {
        this.resetElements();
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
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.NOTIFY_BONUS_ROUND_END);
    }

    resetElements() {
        this.winAmountComp.alpha = 1;
        this.winAmountComp.clearWin();
        this.enableDoors(true);

    }


    resizeViewComponents() {
        super.resizeViewComponents();
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.animBG.renderable = false;
                this.animBGP.renderable = true;
            } else {
                this.animBG.renderable = true;
                this.animBGP.renderable = false;
            }
        }

        /*CoreLib.UIUtil.adjustElement(this.winTitle);
        CoreLib.UIUtil.positionObjectForDevice(this.winTitle);*/
        CoreLib.UIUtil.adjustElement(this.bonusTitle);
        CoreLib.UIUtil.positionObjectForDevice(this.bonusTitle);
        CoreLib.UIUtil.adjustElement(this.door1);
        CoreLib.UIUtil.positionObjectForDevice(this.door1);
        CoreLib.UIUtil.adjustElement(this.door2);
        CoreLib.UIUtil.positionObjectForDevice(this.door2);
        CoreLib.UIUtil.adjustElement(this.door3);
        CoreLib.UIUtil.positionObjectForDevice(this.door3);
        CoreLib.UIUtil.adjustElement(this.winAmountComp);
        CoreLib.UIUtil.positionObjectForDevice(this.winAmountComp);
        CoreLib.UIUtil.adjustElement(this.totalWinAmountComp);
        CoreLib.UIUtil.positionObjectForDevice(this.totalWinAmountComp);
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.totalWinAmountComp.x = this.door1.x - this.totalWinAmountComp.width * 0.3;

            } else {
                this.totalWinAmountComp.x = this.door2.x - this.totalWinAmountComp.width * 0.25;
            }
        }

        if (this.clickedDoor != undefined) {
            this.winAmountComp.x = this["door" + this.clickedDoor].x + 163 ;
            this.winAmountComp.y = this["door" + this.clickedDoor].y + this["door" + this.clickedDoor].height / 2 + 70;
        }

        let wsc;
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                wsc = (CoreLib.UIUtil.getGameWidth()) / this.pWidth;
            } else {
                wsc = (CoreLib.UIUtil.getGameWidth()) / this.lWidth;
            }
        } else {
            wsc = (CoreLib.UIUtil.getGameWidth()) / this.lWidth;
        }
        this.bonusContainer.scale.set(wsc);

        this.bonusContainer.x = (CoreLib.UIUtil.getGameWidth() - this.bonusContainer.width) / 2;
        this.bonusContainer.y = (CoreLib.UIUtil.getGameHeight() - this.bonusContainer.height) / 2;

    }

};
