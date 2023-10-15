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
        {name : "Pinata Base Game BGM", type : "game", soundType : "ambient", loop : true, playEvents:["START_MAINGAME_BG_MUSIC"], stopEvents:["STOP_MAINGAME_BG_MUSIC", "START_BONUS_SELECTION_BG_MUSIC", "START_FREESPIN_BG_MUSIC"], volume : 0.5,  fadeOutDuration : 1000},
        {name : "Pinata Free Spin BGM", type : "game", soundType : "ambient", loop : true, playEvents:["START_FREESPIN_BG_MUSIC"], stopEvents:["STOP_FREESPIN_BG_MUSIC"], volume : 0.5,  fadeOutDuration : 1000},
        {name : "Pinata_BGM_BonusGame Pinata Round-longer", type : "game", soundType : "ambient", loop : true, playEvents:["START_BONUS_SELECTION_BG_MUSIC"], stopEvents:["START_MAINGAME_BG_MUSIC", "START_FREESPIN_BG_MUSIC"], volume : 0.7,  fadeOutDuration : 1000},
        {name : "01_Button_click", type : "game", loop : false, playEvents:["PLAY_GENERIC_BUTTON_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "spinStart", type : "game", loop : false, playEvents:["START_SLOT_SPIN"], volume : 0.2,  fadeOutDuration : 1000},
        {name : "spinStop", type : "game", loop : false, playEvents:["PLAY_REELSTOP_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "ScatterAnticipationLoop", type : "game", loop : true, playEvents:["PLAY_ANTICIPATION_SOUND"], stopEvents : ["STOP_ANTICIPATION_SOUND"], volume : 1,  fadeOutDuration : 100},
        {name : "Win", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "PinataExplode", type : "game", loop : false, playEvents:["PLAY_BONUS_ITEM_CLICK_OPEN"], volume : 1},
        {name : "PinataMultiplier_volumeUp", type : "game", loop : false, playEvents:["PLAY_FREESPIN_MULTIPLIER_SOUND"], volume : 1},
        {name : "Pinata_BigWin_BGM_Loop_new", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND_BIGWIN"], stopEvents : ["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW"], volume : 1,  fadeOutDuration : 0},
        {name : "Pinata_BigWin_BGM_Ending_new", type : "game", loop : false, playEvents:["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW"], stopEvents : [""], volume : 1,  fadeOutDuration : 1000},
        {name : "ScatterLanding", type : "game", loop : false, playEvents:["LANDING_SYMBOL_ANIMATION"], volume : 1,  fadeOutDuration : 1000},
        {name : "coincounter", loop : true, playEvents:["PLAY_BONUS_COIN_SCORE_SOUND"], stopEvents: ["PLAY_BONUS_COIN_SCORE_END_SOUND"]},
        {name : "coincounterEnd", loop : false, playEvents:["PLAY_BONUS_COIN_SCORE_END_SOUND"]},
        {name : "Counter-1-Loop", loop : true, playEvents: ["PLAY_BIG_WIN_COUNTUP_LOOP"], stopEvents: ["PLAY_BIG_WIN_COUNTUP_END", "STOP_BIG_WIN_COUNTUP"], volume : 0.7},
        {name : "counter 2 End", loop : false, playEvents: ["PLAY_BIG_WIN_COUNTUP_END"], stopEvents: ["STOP_BIG_WIN_COUNTUP"], volume : 0.7},
        {name : "ScatterPinata", loop : false, playEvents: ["SHOW_BONUS_TRIGGERING_ANIM"], stopEvents: ["CLEAR_TRIGGERING_ANIM"], volume : 0.7},
        {name : "Pinata Scatter Feature Game Entry Play finish", loop : false, playEvents: ["SHOW_BONUS_TRIGGERING_ANIM"], stopEvents: ["CLEAR_TRIGGERING_ANIM"], volume : 0.7},
        {name : "WildExtended", loop : false, playEvents:["PLAY_STACKED_WILD"], volume : 1, stopEvents :[], fadeOutDuration : 1000},
        {name : "Wild", loop : true, playEvents:["PLAY_WILD_SOUND"], volume : 1, stopEvents :["STOP_WILD_SOUND"], fadeOutDuration : 1000},
        {name : "Symbol_mariachhi", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 2, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_senorita", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 3, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_sombrero", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 4, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_maracas", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 5, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_Tequila", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 6, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_A", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 7, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_K", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 8, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_Q", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 9, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_J", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 10, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_10", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 11, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Symbol_9", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 12, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Scatter", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 13, volume : 1, stopEvents :[""], fadeOutDuration : 1000},

        //Pinata_BGM_BonusGame Pinata Round-longer
        //PinataExplode_volumeUp
        //PinataMultiplier_volumeUp
        //ScatterLanding
    ]
};
