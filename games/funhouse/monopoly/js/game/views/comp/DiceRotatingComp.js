import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { LibContainer } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibContainer";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";

let removedElementsArr = [4, 16, 22, 34, 40, 52];
let allReelWinsMuliplierArr = [11, 29, 47];
let mysteriesArr = [3, 6, 9, 14, 21, 24, 27, 32, 39, 42, 45, 50];

export class DiceRotatingComp extends LibContainer {
    constructor(config) {
        super(config);
        this.boyFace = this.elementsList["boyFace"];
        this.monopolyManFace = this.elementsList["monopolyManFace"];
        this.purpleDiceContainer = this.elementsList["purpleDiceContainer"];
        this.purpleDiceAnim6 = this.purpleDiceContainer.elementsList["purpleDiceAnim6"];
        this.purpleDiceAnim5 = this.purpleDiceContainer.elementsList["purpleDiceAnim5"];
        this.purpleDiceAnim4 = this.purpleDiceContainer.elementsList["purpleDiceAnim4"];
        this.purpleDiceAnim3 = this.purpleDiceContainer.elementsList["purpleDiceAnim3"];
        this.purpleDiceAnim2 = this.purpleDiceContainer.elementsList["purpleDiceAnim2"];
        this.purpleDiceAnim1 = this.purpleDiceContainer.elementsList["purpleDiceAnim1"];
        this.purpleDiceLightAnim6 = this.purpleDiceContainer.elementsList["purpleDiceLightAnim6"];
        this.purpleDiceLightAnim5 = this.purpleDiceContainer.elementsList["purpleDiceLightAnim5"];
        this.purpleDiceLightAnim4 = this.purpleDiceContainer.elementsList["purpleDiceLightAnim4"];
        this.purpleDiceLightAnim3 = this.purpleDiceContainer.elementsList["purpleDiceLightAnim3"];
        this.purpleDiceLightAnim2 = this.purpleDiceContainer.elementsList["purpleDiceLightAnim2"];
        this.purpleDiceLightAnim1 = this.purpleDiceContainer.elementsList["purpleDiceLightAnim1"];
        for (let k = 1; k <= 6; k++) {
            this["purpleDiceAnim" + k].visible = false;
            this["purpleDiceLightAnim" + k].visible = false;
        }
        this.yellowDiceContainer = this.elementsList["yellowDiceContainer"];
        this.yellowDiceAnim6 = this.yellowDiceContainer.elementsList["yellowDiceAnim6"];
        this.yellowDiceAnim5 = this.yellowDiceContainer.elementsList["yellowDiceAnim5"];
        this.yellowDiceAnim4 = this.yellowDiceContainer.elementsList["yellowDiceAnim4"];
        this.yellowDiceAnim3 = this.yellowDiceContainer.elementsList["yellowDiceAnim3"];
        this.yellowDiceAnim2 = this.yellowDiceContainer.elementsList["yellowDiceAnim2"];
        this.yellowDiceAnim1 = this.yellowDiceContainer.elementsList["yellowDiceAnim1"];
        this.yellowDiceLightAnim6 = this.yellowDiceContainer.elementsList["yellowDiceLightAnim6"];
        this.yellowDiceLightAnim5 = this.yellowDiceContainer.elementsList["yellowDiceLightAnim5"];
        this.yellowDiceLightAnim4 = this.yellowDiceContainer.elementsList["yellowDiceLightAnim4"];
        this.yellowDiceLightAnim3 = this.yellowDiceContainer.elementsList["yellowDiceLightAnim3"];
        this.yellowDiceLightAnim2 = this.yellowDiceContainer.elementsList["yellowDiceLightAnim2"];
        this.yellowDiceLightAnim1 = this.yellowDiceContainer.elementsList["yellowDiceLightAnim1"];
        for (let k = 1; k <= 6; k++) {
            this["yellowDiceAnim" + k].visible = false;
            this["yellowDiceLightAnim" + k].visible = false;
        }
        this.press2Roll = this.elementsList["press2Roll"];
        this.press2RollBtn = this.elementsList["press2RollBtn"];
        this.press2RollBtn.alpha = 0;
        this.press2Roll.visible = false;
        this.boyFace.visible = false;
        this.monopolyManFace.visible = false;
        this.yellowDiceContainer.visible = false;
        this.purpleDiceContainer.visible = false;

        CoreLib.UIUtil.setClickable(this.press2RollBtn, false);
        CoreLib.UIUtil.addInteraction(this.press2RollBtn, this.onPress2BtnClicked.bind(this));

        CoreLib.EventHandler.addEventListener("SHOW_YELLOW_DICE_ANIMATION", this.showYellowDiceAnimation.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_PURPLE_DICE_ANIMATION", this.showPurpleDiceAnimation.bind(this));
    }

    showPurpleDiceAnimation(data) {
        this.monopolyManFace.visible = true;
        this.purpleDiceContainer.visible = true;
        this.greenDiceCount = data.greenDieCount;
        this["purpleDiceAnim" + this.greenDiceCount].visible = true;
        this["purpleDiceAnim" + this.greenDiceCount].playAnimation(false);
        CoreLib.EventHandler.dispatchEvent("PLAY_DICE_ANIM_SOUND");
        CoreLib.EventHandler.dispatchEvent("SHOW_MONOPOLY_MAN_ICON_ANIMATION", data);
        setTimeout(() => {
            if (this.greenDiceCount) {
                this["purpleDiceAnim" + this.greenDiceCount].visible = false;
                this["purpleDiceAnim" + this.greenDiceCount].stopAnimation();
                this["purpleDiceLightAnim" + this.greenDiceCount].visible = true;
                this["purpleDiceLightAnim" + this.greenDiceCount].playAnimation(false);
                CoreLib.EventHandler.dispatchEvent("PLAY_LIGHT_DICE_ANIM_SOUND");
            } else {
                this["purpleDiceLightAnim" + this.greenDiceCount].visible = false;
            }
        }, 1800);
    }

    showYellowDiceAnimation(data) {
        CoreLib.EventHandler.dispatchEvent("STOP_MONOPOLY_MAN_IN_CAR_ANIMATION");
        this.boyFace.visible = true;
        this.yellowDiceContainer.visible = true;
        this.redDiceCount = data.redDieCount;
        this["yellowDiceAnim" + this.redDiceCount].visible = true;
        this["yellowDiceAnim" + this.redDiceCount].playAnimation(false);
        CoreLib.EventHandler.dispatchEvent("PLAY_DICE_ANIM_SOUND");
        CoreLib.EventHandler.dispatchEvent("SHOW_BOY_ON_DUCK_ICON_ANIMATION", data);
        setTimeout(() => {
            if (this.redDiceCount) {
                this["yellowDiceAnim" + this.redDiceCount].visible = false;
                this["yellowDiceAnim" + this.redDiceCount].stopAnimation();
                this["yellowDiceLightAnim" + this.redDiceCount].visible = true;
                this["yellowDiceLightAnim" + this.redDiceCount].playAnimation(false);
                CoreLib.EventHandler.dispatchEvent("PLAY_LIGHT_DICE_ANIM_SOUND");
            } else {
                this["yellowDiceLightAnim" + this.redDiceCount].visible = false;
            }
        }, 1800);
    }

    hidePurpleManDice(data) {
        this.greenDiceCount = data.greenDieCount;
        this.totalGreenDiceCount = data.totalNumberOfHopsByGreen;
        this.monopolyManFace.visible = false;
        this.purpleDiceContainer.visible = false;
        this["purpleDiceAnim" + this.greenDiceCount].visible = false;
        this["purpleDiceLightAnim" + this.greenDiceCount].visible = false;
        CoreLib.EventHandler.dispatchEvent("PLAY_DICE_WIN_SOUND");
        if (removedElementsArr.includes(this.totalGreenDiceCount)) {
            CoreLib.EventHandler.dispatchEvent("PLAY_ELEMENT_REMOVED_REACHED_SOUND");
        }
        if (allReelWinsMuliplierArr.includes(this.totalGreenDiceCount)) {
            CoreLib.EventHandler.dispatchEvent("PLAY_ALL_WIN_MULTIPLIER_SOUND");
        }
        if (mysteriesArr.includes(this.totalGreenDiceCount)) {
            CoreLib.EventHandler.dispatchEvent("PLAY_JOCKEY_MYSTERY_REACHED_SOUND");
        }
        CoreLib.EventHandler.dispatchEvent("ON_MAN_AND_DICE_HIDE_COMPLETED", this.totalGreenDiceCount);
    }

    hideYellowManDice(data) {
        this.redDiceCount = data.redDieCount;
        this.boyFace.visible = false;
        this.yellowDiceContainer.visible = false;
        this["yellowDiceAnim" + this.redDiceCount].visible = false;
        this["yellowDiceLightAnim" + this.redDiceCount].visible = false;
        CoreLib.EventHandler.dispatchEvent("ON_BOY_ON_DUCK_ANIMATION_DONE");
    }

    showPress2Btn() {
        this.monopolyManFace.visible = true;
        this.press2Roll.visible = true;
        this.press2RollBtn.visible = true;
        CoreLib.EventHandler.dispatchEvent("PLAY_ANYWHERE_TO_ROLL_DICE_SOUND");
        this.setEnabled(true);
    }

    setEnabled(flag) {
        CoreLib.UIUtil.setClickable(this.press2RollBtn, flag);
    }

    onPress2BtnClicked() {
        this.press2Roll.visible = false;
        this.press2RollBtn.visible = false;
        this.emit("DICE_CLICKED");
    }

    hidePurpleDice(data) {
        this.greenDiceCount = data.greenDieCount;
        this.totalGreenDiceCount = data.totalNumberOfHopsByGreen;
        this.monopolyManFace.visible = false;
        this.purpleDiceContainer.visible = false;
        this["purpleDiceAnim" + this.greenDiceCount].visible = false;
        this["purpleDiceLightAnim" + this.greenDiceCount].visible = false;
    }

}
