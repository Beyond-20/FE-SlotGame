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
import {spinControllerSL} from "../../../../../../slot_core/corelib/views/slotmachine/SpinControllerSingleLine";
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
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SET_SPIN_CONTROLLER, spinControllerSL);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SET_WIN_CONTROLLER, spinWinController);



        this.onGameViewCreated();

    }

    triggerFeatureGame () {
        // can be overwritten in game level
        this.triggerFeatureGameCore();
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_DESKTOP_SETTINGS, false);
        CoreLib.EventHandler.dispatchEvent("SHOW_RESPIN_TRIGGER");
    }



}
