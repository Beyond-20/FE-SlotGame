export const BONUS_GAME_CONFIG = {
    name: "bonusComp", type: "Comp", class: "BonusGame", resizeChildren : true,
    Elements: [

        {name: "bgContainer", type: "Comp", class: "PixiContainer",
            Elements: [
                { name: "guideRect", type: "Graphics", color: 0xff0000, width: 2560, height: 1440},
                {name: "bonusgamebg", type: "Spine", spineName: "Bonusbg_album", deaultState : "animation", loop : true, x : 1280, y : 720}
              ],
            layoutData : {
                "Desktop" : {fitToScreen : true}
            }
        },
        {
            name: "bonusContainer", type: "Comp", class: "PixiContainer",
            Elements: [
                { name: "guideRect", type: "Graphics", color: 0xff0000, width: 2560, height: 1440, alpha : 0.8},
                { name: "element1", type: "Spine", spineName: "crocodail", deaultState : "idle", x: 300, y: 700, px: 850, py: 900},
                { name: "element2", type: "Spine", spineName: "crocodail", deaultState : "idle", x: 950, y: 700, px: 350, py: 1100},
                { name: "element3", type: "Spine", spineName: "crocodail", deaultState : "idle", x: 1600, y: 700, px: 850, py: 1300},
                { name: "element4", type: "Spine", spineName: "crocodail", deaultState : "idle", x: 300, y: 1000, px: 350, py: 1500},
                { name: "element5", type: "Spine", spineName: "crocodail", deaultState : "idle", x: 950, y: 1000, px: 850, py: 1700},
                { name: "element6", type: "Spine", spineName: "crocodail", deaultState : "idle", x: 1600, y: 1000, px: 350, py: 1900},
                { name: "fsvaluebg", type: "Sprite", image: "TextFieldSmall", x: 340, y: 170},
                { name: "fstitlebg", type: "Sprite", image: "TextFieldBig", x: 340, y: 80},
                { name: "multivaluebg", type: "Sprite", image: "TextFieldSmall", x: 1600, y: 170},
                { name: "multititlebg", type: "Sprite", image: "TextFieldBig", x: 1600, y: 80},
                { name: "bonusText", type: "Text", style: "prizeMsgStyle", fontSize: 50, mFontSize: 70, pFontSize: 70, fontColor: ["0x1CB7C0", "0xffffff", "0x76EDF0", "0x1CB7C0"], anchor: { x: 0.5, y: 0.5 } },
                { name: "freespinsTitleText", type: "Text", style: "prizeMsgStyle", fontSize: 60, mFontSize: 60, pFontSize: 80, fontColor: ["0xffffff"], anchor: { x: 0.5, y: 0.5 }, x: 220, y: 50},
                { name: "multiplierTitleText", type: "Text", style: "prizeMsgStyle", fontSize: 60, mFontSize: 60, pFontSize: 80, fontColor: ["0xffffff"], anchor: { x: 0.5, y: 0.5 }, x: 220, y: 50},
                { name: "bonusTitleText", type: "Text", style: "BonusPopupTitleStyle", fontSize: 90, mFontSize: 120, pFontSize: 160, fontColor: ["0xdcae11", "0xffb203", "0xffc613", "0xffe82b", "0xfff53d"], anchor: { x: 0.5, y: 0 }, x: 950, y: 90, px: 632, py: 50},
                { name: "bonusSubtitleText", type: "Text", style: "prizeMsgStyle", fontSize: 60, mFontSize: 80, pFontSize: 120, wordWrapWidth: 900, fontColor: ["0xffffff"], anchor: { x: 0.5, y: 0}, x: 950, y: 176, px: 632, py: 130},
                { name: "freespinValueText", type: "Text", style: "prizeMsgStyle", fontSize: 100, mFontSize: 100, pFontSize: 120, wordWrapWidth: 900, fontColor: ["0xf4f75b", "0xeaff3d", "0xd6fd26", "0xbefb15", "0x7ec32b"], anchor: { x: 0.5, y: 0.5 }, x: 124, y: 106},
                { name: "multiplierValueText", type: "Text", style: "prizeMsgStyle", fontSize: 100, mFontSize: 100, pFontSize: 120, wordWrapWidth: 900, fontColor: ["0xf4f75b", "0xeaff3d", "0xd6fd26", "0xbefb15", "0x7ec32b"], anchor: { x: 0.5, y: 0.5 }, x: 124, y: 106},
            ],
            layoutData1: {
                "Desktop": { hAlign: "center", vAlign: "middle", widthPerc: 0.9, heightPerc: 0.9 },
                "Portrait": { hAlign: "center", vAlign: "middle", widthPerc: 0.98, vPaddingPerc: 0.2 },
                "Landscape": { hAlign: "center", vAlign: "top", heightPerc: 0.98 },
            }
        }

    ],


}
