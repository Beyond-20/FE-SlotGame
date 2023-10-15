import { SlotMachineComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotMachineComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";

export class GameSlotMachineComp extends SlotMachineComp {
    constructor(config) {
        super(config);
        this.gamelogoL = this.elementsList["gamelogoL"];
        this.gameLogo = this.elementsList["gamelogo"];
        this.wildFrameOpen1 = this.elementsList["wildFrameOpen1"];
        this.wildFrameOpen2 = this.elementsList["wildFrameOpen2"];
        this.wildFrameCicly1 = this.elementsList["wildFrameCicly1"];
        this.wildFrameCicly2 = this.elementsList["wildFrameCicly2"];
        this.dolphinJump1 = this.elementsList["dolphinJump1"];
        this.dolphinJump2 = this.elementsList["dolphinJump2"];
        this.dolphinJump3 = this.elementsList["dolphinJump3"];
        this.wildFrameOpen1.visible = false;
        this.wildFrameOpen2.visible = false;
        this.wildFrameCicly1.visible = false;
        this.wildFrameCicly2.visible = false;
        this.dolphinJump1.visible = false;
        this.dolphinJump2.visible = false;
        this.dolphinJump3.visible = false;
        CoreLib.EventHandler.addEventListener("SHOW_WILD_EXPANSION_ANIM", this.showWildExpansionAnim.bind(this));
        CoreLib.EventHandler.addEventListener("STOP_STACKED_WILD_ANIM", this.stopStackedWildAnim.bind(this));
        CoreLib.EventHandler.addEventListener("STOP_STACKED_WILD_ANIM", this.stopWildAnim.bind(this));
        CoreLib.EventHandler.addEventListener("STOP_DOLPHIN_ANIM", this.stopWildAnim.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.SPIN_CLICKED, this.stopWildAnim.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.SHOW_MESSAGE_POPUP, this.stopWildAnim.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.HIDE_MESSAGE_POPUP, this.stopWildAnim.bind(this));
    }

    onInitialViewCreated() {
        super.onInitialViewCreated();
    }

    stopWildAnim() {
        this.wildFrameOpen1.stopAnimation();
        this.wildFrameOpen2.stopAnimation();
        this.wildFrameCicly1.stopAnimation();
        this.wildFrameCicly2.stopAnimation();
        this.dolphinJump1.stopAnimation();
        this.dolphinJump2.stopAnimation();
        this.dolphinJump3.stopAnimation();
        this.wildFrameOpen1.visible = false;
        this.wildFrameOpen2.visible = false;
        this.wildFrameCicly1.visible = false;
        this.wildFrameCicly2.visible = false;
        this.dolphinJump1.visible = false;
        this.dolphinJump2.visible = false;
        this.dolphinJump3.visible = false;
    }

    showWildExpansionAnim() {
        this.wildFrameOpen1.visible = true;
        this.wildFrameOpen2.visible = true;
        this.wildFrameOpen1.playAnimation(false);
        this.wildFrameOpen2.playAnimation(false);
        this.playStackedWildAnim();
    }

    playStackedWildAnim() {
        setTimeout(() => {
            this.wildFrameCicly1.visible = true;
            this.wildFrameCicly2.visible = true;
            this.wildFrameCicly1.playAnimation(true);
            this.wildFrameCicly2.playAnimation(true);
            setTimeout(() => {
                this.wildFrameOpen1.visible = false;
                this.wildFrameOpen2.visible = false;
                this.wildFrameOpen1.stopAnimation();
                this.wildFrameOpen2.stopAnimation();
                this.dolphinJump1.visible = true;
                this.dolphinJump2.visible = true;
                this.dolphinJump3.visible = true;
                this.dolphinJump1.playAnimation(true);
                this.dolphinJump2.playAnimation(true);
                this.dolphinJump3.playAnimation(true);
                CoreLib.EventHandler.dispatchEvent("WILD_EXPANSION_ANIM_DONE");
                CoreLib.EventHandler.dispatchEvent("PLAY_DOLPHIN_SPLASH_OUT_SOUND");
                setTimeout(() => {
                    CoreLib.EventHandler.dispatchEvent("PLAY_DOLPHIN_SPLASH_IN_SOUND");
                }, 100);
            }, 500);
        }, 800);
    }

    stopStackedWildAnim() {
        this.wildFrameCicly1.stopAnimation();
        this.wildFrameCicly2.stopAnimation();
        this.dolphinJump1.stopAnimation();
        this.dolphinJump2.stopAnimation();
        this.dolphinJump3.stopAnimation();
        this.wildFrameCicly1.visible = false;
        this.wildFrameCicly2.visible = false;
        this.dolphinJump1.visible = false;
        this.dolphinJump2.visible = false;
        this.dolphinJump3.visible = false;
        CoreLib.EventHandler.dispatchEvent("STOP_DOLPHIN_JUMP_SOUND");
    }

    resizeViewComponents() {
        super.resizeViewComponents();
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.gamelogo.visible = true;
                this.gamelogoL.visible = false;
            } else {
                this.gamelogo.visible = false;
                if (this.gamelogoL.width * 0.4 * this.scale.x > this.x) {
                    this.gamelogoL.visible = false;
                } else {
                    this.gamelogoL.visible = true;
                }
            }
        } else {
            this.gamelogo.visible = true;
            this.gamelogoL.visible = false;
        }
    }

};
