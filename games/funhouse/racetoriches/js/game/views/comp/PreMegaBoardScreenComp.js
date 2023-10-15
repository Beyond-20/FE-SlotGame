import { LibView } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { View } from "../../../../../../../../slot_core/corelib/views/GameView";

export class PreMegaBoardScreenComp extends LibView {
    constructor(config, layoutconfig) {
        super(config, layoutconfig);
        this.bg = this.elementsList["bg"];
        CoreLib.UIUtil.setModalState(this.bg, true);
        this.megaboardIntroComp = this.elementsList["megaboardIntroComp"];
        this.megaIntroguideRect = this.megaboardIntroComp.elementsList["guideRect"];
        this.MsgElementsContainer = this.megaboardIntroComp.elementsList["MsgElementsContainer"];
        this.megaBoardIntroBox = this.megaboardIntroComp.elementsList["megaBoardIntroBox"];
        this.guideRect2 = this.megaBoardIntroBox.elementsList["guideRect"];
        this.startBtn = this.megaboardIntroComp.elementsList["startBtn"];
        this.visible = false;
        this.startBtn.setEnabled(false);
        CoreLib.EventHandler.addEventListener("SHOW_PRE_MEGABOARD_SCREEN", this.showPreMegaBoardScreen.bind(this));
        this.startBtn.addInteraction(this.onStartBtnClicked.bind(this));
    }
    
    showPreMegaBoardScreen() {
        this.visible = true;
        this.startBtn.setEnabled(true);
        CoreLib.Model.GameConfig.noPortraitMode = true;
        CoreLib.EventHandler.dispatchEvent("CHECK_NO_PORTRAIT_MOCAL");
        CoreLib.EventHandler.dispatchEvent("START_FREESPIN_BG_MUSIC");
    }

    onStartBtnClicked() {
        this.visible = false;
        this.startBtn.setEnabled(false);
        CoreLib.EventHandler.dispatchEvent("BONUS_START_BUTTON_CLICKED");
        CoreLib.EventHandler.dispatchEvent("PLAY_GENERIC_BUTTON_SOUND");
    }

    resizeViewComponents() {
        super.resizeViewComponents();
        this.resizeChildren();
        CoreLib.UIUtil.adjustElement(this.bg);
        CoreLib.UIUtil.adjustElement(this.megaIntroguideRect);
        CoreLib.UIUtil.positionObjectForDevice(this.megaIntroguideRect);
        CoreLib.UIUtil.adjustElement(this.MsgElementsContainer);
        CoreLib.UIUtil.positionObjectForDevice(this.MsgElementsContainer);
        CoreLib.UIUtil.adjustElement(this.megaBoardIntroBox);
        CoreLib.UIUtil.positionObjectForDevice(this.megaBoardIntroBox);
        CoreLib.UIUtil.adjustElement(this.startBtn);
        CoreLib.UIUtil.positionObjectForDevice(this.startBtn);
    }

}
