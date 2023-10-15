import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { LibView } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";

export class PostMegaBoardWinningPopupComp extends LibView {
    constructor(config, layoutconfig) {
        super(config, layoutconfig);
        this.bg = this.elementsList["bg"];
        CoreLib.UIUtil.setModalState(this.bg, true);
        this.postMegaboardWinningElements = this.elementsList["postMegaboardWinningElements"];
        this.guideRect = this.postMegaboardWinningElements.elementsList["guideRect"];
        this.congratTxt = this.postMegaboardWinningElements.elementsList["congratTxt"];
        this.youhavewonText = this.postMegaboardWinningElements.elementsList["youhavewonText"];
        this.redCrossGreenImage = this.postMegaboardWinningElements.elementsList["redCrossGreenImage"];
        this.totalWinAmountComp = this.postMegaboardWinningElements.elementsList["totalWinAmountComp"];
        this.winner = this.postMegaboardWinningElements.elementsList["winner"];
        this.winText = this.totalWinAmountComp.elementsList["winText"];
        this.visible = false;
        this.rect = CoreLib.UIUtil.getRectangle(3500, 3500, 0x00B140);
        this.rect.x = 0;
        this.rect.y = 0;
        this.addChild(this.rect);
        this.rect.alpha = 0;
        CoreLib.UIUtil.setClickable(this.rect, false);
        CoreLib.UIUtil.addInteraction(this.rect, this.onAnyWhereClicked.bind(this));

        this.pressAnyWhereText = this.postMegaboardWinningElements.elementsList["pressAnyWhereText"];
        this.pressAnyWhereText.text = CoreLib.Util.getContent("pressAnyWhereText");
        this.pressAnyWhereText.visible = true;
        this.setEnabled(false);
        CoreLib.AnimationManager.animateTween(this.pressAnyWhereText, 1, { scaleX: 1.1, scaleY: 1.1, repeat: -1, yoyo: true });

        CoreLib.EventHandler.addEventListener("SHOW_POST_MEGABOARD_WINNING_SCREEN", this.showPostMegaBoardWinningScreen.bind(this));
    }

    showPostMegaBoardWinningScreen() {
        this.visible = true;
        CoreLib.Model.GameConfig.noPortraitMode = true;
        CoreLib.EventHandler.dispatchEvent("CHECK_NO_PORTRAIT_MOCAL");
        this.reset();
        CoreLib.EventHandler.dispatchEvent("PLAY_BIG_MONEY_TROPHY_HEIGHTLIGHT_SOUND");
        let arr = slotModel.featureResult.featureResults;
        this.totalWinAmountComp.showText(CoreLib.WrapperService.formatCurrency(arr[1].totalWin));
    }

    reset(){
        this.pressAnyWhereText.visible = true;
        this.setEnabled(true);
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
        CoreLib.EventHandler.dispatchEvent("MEGABOARD_BONUS_END");
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
        CoreLib.UIUtil.adjustElement(this.winner);
        CoreLib.UIUtil.positionObjectForDevice(this.winner);
        CoreLib.UIUtil.adjustElement(this.pressAnyWhereText);
        CoreLib.UIUtil.positionObjectForDevice(this.pressAnyWhereText);
        CoreLib.UIUtil.adjustElement(this.totalWinAmountComp);
        CoreLib.UIUtil.positionObjectForDevice(this.totalWinAmountComp);
    }

}
