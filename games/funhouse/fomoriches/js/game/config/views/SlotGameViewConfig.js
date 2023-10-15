import {SLOT_BG_CONFIG} from "./SlotBGConfig";
import {SLOT_MACHINE_CONFIG} from "./SlotMachineConfig";
import {SLOT_PANEL_CONFIG} from "../../../../../../../../slot_core/corelib/config/SlotPanelConfig";
import { GAME_SPLASH_CONFIG, PAYTABLE_CONFIG } from './GameSplashConfig'
import {AUTOPLAY_CONFIG} from "../../../../../../../../slot_core/corelib/config/AutoplayConfig";
import {MOBILE_BET_CONFIG} from "../../../../../../../../slot_core/corelib/config/MobileBetConfig";
import {MOBILE_SETTINGS_CONFIG} from "../../../../../../../../slot_core/corelib/config/MobileSettingsConfig";
import {BONUS_GAME_CONFIG} from "./BonusGameConfig";
import { DESKTOP_SETTINGS_CONFIG } from '../../../../../../../../slot_core/corelib/config/DesktopSettingsConfig'
import { DESKTOP_BUTTONS_CONFIG } from '../../../../../../../../slot_core/corelib/config/SlotDesktopButtonsConfig'
import { MESSAGE_POPUP_CONFIG } from '../../../../../../../../slot_core/corelib/config/MessagePopupConfig'
import { ALERT_POPUP_CONFIG } from '../../../../../../../../slot_core/corelib/config/AlertPopupConfig'
import { BIG_WIN_CONFIG } from './BigWinConfig'
import {TOURNAMENT_ICON_CONFIG} from '../../../../../../../../slot_core/corelib/config/TournamentIconConfig'
import {PRIZE_POPUP_CONFIG} from '../../../../../../../../slot_core/corelib/config/PrizePopupConfig'
export const SLOT_GAMEVIEW_CONFIG = {
    name : "SLOT_GAMEVIEW_CONFIG",
    Elements : [
        SLOT_BG_CONFIG,
        SLOT_MACHINE_CONFIG,
        BIG_WIN_CONFIG,
        SLOT_PANEL_CONFIG,
        DESKTOP_BUTTONS_CONFIG,
        TOURNAMENT_ICON_CONFIG,
        DESKTOP_SETTINGS_CONFIG,
        PRIZE_POPUP_CONFIG,
        GAME_SPLASH_CONFIG,
        AUTOPLAY_CONFIG,
        // BONUS_GAME_CONFIG,
        MOBILE_BET_CONFIG,
        MOBILE_SETTINGS_CONFIG,
        MESSAGE_POPUP_CONFIG,
        ALERT_POPUP_CONFIG
    ]
}
