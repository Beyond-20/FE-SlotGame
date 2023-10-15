import { coreClassUtil } from "../../../../../../slot_core/corelib/core/CoreClassUtil";
import { slotModel } from "../../../../../../slot_core/corelib/models/SlotModel";
import { GameSlotMachine } from "./views/comp/GameSlotMachine";
import { GameSplashComp } from './views/comp/GameSplashComp'
import { GameBigWinComp } from './views/comp/GameBigWinComp'
import { GameSlotMachineComp } from "./views/comp/GameSlotMachineComp";
import { CoinFallAnimationPinata } from "./views/comp/CoinFallAnimationPinata";
import { PaytablePageV2 } from "./views/comp/PaytablePageV2";
import { SlotSpinWinAnimAmountCompV2 } from "./views/comp/SlotSpinWinAnimAmountCompV2";
import { SlotPanelCompV2 } from "./views/comp/SlotPanelCompV2";
import { BalanceCompV2 } from "./views/comp/BalanceCompV2";
import { FSPanelWinCompV2 } from "./views/comp/FSPanelWinCompV2";
import { PanelWinCompV2 } from "./views/comp/PanelWinCompV2";
import { StakeCompV2 } from "./views/comp/StakeCompV2";
import { SpinButtonV2 } from "./views/comp/SpinButtonV2";
import { PopupCompV2 } from "./views/comp/PopupCompV2";


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
            case "SlotSpinWinAnimAmountCompV2":
                element = new SlotSpinWinAnimAmountCompV2(config);
                break;
            case "SlotPanelCompV2":
                element = new SlotPanelCompV2(config);
                break;
            case "BalanceCompV2":
                element = new BalanceCompV2(config);
                break;
            case "FSPanelWinCompV2":
                element = new FSPanelWinCompV2(config);
                break;
            case "PanelWinCompV2":
                element = new PanelWinCompV2(config);
                break;
            case "StakeCompV2":
                element = new StakeCompV2(config);
                break;
            case "SpinButtonV2":
                element = new SpinButtonV2(config);
                break;
            case "PopupCompV2":
                element = new PopupCompV2(config);
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
