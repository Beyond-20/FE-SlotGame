export const SLOT_MACHINE_CONFIG = {
    name: "slotMachineComp", type: "Comp", class: "GameSlotMachineComp", showSymbolBeforeBigWin: true,
    Elements: [
        { name: "guideRect", type: "Graphics", color: 0xffff00, width: 1635, height: 1120, alpha: 0.5 },
        { name: "reelFrame", type: "Sprite", image: "reelFrame", scale: 0.8, x: -181, y: 170 },
        { name: "gamelogo", type: "Sprite", image: "gamelogo", anchor: { x: 0.5, y: 0 }, x: 819, y: 20, py: 20, scale: 0.4, pScale: 0.4, onTop: true },
        { name: "gamelogoL", type: "Sprite", image: "gamelogo_splash", x: -352, y: 506, scale: 0.55, onTop: true },
        {
            name: "winAmountComp", type: "Comp", class: "SlotSpinWinAnimAmountCompV2", x: 824, y: 692,
            Elements: [
                { name: "winText", type: "Text", style: "winAmountStyle", fontSize: 250, anchor: { x: 0.5, y: 0.5 } }
            ]
        },
        {
            name: "slotMachine", type: "Comp", class: "GameSlotMachine", x: 0, y: 160, disableMask: true,
            Elements: [
                { name: "maskRect", type: "Graphics", color: 0xff0000, width: 1617, height: 829, x: 8, y: 96 },
                { name: "coverRect", type: "Graphics", color: 0x000000, width: 10000, height: 10000, x: -1000, y: -2000, alpha: 0.6 },
                {
                    name: "paylinesComp", type: "Comp", class: "SlotPaylinesComp", x: 8, y: 116, scale: { x: 0.8, y: 0.8 },
                    Elements: [
                        { name: "payline1", type: "Sprite", image: "1", x: 0, y: 489 },
                        { name: "payline2", type: "Sprite", image: "2", x: 0, y: 145 },
                        { name: "payline3", type: "Sprite", image: "3", x: 0, y: 839 },
                        { name: "payline4", type: "Sprite", image: "4 ", x: 0, y: 145 },
                        { name: "payline5", type: "Sprite", image: "5", x: 0, y: 129 },
                        { name: "payline6", type: "Sprite", image: "6", x: 0, y: 143 },
                        { name: "payline7", type: "Sprite", image: "7", x: 0, y: 480 },
                        { name: "payline8", type: "Sprite", image: "8 ", x: 0, y: 133 },
                        { name: "payline9", type: "Sprite", image: "9", x: 0, y: 489 },
                        { name: "payline10", type: "Sprite", image: "10 ", x: 0, y: 130 },
                        { name: "payline11", type: "Sprite", image: "11", x: 0, y: 480 },
                        { name: "payline12", type: "Sprite", image: "12", x: 0, y: 139 },
                        { name: "payline13", type: "Sprite", image: "13", x: 0, y: 483 },
                        { name: "payline14", type: "Sprite", image: "14", x: 0, y: 128 },
                        { name: "payline15", type: "Sprite", image: "15", x: 0, y: 488 },
                        { name: "payline16", type: "Sprite", image: "16", x: 0, y: 148 },
                        { name: "payline17", type: "Sprite", image: "17", x: 0, y: 480 },
                        { name: "payline18", type: "Sprite", image: "18", x: 0, y: 145 },
                        { name: "payline19", type: "Sprite", image: "19", x: 0, y: 128 },
                        { name: "payline20", type: "Sprite", image: "20 ", x: 0, y: 140 },
                    ]
                }
            ],
            data: {
                noOfReels: 5,
                noOfRows: 3,
                reelHeight: 1000,
                reelsView1: [[1, 2, 3], [4, 5, 7], [7, 8, 2], [4, 11, 0], [6, 2, 10]],
                reelsView: [["H1", "H2", "H3"], ["H4", "L1", "L2"], ["L3", "L4", "L5"], ["L6", "L6", "L3"], ["L3", "L4", "L2"]],
                reelPositionX: [8, 328, 656, 983, 1305],
                reelContainerPos: { x: 167, y: 242 },
                symbolHeight: 276,
                symbolGap: 0,
                anticipationSymbols: ["SC"],
                landingSymbols: ["SC"],
                anticipationDelay: 2500,
                multiSymb: { name: "multiplierSymbol", type: "Sprite", image: "symbX" },
                //winFrame: { name: "winFrame", type: "Spine", spineName: "effects", defaultState: "LineWin", loop: true, scale: 0.96, y: 14 },
                symbolsData: {
                    "WD": {
                        name: "WD",
                        animation: { prefix: "WILD_dolphin_000", postfix: "", start: 0, end: 44, scale: 0.8, x: 0, y: -6, toAddZero: true },
                    },
                    "H1": { name: "H1", animation: { prefix: "fish_0000", postfix: "", start: 0, end: 1, toAddZero: false } },
                    "H2": { name: "H2", animation: { prefix: "turtles_0000", postfix: "", start: 0, end: 1, toAddZero: false } },
                    "H3": { name: "H3", animation: { prefix: "shell_0000", postfix: "", start: 0, end: 1, toAddZero: false } },
                    "H4": { name: "H4", animation: { prefix: "horse_0000", postfix: "", start: 0, end: 1, toAddZero: false } },
                    "L1": { name: "L1", animation: { prefix: "a_0000", postfix: "", start: 0, end: 1, toAddZero: false } },
                    "L2": { name: "L2", animation: { prefix: "k_0000", postfix: "", start: 0, end: 1, toAddZero: false } },
                    "L3": { name: "L3", animation: { prefix: "q_0000", postfix: "", start: 0, end: 1, toAddZero: false } },
                    "L4": { name: "L4", animation: { prefix: "j_0000", postfix: "", start: 0, end: 1, toAddZero: false } },
                    "L5": { name: "L5", animation: { prefix: "10_0000", postfix: "", start: 0, end: 1, toAddZero: false } },
                    "L6": { name: "L6", animation: { prefix: "9_0000", postfix: "", start: 0, end: 1, toAddZero: false } },
                    "SC": {
                        name: "SC",
                        animation: { prefix: "chest_start_000", postfix: "", start: 0, end: 55, toAddZero: true, x: -7, y: -38 },
                        landingAnimation: { prefix: "chest_start_000", postfix: "", start: 0, end: 1, toAddZero: true, x: -7, y: -38 }
                    },
                    winningSoundIndex: [["WD"], ["H1"], ["H2"], ["H3"], ["H4"], ["L1"], ["L2"], ["L3"], ["L4"], ["L5"], ["L6"], ["SC"]]
                },
            },
        },
        //wildExpansion Anim
        { name: "wildFrameOpen1", type: "AnimatedSprite", animation: { prefix: "frame_open_000", postfix: "", start: 0, end: 29, toAddZero: true, loop: true, playOnStart: true }, x: 493, y: 675 },
        { name: "wildFrameOpen2", type: "AnimatedSprite", animation: { prefix: "frame_open_000", postfix: "", start: 0, end: 29, toAddZero: true, loop: true, playOnStart: true }, x: 1146, y: 675 },
        { name: "wildFrameCicly1", type: "AnimatedSprite", animation: { prefix: "frame_cicly_000", postfix: "", start: 0, end: 29, toAddZero: true, loop: true, playOnStart: true }, x: 493, y: 675 },
        { name: "wildFrameCicly2", type: "AnimatedSprite", animation: { prefix: "frame_cicly_000", postfix: "", start: 0, end: 29, toAddZero: true, loop: true, playOnStart: true }, x: 1146, y: 675 },
        { name: "dolphinJump1", type: "AnimatedSprite", animation: { prefix: "dolfin_000", postfix: "", start: 0, end: 28, toAddZero: true, loop: true, playOnStart: true }, scale: 0.7, x: 860, y: 408 },
        { name: "dolphinJump2", type: "AnimatedSprite", animation: { prefix: "dolfin_000", postfix: "", start: 0, end: 28, toAddZero: true, loop: true, playOnStart: true }, scale: -0.7, x: 780, y: 674 },
        { name: "dolphinJump3", type: "AnimatedSprite", animation: { prefix: "dolfin_000", postfix: "", start: 0, end: 28, toAddZero: true, loop: true, playOnStart: true }, scale: 0.7, x: 860, y: 973 },
    ],
    layoutData: {
        "Desktop": { hAlign: "center", vAlign: "middle", widthPerc: 1, heightPerc: 1 },
        "Portrait": { hAlign: "center", vAlign: "top" },
        "Landscape": { hAlign: "center", vAlign: "top", heightPerc: 1.3, widthPerc: 1, hPaddingPerc: 0, vPaddingPerc: -0.115 },
    }

}
