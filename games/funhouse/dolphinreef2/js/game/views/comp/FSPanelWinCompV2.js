import { FSPanelWinComp } from "../../../../../../../../slot_core/corelib/views/comps/FSPanelWinComp"
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";

export class FSPanelWinCompV2 extends FSPanelWinComp {
    constructor(config) {
        super(config);

    }

    updateWin(win) {
        this.winValue = win;
        if (win == 0) {
            if (slotModel.getFSMultiplier() && slotModel.getFSMultiplier() > 1) {
                this.valueText.text = CoreLib.Util.getContent("mutliplierText") + " : " + slotModel.getFSMultiplier() + "x";
            } else {
                this.valueText.text = CoreLib.WrapperService.formatCurrency(win);
            }
        } else {
            if (slotModel.getFeatureData() || slotModel.getSlotGameResult()) {
                let multi;
                if (slotModel.getFeatureData() == true) {
                    let fsResult = slotModel.getFeatureData();
                    let index = fsResult[0].spinResults.length - 1;
                    let spinresult = fsResult[0].spinResults[index];
                    multi = spinresult.scatterMultiplier;
                } else {
                    let data = slotModel.getSlotGameResult();
                    multi = data.scatterMultiplier;
                }
                if (multi > 1) {
                    let str = CoreLib.WrapperService.formatCurrency(win / multi) + " x " + multi + " = " + CoreLib.WrapperService.formatCurrency(win);
                    this.valueText.text = str;
                    CoreLib.EventHandler.dispatchEvent("STOP_SHOWING_SPIN_BUTTON_IN_FS");
                } else {
                    if (win > 0) {
                        this.valueText.text = CoreLib.WrapperService.formatCurrency(win);
                    } else {
                        this.valueText.text = 0;
                    }
                }
            } else {
                if (CoreLib.Model.GameConfig.allofakindInFS) {
                    this.valueText.text = CoreLib.WrapperService.formatCurrency(win);
                } else {
                    this.valueText.text = CoreLib.WrapperService.formatCurrency(win);
                }
            }
        }
    }

}
