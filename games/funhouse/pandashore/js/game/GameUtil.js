import { coreClassUtil } from "../../../../../../slot_core/corelib/core/CoreClassUtil";
import { slotModel } from "../../../../../../slot_core/corelib/models/SlotModel";
import { GameSlotMachine } from "./views/comp/GameSlotMachine";
import { BonusGame } from "./views/comp/BonusGame";
import { PandaSlotMachineComp } from './views/comp/PandaSlotMachineComp'
import { GameSplashComp } from './views/comp/GameSplashComp'
import { GameBigWinComp } from './views/comp/GameBigWinComp'


class GameUtil {
    constructor() {
    }
    getGameClass(string, config) {
        let element = null;
        switch (string) {
            case "GameSlotMachine":
                element = new GameSlotMachine(config);
                break;
            case "PandaSlotMachineComp":
                element = new PandaSlotMachineComp(config);
                break;
            case "BonusGame":
                element = new BonusGame(config);
                break;
            case "GameSplashComp":
                element = new GameSplashComp(config);
                break;
            case "GameBigWinComp":
                element = new GameBigWinComp(config);
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
