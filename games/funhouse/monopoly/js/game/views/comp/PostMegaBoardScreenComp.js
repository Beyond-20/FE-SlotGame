import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { LibView } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";
import { SlotEvents } from "../../../../../../../../slot_core/corelib/events/SlotEvents";
import { LibParticleComp } from "../../../../../../../../slot_core/corelib/views/comps/LibParticleComp";
import { PARTICLE_CONFIG } from "../../config/views/ParticleConfig";

export class PostMegaBoardScreenComp extends LibView {
    constructor(config, layoutconfig) {
        super(config, layoutconfig);
        this.bg = this.elementsList["bg"];
        CoreLib.UIUtil.setModalState(this.bg, true);
        this.postMegaboardElements = this.elementsList["postMegaboardElements"];
        this.guideRect = this.postMegaboardElements.elementsList["guideRect"];
        this.winningBoxRotatingComp = this.postMegaboardElements.elementsList["winningBoxRotatingComp"];
        this.cupsGuideRect = this.winningBoxRotatingComp.elementsList["guideRect"];
        this.diamond10x = this.winningBoxRotatingComp.elementsList["diamond10x"];
        this.silver5x = this.winningBoxRotatingComp.elementsList["silver5x"];
        this.silver4x = this.winningBoxRotatingComp.elementsList["silver4x"];
        this.bronze3x = this.winningBoxRotatingComp.elementsList["bronze3x"];
        this.bronze2x = this.winningBoxRotatingComp.elementsList["bronze2x"];
        this.trophyArr = [this.bronze2x, this.bronze3x, this.silver4x, this.silver5x, this.diamond10x]
        this.totalWinAmountComp = this.postMegaboardElements.elementsList["totalWinAmountComp"];
        this.visible = false;

        this.rect = CoreLib.UIUtil.getRectangle(3500, 3500, 0x00B140);
        this.rect.x = 0;
        this.rect.y = 0;
        this.addChild(this.rect);
        this.rect.alpha = 0;
        CoreLib.UIUtil.setClickable(this.rect, false);
        CoreLib.UIUtil.addInteraction(this.rect, this.onAnyWhereClicked.bind(this));

        this.arrowSymb = this.postMegaboardElements.elementsList["arrowSymb"];
        this.arrowSymb.visible = false;
        this.pressAnyWhereText = this.postMegaboardElements.elementsList["pressAnyWhereText"];
        this.pressAnyWhereText.text = CoreLib.Util.getContent("pressAnyWhereText");
        this.pressAnyWhereText.visible = true;
        this.setEnabled(false);
        CoreLib.AnimationManager.animateTween(this.pressAnyWhereText, 1, { scaleX: 1.1, scaleY: 1.1, repeat: -1, yoyo: true })

        CoreLib.EventHandler.addEventListener("SHOW_POST_MEGABOARD_SCREEN", this.showPostMegaBoard.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_MULTIPLIER_X_VALUE", this.onFeatureResponse.bind(this));
        CoreLib.EventHandler.addEventListener("UPDATE_WIN_AMOUNT", this.showFinalWin.bind(this));

        this.totalWinAmountComp.on("WinAmountFinalValueShown", this.onWinAmountFinalValueShownDone.bind(this));
        this.totalWinAmountComp.on("WinAmountCountUpDone", this.onWinAmountCountUpDone.bind(this));

        //confetti Animation for big money Multiplier
        let art1 = [];
        art1.push(CoreLib.UIUtil.getTexture("Confetti_Blue"));
        art1.push(CoreLib.UIUtil.getTexture("Confetti_DarkBlue"));
        art1.push(CoreLib.UIUtil.getTexture("Confetti_green"));
        art1.push(CoreLib.UIUtil.getTexture("Confetti_Orange"));
        art1.push(CoreLib.UIUtil.getTexture("Confetti_Pink"));
        art1.push(CoreLib.UIUtil.getTexture("Confetti_Red"));
        art1.push(CoreLib.UIUtil.getTexture("Confetti_Yellow"));

        this.confettiParticle = new LibParticleComp(PARTICLE_CONFIG.Elements.confettiFall, art1);
        this.addChild(this.confettiParticle, this.rect);
        this.confettiParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
        this.confettiParticle.y = 0;
        this.confettiParticle.stopAnimation();

        this.reset();
    }

    reset(){
        CoreLib.UIUtil.setModalState(this.bg, true);
        this.pressAnyWhereText.visible = true;
        this.arrowSymb.visible = false;
        this.setEnabled(true);
    }

    showPostMegaBoard() {
        this.visible = true;
        this.reset();
        CoreLib.EventHandler.dispatchEvent("STOP_REEL_ANIMATION_SOUND_ON_BONUS_END");
        CoreLib.EventHandler.dispatchEvent("STOP_LINEWIN_SOUND");
        CoreLib.EventHandler.dispatchEvent("STOP_WILD_SOUND");
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.STOP_ALL_WIN_SOUND_BIGWIN);
        CoreLib.Model.GameConfig.noPortraitMode = true;
        CoreLib.EventHandler.dispatchEvent("CHECK_NO_PORTRAIT_MOCAL");
        let arr = slotModel.featureResult.featureResults;
        this.previousWinAmount = arr[0].totalWin;
        this.totalWinAmountComp.showText(CoreLib.WrapperService.formatCurrency(this.previousWinAmount));
        this.winningBoxRotatingComp.trophyRotate();
    }

    setEnabled(flag) {
        CoreLib.UIUtil.setClickable(this.rect, flag);
    }

    onAnyWhereClicked() {
        this.setEnabled(false);
        this.pressAnyWhereText.visible = false;
        this.arrowSymb.visible = true;
        setTimeout(this.handleClick.bind(this), 0);
    }

    handleClick() {
        this.winningBoxRotatingComp.increaseSpeed();
        CoreLib.WrapperService.requestSpecialData(slotModel.getCurrentBonusName());
        this.confettiParticle.playAnimation();
        CoreLib.AnimationManager.animateTween(this.arrowSymb, 0.5, { y: 830, repeat: -1, yoyo: true });
    }

    onFeatureResponse() {
        setTimeout(() => {
            this.winningBoxRotatingComp.showWinningCup();
        }, 6500);
    }

    showFinalWin() {
        let arr = slotModel.featureResult.featureResults;
        let val = arr[1].totalWin;
        this.confettiParticle.stopAnimation();
        this.totalWinAmountComp.showWin(val, true, this.previousWinAmount);
    }

    onWinAmountFinalValueShownDone() {
        CoreLib.EventHandler.dispatchEvent(SlotEvents.NORMAL_WIN_COUNTUP_DONE);
    }

    onWinAmountCountUpDone() {
        this.visible = false;
        CoreLib.EventHandler.dispatchEvent("SHOW_POST_MEGABOARD_WINNING_SCREEN");
    }

    resizeViewComponents() {
        super.resizeViewComponents();
        this.resizeChildren();
        CoreLib.UIUtil.adjustElement(this.bg);
        CoreLib.UIUtil.adjustElement(this.guideRect);
        CoreLib.UIUtil.adjustWidthHeightForMobile(this.guideRect);
        CoreLib.UIUtil.adjustElement(this.cupsGuideRect);
        CoreLib.UIUtil.adjustWidthHeightForMobile(this.cupsGuideRect);
        CoreLib.UIUtil.adjustElement(this.totalWinAmountComp);
        CoreLib.UIUtil.positionObjectForDevice(this.totalWinAmountComp);
        CoreLib.UIUtil.adjustElement(this.diamond10x);
        CoreLib.UIUtil.positionObjectForDevice(this.diamond10x);
        CoreLib.UIUtil.adjustElement(this.silver5x);
        CoreLib.UIUtil.positionObjectForDevice(this.silver5x);
        CoreLib.UIUtil.adjustElement(this.silver4x);
        CoreLib.UIUtil.positionObjectForDevice(this.silver4x);
        CoreLib.UIUtil.adjustElement(this.bronze3x);
        CoreLib.UIUtil.positionObjectForDevice(this.bronze3x);
        CoreLib.UIUtil.adjustElement(this.bronze2x);
        CoreLib.UIUtil.positionObjectForDevice(this.bronze2x);

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

}
