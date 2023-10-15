import { PanelWinComp } from "../../../../../../../../slot_core/corelib/views/comps/PanelWinComp"
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";

export class PanelWinCompV2 extends PanelWinComp {
    constructor(config) {
        super(config);

    }

    updateWin(win) {
        this.winValue = win;
        this.multi;
        if (win == 0) {
            if (slotModel.getFSMultiplier() && slotModel.getFSMultiplier() > 1) {
                this.valueText.text = CoreLib.Util.getContent("mutliplierText") + " : " + slotModel.getFSMultiplier() + "x";
            } else {
                this.valueText.text = CoreLib.WrapperService.formatCurrency(win);
            }
        } else {
            if (slotModel.getFeatureData() || slotModel.getSlotGameResult()) {
                if (slotModel.getFeatureData() == true) {
                    let fsResult = slotModel.getFeatureData();
                    let index = fsResult[0].spinResults.length - 1;
                    let spinresult = fsResult[0].spinResults[index];
                    this.multi = spinresult.scatterMultiplier;
                } else {
                    let data = slotModel.getSlotGameResult();
                    this.multi = data.scatterMultiplier;
                }
                if (this.multi > 1) {
                    if (CoreLib.Model.DeviceConfig.isDevice) {
                        if (CoreLib.Model.DeviceConfig.isPortrait) {
                            this.valueText.text = CoreLib.WrapperService.formatCurrency(this.winValue / this.multi) + " x " + this.multi + " \n " + " = " + CoreLib.WrapperService.formatCurrency(this.winValue);
                            this.valueText.y = 8;
                        } else {
                            this.valueText.text = CoreLib.WrapperService.formatCurrency(this.winValue / this.multi) + " x " + this.multi + " = " + CoreLib.WrapperService.formatCurrency(this.winValue);
                            this.valueText.y = 38;
                        }
                    } else {
                        this.valueText.text = CoreLib.WrapperService.formatCurrency(this.winValue / this.multi) + " x " + this.multi + " = " + CoreLib.WrapperService.formatCurrency(this.winValue);
                    }
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

    resizeViewComponents() {
        super.resizeViewComponents();
        if (this.winValue == 0) {
            this.valueText.text = CoreLib.WrapperService.formatCurrency(this.winValue);
        } else if (this.multi > 1) {
            if (CoreLib.Model.DeviceConfig.isDevice) {
                if (CoreLib.Model.DeviceConfig.isPortrait) {
                    this.valueText.text = CoreLib.WrapperService.formatCurrency(this.winValue / this.multi) + " x " + this.multi + " \n " + " = " + CoreLib.WrapperService.formatCurrency(this.winValue);
                    this.valueText.y = 8;
                } else {
                    this.valueText.text = CoreLib.WrapperService.formatCurrency(this.winValue / this.multi) + " x " + this.multi + " = " + CoreLib.WrapperService.formatCurrency(this.winValue);
                    this.valueText.y = 38;
                }
            } else {
                this.valueText.text = CoreLib.WrapperService.formatCurrency(this.winValue / this.multi) + " x " + this.multi + " = " + CoreLib.WrapperService.formatCurrency(this.winValue);
            }
        } else {
            if (this.winValue > 0) {
                this.valueText.text = CoreLib.WrapperService.formatCurrency(this.winValue);
            } else {
                this.valueText.text = 0;
            }
        }
    }

}
