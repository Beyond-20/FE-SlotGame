import {SlotGameBonusComp} from "../../../../../../../../slot_core/corelib/views/containers/SlotGameBonusComp";
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib";
import {slotModel} from "../../../../../../../../slot_core/corelib/models/SlotModel";

export class BonusGame extends SlotGameBonusComp {
    constructor(config) {
        super(config);
        this.bonusContainer = this.elementsList["bonusContainer"];
        if (this.bonusContainer) {
            this.guideRect = this.bonusContainer.elementsList["guideRect"];
            if (this.guideRect) {
                this.guideRect.renderable = false;
            }
            this.animbackbg = this.bonusContainer.elementsList["animbackbg"];
            this.animbackbg.visible = false;
            this.coverBG = this.bonusContainer.elementsList["coverBG"];
            this.coverBG.visible = false;
            this.leftdoor = this.bonusContainer.elementsList["leftdoor"];
            this.rightdoor = this.bonusContainer.elementsList["rightdoor"];
            this.leftdoor2 = this.bonusContainer.elementsList["leftdoor2"];
            this.rightdoor2 = this.bonusContainer.elementsList["rightdoor2"];
            this.leftdoor2.visible = false;
            this.rightdoor2.visible = false;
            this.anim = this.bonusContainer.elementsList["anim"];
            this.spark = this.bonusContainer.elementsList["spark"];
            this.anim.visible = false;
            this.spark.visible = false;
            this.animback = this.bonusContainer.elementsList["animback"];
            this.animback.visible = false;
            this.anim.stopAnimation();
            this.spark.stopAnimation();
            this.animback.stopAnimation();
            this.anim.addEventListener("complete", this.onCharAnimComplated.bind(this));
            this.spark.onComplete = this.onSparkComplete.bind(this);
        }

        CoreLib.EventHandler.addEventListener("SHOW_FREE_SPINEXIT_FAFAFA", this.exitBonusGame.bind(this));




    }
    onSparkComplete () {
        this.spark.visible = false;
    }
    exitBonusGame () {
        this.visible = true;
        this.leftdoor2.visible = true;
        this.rightdoor2.visible = true;
        CoreLib.AnimationManager.animateTween(this.leftdoor2, 1.25, {x : 0, ease : Power2.easeOut});
        CoreLib.AnimationManager.animateTween(this.rightdoor2, 1.25, {x : 2560, ease : Power2.easeOut, onComplete : this.onExitDoorClosedEntry.bind(this)});
    }
    onExitDoorClosedEntry () {
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_MAINGAME_BG);
        setTimeout(this.openDoorForExitToMG.bind(this), 1000);
    }
    openDoorForExitToMG () {
        CoreLib.AnimationManager.animateTween(this.leftdoor2, 1.25, {x : -1280, ease : Power2.easeOut});
        CoreLib.AnimationManager.animateTween(this.rightdoor2, 1.25, {x : 3840, ease : Power2.easeOut, onComplete : this.onDoorOpenAfterExitToMG.bind(this)});
    }
    onDoorOpenAfterExitToMG () {
        CoreLib.EventHandler.dispatchEvent("BONUS_GAME_FULL_EXIT");
    }
    initiateBonusGame () {
        this.visible = true;
        this.animback.visible = false;
        this.animbackbg.visible = false;
        CoreLib.AnimationManager.animateTween(this.leftdoor, 1.25, {x : 0, ease : Power2.easeOut});
        CoreLib.AnimationManager.animateTween(this.rightdoor, 1.25, {x : 2560, ease : Power2.easeOut, onComplete : this.onDoorClosedEntry.bind(this)});
        CoreLib.EventHandler.dispatchEvent("PLAY_FS_FIRST_DOOR_OPEN");

    }
    onDoorClosedEntry () {
        setTimeout(this.openClosedDoorAfterEntry.bind(this), 500);
    }
    openClosedDoorAfterEntry () {
        this.anim.visible = true;
        this.spark.visible = true;
        this.animbackbg.visible = true;
        this.animback.visible = true;
        //if (CoreLib.Model.DeviceConfig.isDevice) {
        this.animback.playAnimation("animation", true);
        //}
        this.spark.gotoAndPlay(0);
        setTimeout(this.openDoor.bind(this), 50);
    }
    openDoor () {
        CoreLib.EventHandler.dispatchEvent("PLAY_FS_CHAR_ANIM_SOUND");
        CoreLib.AnimationManager.animateTween(this.leftdoor, 1.25, {x : -1280, ease : Power2.easeOut});
        CoreLib.AnimationManager.animateTween(this.rightdoor, 1.25, {x : 3840, ease : Power2.easeOut, onComplete : this.onDoorOpenAfterEntry.bind(this)});
    }
    onDoorOpenAfterEntry () {
        setTimeout(this.playCharAnim.bind(this), 0);
    }
    playCharAnim () {
        this.anim.playAnimation("animation", false);
    }

    onCharAnimComplated (evt) {
        this.coverBG.alpha = 0;
        this.coverBG.visible = true;
        CoreLib.AnimationManager.animateTween(this.coverBG, 0.4, {alpha : 1, ease : Power2.easeIn, onComplete : this.onWhiteCoverAppeared.bind(this)});
        // CoreLib.AnimationManager.animateTween(this.leftdoor, 1.25, {x : 0, ease : Power2.easeOut});
        // CoreLib.AnimationManager.animateTween(this.rightdoor, 1.25, {x : 2560, ease : Power2.easeOut, onComplete : this.onDoorClosedExit.bind(this)});
    }
    onWhiteCoverAppeared () {
        this.animbackbg.visible = false;
        setTimeout(this.onDoorClosedExit.bind(this), 250);
    }

    onDoorClosedExit () {
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.REPLACE_REEL_SYMBOLS, "WDF");
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_HIDE_SLOT_SYMBOLS, true);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_FREEGAME_BG, true);
        this.cleanUp();
        CoreLib.AnimationManager.animateTween(this.coverBG, 0.4, {alpha : 0, ease : Power2.easeOut, onComplete : this.onWhiteCoverDisappeared.bind(this)});
        // CoreLib.AnimationManager.animateTween(this.leftdoor, 1.25, {delay : 0.2, x : -1280, ease : Power2.easeOut});
        // CoreLib.AnimationManager.animateTween(this.rightdoor, 1.25, {delay : 0.2, x : 3840, ease : Power2.easeOut, onComplete : this.onDoorOpenAfterExit.bind(this)});
    }
    onWhiteCoverDisappeared () {
        this.coverBG.visible = false;
        this.onDoorOpenAfterExit();
    }
    onDoorOpenAfterExit () {
        CoreLib.EventHandler.dispatchEvent("BONUS_TRANSITIONS_COMPLETED");
        this.visible = false;
        this.isActive = false;
        CoreLib.Model.GameConfig.isBonusVisible = true;
    }

    cleanUp () {
        this.anim.visible = false;
        this.spark.visible = false;
        this.animback.visible = false;
        this.animback.stopAnimation();
    }

    resizeViewComponents () {
        super.resizeViewComponents();
        this.bonusContainer.scale.set(1);
        let hsc = CoreLib.UIUtil.getGameHeight() / this.bonusContainer.getHeight();
        let sc = CoreLib.UIUtil.getGameWidth() / this.bonusContainer.getWidth();
        this.bonusContainer.scale.set(Math.max(sc, hsc));
        CoreLib.UIUtil.setPosition(this.bonusContainer, (CoreLib.UIUtil.getGameWidth() - this.bonusContainer.getWidth()) / 2, (CoreLib.UIUtil.getGameHeight() - this.bonusContainer.getHeight()) / 2);

        if (CoreLib.Model.DeviceConfig.isDesktop) {

        } else {
            this.anim.scale.set(1);
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                let scale = (CoreLib.UIUtil.getGameWidth() * 0.65) / this.anim.width;
                this.anim.scale.set(scale);
                this.animback.scale.set(1);
                scale = (CoreLib.UIUtil.getGameHeight() * 0.70) / this.animback.height;
                this.animback.scale.set(scale);
            } else {

            }
        }
    }

};
