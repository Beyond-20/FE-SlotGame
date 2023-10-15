export const BONUS_GAME_CONFIG = {
    name: "bonusComp", type: "Comp", class: "BonusGame", resizeChildren: true,
    Elements: [
        {
            name: "bonusgamebg", type: "Sprite", image: "bonusGameBG",
            layoutData: {
                "Desktop": { hAlign: "left", vAlign: "bottom", fitToScreen: true },
                "Portrait": { hAlign: "center", vAlign: "top", fitToScreen: true },
                "Landscape": { hAlign: "center", vAlign: "top", fitToScreen: true },
            }
        },
        {
            name: "bonusContainer", type: "Comp", class: "PixiContainer",
            Elements: [
                { name: "guideRect", type: "Graphics", color: 0xff0000, width: 1900, height: 1264 },
                { name: "shellShadow1", type: "Sprite", image: "shellShadow", x: 90, y: 630, px: 100, py: 600, scale: 0.75 },
                { name: "shellShadow2", type: "Sprite", image: "shellShadow", x: 740, y: 630, px: 100, py: 1250, scale: 0.75 },
                { name: "shellShadow3", type: "Sprite", image: "shellShadow", x: 1370, y: 630, px: 1000, py: 350, scale: 0.75 },
                { name: "shellShadow4", type: "Sprite", image: "shellShadow", x: 420, y: 890, px: 1000, py: 1000, scale: 0.75 },
                { name: "shellShadow5", type: "Sprite", image: "shellShadow", x: 1080, y: 890, px: 1000, py: 1650, scale: 0.75 },
                {name : "holeBtn1", type: "AnimatedSprite", animation : {prefix : "an_scatterBonus_Open_", postfix: "", start : 0, end : 54, toAddZero : true, scale : 1}, x: 320, y: 630, px: 470, py: 630},
                {name : "holeBtn2", type: "AnimatedSprite", animation : {prefix : "an_scatterBonus_Open_", postfix: "", start : 0, end : 54, toAddZero : true, scale : 1}, x: 970, y: 630, px: 470, py: 1280},
                {name : "holeBtn3", type: "AnimatedSprite", animation : {prefix : "an_scatterBonus_Open_", postfix: "", start : 0, end : 54, toAddZero : true, scale : 1}, x: 1600, y: 630, px: 1380, py: 380},
                {name : "holeBtn4", type: "AnimatedSprite", animation : {prefix : "an_scatterBonus_Open_", postfix: "", start : 0, end : 54, toAddZero : true, scale : 1}, x: 650, y: 890, px: 1380, py: 1030},
                {name : "holeBtn5", type: "AnimatedSprite", animation : {prefix : "an_scatterBonus_Open_", postfix: "", start : 0, end : 54, toAddZero : true, scale : 1}, x: 1310, y: 890, px: 1380, py: 1680},

                { name: "textBase3", type: "Sprite", image: "TextFieldSmall", x: 340, y: 190, px: 490, py: -240, scale: { x: 0.8, y: 0.8 }, anchor: { x: 0.5, y: 0.5 } },
                { name: "textBase4", type: "Sprite", image: "TextFieldSmall", x: 1600, y: 190, px: 1400, py: -240, scale: { x: 0.8, y: 0.8 }, anchor: { x: 0.5, y: 0.5 } },
                { name: "textBase1", type: "Sprite", image: "TextFieldBig", x: 340, y: 115, px: 490, py: -385, scale: { x: 0.8, y: 0.8 }, anchor: { x: 0.5, y: 0.5 } },
                { name: "textBase2", type: "Sprite", image: "TextFieldBig", x: 1600, y: 115, px: 1400, py: -385, scale: { x: 0.8, y: 0.8 }, anchor: { x: 0.5, y: 0.5 } },

                { name: "bonusText", type: "Text", style: "prizeMsgStyle", fontSize: 80, mFontSize: 80, pFontSize: 80, fontColor: ["0x1CB7C0", "0xffffff", "0x76EDF0", "0x1CB7C0"], anchor: { x: 0.5, y: 0.5 } },
                { name: "bonusText2", type: "Text", style: "prizeMsgStyle", fontSize: 60, mFontSize: 50, pFontSize: 80, fontColor: ["0x1CB7C0", "0xffffff", "0x76EDF0", "0x1CB7C0"], anchor: { x: 0.5, y: 0.5 }, x: 5, y: -8, px: 5, py: -8},
                { name: "bonusText3", type: "Text", style: "prizeMsgStyle", fontSize: 60, mFontSize: 50, pFontSize: 80, fontColor: ["0x1CB7C0", "0xffffff", "0x76EDF0", "0x1CB7C0"], anchor: { x: 0.5, y: 0.5 }, x: 5, y: -8, px: 5, py: -8},
                { name: "bonusText4", type: "Text", style: "BonusPopupTitleStyle", fontSize: 90, mFontSize: 90, pFontSize: 160, fontColor: ["0xF9EA17", "0xEC736D"], anchor: { x: 0.5, y: 0.5 }, x: 950, y: 90, px: 950, py: -800},
                { name: "bonusText5", type: "Text", style: "prizeMsgStyle", fontSize: 60, mFontSize: 60, pFontSize: 120, wordWrapWidth: 900, fontColor: ["0x864201", "0xffc100", "0xffec43", "0xffff9e", "0xffff34", "0xffdf0b", "0xffb800", "0xf99900"], anchor: { x: 0.5, y: 0.5 }, x: 950, y: 176, px: 950, py: -600},
                { name: "bonusText6", type: "Text", style: "prizeMsgStyle", fontSize: 100, mFontSize: 70, pFontSize: 120, wordWrapWidth: 900, fontColor: ["0x864201", "0xffc100", "0xffec43", "0xffff9e", "0xffff34", "0xffdf0b", "0xffb800", "0xf99900"], anchor: { x: 0.5, y: 0.5 }, x: 5, y: -6, px: 5, py: -6},
                { name: "bonusText7", type: "Text", style: "prizeMsgStyle", fontSize: 100, mFontSize: 70, pFontSize: 120, wordWrapWidth: 900, fontColor: ["0x864201", "0xffc100", "0xffec43", "0xffff9e", "0xffff34", "0xffdf0b", "0xffb800", "0xf99900"], anchor: { x: 0.5, y: 0.5 }, x: 5, y: -6, px: 5, py: -6},
            ],
            layoutData1: {
                "Desktop": { hAlign: "center", vAlign: "middle", widthPerc: 0.9, heightPerc: 0.9 },
                "Portrait": { hAlign: "center", vAlign: "middle", widthPerc: 0.98, vPaddingPerc: 0.2 },
                "Landscape": { hAlign: "center", vAlign: "top", heightPerc: 0.98 },
            }
        }

    ],


}
