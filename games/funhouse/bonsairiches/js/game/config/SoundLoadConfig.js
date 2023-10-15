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
        {name : "bonsaiRiches_BGM", type : "game", soundType : "ambient", loop : true, playEvents:["START_MAINGAME_BG_MUSIC"], stopEvents:["STOP_MAINGAME_BG_MUSIC", "START_BONUS_BG_MUSIC", "START_FREESPIN_BG_MUSIC"], volume : 0.6,  fadeOutDuration : 1000},
        {name : "bonsaiRiches__BonusGameBGM", type : "game", soundType : "ambient", loop : true, playEvents:["START_BONUS_BG_MUSIC"], stopEvents:["STOP_BONUS_BG_MUSIC"], volume : 1,  fadeOutDuration : 1000},
        {name : "bonsaiRiches__BonusGame_ReelSpin_BGM", type : "game", soundType : "ambient", loop : true, playEvents:["START_FREESPIN_BG_MUSIC"], stopEvents:["STOP_FREESPIN_BG_MUSIC"], volume : 1,  fadeOutDuration : 1000},
        {name : "01_Button_click", type : "game", loop : false, playEvents:["PLAY_GENERIC_BUTTON_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "01_Button_click_2", type : "game", loop : false, playEvents:["SPIN_CLICKED"], volume : 1,  fadeOutDuration : 1000},
        {name : "bonsaiRiches__reelStop", type : "game", loop : false, playEvents:["PLAY_REELSTOP_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "bonsaiRiches_Scatter Anticipation", type : "game", loop : true, playEvents:["PLAY_ANTICIPATION_SOUND"], stopEvents : ["STOP_ANTICIPATION_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "bonsaiRiches_Win", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND"], stopEvents : ["STOP_ALL_WIN_SOUND_BIGWIN"], volume : 1,  fadeOutDuration : 1000},
        {name : "bonsaiRiches_BigWin_v3_long", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND_BIGWIN"], stopEvents : ["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW", "STOP_ALL_WIN_SOUND_BIGWIN"], volume : 1,  fadeOutDuration : 1000},
        {name : "bonsaiRiches_BigWin_ending", type : "game", loop : false, playEvents:["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW"], stopEvents : [""], volume : 1,  fadeOutDuration : 1000},


        {name : "bonsaiRiches_BagOpen", loop : false, playEvents:["PLAY_BONUS_ITEM_CLICK_SOUND"]},
        {name : "bonsaiRiches_Bag_CounterRise", loop : true, playEvents:["PLAY_BONUS_COIN_SCORE_SOUND"], stopEvents: ["PLAY_BONUS_COIN_SCORE_END_SOUND"]},
        //{name : "coincounterEnd", loop : false, playEvents:["PLAY_BONUS_COIN_SCORE_END_SOUND"]},

        //symbols sound:
        {name : "bonsaiRiches_WildSymbol", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], volume : 1, matchParam: 1, stopEvents :["STOP_WILD_SOUND"], fadeOutDuration : 1000},
        {name : "bonsaiRiches_Symbol_Girl", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 2, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "bonsaiRiches_Symbol_TaoistPendant", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 3, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "bonsaiRiches_Symbol_Fan", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 4, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "bonsaiRiches_Symbol_GoldIngot", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 5, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "bonsaiRiches_Symbol_A", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 6, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "bonsaiRiches_Symbol_K", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 7, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "bonsaiRiches_Symbol_Q", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 8, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "bonsaiRiches_Symbol_J", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 9, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "bonsaiRiches_Symbol_10", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 10, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "bonsaiRiches_Symbol_9", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 11, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "bonsaiRiches_Scatter", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 12, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        
        //scatter Landing:
        {name : "bonsaiRiches_Scatter Landing", type : "game", loop : false, playEvents:["LANDING_SYMBOL_ANIMATION"], volume : 1,  fadeOutDuration : 1000},

    ]
};
