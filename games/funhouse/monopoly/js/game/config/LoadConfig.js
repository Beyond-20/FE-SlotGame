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
    { TYPE: "game", NAME: "gamebg", ASSETTYPE: "sequence", SPRITESHEETS: [2, 1, 1] },
    { TYPE: "game", NAME: "splashAssets.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "gamelogo.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "gameElements.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "symbols.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "noportraitAssets", ASSETTYPE: "sequence", SPRITESHEETS: [4, 2, 1] },
    { TYPE: "game", NAME: "symbolAnimation_Green_Particular.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "bonusGameElements.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "raceTrackBgPortrait.json", ASSETTYPE: "sprite" },

    { TYPE: "game", NAME: "Purple_DiceAnim_1.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Purple_DiceAnim_2.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Purple_DiceAnim_3.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Purple_DiceAnim_4.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Purple_DiceAnim_5.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Purple_DiceAnim_6.json", ASSETTYPE: "sprite" },

    { TYPE: "game", NAME: "Yellow_DiceAnim_1.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Yellow_DiceAnim_2.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Yellow_DiceAnim_3.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Yellow_DiceAnim_4.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Yellow_DiceAnim_5.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Yellow_DiceAnim_6.json", ASSETTYPE: "sprite" },

    { TYPE: "game", NAME: "Purple_Dice_Light_Anim_1.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Purple_Dice_Light_Anim_2.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Purple_Dice_Light_Anim_3.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Purple_Dice_Light_Anim_4.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Purple_Dice_Light_Anim_5.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Purple_Dice_Light_Anim_6.json", ASSETTYPE: "sprite" },

    { TYPE: "game", NAME: "Yellow_Dice_Light_Anim_1.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Yellow_Dice_Light_Anim_2.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Yellow_Dice_Light_Anim_3.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Yellow_Dice_Light_Anim_4.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Yellow_Dice_Light_Anim_5.json", ASSETTYPE: "sprite" },
    { TYPE: "game", NAME: "Yellow_Dice_Light_Anim_6.json", ASSETTYPE: "sprite" },

    { TYPE: "game", NAME: "bonus.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "man.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "frame1x1.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "antisipation_bg.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "antisipation.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "big_win_newspaper.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "hugewin_newspaper.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "3popups_curtains.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "megaboard_triggered.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "boyduck.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "frame.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "manincar.json", ASSETTYPE: "spine" },
    { TYPE: "game", NAME: "big_money.json", ASSETTYPE: "spine" },
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
