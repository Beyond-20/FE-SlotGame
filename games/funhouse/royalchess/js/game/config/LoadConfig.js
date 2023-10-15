const LANGUAGES_SUPPORTED = ["en", "cn", "th"];
const COMMON_CONTENT = { type: "commonContent", name: "commonContent.json" };
const GAME_CONTENT = { type: "gameContent", name: "gameContent.json" };
const COMMON_TEXT_CONFIG = { type: "commonConfig", name: "TextConfig.json" };
const TEXT_CONFIG = { type: "gameConfig", name: "TextConfig.json", languages: [] };
const PRELOADER = { COMMON: [{ TYPE: "common", NAME: "common_preloader.json" }] };

const GAME_BITMAPFONTS = ["bitmapFont.fnt"];
const COMMON_BITMAPFONTS = [];
const GAME_COMMON = [
    { TYPE: "common", NAME: "tournamentAssets", ASSETTYPE: "sequence", SPRITESHEETS: [2, 2, 2] },
    { TYPE: "common", NAME: "bigwinCoins.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "splashAssets.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "gamelogo.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "gameElements.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "symbols", ASSETTYPE: "sequence", SPRITESHEETS: [2, 1, 1] },

    { TYPE: "game", NAME: "King.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "Qeen.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "Horse.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "Castle.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "A.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "K.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "Q.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "J.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "10.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "Wild.json", ASSETTYPE: "spine" }, 
    { TYPE: "game", NAME: "antisip1x3.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "antisip1x4.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "frame1x1_transition.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "coins_top.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "frames_win.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "pop_up_flag.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "popups.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "reels.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "rocks.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "salut.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "Soldiers.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "win_anim_1x1.json", ASSETTYPE: "spine" }
];

const GAME_DESKTOP = [{ TYPE: "common", NAME: "ControlsUI.json", ASSETTYPE: "sprite" }, { TYPE: "game", NAME: "gamebg", ASSETTYPE: "sequence", SPRITESHEETS: [2, 2, 1] }];
const GAME_MOBILE = [{ TYPE: "common", NAME: "ControlsUIMobile.json", ASSETTYPE: "sprite" }, { TYPE: "game", NAME: "gamebg", ASSETTYPE: "sequence", SPRITESHEETS: [2, 2, 1] }];
const GAME_TABLET = [{ TYPE: "common", NAME: "ControlsUIMobile.json", ASSETTYPE: "sprite" }, { TYPE: "game", NAME: "gamebg", ASSETTYPE: "sequence", SPRITESHEETS: [2, 2, 1] }];
const SECONDARY_COMMON = [];
const SECONDARY_DESKTOP = [];
const SECONDARY_MOBILE = [];
const SECONDARY_TABLET = [];
const FONTS = [];

export const GAME_LOAD_CONFIG = {
    LANGUAGES_SUPPORTED: LANGUAGES_SUPPORTED,
    COMMON_CONTENT: COMMON_CONTENT,
    GAME_CONTENT: GAME_CONTENT,
    COMMON_TEXT_CONFIG: COMMON_TEXT_CONFIG,
    TEXT_CONFIG: TEXT_CONFIG,
    PRELOADER: PRELOADER,
    PRIMARY: {
        COMMONBMPFONT: COMMON_BITMAPFONTS,
        BMPFONT: GAME_BITMAPFONTS,
        COMMON: GAME_COMMON,
        DESKTOP: GAME_DESKTOP,
        MOBILE: GAME_MOBILE,
        TABLET: GAME_TABLET,
        MAXLOADPERC: 80,
    },
    SECONDARY: {
        COMMON: SECONDARY_COMMON,
        DESKTOP: SECONDARY_DESKTOP,
        MOBILE: SECONDARY_MOBILE,
        TABLET: SECONDARY_TABLET,
        MAXLOADPERC: 100,
    }
}
