import {SlotBigWinComp} from "../../../../../../../../slot_core/corelib/views/containers/SlotBigWinComp";
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib";
import {LibParticleComp} from "../../../../../../../../slot_core/corelib/views/comps/LibParticleComp";
import {slotModel} from "../../../../../../../../slot_core/corelib/models/SlotModel";
import {PARTICLE_CONFIG} from "../../config/views/ParticleConfig";

export class GameBigWinComp extends SlotBigWinComp {
    constructor(config) {
        super(config);

        let art1 = [];
        for (let k = 1; k <= 5; k++) {
            art1.push(CoreLib.UIUtil.getTexture("coin_" + k));
        }
        this.coinParticle = new LibParticleComp(PARTICLE_CONFIG.Elements.BigWinCoinShower, art1);
        this.addChild(this.coinParticle);
        this.coinParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
        this.coinParticle.y = CoreLib.UIUtil.getGameHeight();
        this.coinParticle.stopAnimation();


        let art2 = [];
        art2.push(CoreLib.UIUtil.getTexture("Confetti_Blue"));
        art2.push(CoreLib.UIUtil.getTexture("Confetti_DarkBlue"));
        art2.push(CoreLib.UIUtil.getTexture("Confetti_green"));
        art2.push(CoreLib.UIUtil.getTexture("Confetti_Orange"));
        art2.push(CoreLib.UIUtil.getTexture("Confetti_Pink"));
        art2.push(CoreLib.UIUtil.getTexture("Confetti_Red"));
        art2.push(CoreLib.UIUtil.getTexture("Confetti_Yellow"));

        this.confettiParticle = new LibParticleComp(PARTICLE_CONFIG.Elements.confettiFall, art2);
        this.addChild(this.confettiParticle);
        this.confettiParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
        this.confettiParticle.y = 0;
        this.confettiParticle.stopAnimation();
        this.addChild(this.winAmountComp);
    }

    onCountUpDone () {
        super.onCountUpDone();

    }

    clearBigWin () {
        super.clearBigWin();
        this.coinParticle.stopAnimation();
        this.confettiParticle.stopAnimation();
    }

    showBigWin(level) {
        super.showBigWin(level);
        this.coinParticle.playAnimation();
        this.confettiParticle.playAnimation();
        this.resizeViewComponents();
    }

    resizeViewComponents(layoutData = null) {
        super.resizeViewComponents(layoutData);
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.coinParticle.scale.set(2);
                this.confettiParticle.scale.set(3);
                this.confettiParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
                this.confettiParticle.y = 0;
                this.coinParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
                this.coinParticle.y = CoreLib.UIUtil.getGameHeight();
            } else {
                this.coinParticle.scale.set(2);
                this.confettiParticle.scale.set(2);
                this.confettiParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
                this.confettiParticle.y = 0;
                this.coinParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
                this.coinParticle.y = CoreLib.UIUtil.getGameHeight();
            }
        } else {
            this.coinParticle.scale.set(1);
            this.confettiParticle.scale.set(1);
            this.confettiParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
            this.confettiParticle.y = 0;
            this.coinParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
            this.coinParticle.y = CoreLib.UIUtil.getGameHeight();
        }
    }
};
