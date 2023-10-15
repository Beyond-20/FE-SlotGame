import { SlotMachineComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotMachineComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";

export class GameSlotMachineComp extends SlotMachineComp {
    constructor(config) {
        super(config);
        this.reelFrame = this.elementsList["reelFrame"];
        this.reelFrame.visible = true;
        this.greenManIcon = this.elementsList["greenManIcon"];
        this.greenManIcon.visible = true;
        this.gamelogo = this.elementsList["gamelogo"];
        this.gamelogo.visible = true;
        this.slotMachine = this.elementsList["slotMachine"];

        this.jockeyWildAnim = this.elementsList["jockeyWildAnim"];
        this.jockeyWildAnim.visible = false;
        this.jockeyWildAnim.onComplete = this.onJockeyWildAnimComplete.bind(this);
        this.isJockyWildTriggered = false;

        this.winSpinAnim = this.elementsList["winSpinAnim"];
        this.winSpinAnim.visible = false;
        this.winSpinAnim.onComplete = this.onwinSpinAnimComplete.bind(this);
        this.iswinSpinTriggered = false;

        this.rainbowRespinAnim = this.elementsList["rainbowRespinAnim"];
        this.rainbowRespinAnim.visible = false;
        this.rainbowRespinAnim.onComplete = this.onRainbowRespinAnimComplete.bind(this);
        this.israinbowRespinTriggered = false;
        this.rainbowAnticipation = this.elementsList["rainbowAnticipation"];
        this.rainbowAnticipation.visible = false;
        this.greenAnticipation = this.elementsList["greenAnticipation"];
        this.greenAnticipation.visible = false;

        this.megaboardTriggeredAnim = this.elementsList["megaboardTriggeredAnim"];
        this.megaboardTriggeredAnim.visible = false;
        this.megaboardTriggeredAnim.onComplete = this.onMegaBoardTriggeredAnimComplete.bind(this);
        this.ismegaboardTriggered = false;

        CoreLib.EventHandler.addEventListener("INITIATE_JOCKY_WILD", this.onJockeyWildTriggered.bind(this));
        CoreLib.EventHandler.addEventListener("JOCKEY_WILD_PLACEMENT_DONE",this.onReelSpinCompleted.bind(this))

        CoreLib.EventHandler.addEventListener("INITIATE_WIN_SPIN", this.onWinSpinTriggered.bind(this));
        CoreLib.EventHandler.addEventListener("WINSPIN_SYMBOLS_PLACEMENT_DONE", this.onWinSpinCompleted.bind(this));

        CoreLib.EventHandler.addEventListener("INITIATE_RAINBOW_RESPIN", this.onRainbowRespinTriggered.bind(this));
        CoreLib.EventHandler.addEventListener("RAINBOW_RESPIN_SYMBOLS_PLACEMENT_DONE", this.onRainbowReelSpinCompleted.bind(this));
        CoreLib.EventHandler.addEventListener("CLEAR_RAINBOW_RESPIN_ELEMENTS", this.clearRainbowElements.bind(this));

        CoreLib.EventHandler.addEventListener("SHOW_MEGABOARD_TRIGGERED_ANIMATION", this.showMegaBoardTriggeredAnim.bind(this));

        CoreLib.EventHandler.addEventListener("INITIATE_MYSTERY_TRANSFORM", this.showCloverAnim.bind(this));
        CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_IDLE_SNORING_SOUND");
    }

    //MysteryTransform..
    showCloverAnim(arrOfPos) {
        this.mysteryPos = arrOfPos;
        this.startShowingMysteryWinSymbols();
    }

    startShowingMysteryWinSymbols() {
        let arr = slotModel.featureResult.featureResults;
        let index = arr[0].spinResults.length - 1;
        let spinresult = arr[0].spinResults[index];
        let symbol = spinresult.finalMysterySymbol;
        CoreLib.EventHandler.dispatchEvent("SHOW_MYSTERY_TRANSFORM_SYMBOL_PLACEMENT", { symbol: symbol, positions: this.mysteryPos });
    }

    showMegaBoardTriggeredAnim() {
        CoreLib.EventHandler.dispatchEvent("PLAY_MEGABOARD_APPEAR_SOUND");
        CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_GENERAL_AWAKE_SOUND");
        this.megaboardTriggeredAnim.visible = true;
        this.greenManIcon.playAnimation("green_man_win", true);
        CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_JUMP_TO_MOVE_SOUND");
        this.megaboardTriggeredAnim.playAnimation("start", false);
        setTimeout(() => {
            CoreLib.EventHandler.dispatchEvent("PLAY_MEGABOARD_TRIGGERED_SOUND");
            CoreLib.EventHandler.dispatchEvent("PLAY_MEGABOARD_WIN_SOUND");
            this.greenManIcon.playAnimation("green_man_run", true);
            CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_RIDE_GENERAL_GAME_SOUND");
            this.megaboardTriggeredAnim.playAnimation("idle", true);
        }, 1000);
        CoreLib.AnimationManager.animateTween(this.greenManIcon, 5.5, { delay: 1.2, x: this.greenManIcon.x - 3500 });
        setTimeout(this.stopMegaBoardTriggeredAnim.bind(this), 3000);
        this.ismegaboardTriggered = true;
    }
    stopMegaBoardTriggeredAnim() {
        this.megaboardTriggeredAnim.playAnimation("stop", false);
        CoreLib.EventHandler.dispatchEvent("STOP_MEGABOARD_APPEAR_SOUND");
        CoreLib.EventHandler.dispatchEvent("MEGA_TRIGGER_JOCKY_ANIMDONE");
        if (this.ismegaboardTriggered) {
            this.greenManIcon.playAnimation("green_man_run", true);
            this.greenManIcon.x = 3500;
            CoreLib.AnimationManager.animateTween(this.greenManIcon, 4.5, { delay: 0.8, x: this.greenManIcon.configData.x });
            setTimeout(() => {
                this.greenManIcon.playAnimation("green_man_sleep", true);
            }, 5000);
        }
        this.ismegaboardTriggered = false;
    }

    onMegaBoardTriggeredAnimComplete() {
        this.megaboardTriggeredAnim.visible = false;
    }

    //winSpin Feature
    onWinSpinTriggered(winSpinPosition) {
        CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_GENERAL_AWAKE_SOUND");
        this.winPositions = winSpinPosition;
        this.greenManIcon.playAnimation("green_man_win", true);
        CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_JUMP_TO_MOVE_SOUND");
        setTimeout(() => {
            CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_RIDE_GENERAL_GAME_SOUND");
            CoreLib.EventHandler.dispatchEvent("PLAY_SMOKE_EFFECT_SOUND");
            this.greenManIcon.playAnimation("green_man_run", true);
        }, 1000);
        setTimeout(() => {
            this.winSpinAnim.visible = true;
            this.winSpinAnim.playAnimation(false);
            CoreLib.EventHandler.dispatchEvent("PLAY_WIN_SPIN_SOUND");
        }, 1000);
        CoreLib.AnimationManager.animateTween(this.greenManIcon, 5.5, { delay: 1.2, x: this.greenManIcon.x - 3500, onComplete: this.stopGreenRideSound.bind(this) });
        setTimeout(this.startShowingWinSymbols.bind(this), 1300);
        this.iswinSpinTriggered = true;
    }
    startShowingWinSymbols() {
        CoreLib.EventHandler.dispatchEvent("PLAY_WIN_SPIN_SYMBOL_ROTATING_SOUND");
        setTimeout(this.showSpinWinInSlot.bind(this), 1000);
    }

    showSpinWinInSlot() {
        let symbol = slotModel.getSlotGameResult().winSpinSymbol;
        CoreLib.EventHandler.dispatchEvent("SHOW_WIN_SPIN_PLACEMENT", { symbol: symbol, positions: this.winPositions });
    }

    onwinSpinAnimComplete() {
        this.winSpinAnim.visible = false;
    }

    onWinSpinCompleted() {
        if (this.iswinSpinTriggered) {
            CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_COMEBACK_SOUND");
            this.greenManIcon.playAnimation("green_man_run", true);
            this.greenManIcon.x = 3500;
            CoreLib.AnimationManager.animateTween(this.greenManIcon, 4.5, { delay: 0.8, x: this.greenManIcon.configData.x });
            setTimeout(() => {
                this.greenManIcon.playAnimation("green_man_sleep", true);
                CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_SNORING_SOUND");
            }, 5000);
        }
        this.iswinSpinTriggered = false;
    }

    //rainbowRespin Feature
    onRainbowRespinTriggered(respinPosition) {
        CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_GENERAL_AWAKE_SOUND");
        this.rainbowRespinPosition = respinPosition;
        this.greenManIcon.playAnimation("green_man_win", true);
        CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_JUMP_TO_MOVE_SOUND");
        //greenman anim
        setTimeout(() => {
            this.greenManIcon.playAnimation("green_man_run", true);
            CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_RIDE_GENERAL_GAME_SOUND");
            CoreLib.EventHandler.dispatchEvent("PLAY_SMOKE_EFFECT_SOUND");
            this.rainbowRespinAnim.visible = true;
            this.rainbowRespinAnim.playAnimation(false);
            CoreLib.EventHandler.dispatchEvent("PLAY_RAINBOW_RESPIN_SOUND");
        }, 1000);
        CoreLib.AnimationManager.animateTween(this.greenManIcon, 5.5, { delay: 1.2, x: this.greenManIcon.x - 3500, onComplete: this.stopGreenRideSound.bind(this) });
        setTimeout(this.startShowingRespinSymbols.bind(this), 2000);
        this.israinbowRespinTriggered = true;
    }

    stopGreenRideSound() {

    }


    startShowingRespinSymbols() {
        CoreLib.EventHandler.dispatchEvent("PLAY_RAINBOW_ANTICIPATION_SOUND");
        this.rainbowAnticipation.visible = true;
        this.greenAnticipation.visible = true;
        this.rainbowAnticipation.playAnimation(true);
        this.greenAnticipation.playAnimation(true);
        CoreLib.EventHandler.dispatchEvent("SHOW_RAINBOW_RESPIN_SYMBOL_PLACEMENT");
        this.slotMachine.spinStrip(4);
    }
    clearRainbowElements() {
        this.slotMachine.clearAnimatingSymbols();
        CoreLib.AnimationManager.animateTween(this.rainbowAnticipation, 0.5, { alpha: 0 });
        CoreLib.AnimationManager.animateTween(this.greenAnticipation, 0.5, { alpha: 0, onComplete: this.clearElementsNow.bind(this) });

    }
    clearElementsNow() {
        this.rainbowAnticipation.stopAnimation();
        this.greenAnticipation.stopAnimation();
        CoreLib.EventHandler.dispatchEvent("STOP_RAINBOW_ANTICIPATION_SOUND");
        this.rainbowAnticipation.visible = false;
        this.greenAnticipation.visible = false;
        this.rainbowAnticipation.alpha = 1;
        this.greenAnticipation.alpha = 1;

    }

    onRainbowRespinAnimComplete() {
        this.rainbowRespinAnim.visible = false;
    }

    onRainbowReelSpinCompleted() {
        if (this.israinbowRespinTriggered) {
            CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_COMEBACK_SOUND");
            this.greenManIcon.playAnimation("green_man_run", true);
            this.greenManIcon.x = 3500;
            CoreLib.AnimationManager.animateTween(this.greenManIcon, 4.5, { delay: 0.8, x: this.greenManIcon.configData.x });
            setTimeout(() => {
                this.greenManIcon.playAnimation("green_man_sleep", true);
                CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_SNORING_SOUND");
            }, 5000);
        }
        this.israinbowRespinTriggered = false;
    }

    //jockeyWild
    onJockeyWildTriggered(positions) {
        CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_GENERAL_AWAKE_SOUND");
        this.wildPositions = positions;
        this.greenManIcon.playAnimation("green_man_win", true);
        CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_JUMP_TO_MOVE_SOUND");
        setTimeout(() => {
            this.greenManIcon.playAnimation("green_man_run", true);
            CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_RIDE_GENERAL_GAME_SOUND");
            CoreLib.EventHandler.dispatchEvent("PLAY_SMOKE_EFFECT_SOUND");
        }, 1000);
        setTimeout(() => {
            this.jockeyWildAnim.visible = true;
            this.jockeyWildAnim.playAnimation(false);
            CoreLib.EventHandler.dispatchEvent("PLAY_JOCKEY_WILD_SOUND");
        }, 1000);
        CoreLib.AnimationManager.animateTween(this.greenManIcon, 5.5, { delay: 1.2, x: this.greenManIcon.x - 3500, onComplete: this.stopGreenRideSound.bind(this) });
        setTimeout(this.startShowingWild.bind(this), 1500);
        this.isJockyWildTriggered = true;
    }

    onJockeyWildAnimComplete() {
        this.jockeyWildAnim.visible = false;
    }

    onReelSpinCompleted() {
        if (this.isJockyWildTriggered) {
            CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_COMEBACK_SOUND");
            this.greenManIcon.playAnimation("green_man_run", true);
            this.greenManIcon.x = 3500;
            CoreLib.AnimationManager.animateTween(this.greenManIcon, 4.5, { delay: 0.8, x: this.greenManIcon.configData.x });
            setTimeout(() => {
                this.greenManIcon.playAnimation("green_man_sleep", true);
                CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_SNORING_SOUND");
            }, 5000);
        }
        this.isJockyWildTriggered = false;
    }

    startShowingWild() {
        CoreLib.EventHandler.dispatchEvent("SHOW_WILD_PLACEMENT", this.wildPositions);
    }

    resizeViewComponents() {
        super.resizeViewComponents();
        this.resizeChildren();
        CoreLib.UIUtil.adjustElement(this.greenManIcon);
        CoreLib.UIUtil.setPositionBasedOnDevice(this.greenManIcon);
    }

};
