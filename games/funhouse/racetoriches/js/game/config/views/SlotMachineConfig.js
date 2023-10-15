export const SLOT_MACHINE_CONFIG = {
    name: "slotMachineComp", type: "Comp", class: "GameSlotMachineComp", showSymbolBeforeBigWin: true,
    Elements: [
        { name: "guideRect", type: "Graphics", color: 0xff0000, width: 2483, height: 1305 },
        { name: "reelFrame", type: "Sprite", image: "reelFrame", x: -85, y: -207 },
        { name: "rainbowAnticipation", type: "AnimatedSprite", animation: { prefix: "rainbow_000", postfix: "", start: 10, end: 65, toAddZero: true, loop: true, playOnStart: true }, scale: { x: 1.1, y: 0.97 }, x: 2010, y: 706 },
        {
            name: "winAmountComp", type: "Comp", class: "SlotSpinWinAnimAmountComp", x: 1280, y: 680, durationFactor: 0.25,
            Elements: [
                { name: "winText", type: "Text", style: "winAmountStyle", fontSize: 350, anchor: { x: 0.5, y: 0.5 } }
            ]
        },
        {
            name: "slotMachine", type: "Comp", class: "GameSlotMachine",
            anticipationConfig: {
                totalElements: 5,
                element: {
                    name: "anti", type: "Container",
                    Elements: [
                        { name: "anticipation1", type: "AnimatedSprite", animation: { prefix: "frame_000", postfix: "", start: 0, end: 74, toAddZero: true, loop: true, playOnStart: true }, scale: { x: 1.1, y: 1 } },
                    ]
                },
                positions: [{ x: 480, y: 706 }, { x: 865, y: 706 }, { x: 1240, y: 706 }, { x: 1620, y: 706 }, { x: 2010, y: 706 }]
            },
            Elements: [
                { name: "maskRect", type: "Graphics", color: 0xffff00, width: 1960, height: 1060, x: 250, y: 165 },
                { name: "coverRect", type: "Graphics", color: 0x000000, width: 10000, height: 10000, x: -1000, y: -2000, alpha: 0.6 },
            ],
            data: {
                noOfReels: 5,
                noOfRows: 3,
                reelHeight: 1000,
                reelsView: [["H1", "H2", "H3"], ["H4", "L1", "L2"], ["L3", "L4", "L5"], ["L3", "H1", "L2"], ["L1", "H2", "WD"]],
                reelPositionX: [0, 380, 760, 1135, 1516],
                reelContainerPos: { x: 480, y: 338 },
                symbolHeight: 354,
                symbolGap: 8,
                anticipationSymbols: ["FG"],
                landingSymbols: ["FG"],
                anticipationDelay: 2500,
                winFrame: { name: "winFrame", type: "AnimatedSprite", animation: { prefix: "Antisapetion15_", postfix: "", start: 0, end: 44, toAddZero: false }, scale: { x: 1.18, y: 1.18 } },
                symbolsData: {
                    "WD": { name: "WD", animation: { image: "WD" } },
                    "H1": { name: "H1", animation: { image: "H1" } },
                    "H2": { name: "H2", animation: { image: "H2" } },
                    "H3": { name: "H3", animation: { image: "H3" } },
                    "H4": { name: "H4", animation: { image: "H4" } },
                    "L1": { name: "L1", animation: { image: "L1" } },
                    "L2": { name: "L2", animation: { image: "L2" } },
                    "L3": { name: "L3", animation: { image: "L3" } },
                    "L4": { name: "L4", animation: { image: "L4" } },
                    "L5": { name: "L5", animation: { image: "L5" } },
                    "FG": { name: "FG", animation: { prefix: "bonus win_", postfix: "", start: 0, end: 100, toAddZero: false }, landingAnimation: { prefix: "bonus idle_", postfix: "", start: 25, end: 40, toAddZero: false, } },
                    "MS": { name: "MS", animation: { image: "MS" } }
                },
                winningSoundIndex: [["WD"], ["H1"], ["H2"], ["H3"], ["H4"], ["L1"], ["L2"], ["L3"], ["L4"], ["L5"], ["FG"], ["MS"]]
            }
        },
        { name: "gamelogo", type: "Sprite", image: "gamelogo", scale: 0.5, x: 850, y: 0, lScale: 0.5, lx: 850, ly: 0, pScale: 0.9, px: 500, py: -230 },
        { name: "jockeyWildAnim", type: "AnimatedSprite", animation: { prefix: "Jockey_Wilds_000", postfix: "", start: 0, end: 49, toAddZero: true, loop: false }, scale: 1.35, x: 1230, y: 810 },
        { name: "winSpinAnim", type: "AnimatedSprite", animation: { prefix: "Win_Spin_000", postfix: "", start: 0, end: 49, toAddZero: true, loop: false }, scale: 1.35, x: 1230, y: 810 },
        { name: "greenAnticipation", type: "AnimatedSprite", animation: { prefix: "frame_000", postfix: "", start: 10, end: 65, toAddZero: true, loop: true, playOnStart: true }, scale: { x: 1.1, y: 1 }, x: 2000, y: 706 },
        { name: "rainbowRespinAnim", type: "AnimatedSprite", animation: { prefix: "Rainbow_Respin_000", postfix: "", start: 0, end: 49, toAddZero: true, loop: false }, scale: 1.35, x: 1230, y: 810 },
        { name: "megaboardTriggeredAnim", type: "Spine", spineName: "megaboard_triggered", defaultSkin: "default", defaultState: "idle", loop: true, scale: 1.55, x: 1420, y: 700 },
        { name: "greenManIcon", type: "Spine", spineName: "characters", defaultSkin: "default", defaultState: "green_man_sleep", loop: true, x: 2260, y: 1220, px: 2260, py: 2000, lx: 2260, ly: 1220, }
    ],
    layoutData: {
        "Desktop": { hAlign: "center", vAlign: "middle", widthPerc: 1, heightPerc: 1 },
        "Portrait": { hAlign: "center", vAlign: "top" },
        "Landscape": { hAlign: "center", vAlign: "top" }
    },
}
