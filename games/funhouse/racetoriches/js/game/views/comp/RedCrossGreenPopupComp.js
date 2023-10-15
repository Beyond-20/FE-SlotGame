import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { LibView } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";

export class RedCrossGreenPopupComp extends LibView {
    constructor(config, layoutconfig) {
        super(config, layoutconfig);
        this.bg = this.elementsList["bg"];
        CoreLib.UIUtil.setModalState(this.bg, true);
        this.redCrossGreenElements = this.elementsList["redCrossGreenElements"];
        this.guideRect = this.redCrossGreenElements.elementsList["guideRect"];
        this.congratTxt = this.redCrossGreenElements.elementsList["congratTxt"];
        this.youhavewonText = this.redCrossGreenElements.elementsList["youhavewonText"];
        this.redCrossGreenImage = this.redCrossGreenElements.elementsList["redCrossGreenImage"];
        this.totalWinAmountComp = this.redCrossGreenElements.elementsList["totalWinAmountComp"];
        this.visible = false;
        this.rect = CoreLib.UIUtil.getRectangle(3500, 3500, 0x00B140);
        this.rect.x = 0;
        this.rect.y = 0;
        this.addChild(this.rect);
        this.rect.alpha = 0;
        CoreLib.UIUtil.setClickable(this.rect, false);
        CoreLib.UIUtil.addInteraction(this.rect, this.onAnyWhereClicked.bind(this));

        this.pressAnyWhereText = this.redCrossGreenElements.elementsList["pressAnyWhereText"];
        this.pressAnyWhereText.text = CoreLib.Util.getContent("pressAnyWhereText");
        this.pressAnyWhereText.visible = false;
        this.setEnabled(false);
        CoreLib.AnimationManager.animateTween(this.pressAnyWhereText, 1, { scaleX: 1.1, scaleY: 1.1, repeat: -1, yoyo: true });

        CoreLib.EventHandler.addEventListener("SHOW_RED_CROSS_GREEN_SCREEN", this.showRedCrossGreenScreen.bind(this));
    }

    showRedCrossGreenScreen() {
        this.visible = true;
        CoreLib.EventHandler.dispatchEvent("STOP_LINEWIN_SOUND");
        CoreLib.EventHandler.dispatchEvent("STOP_REEL_ANIMATION_SOUND_ON_BONUS_END");
        CoreLib.EventHandler.dispatchEvent("STOP_RED_CAUGHT_GREEN_SOUND");
        CoreLib.Model.GameConfig.noPortraitMode = true;
        CoreLib.Model.GameConfig.megaboardRunning = true;
        CoreLib.EventHandler.dispatchEvent("CHECK_NO_PORTRAIT_MOCAL");
        this.reset()
        this.updatePopup();
    }

    reset() {
        this.pressAnyWhereText.visible = true;
        CoreLib.Model.GameConfig.noPortraitMode = true;
        CoreLib.Model.GameConfig.megaboardRunning = true;
        this.setEnabled(true);
    }

    updatePopup() {
        let arr = slotModel.featureResult.featureResults;
        this.totalWinAmountComp.showText(CoreLib.WrapperService.formatCurrency(arr[0].totalWin));
    }

    setEnabled(flag) {
        CoreLib.UIUtil.setClickable(this.rect, flag);
    }

    onAnyWhereClicked() {
        this.pressAnyWhereText.visible = false;
        this.setEnabled(false);
        this.endMegaboard();
    }

    endMegaboard() {
        this.visible = false;
        CoreLib.Model.GameConfig.megaboardRunning = false;
        CoreLib.EventHandler.dispatchEvent("HIDE_MEGABOARD");
        CoreLib.EventHandler.dispatchEvent("RED_CROSSED_GREEN_POPUP_SHOWN_DONE");
    }

    resizeViewComponents() {
        super.resizeViewComponents();
        this.resizeChildren();
        CoreLib.UIUtil.adjustElement(this.bg);
        CoreLib.UIUtil.adjustElement(this.guideRect);
        CoreLib.UIUtil.adjustWidthHeightForMobile(this.guideRect);
        CoreLib.UIUtil.positionObjectForDevice(this.guideRect);
        CoreLib.UIUtil.adjustElement(this.congratTxt);
        CoreLib.UIUtil.positionObjectForDevice(this.congratTxt);
        CoreLib.UIUtil.adjustElement(this.youhavewonText);
        CoreLib.UIUtil.positionObjectForDevice(this.youhavewonText);
        CoreLib.UIUtil.adjustElement(this.redCrossGreenImage);
        CoreLib.UIUtil.positionObjectForDevice(this.redCrossGreenImage);
        CoreLib.UIUtil.adjustElement(this.pressAnyWhereText);
        CoreLib.UIUtil.positionObjectForDevice(this.pressAnyWhereText);
        CoreLib.UIUtil.adjustElement(this.totalWinAmountComp);
        CoreLib.UIUtil.positionObjectForDevice(this.totalWinAmountComp);
    }

}
