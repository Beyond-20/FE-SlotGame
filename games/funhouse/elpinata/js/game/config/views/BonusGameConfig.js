export const BONUS_GAME_CONFIG = {
    name: "bonusComp", type: "Comp", class: "BonusGame",
    Elements: [
        {name: "bgContainer", type: "Comp", class: "PixiContainer",
            Elements: [
                {name: "bonusgamebg", type: "Sprite", image: "Bonus bg"}
              ],
            layoutData : {
                "Desktop" : {hAlign : "center", vAlign : "bottom", fitToScreen : true},
                "Portrait" : {hAlign : "center", vAlign : "bottom", fitToScreen : true},
                "Landscape" : {hAlign : "center", vAlign : "bottom", fitToScreen : true},
            }
        },
        {
            name: "bonusContainer", type: "Comp", class: "PixiContainer", resizeChildren: true,
            Elements: [
                { name: "guideRect", type: "Graphics", color: 0xff0000, width: 2560, height: 1230, pWidth: 1000, pHeight: 1350, alpha : 0, x : 0, y : 0, px: 0, py: 0, lx : 0, ly : 0},
                {name : "frame", type : "Sprite", image: "frame", x : 0, y : -10, px: -740, py: -10, lx : 0, ly : -10},
                {name : "pinatarope1", type : "Sprite", image: "Pinatarope", x : 768, y : 110 , px: 250, py: 102, lx: 768, ly: 110, pScale:1.2, lScale:1},
                {name : "pinatarope2", type : "Sprite", image: "Pinatarope", x : 1280, y : 110, px: 750, py: 102, lx: 1280, ly: 110, pScale:1.2, lScale:1 },
                {name : "pinatarope3", type : "Sprite", image: "Pinatarope", x : 1792, y : 110, px: 1500, py: 102 ,lx: 1792, ly: 110, pScale:1.2, lScale:1},
                { name: "element1", type: "Comp", class: "PinataComp", x : 768, y : 332, px: 250, py: 322, lx: 768, ly: 332},
                { name: "element2", type: "Comp", class: "PinataComp", x : 1280, y : 332, px: 750, py: 322, lx: 1280, ly: 332},
                { name: "element3", type: "Comp", class: "PinataComp", x : 1792, y : 332,px: 250, py: 712, lx: 1792, ly: 332},
                { name: "element4", type: "Comp", class: "PinataComp", x : 768, y : 692, px: 750, py: 712, lx: 768, ly: 692},
                { name: "element5", type: "Comp", class: "PinataComp", x : 1280, y : 692,px: 250, py:1102, lx: 1280, ly: 692},
                { name: "element6", type: "Comp", class: "PinataComp", x : 1792, y : 692, px: 750, py:1102, lx: 1792, ly: 692},
            ],
        },
        {name : "textContainer", type: "Comp", class : "PixiContainer", x: 20,y : 85,
            Elements: [
                { name: "guideRect", type: "Graphics", color: 0xffff00, width: 1950, height: 220, pWidth: 1000, pHeight : 480, lWidth: 1950, lHeight: 220, alpha : 0},
                {name : "multiplierCont", type: "Comp", class : "PixiContainer", x: 0, y : 0, px: 0, py: 220, lx:0, ly:0,
                    Elements: [
                        { name: "multititlebg", type: "Sprite", image: "TextFieldBig", x: 0, y: 0},
                        { name: "multivaluebg", type: "Sprite", image: "TextFieldSmall", x: 122, y: 110},
                        { name: "multiplierTitleText", type: "Text", style: "prizeMsgStyle", fontSize: 45, fontColor: ["0xffff92", "0xffff93", "0xf3f6b9", "0xf0c814", "0xf0c814"], anchor: { x: 0.5, y: 0 }, x: 234, y: 22},
                        { name: "multiplierValueText", type: "Text", style: "prizeMsgStyle", fontSize: 60, fontColor: ["0x80cfff", "0xdff4ff", "0xffffff", "0x97cffd", "0x50c3fd"], anchor: { x: 0.5, y: 0 }, x: 238, y: 114}
                    ],
                },
                { name: "bonusTitleText", type: "Text", style: "BonusPopupTitleStyle", fontSize: 95, fontColor: ["0xffff92", "0xffff93", "0xf3f6b9", "0xf0c814", "0xf0c814"], anchor: { x: 0.5, y: 0 }, x : 980, px:490, py: 0, lx:980, ly: 0},
                { name: "bonusSubtitleText", type: "Text", style: "prizeMsgStyle", fontSize: 52, wordWrapWidth: 900, fontColor: ["0xffff92", "0xffff93", "0xf3f6b9", "0xf0c814", "0xf0c814"], anchor: { x: 0.5, y: 0}, x: 980, y : 130, px:490 ,py:130, lx:980, ly:130},
                {name : "freespinCont", type: "Comp", class : "PixiContainer", x: 1480, y: 0, px:540 ,py:220,lx: 1480, ly:0,
                    Elements: [
                        { name: "fstitlebg", type: "Sprite", image: "TextFieldBig", x : 0, y : 0},
                        { name: "fsvaluebg", type: "Sprite", image: "TextFieldSmall", x: 122, y: 110},
                        { name: "freespinsTitleText", type: "Text", style: "prizeMsgStyle", fontSize: 40, mFontSize: 40, pFontSize: 60, fontColor: ["0xffff92", "0xffff93", "0xf3f6b9", "0xf0c814", "0xf0c814"], anchor: { x: 0.5, y: 0},x: 234, y: 30},
                        { name: "freespinValueText", type: "Text", contentText: "2342323", style: "prizeMsgStyle", fontSize: 60, wordWrapWidth: 900, fontColor: ["0x80cfff", "0xdff4ff", "0xffffff", "0x97cffd", "0x50c3fd"], anchor: { x: 0.5, y: 0}, x: 238, y: 112},
                    ],
                },
            ],
        },
        { name: "bonusText", type: "Text", style: "prizeMsgStyle", fontSize: 110, mFontSize: 120, fontColor: ["0x80cfff", "0xdff4ff", "0xffffff", "0x97cffd", "0x50c3fd"], anchor: { x: 0.5, y: 0.5 } },
        //{name : "efft", type: "Spine", spineName: "effects", defaultState: "FiveOfAKindText", x: 100, y: 200, loop: true}
    ],

}
