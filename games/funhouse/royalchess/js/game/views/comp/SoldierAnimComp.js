import { LibView } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";
import { SlotEvents } from "../../../../../../../../slot_core/corelib/events/SlotEvents";

export class SoldierAnimComp extends LibView {
    constructor(config) {
        super(config);
        this.leftDaySoldier = this.elementsList["leftDaySoldier"];
        this.rightDaySoldier = this.elementsList["rightDaySoldier"];
        this.leftNightSoldier = this.elementsList["leftNightSoldier"];
        this.rightNightSoldier = this.elementsList["rightNightSoldier"];
        this.leftDaySoldier.visible = false;
        this.rightDaySoldier.visible = false;
        this.leftNightSoldier.visible = false;
        this.rightNightSoldier.visible = false;
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.SHOW_SLOT_BIG_WIN, this.showBigWin.bind(this));
        CoreLib.EventHandler.addEventListener("STOP_BIG_WIN_SOLDIER_ANIM", this.clearBigWin.bind(this));
        CoreLib.EventHandler.addEventListener(SlotEvents.ENTER_SPINWIN_STATE, this.showLineWinAnim.bind(this));
        CoreLib.EventHandler.addEventListener(SlotEvents.NORMAL_WIN_COUNTUP_DONE, this.exitLineWin.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.SHOW_MESSAGE_POPUP, this.showMessagePopup.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.HIDE_MESSAGE_POPUP, this.hideMessagePopup.bind(this));
        this.playIdleAnim();
    }

    backToNormalMGIdleAnim() {
        //stopping the night anim in main game
        this.leftNightSoldier.visible = false;
        this.rightNightSoldier.visible = false;
        this.leftNightSoldier.stopAnimation();
        this.rightNightSoldier.stopAnimation();
        //playing the day anim in main game
        this.leftDaySoldier.visible = true;
        this.rightDaySoldier.visible = true;
        this.leftDaySoldier.playAnimation("red_day_idle", true);
        this.rightDaySoldier.playAnimation("blue_day_idle", true);
    }

    backToNormalFSIdleAnim() {
        //Stopping the day anim in fs
        this.leftDaySoldier.stopAnimation();
        this.rightDaySoldier.stopAnimation();
        this.leftDaySoldier.visible = false;
        this.rightDaySoldier.visible = false;
        //playing the night anim in fs
        this.leftNightSoldier.visible = true;
        this.rightNightSoldier.visible = true;
        this.leftNightSoldier.playAnimation("red_night_idle", true);
        this.rightNightSoldier.playAnimation("blue_night_idle", true);
    }

    playIdleAnim() {
        if (slotModel.getIsFreespinSession == true) {
            //Stopping the day anim in fs
            this.leftDaySoldier.stopAnimation();
            this.rightDaySoldier.stopAnimation();
            this.leftDaySoldier.visible = false;
            this.rightDaySoldier.visible = false;
            //playing the night anim in fs
            this.leftNightSoldier.visible = true;
            this.rightNightSoldier.visible = true;
            this.leftNightSoldier.playAnimation("red_night_idle", true);
            this.rightNightSoldier.playAnimation("blue_night_idle", true);
        } else {
            //stopping the night anim in main game
            this.leftNightSoldier.visible = false;
            this.rightNightSoldier.visible = false;
            this.leftNightSoldier.stopAnimation();
            this.rightNightSoldier.stopAnimation();
            //playing the day anim in main game
            this.leftDaySoldier.visible = true;
            this.rightDaySoldier.visible = true;
            this.leftDaySoldier.playAnimation("red_day_idle", true);
            this.rightDaySoldier.playAnimation("blue_day_idle", true);
        }
    }

    showMessagePopup() {
        if (slotModel.getIsFreespinSession == true) {
            //Stopping the day anim in fs
            this.leftDaySoldier.stopAnimation();
            this.rightDaySoldier.stopAnimation();
            this.leftDaySoldier.visible = false;
            this.rightDaySoldier.visible = false;
            //playing the night anim in fs
            this.leftNightSoldier.visible = true;
            this.rightNightSoldier.visible = true;
            this.leftNightSoldier.playAnimation("red_night_popup_open", false);
            this.rightNightSoldier.playAnimation("blue_night_popup_open", false);
        } else {
            //stopping the night anim in main game
            this.leftNightSoldier.visible = false;
            this.rightNightSoldier.visible = false;
            this.leftNightSoldier.stopAnimation();
            this.rightNightSoldier.stopAnimation();
            //playing the day anim in main game
            this.leftDaySoldier.visible = true;
            this.rightDaySoldier.visible = true;
            this.leftDaySoldier.playAnimation("red_day_popup_open", false);
            this.rightDaySoldier.playAnimation("blue_day_popup_open", false);
        }
    }

    hideMessagePopup() {
        if (slotModel.getIsFreespinSession == true) {
            this.backToNormalFSIdleAnim();
        } else {
            this.backToNormalMGIdleAnim();
        }
    }

    showLineWinAnim() {
        if (slotModel.getIsFreespinSession == true) {
            //Stopping the day anim in fs
            this.leftDaySoldier.stopAnimation();
            this.rightDaySoldier.stopAnimation();
            this.leftDaySoldier.visible = false;
            this.rightDaySoldier.visible = false;
            //playing the night anim in fs
            this.leftNightSoldier.visible = true;
            this.rightNightSoldier.visible = true;
            this.leftNightSoldier.playAnimation("red_night_win", false);
            this.rightNightSoldier.playAnimation("blue_night_win", false);
        } else {
            //stopping the night anim in main game
            this.leftNightSoldier.visible = false;
            this.rightNightSoldier.visible = false;
            this.leftNightSoldier.stopAnimation();
            this.rightNightSoldier.stopAnimation();
            //playing the day anim in main game
            this.leftDaySoldier.visible = true;
            this.rightDaySoldier.visible = true;
            this.leftDaySoldier.playAnimation("red_day_win", false);
            this.rightDaySoldier.playAnimation("blue_day_win", false);
        }
        CoreLib.EventHandler.dispatchEvent("SHOW_STONE_ANIM");
    }

    exitLineWin() {
        if (slotModel.getIsFreespinSession == true) {
            this.backToNormalFSIdleAnim();
        } else {
            this.backToNormalMGIdleAnim();
        }
        CoreLib.EventHandler.dispatchEvent("HIDE_STONE_ANIM");
    }

    showBigWin() {
        if (slotModel.getIsFreespinSession == true) {
            //Stopping the day anim in fs
            this.leftDaySoldier.stopAnimation();
            this.rightDaySoldier.stopAnimation();
            this.leftDaySoldier.visible = false;
            this.rightDaySoldier.visible = false;
            //playing the night anim in fs
            this.leftNightSoldier.visible = true;
            this.rightNightSoldier.visible = true;
            this.leftNightSoldier.playAnimation("red_night_open_money_start", false);
            this.rightNightSoldier.playAnimation("blue_night_open_money_start", false);
            setTimeout(() => {
                this.leftNightSoldier.playAnimation("red_night_open_money_exp", true);
                this.rightNightSoldier.playAnimation("blue_night_open_money_exp", true);
            }, 500);
        } else {
            //stopping the night anim in main game
            this.leftNightSoldier.visible = false;
            this.rightNightSoldier.visible = false;
            this.leftNightSoldier.stopAnimation();
            this.rightNightSoldier.stopAnimation();
            //playing the day anim in main game
            this.leftDaySoldier.visible = true;
            this.rightDaySoldier.visible = true;
            this.leftDaySoldier.playAnimation("red_day_open_money_start", false);
            this.rightDaySoldier.playAnimation("blue_day_open_money_start", false);
            setTimeout(() => {
                this.leftDaySoldier.playAnimation("red_day_open_money_exp", true);
                this.rightDaySoldier.playAnimation("blue_day_open_money_exp", true);
            }, 500);
        }
    }

    clearBigWin() {
        if (slotModel.getIsFreespinSession == true) {
            //Stopping the day anim in fs
            this.leftDaySoldier.stopAnimation();
            this.rightDaySoldier.stopAnimation();
            this.leftDaySoldier.visible = false;
            this.rightDaySoldier.visible = false;
            //playing the night anim in fs
            this.leftNightSoldier.visible = true;
            this.rightNightSoldier.visible = true;
            this.leftNightSoldier.playAnimation("red_night_open_money_end", false);
            this.rightNightSoldier.playAnimation("blue_night_open_money_end", false);
            // setTimeout(() => {
            //     this.backToNormalAnim();
            // }, 500);
        } else {
            //stopping the night anim in main game
            this.leftNightSoldier.visible = false;
            this.rightNightSoldier.visible = false;
            this.leftNightSoldier.stopAnimation();
            this.rightNightSoldier.stopAnimation();
            //playing the day anim in main game
            this.leftDaySoldier.visible = true;
            this.rightDaySoldier.visible = true;
            this.leftDaySoldier.playAnimation("red_day_open_money_end", false);
            this.rightDaySoldier.playAnimation("blue_day_open_money_end", false);
            // setTimeout(() => {
            //     this.backToNormalAnim();
            // }, 500);
        }
    }

}
