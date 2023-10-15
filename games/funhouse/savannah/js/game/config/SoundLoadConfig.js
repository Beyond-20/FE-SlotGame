export const GAME_SOUND_CONFIG = {
    basePath: 'gameassets/',
    commonSoundPath : "../common/",
    properties : {
        VOLUME: 1,
        MUTE: false,
        FADE_TIME: 1200,
    },
    soundFiles: [
        {name : "giftBox", type : "common", loop : false, playEvents:["TOURNAMENT_PRIZE_POPUP"]},
        {name : "maingameBGMusic", type : "game", soundType : "ambient", loop : true, playEvents:["START_MAINGAME_BG_MUSIC"], stopEvents:["STOP_MAINGAME_BG_MUSIC", "START_BONUS_SELECTION_BG_MUSIC", "START_FREESPIN_BG_MUSIC"], volume : 0.5,  fadeOutDuration : 1000},
        {name : "freespinBGMusic", type : "game", soundType : "ambient", loop : true, playEvents:["START_FREESPIN_BG_MUSIC"], stopEvents:["STOP_FREESPIN_BG_MUSIC"], volume : 0.5,  fadeOutDuration : 1000},
        {name : "Crocodile Selection_BGM-3_swamp", type : "game", soundType : "ambient", loop : true, playEvents:["START_BONUS_SELECTION_BG_MUSIC"], stopEvents:["START_MAINGAME_BG_MUSIC", "START_FREESPIN_BG_MUSIC"], volume : 0.7,  fadeOutDuration : 1000},
        {name : "01_Button_click", type : "game", loop : false, playEvents:["PLAY_GENERIC_BUTTON_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "Reel_Start", type : "game", loop : false, playEvents:["START_SLOT_SPIN"], volume : 0.2,  fadeOutDuration : 1000},
        {name : "Reel_Stop", type : "game", loop : false, playEvents:["PLAY_REELSTOP_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "ScatterAnticipation", type : "game", loop : true, playEvents:["PLAY_ANTICIPATION_SOUND"], stopEvents : ["STOP_ANTICIPATION_SOUND"], volume : 1,  fadeOutDuration : 100},
        {name : "Win", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "CrocodileOpeningSelection", type : "game", loop : false, playEvents:["PLAY_BONUS_ITEM_CLICK_OPEN"], volume : 1},
        {name : "CrocodileMultiplier or freepin", type : "game", loop : false, playEvents:["PLAY_FREESPIN_MULTIPLIER_SOUND"], volume : 1},
        {name : "bigwin _bgm_loop-Long", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND_BIGWIN"], stopEvents : ["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW"], volume : 1,  fadeOutDuration : 1000},
        {name : "bigwin bgm Ending", type : "game", loop : false, playEvents:["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW"], stopEvents : [""], volume : 1,  fadeOutDuration : 1000},
        {name : "coincounter", loop : true, playEvents:["PLAY_BONUS_COIN_SCORE_SOUND"], stopEvents: ["PLAY_BONUS_COIN_SCORE_END_SOUND"]},
        {name : "coincounterEnd", loop : false, playEvents:["PLAY_BONUS_COIN_SCORE_END_SOUND"]},
        {name : "Counter-1-Loop", loop : true, playEvents: ["PLAY_BIG_WIN_COUNTUP_LOOP"], stopEvents: ["PLAY_BIG_WIN_COUNTUP_END", "STOP_BIG_WIN_COUNTUP"], volume : 0.7},
        {name : "counter 2 End", loop : false, playEvents: ["PLAY_BIG_WIN_COUNTUP_END"], stopEvents: ["STOP_BIG_WIN_COUNTUP"], volume : 0.7},
        {name : "school-bell", loop : false, playEvents: ["SHOW_BONUS_TRIGGERING_ANIM"], stopEvents: ["CLEAR_TRIGGERING_ANIM"], volume : 0.7},

        {name : "StackedWild", loop : false, playEvents:["PLAY_STACKED_WILD"], volume : 1, stopEvents :[], fadeOutDuration : 1000},
        {name : "SingleWild", loop : true, playEvents:["PLAY_WILD_SOUND"], volume : 1, stopEvents :["STOP_WILD_SOUND"], fadeOutDuration : 1000},
        {name : "Symbol_Lion", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 2, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_Hippo", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 3, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_Giraffe", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 4, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_Zebra", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 5, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_Boar", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 6, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_A", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 7, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_K", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 8, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_Q", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 9, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_J", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 10, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_10", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 11, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_9", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 12, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Scatter", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 13, volume : 1, stopEvents :[""], fadeOutDuration : 1000},


    ]
};
