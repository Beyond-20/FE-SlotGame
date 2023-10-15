import { SLOT_BG_CONFIG } from "./SlotBGConfig";
import { SLOT_MACHINE_CONFIG } from "./SlotMachineConfig";
import { SLOT_PANEL_CONFIG } from "../../../../../../../../slot_core/corelib/config/SlotPanelConfig";
import { GAME_SPLASH_CONFIG } from './GameSplashConfig'
import { AUTOPLAY_CONFIG } from "../../../../../../../../slot_core/corelib/config/AutoplayConfig";
import { MOBILE_BET_CONFIG } from "../../../../../../../../slot_core/corelib/config/MobileBetConfig";
import { MOBILE_SETTINGS_CONFIG } from "../../../../../../../../slot_core/corelib/config/MobileSettingsConfig";
import { DESKTOP_SETTINGS_CONFIG } from '../../../../../../../../slot_core/corelib/config/DesktopSettingsConfig'
import { DESKTOP_BUTTONS_CONFIG } from '../../../../../../../../slot_core/corelib/config/SlotDesktopButtonsConfig'
import { ALERT_POPUP_CONFIG } from '../../../../../../../../slot_core/corelib/config/AlertPopupConfig'
import { BIG_WIN_CONFIG } from './BigWinConfig'
import { TOURNAMENT_ICON_CONFIG } from '../../../../../../../../slot_core/corelib/config/TournamentIconConfig'
import { PRIZE_POPUP_CONFIG } from '../../../../../../../../slot_core/corelib/config/PrizePopupConfig'
import { PRE_MEGABOARD_SCREEN_CONFIG } from "./PreMegaBoardScreenConfig";
import { BONUS_GAME_CONFIG } from "./BonusGameConfig";
import { RED_CROSS_GREEN_POPUP_CONFIG } from "./RedCrossGreenPopupConfig";
import { POST_MEGABOARD_SCREEN_CONFIG } from "./PostMegaBoardScreenConfig";
import { POST_MEGABOARD_WINNING_POPUP_CONFIG } from "./PostMegaboardWinningPopupConfig";
import {NO_PORTRAIT_CONFIG} from "./NO_PORTRAIT_CONFIG";

export const SLOT_GAMEVIEW_CONFIG = {
    name: "SLOT_GAMEVIEW_CONFIG",
    Elements: [
        SLOT_BG_CONFIG,
        SLOT_MACHINE_CONFIG,
        SLOT_PANEL_CONFIG,
        DESKTOP_BUTTONS_CONFIG,
        TOURNAMENT_ICON_CONFIG,
        DESKTOP_SETTINGS_CONFIG,
        PRE_MEGABOARD_SCREEN_CONFIG,
        PRIZE_POPUP_CONFIG,
        GAME_SPLASH_CONFIG,
        AUTOPLAY_CONFIG,
        BONUS_GAME_CONFIG,
        BIG_WIN_CONFIG,
        MOBILE_BET_CONFIG,
        MOBILE_SETTINGS_CONFIG,
        RED_CROSS_GREEN_POPUP_CONFIG,
        POST_MEGABOARD_SCREEN_CONFIG,
        POST_MEGABOARD_WINNING_POPUP_CONFIG,
        ALERT_POPUP_CONFIG,
        NO_PORTRAIT_CONFIG
    ]
}
