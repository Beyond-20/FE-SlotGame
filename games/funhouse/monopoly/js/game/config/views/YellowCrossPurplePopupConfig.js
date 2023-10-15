export const YELLOW_CROSS_PURPLE_POPUP_CONFIG = {
    name: "yellowCrossPurplePopupComp", type: "Comp", class: "YellowCrossPurplePopupComp", resizeChildren: true,
    Elements: [
        {
            name: "bg", type: "DualImage", image: "popupbg",
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
                { name: "congratTxt", type: "Text", content: "congratText", toUpperCase: true, fontSize: 120, style: "PopupMessage3Style", anchor: { x: 0.5, y: 0.5 }, x: 1273, y: 80, lx: 1273, ly: 80, px: 720, py: 80 },
                { name: "youhavewonText", type: "Text", content: "youhavewonText", fontSize: 90, style: "PopupMessage3Style", anchor: { x: 0.5, y: 0.5 }, x: 1273, y: 250, lx: 1273, ly: 250, px: 720, py: 250 },
                { name: "monopolyManImage", type: "Sprite", image: "character", x: 1100, y: 430 },
                { name: "pressAnyWhereText", type: "Text", style: "preScreenFontStyle", stroke: "0x000000", strokeThickness: 10, lineHeight: 30, align: "center", anchor: { x: 0.5, y: 0.5 }, fontSize: 80, x: 1280, y: 1050, px: 720, py: 1400, lx: 1280, ly: 1050 },
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
