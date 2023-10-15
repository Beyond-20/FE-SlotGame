import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";
import { LibView } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView";

let level1Sprites = ["1xBet_1", "5WildAdded_1", "5MysteryAdded_1", "clubRemoved", "2xBet_1", "10MysteryAdded_1", "10WildAdded_1", "1xBet_2", "5MysteryAdded_2", "2xBet_2", "allReelWinsx2", "5WildAdded_2", "1xBet_3", "10MysteryAdded_2", "2xBet_3", "daimondRemoved", "10WildAdded_2", "winSpin_1"];
let level2Sprites = ["2xBet_4", "10WildAdded_3", "10MysteryAdded_3", "spadeRemoved", "5xBet_1", "20MysteryAdded_1", "20WildAdded_1", "2xBet_5", "10MysteryAdded_4", "5xBet_2", "allReelWinsx3", "10WildAdded_4", "2xBet_6", "20MysteryAdded_2", "5xBet_3", "heartRemoved", "20WildAdded_2", "winSpin_2"];
let level3Sprites = ["5xBet_4", "20WildAdded_3", "20MysteryAdded_3", "beerRemoved", "10xBet_1", "50MysteryAdded_1", "50WildAdded_1", "5xBet_5", "20MysteryAdded_4", "10xBet_2", "allReelWinsx5", "20WildAdded_4", "5xBet_6", "50MysteryAdded_2", "10xBet_3", "capRemoved", "50WildAdded_2", "bigWin"];

export class BonusGameBottom extends LibView {
    constructor(config) {
        super(config);
        this.bonusReelFrame = this.elementsList["bonusReelFrame"];

        this.level1Elements = this.elementsList["level1Elements"];
        this.level1Elements.visible = true;
        this.level2Elements = this.elementsList["level2Elements"];
        this.level2Elements.visible = false;
        this.level3Elements = this.elementsList["level3Elements"];
        this.level3Elements.visible = false;

        this.greenParticleAnimation = this.elementsList["greenParticleAnimation"];
        this.greenParticleAnimation.visible = false;
        this.greenParticleAnimation.scale.set(2);

        this.lapLevel = this.elementsList["lapLevel"];
        this.lapLevel1 = this.lapLevel.elementsList["lapLevel1"];
        this.lapLevel1.visible = true;
        this.lapLevel2 = this.lapLevel.elementsList["lapLevel2"];
        this.lapLevel2.visible = false;
        this.lapLevel3 = this.lapLevel.elementsList["lapLevel3"];
        this.lapLevel3.visible = false;

        this.guideRect = this.elementsList["guideRect"];

        CoreLib.EventHandler.addEventListener("SHOW_FIRST_LAP_LEVEL", this.firstLapLevel.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_UPGRADING_NEXT_LEVEL_ELEMENTS", this.upgradingNextLevelElements.bind(this));
    }

    reset() {
        this.appearingIndex = 0;
        this.lapLevel1.visible = true;
        this.lapLevel2.visible = false;
        this.lapLevel3.visible = false;
        this.greenParticleAnimation.visible = false;
        for (let p in level1Sprites) {
            this.level1Elements.elementsList[level1Sprites[p]].alpha = 1;
        }
        this.level1Elements.visible = true;
        this.level2Elements.visible = false;
        this.level3Elements.visible = false;

    }

    showFirstLevelElements() {
        this.level1Elements.visible = true;
        for (let p in level1Sprites) {
            this.level1Elements.elementsList[level1Sprites[p]].alpha = 1;
            this.level2Elements.elementsList[level2Sprites[p]].alpha = 0;
            this.level3Elements.elementsList[level3Sprites[p]].alpha = 0;
        }
        this.lapLevel1.visible = true;
        this.lapLevel2.visible = false;
        this.lapLevel3.visible = false;
        setTimeout(() => {
            CoreLib.EventHandler.dispatchEvent("HIDE_MINI_POPUP")
        }, 2000);
    }

    showUnfinishedSecondLevelElements() {
        this.level2Elements.visible = true;
        for (let p in level2Sprites) {
            this.level1Elements.elementsList[level1Sprites[p]].alpha = 0;
            this.level2Elements.elementsList[level2Sprites[p]].alpha = 1;
            this.level3Elements.elementsList[level3Sprites[p]].alpha = 0;
        }
        this.lapLevel2.visible = true;
        this.lapLevel1.visible = false;
        this.lapLevel3.visible = false;
        setTimeout(() => {
            CoreLib.EventHandler.dispatchEvent("HIDE_MINI_POPUP")
        }, 2000);
    }

    showUnfinishedThirdLevelElements() {
        this.level3Elements.visible = true;
        for (let p in level3Sprites) {
            this.level1Elements.elementsList[level1Sprites[p]].alpha = 0;
            this.level2Elements.elementsList[level2Sprites[p]].alpha = 0;
            this.level3Elements.elementsList[level3Sprites[p]].alpha = 1;
        }
        this.lapLevel3.visible = true;
        this.lapLevel1.visible = false;
        this.lapLevel2.visible = false;
        setTimeout(() => {
            CoreLib.EventHandler.dispatchEvent("HIDE_MINI_POPUP")
        }, 2000);
    }

    firstLapLevel(data) {
        if (data.level == 1) {
            this.lapLevel1.visible = true;
        }
    }

    upgradingNextLevelElements(level) {
        this.lapLevel1.visible = false;
        if (level == 2) {
            this.lapLevel2.visible = true;
            this.showLevel2Elements();
        }
        if (level == 3) {
            this.lapLevel2.visible = false;
            this.lapLevel3.visible = true;
            this.showLevel3Elements();
        }
    }

    showLevel2Elements() {
        let data = slotModel.getFeatureData();
        this.greenParticleAnimation.visible = true;
        this.appearingIndex = 0;
        this.showAllSecondLevelElements();
        this.animateSecondLevelElementToAppear(data);
    }

    showAllSecondLevelElements() {
        for (const p in level2Sprites) {
            this.level2Elements.elementsList[level2Sprites[p]].alpha = 0;
            this.level2Elements.elementsList[level2Sprites[p]].visible = true;
        }
        this.level2Elements.visible = true;
    }

    animateSecondLevelElementToAppear(data) {
        
        let duration = 0.21;
        let childElem1 = this.level1Elements.elementsList[level1Sprites[this.appearingIndex]];
        let childElem2 = this.level2Elements.elementsList[level2Sprites[this.appearingIndex]];
        CoreLib.AnimationManager.animateTween(childElem1, duration, { alpha: 0 });
        childElem2.alpha = 0;
        CoreLib.AnimationManager.animateTween(childElem2, duration, { delay: duration / 2, alpha: 1, onComplete: this.showSecondLevelElements.bind(this, data) });
        this.greenParticleAnimation.x = childElem1.x + childElem1.width / 2;
        this.greenParticleAnimation.y = childElem1.y + childElem1.height / 2;
        this.greenParticleAnimation.playAnimation();
    }

    showSecondLevelElements(data) {
        if (this.appearingIndex < level1Sprites.length - 1) {
            this.appearingIndex++;
            this.animateSecondLevelElementToAppear(data);
        } else {
            this.greenParticleAnimation.stopAnimation();
            CoreLib.EventHandler.dispatchEvent("LEVEL_ELEMENTS_UPGRADED_SUCCESSFULLY", data);
        }
    }

    showLevel3Elements() {
        let data = slotModel.getFeatureData();
        this.greenParticleAnimation.visible = true;
        this.appearingIndex = 0;
        this.showAllThirdLevelElements();
        this.animateThirdLevelElementToAppear(data);
    }

    showAllThirdLevelElements() {
        for (const p in level3Sprites) {
            this.level3Elements.elementsList[level3Sprites[p]].alpha = 0;
            this.level3Elements.elementsList[level3Sprites[p]].visible = true;
        }
        this.level3Elements.visible = true;
    }

    animateThirdLevelElementToAppear(data) {
        let duration = 0.21;
        let childElem1 = this.level2Elements.elementsList[level2Sprites[this.appearingIndex]];
        let childElem2 = this.level3Elements.elementsList[level3Sprites[this.appearingIndex]];
        CoreLib.AnimationManager.animateTween(childElem1, duration, { alpha: 0 });
        childElem2.alpha = 0;
        CoreLib.AnimationManager.animateTween(childElem2, duration, { delay: duration / 2, alpha: 1, onComplete: this.showThirdLevelElements.bind(this, data) });
        this.greenParticleAnimation.x = childElem1.x + childElem1.width / 2;
        this.greenParticleAnimation.y = childElem1.y + childElem1.height / 2;
        this.greenParticleAnimation.playAnimation();
    }

    showThirdLevelElements(data) {
        if (this.appearingIndex < level2Sprites.length - 1) {
            this.appearingIndex++;
            this.animateThirdLevelElementToAppear(data);
        } else {
            this.greenParticleAnimation.stopAnimation();
            CoreLib.EventHandler.dispatchEvent("LEVEL_ELEMENTS_UPGRADED_SUCCESSFULLY", data);
        }
    }

    resizeViewComponents() {
        super.resizeViewComponents();
        this.resizeChildren();
        CoreLib.UIUtil.adjustElement(this.guideRect);
        CoreLib.UIUtil.adjustWidthHeightForMobile(this.guideRect);
        CoreLib.UIUtil.positionObjectForDevice(this.guideRect);
        CoreLib.UIUtil.adjustElement(this.bonusReelFrame);
        CoreLib.UIUtil.adjustAllChildren(this.level1Elements);
        CoreLib.UIUtil.adjustAllChildren(this.level2Elements);
        CoreLib.UIUtil.adjustAllChildren(this.level3Elements);
        CoreLib.UIUtil.adjustElement(this.lapLevel);
        CoreLib.UIUtil.adjustElement(this.lapLevel);

    }


}