import { coreClassUtil } from "../../../../../../slot_core/corelib/core/CoreClassUtil";
import { slotModel } from "../../../../../../slot_core/corelib/models/SlotModel";
import { GameSlotMachine } from "./views/comp/GameSlotMachine";
import { GameSplashComp } from './views/comp/GameSplashComp'
import { GameBigWinComp } from './views/comp/GameBigWinComp'
import { GameSlotMachineComp } from "./views/comp/GameSlotMachineComp";
import { CoinFallAnimationPinata } from "./views/comp/CoinFallAnimationPinata";
import { PaytablePageV2 } from "./views/comp/PaytablePageV2";
import { SoldierAnimComp } from "./views/comp/SoldierAnimComp";
import { GameReelFrameComp } from "./views/comp/GameReelFrameComp";
import { PopupCompV2 } from "./views/comp/PopupCompV2";
import { SlotSpinWinAnimAmountCompV2 } from "./views/comp/SlotSpinWinAnimAmountCompV2";
import { FSPopupComp } from "./views/comp/FSPopupComp";
import { RoyalSymbComp } from "./views/comp/RoyalSymbComp";

class GameUtil {
    constructor() {
    }
    getGameClass(string, config) {
        let element = null;
        switch (string) {
            case "GameSlotMachine":
                element = new GameSlotMachine(config);
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
            case "CoinFallAnimationPinata":
                element = new CoinFallAnimationPinata(config);
                break;
            case "PaytablePageV2":
                element = new PaytablePageV2(config);
                break;
            case "SoldierAnimComp":
                element = new SoldierAnimComp(config);
                break;
            case "GameReelFrameComp":
                element = new GameReelFrameComp(config);
                break;
            case "PopupCompV2":
                element = new PopupCompV2(config);
                break;
            case "SlotSpinWinAnimAmountCompV2":
                element = new SlotSpinWinAnimAmountCompV2(config);
                break;
            case "FSPopupComp":
                element = new FSPopupComp(config);
                break;
            case "RoyalSymbComp":
                element = new RoyalSymbComp(config);
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
