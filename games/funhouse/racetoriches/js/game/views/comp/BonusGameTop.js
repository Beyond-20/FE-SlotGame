import { SlotGameBonusComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotGameBonusComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";
import { UIUtil } from "../../../../../../../../slot_core/corelib/pixiwrapper/UIUtilService";
import { LibParticleComp } from "../../../../../../../../slot_core/corelib/views/comps/LibParticleComp";
import { PARTICLE_CONFIG } from "../../config/views/ParticleConfig";

const spinePoints = [
    //level1
    { x: 2600, y: 2050, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 1030, lx: 2600, ly: 2050 },
    { x: 2000, y: 2050, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 1500, lx: 2000, ly: 2050 },
    { x: 1400, y: 2050, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 2000, lx: 1400, ly: 2050 },
    { x: 800, y: 2050, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 2500, lx: 800, ly: 2050 },
    { x: 400, y: 1600, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2200, py: 2800, lx: 400, ly: 1600 },
    { x: 450, y: 1200, scaleX: -1, pScaleX: 1, lScaleX: -1, px: 1700, py: 2900, lx: 450, ly: 1200 },
    { x: 550, y: 750, scaleX: -1, pScaleX: 1, lScaleX: -1, px: 1300, py: 2900, lx: 550, ly: 750 },
    { x: 700, y: 400, scaleX: -1, pScaleX: 1, lScaleX: -1, px: 750, py: 2800, lx: 700, ly: 400 },
    { x: 1100, y: 240, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 500, py: 2500, lx: 1100, ly: 240 },
    { x: 1600, y: 220, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 450, py: 2000, lx: 1600, ly: 220 },
    { x: 2150, y: 220, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 450, py: 1500, lx: 2150, ly: 220 },
    { x: 2700, y: 220, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 450, py: 1000, lx: 2700, ly: 220 },
    { x: 3200, y: 220, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 500, py: 550, lx: 3200, ly: 220 },
    { x: 3600, y: 400, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 1000, py: 200, lx: 3600, ly: 400 },
    { x: 3650, y: 800, scaleX: 1, pScaleX: -1, lScaleX: 1, px: 1500, py: 200, lx: 3600, ly: 800 },
    { x: 3650, y: 1150, scaleX: 1, pScaleX: -1, lScaleX: 1, px: 1900, py: 200, lx: 3650, ly: 1150 },
    { x: 3550, y: 1550, scaleX: 1, pScaleX: -1, lScaleX: 1, px: 2400, py: 200, lx: 3550, ly: 1550 },
    { x: 3200, y: 1900, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2650, py: 500, lx: 3200, ly: 1900 },
    //level2
    { x: 2600, y: 2050, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 1030, lx: 2600, ly: 2050 },
    { x: 2000, y: 2050, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 1500, lx: 2000, ly: 2050 },
    { x: 1400, y: 2050, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 2000, lx: 1400, ly: 2050 },
    { x: 800, y: 2050, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 2500, lx: 800, ly: 2050 },
    { x: 400, y: 1600, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2200, py: 2800, lx: 400, ly: 1600 },
    { x: 450, y: 1200, scaleX: -1, pScaleX: 1, lScaleX: -1, px: 1700, py: 2900, lx: 450, ly: 1200 },
    { x: 550, y: 750, scaleX: -1, pScaleX: 1, lScaleX: -1, px: 1300, py: 2900, lx: 550, ly: 750 },
    { x: 700, y: 400, scaleX: -1, pScaleX: 1, lScaleX: -1, px: 750, py: 2800, lx: 700, ly: 400 },
    { x: 1100, y: 240, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 500, py: 2500, lx: 1100, ly: 240 },
    { x: 1600, y: 220, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 450, py: 2000, lx: 1600, ly: 220 },
    { x: 2150, y: 220, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 450, py: 1500, lx: 2150, ly: 220 },
    { x: 2700, y: 220, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 450, py: 1000, lx: 2700, ly: 220 },
    { x: 3200, y: 220, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 500, py: 550, lx: 3200, ly: 220 },
    { x: 3600, y: 400, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 1000, py: 200, lx: 3600, ly: 400 },
    { x: 3650, y: 800, scaleX: 1, pScaleX: -1, lScaleX: 1, px: 1500, py: 200, lx: 3600, ly: 800 },
    { x: 3650, y: 1150, scaleX: 1, pScaleX: -1, lScaleX: 1, px: 1900, py: 200, lx: 3650, ly: 1150 },
    { x: 3550, y: 1550, scaleX: 1, pScaleX: -1, lScaleX: 1, px: 2400, py: 200, lx: 3550, ly: 1550 },
    { x: 3200, y: 1900, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2650, py: 500, lx: 3200, ly: 1900 },
    //level3
    { x: 2600, y: 2050, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 1030, lx: 2600, ly: 2050 },
    { x: 2000, y: 2050, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 1500, lx: 2000, ly: 2050 },
    { x: 1400, y: 2050, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 2000, lx: 1400, ly: 2050 },
    { x: 800, y: 2050, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 2500, lx: 800, ly: 2050 },
    { x: 400, y: 1600, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2200, py: 2800, lx: 400, ly: 1600 },
    { x: 450, y: 1200, scaleX: -1, pScaleX: 1, lScaleX: -1, px: 1700, py: 2900, lx: 450, ly: 1200 },
    { x: 550, y: 750, scaleX: -1, pScaleX: 1, lScaleX: -1, px: 1300, py: 2900, lx: 550, ly: 750 },
    { x: 700, y: 400, scaleX: -1, pScaleX: 1, lScaleX: -1, px: 750, py: 2800, lx: 700, ly: 400 },
    { x: 1100, y: 240, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 500, py: 2500, lx: 1100, ly: 240 },
    { x: 1600, y: 220, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 450, py: 2000, lx: 1600, ly: 220 },
    { x: 2150, y: 220, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 450, py: 1500, lx: 2150, ly: 220 },
    { x: 2700, y: 220, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 450, py: 1000, lx: 2700, ly: 220 },
    { x: 3200, y: 220, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 500, py: 550, lx: 3200, ly: 220 },
    { x: 3600, y: 400, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 1000, py: 200, lx: 3600, ly: 400 },
    { x: 3650, y: 800, scaleX: 1, pScaleX: -1, lScaleX: 1, px: 1500, py: 200, lx: 3600, ly: 800 },
    { x: 3650, y: 1150, scaleX: 1, pScaleX: -1, lScaleX: 1, px: 1900, py: 200, lx: 3650, ly: 1150 },
    { x: 3550, y: 1550, scaleX: 1, pScaleX: -1, lScaleX: 1, px: 2400, py: 200, lx: 3550, ly: 1550 },
    { x: 3200, y: 1900, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2650, py: 500, lx: 3200, ly: 1900 }
];

export class BonusGameTop extends SlotGameBonusComp {
    constructor(config) {
        super(config);
        this.jockeyContainer = this.elementsList["jockeyContainer"];
        this.greenJockey = this.jockeyContainer.elementsList["greenJockey"];
        this.redJockey = this.jockeyContainer.elementsList["redJockey"];
        this.maskRect = this.elementsList["maskRect"];
        this.miniPopUp = this.elementsList["miniPopUp"];
        this.miniPopUp.visible = false;

        this.miniLapText1 = this.miniPopUp.elementsList["miniLapText1"];
        this.miniLapText1.text = CoreLib.Util.getContent("firstLapText");
        this.miniLapText1.visible = false;

        this.miniLapText2 = this.miniPopUp.elementsList["miniLapText2"];
        this.miniLapText2.text = CoreLib.Util.getContent("secondLapText");
        this.miniLapText2.visible = false;

        this.miniLapText3 = this.miniPopUp.elementsList["miniLapText3"];
        this.miniLapText3.text = CoreLib.Util.getContent("finalLapText");
        this.miniLapText3.visible = false;

        this.miniLapLevel1 = this.miniPopUp.elementsList["miniLapLevel1"];
        this.miniLapLevel1.visible = false;
        this.miniLapLevel2 = this.miniPopUp.elementsList["miniLapLevel2"];
        this.miniLapLevel2.visible = false;
        this.miniLapLevel3 = this.miniPopUp.elementsList["miniLapLevel3"];
        this.miniLapLevel3.visible = false;

        this.megaboardUpgradedText = this.elementsList["megaboardUpgradedText"];
        this.megaboardUpgradedText.text = CoreLib.Util.getContent("megaboardUpgradedText");
        this.megaboardUpgradedText.visible = false;

        this.diceRotatingComp = this.elementsList["diceRotatingComp"];
        this.containerMask = CoreLib.UIUtil.getContainer();

        this.bigWinTriggeredAnim = this.elementsList["bigWinTriggeredAnim"];
        this.bigWinTriggeredAnim.visible = false;

        this.levelHighlightElements = this.elementsList["levelHighlightElements"];
        this.levelHighlightElementsGuideRect = this.levelHighlightElements.elementsList["guideRect"];
        this.levelHighlightElements.on("PLAY_COIN_ANIMATION", this.playCoinAnimation.bind(this));
        this.levelHighlightElements.on("STOP_COIN_ANIMATION", this.stopCoinAnimation.bind(this));


        CoreLib.EventHandler.addEventListener("SHOW_GREEN_MAN_ICON_ANIMATION", this.showGreenManIconAnimation.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_RED_MAN_ICON_ANIMATION", this.showRedManIconAnimation.bind(this));

        CoreLib.EventHandler.addEventListener("MAKE_GREEN_MAN_SLEEP", this.greenManSleepAnim.bind(this));
        CoreLib.EventHandler.addEventListener("MAKE_RED_MAN_SLEEP", this.redManSleepAnim.bind(this));

        CoreLib.EventHandler.addEventListener("LEVEL_ELEMENTS_UPGRADED_SUCCESSFULLY", this.hideAnimatedElements.bind(this));

        CoreLib.EventHandler.addEventListener("SHOW_BIG_MONEY_TRIGGERED_ANIM", this.showBigMoneyMultiplierAnimation.bind(this));

        this.currentGreenManPosition = 0;
        this.currentRedManPosition = 0;
        this.level2Upgraded = false;
        this.level3Upgraded = false;
        this.currentGreenPosition = 0;
        this.currentRedPosition = 0;

        //confetti Animation for big money
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
        this.addChild(this.bigWinTriggeredAnim);

        //coinAnimation for _xBet
        let art2 = [];
        for (let k = 1; k <= 5; k++) {
            art2.push(CoreLib.UIUtil.getTexture("coin_" + k));
        }
        this.coinParticle = new LibParticleComp(PARTICLE_CONFIG.Elements.BigWinCoinShower, art2);
        this.addChild(this.coinParticle);
        this.coinParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5 + 60;
        this.coinParticle.y = CoreLib.UIUtil.getGameHeight() + 220;
        this.coinParticle.stopAnimation();

        this.isJockeyMovementStarted = false;
        CoreLib.EventHandler.addEventListener("SHOW_RED_CROSS_GREEN_SCREEN", this.setJockyesToStartPos.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_POST_MEGABOARD_SCREEN", this.setJockyesToStartPos.bind(this));
        CoreLib.EventHandler.addEventListener("HIDE_MINI_POPUP", this.hideMiniPopup.bind(this));

    }

    initiateView() {
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.greenJockey.x = 2700;
                this.greenJockey.y = 630;
                this.greenJockey.scale.x = 1;
                this.redJockey.x = 2600;
                this.redJockey.y = 550;
                this.redJockey.scale.x = 1;
            } else {
                this.redJockey.x = 3380;
                this.redJockey.y = 1930;
                this.redJockey.scale.x = 1;
                this.greenJockey.x = 3200;
                this.greenJockey.y = 1900;
                this.greenJockey.scale.x = 1;
            }
        } else {
            this.redJockey.x = 3380;
            this.redJockey.y = 1930;
            this.redJockey.scale.x = 1;
            this.greenJockey.x = 3200;
            this.greenJockey.y = 1900;
            this.greenJockey.scale.x = 1;
        }
    }

    reset() {
        this.currentGreenManPosition = 0;
        this.currentRedManPosition = 0;
        this.currentGreenPosition = 0;
        this.nextGreenPosition = 0;
        this.currentRedPosition = 0;
        this.nextRedPosition = 0;
        this.greenManSleepAnim();
        this.redManSleepAnim();
        this.initiateView();
        this.miniPopUp.visible = true;
        this.miniLapText1.visible = true;
        this.miniLapText2.visible = false;
        this.miniLapText3.visible = false;
        this.miniLapLevel1.visible = true;
        this.miniLapLevel2.visible = false;
        this.miniLapLevel3.visible = false;
        this.megaboardUpgradedText.visible = false;
        this.bigWinTriggeredAnim.visible = false;
        this.level2Upgraded = false;
        this.level3Upgraded = false;
        this.isJockeyMovementStarted = false;
    }

    playCoinAnimation() {
        this.coinParticle.playAnimation();
    }

    stopCoinAnimation() {
        this.coinParticle.stopAnimation();
    }

    showManCurrentPosition(data) {
        this.isJockeyMovementStarted = true;
        if (data.totalNumberOfHopsByGreen == 0) {
            this.currentGreenManPosition = data.totalNumberOfHopsByGreen;
        } else {
            this.currentGreenManPosition = data.totalNumberOfHopsByGreen - 1;
        }
        const greenManPosition = spinePoints[this.currentGreenManPosition];
        this.currentGreenPosition = this.currentGreenManPosition;
        if (this.currentGreenPosition > 0) {
            if (CoreLib.Model.DeviceConfig.isDevice) {
                if (CoreLib.Model.DeviceConfig.isPortrait) {
                    this.greenJockey.x = greenManPosition.px;
                    this.greenJockey.y = greenManPosition.py;
                    this.greenJockey.scale.x = greenManPosition.pScaleX;
                } else {
                    this.greenJockey.x = greenManPosition.lx;
                    this.greenJockey.y = greenManPosition.ly;
                    this.greenJockey.scale.x = greenManPosition.lScaleX;
                }
            } else {
                this.greenJockey.x = greenManPosition.x;
                this.greenJockey.y = greenManPosition.y;
                this.greenJockey.scale.x = greenManPosition.scaleX;
            }
        }

        if (data.totalNumberOfHopsByRed == 0) {
            this.currentRedManPosition = data.totalNumberOfHopsByRed;
        } else {
            this.currentRedManPosition = data.totalNumberOfHopsByRed - 1;
        }
        this.currentRedPosition = this.currentRedManPosition;
        if (data.totalNumberOfHopsByRed > 0) {
            const redManPosition = spinePoints[this.currentRedManPosition];
            if (CoreLib.Model.DeviceConfig.isDevice) {
                if (CoreLib.Model.DeviceConfig.isPortrait) {
                    this.redJockey.x = redManPosition.px;
                    this.redJockey.y = redManPosition.py;
                    this.redJockey.scale.x = redManPosition.pScaleX;
                } else {
                    this.redJockey.x = redManPosition.lx;
                    this.redJockey.y = redManPosition.ly;
                    this.redJockey.scale.x = redManPosition.lScaleX;
                }
            } else {
                this.redJockey.x = redManPosition.x;
                this.redJockey.y = redManPosition.y;
                this.redJockey.scale.x = redManPosition.scaleX;
            }
        }

    }

    showMiniPopup(level = 1) {
        let data = slotModel.getFeatureData();
        if (data.level == 1 || level == 1) {
            this.miniPopUp.visible = true;
            CoreLib.EventHandler.dispatchEvent("PLAY_FIRST_LAP_SOUND");
            CoreLib.EventHandler.dispatchEvent("PLAY_LAP_INFO_SHOW_SOUND");
            this.miniLapText1.visible = true;
            this.miniLapLevel1.visible = true;
            this.miniLapText2.visible = false;
            this.miniLapLevel2.visible = false;
            this.miniLapText3.visible = false;
            this.miniLapLevel3.visible = false;
            CoreLib.EventHandler.dispatchEvent("SHOW_FIRST_LAP_LEVEL", data);
        }
        if (level == 2) {
            if (slotModel.isUnfinishedGame()) {
                this.miniPopUp.visible = true;
                this.miniLapText2.visible = true;
                this.miniLapLevel2.visible = true;
                this.miniLapText1.visible = false;
                this.miniLapLevel1.visible = false;
                this.miniLapText3.visible = false;
                this.miniLapLevel3.visible = false;
            } else {
                CoreLib.EventHandler.dispatchEvent("PLAY_SECOND_LAP_SOUND");
                if (CoreLib.Model.DeviceConfig.isDevice) {
                    if (CoreLib.Model.DeviceConfig.isPortrait) {
                        CoreLib.EventHandler.dispatchEvent("PLAY_MINIPOPUP_SHOW_SOUND");
                        CoreLib.AnimationManager.animateTween(this.miniPopUp, 0.5, { y: 1050 });
                    } else {
                        CoreLib.EventHandler.dispatchEvent("PLAY_MINIPOPUP_SHOW_SOUND");
                        CoreLib.AnimationManager.animateTween(this.miniPopUp, 0.5, { y: 650 });
                    }
                } else {
                    CoreLib.EventHandler.dispatchEvent("PLAY_MINIPOPUP_SHOW_SOUND");
                    CoreLib.AnimationManager.animateTween(this.miniPopUp, 0.5, { y: 650 });
                }
                this.miniPopUp.visible = true;
                this.miniLapText1.visible = false;
                this.miniLapLevel1.visible = false;
                this.miniLapText3.visible = false;
                this.miniLapLevel3.visible = false;
                CoreLib.EventHandler.dispatchEvent("PLAY_LAP_INFO_SHOW_SOUND");
                this.miniLapText2.visible = true;
                this.miniLapLevel2.visible = true;
                CoreLib.EventHandler.dispatchEvent("SHOW_UPGRADING_NEXT_LEVEL_ELEMENTS", level);
            }
        } else if (level == 3) {
            if (slotModel.isUnfinishedGame()) {
                this.miniPopUp.visible = true;
                this.miniLapText3.visible = true;
                this.miniLapLevel3.visible = true;
                this.miniLapText2.visible = false;
                this.miniLapLevel2.visible = false;
                this.miniLapText1.visible = false;
                this.miniLapLevel1.visible = false;
            } else {
                CoreLib.EventHandler.dispatchEvent("PLAY_THIRD_LAP_SOUND");
                if (CoreLib.Model.DeviceConfig.isDevice) {
                    if (CoreLib.Model.DeviceConfig.isPortrait) {
                        CoreLib.EventHandler.dispatchEvent("PLAY_MINIPOPUP_SHOW_SOUND");
                        CoreLib.AnimationManager.animateTween(this.miniPopUp, 0.5, { y: 1050 });
                    } else {
                        CoreLib.EventHandler.dispatchEvent("PLAY_MINIPOPUP_SHOW_SOUND");
                        CoreLib.AnimationManager.animateTween(this.miniPopUp, 0.5, { y: 650 });
                    }
                } else {
                    CoreLib.EventHandler.dispatchEvent("PLAY_MINIPOPUP_SHOW_SOUND");
                    CoreLib.AnimationManager.animateTween(this.miniPopUp, 0.5, { y: 650 });
                }
                this.miniPopUp.visible = true;
                this.miniLapText2.visible = false;
                this.miniLapLevel2.visible = false;
                CoreLib.EventHandler.dispatchEvent("PLAY_LAP_INFO_SHOW_SOUND");
                this.miniLapText3.visible = true;
                this.miniLapLevel3.visible = true;
                CoreLib.EventHandler.dispatchEvent("SHOW_UPGRADING_NEXT_LEVEL_ELEMENTS", level);
            }
        }
    }

    hideMiniPopup() {
        if (this.maskRect) {
            this.containerMask.mask = this.maskRect;
        }
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                CoreLib.EventHandler.dispatchEvent("PLAY_LAP_INFO_HIDE_SOUND");
                CoreLib.EventHandler.dispatchEvent("PLAY_MINIPOPUP_HIDE_SOUND");
                CoreLib.AnimationManager.animateTween(this.miniPopUp, 0.5, { y: 1300, onComplete: this.onMiniPopupHideComplete.bind(this) });
            } else {
                CoreLib.EventHandler.dispatchEvent("PLAY_LAP_INFO_HIDE_SOUND");
                CoreLib.EventHandler.dispatchEvent("PLAY_MINIPOPUP_HIDE_SOUND");
                CoreLib.AnimationManager.animateTween(this.miniPopUp, 0.5, { y: 1200, onComplete: this.onMiniPopupHideComplete.bind(this) });
            }
        } else {
            CoreLib.EventHandler.dispatchEvent("PLAY_LAP_INFO_HIDE_SOUND");
            CoreLib.EventHandler.dispatchEvent("PLAY_MINIPOPUP_HIDE_SOUND");
            CoreLib.AnimationManager.animateTween(this.miniPopUp, 0.5, { y: 1200, onComplete: this.onMiniPopupHideComplete.bind(this) });
        }
        this.containerMask.addChild(this.miniPopUp);
        this.addChild(this.containerMask);
        if (slotModel.isUnfinishedGame()) {
            let data = slotModel.getFeatureData();
            if (data.level == 2 || data.level == 3) {
                CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.START_SLOT_SPIN);
                setTimeout(() => {
                    this.diceRotatingComp.showPress2Btn();
                }, 1500);
            }
        }
    }

    onMiniPopupHideComplete() {
        this.miniPopUp.visible = false;
        let data = slotModel.getFeatureData();
        if (data.level == 1 || data.currentCount == 0) {
            this.emit("ON_MINI_POPUP_HIDE_COMPLETE");
        } else {

        }
    }

    showMegaboardUpgradedText(level) {
        this.megaboardUpgradedText.visible = true;
        this.megaboardUpgradedText.scale = 0.8;
        CoreLib.AnimationManager.animateTween(this.megaboardUpgradedText, 1, { scaleX: 1.2, scaleY: 1.2, onComplete: this.showMiniPopup.bind(this, level) });
    }

    hideAnimatedElements(data) {
        this.megaboardUpgradedText.visible = false;
        this.hideMiniPopup();
        this.onElementsUpgraded(data);
    }

    showGreenManIconAnimation(data) {
        this.nextGreenPosition = data.totalNumberOfHopsByGreen;
        CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_GENERAL_AWAKE_SOUND");
        this.greenJockey.playAnimation("green_man_win", true);
        CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_JUMP_TO_MOVE_SOUND");
        setTimeout(() => {
            this.greenHopAnimate(data);
        }, 1600);
    }

    greenHopAnimate(data) {
        this.greenJockey.playAnimation("green_man_run", true);
        CoreLib.EventHandler.dispatchEvent("PLAY_RED_RIDE_GENERAL_GAME_SOUND");
        if (this.currentGreenPosition == this.nextGreenPosition) {
            this.isJockeyMovementStarted = true;
            if (this.currentGreenPosition == 18 && this.nextGreenPosition == 18) {
                if (this.level2Upgraded) {
                    CoreLib.EventHandler.dispatchEvent("SHOW_RED_DICE_ANIMATION", data);
                }
            }
            if (this.currentGreenPosition == 36 && this.nextGreenPosition == 36) {
                if (this.level3Upgraded) {
                    CoreLib.EventHandler.dispatchEvent("SHOW_RED_DICE_ANIMATION", data);
                }
            }
            if (this.currentGreenPosition == 54 && this.nextGreenPosition == 54) {
            }
            setTimeout(() => {
                this.diceRotatingComp.hideGreenManDice(data);
            }, 500);
        } else {
            this.isJockeyMovementStarted = true;
            if (this.currentGreenPosition >= 0 && this.currentGreenPosition < 18) {
                this.moveGreenMan(data);
            } else if (this.currentGreenPosition == 18) {
                if (this.level2Upgraded) {
                    this.moveGreenMan(data);
                } else {
                    this.diceRotatingComp.hideGreenDice(data);
                    this.element = UIUtil.getSprite(this.levelHighlightElements.configData.data[18].image);
                    this.addChild(this.element);
                    this.element.anchor.set(0.5, 0.5);
                    if (CoreLib.Model.DeviceConfig.isDevice) {
                        if (CoreLib.Model.DeviceConfig.isPortrait) {
                            this.element.x = 950;
                            this.element.y = 1010;
                        } else {
                            this.element.x = this.levelHighlightElementsGuideRect.width / 2 + 510;
                            this.element.y = this.levelHighlightElementsGuideRect.height / 2 + 345;
                        }
                    } else {
                        this.element.x = this.levelHighlightElementsGuideRect.width / 2 + 510;
                        this.element.y = this.levelHighlightElementsGuideRect.height / 2 + 345;
                    }
                    this.element.scale.set(1);
                    CoreLib.AnimationManager.animateTween(this.element, 0.5, { scaleX: 1.1, scaleY: 1.1, repeat: 2, yoyo: true, onComplete: this.destroyWinSpinElement.bind(this) });
                }
            } else if (this.currentGreenPosition > 18 && this.currentGreenPosition < 36) {
                this.moveGreenMan(data);
            } else if (this.currentGreenPosition == 36) {
                if (this.level3Upgraded) {
                    this.moveGreenMan(data);
                } else {
                    this.diceRotatingComp.hideGreenDice(data);
                    this.element = UIUtil.getSprite(this.levelHighlightElements.configData.data[36].image);
                    this.addChild(this.element);
                    this.element.anchor.set(0.5, 0.5);
                    if (CoreLib.Model.DeviceConfig.isDevice) {
                        if (CoreLib.Model.DeviceConfig.isPortrait) {
                            this.element.x = 950;
                            this.element.y = 1010;
                        } else {
                            this.element.x = this.levelHighlightElementsGuideRect.width / 2 + 510;
                            this.element.y = this.levelHighlightElementsGuideRect.height / 2 + 345;
                        }
                    } else {
                        this.element.x = this.levelHighlightElementsGuideRect.width / 2 + 510;
                        this.element.y = this.levelHighlightElementsGuideRect.height / 2 + 345;
                    }
                    this.element.scale.set(1);
                    CoreLib.AnimationManager.animateTween(this.element, 0.5, { scaleX: 1.1, scaleY: 1.1, repeat: 2, yoyo: true, onComplete: this.destroyWinSpinElement.bind(this) });
                }
            } else if (this.currentGreenPosition > 36 && this.currentGreenPosition < 54) {
                this.moveGreenMan(data);
            } else if (this.currentGreenPosition >= 54) {
                CoreLib.EventHandler.dispatchEvent("PLAY_BIG_MONEY_TROPHY_HEIGHTLIGHT_SOUND");
                this.diceRotatingComp.hideGreenDice(data);
            }
        }
    }

    moveGreenMan(data) {
        let jumpDuration = 0.5;
        this.isJockeyMovementStarted = true;
        const position = spinePoints[this.currentGreenPosition];
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                CoreLib.AnimationManager.animateTween(this.greenJockey, jumpDuration, {
                    x: position.px,
                    y: position.py,
                    scaleX: position.pScaleX,
                    onComplete: this.greenHopAnimate.bind(this, data)
                });
            } else {
                CoreLib.AnimationManager.animateTween(this.greenJockey, jumpDuration, {
                    x: position.lx,
                    y: position.ly,
                    scaleX: position.lScaleX,
                    onComplete: this.greenHopAnimate.bind(this, data)
                });
            }
        } else {
            CoreLib.AnimationManager.animateTween(this.greenJockey, jumpDuration, {
                x: position.x,
                y: position.y,
                scaleX: position.scaleX,
                onComplete: this.greenHopAnimate.bind(this, data)
            });
        }
        this.currentGreenPosition++;
    }

    destroyWinSpinElement() {
        this.element.destroy();
        if (this.currentGreenPosition == 18) {
            this.showMegaboardUpgradedText(2);
        }
        if (this.currentGreenPosition == 36) {
            this.showMegaboardUpgradedText(3);
        }
    }

    greenManSleepAnim() {
        this.greenJockey.playAnimation("green_man_sleep", true);
        CoreLib.EventHandler.dispatchEvent("STOP_RED_RIDE_GENERAL_GAME_SOUND");
        CoreLib.EventHandler.dispatchEvent("PLAY_GREEN_SNORING_SOUND");
    }

    showRedManIconAnimation(data) {
        this.nextRedPosition = data.totalNumberOfHopsByRed;
        this.redJockey.playAnimation("red_man_win", true);
        CoreLib.EventHandler.dispatchEvent("PLAY_RED_JUMP_TO_MOVE_SOUND");
        setTimeout(() => {
            this.redHopAnimate(data);
        }, 1600);
    }

    redHopAnimate(data) {
        let jumpDuration = 0.5;
        this.isJockeyMovementStarted = true;
        this.redJockey.playAnimation("red_man_run", true);
        CoreLib.EventHandler.dispatchEvent("PLAY_RED_RIDE_GENERAL_GAME_SOUND");
        if ((this.currentRedPosition >= this.currentGreenPosition)) {
            CoreLib.EventHandler.dispatchEvent("PLAY_RED_CROSS_GREEN_SOUND");
            setTimeout(() => {
                CoreLib.EventHandler.dispatchEvent("SHOW_RED_CROSS_GREEN_SCREEN")
            }, 1000);
        }
        if ((this.currentGreenPosition - this.currentRedPosition) == 1) {
            CoreLib.EventHandler.dispatchEvent("PLAY_REDJOCKEY_NEAR_GREENJOCKEY_SOUND");
            setTimeout(() => {
                CoreLib.EventHandler.dispatchEvent("STOP_NEAR_SOUND");
            }, 800);
        }
        if (this.currentRedPosition < this.nextRedPosition && this.currentRedPosition != this.currentGreenPosition) {
            const position = spinePoints[this.currentRedPosition];
            if (CoreLib.Model.DeviceConfig.isDevice) {
                if (CoreLib.Model.DeviceConfig.isPortrait) {
                    CoreLib.AnimationManager.animateTween(this.redJockey, jumpDuration, { x: position.px, y: position.py, scaleX: position.pScaleX, onComplete: this.redHopAnimate.bind(this, data) });
                } else {
                    CoreLib.AnimationManager.animateTween(this.redJockey, jumpDuration, { x: position.lx, y: position.ly, scaleX: position.lScaleX, onComplete: this.redHopAnimate.bind(this, data) });
                }
            } else {
                CoreLib.AnimationManager.animateTween(this.redJockey, jumpDuration, { x: position.x, y: position.y, scaleX: position.scaleX, onComplete: this.redHopAnimate.bind(this, data) });
            }
            this.currentRedPosition++;
        } else {
            setTimeout(() => {
                this.diceRotatingComp.hideRedManDice(data);
            }, 1500);
        }
    }

    redManSleepAnim() {
        this.redJockey.playAnimation("red_man_sleep", true);
        CoreLib.EventHandler.dispatchEvent("PLAY_RED_SNORING_SOUND");
    }

    onElementsUpgraded(data) {
        if (data.level == 2) {
            this.level2Upgraded = true;
        } else if (data.level == 3) {
            this.level3Upgraded = true;
        }
        if (this.currentGreenPosition < this.nextGreenPosition) {
            this.greenHopAnimate(data);
        } else {
            this.redHopAnimate(data);
        }
    }

    showBigMoneyMultiplierAnimation() {
        this.bigWinTriggeredAnim.visible = true;
        this.confettiParticle.playAnimation();
        this.bigWinTriggeredAnim.playAnimation("start", false);
        setTimeout(() => {
            CoreLib.EventHandler.dispatchEvent("PLAY_BIG_MONEY_TRIGGERED_ANIM_SOUND");
            this.bigWinTriggeredAnim.playAnimation("idle", true);
        }, 1000);
        setTimeout(() => {
            this.stopBigMoneyMultiplierAnimation();
        }, 3000);
    }

    stopBigMoneyMultiplierAnimation() {
        this.bigWinTriggeredAnim.playAnimation("stop", false);
        setTimeout(() => {
            this.confettiParticle.stopAnimation();
            CoreLib.EventHandler.dispatchEvent("SHOW_POST_MEGABOARD_SCREEN");
        }, 1000);
    }

    setJockyesToStartPos() {
        this.isJockeyMovementStarted = false;
    }

    resizeViewComponents() {
        super.resizeViewComponents();
        this.resizeChildren();
        CoreLib.UIUtil.adjustAllChildren(this.jockeyContainer);
        CoreLib.UIUtil.adjustAllChildren(this.diceRotatingComp);
        CoreLib.UIUtil.adjustElement(this.levelHighlightElementsGuideRect);
        CoreLib.UIUtil.setPositionBasedOnDevice(this.levelHighlightElementsGuideRect);
        CoreLib.UIUtil.setPositionBasedOnDevice(this.levelHighlightElements);
        CoreLib.UIUtil.adjustElement(this.greenJockey);
        CoreLib.UIUtil.setPositionBasedOnDevice(this.greenJockey);
        CoreLib.UIUtil.adjustElement(this.redJockey);
        CoreLib.UIUtil.setPositionBasedOnDevice(this.redJockey);

        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.confettiParticle.scale.set(3);
                this.confettiParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
                this.confettiParticle.y = 0;
                this.coinParticle.scale.set(2);
                this.coinParticle.x = 970;
                this.coinParticle.y = 1650;
            } else {
                this.confettiParticle.scale.set(2);
                this.confettiParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
                this.confettiParticle.y = 0;
                this.coinParticle.scale.set(1);
                this.coinParticle.x = 1280;
                this.coinParticle.y = 1440;
            }
        } else {
            this.confettiParticle.scale.set(1);
            this.confettiParticle.x = CoreLib.UIUtil.getGameWidth() * 0.5;
            this.confettiParticle.y = 0;
            this.coinParticle.scale.set(1);
            this.coinParticle.x = 1280;
            this.coinParticle.y = 1440;
        }

        if (this.currentGreenPosition != undefined && CoreLib.Model.GameConfig.featureTypes.freespins) {
            if (this.isJockeyMovementStarted == true) {
                const greenJockeyPosition = spinePoints[this.currentGreenPosition - 1];
                if (CoreLib.Model.DeviceConfig.isDevice) {
                    if (CoreLib.Model.DeviceConfig.isPortrait) {
                        this.greenJockey.x = greenJockeyPosition.px;
                        this.greenJockey.y = greenJockeyPosition.py;
                        this.greenJockey.scale.x = greenJockeyPosition.pScaleX;
                    } else {
                        this.greenJockey.x = greenJockeyPosition.lx;
                        this.greenJockey.y = greenJockeyPosition.ly;
                        this.greenJockey.scale.x = greenJockeyPosition.lScaleX;
                    }
                } else {
                    this.greenJockey.x = greenJockeyPosition.x;
                    this.greenJockey.y = greenJockeyPosition.y;
                    this.greenJockey.scale.x = greenJockeyPosition.scaleX;
                }
            }
        }

        if (this.currentRedPosition != undefined && CoreLib.Model.GameConfig.featureTypes.freespins) {
            if (this.isJockeyMovementStarted == true) {
                if (this.currentRedPosition > 0) {
                    const redJockeyPosition = spinePoints[this.currentRedPosition - 1];
                    if (CoreLib.Model.DeviceConfig.isDevice) {
                        if (CoreLib.Model.DeviceConfig.isPortrait) {
                            this.redJockey.x = redJockeyPosition.px;
                            this.redJockey.y = redJockeyPosition.py;
                            this.redJockey.scale.x = redJockeyPosition.pScaleX;
                        } else {
                            this.redJockey.x = redJockeyPosition.lx;
                            this.redJockey.y = redJockeyPosition.ly;
                            this.redJockey.scale.x = redJockeyPosition.lScaleX;
                        }
                    } else {
                        this.redJockey.x = redJockeyPosition.x;
                        this.redJockey.y = redJockeyPosition.y;
                        this.redJockey.scale.x = redJockeyPosition.scaleX;
                    }
                }
            }
        }


    }
}