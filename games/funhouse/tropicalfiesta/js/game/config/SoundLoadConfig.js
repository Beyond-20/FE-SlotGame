export const GAME_SOUND_CONFIG = {
    basePath: 'gameassets/',
    commonSoundPath : "../common/",
    properties : {
        VOLUME: 1,
        MUTE: false,
        FADE_TIME: 1000,
    },
    soundFiles: [
        {name : "giftBox", type : "common", loop : false, playEvents:["TOURNAMENT_PRIZE_POPUP"]},
        {name : "bgm_loop", type : "game", soundType : "ambient", loop : true, playEvents:["START_MAINGAME_BG_MUSIC"], stopEvents:["STOP_MAINGAME_BG_MUSIC", "START_BONUS_BG_MUSIC", "START_FREESPIN_BG_MUSIC"], volume : 0.5,  fadeOutDuration : 1000},
        {name : "01_Button_click", type : "game", loop : false, playEvents:["PLAY_GENERIC_BUTTON_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "reel_start", type : "game", loop : false, playEvents:["SPIN_CLICKED"], volume : 1,  fadeOutDuration : 1000},
        {name : "reel_stop", type : "game", loop : false, playEvents:["PLAY_REELSTOP_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "win", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND", "PLAY_ALL_WIN_SOUND_BIGWIN"], volume : 1,  fadeOutDuration : 1000},
        {name : "truckbonanza_bigwin music 2-v2", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND_BIGWIN"], stopEvents : ["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW", "STOP_ALL_WIN_SOUND_BIGWIN"], volume : 1,  fadeOutDuration : 1000},
        {name : "truckbonanza_bigwin ending", type : "game", loop : false, playEvents:["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW"], stopEvents : [""], volume : 1,  fadeOutDuration : 1000},
        {name : "wild", loop : false, playEvents:["PLAY_WILD_SOUND"], volume : 1, stopEvents :["STOP_WILD_SOUND"], fadeOutDuration : 1000},
        {name : "symbol_h1", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 2, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "symbol_h2", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 3, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "symbol_h3", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 4, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "symbol_h4", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 5, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "symbol_h5", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 6, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "symbol_l1", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 7, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "symbol_l2", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 8, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "symbol_l3", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 9, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "symbol_l4", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 10, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "symbol_l5", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 11, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "scatter", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 12, volume : 1, stopEvents :[""], fadeOutDuration : 1000},





    ]
};
