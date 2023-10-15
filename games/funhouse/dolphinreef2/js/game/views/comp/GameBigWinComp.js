import { SlotBigWinComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotBigWinComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { LibParticleComp } from "../../../../../../../../slot_core/corelib/views/comps/LibParticleComp";
import { PARTICLE_CONFIG } from "../../config/views/ParticleConfig";

export class GameBigWinComp extends SlotBigWinComp {
    constructor(config) {
        super(config);
        let art = [];
        art.push(CoreLib.UIUtil.getTexture("Confetti_Blue"));
        art.push(CoreLib.UIUtil.getTexture("Confetti_DarkBlue"));
        art.push(CoreLib.UIUtil.getTexture("Confetti_green"));
        art.push(CoreLib.UIUtil.getTexture("Confetti_Orange"));
        art.push(CoreLib.UIUtil.getTexture("Confetti_Pink"));
        art.push(CoreLib.UIUtil.getTexture("Confetti_Red"));
        art.push(CoreLib.UIUtil.getTexture("Confetti_Yellow"));

        this.confettiParticle = new LibParticleComp(PARTICLE_CONFIG.Elements.confettiFall, art);
        this.addChild(this.confettiParticle);
        this.confettiParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
        this.confettiParticle.y = 0;
        this.confettiParticle.stopAnimation();
        this.addChild(this.confettiParticle, this.winAmountComp);
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
        this.resizeViewComponents();
    }

    resizeViewComponents(layoutData = null) {
        super.resizeViewComponents(layoutData);
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
