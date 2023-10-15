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
        this.coinParticle.y = CoreLib.UIUtil.getGameHeight() * 0.5;
        this.coinParticle.stopAnimation();

        let art2 =[];
        art2.push(CoreLib.UIUtil.getTexture("diamond"));
        art2.push(CoreLib.UIUtil.getTexture("Pink Diamond"));

        this.diamondParticle = new LibParticleComp(PARTICLE_CONFIG.Elements.DiamondShower, art2);
        this.addChild(this.diamondParticle);
        this.diamondParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
        this.diamondParticle.y = CoreLib.UIUtil.getGameHeight() * 0.5;
        this.diamondParticle.stopAnimation();

        this.addChild(this.winAmountComp);

        CoreLib.EventHandler.addEventListener("BIG_WIN_LEVEL_NOTIFICATION", this.checkWinLevel.bind(this));
   
    }

    onCountUpDone () {
        super.onCountUpDone();

    }

    clearBigWin () {
        super.clearBigWin();
        this.coinParticle.stopAnimation();
        this.diamondParticle.stopAnimation();
    }


    checkWinLevel(level) {
        this.coinParticle.playAnimation();
        if(level == 1){
            this.diamondParticle.stopAnimation();
        }else{
            this.diamondParticle.playAnimation();
        }

    }

    resizeViewComponents(layoutData = null) {
        super.resizeViewComponents(layoutData);
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.coinParticle.scale.set(2);
                this.diamondParticle.scale.set(2);
                this.coinParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
                this.coinParticle.y = CoreLib.UIUtil.getGameHeight() *0.4;
                this.diamondParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
                this.diamondParticle.y = CoreLib.UIUtil.getGameHeight()* 0.4 ;
            } else {
                this.coinParticle.scale.set(2);
                this.diamondParticle.scale.set(2);
                this.coinParticle.x = CoreLib.UIUtil.getGameWidth() * 0.53;
                this.coinParticle.y = CoreLib.UIUtil.getGameHeight() * 0.5;
                this.diamondParticle.x = CoreLib.UIUtil.getGameWidth() * 0.53;
                this.diamondParticle.y = CoreLib.UIUtil.getGameHeight() * 0.5;
            }
        } else {
            this.coinParticle.scale.set(1);
            this.diamondParticle.scale.set(1);
            this.coinParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
            this.coinParticle.y = CoreLib.UIUtil.getGameHeight() * 0.56;
            this.diamondParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
            this.diamondParticle.y = CoreLib.UIUtil.getGameHeight() * 0.56;
        }
    }
};
