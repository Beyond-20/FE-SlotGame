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
    { TYPE: "game", NAME: "gamebg", ASSETTYPE: "sequence", SPRITESHEETS: [3, 2, 1] },
    { TYPE: "game", NAME: "gamelogo.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "gameElements.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "symbols.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "splashAssets.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "winFrame0.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "symbolAnimation_BN_idle.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "noportraitAssets", ASSETTYPE: "sequence", SPRITESHEETS: [4, 2, 1] },
    { TYPE: "game", NAME: "symbolAnimation_BN_win", ASSETTYPE: "sequence", SPRITESHEETS: [2, 2, 1] },
    { TYPE: "game", NAME: "symbolAnimation_Clover.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "symbolAnimation_Green_Particular.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "anticipationAnim", ASSETTYPE: "sequence", SPRITESHEETS: [3, 2, 1] },
    { TYPE: "game", NAME: "Green_Dice_LightAnim_1.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Green_Dice_LightAnim_2.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Green_Dice_LightAnim_3.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Green_Dice_LightAnim_4.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Green_Dice_LightAnim_5.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Green_Dice_LightAnim_6.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Green_DiceAnim_1.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Green_DiceAnim_2.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Green_DiceAnim_3.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Green_DiceAnim_4.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Green_DiceAnim_5.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Green_DiceAnim_6.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Red_Dice_LightAnim_1.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Red_Dice_LightAnim_2.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Red_Dice_LightAnim_3.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Red_Dice_LightAnim_4.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Red_Dice_LightAnim_5.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Red_Dice_LightAnim_6.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Red_DiceAnim_1.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Red_DiceAnim_2.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Red_DiceAnim_3.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Red_DiceAnim_4.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Red_DiceAnim_5.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Red_DiceAnim_6.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "jockey_wilds", ASSETTYPE: "sequence", SPRITESHEETS: [5, 3, 1] },
    { TYPE: "game", NAME: "Rainbow_Respin", ASSETTYPE: "sequence", SPRITESHEETS: [5, 3, 2] },
    { TYPE: "game", NAME: "Win_Spin", ASSETTYPE: "sequence", SPRITESHEETS: [5, 3, 1] },
    { TYPE: "game", NAME: "popups.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "characters.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "big_money.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "megaboard_triggered.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "bonusGameElements", ASSETTYPE: "sequence", SPRITESHEETS: [2, 1, 1] },
    { TYPE: "game", NAME: "raceTrackBgPortrait.json", ASSETTYPE: "sprite" },
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
