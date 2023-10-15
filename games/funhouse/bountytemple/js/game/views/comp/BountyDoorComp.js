import { LibContainer } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibContainer";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";

export class BountyDoorComp extends LibContainer {
    constructor(config) {
        super(config);
        this.door = this.elementsList["door"];
        this.winAnim = this.elementsList["winAnim"];
        this.lossAnim = this.elementsList["lossAnim"];
        this.door.addEventListener("complete", this.onDoorAnimComplete.bind(this));
        this.door.x = this.door.width / 2;
        this.door.y = this.door.height / 2;
        this.rect = CoreLib.UIUtil.getRectangle(320, 520, 0xff0000);
        this.addChild(this.rect);
        this.rect.alpha = 0;
        CoreLib.UIUtil.setClickable(this.rect, false);
        CoreLib.UIUtil.addInteraction(this.rect, this.onDoorClicked.bind(this));
        this.winAnim.visble = false;
        this.lossAnim.visible = false;
    }

    setEnabled(flag) {
        CoreLib.UIUtil.setClickable(this.rect, flag);
    }

    onDoorClicked() {
        this.emit("DOOR_CLICKED", this.configData.id);
    }

    playIdleAnimation(level) {
        this.door.playAnimation("door" + level + "_idle", true);
    }
    showDoorOpen(level, isCredit) {
        this.isCreditWin = isCredit;
        const str = "door" + level + "_open";
        this.door.playAnimation(str, false);
    }

    showCloseAnimation(level) {
        this.door.playAnimation("door" + level + "_close", false);
    }

    onDoorAnimComplete(data) {
        if (data.name.indexOf("_open") > -1) {
            this.emit("DOOR_OPENED");
            if (this.isCreditWin) {
                this.showWinAward();
            } else {
                this.showLossAward();
            }
        }

    }


    showWinAward() {
        this.winAnim.visible = true;
        this.winType = "creditValue";
        this.winAnim.playAnimation("animation", false);
    }

    showLossAward() {
        this.lossAnim.visible = true;
        this.lossAnim.playAnimation("animation", false);
        this.winType = "featureEnd";
    }

};
