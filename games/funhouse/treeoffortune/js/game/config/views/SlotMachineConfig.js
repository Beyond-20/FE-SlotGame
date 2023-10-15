export const SLOT_MACHINE_CONFIG = {
    name: "slotMachineComp", type: "Comp", class: "GameSlotMachineComp", resizeChildren: true, showSymbolBeforeBigWin: true,
    Elements: [
        { name: "guideRect", type: "Graphics", color: 0xffff00, width: 2370, height: 1290, pWidth: 2225, pHeight: 2300, lWidth: 2370, lHeight: 1290, alpha: 0.5 },

        {
            name: "treeAnimContainer", type: "Container",
            Elements: [
                { name: "treeSpineAnim", type: "Spine", spineName: "tree_top", defaultState: "tree_top_idle", loop: true, scale: 0.5, lScale: 0.5, pScale: 1 },
            ],
            layoutData: {
                "Desktop": { x: 1185, y: 340 },
                "Portrait": { x: 1095, y: 910 },
                "Landscape": { x: 1185, y: 340 }
            }
        },
        { name: "reelFrame", type: "Sprite", image: "reels_merged", x: 70, y: 495, px: 0, py: 1450, lx: 70, ly: 495 },
        {
            name: "infoText", type: "Container", x: 445, y: 475, scale: 1, px: 0, py: 1240, pScale: 1.5, lx: 445, ly: 475, lScale: 1,
            Elements: [
                { name: "infobg", type: "Sprite", image: "info_field", scale: 0.5 },
                { name: "InfoTextMsg", type: "Text", style: "paytableDescStyle", content: "advertiseText1", fontSize: 55, anchor: { x: 0.5, y: 0.5 }, wordWrap: "true", wordWrapWidth: 1500, x: 745, y: 73 },
            ],
        },
        {
            name: "winAmountComp", type: "Comp", class: "SlotSpinWinAnimAmountComp", x: 1190, y: 935, px: 1110, py: 1890, lx: 1190, ly: 935, durationFactor: 0.25,
            Elements: [
                { name: "winText", type: "Text", style: "winAmountStyle", fontSize: 400, anchor: { x: 0.5, y: 0.5 } }
            ]
        },
        {
            name: "prizeTable", type: "Comp", class: "TreeofFortunePrizeTable",
            Elements: [
                //left panel
                { name: "symbolPayoutBG1", type: "Sprite", image: "paytable", x: 70, y: -5, scale: 0.45 },
                { name: "M1Symbols1", type: "Sprite", image: "M1", x: 140, y: 80, scale: 0.25 },
                { name: "M1Symbols2", type: "Sprite", image: "M1", x: 260, y: 80, scale: 0.25 },
                { name: "M1Symbols3", type: "Sprite", image: "M1", x: 380, y: 80, scale: 0.25 },
                { name: "L1Symbols1", type: "Sprite", image: "L1", x: 140, y: 210, scale: 0.25 },
                { name: "L1Symbols2", type: "Sprite", image: "L1", x: 260, y: 210, scale: 0.25 },
                { name: "L1Symbols3", type: "Sprite", image: "L1", x: 380, y: 210, scale: 0.25 },
                { name: "textAny", type: "Text", style: "paytableDescStyle", content: "anyText", fontSize: 55, anchor: { x: 0.5, y: 0.5 }, wordWrap: "true", wordWrapWidth: 400, x: 185, y: 390 },
                { name: "L1Symbols4", type: "Sprite", image: "L1", x: 235, y: 350, scale: 0.2 },
                { name: "M1Symbols4", type: "Sprite", image: "M1", x: 320, y: 350, scale: 0.2 },
                { name: "H1Symbols4", type: "Sprite", image: "H1", x: 410, y: 350, scale: 0.2 },
                { name: "payout3", type: "Text", style: "paytableDescStyle", contentText: "58", fontSize: 55, anchor: { x: 0.5, y: 0.5 }, wordWrap: "true", wordWrapWidth: 400, x: 610, y: 130 },
                { name: "payout2", type: "Text", style: "paytableDescStyle", contentText: "28", fontSize: 55, anchor: { x: 0.5, y: 0.5 }, wordWrap: "true", wordWrapWidth: 400, x: 610, y: 260 },
                { name: "payout1", type: "Text", style: "paytableDescStyle", contentText: "5", fontSize: 55, anchor: { x: 0.5, y: 0.5 }, wordWrap: "true", wordWrapWidth: 400, x: 610, y: 390 },
                //right panel
                { name: "symbolPayoutBG2", type: "Sprite", image: "paytable", x: 1600, y: -5, scale: 0.45 },
                { name: "WWSymbols1", type: "Sprite", image: "WW", x: 1655, y: 80, scale: 0.25 },
                { name: "WWSymbols2", type: "Sprite", image: "WW", x: 1775, y: 80, scale: 0.25 },
                { name: "WWSymbols3", type: "Sprite", image: "WW", x: 1895, y: 80, scale: 0.25 },
                { name: "WildText", type: "Text", style: "paytableDescStyle", content: "wildSubstituteText", fontSize: 34, anchor: { x: 0.5, y: 0.5 }, wordWrap: "true", wordWrapWidth: 800, x: 1950, y: 260 },
                { name: "H1Symbols1", type: "Sprite", image: "H1", x: 1655, y: 320, scale: 0.25 },
                { name: "H1Symbols2", type: "Sprite", image: "H1", x: 1775, y: 320, scale: 0.25 },
                { name: "H1Symbols3", type: "Sprite", image: "H1", x: 1895, y: 320, scale: 0.25 },
                { name: "payout5", type: "Text", style: "paytableDescStyle", contentText: "288", fontSize: 55, anchor: { x: 0.5, y: 0.5 }, wordWrap: "true", wordWrapWidth: 400, x: 2130, y: 130 },
                { name: "payout4", type: "Text", style: "paytableDescStyle", contentText: "88", fontSize: 55, anchor: { x: 0.5, y: 0.5 }, wordWrap: "true", wordWrapWidth: 400, x: 2130, y: 360 },
            ],
            layoutData: {
                "Desktop": { x: 0, y: 10 },
                "Portrait": {},
                "Landscape": { x: 0, y: 10 },
            }
        },
        {
            name: "slotMachine", type: "Comp", class: "GameSlotMachine", x: 500, y: 715, px: 450, py: 1674, lx: 500, ly: 715, disableMask: true,
            Elements: [
                { name: "maskRect", type: "Sprite", image: "maskRect", x: -257, y: -109 },
                { name: "coverRect", type: "Graphics", color: 0x000000, width: 10000, height: 10000, x: -1000, y: -2000, alpha: 0.6 },
            ],
            data: {
                noOfReels: 3,
                noOfRows: 1,
                reelHeight: 650,
                reelsView: [["H1"], ["M1"], ["L1"]],
                reelPositionX: [-165, 500, 1160],
                reelContainerPos: { x: 184, y: 210 },
                symbolHeight: 470,
                symbolGap: 0,
                anticipationSymbols: [""],
                landingSymbols: ["WW"],
                anticipationDelay: 2500,
                symbolsData: {
                    "WW": { name: "WW", type: "Spine", spineName: "tree_sym", winAnimation: "animation", defaultState: "animation", loop: false, scale: 0.55, landingWildAnimation: { type: "Spine", loop: false } },
                    "H1": { name: "H1", type: "Spine", spineName: "bag_red", winAnimation: "animation", defaultState: "animation", loop: false, scale: 0.55 },
                    "M1": { name: "M1", type: "Spine", spineName: "bag_violet", winAnimation: "animation", defaultState: "animation", loop: false, scale: 0.55 },
                    "L1": { name: "L1", type: "Spine", spineName: "bag_green", winAnimation: "animation", defaultState: "animation", loop: false, scale: 0.55 },
                },
                winningSoundIndex: [["WW"], ["H1"], ["M1"], ["L1"]]
            },
            layoutData: {
                "Desktop": { x: 500, y: 715, },
                "Portrait": { x: 10, y: 710 },
                "Landscape": { x: 500, y: 715 },
            }
        },
        {
            name: "coinAnimContainer", type: "Container",
            Elements: [
                { name: "coinAnim", type: "AnimatedSprite", animation: { prefix: "coins_000", postfix: "", start: 0, end: 57, toAddZero: true }, x: 0, y: 0, scale: 1, loop: false },
            ],
            layoutData: {
                "Desktop": { x: 1320, y: 590 },
                "Portrait": { x: 1235, y: 1111 },
                "Landscape": { x: 1320, y: 590 },
            }
        },
        {
            name: "multiplierAnimContainer", type: "Container",
            Elements: [
                { name: "multiplier5x", type: "Sprite", image: "x5", anchor: { x: 0.5, y: 0.5 }, x: 0, y: 0, px: 0, py: 50, scale: 0.8, pScale: 1, lx: 0, ly: 0, lScale: 0.8, alpha: 0 },
                { name: "multiplier8x", type: "Sprite", image: "x8", anchor: { x: 0.5, y: 0.5 }, x: 0, y: 0, px: 0, py: 50, scale: 0.8, pScale: 1, lx: 0, ly: 0, lScale: 0.8, alpha: 0 },
                { name: "multiplier10x", type: "Sprite", image: "x10", anchor: { x: 0.5, y: 0.5 }, x: 0, y: 0, px: 0, py: 50, scale: 0.8, pScale: 1, lx: 0, ly: 0, lScale: 0.8, alpha: 0 },
            ],
            layoutData: {
                "Desktop": { x: 1190, y: 940 },
                "Portrait": { x: 1110, y: 1675 },
                "Landscape": { x: 1190, y: 940 },
            }
        },
        { name: "highlight1", type: "Spine", spineName: "antisip_l", defaultSkin: "default", defaultState: "animation", x: 250, y: 935, px: 170, py: 1890, lx: 250, ly: 935, loop: true, scale: 0.9 },
        { name: "highlight2", type: "Spine", spineName: "antisip_r", defaultSkin: "default", defaultState: "animation", x: 843, y: 932, px: 777, py: 1890, lx: 843, ly: 932, loop: true, scale: { x: 0.9, y: 0.93 } },
        { name: "highlight3", type: "Spine", spineName: "antisip_r", defaultSkin: "default", defaultState: "animation", x: 1526, y: 932, px: 1460, py: 1890, lx: 1526, ly: 932, loop: true, scale: { x: -0.9, y: 0.93 } },
        { name: "highlight4", type: "Spine", spineName: "antisip_l", defaultSkin: "default", defaultState: "animation", x: 2124, y: 935, px: 2063, py: 1890, lx: 2124, ly: 935, loop: true, scale: { x: -0.9, y: 0.9 } },
        { name: "payline", type: "Sprite", image: "center_line", x: 180, y: 930, px: 112, py: 1880, lx: 180, ly: 930, scale: { x: 1.4, y: 2 } },
    ],
    layoutData: {
        "Desktop": { hAlign: "center", vAlign: "top", widthPerc: 1, heightPerc: 1 },
        "Portrait": { hAlign: "center", vAlign: "top" },
        "Landscape": { hAlign: "center", vAlign: "top", hPaddingPerc: -0.02 },
    }

}
