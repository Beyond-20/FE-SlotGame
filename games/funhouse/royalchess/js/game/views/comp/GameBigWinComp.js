import { SlotBigWinComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotBigWinComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { LibParticleComp } from "../../../../../../../../slot_core/corelib/views/comps/LibParticleComp";
import { PARTICLE_CONFIG } from "../../config/views/ParticleConfig";

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
        this.coinParticle.y = 0;
        this.coinParticle.stopAnimation();

        this.addChild(this.winAmountComp);
    }

    onCountUpDone() {
        super.onCountUpDone();
        CoreLib.EventHandler.dispatchEvent("STOP_BIG_WIN_SOLDIER_ANIM");
        this.coinParticle.stopAnimation();
    }

    showBigWin(level) {
        super.showBigWin(level);
        this.coinParticle.playAnimation();
        this.resizeViewComponents();
    }

    resizeViewComponents(layoutData = null) {
        super.resizeViewComponents(layoutData);
        this.modalRect.width = CoreLib.UIUtil.getGameWidth();
        this.modalRect.height = CoreLib.UIUtil.getGameHeight();

        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.coinParticle.scale.set(2);
                this.coinParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
                this.coinParticle.y = 0;
            } else {
                this.coinParticle.scale.set(2);
                this.coinParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
                this.coinParticle.y = 0;
            }
        } else {
            this.coinParticle.scale.set(1);
            this.coinParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
            this.coinParticle.y = 0;
        }

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
    }
};
