import { SlotMachineComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotMachineComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { SlotEvents } from "../../../../../../../../slot_core/corelib/events/SlotEvents";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";

export class GameSlotMachineComp extends SlotMachineComp {
    constructor(config) {
        super(config);
        this.guideRect = this.elementsList["guideRect"];
        this.reelFrame = this.elementsList["reelFrame"];
        this.soldiers = this.elementsList["soldiers"];
        this.leftDaySoldier = this.soldiers.elementsList["leftDaySoldier"];
        this.rightDaySoldier = this.soldiers.elementsList["rightDaySoldier"];
        this.leftNightSoldier = this.soldiers.elementsList["leftNightSoldier"];
        this.rightNightSoldier = this.soldiers.elementsList["rightNightSoldier"];
        this.slotMachine = this.elementsList["slotMachine"];
        this.maskRect = this.slotMachine.elementsList["maskRect"];
        this.fsmaskRect = this.slotMachine.elementsList["fsmaskRect"];
        this.stoneFountainAnim = this.elementsList["stoneFountainAnim"];
        if (slotModel.isFreeSpinSession == true) {
            if (CoreLib.Model.DeviceConfig.isDevice) {
                if (CoreLib.Model.DeviceConfig.isPortrait) {
                    this.stoneFountainAnim.x = this.reelFrame.width * 0.52;
                    this.stoneFountainAnim.y = this.reelFrame.height + 868;
                } else {
                    this.stoneFountainAnim.x = this.reelFrame.width * 0.8;
                    this.stoneFountainAnim.y = this.reelFrame.height + 284;
                }
            } else {
                this.stoneFountainAnim.x = this.reelFrame.width * 0.8;
                this.stoneFountainAnim.y = this.reelFrame.height + 284;
            }
        } else {
            if (CoreLib.Model.DeviceConfig.isDevice) {
                if (CoreLib.Model.DeviceConfig.isPortrait) {
                    this.stoneFountainAnim.x = this.reelFrame.width * 0.52;
                    this.stoneFountainAnim.y = this.reelFrame.height + 584;
                } else {
                    this.stoneFountainAnim.x = this.reelFrame.width * 0.8;
                    this.stoneFountainAnim.y = this.reelFrame.height + 20;
                }
            } else {
                this.stoneFountainAnim.x = this.reelFrame.width * 0.8;
                this.stoneFountainAnim.y = this.reelFrame.height + 20;
            }
        }
        this.stoneFountainAnim.visible = false;
        this.winAmountComp = this.elementsList["winAmountComp"];
        if (slotModel.isFreeSpinSession == true) {
            this.winAmountComp.x = 1192;
            this.winAmountComp.y = 712;
        } else {
            this.winAmountComp.x = 1192;
            this.winAmountComp.y = 596;
        }

        CoreLib.EventHandler.addEventListener("SHOW_STONE_ANIM", this.showStoneFountainAnim.bind(this));
        CoreLib.EventHandler.addEventListener(SlotEvents.NORMAL_WIN_COUNTUP_DONE, this.hideStoneAnim.bind(this));
        CoreLib.EventHandler.addEventListener("HIDE_STONE_ANIM", this.hideStoneAnim.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.SPIN_CLICKED, this.hideStoneAnim.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.SHOW_SLOT_BIG_WIN, this.hideStoneAnim.bind(this));
    }

    showStoneFountainAnim() {
        this.stoneFountainAnim.visible = true;
        this.stoneFountainAnim.playAnimation("animation", true);
    }

    hideStoneAnim() {
        this.stoneFountainAnim.visible = false;
        this.stoneFountainAnim.stopAnimation();
    }

    resizeViewComponents() {
        super.resizeViewComponents();
        CoreLib.UIUtil.adjustWidthHeightForMobile(this.guideRect);
        CoreLib.UIUtil.adjustElement(this.guideRect);
        CoreLib.UIUtil.adjustWidthHeightForMobile(this.reelFrame);
        CoreLib.UIUtil.setPositionBasedOnDevice(this.reelFrame);
        CoreLib.UIUtil.adjustElement(this.reelFrame);
        CoreLib.UIUtil.setPositionBasedOnDevice(this.soldiers);
        CoreLib.UIUtil.setPositionBasedOnDevice(this.leftDaySoldier);
        CoreLib.UIUtil.setPositionBasedOnDevice(this.rightDaySoldier);
        CoreLib.UIUtil.setPositionBasedOnDevice(this.leftNightSoldier);
        CoreLib.UIUtil.setPositionBasedOnDevice(this.rightNightSoldier);
        CoreLib.UIUtil.adjustElement(this.slotMachine);
        CoreLib.UIUtil.setPositionBasedOnDevice(this.slotMachine);

        if (slotModel.isFreeSpinSession == true) {
            if (CoreLib.Model.DeviceConfig.isDevice) {
                if (CoreLib.Model.DeviceConfig.isPortrait) {
                    this.stoneFountainAnim.x = this.reelFrame.width * 0.52;
                    this.stoneFountainAnim.y = this.reelFrame.height + 868;
                } else {
                    this.stoneFountainAnim.x = this.reelFrame.width * 0.8;
                    this.stoneFountainAnim.y = this.reelFrame.height + 284;
                }
            } else {
                this.stoneFountainAnim.x = this.reelFrame.width * 0.8;
                this.stoneFountainAnim.y = this.reelFrame.height + 284;
            }
        } else {
            if (CoreLib.Model.DeviceConfig.isDevice) {
                if (CoreLib.Model.DeviceConfig.isPortrait) {
                    this.stoneFountainAnim.x = this.reelFrame.width * 0.52;
                    this.stoneFountainAnim.y = this.reelFrame.height + 584;
                } else {
                    this.stoneFountainAnim.x = this.reelFrame.width * 0.8;
                    this.stoneFountainAnim.y = this.reelFrame.height + 20;
                }
            } else {
                this.stoneFountainAnim.x = this.reelFrame.width * 0.8;
                this.stoneFountainAnim.y = this.reelFrame.height + 20;
            }
        }
    }
};
