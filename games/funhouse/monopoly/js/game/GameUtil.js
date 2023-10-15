import { coreClassUtil } from "../../../../../../slot_core/corelib/core/CoreClassUtil";
import { slotModel } from "../../../../../../slot_core/corelib/models/SlotModel";
import { GameSlotMachine } from "./views/comp/GameSlotMachine";
import { BonusGameBottom } from "./views/comp/BonusGameBottom";
import { BonusGameTop } from "./views/comp/BonusGameTop";
import { GameSlotMachineComp } from './views/comp/GameSlotMachineComp'
import { GameSplashComp } from './views/comp/GameSplashComp'
import { GameBigWinComp } from './views/comp/GameBigWinComp'
import { PaytablePageV2 } from "./views/comp/PaytablePageV2";
import { SlotWinAmountSequentialSpineCompV2 } from "./views/comp/SlotWinAmountSequentialSpineCompV2";
import { SlotWinAmountSpineCompV2 } from "./views/comp/SlotWinAmountSpineCompv2";
import { DiceRotatingComp } from "./views/comp/DiceRotatingComp";
import { PreMegaBoardScreenComp } from "./views/comp/PreMegaBoardScreenComp";
import { PostMegaBoardScreenComp } from "./views/comp/PostMegaBoardScreenComp";
import { WinningBoxRotatingComp } from "./views/comp/WinningBoxRotatingComp";
import { HighlightElementsComp } from "./views/comp/HighlightElementsComp";
import { RTGameBGComp } from "./views/comp/RTGameBGComp";
import { GameResizeComp } from "./views/comp/GameResizeComp";
import { BonusGame } from "./views/comp/BonusGame";
import { BonusView } from "./views/comp/BonusView";
import { PostMegaBoardWinningPopupComp } from "./views/comp/PostMegaBoardWinningPopupComp";
import { YellowCrossPurplePopupComp } from "./views/comp/YellowCrossPurplePopupComp";
import { NoPortraitView } from "../../../../../../slot_core/corelib/views/containers/NoPortraitView";

class GameUtil {
    constructor() {
    }
    getGameClass(string, config) {
        let element = null;
        switch (string) {
            case "GameSlotMachine":
                element = new GameSlotMachine(config);
                break;
            case "GameSlotMachineComp":
                element = new GameSlotMachineComp(config);
                break;
            case "BonusGame":
                element = new BonusGame(config);
                break;
            case "BonusGameTop":
                element = new BonusGameTop(config);
                break;
            case "BonusGameBottom":
                element = new BonusGameBottom(config);
                break;
            case "GameSplashComp":
                element = new GameSplashComp(config);
                break;
            case "GameBigWinComp":
                element = new GameBigWinComp(config);
                break;
            case "PaytablePageV2":
                element = new PaytablePageV2(config);
                break;
            case "SlotWinAmountSequentialSpineCompV2":
                element = new SlotWinAmountSequentialSpineCompV2(config);
                break;
            case "SlotWinAmountSpineCompV2":
                element = new SlotWinAmountSpineCompV2(config);
                break;
            case "DiceRotatingComp":
                element = new DiceRotatingComp(config);
                break;
            case "PreMegaBoardScreenComp":
                element = new PreMegaBoardScreenComp(config);
                break;
            case "PostMegaBoardScreenComp":
                element = new PostMegaBoardScreenComp(config);
                break;
            case "WinningBoxRotatingComp":
                element = new WinningBoxRotatingComp(config);
                break;
            case "HighlightElementsComp":
                element = new HighlightElementsComp(config);
                break;
            case "RTGameBGComp":
                element = new RTGameBGComp(config);
                break;
            case "GameResizeComp":
                element = new GameResizeComp(config);
                break;
            case "BonusView":
                element = new BonusView(config);
                break;
            case "PostMegaBoardWinningPopupComp":
                element = new PostMegaBoardWinningPopupComp(config);
                break;
            case "YellowCrossPurplePopupComp":
                element = new YellowCrossPurplePopupComp(config);
                break;
            case "NoPortraitView":
                element = new NoPortraitView(config);
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
    getPreWinReelsView(index) {
        let preWinReelView = slotModel.getPreWinReelsView();
        return preWinReelView[index];
    }
    getPreRespinReelsView(index){
        let preRespinReelView = slotModel.getPreRespinReelsView();
        return preRespinReelView[index];
    }
}
export const gameUtil = new GameUtil();
