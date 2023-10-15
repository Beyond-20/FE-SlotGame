import {LibContainer} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibContainer";
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib";
import {slotModel} from "../../../../../../../../slot_core/corelib/models/SlotModel";

export class BuyBonusButton extends LibContainer {
    constructor(config) {
        super(config);
        this.btn = this.elementsList["btn"];
        this.msgText = this.elementsList["msgText"];
        this.valueText = this.elementsList["valueText"];
        this.msgText.x = this.btn.width / 2;
        this.msgText.y = this.btn.height * 0.4;
        this.valueText.x = this.btn.width / 2;
        this.valueText.y = this.msgText.y + this.msgText.height * 0.9;

        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.UPDATE_BET_BALANCE, this.updateBonusBuyValue.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.UPDATE_BET_VALUE, this.updateBonusBuyValue.bind(this));
        CoreLib.EventHandler.addEventListener("HIDE_BUY_BONUS", this.hideButton.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_BUY_BONUS", this.showButton.bind(this));

        this.btn.addInteraction(this.onBuyBonusClicked.bind(this));
        this.btn.setEnabled(true);
        this.msgText.interactive = false;
        this.valueText.interactive = false;

        if (slotModel.getIsBuyBonusAvailable()) {
            this.visible = true;
        } else {
            this.visible = false;
        }

        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.DISABLE_ALL_BUTTONS, this.disableButtons.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.ACTIVATE_GAME, this.activateButtons.bind(this));
    }
    disableButtons () {
        this.btn.setEnabled(false, false);
        this.alpha = 0.6;
    }
    activateButtons () {
        this.btn.setEnabled(true);
        this.alpha = 1;
    }

    onBuyBonusClicked () {
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.BUY_BONUS_CLICKED, this.buyBonusBet);
    }
    hideButton () {
        CoreLib.AnimationManager.animateTween(this, 0.5, {alpha : 0});
    }
    showButton () {
        CoreLib.AnimationManager.animateTween(this, 0.5, {alpha : 1});
    }

    updateBonusBuyValue () {
        this.buyBonusBet = slotModel.getTotalBet() * CoreLib.Model.GameConfig.buyBonusBetMultiplier;
        this.valueText.text = CoreLib.WrapperService.formatCurrency(this.buyBonusBet);
        if (this.buyBonusBet > slotModel.getBalance()) {
            this.disableButtons();
        } else {
            this.activateButtons();
        }
    }


};
