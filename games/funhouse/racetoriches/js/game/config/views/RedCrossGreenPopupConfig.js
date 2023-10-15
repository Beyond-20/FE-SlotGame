export const RED_CROSS_GREEN_POPUP_CONFIG = {
    name: "redCrossGreenPopupComp", type: "Comp", class: "RedCrossGreenPopupComp", resizeChildren: true,
    Elements: [
        {
            name: "bg", type: "DualImage", image: "popUpBg",
            layoutData: {
                "Desktop": { hAlign: "center", vAlign: "top", fitToScreen: true },
                "Portrait": { hAlign: "center", vAlign: "top", fitToScreen: true },
                "Landscape": { hAlign: "center", vAlign: "top", fitToScreen: true },
            }
        },
        {
            name: "redCrossGreenElements", type: "Comp", class: "GameResizeComp",
            Elements: [
                { name: "guideRect", type: "Graphics", color: 0xff0000, width: 2560, height: 1440, pWidth: 1440, pHeight: 2560, lWidth: 2560, lHeight: 1440, alpha: 0 },
                { name: "congratTxt", type: "Text", content: "congratText", fontSize: 120, style: "PopupMessage3Style", anchor: { x: 0.5, y: 0.5 }, x: 1273, y: 80, lx: 1273, ly: 80, px: 720, py: 80 },
                { name: "youhavewonText", type: "Text", content: "youhavewonText", fontSize: 90, style: "PopupMessage3Style", anchor: { x: 0.5, y: 0.5 }, x: 1273, y: 200, lx: 1273, ly: 200, px: 720, py: 180 },
                { name: "redCrossGreenImage", type: "Sprite", image: "place 3", x: 868, y: 350, px: 308, py: 800, lx: 868, ly: 350, scale: 2 },
                { name: "pressAnyWhereText", type: "Text", style: "commonFontStyle", stroke: "0x000000", strokeThickness: 5, lineHeight: 30, align: "center", anchor: { x: 0.5, y: 0.5 }, fontSize: 80, x: 1280, y: 1050, px: 720, py: 1400, lx: 1280, ly: 1050 },
                {
                    name: "totalWinAmountComp", type: "Comp", class: "WinAmountComp", x: 1280, y: 1260, px: 720, py: 2000, lx: 1280, ly: 1260,
                    Elements: [
                        { name: "winText", type: "Text", contentText: "100.00", style: "winAmountStyle1", fontSize: 300, anchor: { x: 0.5, y: 0.5 } }
                    ],
                },
            ],
            layoutData: {
                "Desktop": { hAlign: "center", vAlign: "middle", widthPerc: 1, heightPerc: 1 },
                "Portrait": { hAlign: "center", vAlign: "middle", widthPerc: 1 },
                "Landscape": { hAlign: "center", vAlign: "bottom", heightPerc: 1 },
            }
        },
    ],
}
