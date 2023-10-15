import {coreClassUtil} from "../../../../../../slot_core/corelib/core/CoreClassUtil";
import {slotModel} from "../../../../../../slot_core/corelib/models/SlotModel";
import {GameSlotMachine} from "./views/comp/GameSlotMachine";
import {BonusGame} from "./views/comp/BonusGame";
import { GameSplashComp } from './views/comp/GameSplashComp'
import { FaFSReelTransition } from './views/comp/FaFSReelTransition'
import { FaBatIcons } from './views/comp/FaBatIcons'
import { CoinShowerAnims } from './views/comp/CoinShowerAnims'
import { BGFireworksComp } from './views/comp/BGFireworksComp'
import { FaFaFaGameBG } from './views/comp/FaFaFaGameBG'
import { FaFaFaSlotMachineComp } from './views/comp/FaFaFaSlotMachineComp'
import { BuyBonusButton } from './views/comp/BuyBonusButton'
import { GameBigWinComp } from './views/comp/GameBigWinComp'


class GameUtil {
    constructor() {
    }
    getGameClass (string, config) {
        let element = null;
        switch (string) {
            case "GameSlotMachine" :
                element = new GameSlotMachine(config);
                break;
            case "BonusGame" :
                element = new BonusGame(config);
                break;
            case "GameSplashComp" :
                element = new GameSplashComp(config);
                break;
            case "FaFSReelTransition" :
                element = new FaFSReelTransition(config);
                break;
            case "FaBatIcons" :
                element = new FaBatIcons(config);
                break;
            case "CoinShowerAnims" :
                element = new CoinShowerAnims(config);
                break;
            case "BGFireworksComp" :
                element = new BGFireworksComp(config);
                break;
            case "FaFaFaGameBG" :
                element = new FaFaFaGameBG(config);
                break;
            case "FaFaFaSlotMachineComp" :
                element = new FaFaFaSlotMachineComp(config);
                break;
            case "BuyBonusButton" :
                element = new BuyBonusButton(config);
                break;
            case "GameBigWinComp" :
                element = new GameBigWinComp(config);
                break;
            default :
                break;
        }
        if (!element) {
            element = coreClassUtil.getGameClass(string, config);
        }
        return element;
    }
    getReelView (index) {
        let reelview;
        if (slotModel.getSlotGameResult().featureFWReelNumbers && slotModel.getSlotGameResult().featureFWReelNumbers.length > 0) {
            reelview = slotModel.getSlotGameResult().preFWReelView;
        } else {
            reelview = slotModel.getReelsView();
        }
        return reelview[index];
    }
}
export const gameUtil = new GameUtil();
