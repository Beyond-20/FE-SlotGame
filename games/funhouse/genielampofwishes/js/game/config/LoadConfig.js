const LANGUAGES_SUPPORTED = ["en", "cn", "th"];
const COMMON_CONTENT = {type : "commonContent", name : "commonContent.json"};
const GAME_CONTENT = {type : "gameContent", name : "gameContent.json"};
const COMMON_TEXT_CONFIG = {type : "commonConfig", name : "TextConfig.json"};
const TEXT_CONFIG = {type : "gameConfig", name : "TextConfig.json", languages : []};
const PRELOADER = {COMMON : [{TYPE: "common", NAME : "common_preloader.json"}]};

const GAME_BITMAPFONTS = ["bitmapFont.fnt", "bitmapFont1.fnt"];
const COMMON_BITMAPFONTS = [];
const GAME_COMMON = [
                    {TYPE: "common", NAME : "tournamentAssets", ASSETTYPE : "sequence", SPRITESHEETS : [2,2,2]},
                    {TYPE: "common", NAME : "bigwinCoins.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "gamebg.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "gamelogo.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "gameElements.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbols.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "splashAssets.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "winFrame0.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_FG.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_BN.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_WD.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_H1.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_H2.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_H3.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_H4.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_H5.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_L1.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_L2.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_L3.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_L4.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "paylinesAssets", ASSETTYPE : "sequence", SPRITESHEETS : [2,2,1]},
                    {TYPE: "game", NAME : "anticipationAnim", ASSETTYPE : "sequence", SPRITESHEETS : [3,2,1]},
                    {TYPE: "game", NAME : "popups.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "capert.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "lamps.json", ASSETTYPE : "spine"},
];

const GAME_DESKTOP =    [{TYPE: "common", NAME : "ControlsUI.json", ASSETTYPE : "sprite"}];
const GAME_MOBILE = [{TYPE: "common", NAME : "ControlsUIMobile.json", ASSETTYPE : "sprite"}];
const GAME_TABLET = [{TYPE: "common", NAME : "ControlsUIMobile.json", ASSETTYPE : "sprite"}];



const SECONDARY_COMMON = [

];
const SECONDARY_DESKTOP = [];
const SECONDARY_MOBILE = [];
const SECONDARY_TABLET = [];

const FONTS = [];


export const GAME_LOAD_CONFIG = {
    LANGUAGES_SUPPORTED : LANGUAGES_SUPPORTED,
    COMMON_CONTENT : COMMON_CONTENT,
    GAME_CONTENT : GAME_CONTENT,
    COMMON_TEXT_CONFIG : COMMON_TEXT_CONFIG,
    TEXT_CONFIG : TEXT_CONFIG,
    PRELOADER : PRELOADER,
    PRIMARY : {
        COMMONBMPFONT : COMMON_BITMAPFONTS,
        BMPFONT : GAME_BITMAPFONTS,
        COMMON: GAME_COMMON,
        DESKTOP: GAME_DESKTOP,
        MOBILE: GAME_MOBILE,
        TABLET: GAME_TABLET,
        MAXLOADPERC : 80,
    },
    SECONDARY : {
        COMMON : SECONDARY_COMMON,
        DESKTOP : SECONDARY_DESKTOP,
        MOBILE : SECONDARY_MOBILE,
        TABLET : SECONDARY_TABLET,
        MAXLOADPERC : 100,
    }
}
