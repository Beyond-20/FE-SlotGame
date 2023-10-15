import { SlotGameBonusComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotGameBonusComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";
import { UIUtil } from "../../../../../../../../slot_core/corelib/pixiwrapper/UIUtilService";
import { LibParticleComp } from "../../../../../../../../slot_core/corelib/views/comps/LibParticleComp";
import { PARTICLE_CONFIG } from "../../config/views/ParticleConfig";

const spinePoints = [
    //level1
    { x: 2700, y: 2000, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 1030, lx: 2700, ly: 2000 },
    { x: 2100, y: 2000, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 1500, lx: 2100, ly: 2000 },
    { x: 1500, y: 2000, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 2000, lx: 1500, ly: 2000 },
    { x: 900, y: 2000, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 2500, lx: 900, ly: 2000 },
    { x: 500, y: 1700, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2200, py: 2800, lx: 500, ly: 1700 },
    { x: 450, y: 1250, scaleX: -1, pScaleX: 1, lScaleX: -1, px: 1700, py: 2900, lx: 450, ly: 1250 },
    { x: 550, y: 800, scaleX: -1, pScaleX: 1, lScaleX: -1, px: 1300, py: 2900, lx: 550, ly: 800 },
    { x: 700, y: 500, scaleX: -1, pScaleX: 1, lScaleX: -1, px: 750, py: 2800, lx: 700, ly: 500 },
    { x: 1100, y: 240, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 500, py: 2500, lx: 1100, ly: 240 },
    { x: 1600, y: 180, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 450, py: 2000, lx: 1600, ly: 180 },
    { x: 2100, y: 180, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 450, py: 1500, lx: 2100, ly: 180 },
    { x: 2650, y: 180, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 450, py: 1000, lx: 2650, ly: 180 },
    { x: 3150, y: 190, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 500, py: 550, lx: 3150, ly: 190 },
    { x: 3550, y: 400, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 1000, py: 200, lx: 3550, ly: 400 },
    { x: 3690, y: 800, scaleX: 1, pScaleX: -1, lScaleX: 1, px: 1500, py: 200, lx: 3690, ly: 800 },
    { x: 3700, y: 1150, scaleX: 1, pScaleX: -1, lScaleX: 1, px: 1900, py: 200, lx: 3700, ly: 1150 },
    { x: 3700, y: 1550, scaleX: 1, pScaleX: -1, lScaleX: 1, px: 2400, py: 200, lx: 3700, ly: 1550 },
    { x: 3300, y: 1900, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2650, py: 500, lx: 3300, ly: 1900 },
    //level2
    { x: 2700, y: 2000, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 1030, lx: 2700, ly: 2000 },
    { x: 2100, y: 2000, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 1500, lx: 2100, ly: 2000 },
    { x: 1500, y: 2000, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 2000, lx: 1500, ly: 2000 },
    { x: 900, y: 2000, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 2500, lx: 900, ly: 2000 },
    { x: 500, y: 1700, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2200, py: 2800, lx: 500, ly: 1700 },
    { x: 450, y: 1250, scaleX: -1, pScaleX: 1, lScaleX: -1, px: 1700, py: 2900, lx: 450, ly: 1250 },
    { x: 550, y: 800, scaleX: -1, pScaleX: 1, lScaleX: -1, px: 1300, py: 2900, lx: 550, ly: 800 },
    { x: 700, y: 500, scaleX: -1, pScaleX: 1, lScaleX: -1, px: 750, py: 2800, lx: 700, ly: 500 },
    { x: 1100, y: 240, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 500, py: 2500, lx: 1100, ly: 240 },
    { x: 1600, y: 180, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 450, py: 2000, lx: 1600, ly: 180 },
    { x: 2100, y: 180, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 450, py: 1500, lx: 2100, ly: 180 },
    { x: 2650, y: 180, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 450, py: 1000, lx: 2650, ly: 180 },
    { x: 3150, y: 190, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 500, py: 550, lx: 3150, ly: 190 },
    { x: 3550, y: 400, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 1000, py: 200, lx: 3550, ly: 400 },
    { x: 3690, y: 800, scaleX: 1, pScaleX: -1, lScaleX: 1, px: 1500, py: 200, lx: 3690, ly: 800 },
    { x: 3700, y: 1150, scaleX: 1, pScaleX: -1, lScaleX: 1, px: 1900, py: 200, lx: 3700, ly: 1150 },
    { x: 3700, y: 1550, scaleX: 1, pScaleX: -1, lScaleX: 1, px: 2400, py: 200, lx: 3700, ly: 1550 },
    { x: 3300, y: 1900, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2650, py: 500, lx: 3300, ly: 1900 },
    //level3
    { x: 2700, y: 2000, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 1030, lx: 2700, ly: 2000 },
    { x: 2100, y: 2000, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 1500, lx: 2100, ly: 2000 },
    { x: 1500, y: 2000, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 2000, lx: 1500, ly: 2000 },
    { x: 900, y: 2000, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2700, py: 2500, lx: 900, ly: 2000 },
    { x: 500, y: 1700, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2200, py: 2800, lx: 500, ly: 1700 },
    { x: 450, y: 1250, scaleX: -1, pScaleX: 1, lScaleX: -1, px: 1700, py: 2900, lx: 450, ly: 1250 },
    { x: 550, y: 800, scaleX: -1, pScaleX: 1, lScaleX: -1, px: 1300, py: 2900, lx: 550, ly: 800 },
    { x: 700, y: 500, scaleX: -1, pScaleX: 1, lScaleX: -1, px: 750, py: 2800, lx: 700, ly: 500 },
    { x: 1100, y: 240, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 500, py: 2500, lx: 1100, ly: 240 },
    { x: 1600, y: 180, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 450, py: 2000, lx: 1600, ly: 180 },
    { x: 2100, y: 180, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 450, py: 1500, lx: 2100, ly: 180 },
    { x: 2650, y: 180, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 450, py: 1000, lx: 2650, ly: 180 },
    { x: 3150, y: 190, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 500, py: 550, lx: 3150, ly: 190 },
    { x: 3550, y: 400, scaleX: -1, pScaleX: -1, lScaleX: -1, px: 1000, py: 200, lx: 3550, ly: 400 },
    { x: 3690, y: 800, scaleX: 1, pScaleX: -1, lScaleX: 1, px: 1500, py: 200, lx: 3690, ly: 800 },
    { x: 3700, y: 1150, scaleX: 1, pScaleX: -1, lScaleX: 1, px: 1900, py: 200, lx: 3700, ly: 1150 },
    { x: 3700, y: 1550, scaleX: 1, pScaleX: -1, lScaleX: 1, px: 2400, py: 200, lx: 3700, ly: 1550 },
    { x: 3300, y: 1900, scaleX: 1, pScaleX: 1, lScaleX: 1, px: 2650, py: 500, lx: 3300, ly: 1900 }
];

export class BonusGameTop extends SlotGameBonusComp {
    constructor(config) {
        super(config);
        this.monopolyContainer = this.elementsList["monopolyContainer"];
        this.manInCar = this.monopolyContainer.elementsList["manInCar"];
        this.boyOnDuck = this.monopolyContainer.elementsList["boyOnDuck"];
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


        CoreLib.EventHandler.addEventListener("SHOW_MONOPOLY_MAN_ICON_ANIMATION", this.showManInCarIconAnimation.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_BOY_ON_DUCK_ICON_ANIMATION", this.showManOnDuckIconAnimation.bind(this));

        CoreLib.EventHandler.addEventListener("STOP_MONOPOLY_MAN_IN_CAR_ANIMATION", this.stopManInCarAnim.bind(this));
        CoreLib.EventHandler.addEventListener("STOP_MAN_ON_DUCK", this.stopBoyonDuckAnim.bind(this));

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
        CoreLib.EventHandler.addEventListener("SHOW_BOY_CROSS_MONOPOLY_MAN_SCREEN", this.setJockyesToStartPos.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_POST_MEGABOARD_SCREEN", this.setJockyesToStartPos.bind(this));
        CoreLib.EventHandler.addEventListener("HIDE_MINI_POPUP", this.hideMiniPopup.bind(this));

    }

    initiateView() {
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.manInCar.x = 2700;
                this.manInCar.y = 630;
                this.manInCar.scale.x = 1;
                this.boyOnDuck.x = 2600;
                this.boyOnDuck.y = 550;
                this.boyOnDuck.scale.x = 1;
            } else {
                this.boyOnDuck.x = 3380;
                this.boyOnDuck.y = 1930;
                this.boyOnDuck.scale.x = 1;
                this.manInCar.x = 3200;
                this.manInCar.y = 1900;
                this.manInCar.scale.x = 1;
            }
        } else {
            this.boyOnDuck.x = 3380;
            this.boyOnDuck.y = 1930;
            this.boyOnDuck.scale.x = 1;
            this.manInCar.x = 3200;
            this.manInCar.y = 1900;
            this.manInCar.scale.x = 1;
        }
    }

    reset() {
        this.currentGreenManPosition = 0;
        this.currentRedManPosition = 0;
        this.currentGreenPosition = 0;
        this.nextGreenPosition = 0;
        this.currentRedPosition = 0;
        this.nextRedPosition = 0;
        this.stopManInCarAnim();
        this.stopBoyonDuckAnim();
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
                    this.manInCar.x = greenManPosition.px;
                    this.manInCar.y = greenManPosition.py;
                    this.manInCar.scale.x = greenManPosition.pScaleX;
                } else {
                    this.manInCar.x = greenManPosition.lx;
                    this.manInCar.y = greenManPosition.ly;
                    this.manInCar.scale.x = greenManPosition.lScaleX;
                }
            } else {
                this.manInCar.x = greenManPosition.x;
                this.manInCar.y = greenManPosition.y;
                this.manInCar.scale.x = greenManPosition.scaleX;
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
                    this.boyOnDuck.x = redManPosition.px;
                    this.boyOnDuck.y = redManPosition.py;
                    this.boyOnDuck.scale.x = redManPosition.pScaleX;
                } else {
                    this.boyOnDuck.x = redManPosition.lx;
                    this.boyOnDuck.y = redManPosition.ly;
                    this.boyOnDuck.scale.x = redManPosition.lScaleX;
                }
            } else {
                this.boyOnDuck.x = redManPosition.x;
                this.boyOnDuck.y = redManPosition.y;
                this.boyOnDuck.scale.x = redManPosition.scaleX;
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

    showManInCarIconAnimation(data) {
        this.nextGreenPosition = data.totalNumberOfHopsByGreen;
        setTimeout(() => {
            this.manInCarAnimate(data);
        }, 1600);
    }

    manInCarAnimate(data) {
        this.manInCar.playAnimation("car", true);
        CoreLib.EventHandler.dispatchEvent("PLAY_MAN_IN_CAR_SOUND");
        if (this.currentGreenPosition == this.nextGreenPosition) {
            this.isJockeyMovementStarted = true;
            if (this.currentGreenPosition == 18 && this.nextGreenPosition == 18) {
                if (this.level2Upgraded) {
                    CoreLib.EventHandler.dispatchEvent("SHOW_YELLOW_DICE_ANIMATION", data);
                }
            }
            if (this.currentGreenPosition == 36 && this.nextGreenPosition == 36) {
                if (this.level3Upgraded) {
                    CoreLib.EventHandler.dispatchEvent("SHOW_YELLOW_DICE_ANIMATION", data);
                }
            }
            if (this.currentGreenPosition == 54 && this.nextGreenPosition == 54) {
            }
            setTimeout(() => {
                this.diceRotatingComp.hidePurpleManDice(data);
            }, 500);
        } else {
            this.isJockeyMovementStarted = true;
            if (this.currentGreenPosition >= 0 && this.currentGreenPosition < 18) {
                this.moveManInCar(data);
            } else if (this.currentGreenPosition == 18) {
                if (this.level2Upgraded) {
                    this.moveManInCar(data);
                } else {
                    this.diceRotatingComp.hidePurpleDice(data);
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
                this.moveManInCar(data);
            } else if (this.currentGreenPosition == 36) {
                if (this.level3Upgraded) {
                    this.moveManInCar(data);
                } else {
                    this.diceRotatingComp.hidePurpleDice(data);
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
                this.moveManInCar(data);
            } else if (this.currentGreenPosition >= 54) {
                CoreLib.EventHandler.dispatchEvent("PLAY_BIG_MONEY_TROPHY_HEIGHTLIGHT_SOUND");
                this.diceRotatingComp.hidePurpleDice(data);
            }
        }
    }

    moveManInCar(data) {
        let jumpDuration = 0.5;
        this.isJockeyMovementStarted = true;
        const position = spinePoints[this.currentGreenPosition];
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                CoreLib.AnimationManager.animateTween(this.manInCar, jumpDuration, {
                    x: position.px,
                    y: position.py,
                    scaleX: position.pScaleX,
                    onComplete: this.manInCarAnimate.bind(this, data)
                });
            } else {
                CoreLib.AnimationManager.animateTween(this.manInCar, jumpDuration, {
                    x: position.lx,
                    y: position.ly,
                    scaleX: position.lScaleX,
                    onComplete: this.manInCarAnimate.bind(this, data)
                });
            }
        } else {
            CoreLib.AnimationManager.animateTween(this.manInCar, jumpDuration, {
                x: position.x,
                y: position.y,
                scaleX: position.scaleX,
                onComplete: this.manInCarAnimate.bind(this, data)
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

    stopManInCarAnim() {
        this.manInCar.stopAnimation();
        CoreLib.EventHandler.dispatchEvent("STOP_MAN_IN_CAR_SOUND");
    }

    showManOnDuckIconAnimation(data) {
        this.nextRedPosition = data.totalNumberOfHopsByRed;
        CoreLib.EventHandler.dispatchEvent("PLAY_RED_JUMP_TO_MOVE_SOUND");
        setTimeout(() => {
            this.boyOnDuckAnimate(data);
        }, 1600);
    }

    boyOnDuckAnimate(data) {
        let jumpDuration = 0.5;
        this.isJockeyMovementStarted = true;
        this.boyOnDuck.playAnimation("animation", true);
        CoreLib.EventHandler.dispatchEvent("PLAY_RED_RIDE_GENERAL_GAME_SOUND");
        if ((this.currentRedPosition >= this.currentGreenPosition)) {
            CoreLib.EventHandler.dispatchEvent("PLAY_RED_CROSS_GREEN_SOUND");
            setTimeout(() => {
                CoreLib.EventHandler.dispatchEvent("SHOW_BOY_CROSS_MONOPOLY_MAN_SCREEN")
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
                    CoreLib.AnimationManager.animateTween(this.boyOnDuck, jumpDuration, { x: position.px, y: position.py, scaleX: position.pScaleX, onComplete: this.boyOnDuckAnimate.bind(this, data) });
                } else {
                    CoreLib.AnimationManager.animateTween(this.boyOnDuck, jumpDuration, { x: position.lx, y: position.ly, scaleX: position.lScaleX, onComplete: this.boyOnDuckAnimate.bind(this, data) });
                }
            } else {
                CoreLib.AnimationManager.animateTween(this.boyOnDuck, jumpDuration, { x: position.x, y: position.y, scaleX: position.scaleX, onComplete: this.boyOnDuckAnimate.bind(this, data) });
            }
            this.currentRedPosition++;
        } else {
            setTimeout(() => {
                this.diceRotatingComp.hideYellowManDice(data);
            }, 1500);
        }
    }

    stopBoyonDuckAnim() {
        this.boyOnDuck.stopAnimation();
    }

    onElementsUpgraded(data) {
        if (data.level == 2) {
            this.level2Upgraded = true;
        } else if (data.level == 3) {
            this.level3Upgraded = true;
        }
        if (this.currentGreenPosition < this.nextGreenPosition) {
            this.manInCarAnimate(data);
        } else {
            this.boyOnDuckAnimate(data);
        }
    }

    showBigMoneyMultiplierAnimation() {
        this.bigWinTriggeredAnim.visible = true;
        this.confettiParticle.playAnimation();
        this.bigWinTriggeredAnim.playAnimation("bm_start", false);
        setTimeout(() => {
            CoreLib.EventHandler.dispatchEvent("PLAY_BIG_MONEY_TRIGGERED_ANIM_SOUND");
            this.bigWinTriggeredAnim.playAnimation("bm_idle", true);
        }, 1000);
        setTimeout(() => {
            this.stopBigMoneyMultiplierAnimation();
        }, 3000);
    }

    stopBigMoneyMultiplierAnimation() {
        this.bigWinTriggeredAnim.playAnimation("bm_end", false);
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
        CoreLib.UIUtil.adjustAllChildren(this.monopolyContainer);
        CoreLib.UIUtil.adjustAllChildren(this.diceRotatingComp);
        CoreLib.UIUtil.adjustElement(this.levelHighlightElementsGuideRect);
        CoreLib.UIUtil.setPositionBasedOnDevice(this.levelHighlightElementsGuideRect);
        CoreLib.UIUtil.setPositionBasedOnDevice(this.levelHighlightElements);
        CoreLib.UIUtil.adjustElement(this.manInCar);
        CoreLib.UIUtil.setPositionBasedOnDevice(this.manInCar);
        CoreLib.UIUtil.adjustElement(this.boyOnDuck);
        CoreLib.UIUtil.setPositionBasedOnDevice(this.boyOnDuck);

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
                const manInCarPosition = spinePoints[this.currentGreenPosition - 1];
                if (CoreLib.Model.DeviceConfig.isDevice) {
                    if (CoreLib.Model.DeviceConfig.isPortrait) {
                        this.manInCar.x = manInCarPosition.px;
                        this.manInCar.y = manInCarPosition.py;
                        this.manInCar.scale.x = manInCarPosition.pScaleX;
                    } else {
                        this.manInCar.x = manInCarPosition.lx;
                        this.manInCar.y = manInCarPosition.ly;
                        this.manInCar.scale.x = manInCarPosition.lScaleX;
                    }
                } else {
                    this.manInCar.x = manInCarPosition.x;
                    this.manInCar.y = manInCarPosition.y;
                    this.manInCar.scale.x = manInCarPosition.scaleX;
                }
            }
        }

        if (this.currentRedPosition != undefined && CoreLib.Model.GameConfig.featureTypes.freespins) {
            if (this.isJockeyMovementStarted == true) {
                if (this.currentRedPosition > 0) {
                    const boyOnDuckPosition = spinePoints[this.currentRedPosition - 1];
                    if (CoreLib.Model.DeviceConfig.isDevice) {
                        if (CoreLib.Model.DeviceConfig.isPortrait) {
                            this.boyOnDuck.x = boyOnDuckPosition.px;
                            this.boyOnDuck.y = boyOnDuckPosition.py;
                            this.boyOnDuck.scale.x = boyOnDuckPosition.pScaleX;
                        } else {
                            this.boyOnDuck.x = boyOnDuckPosition.lx;
                            this.boyOnDuck.y = boyOnDuckPosition.ly;
                            this.boyOnDuck.scale.x = boyOnDuckPosition.lScaleX;
                        }
                    } else {
                        this.boyOnDuck.x = boyOnDuckPosition.x;
                        this.boyOnDuck.y = boyOnDuckPosition.y;
                        this.boyOnDuck.scale.x = boyOnDuckPosition.scaleX;
                    }
                }
            }
        }


    }
}