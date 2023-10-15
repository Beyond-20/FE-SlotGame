import {Application} from "../../../../../../slot_core/corelib/core/Application";
import {CoreLib} from "../../../../../../slot_core/corelib/core/CoreLib";
import {WrapperService} from "../../../../../../slot_core/platform/WrapperService";
import {UIUtil} from "../../../../../../slot_core/corelib/pixiwrapper/UIUtilService";


import {gameUtil} from "./GameUtil";
import {GAME_CONFIG} from "./config/GameConfig";
import {GAME_LOAD_CONFIG} from "./config/LoadConfig";
import {GAME_SOUND_CONFIG} from "./config/SoundLoadConfig";
import {GAME_PRELOADER_CONFIG} from "./config/views/GamePreloaderConfig";
import {GameSoundManager} from "./sound/GameSoundManager";

import {PreloaderView} from "../../../../../../slot_core/corelib/views/layoutcomps/PreloaderView";
import {SLOT_GAMEVIEW_CONFIG} from "./config/views/SlotGameViewConfig";
import {spinController} from "../../../../../../slot_core/corelib/views/slotmachine/SpinControllerStandard";
import {spinWinController} from "../../../../../../slot_core/corelib/views/slotmachine/SpinWinControllerStandard";
import {GameView} from "./views/GameView";
import {slotModel} from "../../../../../../slot_core/corelib/models/SlotModel";


const reelPositionMap = [
    {"reel": 0,"row": 0},
    {"reel": 1,"row": 0},
    {"reel": 2,"row": 0},
    {"reel": 3,"row": 0},
    {"reel": 4,"row": 0},
    {"reel": 0,"row": 1},
    {"reel": 1,"row": 1},
    {"reel": 2,"row": 1},
    {"reel": 3,"row": 1},
    {"reel": 4,"row": 1},
    {"reel": 0,"row": 2},
    {"reel": 1,"row": 2},
    {"reel": 2,"row": 2},
    {"reel": 3,"row": 2},
    {"reel": 4,"row": 2},
]

export class GameApp extends Application {
    constructor() {
        CoreLib.WrapperService = WrapperService;
        UIUtil.setGameUtil(gameUtil);
        CoreLib.gameUtil = gameUtil;
        super(GAME_CONFIG, GAME_LOAD_CONFIG, GAME_SOUND_CONFIG);
    }

    showPreloader () {
        let preloader = new PreloaderView(GAME_PRELOADER_CONFIG);
        super.createViewComponent(preloader, "preloader");
    }

    createBasicGameView () {
        let depthIndex = 0;
        this.baseGameViewCreated = true;
        this.onBaseGameViewCreated();
    }

    createGameView () {
        let gsManager = new GameSoundManager(GAME_SOUND_CONFIG);
        let gameView = super.createViewComponent(new GameView(SLOT_GAMEVIEW_CONFIG), "gameview");
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SET_SPIN_CONTROLLER, spinController);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SET_WIN_CONTROLLER, spinWinController);
        this.onGameViewCreated();

    }

    showBonusTriggerEnterPopup() {
        if (slotModel.getFeatureType() == CoreLib.Model.GameConfig.featureTypes.bonusGame) {
            let msgObj = {};
            msgObj.title = CoreLib.Util.getContent("congratText");
            msgObj.message1 = CoreLib.Util.getContent("enteringText");
            msgObj.message2 = CoreLib.Util.getContent("bonusgameText");
            msgObj.callbankFunc = this.onBonusEnterDoneClicked.bind(this);
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_MESSAGE_POPUP, msgObj);
            msgObj.bgType = 1;
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.INITIATE_BONUS_ROUND);
            CoreLib.EventHandler.dispatchEvent("START_BONUS_SELECTION_BG_MUSIC");
        } else if (slotModel.getFeatureType() == CoreLib.Model.GameConfig.featureTypes.freespins) {
            this.startFreespins();
        } else if (slotModel.getFeatureType() == 2) {
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.TRIGGER_FEATURE);
        }
    }

    onBonusEnterDoneClicked () {
        CoreLib.EventHandler.dispatchEvent("EnableBonusButtons");
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.HIDE_MESSAGE_POPUP);
    }

    onSelectBonusOptionSelected (selection) {
        CoreLib.WrapperService.requestBonusData(slotModel.getFeatureType(), selection);
    }

    checkIfExist (arr, newpos) {
        let flag = false;
        let len = arr.length;
        if (len > 0) {
            for (let k = 0; k < len; k++) {
                if (arr[k].reel == newpos.reel && arr[k].row == newpos.row) {
                    flag = true;
                    break;
                }
            }
        }
        return flag;
    }

    checkPreWinFeature () {
        if (slotModel.getTotalWin() <= 0) {
            return false;
        }
        let reelsview = slotModel.getReelsView();
        let flag = false;
        let winLines = slotModel.getWinLines();
        let len = winLines.length;
        let arr = [];
        for (let k = 0; k < len; k++) {
            let positions = this.convertPosition(winLines[k].winningPosition);
            let len2 = positions.length;
            for (let i = 0; i < len2; i++) {
                if (reelsview[positions[i].reel][positions[i].row] == "WD") {
                    if (!this.checkIfExist(arr, positions[i])) {
                        arr.push(positions[i]);
                    }

                }
            }
        }
        if (arr.length > 0) {
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_CUSTOM_TRIGGERING_ANIM, arr);
            setTimeout(this.stopWildTriggerAnim.bind(this), 3000);
            return true;
        } else {
            return false;
        }

    }

    stopWildTriggerAnim () {
        CoreLib.EventHandler.dispatchEvent("STOP_WILD_SOUND");
        //CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.CLEAR_TRIGGERING_ANIM);
        this.onPreWinFeatureCompleted();
    }

    convertPosition (arr) {
        let result = [];
        let len = arr.length;
        for (let k = 0; k < len; k++) {
            result.push(reelPositionMap[arr[k]]);
        }
        return result;
    }

    endFreeSpinSession () {
        slotModel.setFreespinSession(false);
        let totalfswin = CoreLib.WrapperService.formatCurrency(slotModel.getTotalFreespinWin());
        let msgObj = {};
        msgObj.title = CoreLib.Util.getContent("congratText");
        msgObj.message1 = CoreLib.Util.getContent("freespinWinText1");
        msgObj.message3 = totalfswin;
        let str = CoreLib.Util.getContent("fromFSWinTxt");
        msgObj.message2 = str;
        msgObj.callbankFunc = this.endFreespinRoundFromPopup.bind(this);
        msgObj.bgType = 2;
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_MESSAGE_POPUP, msgObj);
    }

}
