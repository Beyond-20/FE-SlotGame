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
        {name : "maingameBGMusic", type : "game", soundType : "ambient", loop : true, playEvents:["START_MAINGAME_BG_MUSIC"], stopEvents:["STOP_MAINGAME_BG_MUSIC", "START_BONUS_BG_MUSIC", "START_FREESPIN_BG_MUSIC"], volume : 1,  fadeOutDuration : 1000},
        {name : "bonusgameBGMusic", type : "game", soundType : "ambient", loop : true, playEvents:["START_BONUS_BG_MUSIC"], stopEvents:["STOP_BONUS_BG_MUSIC"], volume : 1,  fadeOutDuration : 1000},
        {name : "freespinBGMusic", type : "game", soundType : "ambient", loop : true, playEvents:["START_FREESPIN_BG_MUSIC"], stopEvents:["STOP_FREESPIN_BG_MUSIC"], volume : 1,  fadeOutDuration : 1000},
        {name : "01_Button_click", type : "game", loop : false, playEvents:["PLAY_GENERIC_BUTTON_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "01_Button_click_2", type : "game", loop : false, playEvents:["SPIN_CLICKED"], volume : 1,  fadeOutDuration : 1000},
        {name : "06_Stop_reel", type : "game", loop : false, playEvents:["PLAY_REELSTOP_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "09_Anticipation", type : "game", loop : true, playEvents:["PLAY_ANTICIPATION_SOUND"], stopEvents : ["STOP_ANTICIPATION_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "11_Win_symbol_5", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND", "PLAY_ALL_WIN_SOUND_BIGWIN"], volume : 1,  fadeOutDuration : 1000},
        {name : "Big Band Prize", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND_BIGWIN"], volume : 1,  fadeOutDuration : 1000},
        {name : "11_Win_symbol_1", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 2, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "11_Win_symbol_2", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 3, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "11_Win_symbol_3", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 4, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "11_Win_symbol_4", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 1, volume : 1, stopEvents :[""], fadeOutDuration : 1000},

        {name : "14_Fx_02", loop : false, playEvents:["PLAY_BONUS_ITEM_CLICK_SOUND"]},
        {name : "coincounter", loop : true, playEvents:["PLAY_BONUS_COIN_SCORE_SOUND"], stopEvents: ["PLAY_BONUS_COIN_SCORE_END_SOUND"]},
        {name : "coincounterEnd", loop : false, playEvents:["PLAY_BONUS_COIN_SCORE_END_SOUND"]},



    ]
};
