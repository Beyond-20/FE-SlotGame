import { SlotMachineComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotMachineComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";


export class GameSlotMachineComp extends SlotMachineComp {
    constructor(config) {
        super(config);
        this.gamelogo = this.elementsList["gamelogo"];
    }



    resizeViewComponents() {
        super.resizeViewComponents();
        if (CoreLib.Model.DeviceConfig.isDesktop) {
        } else {
            if (this.gamelogo) {
                this.gamelogo.visible = true;
            }
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                if (this.gamelogo) {
                    if (CoreLib.Model.DeviceConfig.isTablet) {
                        if (this.gamelogo) {
                            this.gamelogo.scale.set(this.gamelogo.configData.tabScale);
                            this.gamelogo.position.x = this.gamelogo.configData.tabx;
                            this.gamelogo.position.y = this.gamelogo.configData.taby;
                        }
                    }
                    else {
                        this.gamelogo.scale.set(CoreLib.Util.getDefaultValue(this.gamelogo.configData.pScale, 1));
                        if (this.gamelogo.configData.px != undefined) {
                            CoreLib.UIUtil.setPositionX(this.gamelogo, this.gamelogo.configData.px);
                        }
                        if (this.gamelogo.configData.py != undefined) {
                            CoreLib.UIUtil.setPositionY(this.gamelogo, this.gamelogo.configData.py);
                        }
                    }
                }
            } else {
                if (this.gamelogo) {
                    if (this.slotMachine && (this.slotMachine.getWidth() * 0.93 >= CoreLib.UIUtil.getGameWidth())) {
                        this.gamelogo.visible = false;
                    } else {
                        this.gamelogo.visible = true;
                        if (CoreLib.Model.DeviceConfig.isTablet) {
                            if (this.gamelogo) {
                                this.gamelogo.scale.set(0.1);
                                this.gamelogo.position.x = 200;
                                this.gamelogo.position.y = 0;
                            }
                        }
                        else {
                            this.gamelogo.scale.set(CoreLib.Util.getDefaultValue(this.gamelogo.configData.lScale, 1));
                            if (this.gamelogo.configData.lx != undefined) {
                                CoreLib.UIUtil.setPositionX(this.gamelogo, this.gamelogo.configData.lx);
                            }
                            if (this.gamelogo.configData.ly != undefined) {
                                CoreLib.UIUtil.setPositionY(this.gamelogo, this.gamelogo.configData.ly);
                            }
                        }
                    }
                }
            }
        }

    }

};
