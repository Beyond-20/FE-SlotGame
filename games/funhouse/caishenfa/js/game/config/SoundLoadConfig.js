export const GAME_SOUND_CONFIG = {
    basePath: 'gameassets/',
    commonSoundPath: "../common/",
    properties: {
        VOLUME: 1,
        MUTE: false,
        FADE_TIME: 1200,
    },
    soundFiles: [
        { name: "giftBox", type: "common", loop: false, playEvents: ["TOURNAMENT_PRIZE_POPUP"] },
        //BGM Sound
        //{ name: "Base Game BGM", type: "game", soundType: "ambient", loop: true, playEvents: ["START_MAINGAME_BG_MUSIC"], stopEvents: ["STOP_MAINGAME_BG_MUSIC"], volume: 0.5, fadeOutDuration: 1000 },
        //Button Click Sound
        { name: "01_Button_click", type: "game", loop: false, playEvents: ["PLAY_GENERIC_BUTTON_SOUND"], volume: 1, fadeOutDuration: 1000 },
        //reel start,stop
        { name: "spin start", type: "game", loop: false, playEvents: ["START_SLOT_SPIN"], volume: 0.2, fadeOutDuration: 1000 },
        { name: "spin stop", type: "game", loop: false, playEvents: ["PLAY_REELSTOP_SOUND"], volume: 1, fadeOutDuration: 1000 },
        { name: "spin music 2", type: "game", loop: false, playEvents: ["PLAY_REEL_SOUND"], stopEvents: ["STOP_REEL_SOUND"], volume: 1, fadeOutDuration: 1000 },
        //Anticipation
        { name: "anticipation", type: "game", loop: false, playEvents: ["PLAY_ANTICIPATION_SOUND"], stopEvents: ["STOP_ANTICIPATION_SOUND"], volume: 1, fadeOutDuration: 100 },
        //win
        { name: "normal win counter", type: "game", loop: false, playEvents: ["PLAY_ALL_WIN_SOUND"], stopEvents: ["NORMAL_WIN_COUNTUP_DONE", "EXIT_SPINWIN_AMOUNT", "CLEAR_ALL_WIN"], volume: 1, fadeOutDuration: 1000 },
        { name: "Normal win counter end", type: "game", loop: false, playEvents: ["NORMAL_WIN_COUNTUP_DONE"], volume: 1, fadeOutDuration: 100 },
        //symbol sound
        { name: "Symbol Caishen on fish", loop: false, playEvents: ["PLAY_LINEWIN_SOUND"], matchParam: 1, volume: 1, stopEvents: [""], fadeOutDuration: 1000 },
        { name: "Symbol Standing caishen", loop: false, playEvents: ["PLAY_LINEWIN_SOUND"], matchParam: 2, volume: 1, stopEvents: [""], fadeOutDuration: 1000 },
        { name: "Symbol lion dance", loop: false, playEvents: ["PLAY_LINEWIN_SOUND"], matchParam: 3, volume: 1, stopEvents: [""], fadeOutDuration: 1000 },
        //bigwin 3OAK
        { name: "Big win 3OAK", type: "game", loop: true, playEvents: ["PLAY_ALL_WIN_SOUND_BIGWIN"], stopEvents: ["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW","STOP_ALL_WIN_SOUND_BIGWIN"], volume: 1, fadeOutDuration: 1000 },
        //power chance,antipation sound
        { name: "POWER CHANCE-Final Voiceover", type: "game", loop: false, playEvents: ["PLAY_POWER_CHANCE_SOUND"], volume: 1, fadeOutDuration: 1000 },
        { name: "anticipation rise2", type: "game", loop: false, playEvents: ["PLAY_POWER_ANTICIPATION_RISE_SOUND"], stopEvents: ["PLAY_POWER_ANTICIPATION_END_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "anticipation end", type: "game", loop: false, playEvents: ["PLAY_POWER_ANTICIPATION_END_SOUND"], stopEvents: [], volume: 1, fadeOutDuration: 100 },
    ]
};
