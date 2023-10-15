export const BONUS_GAME_CONFIG = {
    name: "bonusComp", type: "Comp", class: "BonusGame", resizeChildren: true,
    Elements: [
        {
            name: "bonusgamebg", type: "Sprite", image: "bonusGameBG",
            layoutData: {
                "Desktop": { hAlign: "center", vAlign: "top", fitToScreen: true },
                "Portrait": { hAlign: "center", vAlign: "top", fitToScreen: true },
                "Landscape": { hAlign: "center", vAlign: "top", fitToScreen: true },
            }
        },
        {
            name: "bonusContainer", type: "Container", resizeChildren: true,
            Elements: [
                {
                    name: "door1", type: "Comp", class: "BountyDoorComp", id: 1,
                    Elements: [
                        { name: "door", type: "Spine", spineName: "doors", defaultState: "door1_idle", loop: true },
                        { name: "winAnim", type: "Spine", spineName: "win", defaultState: "", loop: false, x: 150, y: 320 },
                        { name: "lossAnim", type: "Spine", spineName: "los", defaultState: "", loop: false, x: 170, y: 340 },
                    ],
                    layoutData: {
                        Desktop: { x: 392, y: 454, },
                        Portrait: { x: 558, y: 678, },
                        Landscape: { x: 392, y: 454, }
                    }
                },
                {
                    name: "door2", type: "Comp", class: "BountyDoorComp", id: 2,
                    Elements: [
                        { name: "door", type: "Spine", spineName: "doors", defaultState: "door1_idle", loop: true },
                        { name: "winAnim", type: "Spine", spineName: "win", defaultState: "", loop: false, x: 150, y: 320 },
                        { name: "lossAnim", type: "Spine", spineName: "los", defaultState: "", loop: false, x: 170, y: 340 },
                    ],
                    layoutData: {
                        Desktop: { x: 1118, y: 454, },
                        Portrait: { x: 179, y: 1557, },
                        Landscape: { x: 1118, y: 454, }
                    }
                },
                {
                    name: "door3", type: "Comp", class: "BountyDoorComp", id: 3,
                    Elements: [
                        { name: "door", type: "Spine", spineName: "doors", defaultState: "door1_idle", loop: true },
                        { name: "winAnim", type: "Spine", spineName: "win", defaultState: "", loop: false, x: 150, y: 320 },
                        { name: "lossAnim", type: "Spine", spineName: "los", defaultState: "", loop: false, x: 170, y: 340 },
                    ],
                    layoutData: {
                        Desktop: { x: 1840, y: 454, },
                        Portrait: { x: 935, y: 1557, },
                        Landscape: { x: 1840, y: 454, }
                    }
                },
                {
                    name: "animBG", type: "Spine", spineName: "bonus_wall_alb", defaultState: "", loop: false,
                },
                {
                    name: "animBGP", type: "Spine", spineName: "bonus_mob", defaultState: "", loop: false,
                },
                {
                    name: "totalWinAmountComp", type: "Comp", class: "WinAmountComp",
                    Elements: [
                        { name: "winbg", type: "Sprite", image: "bonuswinbg", x: 580, px: 460 },
                        { name: "winTitle", type: "Text", style: "bonusInstructionStyle", x: 0, y: 38, fontSize: 100, fontColor: [0xffff84, 0xffff60, 0xffef4b, 0xffff66, 0xffd93b, 0xffef4d], stroke: 0xb6740a, strokeThickness: 4, content: "totalWinText" },
                        { name: "winText", type: "Text", style: "winAmountStyle2", fontSize: 150, anchor: { x: 0.5, y: 0.5 }, x: 960, y: 90, px: 860 }
                    ],
                    layoutData: {
                        Desktop: { x: 600, y: 1020 },
                        Portrait: { widthPerc: 0.8,  y: 2130},
                        Landscape: { heightPerc: 0.2, x: 600, y: 1020 }
                    }
                },
                {
                    name: "winAmountComp", type: "Comp", class: "WinAmountComp", resizeChildren: true,
                    Elements: [
                        { name: "winText", type: "Text", style: "winAmountStyle1", fontSize: 160, anchor: { x: 0.5, y: 0.5 } }
                    ],
                },
            ],
        },
        {
            name: "bonusTitle", type: "Text", style: "bonusInstructionStyle", fontSize: 76, mFontSize: 120, fontColor: [0x1cffff, 0x1c9beb, 0x04beff, 0x01a2ff], stroke: 0x000000, strokeThickness: 10, content: "bonusNewText",
            layoutData: {
                Desktop: { hAlign: "center", vAlign: "top", vPaddingPerc: 0.01, widthPerc: 0.4 },
                Portrait: { widthPerc: 0.7, hAlign: "center", vAlign: "top", vPaddingPerc: 0.08 },
                Landscape: { heightPerc: 0.12, hAlign: "center", vAlign: "top", vPaddingPerc: 0.05}
            }
        },
    ],


}
