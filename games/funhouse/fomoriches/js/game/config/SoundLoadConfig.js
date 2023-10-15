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
        {name : "Base game BGM", type : "game", soundType : "ambient", loop : true, playEvents:["START_MAINGAME_BG_MUSIC"], stopEvents:["STOP_MAINGAME_BG_MUSIC", "START_BONUS_BG_MUSIC", "START_FREESPIN_BG_MUSIC"], volume : 0.4,  fadeOutDuration : 1000},
        //button click
        {name : "btn_spin", type : "game", loop : false, playEvents:["PLAY_GENERIC_BUTTON_SOUND"], volume : 1,  fadeOutDuration : 1000},
        //reel start and stop
        {name : "reel_start", type : "game", loop : false, playEvents:["SPIN_CLICKED"], volume : 1,  fadeOutDuration : 1000},
        {name : "sfx_Reel_Spinning sound", type : "game", loop : false, playEvents:["SPIN_CLICKED"],stopEvents : ["PLAY_REELSTOP_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "sfx_reel_Natural_stop", type : "game", loop : false, playEvents:["PLAY_REELSTOP_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "sfx_reel_force_stop_when press stop", type : "game", loop : false, playEvents:["PLAY_REELSTOP_SOUND"], volume : 1,  fadeOutDuration : 1000},
        //symbol sounds
        {name : "sfx_wild_land", loop : false, playEvents:["PLAY_WILD_SOUND"], volume : 1, stopEvents :["STOP_WILD_SOUND"], fadeOutDuration : 100},
        {name : "sfx_bitcoin_win", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 2, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "sfx_ethereum_win", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 3, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "sfx_binance_win", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 4, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "sfx_tetherUSDT_win", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 5, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "sfx_nft_win", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 6, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "sfx_satoshi_win", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 7, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "sfx_crymanRedhat_win", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 8, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "sfx_dog_win", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 9, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "sfx_richmanDiamon_win", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 10, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "sfx_pizza_win", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 11, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "sfx_scatter_land_Reel0", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 12, volume : 1, stopEvents :[""], fadeOutDuration : 100},
        {name : "sfx_scatter_land_Reel4", loop : false, playEvents:["LANDING_SYMBOL_ANIMATION"], volume : 1, stopEvents :[""], fadeOutDuration : 100},
        //Type of wins
        {name : "BIG WIN",  type : "game", loop : false, playEvents:["PLAY_BIGWIN_SPECIAL_SOUND"], volume : 1.4},
        {name : "MEGA WIN", type : "game",  loop : false, playEvents:["PLAY_MEGAWIN_SPECIAL_SOUND"], volume : 1.4},
        {name : "GIGANTIC WIN",  type : "game", loop : false, playEvents:["PLAY_GIGANTICWIN_SPECIAL_SOUND"], volume : 1.4},
        {name : "COLOSSAL WIN",  type : "game", loop : false, playEvents:["PLAY_COLOSSALWIN_SPECIAL_SOUND"], volume : 1.4},
        {name : "UNBELIEVABLE WIN", type : "game",  loop : false, playEvents:["PLAY_UNBELIEVABLEWIN_SPECIAL_SOUND"], volume : 1.4},
        //bigwin bgm
        {name : "bigwin_loop", type : "game", loop : true, playEvents:["PLAY_ALL_WIN_SOUND_BIGWIN"], stopEvents : ["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW","STOP_ALL_WIN_SOUND_BIGWIN"], volume : 0.8},
        {name : "Big Win_ending", type : "game", loop : false, playEvents:["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW"], stopEvents : [""], volume : 1},
        {name : "Big Win Coins drop", type : "game", loop : false, playEvents:["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW"], stopEvents : ["STOP_ALL_WIN_SOUND_BIGWIN"], volume : 1},
        //win counter
        {name : "win", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "win_counter", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND"], stopEvents : ["NORMAL_WIN_COUNTUP_DONE", "EXIT_SPINWIN_AMOUNT", "CLEAR_ALL_WIN"], volume : 1,  fadeOutDuration : 100},
        {name : "win_counter_end", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND_BIGWIN"], stopEvents : ["STOP_ALL_WIN_SOUND_BIGWIN"], volume : 1,  fadeOutDuration : 1000},
        
    ]
};
