import { SlotBigWinComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotBigWinComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { LibParticleComp } from "../../../../../../../../slot_core/corelib/views/comps/LibParticleComp";
import { PARTICLE_CONFIG } from "../../config/views/ParticleConfig";

export class GameBigWinComp extends SlotBigWinComp {
    constructor(config) {
        super(config);

        let art1 = [];
        art1.push(CoreLib.UIUtil.getTexture("Confetti_Blue"));
        art1.push(CoreLib.UIUtil.getTexture("Confetti_DarkBlue"));
        art1.push(CoreLib.UIUtil.getTexture("Confetti_green"));
        art1.push(CoreLib.UIUtil.getTexture("Confetti_Orange"));
        art1.push(CoreLib.UIUtil.getTexture("Confetti_Pink"));
        art1.push(CoreLib.UIUtil.getTexture("Confetti_Red"));
        art1.push(CoreLib.UIUtil.getTexture("Confetti_Yellow"));

        this.confettiParticle = new LibParticleComp(PARTICLE_CONFIG.Elements.confettiFall, art1);
        this.addChild(this.confettiParticle);
        this.confettiParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
        this.confettiParticle.y = 0;
        this.confettiParticle.stopAnimation();

        this.addChild(this.winAmountComp);
    }

    onCountUpDone() {
        super.onCountUpDone();
    }

    clearBigWin() {
        super.clearBigWin();
        this.confettiParticle.stopAnimation();
    }

    showBigWin(level) {
        super.showBigWin(level);
        this.confettiParticle.playAnimation();
        //CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.PLAY_ALL_WIN_SOUND_BIGWIN);
        this.resizeViewComponents();
    }

    resizeViewComponents(layoutData = null) {
        super.resizeViewComponents(layoutData);
        this.modalRect.width = CoreLib.UIUtil.getGameWidth();
        this.modalRect.height = CoreLib.UIUtil.getGameHeight();

        if (CoreLib.Model.GameConfig.featureTypes.freespins) {
            this.winAmountComp.scale.set(1);
            let sc;
            let slotview = CoreLib.View.getSlotGameView().getSlotMachinComp();
            sc = (slotview.reelFrame.width * slotview.scale.x) / this.winAmountComp.getWidth();
            this.winAmountComp.scale.set(sc);
            CoreLib.UIUtil.setPositionX(this.winAmountComp, (this.modalRect.width - this.winAmountComp.getWidth()) / 2 - 10);
            CoreLib.UIUtil.setPositionY(this.winAmountComp, (this.modalRect.height - this.winAmountComp.getHeight()) / 2 - 80);
        } else {
            this.winAmountComp.scale.set(1);
            let sc;
            let slotview = CoreLib.View.getSlotGameView().getSlotMachinComp();
            sc = (slotview.reelFrame.width * slotview.scale.x) / this.winAmountComp.getWidth();
            this.winAmountComp.scale.set(sc);
            CoreLib.UIUtil.setPositionX(this.winAmountComp, slotview.x + slotview.reelFrame.x * slotview.scale.x + (slotview.reelFrame.width * slotview.scale.x - this.winAmountComp.getWidth()) / 2);
            CoreLib.UIUtil.setPositionY(this.winAmountComp, slotview.y + slotview.reelFrame.y * slotview.scale.y + (slotview.reelFrame.height * slotview.scale.y - this.winAmountComp.getHeight()) / 2 + CoreLib.Util.getDefaultValue(this.winAmountComp.configData.yPadding, 0));
        }

        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.confettiParticle.scale.set(3);
                this.confettiParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
                this.confettiParticle.y = 0;
            } else {
                this.confettiParticle.scale.set(2);
                this.confettiParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
                this.confettiParticle.y = 0;
            }
        } else {
            this.confettiParticle.scale.set(1);
            this.confettiParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
            this.confettiParticle.y = 0;
        }
    }

};
