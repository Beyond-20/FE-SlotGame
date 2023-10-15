import { Application } from "../../../../../../slot_core/corelib/core/Application";
import { CoreLib } from "../../../../../../slot_core/corelib/core/CoreLib";
import { WrapperService } from "../../../../../../slot_core/platform/WrapperService";
import { UIUtil } from "../../../../../../slot_core/corelib/pixiwrapper/UIUtilService";

import { SlotGameView } from "../../../../../../slot_core/corelib/views/layoutcomps/SlotGameView";

import { gameUtil } from "./GameUtil";
import { GAME_CONFIG } from "./config/GameConfig";
import { GAME_LOAD_CONFIG } from "./config/LoadConfig";
import { GAME_SOUND_CONFIG } from "./config/SoundLoadConfig";
import { GAME_PRELOADER_CONFIG } from "./config/views/GamePreloaderConfig";
import { GameSoundManager } from "./sound/GameSoundManager";

import { PreloaderView } from "../../../../../../slot_core/corelib/views/layoutcomps/PreloaderView";
import { SLOT_GAMEVIEW_CONFIG } from "./config/views/SlotGameViewConfig";
import { spinController } from "../../../../../../slot_core/corelib/views/slotmachine/SpinControllerStandard";
import { spinWinController } from "../../../../../../slot_core/corelib/views/slotmachine/SpinWinControllerStandard";
import { GameView } from "./views/GameView";
import { slotModel } from "../../../../../../slot_core/corelib/models/SlotModel";


const reelPositionMap = [
    { "reel": 0, "row": 0 },
    { "reel": 1, "row": 0 },
    { "reel": 2, "row": 0 },
    { "reel": 3, "row": 0 },
    { "reel": 4, "row": 0 },
    { "reel": 0, "row": 1 },
    { "reel": 1, "row": 1 },
    { "reel": 2, "row": 1 },
    { "reel": 3, "row": 1 },
    { "reel": 4, "row": 1 },
    { "reel": 0, "row": 2 },
    { "reel": 1, "row": 2 },
    { "reel": 2, "row": 2 },
    { "reel": 3, "row": 2 },
    { "reel": 4, "row": 2 },
]


export class GameApp extends Application {
    constructor() {
        CoreLib.WrapperService = WrapperService;
        UIUtil.setGameUtil(gameUtil);
        CoreLib.gameUtil = gameUtil;
        super(GAME_CONFIG, GAME_LOAD_CONFIG, GAME_SOUND_CONFIG);
    }

    showPreloader() {
        let preloader = new PreloaderView(GAME_PRELOADER_CONFIG);
        super.createViewComponent(preloader, "preloader");
    }

    createBasicGameView() {
        let depthIndex = 0;
        this.baseGameViewCreated = true;
        this.onBaseGameViewCreated();
    }

    createGameView() {
        let gsManager = new GameSoundManager(GAME_SOUND_CONFIG);
        let gameView = super.createViewComponent(new GameView(SLOT_GAMEVIEW_CONFIG), "gameview");
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SET_SPIN_CONTROLLER, spinController);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SET_WIN_CONTROLLER, spinWinController);

        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.LANDING_SYMBOL_ANIMATION, this.onSymbolLanding.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.CLEAR_GAME_FOR_SPIN, this.resetSpinVariables.bind(this));
        this.onGameViewCreated();

    }
    resetSpinVariables() {
        this.landingArray = [];
    }

    onSymbolLanding(landingObj) {
        if (CoreLib.Model.GameConfig.isTurboOn) {
            if (landingObj.reelno == 4 || landingObj.reelno == 5) {
            } else {
                if (this.landingArray.length == 0) {
                    CoreLib.EventHandler.dispatchEvent("PLAY_LANDING_SEQUENCE_SOUND", this.landingArray.length + 1);
                    this.landingArray.push(landingObj.reelno);
                }
            }

        } else {
            if (landingObj.reelno == 4 || landingObj.reelno == 5) {
                if (this.landingArray.length > 0) {
                    CoreLib.EventHandler.dispatchEvent("PLAY_LANDING_SEQUENCE_SOUND", this.landingArray.length + 1);
                    this.landingArray.push(landingObj.reelno);
                }
            } else {
                CoreLib.EventHandler.dispatchEvent("PLAY_LANDING_SEQUENCE_SOUND", this.landingArray.length + 1);
                this.landingArray.push(landingObj.reelno);
            }

        }

    }

    showBonusTriggerEnterPopup() {
        if (slotModel.getFeatureType() == CoreLib.Model.GameConfig.featureTypes.pickbonus) {
            let msgObj = {};
            msgObj.title = CoreLib.Util.getContent("congratText");
            msgObj.message1 = CoreLib.Util.getContent("enteringText");
            msgObj.message2 = CoreLib.Util.getContent("bonusgameText");
            msgObj.callbankFunc = this.onBonusEnterDoneClicked.bind(this);
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_MESSAGE_POPUP, msgObj);
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.INITIATE_BONUS_ROUND);
            CoreLib.EventHandler.dispatchEvent("START_BONUS_SELECTION_BG_MUSIC");
        } else if (slotModel.getFeatureType() == CoreLib.Model.GameConfig.featureTypes.freespins) {
            let data = slotModel.getFeatureData();
            let msgObj = {};
            msgObj.title = CoreLib.Util.getContent("congratText");
            msgObj.message1 = CoreLib.Util.getContent("youhavewonText");
            let arr = [data.totalCount];
            let str = CoreLib.Util.parseMessage(CoreLib.Util.getContent("numberOfFS"), arr);
            msgObj.message2 = str;
            msgObj.callbankFunc = this.onFSEntryDoneClicked.bind(this);
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_MESSAGE_POPUP, msgObj);
            CoreLib.EventHandler.dispatchEvent("START_FREESPIN_BG_MUSIC");
        } else if (slotModel.getFeatureType() == 2) {
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.TRIGGER_FEATURE);
        }
    }

    onBonusEnterDoneClicked() {
        this.triggerFeatureGameCore();
        CoreLib.EventHandler.dispatchEvent("EnableBonusButtons");
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.HIDE_MESSAGE_POPUP);
    }
    onFSEntryDoneClicked() {
        this.triggerFeatureGameCore();
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.HIDE_MESSAGE_POPUP);
        this.startFreespins();
    }

    triggerFeatureGame () {
        super.triggerFeatureGameCore();
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_DESKTOP_SETTINGS, false);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_BONUS_TRIGGERING_ANIM);
        setTimeout(this.stopTriggeringWin.bind(this), 2000);
        this.spinWinStateExited = true;
    }
}
