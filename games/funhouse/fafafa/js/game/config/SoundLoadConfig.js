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
        {name : "Fa Fa Fa BGM1", type : "game", soundType : "ambient", loop : true, playEvents:["START_MAINGAME_BG_MUSIC"], stopEvents:["STOP_MAINGAME_BG_MUSIC", "START_BONUS_BG_MUSIC", "START_FREESPIN_BG_MUSIC", "PLAY_FS_FIRST_INTRO"], volume : 0.75,  fadeOutDuration : 1000},
        {name : "25_FreeMusic", type : "game", soundType : "ambient", loop : true, playEvents:["START_FREESPIN_BG_MUSIC"], stopEvents:["STOP_FREESPIN_BG_MUSIC"], volume : 0.5,  fadeOutDuration : 1000},
        {name : "01_Button_click", type : "game", loop : false, playEvents:["PLAY_GENERIC_BUTTON_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "02_InfoPage_02(leaveinfo)", type : "game", loop : false, playEvents:["PLAY_INTRO_CLICK_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "11_Win_symbol_5", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "Big Band Prize", type : "game", loop : false, playEvents:["PLAY_ALL_WIN_SOUND_BIGWIN"], volume : 1,  fadeOutDuration : 1000},
        {name : "06_MainSpining", type : "game", loop : false, playEvents:["SPIN_CLICKED"], volume : 1,  fadeOutDuration : 1000},
        {name : "06_MainSpinStop", type : "game", loop : false, playEvents:["PLAY_REELSTOP_SOUND"], volume : 1,  fadeOutDuration : 1000},
        {name : "21_ScatterCome_01", type : "game", loop : false, playEvents:["LANDING_SYMBOL_ANIMATION"], volume : 1,  fadeOutDuration : 1000},


        {name : "12_Symbol_Cai green man", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 2, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "13_Symbol_Fu Blue grandpa", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 3, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "14_Symbol_Boy", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 4, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "15_Symbol_Girl", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 5, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "16_Symbol_Drum", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 6, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "17_Symbol_Jade", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 7, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "18_Symbol_Firecracker", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 8, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "19_Symbol_Coins redpacket", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 9, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "20_WildGold_01 red", loop : false, playEvents:["PLAY_LINEWIN_SOUND"], matchParam : 0, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "21_ScatterdanceShow", loop : true, playEvents:["PLAY_SCATTER_DRUM_SOUND"], stopEvents :["PLAY_FS_FIRST_DOOR_OPEN"], fadeOutDuration : 1000},
        {name : "11_Symbol_Wild spinning", loop : false, playEvents:["PLAY_MAINGAME_WILDEXPANSION_INTRO"], volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "20_WildGold_02 red", loop : false, playEvents:["PLAY_MAINGAME_WILDEXPANSION_COINFALL"], volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "free game pre intro 4 wording banner", loop : true, playEvents:["PLAY_FS_FIRST_INTRO"], volume : 1, stopEvents :["PLAY_SCATTER_DRUM_SOUND"]},
        {name : "39_SoundFaFaFa_01", loop : false, playEvents:["PLAY_FS_FIRST_DOOR_OPEN"], volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "24_GodWealth intro before Free game", loop : false, playEvents:["PLAY_FS_CHAR_ANIM_SOUND"], volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "29_GoldBat_placement below reel", loop : false, playEvents:["PLAY_FS_BAT_ANIMATION_SOUND"], volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "Free Game Fa Fa Fa Roll down", loop : false, playEvents:["PLAY_FS_WILD_EXPANSION_SOUND"], volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "39_AllSame_WildGold", loop : false, playEvents:["PLAY_FS_ALLOFAKIND"], matchParam : 0, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "39_AllSame_Cai", loop : false, playEvents:["PLAY_FS_ALLOFAKIND"], matchParam : 1, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "39_AllSame_Fu", loop : false, playEvents:["PLAY_FS_ALLOFAKIND"], matchParam : 2, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "39_AllSame_Boy", loop : false, playEvents:["PLAY_FS_ALLOFAKIND"], matchParam : 3, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "39_AllSame_Girl", loop : false, playEvents:["PLAY_FS_ALLOFAKIND"], matchParam : 4, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "39_AllSame_Drum", loop : false, playEvents:["PLAY_FS_ALLOFAKIND"], matchParam : 5, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "39_AllSame_Jade", loop : false, playEvents:["PLAY_FS_ALLOFAKIND"], matchParam : 6, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "39_AllSame_Firecracker", loop : false, playEvents:["PLAY_FS_ALLOFAKIND"], matchParam : 7, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        {name : "55-Aok_Red_packet_01", loop : false, playEvents:["PLAY_FS_ALLOFAKIND"], matchParam : 8, volume : 1, stopEvents :[""], fadeOutDuration : 1000},




    ]
};
