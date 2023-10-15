import { coreClassUtil } from "../../../../../../slot_core/corelib/core/CoreClassUtil";
import { slotModel } from "../../../../../../slot_core/corelib/models/SlotModel";
import { GameSlotMachine } from "./views/comp/GameSlotMachine";
import { GameSplashComp } from './views/comp/GameSplashComp'
import { GameBigWinComp } from './views/comp/GameBigWinComp'
import { GameSlotMachineComp } from "./views/comp/GameSlotMachineComp";
import { ThreeDragonPrizeTable } from "./views/comp/ThreeDragonPrizeTable";
import { PaytablePageV2 } from "./views/comp/PaytablePageV2";
import { SlotSpinWinAnimAmountNoDispatchComp } from "../../../../../../slot_core/corelib/views/comps/SlotSpinWinAnimAmountNoDispatchComp";

class GameUtil {
    constructor() {
    }
    getGameClass(string, config) {
        let element = null;
        switch (string) {
            case "GameSlotMachine":
                element = new GameSlotMachine(config);
                break;
            case "ThreeDragonPrizeTable":
                element = new ThreeDragonPrizeTable(config);
                break;
            case "GameSplashComp":
                element = new GameSplashComp(config);
                break;
            case "GameBigWinComp":
                element = new GameBigWinComp(config);
                break;
            case "GameSlotMachineComp":
                element = new GameSlotMachineComp(config);
                break;
            case "PaytablePageV2":
                element = new PaytablePageV2(config);
                break;
            case "SlotSpinWinAnimAmountNoDispatchComp":
                element = new SlotSpinWinAnimAmountNoDispatchComp(config);
                break;
            default:
                break;
        }
        if (!element) {
            element = coreClassUtil.getGameClass(string, config);
        }
        return element;
    }
    getReelView(index) {
        let reelview = slotModel.getReelsView();
        return reelview[index];
    }
}
export const gameUtil = new GameUtil();
