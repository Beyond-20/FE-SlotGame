export const SLOT_MACHINE_CONFIG = {
    name: "slotMachineComp", type: "Comp", class: "GameSlotMachineComp", showSymbolBeforeBigWin: false, resizeChildren: true,
    Elements: [
        { name: "guideRect", type: "Graphics", color: 0xffff00, width: 2370, height: 1260, pHeight: 1760, pWidth: 1460, lWidth: 2370, lHeight: 1260, alpha: 0 },
        {
            name: "machineContainer", type: "Container",
            Elements: [
                { name: "reelbg", type: "Sprite", image: "reel bg", x: 8, y: 40 },
            ],
            layoutData: {
                Desktop: { x: 830, y: 210 },
                Portrait: { x: 0, y: 710 },
                Landscape: { x: 830, y: 210 },
            }
        },
        {
            name: "winContainer", type: "Container",
            Elements: [
                { name: "winbg", type: "Sprite", image: "win bg", x: 0, y: 0 },
                { name: "winframe", type: "Sprite", image: "win frame", x: -20, y: -10 },
                { name: "winTitleTxt", type: "Text", style: "paytableDescStyle", content: "winTitle", fontSize: 70, x: 150, y: 5 },
            ],
            layoutData: {
                Desktop: { x: 1294, y: 12 },
                Portrait: { x: 170, y: 500 },
                Landscape: { x: 1350, y: 20 },
            }
        },
        {
            name: "winAmountComp", type: "Comp", class: "SlotSpinWinAnimAmountComp",
            Elements: [
                { name: "winText", type: "Text", style: "paytableDescStyle", fontSize: 70, wordWrap: true, wordWrapWidth: 500, lineHeight: 54, anchor: { x: 0.5, y: 0.5 } }
            ],
            layoutData: {
                Desktop: { x: 1518, y: 125 },
                Portrait: { x: 390, y: 610 },
                Landscape: { x: 1574, y: 133 },
            }
        },
        {
            name: "prizeTable", type: "Comp", class: "ThreeDragonPrizeTable",
            Elements: [
                { name: "prizeBG", type: "DualImage", image: "paytablebg", x: 0, y: 0, pScale: 1.2, lScale: 1 },
                { name: "h1Symbols", type: "Sprite", image: "H1Combination", x: 100, y: 120, px: 100, py: 50, pScale: 0.72, lx: 100, ly: 120, lScale: 1 },
                { name: "m1Symbols", type: "Sprite", image: "M1Combination", x: 100, y: 340, px: 100, py: 220, pScale: 0.72, lx: 100, ly: 340, lScale: 1 },
                { name: "l1Symbols", type: "Sprite", image: "L1Combination", x: 100, y: 570, px: 100, py: 380, pScale: 0.72, lx: 100, ly: 570, lScale: 1 },
                { name: "blSymbols", type: "Sprite", image: "anyCombination", x: 100, y: 780, px: 100, py: 540, pScale: 0.72, lx: 100, ly: 780, lScale: 1 },
                // { name: "currency4", type: "Text", style: "paytableDescStyle", contentText: "", fontSize: 60, anchor: { x: 0.5, y: 0.5 }, x: 590, y: 185, px: 540, py: 75, lx: 590, ly: 185 },
                // { name: "currency3", type: "Text", style: "paytableDescStyle", contentText: "", fontSize: 60, anchor: { x: 0.5, y: 0.5 }, x: 590, y: 400, px: 540, py: 245, lx: 590, ly: 400 },
                // { name: "currency2", type: "Text", style: "paytableDescStyle", contentText: "", fontSize: 60, anchor: { x: 0.5, y: 0.5 }, x: 590, y: 610, px: 540, py: 415, lx: 590, ly: 610 },
                // { name: "currency1", type: "Text", style: "paytableDescStyle", contentText: "", fontSize: 60, anchor: { x: 0.5, y: 0.5 }, x: 590, y: 820, px: 540, py: 582, lx: 590, ly: 820 },
                { name: "payout4", type: "Text", style: "paytableDescStyle", contentText: "", fontSize: 55, anchor: { x: 0.5, y: 0.5 }, wordWrap: "true", wordWrapWidth: 400, x: 590, y: 215, px: 540, py: 100, lx: 585, ly: 215 },
                { name: "payout3", type: "Text", style: "paytableDescStyle", contentText: "", fontSize: 55, anchor: { x: 0.5, y: 0.5 }, wordWrap: "true", wordWrapWidth: 400, x: 590, y: 430, px: 540, py: 270, lx: 585, ly: 430 },
                { name: "payout2", type: "Text", style: "paytableDescStyle", contentText: "", fontSize: 55, anchor: { x: 0.5, y: 0.5 }, wordWrap: "true", wordWrapWidth: 400, x: 590, y: 643, px: 540, py: 440, lx: 585, ly: 643 },
                { name: "payout1", type: "Text", style: "paytableDescStyle", contentText: "", fontSize: 55, anchor: { x: 0.5, y: 0.5 }, wordWrap: "true", wordWrapWidth: 400, x: 590, y: 855, px: 540, py: 608, lx: 585, ly: 855 },
            ],
            layoutData: {
                "Desktop": { x: 0, y: 210 },
                "Portrait": { x: 780, y: 10 },
                "Landscape": { x: 0, y: 210 },
            }
        },
        {
            name: "slotMachine", type: "Comp", class: "GameSlotMachine", x: 844, y: 228, disableMask: true,
            anticipationConfig1: {
                totalElements: 1,
                element: { name: "anticipation", type: "AnimatedSprite", animation: { prefix: "fr_big_000", postfix: "", start: 0, end: 4, toAddZero: true, loop: true, playOnStart: true }, scale: { x: 1.2, y: 1.2 } },
                positions: [{ x: 1190, y: 550 }]
            },
            Elements: [
                { name: "maskRect", type: "Graphics", color: 0xffff00, width: 1426, height: 1000, x: 0, y: 20, alpha: 1 },
                { name: "coverRect", type: "Graphics", color: 0x000000, width: 10000, height: 10000, x: -1000, y: -2000, alpha: 0.6 },
            ],
            data: {
                noOfReels: 3,
                noOfRows: 1,
                reelHeight: 1000,
                reelsView: [["H1"], ["M1"], ["L1"]],
                reelPositionX: [90, 534, 993],
                reelContainerPos: { x: 184, y: 500 },
                symbolHeight: 560,
                symbolGap: 0,
                anticipationSymbols: [""],
                landingSymbols: [""],
                anticipationDelay: 2500,
                symbolsData: {
                    "H1": { name: "H1", animation: { prefix: "orange_dragon_000", postfix: "", start: 0, end: 44, toAddZero: true } },
                    "M1": { name: "M1", animation: { prefix: "green_dragon_000", postfix: "", start: 0, end: 44, toAddZero: true } },
                    "L1": { name: "L1", animation: { prefix: "blue_dragon_000", postfix: "", start: 0, end: 44, toAddZero: true } },
                },
                winningSoundIndex: [["H1"], ["M1"], ["L1"]]
            },
            layoutData: {
                "Desktop": { x: 844, y: 228 },
                "Portrait": { x: 10, y: 710 },
                "Landscape": { x: 844, y: 228 },
            }
        },
        {
            name: "machineTopContainer", type: "Container",
            Elements: [
                { name: "reelSep1", type: "Sprite", image: "reel sep 1", x: 14, y: 25 },
                { name: "reelSep2", type: "Sprite", image: "reel sep 3", x: 480, y: 25 },
                { name: "reelSep3", type: "Sprite", image: "reel sep 4", x: 910, y: 25 },
                { name: "reelSep4", type: "Sprite", image: "reel sep 2", x: 1340, y: 25 },
                { name: "reelFrame", type: "Sprite", image: "reels frame", x: -5, y: 0 },
                { name: "payline", type: "Sprite", image: "central line", x: 15, y: 525 },
                { name: "highlight1", type: "AnimatedSprite", animation: { prefix: "fr_r_l_000", postfix: "", start: 0, end: 7, toAddZero: true }, x: 70, y: 515, scale: -1.18, loop: true },
                { name: "highlight2", type: "AnimatedSprite", animation: { prefix: "frame_center_000", postfix: "", start: 0, end: 7, toAddZero: true }, x: 517, y: 515, scale: -1.18, loop: true },
                { name: "highlight3", type: "AnimatedSprite", animation: { prefix: "frame_center_000", postfix: "", start: 0, end: 7, toAddZero: true }, x: 958, y: 540, scale: 1.18, loop: true },
                { name: "highlight4", type: "AnimatedSprite", animation: { prefix: "fr_r_l_000", postfix: "", start: 0, end: 7, toAddZero: true }, x: 1415, y: 540, scale: 1.18, loop: true },
                { name: "blackBox", type: "Graphics", width: 960, height: 980, color: 0x000000, alpha: 0.7, x: 14, y: 50 },
                { name: "powerChanceImg", type: "Sprite", image: "powerChanceImg", x: 450, y: 560, anchor: { x: 0.5, y: 0.5 } },
                { name: "frameShine", type: "AnimatedSprite", animation: { prefix: "fr_big_000", postfix: "", start: 0, end: 4, toAddZero: true }, x: 1190, y: 550, scale: 1.2, loop: true },
            ],
            layoutData: {
                Desktop: { x: 830, y: 210 },
                Portrait: { x: -15, y: 700 },
                Landscape: { x: 830, y: 210 },
            }
        },
        {
            name: "gamelogo", type: "Sprite", image: "gameLogo", anchor: { x: 0.5, y: 0 }, onTop: true,
            layoutData: {
                Desktop: { x: 680, y: 4 },
                Portrait: { x: 390, y: 120, scale: 1.2 },
                Landscape: { x: 400, y: 20, scale: 1 },
            }
        },
    ],
    layoutData: {
        "Desktop": { hAlign: "center", vAlign: "middle", widthPerc: 0.96, heightPerc: 1 },
        "Portrait": { hAlign: "center", vAlign: "top" },
        "Landscape": { hAlign: "center", vAlign: "top", hPaddingPerc:-0.02 },
    }

}
