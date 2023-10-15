export const SLOT_MACHINE_CONFIG = {
    name: "slotMachineComp", type: "Comp", class: "GameSlotMachineComp", showSymbolBeforeBigWin: true,
    Elements: [
        { name: "guideRect", type: "Graphics", color: 0xff0000, width: 2130, height: 1160 },
        { name: "reelFrame", type: "Sprite", image: "reelFrame", x: 15, y: 105 },
        { name: "rainbowAnticipation", type: "Spine", spineName: "antisipation_bg", defaultSkin: "default", defaultState: "animation", loop: true, scale: 1, x: 1785, y: 720 },
        {
            name: "winAmountComp", type: "Comp", class: "SlotSpinWinAnimAmountComp", x: 1080, y: 650, durationFactor: 0.25,
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
                        { name: "anticipation1", type: "Spine", spineName: "antisipation", defaultSkin: "default", defaultState: "animation", loop: true, scale: 1 },
                    ]
                },
                positions: [{ x: 360, y: 720 }, { x: 715, y: 720 }, { x: 1070, y: 720 }, { x: 1425, y: 720 }, { x: 1785, y: 720 }]
            },
            Elements: [
                { name: "maskRect", type: "Graphics", color: 0xffff00, width: 1815, height: 1020, x: 140, y: 120 },
                { name: "coverRect", type: "Graphics", color: 0x000000, width: 10000, height: 10000, x: -1000, y: -2000, alpha: 0.6 },
            ],
            data: {
                noOfReels: 5,
                noOfRows: 3,
                reelHeight: 1000,
                reelsView: [["H1", "H2", "H3"], ["H4", "L1", "L2"], ["L3", "L4", "L5"], ["L3", "H1", "L2"], ["L1", "H2", "WD"]],
                reelPositionX: [0, 373, 725, 1080, 1440],
                reelContainerPos: { x: 350, y: 290 },
                symbolHeight: 340,
                symbolGap: 6,
                anticipationSymbols: ["FG"],
                landingSymbols: ["FG"],
                anticipationDelay: 2500,
                winFrame: { name: "winFrame", type: "Spine", spineName: "frame1x1", defaultSkin: "default", defaultState: "animation", loop: true, scale: { x: 0.92, y: 0.92 } },
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
                    "FG": { name: "FG", type: "Spine", spineName: "bonus", winAnimation: "win", defaultState: "default", loop: false, scale: 0.5, /*landingAnimation: { type: "Spine", winAnimation: "adle", defaultState: "default", loop: false }*/ },
                    "MS": { name: "MS", animation: { image: "MS" } }
                },
                winningSoundIndex: [["WD"], ["H1"], ["H2"], ["H3"], ["H4"], ["L1"], ["L2"], ["L3"], ["L4"], ["L5"], ["FG"], ["MS"]]
            }
        },
        { name: "greenAnticipation", type: "Spine", spineName: "antisipation", defaultSkin: "default", defaultState: "animation", loop: true, scale: 1, x: 1785, y: 720 },
        { name: "monopolyWildAnim", type: "Spine", spineName: "3popups_curtains", defaultSkin: "default", defaultState: "monopoly_wilds_close_open", loop: false, scale: 1, x: 1050, y: 700 },
        { name: "winSpinAnim", type: "Spine", spineName: "3popups_curtains", defaultSkin: "default", defaultState: "win_spin_close_open", loop: false, scale: 1, x: 1050, y: 700 },
        { name: "rainbowRespinAnim", type: "Spine", spineName: "3popups_curtains", defaultSkin: "default", defaultState: "rainbow_respin_close_open", loop: false, scale: 1, x: 1050, y: 700 },
        { name: "reelFrameFront", type: "Sprite", image: "reelFrame_front", x: 0, y: 0 },
        { name: "gamelogo", type: "Sprite", image: "gamelogo", x: 420, y: -30 },
        { name: "megaboardTriggeredAnim", type: "Spine", spineName: "megaboard_triggered", defaultSkin: "default", defaultState: "mega_idle", loop: true, scale: 1.4, x: 1125, y: 650 },
        { name: "monopolyManIcon", type: "Spine", spineName: "man", defaultSkin: "default", defaultState: "idle_sleep", loop: true, scale: 0.6, x: 100, y: 1050, px: 100, py: 1050, lx: 100, ly: 1050, }
    ],
    layoutData: {
        "Desktop": { hAlign: "center", vAlign: "middle", widthPerc: 1, heightPerc: 1 },
        "Portrait": { hAlign: "center", vAlign: "top" },
        "Landscape": { hAlign: "center", vAlign: "top" }
    },
}
