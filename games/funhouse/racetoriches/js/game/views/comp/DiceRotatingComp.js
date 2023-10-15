import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { LibContainer } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibContainer";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";

let removedElementsArr = [4, 16, 22, 34, 40, 52];
let allReelWinsMuliplierArr = [11, 29, 47];
let mysteriesArr = [3, 6, 9, 14, 21, 24, 27, 32, 39, 42, 45, 50];

export class DiceRotatingComp extends LibContainer {
    constructor(config) {
        super(config);
        this.redManFace = this.elementsList["redManFace"];
        this.greenManFace = this.elementsList["greenManFace"];
        this.greenDiceContainer = this.elementsList["greenDiceContainer"];
        this.greenDiceAnim6 = this.greenDiceContainer.elementsList["greenDiceAnim6"];
        this.greenDiceAnim5 = this.greenDiceContainer.elementsList["greenDiceAnim5"];
        this.greenDiceAnim4 = this.greenDiceContainer.elementsList["greenDiceAnim4"];
        this.greenDiceAnim3 = this.greenDiceContainer.elementsList["greenDiceAnim3"];
        this.greenDiceAnim2 = this.greenDiceContainer.elementsList["greenDiceAnim2"];
        this.greenDiceAnim1 = this.greenDiceContainer.elementsList["greenDiceAnim1"];
        this.greenDiceLightAnim6 = this.greenDiceContainer.elementsList["greenDiceLightAnim6"];
        this.greenDiceLightAnim5 = this.greenDiceContainer.elementsList["greenDiceLightAnim5"];
        this.greenDiceLightAnim4 = this.greenDiceContainer.elementsList["greenDiceLightAnim4"];
        this.greenDiceLightAnim3 = this.greenDiceContainer.elementsList["greenDiceLightAnim3"];
        this.greenDiceLightAnim2 = this.greenDiceContainer.elementsList["greenDiceLightAnim2"];
        this.greenDiceLightAnim1 = this.greenDiceContainer.elementsList["greenDiceLightAnim1"];
        for (let k = 1; k <= 6; k++) {
            this["greenDiceAnim" + k].visible = false;
            this["greenDiceLightAnim" + k].visible = false;
        }
        this.redDiceContainer = this.elementsList["redDiceContainer"];
        this.redDiceAnim6 = this.redDiceContainer.elementsList["redDiceAnim6"];
        this.redDiceAnim5 = this.redDiceContainer.elementsList["redDiceAnim5"];
        this.redDiceAnim4 = this.redDiceContainer.elementsList["redDiceAnim4"];
        this.redDiceAnim3 = this.redDiceContainer.elementsList["redDiceAnim3"];
        this.redDiceAnim2 = this.redDiceContainer.elementsList["redDiceAnim2"];
        this.redDiceAnim1 = this.redDiceContainer.elementsList["redDiceAnim1"];
        this.redDiceLightAnim6 = this.redDiceContainer.elementsList["redDiceLightAnim6"];
        this.redDiceLightAnim5 = this.redDiceContainer.elementsList["redDiceLightAnim5"];
        this.redDiceLightAnim4 = this.redDiceContainer.elementsList["redDiceLightAnim4"];
        this.redDiceLightAnim3 = this.redDiceContainer.elementsList["redDiceLightAnim3"];
        this.redDiceLightAnim2 = this.redDiceContainer.elementsList["redDiceLightAnim2"];
        this.redDiceLightAnim1 = this.redDiceContainer.elementsList["redDiceLightAnim1"];
        for (let k = 1; k <= 6; k++) {
            this["redDiceAnim" + k].visible = false;
            this["redDiceLightAnim" + k].visible = false;
        }
        this.press2Roll = this.elementsList["press2Roll"];
        this.press2RollBtn = this.elementsList["press2RollBtn"];
        this.press2RollBtn.alpha = 0;
        this.press2Roll.visible = false;
        this.redManFace.visible = false;
        this.greenManFace.visible = false;
        this.redDiceContainer.visible = false;
        this.greenDiceContainer.visible = false;
        CoreLib.UIUtil.setClickable(this.press2RollBtn, false);
        CoreLib.UIUtil.addInteraction(this.press2RollBtn, this.onPress2BtnClicked.bind(this));

        CoreLib.EventHandler.addEventListener("SHOW_RED_DICE_ANIMATION", this.showRedDiceAnimation.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_GREEN_DICE_ANIMATION", this.showGreenDiceAnimation.bind(this));
    }

    showGreenDiceAnimation(data) {
        this.greenManFace.visible = true;
        this.greenDiceContainer.visible = true;
        this.greenDiceCount = data.greenDieCount;
        this["greenDiceAnim" + this.greenDiceCount].visible = true;
        this["greenDiceAnim" + this.greenDiceCount].playAnimation(false);
        CoreLib.EventHandler.dispatchEvent("PLAY_DICE_ANIM_SOUND");
        CoreLib.EventHandler.dispatchEvent("SHOW_GREEN_MAN_ICON_ANIMATION", data);
        setTimeout(() => {
            if (this.greenDiceCount) {
                this["greenDiceLightAnim" + this.greenDiceCount].visible = true;
                this["greenDiceLightAnim" + this.greenDiceCount].playAnimation(false);
                CoreLib.EventHandler.dispatchEvent("PLAY_LIGHT_DICE_ANIM_SOUND");
            }
            else {
                this["greenDiceLightAnim" + this.greenDiceCount].visible = false;
            }
        }, 2000);
    }

    showRedDiceAnimation(data) {
        CoreLib.EventHandler.dispatchEvent("MAKE_GREEN_MAN_SLEEP");
        this.redManFace.visible = true;
        this.redDiceContainer.visible = true;
        this.redDiceCount = data.redDieCount;
        this["redDiceAnim" + this.redDiceCount].visible = true;
        this["redDiceAnim" + this.redDiceCount].playAnimation(false);
        CoreLib.EventHandler.dispatchEvent("PLAY_DICE_ANIM_SOUND");
        CoreLib.EventHandler.dispatchEvent("SHOW_RED_MAN_ICON_ANIMATION", data)
        setTimeout(() => {
            if (this.redDiceCount) {
                this["redDiceLightAnim" + this.redDiceCount].visible = true;
                this["redDiceLightAnim" + this.redDiceCount].playAnimation(false);
                CoreLib.EventHandler.dispatchEvent("PLAY_LIGHT_DICE_ANIM_SOUND");
            }
            else {
                this["redDiceLightAnim" + this.redDiceCount].visible = false;
            }
        }, 2000);
    }

    hideGreenManDice(data) {
        this.greenDiceCount = data.greenDieCount;
        this.totalGreenDiceCount = data.totalNumberOfHopsByGreen;
        this.greenManFace.visible = false;
        this.greenDiceContainer.visible = false;
        this["greenDiceAnim" + this.greenDiceCount].visible = false;
        this["greenDiceLightAnim" + this.greenDiceCount].visible = false;
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

    hideRedManDice(data) {
        this.redDiceCount = data.redDieCount;
        this.redManFace.visible = false;
        this.redDiceContainer.visible = false;
        this["redDiceAnim" + this.redDiceCount].visible = false;
        this["redDiceLightAnim" + this.redDiceCount].visible = false;
        CoreLib.EventHandler.dispatchEvent("ON_RED_JOCKEY_ANIMATION_DONE");
    }

    showPress2Btn() {
        this.greenManFace.visible = true;
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

    hideGreenDice(data) {
        this.greenDiceCount = data.greenDieCount;
        this.totalGreenDiceCount = data.totalNumberOfHopsByGreen;
        this.greenManFace.visible = false;
        this.greenDiceContainer.visible = false;
        this["greenDiceAnim" + this.greenDiceCount].visible = false;
        this["greenDiceLightAnim" + this.greenDiceCount].visible = false;
    }

}
