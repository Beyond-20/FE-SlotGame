import {Application} from "../../../../../../slot_core/corelib/core/Application";
import {CoreLib} from "../../../../../../slot_core/corelib/core/CoreLib";
import {WrapperService} from "../../../../../../slot_core/platform/WrapperService";
import {UIUtil} from "../../../../../../slot_core/corelib/pixiwrapper/UIUtilService";

import {SlotGameView} from "../../../../../../slot_core/corelib/views/layoutcomps/SlotGameView";

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
import {PandaGameView} from "./views/PandaGameView";


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
        let gameView = super.createViewComponent(new PandaGameView(SLOT_GAMEVIEW_CONFIG), "gameview");
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SET_SPIN_CONTROLLER, spinController);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SET_WIN_CONTROLLER, spinWinController);
        this.onGameViewCreated();

    }


}
