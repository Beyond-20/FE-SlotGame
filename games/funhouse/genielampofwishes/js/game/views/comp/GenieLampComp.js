import { LibContainer } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibContainer";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";

export class GenieLampComp extends LibContainer {
    constructor(config) {
        super(config);
        this.lamp = this.elementsList["lamp"];
        this.carpet = this.elementsList["carpet"];
        this.lamp.addEventListener("complete", this.onlampAnimComplete.bind(this));
        this.lamp.x = this.lamp.width / 2;
        this.lamp.y = this.lamp.height / 2;
        this.carpet.x = this.carpet.width / 2 ;
        this.carpet.y = this.carpet.height / 2 + 110;
        this.rect = CoreLib.UIUtil.getRectangle(920, 430, 0x00B140);
        this.rect.x = 230;
        this.rect.y = 30;
        this.addChild(this.rect);
        this.rect.alpha = 0;
        CoreLib.UIUtil.setClickable(this.rect, false);
        CoreLib.UIUtil.addInteraction(this.rect, this.onLampClicked.bind(this));
    }

    setEnabled(flag) {
        CoreLib.UIUtil.setClickable(this.rect, flag);
    }

    onLampClicked(id) {
        this.emit("lamp_CLICKED", this.configData.id);
    }

    playStartAnimation(level) {
        this.lamp.playAnimation("start_" + "lamp_" + level, false);
        this.carpet.playAnimation("start_lamp", false);
    }

    playOutAnimation(level){
        this.lamp.playAnimation("out_" + "lamp_" + level, false);
        this.carpet.playAnimation("out_lamp", false);
    }

    playIdleAnimation(level) {
        this.lamp.playAnimation("idle_" + "lamp_"+ level, true);
        this.carpet.playAnimation("idle_lamp", true);
    }

    showLampOpen(level, isCredit) {
        this.currentLevel = level;
        this.isCreditWin = isCredit;
        let str = "idle_" + "lamp_" + level + "_smoke" + "_open";
        this.lamp.playAnimation(str, false);
    }  

    showCloseAnimation(level) {
        this.lamp.playAnimation( "idle_" + "lamp_" + level + "_smoke" + "_stop", false);
        //this.carpet.playAnimation("out_lamp", false);
    }

    onlampAnimComplete(data) {
        if (data.name.indexOf("_open") > -1) {
            this.emit("lamp_OPENED");
            if (this.isCreditWin) {
                this.showWinAward(this.currentLevel);
            } else {
                this.showLossAward(this.currentLevel);
            }
        } 
    }

    showWinAward(level) {
        this.lamp.playAnimation("idle_"+ "lamp_" + level+ "_smoke" + "_cicle", false);
        this.winType = "creditValue";      
    }

    showLossAward() {
        this.winType = "featureEnd";
    }

};
