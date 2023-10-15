export const GAME_SOUND_CONFIG = {
    basePath: 'gameassets/',
    commonSoundPath: "../common/",
    properties: {
        VOLUME: 1,
        MUTE: false,
        FADE_TIME: 1000,
    },
    soundFiles: [
        { name: "giftBox", type: "common", loop: false, playEvents: ["TOURNAMENT_PRIZE_POPUP"] },
        //intro sound
        { name: "racetrackrichesmegaboard", type: "game", soundType: "ambient", loop: false, playEvents: ["PLAY_RACETRACK_MEGABOARD_SOUND"], stopEvents: [], volume: 0.6, fadeOutDuration: 1000 },
        //base game bg
        { name: "general_ambiance", type: "game", soundType: "ambient", loop: true, playEvents: ["START_MAINGAME_BG_MUSIC", "STOP_BONUS_SELECTION_BG_MUSIC", "STOP_FREESPIN_BG_MUSIC"], stopEvents: ["START_BONUS_SELECTION_BG_MUSIC", "STOP_MAINGAME_BG_MUSIC", "START_BONUS_BG_MUSIC", "START_FREESPIN_BG_MUSIC"], volume: 0.7, fadeOutDuration: 1000 },
        { name: "game_welcome", type: "game", soundType: "ambient", loop: false, playEvents: ["START_MAINGAME_BG_MUSIC"], stopEvents: [], volume: 0.6, fadeOutDuration: 1000 },
        //button click
        { name: "click_button", type: "game", loop: false, playEvents: ["PLAY_GENERIC_BUTTON_SOUND"], volume: 1, fadeOutDuration: 1000 },
        //reel start and stop
        { name: "reel_spin", type: "game", loop: false, playEvents: ["START_SLOT_SPIN"], stopEvents: ["PLAY_REELSTOP_SOUND", "STOP_REEL_ANIMATION_SOUND_ON_BONUS_END"], volume: 1, fadeOutDuration: 1000 },
        { name: "reel_stop", type: "game", loop: false, playEvents: ["PLAY_REELSTOP_SOUND"], volume: 1, fadeOutDuration: 1000 },
        //symbol sounds
        { name: "wild_added", loop: false, playEvents: ["PLAY_WILD_SOUND"], volume: 1, stopEvents: ["STOP_WILD_SOUND"], fadeOutDuration: 100 },
        { name: "Symbol_win_for_all", loop: false, playEvents: ["PLAY_LINEWIN_SOUND"], volume: 1, stopEvents: ["STOP_LINEWIN_SOUND"], fadeOutDuration: 100 },
        //Landing Animation:
        { name: "bonus1 Landing", type: "game", loop: false, playEvents: ["PLAY_LANDING_SEQUENCE_SOUND"], volume: 1, matchParam: 1, fadeOutDuration: 1000 },
        { name: "bonus2 Landing", type: "game", loop: false, playEvents: ["PLAY_LANDING_SEQUENCE_SOUND"], volume: 1, matchParam: 3, fadeOutDuration: 1000 },
        { name: "bonus3 Landing", type: "game", loop: false, playEvents: ["PLAY_LANDING_SEQUENCE_SOUND"], volume: 1, matchParam: 5, fadeOutDuration: 1000 },
        //scatter Anticipation
        { name: "anticipation Bonus 2 for 3rd reel", type: "game", loop: false, playEvents: ["PLAY_ANTICIPATION_SOUND"], stopEvents: ["STOP_ANTICIPATION_SOUND"], volume: 1, fadeOutDuration: 1000 },
        //Type of wins
        { name: "bw_1bigwin", type: "game", loop: false, playEvents: ["PLAY_BIGWIN_SPECIAL_SOUND"], volume: 1 },
        { name: "bw_2hugewin", type: "game", loop: false, playEvents: ["PLAY_HUGEWIN_SPECIAL_SOUND"], volume: 1 },
        { name: "bw_3lotiwin", type: "game", loop: false, playEvents: ["PLAY_LUCK_OF_THE_TRISBWIN_SPECIAL_SOUND"], volume: 1 },
        //bigwin bgm
        { name: "big_win", type: "game", loop: true, playEvents: ["PLAY_ALL_WIN_SOUND_BIGWIN"], stopEvents: ["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW", "STOP_ALL_WIN_SOUND_BIGWIN"], volume: 1 },
        { name: "big_win_increment_ended", type: "game", loop: false, playEvents: ["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW"], stopEvents: [""], volume: 1 },
        //win counter
        { name: "Normal Win increment", type: "game", loop: true, playEvents: ["PLAY_ALL_WIN_SOUND"], stopEvents: ["NORMAL_WIN_COUNTUP_DONE", "EXIT_SPINWIN_AMOUNT", "CLEAR_ALL_WIN"], volume: 1, fadeOutDuration: 100 },
        { name: "Normal Win increment_stop", type: "game", loop: false, playEvents: ["NORMAL_WIN_COUNTUP_DONE"], volume: 1, fadeOutDuration: 100 },
        //Main Game Jockey Sounds
        { name: "modifier_awake", type: "game", loop: false, playEvents: ["PLAY_GREEN_GENERAL_AWAKE_SOUND"], stopEvents: ["PLAY_GREEN_JUMP_TO_MOVE_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "jokey_jump_prepare_to_move", type: "game", loop: false, playEvents: ["PLAY_GREEN_JUMP_TO_MOVE_SOUND"], stopEvents: ["PLAY_GREEN_RIDE_GENERAL_GAME_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "jokey_ride_general_game", type: "game", loop: false, playEvents: ["PLAY_GREEN_RIDE_GENERAL_GAME_SOUND"], stopEvents: ["PLAY_GREEN_COMEBACK_SOUND", "STOP_GREEN_GENERAL_GAME_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "jokey_appear_general_game", type: "game", loop: false, playEvents: ["PLAY_GREEN_COMEBACK_SOUND"], stopEvents: ["PLAY_GREEN_SNORING_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "snoore1", type: "game", loop: false, playEvents: ["PLAY_GREEN_SNORING_SOUND"], stopEvents: ["PLAY_GREEN_GENERAL_AWAKE_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "snoore2", type: "game", loop: false, playEvents: ["PLAY_GREEN_IDLE_SNORING_SOUND"], stopEvents: ["STOP_IDLE_SLEEP_SOUND", "PLAY_GREEN_GENERAL_AWAKE_SOUND"], volume: 1, fadeOutDuration: 100 },
        //Smoke effect
        { name: "smoke_effect", type: "game", loop: false, playEvents: ["PLAY_SMOKE_EFFECT_SOUND"], volume: 1, fadeOutDuration: 100 },
        //Rainbow Anticipation
        { name: "anticipation2 Bonus 3 for 3rd reel", type: "game", loop: false, playEvents: ["PLAY_RAINBOW_ANTICIPATION_SOUND"], stopEvents: ["STOP_RAINBOW_ANTICIPATION_SOUND"], volume: 1, fadeOutDuration: 1000 },
        //rainbowRespin sounds
        { name: "rainbowrespin", type: "game", loop: false, playEvents: ["PLAY_RAINBOW_RESPIN_SOUND"], volume: 1, fadeOutDuration: 100 },
        //rainbowRespin_failure case
        // { name: "rainbowrespinmiss_whatareyoudoing", type: "game", loop: false, playEvents: ["PLAY_RAINBOW_RESPIN_FAILURE_END_SOUND"], volume: 1, fadeOutDuration: 100 },
        //winSpin Sounds
        { name: "winspin", type: "game", loop: false, playEvents: ["PLAY_WIN_SPIN_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "win_spin_reel_animation", type: "game", loop: true, playEvents: ["PLAY_WIN_SPIN_SYMBOL_ROTATING_SOUND"], stopEvents: ["STOP_WIN_SPIN_SYMBOL_ROTATING_SOUND"], volume: 1, fadeOutDuration: 1000 },
        //jockeyWild Sounds
        { name: "jockeywilds", type: "game", loop: false, playEvents: ["PLAY_JOCKEY_WILD_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "jokey_wild_10", type: "game", loop: false, playEvents: ["PLAY_JOCKEY_WILD_PLACEMENT_SOUND"], volume: 1, fadeOutDuration: 100 },
        //winLaughSound
        { name: "laugh2", type: "game", loop: false, playEvents: ["PLAY_LAUGH_SOUND_BEFORE_WIN"], volume: 1, fadeOutDuration: 100 },
        //megaboard
        { name: "megaboard_animation", type: "game", loop: true, playEvents: ["PLAY_MEGABOARD_APPEAR_SOUND"], stopEvents: ["STOP_MEGABOARD_APPEAR_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "megaboardtriggered", type: "game", loop: false, playEvents: ["PLAY_MEGABOARD_TRIGGERED_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "megaboard_congratulations", type: "game", loop: false, playEvents: ["PLAY_MEGABOARD_WIN_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "megaboard_triggered_text_dissappear", type: "game", loop: false, playEvents: ["STOP_MEGABOARD_APPEAR_SOUND"], volume: 1, fadeOutDuration: 100 },
        // freeSpins
        { name: "freespin_ambiance", type: "game", soundType: "ambient", loop: true, playEvents: ["START_FREESPIN_BG_MUSIC"], stopEvents: ["STOP_FREESPIN_BG_MUSIC"], volume: 0.6, fadeOutDuration: 1000 },

        //MegaboardSuccess Sounds
        //megaboardFirstLevel
        { name: "threetwoone", type: "game", loop: false, playEvents: ["PLAY_MEGABONUS_START_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "mb_lovelylap", type: "game", loop: false, playEvents: ["PLAY_FIRST_LAP_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "lap_info_hide", type: "game", loop: false, playEvents: ["PLAY_LAP_INFO_HIDE_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "popup_hide", type: "game", loop: false, playEvents: ["PLAY_MINIPOPUP_HIDE_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "dice_click", type: "game", loop: false, playEvents: ["PLAY_DICE_ANIM_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "countondice", type: "game", loop: false, playEvents: ["PLAY_LIGHT_DICE_ANIM_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "dice_win", type: "game", loop: false, playEvents: ["PLAY_DICE_WIN_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "extra_roll_text_appear", type: "game", loop: false, playEvents: ["PLAY_EXTRA_ROLL_TEXT_APPEAR_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "roll", type: "game", loop: false, playEvents: ["PLAY_ANYWHERE_TO_ROLL_DICE_SOUND"], volume: 1, fadeOutDuration: 100 },
        //mystery reached
        { name: "ohh", type: "game", loop: false, playEvents: ["PLAY_JOCKEY_MYSTERY_REACHED_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "mystery_added", type: "game", loop: false, playEvents: ["PLAY_MYSTERY_ADDED_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "mystery_transform", type: "game", loop: false, playEvents: ["PLAY_MYSTERY_TRANSFORM_SOUND"], volume: 1, fadeOutDuration: 100 },
        //redJockey Movement sounds
        { name: "bad_guys_prepare_to_move", type: "game", loop: false, playEvents: ["PLAY_RED_JUMP_TO_MOVE_SOUND"], stopEvents: ["PLAY_RED_RIDE_GENERAL_GAME_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "bad_guy_moving", type: "game", loop: false, playEvents: ["PLAY_RED_RIDE_GENERAL_GAME_SOUND"], stopEvents: ["STOP_RED_RIDE_GENERAL_GAME_SOUND", "PLAY_RED_SNORING_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "snoore5", type: "game", loop: false, playEvents: ["PLAY_RED_SNORING_SOUND"], stopEvents: ["PLAY_RED_JUMP_TO_MOVE_SOUND"], volume: 1, fadeOutDuration: 100 },
        //green at x2, X3, X5
        { name: "lookatthat", type: "game", loop: false, playEvents: ["PLAY_ALL_WIN_MULTIPLIER_SOUND"], stopEvents: [], volume: 1, fadeOutDuration: 100 },
        //at removed reached
        { name: "laugh", type: "game", loop: false, playEvents: ["PLAY_ELEMENT_REMOVED_REACHED_SOUND"], stopEvents: [], volume: 1, fadeOutDuration: 100 },
        //remove Box added
        { name: "paper_effect", type: "game", loop: false, playEvents: ["PLAY_ELEMENT_REMOVED_BOX_ADDED_SOUND"], stopEvents: [], volume: 1, fadeOutDuration: 100 },
        //level upgradation
        { name: "lap_info_show", type: "game", loop: false, playEvents: ["PLAY_LAP_INFO_SHOW_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "popup_show", type: "game", loop: false, playEvents: ["PLAY_MINIPOPUP_SHOW_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "mb_nextlap", type: "game", loop: false, playEvents: ["PLAY_SECOND_LAP_SOUND"], volume: 1, fadeOutDuration: 100 },
        //1xBet,...
        { name: "boob", type: "game", loop: true, playEvents: ["PLAY_X_BET_SOUND"], stopEvents: ["STOP_X_BET_SOUND"], volume: 1, fadeOutDuration: 100 },
        //finalLap
        { name: "mb_finallap", type: "game", loop: false, playEvents: ["PLAY_THIRD_LAP_SOUND"], volume: 1, fadeOutDuration: 100 },
        //bigMoneytrophy
        { name: "bigmoney_trophy", type: "game", loop: false, playEvents: ["PLAY_BIG_MONEY_TROPHY_HEIGHTLIGHT_SOUND"], volume: 1, fadeOutDuration: 100 },
        //bigmoneymulitplier
        { name: "bigmoney", type: "game", loop: false, playEvents: ["PLAY_BIG_MONEY_TRIGGERED_ANIM_SOUND"], volume: 1, fadeOutDuration: 100 },
        //Megaboard Failure Case Sounds
        { name: "caught Bad guy over pass", type: "game", loop: false, playEvents: ["PLAY_RED_CROSS_GREEN_SOUND"], stopEvents:["STOP_RED_CAUGHT_GREEN_SOUND"], volume: 1, fadeOutDuration: 100 },
        //jockey caught nearly miss
        { name: "nearmiss", type: "game", loop: false, playEvents: ["PLAY_REDJOCKEY_NEAR_GREENJOCKEY_SOUND"], stopEvents: ["STOP_NEAR_SOUND"], volume: 1, fadeOutDuration: 100 },
        //postmegaboard screen sounds:
        //cups rotating sounds after clicked on screen
        { name: "multiplier_spin", type: "game", loop: false, playEvents: ["PLAY_CUPS_ROTATING_SOUND"], stopEvents: ["STOP_CUPS_ROTATING_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "multiplier_win", type: "game", loop: false, playEvents: ["PLAY_CUP_MULTIPLIER_WIN_SOUND"], volume: 1, fadeOutDuration: 100 },

    ]
};
