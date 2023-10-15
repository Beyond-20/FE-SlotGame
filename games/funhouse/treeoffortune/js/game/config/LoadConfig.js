const LANGUAGES_SUPPORTED = ["en", "cn", "th"];
const COMMON_CONTENT = { type: "commonContent", name: "commonContent.json" };
const GAME_CONTENT = { type: "gameContent", name: "gameContent.json" };
const COMMON_TEXT_CONFIG = { type: "commonConfig", name: "TextConfig.json" };
const TEXT_CONFIG = { type: "gameConfig", name: "TextConfig.json", languages: [] };
const PRELOADER = { COMMON: [{ TYPE: "common", NAME: "common_preloader.json" }] };

const GAME_BITMAPFONTS = ["bitmapFont.fnt"];
const COMMON_BITMAPFONTS = [];
const GAME_COMMON = [
                    {TYPE: "common", NAME : "tournamentAssets", ASSETTYPE : "sequence", SPRITESHEETS : [2,2,2]},
                    {TYPE: "common", NAME : "bigwinCoins.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "coinAnim", ASSETTYPE : "sequence", SPRITESHEETS : [15, 10, 4]},
                    {TYPE: "game", NAME : "gamebg.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "splashAssets.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "gamelogo.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "gameElements.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "Multiplier.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbols.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_H1", ASSETTYPE : "sequence", SPRITESHEETS: [2,1,1]},
                    {TYPE: "game", NAME : "symbolAnimation_M1", ASSETTYPE : "sequence", SPRITESHEETS: [2,1,1]},
                    {TYPE: "game", NAME : "symbolAnimation_L1", ASSETTYPE : "sequence", SPRITESHEETS: [2,1,1]},
                    {TYPE: "game", NAME : "bag_green.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "bag_red.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "bag_violet.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "tree_sym.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "tree_top.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "coin.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "particles.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "gameAnimations.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "Mega Win merged.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "antisip_l.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "antisip_r.json", ASSETTYPE : "spine"},
];
const GAME_DESKTOP = [{ TYPE: "common", NAME: "ControlsUI.json", ASSETTYPE: "sprite" }];
const GAME_MOBILE = [{ TYPE: "common", NAME: "ControlsUIMobile.json", ASSETTYPE: "sprite" }];
const GAME_TABLET = [{ TYPE: "common", NAME: "ControlsUIMobile.json", ASSETTYPE: "sprite" }];



const SECONDARY_COMMON = [

];
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
