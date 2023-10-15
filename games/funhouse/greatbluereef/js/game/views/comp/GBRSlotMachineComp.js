import { SlotMachineComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotMachineComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";

export class GBRSlotMachineComp extends SlotMachineComp {
    constructor(config) {
        super(config);
        this.gamelogoP = this.elementsList["gamelogoP"];
        this.gamelogoP.visible = false;
    }



    resizeViewComponents() {
        super.resizeViewComponents();
        if (CoreLib.Model.DeviceConfig.isDevice) {
            this.gamelogoP.visible = true;
            this.gamelogo.visible = false;
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                if (this.gamelogoP) {
                    if (CoreLib.Model.DeviceConfig.isTablet) {
                        if (this.gamelogoP) {
                            this.gamelogoP.scale.set(this.gamelogoP.configData.tabScale);
                            this.gamelogoP.position.x = this.gamelogoP.configData.tabx;
                            this.gamelogoP.position.y = this.gamelogoP.configData.taby;
                        }
                    }
                    else {
                        this.gamelogoP.scale.set(CoreLib.Util.getDefaultValue(this.gamelogoP.configData.pScale, 1));
                        if (this.gamelogoP.configData.px != undefined) {
                            CoreLib.UIUtil.setPositionX(this.gamelogoP, this.gamelogoP.configData.px);
                        }
                        if (this.gamelogoP.configData.py != undefined) {
                            CoreLib.UIUtil.setPositionY(this.gamelogoP, this.gamelogoP.configData.py);
                        }
                    }
                }
            } else {
                if (this.gamelogoP) {

                    if (this.slotMachine && (this.slotMachine.getWidth() * 1.5 >= CoreLib.UIUtil.getGameWidth())) {
                        this.gamelogoP.visible = false;
                    } else {
                        this.gamelogoP.visible = true;
                        if (CoreLib.Model.DeviceConfig.isTablet) {
                            if (this.gamelogoP) {
                                this.gamelogoP.scale.set(0.1);
                                this.gamelogoP.position.x = 200;
                                this.gamelogoP.position.y = 0;
                            }
                        }
                        else {
                            this.gamelogoP.scale.set(CoreLib.Util.getDefaultValue(this.gamelogoP.configData.lScale, 1));
                            if (this.gamelogoP.configData.lx != undefined) {
                                CoreLib.UIUtil.setPositionX(this.gamelogoP, this.gamelogoP.configData.lx);
                            }
                            if (this.gamelogoP.configData.ly != undefined) {
                                CoreLib.UIUtil.setPositionY(this.gamelogoP, this.gamelogoP.configData.ly);
                            }
                        }
                    }
                }
            }
        }
    }

};
