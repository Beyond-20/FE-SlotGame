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
import { spinControllerSL } from "../../../../../../slot_core/corelib/views/slotmachine/SpinControllerSingleLine";
import { GameView } from "./views/GameView";
import { slotModel } from "../../../../../../slot_core/corelib/models/SlotModel";
import { Util } from "../../../../../../slot_core/corelib/pixiwrapper/UtilService";
import { spinWinControllerOneByOne } from "../../../../../../slot_core/corelib/views/slotmachine/SpinWinControllerOneByOne";
import { soundFactory } from "../../../../../../slot_core/corelib/sound/SoundFactory";

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
        this.toggleSpinButtonCheck = true;
        this.toggleSpinWin = true;
        this.spinSoundPlaying = false;
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
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SET_SPIN_CONTROLLER, spinControllerSL);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SET_WIN_CONTROLLER, spinWinControllerOneByOne);
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.SPIN_CLICKED, this.stopRespinReelView.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.UPDATE_AUTOSPIN_COUNT, this.stopRespinReelView.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.SHOW_SLOT_BIG_WIN, this.stopSpinMusicOnBigWins.bind(this));
        CoreLib.EventHandler.addEventListener("STOP_BIG_WIN_COUNTUP", this.playSpinSoundOnBigWinEnd.bind(this));
        this.onGameViewCreated();

    }
    checkToExitSpinWin() {
        let win = slotModel.getTotalWin();
        if ((this.spinWinSymbolDone || win === 0) && this.spinWinAmountDone) {
            this.exitSpinWinState();
        }
    }

    checkMatchElementsOfReel() {
        const arrayOfArrays = [[["H1"], ["H1"], ["WW"]], [["H1"], ["WW"], ["H1"]], [["WW"], ["H1"], ["H1"]], [["WW"], ["H1"], ["WW"]], [["WW"], ["WW"], ["H1"]], [["H1"], ["WW"], ["WW"]],
        [["M1"], ["M1"], ["WW"]], [["M1"], ["WW"], ["M1"]], [["WW"], ["M1"], ["M1"]], [["WW"], ["M1"], ["WW"]], [["WW"], ["WW"], ["M1"]], [["M1"], ["WW"], ["WW"]],
        [["L1"], ["L1"], ["WW"]], [["L1"], ["WW"], ["L1"]], [["WW"], ["L1"], ["L1"]], [["WW"], ["L1"], ["WW"]], [["WW"], ["WW"], ["L1"]], [["L1"], ["WW"], ["WW"]],
        [["WW"], ["WW"], ["WW"]], [["H1"], ["H1"], ["H1"]], [["M1"], ["M1"], ["M1"]], [["L1"], ["L1"], ["L1"]]];
        const arrayToMatch = slotModel.getSlotGameResult().reelView;
        let found = false;
        arrayOfArrays.some((subArray) => {
            if (subArray.length === arrayToMatch.length) {
                let match = true;
                for (let i = 0; i < subArray.length; i++) {
                    for (let j = 0; j < subArray[i].length; j++) {
                        if (subArray[i][j] !== arrayToMatch[i][j]) {
                            match = false;
                            break;
                        }
                    }
                    if (!match) {
                        break;
                    }
                }
                if (match) {
                    found = true;
                    CoreLib.EventHandler.dispatchEvent("PLAY_3OAK_SOUND");
                    this.stopBellSound();
                    return true;
                }
            }
        });
    }

    stopBellSound() {
        CoreLib.EventHandler.dispatchEvent("STOP_3OAK_SOUND");
    }

    onPreWinFeatureCompleted() {
        if (slotModel.getSlotGameResult() !== null && slotModel.getSlotGameResult().preRespinReelView && slotModel.getSlotGameResult().preRespinReelView[0].length > 0 && this.toggleSpinWin) {
            this.checkForFeatureGame();
        } else if (slotModel.getSlotGameResult().wildMultiplier !== null && slotModel.getSlotGameResult().spinWin > 0) {
            let value = slotModel.getSlotGameResult().wildMultiplier;
            CoreLib.EventHandler.dispatchEvent("PLAY_WILD_MULTIPLIER_ANIMATION", value);
            // this.checkToActivateGame();
        } else if (slotModel.getSpinWin() > 0 || slotModel.isFeatureTriggerPositionsAvailable()) {
            slotModel.setAutoPlayWin(slotModel.getTotalWin());
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.ENTER_SPINWIN_STATE);
            this.checkToActivateGame();
        } else {
            this.exitSpinWinState();
        }
    }
    checkForFeatureGame() {
        if (slotModel.isFeatureTriggered()) {
            slotModel.setAutoFeatureTriggered();
            if (slotModel.getIsFreespinSession()) {
                this.checkForNextFreespin();
            } else {
                this.triggerFeatureGame();
            }
        }
        else if (slotModel.getSlotGameResult() !== null && slotModel.getSlotGameResult().preRespinReelView && slotModel.getSlotGameResult().preRespinReelView[0].length > 0 && this.toggleSpinButtonCheck) {
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.DISABLE_ALL_BUTTONS);
            this.triggerFeatureGame();
        } else {
            if (slotModel.getIsFreespinSession()) {
                this.endFreeSpinSession();
                return;
            }
            this.checkForAutoSpin();
        }
    }

    triggerFeatureGame() {
        // can be overwritten in game level
        if (this.count !== this.value) {
            this.startBlankRespinFeature();
        }
        else {
            this.toggleSpinWin = false;
            this.triggerFeatureGameCore();
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_DESKTOP_SETTINGS, false);
            CoreLib.EventHandler.dispatchEvent("SHOW_RESPIN_TRIGGER");
            this.toggleSpinButtonCheck = false;
        }
        this.count++;
    }

    onSpinClicked(isUserClicked = true) {
        CoreLib.EventHandler.dispatchEvent("CLEAR_TIMEOUT_AND_KILL_TWEENS");
        clearTimeout(this.clearTimeout)
        if (!this.isUserInteracted) {
            this.loadSoundForIOSNow();
        }
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isIOSDevice) {
                if (isUserClicked) {
                    this.doFullScreen();
                }
            } else {
                this.doFullScreen();
            }
        }
        if (slotModel.getBalance() >= slotModel.getTotalBet()) {
            this.spinWinSymbolDone = false;
            this.spinWinAmountDone = false;
            CoreLib.Model.GameConfig.lineWinIndex = 0;
            this.cleanUpGame(true);
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.CLEAR_GAME_FOR_SPIN);
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.DISABLE_ALL_BUTTONS);
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.START_SLOT_SPIN);
            slotModel.clearFeatureData();
            this.scatterCheck = false;
            clearTimeout(this.pauseTimeoutId);
            CoreLib.WrapperService.requestSpinResult(false);
            if (this.spinSoundPlaying == false) {
                soundFactory.playSound({ name: "spin music full song", loop: true });
                this.spinSoundPlaying = true;
            } else {
                if (slotModel.getIsAutoSession() && (CoreLib.Model.GameConfig.isTurboOn == false || CoreLib.Model.GameConfig.isTurboOn == true)) {
                } else {
                    soundFactory.resumeSound({ name: "spin music full song", loop: true, isSeek: true });
                }
            }
        } else {
            this.showLowBalanceError();
        }
    }

    onReelSpinCompleted() {
        super.onReelSpinCompleted();
        this.checkMatchElementsOfReel();
        if (slotModel.getIsAutoSession() && (CoreLib.Model.GameConfig.isTurboOn == false || CoreLib.Model.GameConfig.isTurboOn == true)) {
        } else {
            this.pauseTimeoutId = setTimeout(soundFactory.stopSound({ name: "spin music full song", loop: true }), 200);
        }
    }

    startAutoSpin() {
        super.startAutoSpin();
        soundFactory.playSound({ name: "spin music full song", loop: true });
    }

    onAutoStopClicked() {
        slotModel.resetAutoplayData();
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.UPDATE_UI_FOR_AUTOSPIN_END);
        this.pauseTimeoutId = setTimeout(soundFactory.stopSound({ name: "spin music full song", loop: true }), 200);
    }

    endAutospin() {
        super.endAutospin();
        this.pauseTimeoutId = setTimeout(soundFactory.stopSound({ name: "spin music full song", loop: true }), 200);
    }

    stopSpinMusicOnBigWins() {
        if (slotModel.getIsAutoSession() && (CoreLib.Model.GameConfig.isTurboOn == false || CoreLib.Model.GameConfig.isTurboOn == true)) {
            if (this.spinSoundPlaying == true) {
                this.pauseTimeoutId = setTimeout(soundFactory.stopSound({ name: "spin music full song", loop: true }), 200);
                this.spinSoundPlaying = false;
            }
        }
    }

    playSpinSoundOnBigWinEnd() {
        if (slotModel.getIsAutoSession() && (CoreLib.Model.GameConfig.isTurboOn == false || CoreLib.Model.GameConfig.isTurboOn == true)) {
            if (this.spinSoundPlaying == false) {
                soundFactory.playSound({ name: "spin music full song", loop: true });
                this.spinSoundPlaying = true;
            }
        }
    }

    startStoppingReels() {
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.START_STOPPING_REELS);
        if (slotModel.getSlotGameResult().preRespinReelView && slotModel.getSlotGameResult().preRespinReelView[0].length > 0) {
            this.actualReelView = Util.cloneArray(slotModel.getReelsView());
            slotModel.getSlotGameResult().reelView = slotModel.getSlotGameResult().preRespinReelView;
        }
    }
    startBlankRespinFeature() {
        let preReelView = slotModel.getSlotGameResult().preRespinReelView;
        let reelNo = -1;
        for (let i = 0; i < preReelView.length; i++) {
            for (let j = 0; j < preReelView[i].length; j++) {
                if (preReelView[i][j] === "BL") {
                    reelNo = i;
                }
            }

        }
        CoreLib.EventHandler.dispatchEvent("PLAY_ANTICIPATION_ANIMATION_FOR_RESPIN", reelNo);
        if (this.count == 0) {
            CoreLib.EventHandler.dispatchEvent("PLAY_RESPIN_ANTICIPATION_RISE1_SOUND");
        }
        if (this.count == 1) {
            CoreLib.EventHandler.dispatchEvent("PLAY_RESPIN_ANTICIPATION_RISE2_SOUND");
        }
        if (this.count >= 2) {
            CoreLib.EventHandler.dispatchEvent("PLAY_RESPIN_ANTICIPATION_RISE3_SOUND");
        }
        CoreLib.EventHandler.dispatchEvent("START_INDIVIDUAL_REELSPIN", reelNo);
        this.clearTimeout = setTimeout(() => {
            CoreLib.EventHandler.dispatchEvent("STOP_INDIVIDUAL_BLANK_REELSPIN", reelNo);
            CoreLib.EventHandler.dispatchEvent("STOP_ANTICIPATION_ANIMATION_FOR_RESPIN");
            CoreLib.EventHandler.dispatchEvent("PLAY_RESPIN_ANTICIPATION_END_SOUND");
        }, 2000);
    }

    stopRespinReelView() {
        this.count = 0;
        this.value = Math.floor(Math.random() * 4 + 2);
        this.toggleSpinButtonCheck = true;
        this.toggleSpinWin = true;
    }


}
