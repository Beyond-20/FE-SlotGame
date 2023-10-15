import {SlotBigWinComp} from "../../../../../../../../slot_core/corelib/views/containers/SlotBigWinComp";
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib";
import {LibParticleComp} from "../../../../../../../../slot_core/corelib/views/comps/LibParticleComp";
import {PARTICLE_CONFIG} from "../../config/views/ParticleConfig";

export class GameBigWinComp extends SlotBigWinComp {
    constructor(config) {
        super(config);

        let art1 = [];
        for (let k = 1; k <= 18; k++) {
            art1.push(CoreLib.UIUtil.getTexture("coin" + k));
        }
        this.coinParticle = new LibParticleComp(PARTICLE_CONFIG.Elements.BigWinCoinShower, art1);
        this.addChild(this.coinParticle);
        this.coinParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
        this.coinParticle.y = CoreLib.UIUtil.getGameHeight() * 0.95;
        this.coinParticle.stopAnimation();

        this.addChild(this.winAmountComp);
    }

    onCountUpDone () {
        super.onCountUpDone();

    }

    clearBigWin () {
        super.clearBigWin();
        this.coinParticle.stopAnimation();
    }

    showBigWin(level) {
        super.showBigWin(level);
        this.coinParticle.playAnimation();
        this.resizeViewComponents();
    }

    resizeViewComponents(layoutData = null) {
        super.resizeViewComponents(layoutData);
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.coinParticle.scale.set(2);
                this.coinParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
                this.coinParticle.y = CoreLib.UIUtil.getGameHeight() * 0.74;
            } else {
                this.coinParticle.scale.set(2);
                this.coinParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
                this.coinParticle.y = CoreLib.UIUtil.getGameHeight() * 0.85;
            }
        } else {
            this.coinParticle.scale.set(1);
            this.coinParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
            this.coinParticle.y = CoreLib.UIUtil.getGameHeight() * 0.95;
        }
    }
};
