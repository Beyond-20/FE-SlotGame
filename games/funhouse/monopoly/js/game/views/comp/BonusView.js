import { LibView } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";

export class BonusView extends LibView {
    constructor(config) {
        super(config);
        this.bonusBg = this.elementsList["bonusBg"];
        CoreLib.UIUtil.setModalState(this.bonusBg, true);
        this.bonusBg.visible = false;
        CoreLib.EventHandler.addEventListener("SHOW_FS_MEGABOARD_BG", this.showFSMegaboardBg.bind(this));
        CoreLib.EventHandler.addEventListener("HIDE_FS_MEGABOARD_BG", this.hideFSMegaboardBg.bind(this));
    }

    showFSMegaboardBg() {
        this.bonusBg.visible = true;
    }

    hideFSMegaboardBg() {
        this.bonusBg.visible = false;
    }

    resizeViewComponents() {
        super.resizeViewComponents();
        setTimeout(this.resizeChildren.bind(this), 0);
        setTimeout(this.resizeViewContainers.bind(this), 0);
    }
    resizeViewContainers() {
        super.resizeViewContainers();
        
    }
    resizeChildren() {
        super.resizeChildren();
    }

}