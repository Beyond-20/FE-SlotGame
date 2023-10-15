import {Application} from "../../../../../../slot_core/corelib/core/Application";
import {CoreLib} from "../../../../../../slot_core/corelib/core/CoreLib";
import {WrapperService} from "../../../../../../slot_core/platform/WrapperService";
import {slotModel} from "../../../../../../slot_core/corelib/models/SlotModel";
import {soundFactory} from "../../../../../../slot_core/corelib/sound/SoundFactory";
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
import {spinControllerSpinning} from "../../../../../../slot_core/corelib/views/slotmachine/SpinControllerSpinningSymbol";
import {spinWinController} from "../../../../../../slot_core/corelib/views/slotmachine/SpinWinControllerStandard";
import { FaFaFaGameView, PandaGameView } from './views/FaFaFaGameView'


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
        let gameView = super.createViewComponent(new FaFaFaGameView(SLOT_GAMEVIEW_CONFIG), "gameview");
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SET_SPIN_CONTROLLER, spinControllerSpinning);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SET_WIN_CONTROLLER, spinWinController);
        this.onGameViewCreated();


    }
    createGameEvents () {
        CoreLib.EventHandler.addEventListener("DRAGON_TRANSITION_COMPLETED", this.onDragonTransitionDone.bind(this));
        CoreLib.EventHandler.addEventListener("BONUS_TRANSITIONS_COMPLETED", this.onBonusTransitionsDone.bind(this));
        CoreLib.EventHandler.addEventListener("BAT_TRANSITION_COMPLETED", this.onBatTransitionsDone.bind(this));
        CoreLib.EventHandler.addEventListener("COINSHOWER_TRANSITION_COMPLETED", this.onCoinShowerAnimCompleted.bind(this));
        CoreLib.EventHandler.addEventListener("BONUS_GAME_FULL_EXIT", this.onBonusGameFullExit.bind(this));
    }

    triggerFeatureGame () {
        super.triggerFeatureGameCore();
        CoreLib.EventHandler.dispatchEvent("HIDE_BUY_BONUS")
        if (slotModel.isUnfinishedGame()) {
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.REPLACE_REEL_SYMBOLS, "WDF");
            this.onBonusTransitionsDone();
            return;
        }
        CoreLib.EventHandler.dispatchEvent("PLAY_SCATTER_TRIGGER_DRAGONS");
        CoreLib.EventHandler.dispatchEvent("PLAY_FS_FIRST_INTRO");

    }
    onDragonTransitionDone () {
        CoreLib.EventHandler.dispatchEvent("PLAY_SCATTER_DRUM_SOUND")
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_DESKTOP_SETTINGS, false);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_BONUS_TRIGGERING_ANIM);
        setTimeout(this.stopTriggeringWinFaFaFa.bind(this), 2500);

    }
    stopTriggeringWinFaFaFa () {
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.CLEAR_TRIGGERING_ANIM);
        this.showBonusTriggerEnterPopup();
    }

    showBonusTriggerEnterPopup() {
        if (slotModel.getFeatureType() == CoreLib.Model.GameConfig.featureTypes.freespins) {
            let msgObj = {};
            msgObj.showBG = false;
            msgObj.title = CoreLib.Util.getContent("congratText");
            msgObj.message1 = CoreLib.Util.getContent("enteringText");
            msgObj.message2 = CoreLib.Util.getContent("bonusgameText");
            msgObj.callbankFunc = this.onBonusEnterDoneFafafaClicked.bind(this);
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_MESSAGE_POPUP, msgObj);

        }
    }
    onBonusEnterDoneFafafaClicked () {
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.HIDE_MESSAGE_POPUP);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.INITIATE_BONUS_ROUND);
    }
    onBonusTransitionsDone () {
        CoreLib.EventHandler.dispatchEvent("PLAY_BATICONS");
        CoreLib.EventHandler.dispatchEvent("PLAY_FS_BAT_ANIMATION_SOUND");
    }
    onBatTransitionsDone () {
        this.startFreespins();
    }

    checkPreWinFeature () {

        if (CoreLib.Model.GameConfig.expandedReels && CoreLib.Model.GameConfig.expandedReels.length > 0) {
            let positions = CoreLib.Model.GameConfig.expandedReels;
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_CUSTOM_BONUS_TRIGGERING_ANIM, positions);
            CoreLib.EventHandler.dispatchEvent("PLAY_MAINGAME_WILDEXPANSION_INTRO");
            setTimeout(this.playMGWildExpansionCoinFall.bind(this), 1800);
            return true;
        } else {
            return false;
        }

    }
    playMGWildExpansionCoinFall () {
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.CLEAR_TRIGGERING_ANIM);
        CoreLib.EventHandler.dispatchEvent("PLAY_EXPANDING_COINSHOWER", CoreLib.Model.GameConfig.expandedReels);
        CoreLib.EventHandler.dispatchEvent("PLAY_MAINGAME_WILDEXPANSION_COINFALL");
        let len = CoreLib.Model.GameConfig.expandedReels.length;
        if (len > 0) {

            for (let k = 0; k < len; k++) {
                let obj = {};
                obj.reelNumber = CoreLib.Model.GameConfig.expandedReels[k];
                obj.symbols = ["WDF", "WDF", "WDF", "WDF", "WDF"];
                slotModel.setReelViewForReel(obj.reelNumber, ["WDF", "WDF", "WDF"])
                setTimeout(this.replaceForMGWild.bind(this, obj), 500);

            }
        }
    }
    replaceForMGWild (obj) {
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.REPLACE_REEL_SYMBOLS_FOR_REEL, obj);
    }
    onCoinShowerAnimCompleted () {
        this.onPreWinFeatureCompleted();
    }
    checkFSExitGameLevel () {
        CoreLib.EventHandler.dispatchEvent("SHOW_FREE_SPINEXIT_FAFAFA")
        return false;
    }
    onBonusGameFullExit () {
        CoreLib.EventHandler.dispatchEvent("SHOW_BUY_BONUS");
        this.continueToMGAfterFS();
    }


}
