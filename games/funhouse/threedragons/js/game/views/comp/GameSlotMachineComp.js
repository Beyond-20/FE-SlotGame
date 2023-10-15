import { SlotMachineComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotMachineComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";

export class GameSlotMachineComp extends SlotMachineComp {
    constructor(config) {
        super(config);
        this.machineTopContainer = this.elementsList["machineTopContainer"];
        this.reelSep1 = this.machineTopContainer.elementsList["reelSep1"];
        this.reelSep2 = this.machineTopContainer.elementsList["reelSep2"];
        this.reelSep3 = this.machineTopContainer.elementsList["reelSep3"];
        this.reelSep4 = this.machineTopContainer.elementsList["reelSep4"];
        this.reelFrame = this.machineTopContainer.elementsList["reelFrame"];
        this.payline = this.machineTopContainer.elementsList["payline"];
        this.highlight1 = this.machineTopContainer.elementsList["highlight1"];
        this.highlight2 = this.machineTopContainer.elementsList["highlight2"];
        this.highlight3 = this.machineTopContainer.elementsList["highlight3"];
        this.highlight4 = this.machineTopContainer.elementsList["highlight4"];
        this.frameShine = this.machineTopContainer.elementsList["frameShine"];
        this.blackBox = this.machineTopContainer.elementsList["blackBox"];
        this.powerChanceImg = this.machineTopContainer.elementsList["powerChanceImg"];
        this.prizeTable = this.elementsList["prizeTable"];
        setTimeout(() => {
            this.machineTopContainer.addChild(this.reelSep1, this.reelSep2, this.reelSep3, this.reelSep4, this.reelFrame, this.highlight1, this.highlight2, this.highlight3, this.highlight4, this.blackBox, this.payline, this.powerChanceImg, this.reelFrame, this.frameShine,);
        }, 10);



        this.highlight1.visible = this.highlight2.visible = this.highlight3.visible = this.highlight4.visible = false;
        this.frameShine.visible = false;
        this.blackBox.visible = false;
        this.powerChanceImg.visible = false;

        CoreLib.EventHandler.addEventListener("SPIN_STARTED", this.onSpinStarted.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.REELSTRIP_SPIN_JERK, this.onSpinStopped.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_RESPIN_TRIGGER", this.onRespinTriggered.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.HANDLE_FEATURE_RESPONSE_IN_GAME, this.handleFeatureResponse.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.CLEAR_GAME_FOR_SPIN, this.clearGameWin.bind(this));
        this.isRespinTriggered = false;
    }

    handleFeatureResponse() {
        CoreLib.EventHandler.dispatchEvent("STOP_INDIVIDUAL_REELSPIN");
    }

    onRespinTriggered() {
        this.isRespinTriggered = true;
        CoreLib.EventHandler.dispatchEvent("PLAY_POWER_CHANCE_SOUND");
        CoreLib.UIUtil.fadeInElement(this.blackBox, null, 0, 0.25, 0.7);
        CoreLib.UIUtil.fadeInElement(this.powerChanceImg, null, 0, 0.25, 1);
        CoreLib.UIUtil.fadeInElement(this.frameShine, this.onRespinElementsAppeared.bind(this), 0, 0.25, 1);
        this.frameShine.playAnimation();

    }
    onRespinElementsAppeared() {
        CoreLib.AnimationManager.animateTween(this.powerChanceImg, 0.5, { scaleX: 0.95, scaleY: 0.95, repeat: -1, yoyo: true });
        setTimeout(this.startPowerChance.bind(this), 1000);
    }

    startPowerChance() {
        CoreLib.EventHandler.dispatchEvent("START_INDIVIDUAL_REELSPIN", 2);
        CoreLib.EventHandler.dispatchEvent("PLAY_POWER_ANTICIPATION_RISE_SOUND");
        setTimeout(this.sendFeatureRequest.bind(this), 4000);
    }

    sendFeatureRequest() {
        CoreLib.EventHandler.dispatchEvent("PLAY_POWER_ANTICIPATION_END_SOUND");
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SELECT_BONUS_OPTION_SELECTED, 1);
    }

    onSpinStopped() {
        if (this.isRespinTriggered) {
            CoreLib.UIUtil.fadeOutElement(this.blackBox, null, 0.25);
            CoreLib.UIUtil.fadeOutElement(this.powerChanceImg, null, 0.25);
            CoreLib.UIUtil.fadeOutElement(this.frameShine, this.onRetriggerElementsAppeared.bind(this), 0.25);
        } else {
            CoreLib.UIUtil.fadeOutElement(this.highlight1, null, 0.25);
            CoreLib.UIUtil.fadeOutElement(this.highlight2, null, 0.25);
            CoreLib.UIUtil.fadeOutElement(this.highlight3, null, 0.25);
            CoreLib.UIUtil.fadeOutElement(this.highlight4, null, 0.25);
        }
        CoreLib.EventHandler.dispatchEvent("STOP_REEL_SOUND");
    }

    onRetriggerElementsAppeared() {

    }

    onSpinStarted() {
        if (!this.isRespinTriggered) {
            this.highlight1.visible = this.highlight2.visible = this.highlight3.visible = this.highlight4.visible = true;
            CoreLib.UIUtil.fadeInElement(this.highlight1, null, 0, 0.25, 1);
            CoreLib.UIUtil.fadeInElement(this.highlight2, null, 0, 0.25, 1);
            CoreLib.UIUtil.fadeInElement(this.highlight3, null, 0, 0.25, 1);
            CoreLib.UIUtil.fadeInElement(this.highlight4, null, 0, 0.25, 1);
            this.highlight1.playAnimation(true);
            this.highlight2.playAnimation(true);
            this.highlight3.playAnimation(true);
            this.highlight4.playAnimation(true);
        }
        CoreLib.EventHandler.dispatchEvent("PLAY_REEL_SOUND");
    }

    showWinInWinAmountComp(toShowWin = false) {
        if (toShowWin) {
            this.slotMachine.enterSpinWinState();
        }
        let win = slotModel.getTotalWin();
        if (win > 0) {
            let level = slotModel.getWinLevel();
            if (level > 0) {
                this.winAmountComp.showWin(win, slotModel.getWinLevel());
                if (this.configData.showSymbolBeforeBigWin) {
                    this.bigwintimeoutId = setTimeout(this.showBigWinNow.bind(this, level), 100);
                } else {
                    this.showBigWinNow();
                }
            } else {
                this.winAmountComp.showWin(win, slotModel.getWinLevel());
                /*this.winAmountComp.scale.set(0);
                CoreLib.AnimationManager.animateTween(this.winAmountComp, 0.5, {scaleX : 1, scaleY : 1, ease : Power2.easeOUt});*/
            }
        } else {
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.EXIT_SPINWIN_AMOUNT);
        }

    }
    clearSpinAllWin () {
        this.slotMachine.clearSpinAllWin();

    }

    clearGameWin() {
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.CLEAR_SLOT_BIG_WIN);
        this.winAmountComp.clearWin();
    }
    resizeViewComponents() {
        super.resizeViewComponents();
        CoreLib.UIUtil.adjustWidthHeightForMobile(this.guideRect);
        CoreLib.UIUtil.positionObjectForDevice(this.guideRect);
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.prizeTable.scale.set(0.5);
            } else {
                this.prizeTable.scale.set(1);
            }
        }
        //CoreLib.UIUtil.adjustElement(this.machineTopContainer);
        //CoreLib.UIUtil.positionObjectForDevice(this.machineTopContainer);

    }
};
