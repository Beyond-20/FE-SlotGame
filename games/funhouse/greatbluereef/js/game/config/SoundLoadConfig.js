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
        {name : "maingameBGMusic", type : "game", soundType : "ambient", loop : true, playEvents:["START_MAINGAME_BG_MUSIC"], stopEvents:["STOP_MAINGAME_BG_MUSIC", "START_BONUS_SELECTION_BG_MUSIC", "START_FREESPIN_BG_MUSIC"], volume : 1,  fadeOutDuration : 1000},
        {name : "HoleSelection", type : "game", soundType : "ambient", loop : true, playEvents:["START_BONUS_SELECTION_BG_MUSIC"], stopEvents:["START_MAINGAME_BG_MUSIC", "START_FREESPIN_BG_MUSIC"], volume : 0.7,  fadeOutDuration : 1000},
        {name : "freespinBGMusic", type : "game", soundType : "ambient", loop : true, playEvents:["START_FREESPIN_BG_MUSIC"], stopEvents:["STOP_FREESPIN_BG_MUSIC"], volume : 1,  fadeOutDuration : 1000},
        {name : "01_Button_click", type : "game", loop : false, playEvents:["PLAY_GENERIC_BUTTON_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "start reel", type : "game", loop : false, playEvents:["START_SLOT_SPIN"], volume : 0.2,  fadeOutDuration : 1000},
        {name : "stop reel", type : "game", loop : false, playEvents:["PLAY_REELSTOP_SOUND"], volume : 1,  fadeOutDuration : 1000},
        //{name : "UnbelievableWin", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND_BIGWIN"], volume : 1,  fadeOutDuration : 1000},
        {name : "Anticipation Tension Slot Game", type : "game", loop : true, playEvents:["PLAY_ANTICIPATION_SOUND"], stopEvents : ["STOP_ANTICIPATION_SOUND"], volume : 1,  fadeOutDuration : 100},
        {name : "WinSound", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "HoleSelectionOpen", type : "game", loop : false, playEvents:["PLAY_BONUS_ITEM_CLICK_OPEN"], volume : 1},
        {name : "Oyster_multiplier", type : "game", loop : false, playEvents:["PLAY_FREESPIN_MULTIPLIER_SOUND"], volume : 1},
        {name : "Win  BGM", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND_BIGWIN"], stopEvents : ["STOP_ALL_WIN_SOUND_BIGWIN"], volume : 1,  fadeOutDuration : 1000},
        {name : "Crowd Cherring sound Effect", type : "game", loop : false, playEvents:["PLAY_CROWD_CHEERING_BIGWIN"], stopEvents : ["STOP_CROWD_CHEERING_BIGWIN"], volume : 0.5,  fadeOutDuration : 1000},
        {name : "coincounter", loop : true, playEvents:["PLAY_BONUS_COIN_SCORE_SOUND"], stopEvents: ["PLAY_BONUS_COIN_SCORE_END_SOUND"]},
        {name : "coincounterEnd", loop : false, playEvents:["PLAY_BONUS_COIN_SCORE_END_SOUND"]},
        {name : "Counter-1-Loop", loop : true, playEvents: ["PLAY_BIG_WIN_COUNTUP_LOOP"], stopEvents: ["PLAY_BIG_WIN_COUNTUP_END", "STOP_BIG_WIN_COUNTUP"], volume : 0.7},
        {name : "counter 2 End", loop : false, playEvents: ["PLAY_BIG_WIN_COUNTUP_END"], stopEvents: ["STOP_BIG_WIN_COUNTUP"], volume : 0.7},
        {name : "school-bell", loop : false, playEvents: ["SHOW_BONUS_TRIGGERING_ANIM"], stopEvents: ["CLEAR_TRIGGERING_ANIM"], volume : 0.7},

        {name : "Symbol_WildCycle", loop : true, playEvents:["PLAY_WILD_SOUND"], volume : 1, stopEvents :["STOP_WILD_SOUND"], fadeOutDuration : 1000},
        {name : "Symbol Penguin Family sound", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 2, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_Penguin", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 3, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_PenguinEgg", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 4, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_Walrus", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 5, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_Fish", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 6, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_A", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 7, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_K", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 8, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_Q", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 9, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_J", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 10, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_10", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 11, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_9", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 12, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_Scatter", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 13, volume : 1, stopEvents :[""], fadeOutDuration : 1000},


    ]
};
