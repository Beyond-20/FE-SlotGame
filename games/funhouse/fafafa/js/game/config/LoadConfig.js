const LANGUAGES_SUPPORTED = ["en", "cn", "th"];
const COMMON_CONTENT = {type : "commonContent", name : "commonContent.json"};
const GAME_CONTENT = {type : "gameContent", name : "gameContent.json"};
const COMMON_TEXT_CONFIG = {type : "commonConfig", name : "TextConfig.json"};
const TEXT_CONFIG = {type : "gameConfig", name : "TextConfig.json", languages : []};
const PRELOADER = {COMMON : [{TYPE: "common", NAME : "common_preloader.json"}]};

const GAME_BITMAPFONTS = ["bitmapFont.fnt"];
const COMMON_BITMAPFONTS = [];
const GAME_COMMON = [
  {TYPE: "common", NAME : "tournamentAssets", ASSETTYPE : "sequence", SPRITESHEETS : [2,2,2]},
                    {TYPE: "game", NAME : "maingame_bgs.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "gameElements.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbols.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "splashAssets.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "Big win-.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "Colossal_Win.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "Gigantik_Win.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "Mega_Win.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "UNBELIEVABLE_Win.json", ASSETTYPE : "spine"},
                    // {TYPE: "game", NAME : "megaWinAnim", ASSETTYPE : "sequence", SPRITESHEETS : [15,5,2]},
                    // {TYPE: "game", NAME : "otherWins", ASSETTYPE : "sequence", SPRITESHEETS : [2,1,1]},
                    /*{TYPE: "game", NAME : "giganticWinAnim", ASSETTYPE : "sequence", SPRITESHEETS : [15,5,2]},
                    {TYPE: "game", NAME : "colossalWinAnim", ASSETTYPE : "sequence", SPRITESHEETS : [15,5,2]},
                    {TYPE: "game", NAME : "unbelievableWinAnim", ASSETTYPE : "sequence", SPRITESHEETS : [15,5,2]},*/
                    {TYPE: "game", NAME : "anticipationAnim", ASSETTYPE : "sequence", SPRITESHEETS : [3,1,1]},
                    {TYPE: "game", NAME : "sparkAssets", ASSETTYPE : "sequence", SPRITESHEETS : [2,1,1]},
                    {TYPE: "game", NAME : "popupAssets", ASSETTYPE : "sequence", SPRITESHEETS : [10,5,2]},
                    {TYPE: "game", NAME : "fireworks.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "fallingCoinAnim.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_0.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_0_1.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_1.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_2.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_3.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_4.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_5.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_6.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_7.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_8.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolAnimation_9.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "symbolFrameAnim.json", ASSETTYPE : "sprite"},
                    {TYPE: "game", NAME : "bonusGameAssets.json", ASSETTYPE : "sprite"},

                    {TYPE: "game", NAME : "Dragon_transition.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "Imperors.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "BlueImperor8002.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "chinese back.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "chinese back3.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "icons china.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "Spark.json", ASSETTYPE : "spine"},
                    {TYPE: "game", NAME : "Logo.json", ASSETTYPE : "spine"},



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
