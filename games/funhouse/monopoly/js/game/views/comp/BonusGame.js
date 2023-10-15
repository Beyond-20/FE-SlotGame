import { SlotGameBonusComp } from "../../../../../../../../slot_core/corelib/views/containers/SlotGameBonusComp";
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";
import { View } from "../../../../../../../../slot_core/corelib/views/GameView";

let slot;

export class BonusGame extends SlotGameBonusComp {
    constructor(config) {
        super(config);
        this.bonusContainerGuideRect = this.elementsList["guideRect"];
        this.raceTrack = this.elementsList["raceTrack"];
        this.raceTrack.visible = false;
        this.bonusContainerTop = this.elementsList["bonusContainerTop"];
        this.bonusContainerTop.visible = false;
        this.bonusContainerTop.on("ON_MINI_POPUP_HIDE_COMPLETE", this.onMiniPopupHideComplete.bind(this));
        this.bonusContainerBottom = this.elementsList["bonusContainerBottom"];
        this.bonusContainerBottom.visible = false;
        this.bonusContainerBottomGuideRect = this.bonusContainerBottom.elementsList["guideRect"];
        this.diceRotatingComp = this.bonusContainerTop.elementsList["diceRotatingComp"];
        this.diceRotatingComp.on("DICE_CLICKED", this.onDiceClicked.bind(this));
        this.extraRollText = this.bonusContainerTop.elementsList["extraRollText"];
        this.extraRollText.text = CoreLib.Util.getContent("extraRollText");
        this.extraRollText.visible = false;
        this.levelHighlightElements = this.bonusContainerTop.elementsList["levelHighlightElements"];

        this.totalWinAmountComp = this.bonusContainerBottom.elementsList["totalWinAmountComp"];
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.ENTER_SPINWIN_STATE, this.showCumulativeWin.bind(this));
        CoreLib.EventHandler.addEventListener("UPDATE_TOTAL_WIN_WITH_MULTIPLIER_X_BET", this.showBetXMultiplier.bind(this));

        this.visible = false;
        CoreLib.EventHandler.addEventListener("SHOW_MEGABOARD", this.showMegaBoard.bind(this));
        CoreLib.EventHandler.addEventListener("HIDE_MEGABOARD", this.hideMegaBoard.bind(this));
        CoreLib.EventHandler.addEventListener("MEGA_BONUS_RESPONSE_RECEIVED", this.onFeatureResponse.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_DICEROLL_MESSAGE", this.showDiceRollMessage.bind(this));
        this.cumulativeWin = false;

    }

    showMegaBoard() {
        this.visible = true;
        CoreLib.EventHandler.dispatchEvent("PLAY_MEGABONUS_START_SOUND");
        CoreLib.EventHandler.dispatchEvent("SHOW_FS_MEGABOARD_BG");
        CoreLib.Model.GameConfig.megaboardRunning = true;
        this.raceTrack.visible = true;
        this.bonusContainerBottom.visible = true;
        this.bonusContainerTop.visible = true;
        this.bonusContainerTop.initiateView();
        this.levelHighlightElements.initiateView();
        this.totalWinAmountComp.visible = true;
        this.totalWinAmountComp.showText("0.00");
        this.cumulativeWin = true;
        this.showSlotMachine();
        CoreLib.Model.GameConfig.noPortraitMode = true;
        CoreLib.EventHandler.dispatchEvent("CHECK_NO_PORTRAIT_MOCAL");
        if (slotModel.isUnfinishedGame()) {
            this.handleUnfinishedUI();
        } else {
            this.bonusContainerTop.showMiniPopup();
            setTimeout(this.hideMiniPopup.bind(this), 2000);
        }
    }

    showSlotMachine() {
        //getting slotgame inside the megaboard
        let gameview = View.getSlotGameView();
        slot = gameview.slotMachineComp;
        slot.deleteLayoutData();
        CoreLib.Model.GameConfig.dontCheckSlotMachine = true;
        slot.monopolyManIcon.visible = false;
        slot.gamelogo.visible = false;
        slot.visible = true;
        this.addChild(this.bonusContainerBottom, slot, this.bonusContainerTop);
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                slot.x = 0;
                slot.y = 0;
                slot.scale.set(1);
            } else {
                slot.x = 642;
                slot.y = 281;
                slot.scale.set(0.6);
            }
        } else {
            slot.x = 642;
            slot.y = 281;
            slot.scale.set(0.6);
        }
    }

    handleUnfinishedUI() {
        let arr = slotModel.featureResult.featureResults;
        if (arr[0].totalNumberOfHopsByGreen < 54) {
            let arr = slotModel.featureResult.featureResults;
            let SymbRemovIndex = arr[0].symbolsRemoved.length;
            let allWinsMultiplierVal = arr[0].allWinsMultiplier;
            if (SymbRemovIndex >= 0) {
                CoreLib.EventHandler.dispatchEvent("SHOW_REMOVED_SYMBOL_IN_REMOVEDBG");
            }
            if (allWinsMultiplierVal != null) {
                CoreLib.EventHandler.dispatchEvent("SHOW_ALL_WINS_MULTIPLIER");
            }
            this.bonusContainerTop.showManCurrentPosition(arr[0]);
            if (arr[0].totalNumberOfHopsByGreen < 18) {
                this.bonusContainerTop.showMiniPopup(1);
                this.bonusContainerBottom.showFirstLevelElements();
                this.totalWinAmountComp.showText(CoreLib.WrapperService.formatCurrency(arr[0].totalWin));
            }
            if (arr[0].totalNumberOfHopsByGreen == 18 && arr[0].level == 1) {
                this.bonusContainerTop.showMiniPopup(1);
                this.bonusContainerBottom.showFirstLevelElements();
                this.totalWinAmountComp.showText(CoreLib.WrapperService.formatCurrency(arr[0].totalWin));
            }
            if (arr[0].totalNumberOfHopsByGreen > 18 && arr[0].totalNumberOfHopsByGreen < 36) {
                this.bonusContainerTop.showMiniPopup(2);
                this.bonusContainerBottom.showUnfinishedSecondLevelElements();
                this.totalWinAmountComp.showText(CoreLib.WrapperService.formatCurrency(arr[0].totalWin));
            }
            if (arr[0].totalNumberOfHopsByGreen == 36 && arr[0].level == 2) {
                this.bonusContainerTop.showMiniPopup(2);
                this.bonusContainerBottom.showUnfinishedSecondLevelElements();
                this.totalWinAmountComp.showText(CoreLib.WrapperService.formatCurrency(arr[0].totalWin));
            }
            if (arr[0].totalNumberOfHopsByGreen > 36 && arr[0].totalNumberOfHopsByGreen < 54) {
                this.bonusContainerTop.showMiniPopup(3);
                this.bonusContainerBottom.showUnfinishedThirdLevelElements();
                this.totalWinAmountComp.showText(CoreLib.WrapperService.formatCurrency(arr[0].totalWin));
            }
        } else {
            CoreLib.EventHandler.dispatchEvent("SHOW_POST_MEGABOARD_SCREEN");
        }
    }

    hideMiniPopup() {
        this.bonusContainerTop.hideMiniPopup();
    }
    onMiniPopupHideComplete() {
        CoreLib.EventHandler.dispatchEvent("MEGA_BONUS_APPEARANCE_DONE");
    }

    onFeatureResponse() {
        let arr = slotModel.featureResult.featureResults;
        if (arr[0].totalNumberOfHopsByGreen > 54) {
            arr[0].totalNumberOfHopsByGreen = 54;
        }
        this.diceRotatingComp.showPurpleDiceAnimation(arr[0]);
        this.previousWin = arr[0].previousWin;
        this.totalWinAmountComp.showText(CoreLib.WrapperService.formatCurrency(this.previousWin));
    }

    showDiceRollMessage(index) {
        if (index == 1) {
            setTimeout(() => {
                this.extraRollText.visible = true;
                CoreLib.EventHandler.dispatchEvent("PLAY_EXTRA_ROLL_TEXT_APPEAR_SOUND");
                this.extraRollText.scale = 0.9;
                CoreLib.AnimationManager.animateTween(this.extraRollText, 1, { scaleX: 1, scaleY: 1, repeat: 1, yoyo: true, onComplete: this.hideExtraRoll.bind(this) });
            }, 1500);
        }
        setTimeout(() => {
            this.diceRotatingComp.showPress2Btn();
        }, 1500);
    }

    hideExtraRoll() {
        this.extraRollText.visible = false;
    }
    onDiceClicked() {
        CoreLib.EventHandler.dispatchEvent("PLAYER_DICE_ROLL_DONE");
    }

    showBetXMultiplier() {
        let data = slotModel.getFeatureData();
        let betXMultiplierVal = data.previousWinWithCurrentBetMultiplierWin;
        this.totalWinAmountComp.showWin(betXMultiplierVal, true, this.previousWin);
    }

    showCumulativeWin() {
        if (this.cumulativeWin == true) {
            let arr = slotModel.featureResult.featureResults;
            if (arr != null) {
                let currVal = arr[0].totalWin;
                let betXMultiplierVal = arr[0].previousWinWithCurrentBetMultiplierWin;
                if (betXMultiplierVal) {
                    this.totalWinAmountComp.showWin(currVal, true, betXMultiplierVal);
                } else {
                    this.totalWinAmountComp.showWin(currVal, true, this.previousWin);
                }
            }
        }
    }

    hideMegaBoard() {
        this.visible = false;
        this.cumulativeWin = false;
        CoreLib.Model.GameConfig.noPortraitMode = false;
        CoreLib.EventHandler.dispatchEvent("CHECK_NO_PORTRAIT_MOCAL");
        CoreLib.EventHandler.dispatchEvent("HIDE_FS_MEGABOARD_BG");
        CoreLib.Model.GameConfig.megaboardRunning = false;
        this.bonusContainerTop.reset();
        this.bonusContainerBottom.reset();
        this.levelHighlightElements.initiateView();
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_MAINGAME_BG);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_SLOTMACHINE_AND_PANEL, true);
        this.raceTrack.visible = false;
        this.bonusContainerBottom.visible = false;
        this.bonusContainerTop.visible = false;
        this.totalWinAmountComp.visible = false;
        //getting slotgame outside the megaboard
        let gameview = View.getSlotGameView();
        slot = gameview.slotMachineComp;
        slot.restoreLayoutData();
        slot.monopolyManIcon.visible = true;
        slot.gamelogo.visible = true;
        slot.visible = true;
        CoreLib.Model.GameConfig.dontCheckSlotMachine = false;
        gameview.addChildAt(slot, CoreLib.Model.GameConfig.slotMachineDepth);
        setTimeout(this.adjustSlot.bind(this, gameview), 4);
    }

    adjustSlot(gameview) {
        CoreLib.UIUtil.adjustElement(gameview);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.WINDOW_RESIZE);
    }

    resizeViewComponents() {
        super.resizeViewComponents();
        this.resizeChildren();
        if (CoreLib.Model.DeviceConfig.isDevice) {
            CoreLib.UIUtil.adjustElement(this.bonusContainerGuideRect);
            CoreLib.UIUtil.adjustWidthHeightForMobile(this.bonusContainerGuideRect);
            CoreLib.UIUtil.positionObjectForDevice(this.bonusContainerGuideRect);
            CoreLib.UIUtil.adjustElement(this.raceTrack);
            CoreLib.UIUtil.setPositionBasedOnDevice(this.raceTrack);
            CoreLib.UIUtil.adjustElement(this.bonusContainerTop);
            CoreLib.UIUtil.adjustAllChildren(this.bonusContainerTop);
            CoreLib.UIUtil.setPositionBasedOnDevice(this.bonusContainerTop);
            if (CoreLib.Model.GameConfig.featureTypes.freespins) {
                if (slot) {
                    if (CoreLib.Model.DeviceConfig.isDevice) {
                        if (CoreLib.Model.DeviceConfig.isPortrait) {
                            slot.x = 0;
                            slot.y = 0;
                            slot.scale.set(1);
                        } else {
                            slot.x = 642;
                            slot.y = 281;
                            slot.scale.set(0.6);
                        }
                    } else {
                        slot.x = 642;
                        slot.y = 281;
                        slot.scale.set(0.6);
                    }
                }
            } else {
                if (slot) {
                    if (CoreLib.Model.DeviceConfig.isDevice) {
                        if (CoreLib.Model.DeviceConfig.isPortrait) {
                            slot.x = 0;
                            slot.y = 597;
                            slot.scale.set(0.58);
                        } else {
                            slot.x = 302;
                            slot.y = 0;
                            slot.scale.set(0.95);
                        }
                    } else {
                        slot.x = 0;
                        slot.y = 62;
                        slot.scale.set(0.38);
                    }
                }
            }
        }
    }
}