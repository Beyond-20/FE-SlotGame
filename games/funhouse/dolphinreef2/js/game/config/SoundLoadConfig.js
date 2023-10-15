export const GAME_SOUND_CONFIG = {
    basePath: 'gameassets/',
    commonSoundPath: "../common/",
    properties: {
        VOLUME: 1,
        MUTE: false,
        FADE_TIME: 1000,
    },
    soundFiles: [
        { name: "giftBox", type: "common", loop: false, playEvents: ["TOURNAMENT_PRIZE_POPUP"] },
        //base game bg
        { name: "Game Ambient loop", type: "game", soundType: "ambient", loop: true, playEvents: ["START_MAINGAME_BG_MUSIC"], stopEvents: ["STOP_MAINGAME_BG_MUSIC", "START_BONUS_BG_MUSIC", "START_FREESPIN_BG_MUSIC"], volume: 1, fadeOutDuration: 1000 },
        //button click
        { name: "01_Button_click", type: "game", loop: false, playEvents: ["PLAY_GENERIC_BUTTON_SOUND"], volume: 1, fadeOutDuration: 1000 },
        //reel start and stop
        // {name : "reel_start", type : "game", loop : false, playEvents:["SPIN_CLICKED"], volume : 1,  fadeOutDuration : 1000},
        { name: "Normal Reel Stop", type: "game", loop: false, playEvents: ["PLAY_REELSTOP_SOUND"], volume: 1, fadeOutDuration: 1000 },
        //symbol sounds
        { name: "Wild", loop: false, playEvents: ["PLAY_WILD_SOUND"], volume: 1, stopEvents: ["STOP_WILD_SOUND"], fadeOutDuration: 100 },
        { name: "Payline", loop: false, playEvents: ["PLAY_LINEWIN_SOUND"], matchParam: 2, volume: 1, stopEvents: [""], fadeOutDuration: 100 },
        { name: "Payline", loop: false, playEvents: ["PLAY_LINEWIN_SOUND"], matchParam: 3, volume: 1, stopEvents: [""], fadeOutDuration: 100 },
        { name: "Payline", loop: false, playEvents: ["PLAY_LINEWIN_SOUND"], matchParam: 4, volume: 1, stopEvents: [""], fadeOutDuration: 100 },
        { name: "Payline", loop: false, playEvents: ["PLAY_LINEWIN_SOUND"], matchParam: 5, volume: 1, stopEvents: [""], fadeOutDuration: 100 },
        { name: "Payline", loop: false, playEvents: ["PLAY_LINEWIN_SOUND"], matchParam: 6, volume: 1, stopEvents: [""], fadeOutDuration: 100 },
        { name: "Payline", loop: false, playEvents: ["PLAY_LINEWIN_SOUND"], matchParam: 7, volume: 1, stopEvents: [""], fadeOutDuration: 100 },
        { name: "Payline", loop: false, playEvents: ["PLAY_LINEWIN_SOUND"], matchParam: 8, volume: 1, stopEvents: [""], fadeOutDuration: 100 },
        { name: "Payline", loop: false, playEvents: ["PLAY_LINEWIN_SOUND"], matchParam: 9, volume: 1, stopEvents: [""], fadeOutDuration: 100 },
        { name: "Payline", loop: false, playEvents: ["PLAY_LINEWIN_SOUND"], matchParam: 10, volume: 1, stopEvents: [""], fadeOutDuration: 100 },
        { name: "Payline", loop: false, playEvents: ["PLAY_LINEWIN_SOUND"], matchParam: 11, volume: 1, stopEvents: [""], fadeOutDuration: 100 },
        { name: "Payline", loop: false, playEvents: ["PLAY_LINEWIN_SOUND"], matchParam: 12, volume: 1, stopEvents: [""], fadeOutDuration: 100 },
        { name: "Scatter 1 Land", loop: false, playEvents: ["LANDING_SYMBOL_ANIMATION"], volume: 1, stopEvents: [""], fadeOutDuration: 100 },
        //Type of wins
        { name: "BIG WIN", type: "game", loop: false, playEvents: ["PLAY_BIGWIN_SPECIAL_SOUND"], volume: 1 },
        { name: "MEGA WIN", type: "game", loop: false, playEvents: ["PLAY_MEGAWIN_SPECIAL_SOUND"], volume: 1 },
        { name: "GIGANTIC WIN", type: "game", loop: false, playEvents: ["PLAY_GIGANTICWIN_SPECIAL_SOUND"], volume: 1 },
        { name: "COLOSSAL WIN", type: "game", loop: false, playEvents: ["PLAY_COLOSSALWIN_SPECIAL_SOUND"], volume: 1 },
        { name: "UNBELIEVABLE WIN", type: "game", loop: false, playEvents: ["PLAY_UNBELIEVABLEWIN_SPECIAL_SOUND"], volume: 1 },
        //bigwin bgm
        { name: "bigwin_bgm_loop_v2", type: "game", loop: true, playEvents: ["PLAY_ALL_WIN_SOUND_BIGWIN"], stopEvents: ["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW", "STOP_ALL_WIN_SOUND_BIGWIN"], volume: 1 },
        { name: "bigwin_bgm_ending_v2", type: "game", loop: false, playEvents: ["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW"], stopEvents: [""], volume: 1 },
        //win counter
        //{name : "win_counter_loop_v2", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND"], stopEvents : ["NORMAL_WIN_COUNTUP_DONE", "EXIT_SPINWIN_AMOUNT", "CLEAR_ALL_WIN"], volume : 1,  fadeOutDuration : 100},
        //{name : "win_counter_end", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND_BIGWIN"], stopEvents : ["STOP_ALL_WIN_SOUND_BIGWIN"], volume : 1,  fadeOutDuration : 1000},
        //Free Spins
        { name: "Respin ambient", type: "game", soundType: "ambient", loop: true, playEvents: ["START_FREESPIN_BG_MUSIC"], stopEvents: ["STOP_FREESPIN_BG_MUSIC"], volume: 0.6, fadeOutDuration: 1000 },
        { name: "Chest Open Multiplier", type: "game", loop: false, playEvents: ["PLAY_CHEST_OPEN_SOUND"], volume: 1 },
        { name: "dolphin splash out", type: "game", loop: true, playEvents: ["PLAY_DOLPHIN_SPLASH_OUT_SOUND"], stopEvents: ["STOP_DOLPHIN_JUMP_SOUND"], volume: 1 },
        { name: "Dolphin splash in", type: "game", loop: true, playEvents: ["PLAY_DOLPHIN_SPLASH_IN_SOUND"], stopEvents: ["STOP_DOLPHIN_JUMP_SOUND"], volume: 1 },
        { name: "Respin tigger", type: "game", loop: false, playEvents: ["SHOW_WILD_EXPANSION_ANIM"], volume: 1 },

        //Not Implemented Sounds
        { name: "Reel Force stop", type: "game", loop: false, playEvents: [""], volume: 1 },
    ]
};
