import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";
import { LibView } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView";

export class ThreeDragonPrizeTable extends LibView {
    constructor(config) {
        super(config);
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.UPDATE_BET_VALUE, this.updatePrizeForBetChange.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.ACTIVATE_GAME, this.updatePrizeForBetChange.bind(this));

        // let len = CoreLib.Model.GameConfig.payaoutMap.length;
        // for (let k = 1; k <= len; k++) {
        //     this.elementsList["currency" + k].text = CoreLib.Model.GameInfo.currency;
        // }

        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.COIN_CASH_MODE_CHANGED, this.updatePrizeForBetChange.bind(this));

    }

    updatePrizeForBetChange(toAnimate = true) {
        // let len = CoreLib.Model.GameConfig.payaoutMap.length;
        // for (let k = 1; k <= len; k++) {
        //     let str = CoreLib.WrapperService.formatCurrency((slotModel.getTotalBet() * CoreLib.Model.GameConfig.payaoutMap[k - 1]));
        //     this.elementsList["payout" + k].text = str;
        //     this.elementsList["payout" + k].scale.set(0.85);
        // }
    }
    
    resizeViewComponents() {
        super.resizeViewComponents();
        this.positionForDevice();
    }


};
