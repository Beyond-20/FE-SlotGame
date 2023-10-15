export const SLOT_MACHINE_CONFIG = {
    name: "slotMachineComp", type: "Comp", class: "GameSlotMachineComp", showSymbolBeforeBigWin: true,
    Elements: [
        { name: "guideRect", type: "Graphics", color: 0xffff00, width: 2383, height: 1120, lWidth: 2383, lHeight: 1120, pWidth: 1581, pHeight: 2104, alpha: 0.5 },
        {
            name: "reelFrame", type: "Comp", class: "GameReelFrameComp", x: 1188, y: 860, px: 790, py: 1414, lx: 1188, ly: 860,
            Elements: [
                { name: "gameReelFrame", type: "Spine", spineName: "reels", defaultSkin: "default", defaultState: "", loop: true, scale: 1 },
            ]
        },
        {
            name: "gamelogo", type: "Sprite", image: "gamelogo", anchor: { x: 0.5, y: 0 }, x: 1191, y: 48, scale: 0.7, px: 810, py: -5, pScale: 0.6, lx: 1191, ly: 48, lScale: 0.7, onTop: true,
        },
        {
            name: "soldiers", type: "Comp", class: "SoldierAnimComp", x: 315, y: 912, px: -35, py: 777, lx: 315, ly: 900,
            Elements: [
                { name: "leftDaySoldier", type: "Spine", spineName: "Soldiers", defaultSkin: "default", defaultState: "", loop: true, x: 0, y: 0, px: 350, py: -89, lx: 0, ly: 0, scale: { x: -0.9, y: 0.9 } },
                { name: "rightDaySoldier", type: "Spine", spineName: "Soldiers", defaultSkin: "default", defaultState: "", loop: true, x: 1753, y: 0, px: 1300, py: -89, lx: 1753, ly: 0, scale: { x: 0.9, y: 0.9 } },
                { name: "leftNightSoldier", type: "Spine", spineName: "Soldiers", defaultSkin: "default", defaultState: "", loop: true, x: 0, y: 0, px: 350, py: -89, lx: 0, ly: 0, scale: { x: -0.9, y: 0.9 } },
                { name: "rightNightSoldier", type: "Spine", spineName: "Soldiers", defaultSkin: "default", defaultState: "", loop: true, x: 1753, y: 0, px: 1300, py: -89, lx: 1753, ly: 0, scale: { x: 0.9, y: 0.9 } },
            ]
        },
        {
            name: "winAmountComp", type: "Comp", class: "SlotSpinWinAnimAmountComp", x: 1192, y: 596,
            Elements: [
                { name: "winText", type: "Text", style: "winAmountStyle", fontSize: 250, anchor: { x: 0.5, y: 0.5 } }
            ]
        },
        {
            name: "slotMachine", type: "Comp", class: "GameSlotMachine", x: 0, y: 160, px: -399, py: 721, lx: 0, ly: 160, disableMask: true,
            anticipationConfig: {
                totalElements: 5,
                element: { name: "anticipation1", type: "Spine", spineName: "antisip1x3", defaultState: "animation", loop: true, scale: { x: 1, y: 1 } },
                fselement: { name: "anticipation1", type: "Spine", spineName: "antisip1x4", defaultState: "animation", loop: true, scale: { x: 1, y: 1 } },
                positions: [{ x: 821, y: 431 }, { x: 1052, y: 431 }, { x: 1294, y: 431 }, { x: 1532, y: 431 }, { x: 1778, y: 431 }]
            },
            Elements: [
                { name: "maskRect", type: "Graphics", color: 0xff0000, width: 1204, height: 723, x: 587, y: 65, alpha: 0 },
                { name: "fsmaskRect", type: "Graphics", color: 0xff0000, width: 1204, height: 969, x: 587, y: 65, alpha: 0 },
                { name: "coverRect", type: "Graphics", color: 0x000000, width: 10000, height: 10000, x: -1000, y: -2000, alpha: 0.6 },
            ],
            data: {
                noOfReels: 5,
                noOfRows: 3,
                reelHeight: 1000,
                reelsView1: [[1, 2, 3], [4, 5, 7], [7, 8, 2], [4, 11, 0], [6, 2, 10]],
                reelsView: [["H1", "H2", "H3"], ["H4", "L1", "L2"], ["L3", "L4", "L5"], ["L5", "L5", "H1"], ["L3", "L4", "WW"]],
                reelPositionX: [6, 247, 488, 729, 973],
                reelContainerPos: { x: 700, y: 182 },
                symbolHeight: 245,
                symbolGap: 0,
                anticipationSymbols: ["WW"],
                landingSymbols: ["WW"],
                anticipationDelay: 2500,
                winFrame: { name: "winFrame", type: "Spine", spineName: "win_anim_1x1", defaultState: "animation", loop: true, scale: 0.96 },
                symbolsData: {
                    "WW": { name: "WW", type: "Spine", spineName: "Wild", winAnimation: "animation", defaultState: "animation", loop: true, scale: 0.7, landingWildAnimation: { type: "Spine", loop: false } },
                    "H1": { name: "H1", type: "Spine", spineName: "King", winAnimation: "animation_1x1", defaultState: "animation_1x1", loop: true, scale: 0.7, },
                    "H2": { name: "H2", type: "Spine", spineName: "Qeen", winAnimation: "animation_1x1", defaultState: "animation_1x1", loop: true, scale: 0.7, },
                    "H3": { name: "H3", type: "Spine", spineName: "Horse", winAnimation: "animation", defaultState: "animation", loop: true, scale: 0.7, },
                    "H4": { name: "H4", type: "Spine", spineName: "Castle", winAnimation: "animation", defaultState: "animation", loop: true, scale: 0.7, },
                    "L1": { name: "L1", type: "Spine", spineName: "A", winAnimation: "animation", defaultState: "animation", loop: true, scale: 0.7, },
                    "L2": { name: "L2", type: "Spine", spineName: "K", winAnimation: "animation", defaultState: "animation", loop: true, scale: 0.7, },
                    "L3": { name: "L3", type: "Spine", spineName: "Q", winAnimation: "animation", defaultState: "animation", loop: true, scale: 0.7, },
                    "L4": { name: "L4", type: "Spine", spineName: "J", winAnimation: "animation", defaultState: "animation", loop: true, scale: 0.7, },
                    "L5": { name: "L5", type: "Spine", spineName: "10", winAnimation: "animation", defaultState: "animation", loop: true, scale: 0.7, },
                },
                winningSoundIndex: [["WW"], ["H1"], ["H2"], ["H3"], ["H4"], ["L1"], ["L2"], ["L3"], ["L4"], ["L5"]]
            },
            layoutData: {
                "Desktop": { x: 0, y: 160, },
                "Portrait": { x: -399, y: 721 },
                "Landscape": { x: 0, y: 160 },
            }
        },
        { name: "stoneFountainAnim", type: "Spine", spineName: "rocks", defaultSkin: "default", defaultState: "animation", loop: true },
    ],
    layoutData: {
        "Desktop": { hAlign: "center", vAlign: "middle", widthPerc: 1, heightPerc: 1 },
        "Portrait": { hAlign: "center", vAlign: "top" },
        "Landscape": { hAlign: "center", vAlign: "top", heightPerc: 1, widthPerc: 1, hPaddingPerc: 0, vPaddingPerc: -0.05 },
    }

}
