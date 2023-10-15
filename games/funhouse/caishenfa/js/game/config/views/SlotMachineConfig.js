export const SLOT_MACHINE_CONFIG = {
    name: "slotMachineComp", type: "Comp", class: "GameSlotMachineComp", showSymbolBeforeBigWin: false, resizeChildren: true,
    Elements: [
        { name: "guideRect", type: "Graphics", color: 0xffff00, width: 2370, height: 1260, pHeight: 1900, pWidth: 1460, lWidth: 2370, lHeight: 1260, alpha: 1 },
        {
            name: "machineContainer", type: "Container",
            Elements: [
                { name: "reelbg", type: "Sprite", image: "reel bg", x: 8, y: 8 },
            ],
            layoutData: {
                Desktop: { x: 830, y: 210 },
                Portrait: { x: 0, y: 860 },
                Landscape: { x: 830, y: 210 },
            }
        },
        {
            name: "winContainer", type: "Container",
            Elements: [
                { name: "winbg", type: "Sprite", image: "win bg", x: 0, y: 0 },
                { name: "winframe", type: "Sprite", image: "win frame", x: 10, y: 7 },
                { name: "winTitleTxt", type: "Text", style: "paytableDescStyle", content: "winTitle", fontSize: 70, x: 200, y: 30 },
            ],
            layoutData: {
                Desktop: { x: 1294, y: 12 },
                Portrait: { x: 10, y: 670 },
                Landscape: { x: 1294, y: 12 },
            }
        },
        {
            name: "winAmountComp", type: "Comp", class: "SlotSpinWinAnimAmountComp",
            Elements: [
                { name: "winText", type: "Text", style: "paytableDescStyle", fontSize: 70, wordWrap: true, wordWrapWidth: 500, lineHeight: 54, anchor: { x: 0.5, y: 0.5 } }
            ],
            layoutData: {
                Desktop: { x: 1564, y: 140 },
                Portrait: { x: 280, y: 800 },
                Landscape: { x: 1564, y: 140 },
            }
        },
        {
            name: "prizeTable", type: "Comp", class: "CaiShenPrizeTable",
            Elements: [
                { name: "prizeBG", type: "DualImage", image: "paytablebg", x: 0, y: 0 },
                { name: "h1Symbols", type: "Sprite", image: "H1Combination", x: 120, y: 60, px: 74, py: 20, pScale: 0.72, lx: 120, ly: 60, lScale: 1 },
                { name: "m1Symbols", type: "Sprite", image: "M1Combination", x: 120, y: 310, px: 74, py: 180, pScale: 0.72, lx: 120, ly: 310, lScale: 1 },
                { name: "l1Symbols", type: "Sprite", image: "L1Combination", x: 120, y: 550, px: 74, py: 320, pScale: 0.72, lx: 120, ly: 550, lScale: 1 },
                { name: "blSymbols", type: "Sprite", image: "anyCombination", x: 120, y: 790, px: 74, py: 470, pScale: 0.72, lx: 120, ly: 790, lScale: 1 },
                // { name: "currency4", type: "Text", style: "paytableDescStyle", contentText: "", fontSize: 60, anchor: { x: 0.5, y: 0.5 }, x: 600, y: 120, px: 620, py: 60, lx: 600, ly: 120 },
                // { name: "currency3", type: "Text", style: "paytableDescStyle", contentText: "", fontSize: 60, anchor: { x: 0.5, y: 0.5 }, x: 600, y: 360, px: 620, py: 200, lx: 600, ly: 360 },
                // { name: "currency2", type: "Text", style: "paytableDescStyle", contentText: "", fontSize: 60, anchor: { x: 0.5, y: 0.5 }, x: 600, y: 600, px: 620, py: 350, lx: 600, ly: 600 },
                // { name: "currency1", type: "Text", style: "paytableDescStyle", contentText: "", fontSize: 60, anchor: { x: 0.5, y: 0.5 }, x: 600, y: 840, px: 620, py: 500, lx: 600, ly: 840 },
                { name: "payout4", type: "Text", style: "paytableDescStyle", contentText: "", fontSize: 55, anchor: { x: 0.5, y: 0.5 }, wordWrap: "true", wordWrapWidth: 400, x: 595, y: 150, px: 620, py: 90, lx: 595, ly: 150, },
                { name: "payout3", type: "Text", style: "paytableDescStyle", contentText: "", fontSize: 55, anchor: { x: 0.5, y: 0.5 }, wordWrap: "true", wordWrapWidth: 400, x: 595, y: 390, px: 620, py: 235, lx: 595, ly: 390, },
                { name: "payout2", type: "Text", style: "paytableDescStyle", contentText: "", fontSize: 55, anchor: { x: 0.5, y: 0.5 }, wordWrap: "true", wordWrapWidth: 400, x: 595, y: 635, px: 620, py: 385, lx: 595, ly: 635, },
                { name: "payout1", type: "Text", style: "paytableDescStyle", contentText: "", fontSize: 55, anchor: { x: 0.5, y: 0.5 }, wordWrap: "true", wordWrapWidth: 400, x: 595, y: 875, px: 620, py: 530, lx: 595, ly: 875, },
            ],
            layoutData: {
                "Desktop": { x: 0, y: 210 },
                "Portrait": { x: 570, y: 240 },
                "Landscape": { x: 0, y: 210 },
            }
        },
        {
            name: "slotMachine", type: "Comp", class: "GameSlotMachine", x: 844, y: 228, disableMask: true,
            anticipationConfig1: {
                totalElements: 1,
                element: { name: "anticipation", type: "AnimatedSprite", animation: { prefix: "frame_shine_000", postfix: "", start: 0, end: 4, toAddZero: true, loop: true, playOnStart: true }, scale: { x: 1.2, y: 1.2 } },
                positions: [{ x: 1140, y: 500 }]
            },
            Elements: [
                { name: "maskRect", type: "Graphics", color: 0xffff00, width: 1426, height: 980, x: 0, y: 0, alpha: 1 },
                { name: "coverRect", type: "Graphics", color: 0x000000, width: 10000, height: 10000, x: -1000, y: -2000, alpha: 0.6 },
            ],
            data: {
                noOfReels: 3,
                noOfRows: 1,
                reelHeight: 1000,
                reelsView: [["H1"], ["M1"], ["L1"]],
                reelPositionX: [80, 524, 978],
                reelContainerPos: { x: 184, y: 500 },
                symbolHeight: 560,
                symbolGap: 0,
                anticipationSymbols: [""],
                landingSymbols: [""],
                anticipationDelay: 2500,
                symbolsData: {
                    "H1": { name: "H1", animation: { prefix: "03_cai_red__000", postfix: "", start: 0, end: 44, toAddZero: true } },
                    "M1": { name: "M1", animation: { prefix: "02_cai_gold__000", postfix: "", start: 0, end: 44, toAddZero: true } },
                    "L1": { name: "L1", animation: { prefix: "01_dragon__000", postfix: "", start: 0, end: 44, toAddZero: true } },
                },
                winningSoundIndex: [["H1"], ["M1"], ["L1"]]
            },
            layoutData: {
                "Desktop": { x: 844, y: 228 },
                "Portrait": { x: 40, y: 880 },
                "Landscape": { x: 844, y: 228 },
            }
        },
        {
            name: "machineTopContainer", type: "Container",
            Elements: [
                { name: "reelSep1", type: "Sprite", image: "reel sep 1", x: 14, y: 8 },
                { name: "reelSep2", type: "Sprite", image: "reel sep 3", x: 480, y: 8 },
                { name: "reelSep3", type: "Sprite", image: "reel sep 4", x: 910, y: 8 },
                { name: "reelSep4", type: "Sprite", image: "reel sep 2", x: 1340, y: 8 },
                { name: "reelFrame", type: "Sprite", image: "reels frame", x: 0, y: 0 },
                { name: "payline", type: "Sprite", image: "central line", x: 0, y: 505 },
                { name: "highlight1", type: "AnimatedSprite", animation: { prefix: "light_right_000", postfix: "", start: 0, end: 8, toAddZero: true }, x: 70, y: 505, scale: -1.2, loop: true },
                { name: "highlight2", type: "AnimatedSprite", animation: { prefix: "light_center_000", postfix: "", start: 0, end: 8, toAddZero: true }, x: 507, y: 505, scale: -1.2, loop: true },
                { name: "highlight3", type: "AnimatedSprite", animation: { prefix: "light_center_000", postfix: "", start: 0, end: 8, toAddZero: true }, x: 948, y: 520, scale: 1.2, loop: true },
                { name: "highlight4", type: "AnimatedSprite", animation: { prefix: "light_right_000", postfix: "", start: 0, end: 8, toAddZero: true }, x: 1390, y: 520, scale: 1.2, loop: true },
                { name: "blackBox", type: "Graphics", width: 960, height: 980, color: 0x000000, alpha: 0.7, x: 14, y: 20 },
                { name: "powerChanceImg", type: "Sprite", image: "powerChanceImg", x: 450, y: 510, anchor: { x: 0.5, y: 0.5 } },
                { name: "frameShine", type: "AnimatedSprite", animation: { prefix: "frame_shine_000", postfix: "", start: 0, end: 4, toAddZero: true }, x: 1190, y: 510, scale: 1.2, loop: true },
            ],
            layoutData: {
                Desktop: { x: 830, y: 210 },
                Portrait: { x: 0, y: 860 },
                Landscape: { x: 830, y: 210 },
            }
        },
        {
            name: "gamelogo", type: "Sprite", image: "gameLogo", anchor: { x: 0.5, y: 0 }, onTop: true,
            layoutData: {
                Desktop: { x: 680, y: 4 },
                Portrait: { x: 720, y: 10, scale: 1.5 },
                Landscape: { x: 680, y: 4, scale: 1 },
            }
        },
    ],
    layoutData: {
        "Desktop": { hAlign: "center", vAlign: "middle", widthPerc: 0.96, heightPerc: 1 },
        "Portrait": { hAlign: "center", vAlign: "top" },
        "Landscape": { hAlign: "center", vAlign: "top" },
    }

}
