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
        //{ name: "racetrackrichesmegaboard", type: "game", soundType: "ambient", loop: false, playEvents: ["PLAY_RACETRACK_MEGABOARD_SOUND"], stopEvents: [], volume: 0.6, fadeOutDuration: 1000 },
        //base game bg
        { name: "18.base_bgm_2", type: "game", soundType: "ambient", loop: true, playEvents: ["START_MAINGAME_BG_MUSIC", "STOP_BONUS_SELECTION_BG_MUSIC", "STOP_FREESPIN_BG_MUSIC"], stopEvents: ["START_BONUS_SELECTION_BG_MUSIC", "STOP_MAINGAME_BG_MUSIC", "START_BONUS_BG_MUSIC", "START_FREESPIN_BG_MUSIC"], volume: 0.7, fadeOutDuration: 1000 },
        //button click
        { name: "click_button", type: "game", loop: false, playEvents: ["PLAY_GENERIC_BUTTON_SOUND"], volume: 1, fadeOutDuration: 1000 },
        //reel start and stop
        { name: "reel_spin", type: "game", loop: false, playEvents: ["START_SLOT_SPIN"], stopEvents: ["PLAY_REELSTOP_SOUND", "STOP_REEL_ANIMATION_SOUND_ON_BONUS_END"], volume: 1, fadeOutDuration: 1000 },
        { name: "reel_stop", type: "game", loop: false, playEvents: ["PLAY_REELSTOP_SOUND"], volume: 1, fadeOutDuration: 1000 },
        //symbol sounds
        { name: "wild_added", loop: false, playEvents: ["PLAY_WILD_SOUND"], volume: 1, stopEvents: ["STOP_WILD_SOUND"], fadeOutDuration: 100 },
        { name: "Symbol_win_for_all", loop: false, playEvents: ["PLAY_LINEWIN_SOUND"], volume: 1, stopEvents: ["STOP_LINEWIN_SOUND"], fadeOutDuration: 100 },
        //Landing Animation:
        { name: "9.Bonus Landing", type: "game", loop: false, playEvents: ["PLAY_LANDING_SEQUENCE_SOUND"], volume: 1, matchParam: 1, fadeOutDuration: 1000 },
        { name: "10.Bonus Landing 2", type: "game", loop: false, playEvents: ["PLAY_LANDING_SEQUENCE_SOUND"], volume: 1, matchParam: 3, fadeOutDuration: 1000 },
        { name: "11.Bonus Landing 3", type: "game", loop: false, playEvents: ["PLAY_LANDING_SEQUENCE_SOUND"], volume: 1, matchParam: 5, fadeOutDuration: 1000 },
        //scatter Anticipation
        { name: "1.Anticipation for bonus middle reel", type: "game", loop: false, playEvents: ["PLAY_ANTICIPATION_SOUND"], stopEvents: ["STOP_ANTICIPATION_SOUND"], volume: 1, fadeOutDuration: 1000 },
        //Type of wins
        { name: "Big Win", type: "game", loop: false, playEvents: ["PLAY_BIGWIN_SPECIAL_SOUND"], volume: 1 },
        { name: "Huge Win", type: "game", loop: false, playEvents: ["PLAY_HUGEWIN_SPECIAL_SOUND"], volume: 1 },
        //bigwin bgm
        { name: "5.Big Win Music", type: "game", loop: false, playEvents: ["PLAY_ALL_WIN_SOUND_BIGWIN"], stopEvents: ["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW"], volume: 1, fadeOutDuration: 0 },
        { name: "6.Big Win Music Ending", type: "game", loop: false, playEvents: ["PLAY_BIG_WIN_COUNTUP_END_SOUND_NOW"], stopEvents: ["STOP_BIG_WIN_COUNTUP"], volume: 1 , fadeOutDuration: 0},
        //win counter
        { name: "22.Winning Counter 2", type: "game", loop: true, playEvents: ["PLAY_ALL_WIN_SOUND"], stopEvents: ["NORMAL_WIN_COUNTUP_DONE", "EXIT_SPINWIN_AMOUNT", "CLEAR_ALL_WIN"], volume: 1, fadeOutDuration: 100 },
        { name: "Normal Win increment_stop", type: "game", loop: false, playEvents: ["NORMAL_WIN_COUNTUP_DONE"], volume: 1, fadeOutDuration: 100 },
        //Main Game monopoly Sounds
        { name: "20.Monopoly Tap Dance Music", type: "game", loop: false, playEvents: ["PLAY_GREEN_JUMP_TO_MOVE_SOUND"], stopEvents: ["PLAY_GREEN_RIDE_GENERAL_GAME_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "20.Monopoly Tap Dance taps", type: "game", loop: false, playEvents: ["PLAY_GREEN_RIDE_GENERAL_GAME_SOUND"], stopEvents: ["PLAY_GREEN_COMEBACK_SOUND", "STOP_GREEN_GENERAL_GAME_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "20.Monopoly Tap Dance taps", type: "game", loop: false, playEvents: ["PLAY_GREEN_COMEBACK_SOUND"], stopEvents: ["PLAY_GREEN_SNORING_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "snore 1", type: "game", loop: false, playEvents: ["PLAY_GREEN_SNORING_SOUND"], stopEvents: [" "], volume: 1, fadeOutDuration: 100 },
        //{ name: "snoore2", type: "game", loop: false, playEvents: ["PLAY_GREEN_IDLE_SNORING_SOUND"], stopEvents: ["STOP_IDLE_SLEEP_SOUND"], volume: 1, fadeOutDuration: 100 },
        //Smoke effect
        { name: "27.Curtain Effect", type: "game", loop: false, playEvents: ["PLAY_CURTAIN_EFFECT_SOUND"], volume: 1, fadeOutDuration: 100 },
        //Rainbow Anticipation
        { name: "2.Anticipation for bonus last reel", type: "game", loop: false, playEvents: ["PLAY_RAINBOW_ANTICIPATION_SOUND"], stopEvents: ["STOP_RAINBOW_ANTICIPATION_SOUND"], volume: 1, fadeOutDuration: 1000 },
        //rainbowRespin sounds
        { name: "Rainbow Respin", type: "game", loop: false, playEvents: ["PLAY_RAINBOW_RESPIN_SOUND"], volume: 1, fadeOutDuration: 100 },
        //rainbowRespin_failure case
        // { name: "rainbowrespinmiss_whatareyoudoing", type: "game", loop: false, playEvents: ["PLAY_RAINBOW_RESPIN_FAILURE_END_SOUND"], volume: 1, fadeOutDuration: 100 },
        //winSpin Sounds
        { name: "WinSpin", type: "game", loop: false, playEvents: ["PLAY_WIN_SPIN_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "Win Spin Animation", type: "game", loop: true, playEvents: ["PLAY_WIN_SPIN_SYMBOL_ROTATING_SOUND"], stopEvents: ["STOP_WIN_SPIN_SYMBOL_ROTATING_SOUND"], volume: 1, fadeOutDuration: 1000 },
        //jockeyWild Sounds
        { name: "Monopoly Wild", type: "game", loop: false, playEvents: ["PLAY_MONOPOLY_WILD_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "jokey_wild_10", type: "game", loop: false, playEvents: ["PLAY_JOCKEY_WILD_PLACEMENT_SOUND"], volume: 1, fadeOutDuration: 100 },
        //winLaughSound
        { name: "Before Win", type: "game", loop: false, playEvents: ["PLAY_LAUGH_SOUND_BEFORE_WIN"], volume: 1, fadeOutDuration: 100 },
        //megaboard
        { name: "megaboard animation", type: "game", loop: true, playEvents: ["PLAY_MEGABOARD_APPEAR_SOUND"], stopEvents: ["STOP_MEGABOARD_APPEAR_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "MonopolyMegaboard", type: "game", loop: false, playEvents: ["PLAY_MEGABOARD_TRIGGERED_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "Megaboard congratulations", type: "game", loop: false, playEvents: ["PLAY_MEGABOARD_WIN_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "megaboard text disappear", type: "game", loop: false, playEvents: ["STOP_MEGABOARD_APPEAR_SOUND"], volume: 1, fadeOutDuration: 100 },
        // freeSpins
        { name: "17.Free Spin BGM", type: "game", soundType: "ambient", loop: true, playEvents: ["START_FREESPIN_BG_MUSIC"], stopEvents: ["STOP_FREESPIN_BG_MUSIC"], volume: 0.6, fadeOutDuration: 1000 },

        //MegaboardSuccess Sounds
        //megaboardFirstLevel
        { name: "321 countdown", type: "game", loop: false, playEvents: ["PLAY_MEGABONUS_START_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "Lovely Lap", type: "game", loop: false, playEvents: ["PLAY_FIRST_LAP_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "lap info hide", type: "game", loop: false, playEvents: ["PLAY_LAP_INFO_HIDE_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "pop hide", type: "game", loop: false, playEvents: ["PLAY_MINIPOPUP_HIDE_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "dice_click", type: "game", loop: false, playEvents: ["PLAY_DICE_ANIM_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "countondice", type: "game", loop: false, playEvents: ["PLAY_LIGHT_DICE_ANIM_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "dice_win", type: "game", loop: false, playEvents: ["PLAY_DICE_WIN_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "extra roll text", type: "game", loop: false, playEvents: ["PLAY_EXTRA_ROLL_TEXT_APPEAR_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "PressAnyqhereToRollDice", type: "game", loop: false, playEvents: ["PLAY_ANYWHERE_TO_ROLL_DICE_SOUND"], volume: 1, fadeOutDuration: 100 },
        //man in car sound
        { name: "Player Moving", type: "game", loop: false, playEvents: ["PLAY_MAN_IN_CAR_SOUND"], stopEvents: ["STOP_MAN_IN_CAR_SOUND"], volume: 1, fadeOutDuration: 100 },
        //mystery reached
        { name: "ohh", type: "game", loop: false, playEvents: ["PLAY_JOCKEY_MYSTERY_REACHED_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "mystery_added", type: "game", loop: false, playEvents: ["PLAY_MYSTERY_ADDED_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "mystery_transform", type: "game", loop: false, playEvents: ["PLAY_MYSTERY_TRANSFORM_SOUND"], volume: 1, fadeOutDuration: 100 },
        //boy on duck Movement sounds
        { name: "3.Riche Rich Prepare to move", type: "game", loop: false, playEvents: ["PLAY_RED_JUMP_TO_MOVE_SOUND"], stopEvents: ["PLAY_RED_RIDE_GENERAL_GAME_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "4.Riche Rich Moving", type: "game", loop: false, playEvents: ["PLAY_RED_RIDE_GENERAL_GAME_SOUND"], stopEvents: ["STOP_RED_RIDE_GENERAL_GAME_SOUND", "PLAY_RED_SNORING_SOUND"], volume: 1, fadeOutDuration: 100 },
        //green at x2, X3, X5
        { name: "lookatthat", type: "game", loop: false, playEvents: ["PLAY_ALL_WIN_MULTIPLIER_SOUND"], stopEvents: [], volume: 1, fadeOutDuration: 100 },
        //at removed reached
        { name: "laugh", type: "game", loop: false, playEvents: ["PLAY_ELEMENT_REMOVED_REACHED_SOUND"], stopEvents: [], volume: 1, fadeOutDuration: 100 },
        //remove Box added
        { name: "paper_effect", type: "game", loop: false, playEvents: ["PLAY_ELEMENT_REMOVED_BOX_ADDED_SOUND"], stopEvents: [], volume: 1, fadeOutDuration: 100 },
        //level upgradation
        { name: "lap info show", type: "game", loop: false, playEvents: ["PLAY_LAP_INFO_SHOW_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "popup_show", type: "game", loop: false, playEvents: ["PLAY_MINIPOPUP_SHOW_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "Next Lap", type: "game", loop: false, playEvents: ["PLAY_SECOND_LAP_SOUND"], volume: 1, fadeOutDuration: 100 },
        //1xBet,...
        { name: "boob", type: "game", loop: true, playEvents: ["PLAY_X_BET_SOUND"], stopEvents: ["STOP_X_BET_SOUND"], volume: 1, fadeOutDuration: 100 },
        //finalLap
        { name: "Final Lap", type: "game", loop: false, playEvents: ["PLAY_THIRD_LAP_SOUND"], volume: 1, fadeOutDuration: 100 },
        //bigMoneytrophy
        { name: "The Trophy Is Mine VO", type: "game", loop: false, playEvents: ["PLAY_BIG_MONEY_TROPHY_HEIGHTLIGHT_SOUND"], volume: 1, fadeOutDuration: 100 },
        //bigmoneymulitplier
        { name: "big money VO", type: "game", loop: false, playEvents: ["PLAY_BIG_MONEY_TRIGGERED_ANIM_SOUND"], volume: 1, fadeOutDuration: 100 },

        //Megaboard Failure Case Sounds
        { name: "16.Riche Rich Takes Over", type: "game", loop: false, playEvents: ["PLAY_RED_CROSS_GREEN_SOUND"], stopEvents: ["STOP_RED_CAUGHT_GREEN_SOUND"], volume: 1, fadeOutDuration: 100 },
        //jockey caught nearly miss
        { name: "near miss", type: "game", loop: false, playEvents: ["PLAY_REDJOCKEY_NEAR_GREENJOCKEY_SOUND"], stopEvents: ["STOP_NEAR_SOUND"], volume: 1, fadeOutDuration: 100 },
        //postmegaboard screen sounds:
        //boxes rotating sounds after clicked on screen
        { name: "multiplier spin", type: "game", loop: false, playEvents: ["PLAY_CUPS_ROTATING_SOUND"], stopEvents: ["STOP_CUPS_ROTATING_SOUND"], volume: 1, fadeOutDuration: 100 },
        { name: "multiplier win", type: "game", loop: false, playEvents: ["PLAY_CUP_MULTIPLIER_WIN_SOUND"], volume: 1, fadeOutDuration: 100 },

    ]
};
