export const GAME_CONFIG = {
    gameFHDWidth : 2560,
    gameFHDHeight : 1440,
    gameHDWidth : 1920,
    gameHDHeight : 1080,
    desktopWidth : 1920,
    desktopHeight : 1080,
    gameBGColor : 0x000000,
    globalAnimSpeed : 0.50,
    debugMode : false,
    gameName : "FH Fa Fa Fa",
    configPath : "gameassets/",
    commonPath : "../common/",
    gamePath : "gameassets/",
    gameVersion : "0.06",
    gameId1 : "fhfafafa",
    gameId : "fafafa",
    noOfLines : 9,
    creditValue : 1,
    initURL : "init",
    spinURL : "spin",
    bonusURL : "feature",
    bigWinMultipliers : [0,20,50,100,150,200],
    allofakindInFS : true,
    buyBonusBetMultiplier : 100,
    messageTimeoutDelay : 16000,
    winDestroyDelay : 0.5,
    playerId : "123441",
    playLineWinSound : true,
    dontCountUp : true,
    isStandAlone : false,
    hideExtraSymbols : false,
    featureTypes : {
        select : "select",
        freespins : "freespins",
        cashaward : "cashaward"
    },
    rtpValue : "97.00",
    allofakindSounds : {
        "WD" : {name : "39_AllSame_WildGold", loop : false, playEvents:["PLAY_FS_ALLOFAKIND"], matchParam : 0, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        "WDF" : {name : "39_AllSame_WildGold", loop : false, playEvents:["PLAY_FS_ALLOFAKIND"], matchParam : 0, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        "SC" : {name : "39_AllSame_WildGold", loop : false, playEvents:["PLAY_FS_ALLOFAKIND"], matchParam : 0, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        "H1" : {name : "39_AllSame_Cai", loop : false, playEvents:["PLAY_FS_ALLOFAKIND"], matchParam : 1, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        "H2" : {name : "39_AllSame_Fu", loop : false, playEvents:["PLAY_FS_ALLOFAKIND"], matchParam : 2, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        "H3" : {name : "39_AllSame_Boy", loop : false, playEvents:["PLAY_FS_ALLOFAKIND"], matchParam : 3, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        "H4" : {name : "39_AllSame_Girl", loop : false, playEvents:["PLAY_FS_ALLOFAKIND"], matchParam : 4, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        "L1" : {name : "39_AllSame_Drum", loop : false, playEvents:["PLAY_FS_ALLOFAKIND"], matchParam : 5, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        "L2" : {name : "39_AllSame_Jade", loop : false, playEvents:["PLAY_FS_ALLOFAKIND"], matchParam : 6, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        "L3" : {name : "39_AllSame_Firecracker", loop : false, playEvents:["PLAY_FS_ALLOFAKIND"], matchParam : 7, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
        "L4" : {name : "55-Aok_Red_packet_01", loop : false, playEvents:["PLAY_FS_ALLOFAKIND"], matchParam : 8, volume : 1, stopEvents :[""], fadeOutDuration : 1000},
    },
    notNormalQuickStop : true
}
