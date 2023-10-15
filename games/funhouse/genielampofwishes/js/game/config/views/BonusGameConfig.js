export const BONUS_GAME_CONFIG = {
    name: "bonusComp", type: "Comp", class: "BonusGame", resizeChildren: true,
    Elements: [
        {
            name: "bonusgamebg", type: "Sprite", image: "freeSpinsBG",
            layoutData: {
                "Desktop": { hAlign: "center", vAlign: "top", fitToScreen: true },
                "Portrait": { hAlign: "center", vAlign: "top", fitToScreen: true },
                "Landscape": { hAlign: "center", vAlign: "top", fitToScreen: true },
            }
        },
        {
            name: "bonusContainer", type: "Container",
            Elements: [
                { name: "guideRect", type: "Graphics", width: 3060, height: 1440, color: 0xff0000, pWidth: 1250, pHeight: 2270 ,alpha:0},
                {
                    name: "lamp1", type: "Comp", class: "GenieLampComp", id: 1,
                    Elements: [
                        { name: "carpet", type: "Spine", spineName: "capert", defaultState: "idle_lamp", loop: true },
                        { name: "lamp", type: "Spine", spineName: "lamps", defaultState: "", loop: true},
                    ],
                    layoutData: {
                        Desktop: { x: 0, y: 0 },
                        Portrait: { x: 0, y: 0, },
                        Landscape: { x: 0, y: 0, }
                    }
                },
                {
                    name: "lamp2", type: "Comp", class: "GenieLampComp", id: 2,
                    Elements: [
                        { name: "carpet", type: "Spine", spineName: "capert", defaultState: "idle_lamp", loop: true },
                        { name: "lamp", type: "Spine", spineName: "lamps", defaultState: "", loop: true},
                    ],
                    layoutData: {
                        Desktop: { x: 1820, y: 0 },
                        Portrait: { x: 0, y: 678, },
                        Landscape: { x: 1820, y: 0, }
                    }
                },
                {
                    name: "lamp3", type: "Comp", class: "GenieLampComp", id: 3,
                    Elements: [
                        { name: "carpet", type: "Spine", spineName: "capert", defaultState: "idle_lamp", loop: true },
                        { name: "lamp", type: "Spine", spineName: "lamps", defaultState: "", loop: true},
                    ],
                    layoutData: {
                        Desktop: { x: 910, y: 500 },
                        Portrait: { x: 0, y: 1356, },
                        Landscape: { x: 910, y: 500, }
                    }
                },
                {
                    name: "winAmountComp", type: "Comp", class: "WinAmountComp", x: 400,
                    Elements: [
                        { name: "winText", type: "Text", style: "winAmountStyle1", fontSize: 230, fontColor: [0xe8ac00, 0xec7500, 0xf3a000, 0xfff542, 0xfffc7c, 0xe05600, 0xcb3b00, 0xf96c00, 0xf09300, 0xfbcd3b], anchor: { x: 0.5, y: 0.5 } }
                    ],
                },
            ],
           
        },
        {
            name: "totalWinAmountComp", type: "Comp", class: "WinAmountComp",
            Elements: [
                { name: "winTitlebg", type: "Sprite", image: "bonusWinTitleBG", x: 0, px: 50, lx:0 },
                { name: "winTitle", type: "Text", style: "bonusInstructionStyle", x: 280, y: 84, px: 320, py: 84, lx: 280, ly: 84, anchor: {x: 0.5, y: 0.5}, fontSize: 60, fontColor: [0xe8ac00, 0xec7500, 0xf3a000, 0xfff542, 0xfffc7c, 0xe05600, 0xcb3b00, 0xf96c00, 0xf09300, 0xfbcd3b], stroke: 0xfbcd3b, strokeThickness: 4, content: "totalWinText" },
                { name: "winTextbg", type: "Sprite", image: "bonusWinAmountBG", x: 20, y:150, px: 580, py: 0 , lx:20, ly:150},
                { name: "winText", type: "Text", style: "winTextStyle", fontSize: 70, anchor: { x: 0.5, y: 0.5 }, x: 276, y: 230, px: 834, py: 78, lx: 276, ly: 230}
            ],
            layoutData: {
                Desktop: { hAlign: "left", vAlign:"top", heightPerc: 0.15, x: 40, y: 40 },
                Portrait: { hAlign:"left", vAlign:"top",widthPerc: 0.8, vPaddingPerc: 0.07, hPaddingPerc:0.08 },
                Landscape: { hAlign: "left", vAlign:"top",heightPerc: 0.22, x: 40, y: 40 }
            }
        },
        {
            name: "bonusTitle", type: "Text", style: "bonusInstructionStyle", fontSize: 76, mFontSize: 120, fontColor: [0x00ebff, 0x004be7, 0x0061db, 0x00c3f4, 0x005be2, 0x0028b7, 0x003cd7, 0x0075f5, 0x000ac6], stroke: 0x2e234d, strokeThickness: 10, content: "bonusNewText",
            layoutData: {
                Desktop: { hAlign: "center", vAlign: "top", vPaddingPerc: 0.01, widthPerc: 0.4 },
                Portrait: { widthPerc: 0.7, hAlign: "center", vAlign: "top", vPaddingPerc: 0.01 },
                Landscape: { hAlign: "center", vAlign: "top", vPaddingPerc: 0.01, widthPerc: 0.4}
            }
        },
        {
            name: "bonusSubTitle", type: "Text", style: "bonusInstructionStyle", fontSize: 60, mFontSize: 90, fontColor: [0xe8ac00, 0xec7500, 0xf3a000, 0xfff542, 0xfffc7c, 0xe05600, 0xcb3b00, 0xf96c00, 0xf09300, 0xfbcd3b], stroke: 0x002529, strokeThickness: 10, content: "pickaLampText",
            layoutData: {
                Desktop: { hAlign: "center", vAlign: "top", vPaddingPerc: 0.1, widthPerc: 0.42 },
                Portrait: { widthPerc: 0.7, hAlign: "center", vAlign: "top", vPaddingPerc: 0.14 },
                Landscape: { hAlign: "center", vAlign: "top", vPaddingPerc: 0.13, widthPerc: 0.42 }
            }
        },
    ],


}
