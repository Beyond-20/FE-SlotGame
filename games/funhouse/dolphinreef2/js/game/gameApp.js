import { Application } from "../../../../../../slot_core/corelib/core/Application";
import { CoreLib } from "../../../../../../slot_core/corelib/core/CoreLib";
import { WrapperService } from "../../../../../../slot_core/platform/WrapperService";
import { UIUtil } from "../../../../../../slot_core/corelib/pixiwrapper/UIUtilService";
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
        CoreLib.EventHandler.addEventListener("WILD_EXPANSION_ANIM_DONE", this.onWildExpansionAnimationDone.bind(this));
        CoreLib.EventHandler.addEventListener("CONVERT_POSITION_OF_SCATTER", this.convertScatterPos.bind(this));
        this.onGameViewCreated();
    }

    onPreWinFeatureCompleted() {
        if (slotModel.getSlotGameResult().scatterMultiplier > 1 && slotModel.getSlotGameResult().spinWin > 0 && slotModel.getSlotGameResult().scatterPositions.length > 0) {
            let convertedPos = this.convertPosition(slotModel.getSlotGameResult().scatterPositions);
            CoreLib.EventHandler.dispatchEvent("PLAY_CHEST_OPEN_SOUND");
            CoreLib.EventHandler.dispatchEvent("SHOW_SCATTER_MULTIPLIER", convertedPos)
            // this.checkToActivateGame();
        } else if (slotModel.getIsFreespinSession == true) {
            let fsResult = slotModel.getFeatureData();
            let index = fsResult[0].spinResults.length - 1;
            let spinresult = fsResult[0].spinResults[index];
            let fsScatterPos = spinresult.scatterPositions;
            let fsScatterMulti = spinresult.scatterMultiplier;
            if (fsScatterPos.length > 0 && fsScatterMulti > 1) {
                let convertedPos = this.convertPosition(fsScatterPos);
                if (convertedPos.length > 0) {
                    CoreLib.EventHandler.dispatchEvent("PLAY_CHEST_OPEN_SOUND");
                    CoreLib.EventHandler.dispatchEvent("SHOW_SCATTER_MULTIPLIER", convertedPos);
                }
            }
        } else if (slotModel.getSpinWin() > 0 || slotModel.isFeatureTriggerPositionsAvailable()) {
            slotModel.setAutoPlayWin(slotModel.getTotalWin());
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.ENTER_SPINWIN_STATE);
            this.checkToActivateGame();
        } else {
            this.exitSpinWinState();
        }
    }

    convertScatterPos(pos) {
        let scatterPos = this.convertPosition(pos);
        CoreLib.EventHandler.dispatchEvent("CONVERTED_SCATTER_POSITIONS", scatterPos);
    }

    convertPosition(arr) {
        let result = [];
        let len = arr.length;
        for (let k = 0; k < len; k++) {
            result.push(reelPositionMap[arr[k]]);
        }
        return result;
    }
    // ------------ new
    triggerFeatureGame () {
        this.triggerFeatureGameCore();
        CoreLib.EventHandler.dispatchEvent("SHOW_WILD_EXPANSION_ANIM");
    }

    onWildExpansionAnimationDone() {
        let fsResult = slotModel.getFeatureData();
        if (fsResult.currentCount < fsResult.totalCount) {
            if (slotModel.getFeatureType() == CoreLib.Model.GameConfig.featureTypes.freespins) {
                this.startFreespins();
            }
        }
    }

    endFreeSpinSession() {
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

    endFreespinRoundFromPopup() {
        super.endFreespinRoundFromPopup();
        slotModel.featureResult = null;
        CoreLib.EventHandler.dispatchEvent("STOP_STACKED_WILD_ANIM");
    } 
}
