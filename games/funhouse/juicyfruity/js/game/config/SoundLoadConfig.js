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
        {name : "Base_BMG", type : "game", soundType : "ambient", loop : true, playEvents:["START_MAINGAME_BG_MUSIC"], stopEvents:["STOP_MAINGAME_BG_MUSIC", "START_BONUS_BG_MUSIC", "START_FREESPIN_BG_MUSIC"], volume : 0.5,  fadeOutDuration : 1000},
        //button click
        {name : "01_Button_click", type : "game", loop : false, playEvents:["PLAY_GENERIC_BUTTON_SOUND"], volume : 1,  fadeOutDuration : 1000},
        //reel start and stop
        {name : "reel_start", type : "game", loop : false, playEvents:["SPIN_CLICKED"], volume : 1,  fadeOutDuration : 1000},
        {name : "reel_stop", type : "game", loop : false, playEvents:["PLAY_REELSTOP_SOUND"], volume : 1,  fadeOutDuration : 1000},
        //symbol sounds
        {name : "wild_v3", loop : false, playEvents:["PLAY_WILD_SOUND"], volume : 1, stopEvents :["STOP_WILD_SOUND"], fadeOutDuration : 100},
        {name : "s_h1_seven", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 2, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "s_h2_bar", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 3, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "s_h3_Cherries", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 4, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "s_h4_strawberry", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 5, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "s_h5_blueberry", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 6, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "s_l1_lime", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 7, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "s_l2_pear", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 8, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "s_l3_orange", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 9, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "s_l4_bell_v2", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 10, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "s_l5_star", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 11, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "Scatter_v3", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 12, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "Scatter_v3", loop : false, playEvents:["LANDING_SYMBOL_ANIMATION"], volume : 1, stopEvents :[""], fadeOutDuration : 100},
        //Type of wins
        {name : "BIG WIN",  type : "game", loop : false, playEvents:["PLAY_BIGWIN_SPECIAL_SOUND"], volume : 1},
        {name : "MEGA WIN", type : "game",  loop : false, playEvents:["PLAY_MEGAWIN_SPECIAL_SOUND"], volume : 1},
        {name : "GIGANTIC WIN",  type : "game", loop : false, playEvents:["PLAY_GIGANTICWIN_SPECIAL_SOUND"], volume : 1},
        {name : "COLOSSAL WIN",  type : "game", loop : false, playEvents:["PLAY_COLOSSALWIN_SPECIAL_SOUND"], volume : 1},
        {name : "UNBELIEVABLE WIN", type : "game",  loop : false, playEvents:["PLAY_UNBELIEVABLEWIN_SPECIAL_SOUND"], volume : 1},
        //bigwin bgm
        {name : "bigwin_bgm_loop_v2", type : "game", loop : true, playEvents:["PLAY_ALL_WIN_SOUND_BIGWIN"], stopEvents : ["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW", "STOP_ALL_WIN_SOUND_BIGWIN"], volume : 1},
        {name : "bigwin_bgm_ending_v2", type : "game", loop : false, playEvents:["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW"], stopEvents : [""], volume : 1},
        //win counter
        {name : "win_counter_loop_v2", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND"], stopEvents : ["NORMAL_WIN_COUNTUP_DONE", "EXIT_SPINWIN_AMOUNT", "CLEAR_ALL_WIN"], volume : 1,  fadeOutDuration : 100},
        //{name : "win_counter_end", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND_BIGWIN"], stopEvents : ["STOP_ALL_WIN_SOUND_BIGWIN"], volume : 1,  fadeOutDuration : 1000},
        //Slot Machine Coins Win 02
        //
        //Big_win_BGM
    ]
};
