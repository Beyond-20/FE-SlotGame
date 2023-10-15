import { Application } from "../../../../../../slot_core/corelib/core/Application";
import { CoreLib } from "../../../../../../slot_core/corelib/core/CoreLib";
import { WrapperService } from "../../../../../../slot_core/platform/WrapperService";
import { UIUtil } from "../../../../../../slot_core/corelib/pixiwrapper/UIUtilService";
import { Util } from "../../../../../../slot_core/corelib/pixiwrapper/UtilService";
import { gameUtil } from "./GameUtil";
import { GAME_CONFIG } from "./config/GameConfig";
import { GAME_LOAD_CONFIG } from "./config/LoadConfig";
import { GAME_SOUND_CONFIG } from "./config/SoundLoadConfig";
import { GAME_PRELOADER_CONFIG } from "./config/views/GamePreloaderConfig";
import { GameSoundManager } from "./sound/GameSoundManager";
import { PreloaderView } from "../../../../../../slot_core/corelib/views/layoutcomps/PreloaderView";
import { SLOT_GAMEVIEW_CONFIG } from "./config/views/SlotGameViewConfig";
import { spinControllerStrip } from "../../../../../../slot_core/corelib/views/slotmachine/SpinControllerSingleStripStandard";
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
let redDiceFlag = false;

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
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SET_SPIN_CONTROLLER, spinControllerStrip);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SET_WIN_CONTROLLER, spinWinController);

        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.LANDING_SYMBOL_ANIMATION, this.onSymbolLanding.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.CLEAR_GAME_FOR_SPIN, this.resetSpinVariables.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_RAINBOW_RESPIN_SYMBOL_PLACEMENT", this.showActualReelView.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_MYSTERY_TRANSFORM_SYMBOL_PLACEMENT", this.showActualReelView.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.REELSTRIP_SINGLE_SPIN_COMPLETED, this.onRainbowSpinCompleted.bind(this));

        CoreLib.EventHandler.addEventListener("WINSPIN_SYMBOLS_PLACEMENT_DONE", this.onWinSpinFeatureCompleted.bind(this));
        CoreLib.EventHandler.addEventListener("BONUS_START_BUTTON_CLICKED", this.onBonusEnterDoneClicked.bind(this));
        CoreLib.EventHandler.addEventListener("MEGA_BONUS_APPEARANCE_DONE", this.onMegaBonusAppeared.bind(this));
        CoreLib.EventHandler.addEventListener("MEGA_TRIGGER_JOCKY_ANIMDONE", this.onMegaTriggerJockyAnimDone.bind(this));
        CoreLib.EventHandler.addEventListener("WINNING_ELEMENT_ANIM_DONE", this.onWinningElementAnimDone.bind(this));
        CoreLib.EventHandler.addEventListener("PLAYER_DICE_ROLL_DONE", this.onPlayerDiceRollDone.bind(this));
        CoreLib.EventHandler.addEventListener("ON_BOY_ON_DUCK_ANIMATION_DONE", this.onRedJockyAnimationDone.bind(this));
        CoreLib.EventHandler.addEventListener("BOY_CROSSED_MONOPOLY_MAN_POPUP_SHOWN_DONE", this.endFreespinRoundFromPopup.bind(this));
        CoreLib.EventHandler.addEventListener("MEGABOARD_BONUS_END", this.endFreespinRoundFromPopup.bind(this));
        CoreLib.EventHandler.addEventListener("MYSTERY_SYMBOLS_REPLACEMENT_DONE", this.onMysteryReplacementCompleted.bind(this));

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

    // megabonus entry
    checkForFeatureGame() {
        if (slotModel.getIsFreespinSession() && redDiceFlag == false) {
            let data = slotModel.getFeatureData();
            if (data.currentCount >= 2 && data.redDieCount > 0) {
                CoreLib.EventHandler.dispatchEvent("SHOW_YELLOW_DICE_ANIMATION", data);
            }
        }
        if (slotModel.isFeatureTriggered()) {
            slotModel.setAutoFeatureTriggered();
            if (slotModel.getIsFreespinSession()) {
                let data = slotModel.getFeatureData();
                if (redDiceFlag == true || data.currentCount == 1) {
                    this.checkForNextFreespin();
                }
            } else {
                this.triggerFeatureGame();
            }
        } else {
            if (slotModel.getIsFreespinSession()) {
                if (CoreLib.Model.GameConfig.megaboardRunning == true) {
                    this.endFreeSpinSession();
                    return;
                }
            }
            if (!CoreLib.Model.GameConfig.megaboardRunning) {
                this.checkForAutoSpin();
            }


        }
    }

    triggerFeatureGame() {
        super.triggerFeatureGameCore();
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_DESKTOP_SETTINGS, false);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_BONUS_TRIGGERING_ANIM);
        slotModel.setFreespinSession(true);
        setTimeout(this.stopTriggeringWin.bind(this), 2000);
        this.spinWinStateExited = true;
    }

    showBonusTriggerEnterPopup() {
        if (slotModel.getFeatureType() == CoreLib.Model.GameConfig.featureTypes.freespins && slotModel.getFeatureData().currentCount == 0) {
            CoreLib.EventHandler.dispatchEvent("SHOW_MEGABOARD_TRIGGERED_ANIMATION");
        } else {
            CoreLib.EventHandler.dispatchEvent("SHOW_MEGABOARD");
        }
    }

    onMegaBonusAppeared() {
        if (slotModel.isUnfinishedGame()) {
            this.checkForNextFreespin();
        } else {
            this.startFreespins();
        }
    }

    onMegaTriggerJockyAnimDone() {
        CoreLib.EventHandler.dispatchEvent("SHOW_PRE_MEGABOARD_SCREEN");
    }
    onBonusEnterDoneClicked() {
        CoreLib.EventHandler.dispatchEvent("SHOW_MEGABOARD");
        CoreLib.EventHandler.dispatchEvent("START_BONUS_SELECTION_BG_MUSIC");
    }

    handleFeatureResult(data) {
        CoreLib.Model.GameConfig.mysteryReelTriggered = false;
        slotModel.parseFeatureResult(data);
        let arr = slotModel.featureResult.featureResults;
        let index = arr[0].spinResults.length - 1;
        let spinresult = arr[0].spinResults[index];
        let mysteryReelView = spinresult.preMysterySymbolsReelView;
        let reelview = spinresult.reelView;
        if (mysteryReelView != undefined && !spinresult.winSpinSymbol && arr[0].totalNumberOfHopsByGreen < 54 && spinresult.wildAdded != true) {
            CoreLib.Model.GameConfig.mysteryReelTriggered = true;
            this.actualReelview = Util.cloneArray(reelview);
            slotModel.getSlotGameResult().reelView = mysteryReelView;
        }
        if (arr[0].totalNumberOfHopsByGreen >= 54) { 
            slotModel.slotGameResult.result = spinresult;
        }
        CoreLib.EventHandler.dispatchEvent("MEGA_BONUS_RESPONSE_RECEIVED");
    }

    handleSpecialResult(data) {
        slotModel.parseFeatureResult(data);
        CoreLib.EventHandler.dispatchEvent("SHOW_MULTIPLIER_X_VALUE");
    }

    checkForNextFreespin() {
        if (slotModel.isNextFreespinPossible()) {
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.START_SLOT_SPIN);
            CoreLib.EventHandler.dispatchEvent("STOP_MAN_ON_DUCK");
            let data = slotModel.getFeatureData();
            if (data.currentCount == 1) {
                CoreLib.EventHandler.dispatchEvent("SHOW_DICEROLL_MESSAGE", 1);
            } else {
                if (data.currentCount == 0 && slotModel.isUnfinished == true) {
                    this.startFreespins();
                } else {
                    CoreLib.EventHandler.dispatchEvent("SHOW_DICEROLL_MESSAGE", 2);
                }
            }
            redDiceFlag = false;
        }
    }

    onPlayerDiceRollDone() {
        this.spinWinSymbolDone = false;
        this.spinWinAmountDone = false;
        CoreLib.Model.GameConfig.lineWinIndex = 0;
        this.cleanUpGame(true);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.CLEAR_GAME_FOR_SPIN);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.UPDATE_UI_FOR_FS_ROUNDS);
        CoreLib.WrapperService.requestBonusData(slotModel.getCurrentBonusName());
    }

    onWinningElementAnimDone() {
        setTimeout(CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.START_STOPPING_REELS), 250);
    }

    endFreeSpinSession() {
        slotModel.setFreespinSession(false);
        //this.checkForFeatureGame();
    }

    endFreespinRoundFromPopup() {
        this.endFreeSpinSession();
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.UPDATE_BALANCE);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.UPDATE_UI_FOR_FS_END);
        let flag = this.checkFSExitGameLevel();
        if (flag) {
            this.continueToMGAfterFS();
        }
    }

    continueToMGAfterFS() {
        CoreLib.EventHandler.dispatchEvent("HIDE_MEGABOARD");
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.STOP_FREESPIN_BG_MUSIC);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.START_MAINGAME_BG_MUSIC);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_MAINGAME_BG);
        if (slotModel.getIsAutoSession()) {
            this.checkForAutoSpin();
        } else {
            this.activateControls();
            //CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_FREESPIN_BIG_WIN);
        }
    }

    handleGameLevelSpinResponseData() {
        let positions = slotModel.getSlotGameResult().jockeyWildPositions;
        if (positions && positions.length > 0) {
            slotModel.isSpinTimeFeature = true;
        } else {
            slotModel.isSpinTimeFeature = false;
        }
    }

    convertPosition(arr) {
        let result = [];
        let len = arr.length;
        for (let k = 0; k < len; k++) {
            result.push(reelPositionMap[arr[k]]);
        }
        return result;
    }

    startStoppingReels() {
        let respinPosition = slotModel.getSlotGameResult().preRainbowRespinReelView;
        let positions = slotModel.getSlotGameResult().jockeyWildPositions;
        if (respinPosition && respinPosition.length > 0) {
            this.actualReelview = Util.cloneArray(slotModel.getReelsView());
            slotModel.getSlotGameResult().reelView = slotModel.getSlotGameResult().preRainbowRespinReelView;
        }
        if (positions && positions.length > 0 && respinPosition.length == 0) {
            let arr = this.convertPosition(positions);
            if (arr.length > 0) {
                CoreLib.EventHandler.dispatchEvent("INITIATE_MONOPOLY_WILD", arr);
            } else {
                CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.START_STOPPING_REELS);
            }
        } else {
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.START_STOPPING_REELS);
        }
    }

    showActualReelView() {
        slotModel.getSlotGameResult().reelView = this.actualReelview;
    }

    onRainbowSpinCompleted() {
        slotModel.getSlotGameResult().preRainbowRespinReelView = null;
        CoreLib.EventHandler.dispatchEvent("CLEAR_RAINBOW_RESPIN_ELEMENTS");
        super.onReelSpinCompleted();
    }

    checkPreWinFeature() {
        let flag = false;
        let respinPosition = slotModel.getSlotGameResult().preRainbowRespinReelView;
        let winSpinPosition = slotModel.getSlotGameResult().winSpinPositions;
        if (respinPosition && respinPosition.length > 0 && winSpinPosition.length == 0) {
            let rainbowRespinPosition = this.convertPosition(respinPosition);
            if (rainbowRespinPosition) {
                CoreLib.EventHandler.dispatchEvent("INITIATE_RAINBOW_RESPIN", rainbowRespinPosition);
            }
            flag = true;
        } else {
            let winSpinPosition = slotModel.getSlotGameResult().winSpinPositions;
            if (winSpinPosition && winSpinPosition.length > 0 && respinPosition.length == 0) {
                let arr = this.convertPosition(winSpinPosition);
                if (arr.length > 0) {
                    CoreLib.EventHandler.dispatchEvent("INITIATE_WIN_SPIN", arr);
                }
                flag = true;
            }
        }

        if (CoreLib.Model.GameConfig.mysteryReelTriggered && slotModel.getIsFreespinSession()) {
            let arr = slotModel.featureResult.featureResults;
            let index = arr[0].spinResults.length - 1;
            let spinresult = arr[0].spinResults[index];
            let mysterySymbolsPos = spinresult.mysterySymbolPositionInReelView;
            if (mysterySymbolsPos && mysterySymbolsPos.length > 0) {
                let arr = this.convertPosition(mysterySymbolsPos);
                if (arr.length > 0) {
                    CoreLib.EventHandler.dispatchEvent("INITIATE_MYSTERY_TRANSFORM", arr);
                }
            }
            flag = true;
            CoreLib.Model.GameConfig.mysteryReelTriggered = false;
        }
        return flag;
    }

    onRedJockyAnimationDone() {
        redDiceFlag = true;
        this.checkForFeatureGame();
    }

    onWinSpinFeatureCompleted() {
        this.onPreWinFeatureCompleted();
    }

    onMysteryReplacementCompleted() {
        setTimeout(() => {
            this.onPreWinFeatureCompleted();
        }, 1000);
    }
}
