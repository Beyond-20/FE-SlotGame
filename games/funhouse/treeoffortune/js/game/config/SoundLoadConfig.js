export const GAME_SOUND_CONFIG = {
    basePath: 'gameassets/',
    commonSoundPath: "../common/",
    properties: {
        VOLUME: 1,
        MUTE: false,
        FADE_TIME: 1200,
    },
    soundFiles: [
        { name: "giftBox", type: "common", loop: false, playEvents: ["TOURNAMENT_PRIZE_POPUP"] },
        //Button Click Sound
        { name: "01_Button_click", type: "game", loop: false, playEvents: ["PLAY_GENERIC_BUTTON_SOUND"], volume: 1, fadeOutDuration: 1000 },
        //reel start,stop
        { name: "spin music full song", type: "game", loop: true, playEvents: [], stopEvents: [], volume: 1, fadeOutDuration: 500 },
        { name: "reel 1 landing", type: "game", loop: false, playEvents: ["PLAY_REELSTOP_SOUND"], volume: 1, fadeOutDuration: 1000 },
        //win
        { name: "normal Winning counter", type: "game", loop: false, playEvents: ["PLAY_ALL_WIN_SOUND"], stopEvents: ["NORMAL_WIN_COUNTUP_DONE", "EXIT_SPINWIN_AMOUNT", "CLEAR_ALL_WIN"], volume: 1, fadeOutDuration: 1000 },
        { name: "normal winnin coounter ending", type: "game", loop: false, playEvents: ["NORMAL_WIN_COUNTUP_DONE"], volume: 1, fadeOutDuration: 100 },
        //BigWin
        { name: "Big win bmg 1", type: "game", loop: true, playEvents: ["PLAY_BIGWIN_SPECIAL_SOUND"], stopEvents: ["PLAY_SUPERB_SPECIAL_SOUND", "PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW"], volume: 1, fadeOutDuration: 0 },
        { name: "Big win BMG 2", type: "game", loop: true, playEvents: ["PLAY_SUPERB_SPECIAL_SOUND"], stopEvents: ["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW"], volume: 1, fadeOutDuration: 0 },
        { name: "big win ending", type: "game", loop: false, playEvents: ["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW"], stopEvents: [""], volume: 1, fadeOutDuration: 1000 },
        //3OAK
        { name: "bell sound wild 3ok payline", type: "game", loop: false, playEvents: ["PLAY_3OAK_SOUND"], stopEvents: ["STOP_30AK_SOUND"], volume: 1, fadeOutDuration: 10 },
        { name: "bell sound ending", type: "game", loop: false, playEvents: ["STOP_30AK_SOUND"], stopEvents: [""], volume: 1, fadeOutDuration: 10 },
        //coin explosion from logo
        { name: "Coin explosion sound", type: "game", loop: false, playEvents: ["PLAY_MULTPLIER_COINS_EXPLOSION_SOUND"], volume: 1, fadeOutDuration: 1000 },
        //multiplier sound
        { name: "multipliser music", type: "game", loop: false, playEvents: ["PLAY_MULTPLIER_COINS_FALL_SOUND"], volume: 1, fadeOutDuration: 1000 },
        //tree to reel wild.
        { name: "shooting coin from tree symbol", type: "game", loop: false, playEvents: ["PLAY_WILD_LANDING_COIN_START_SOUND"], stopEvents: ["PLAY_WILD_LANDING_COIN_END_SOUND"], volume: 1, fadeOutDuration: 1000 },
        //reel to tree coin hit sound
        { name: "Coin hit tree sound", type: "game", loop: false, playEvents: ["PLAY_WILD_LANDING_COIN_END_SOUND"], volume: 1, fadeOutDuration: 1000 },
        //respin sounds
        { name: "Anticipation spin 1", type: "game", loop: false, playEvents: ["PLAY_RESPIN_ANTICIPATION_RISE1_SOUND"], stopEvents: ["PLAY_RESPIN_ANTICIPATION_RISE2_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "Anticipation spin 2", type: "game", loop: false, playEvents: ["PLAY_RESPIN_ANTICIPATION_RISE2_SOUND"], stopEvents: ["PLAY_RESPIN_ANTICIPATION_RISE3_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "anticipation spin 3", type: "game", loop: false, playEvents: ["PLAY_RESPIN_ANTICIPATION_RISE3_SOUND"], stopEvents: ["PLAY_RESPIN_ANTICIPATION_END_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "respin payline landing", type: "game", loop: false, playEvents: ["PLAY_RESPIN_ANTICIPATION_END_SOUND"], stopEvents: [], volume: 1, fadeOutDuration: 100 },
    ]
};
