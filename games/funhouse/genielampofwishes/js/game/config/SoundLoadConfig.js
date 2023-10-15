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
        //base game bg
        {name : "Base Game BGM", type : "game", soundType : "ambient", loop : true, playEvents:["START_MAINGAME_BG_MUSIC", "STOP_BONUS_SELECTION_BG_MUSIC", "STOP_FREESPIN_BG_MUSIC"], stopEvents:["START_BONUS_SELECTION_BG_MUSIC", "STOP_MAINGAME_BG_MUSIC", "START_BONUS_BG_MUSIC", "START_FREESPIN_BG_MUSIC"], volume : 0.3,  fadeOutDuration : 1000},
        //button click
        {name : "01_Button_click", type : "game", loop : false, playEvents:["PLAY_GENERIC_BUTTON_SOUND"], volume : 1,  fadeOutDuration : 1000},
        //reel start and stop
        {name : "reel_start", type : "game", loop : false, playEvents:["SPIN_CLICKED"], volume : 1,  fadeOutDuration : 1000},
        {name : "reel_stop", type : "game", loop : false, playEvents:["PLAY_REELSTOP_SOUND"], volume : 1,  fadeOutDuration : 1000},
        //symbol sounds
        {name : "symbol_wild", loop : false, playEvents:["PLAY_WILD_SOUND"], volume : 1, stopEvents :["STOP_WILD_SOUND"], fadeOutDuration : 100},
        {name : "symbol_Jaffar", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 2, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "symbol_genie", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 3, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "symbol_tiger", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 4, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "symbol_monkey", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 5, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "symbol_parrot", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 6, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "symbol_lamp", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 7, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "Symbol_carpet", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 8, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "symbol_tent", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 9, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "Symbol_sand_timer", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 10, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "symbol_scatter", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 11, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "symbol_bonus", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 12, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        //Landing Animation:
        {name : "Landing_Bonus1", type : "game", loop : false, playEvents:["PLAY_LANDING_SEQUENCE_SOUND"], volume : 1, matchParam: 1, fadeOutDuration : 1000},
        {name : "Landing_Bonus2", type : "game", loop : false, playEvents:["PLAY_LANDING_SEQUENCE_SOUND"], volume : 1, matchParam: 2, fadeOutDuration : 1000},
        {name : "Landing_Bonus3", type : "game", loop : false, playEvents:["PLAY_LANDING_SEQUENCE_SOUND"], volume : 1, matchParam: 3, fadeOutDuration : 1000},
        {name : "Landing_Bonus4", type : "game", loop : false, playEvents:["PLAY_LANDING_SEQUENCE_SOUND"], volume : 1, matchParam: 4, fadeOutDuration : 1000},
        {name : "Landing_Bonus5", type : "game", loop : false, playEvents:["PLAY_LANDING_SEQUENCE_SOUND"], volume : 1, matchParam: 5, fadeOutDuration : 1000},
        //scatter Anticipation
        {name : "Scatter_Anticipation", type : "game", loop : true, playEvents:["PLAY_ANTICIPATION_SOUND"], stopEvents : ["STOP_ANTICIPATION_SOUND"], volume : 1,  fadeOutDuration : 1000},
        //Type of wins
        {name : "BIG WIN",  type : "game", loop : false, playEvents:["PLAY_BIGWIN_SPECIAL_SOUND"], volume : 1},
        {name : "MEGA WIN", type : "game",  loop : false, playEvents:["PLAY_MEGAWIN_SPECIAL_SOUND"], volume : 1},
        {name : "GIGANTIC WIN",  type : "game", loop : false, playEvents:["PLAY_GIGANTICWIN_SPECIAL_SOUND"], volume : 1},
        {name : "COLOSSAL WIN",  type : "game", loop : false, playEvents:["PLAY_COLOSSALWIN_SPECIAL_SOUND"], volume : 1},
        {name : "UNBELIEVABLE WIN", type : "game",  loop : false, playEvents:["PLAY_UNBELIEVABLEWIN_SPECIAL_SOUND"], volume : 1},
        //bigwin bgm
        {name : "bounty_bigwin loop", type : "game", loop : true, playEvents:["PLAY_ALL_WIN_SOUND_BIGWIN"], stopEvents : ["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW", "STOP_ALL_WIN_SOUND_BIGWIN"], volume : 1},
        {name : "bounty_bigwin ending", type : "game", loop : false, playEvents:["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW"], stopEvents : [""], volume : 1},
        //win counter
        {name : "win_counter", type : "game", loop : true, playEvents:["PLAY_ALL_WIN_SOUND"], stopEvents : ["NORMAL_WIN_COUNTUP_DONE", "EXIT_SPINWIN_AMOUNT", "CLEAR_ALL_WIN"], volume : 1,  fadeOutDuration : 100},
        //bonusGame
        {name : "Bonus BGM", type : "game", soundType : "ambient", loop : true, playEvents:["START_BONUS_SELECTION_BG_MUSIC"], stopEvents:["STOP_BONUS_SELECTION_BG_MUSIC"], volume : 1,  fadeOutDuration : 1000},
        {name : "smoke_Selectlamp_reward", type : "game", loop : false, playEvents:["PLAY_BONUS_ITEM_CLICK_SOUND"], volume : 1},
        {name : "smoke_counter", type : "game", loop : true, playEvents:["PLAY_BONUS_COIN_SCORE_SOUND"], stopEvents: ["STOP_BONUS_COIN_SCORE_SOUND"], volume : 1,fadeOutDuration : 10 },
        {name : "smoke_counter_end", type : "game", loop : false, playEvents:["STOP_BONUS_COIN_SCORE_SOUND"], volume : 1,fadeOutDuration : 10 },
        {name : "win", type : "game", loop : false, playEvents:["PLAY_BONUS_MULTIPLIER_SCORE_SOUND"], volume : 1},
        {name : "Carpet moving", type:"game", loop: false, playEvents:["PLAY_CARPET_MOVING_SOUND"], volume:1, fadeOutDuration : 10},
        //freeSpins
        {name : "Free Spin BGM", type : "game", soundType : "ambient", loop : true, playEvents:["START_FREESPIN_BG_MUSIC"], stopEvents:["STOP_FREESPIN_BG_MUSIC"], volume : 0.6,  fadeOutDuration : 1000},
    ]
};
