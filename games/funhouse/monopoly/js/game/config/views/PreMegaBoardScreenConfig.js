export const PRE_MEGABOARD_SCREEN_CONFIG = {
    name: "preMegaBoardScreenComp", type: "Comp", class: "PreMegaBoardScreenComp", resizeChildren: true,
    Elements: [
        {
            name: "bg", type: "DualImage", image: "popupbg",
            layoutData: {
                "Desktop": { hAlign: "center", vAlign: "bottom", fitToScreen: true },
                "Portrait": { hAlign: "center", vAlign: "bottom", fitToScreen: true },
                "Landscape": { hAlign: "center", vAlign: "bottom", fitToScreen: true },
            }
        },
        {
            name: "megaboardIntroComp", type: "Comp", class: "PixiContainer",
            Elements: [
                { name: "guideRect", type: "Graphics", color: "0xffff00", width: 2560, height: 1440, pWidth: 1140, pHeight: 5560, lWidth: 5560, lHeight: 1440, alpha: 0 },
                { name: "congratTxt", type: "Text", content: "congratText", toUpperCase: true, fontSize: 120, style: "PopupMessage3Style", anchor: { x: 0.5, y: 0.5 }, x: 1280, y: 50 },
                { name: "triggeredTxt", type: "Text", content: "triggeredText", fontSize: 80, style: "PopupMessage3Style", anchor: { x: 0.5, y: 0.5 }, x: 1280, y: 160 },
                { name: "megaboardTxt", type: "Text", content: "megaboardText", x: 1280, y: 200, fontSize: 160, style: "PopupMessage4Style", anchor: { x: 0.5, y: 0.5 }, fontColor: ["0x58d3fe", "0x266cfc", "0x205cf7", "0x1237ea", "0x0b23e3", "0x0615de", "0x040fdc"], stroke: "0x60605f", strokeThickness: 20, anchor: { x: 0.5, y: 0 }, dropShadow: true, dropShadowColor: "0x2d2d2d", dropShadowDistance: 2, dropShadowAlpha: 0.4, },
                {
                    name: "megaBoardIntroBox", type: "Comp", class: "GameResizeComp", x: 50, y: 400, scale: 2, px: 370, py: 0, lx: 50, ly: 400,
                    Elements: [
                        {
                            name: "guideRect",
                            type: "Graphics",
                            color: 0xffff00,
                            alpha: 0,
                            width: 1230, height: 410,
                            pWidth: 920, pHeight: 890,
                            lWidth: 1230, lHeight: 410,
                        },
                        { name: "msgPopBox1", type: "Sprite", image: "square_board", scale: 0.5, x: 0, y: 0, px: 0, py: 0, lx: 0, ly: 0 },
                        { name: "msgPopBoxImage1", type: "Sprite", image: "preScreenImg1", x: 45, y: 24, scale: 0.4 },
                        { name: "bonusPopBoxMsg1", type: "Text", content: "bonusPopBoxMsg1", style: "preScreenFontStyle", align: "center", anchor: { x: 0.5, y: 0.5 }, wordWrap: true, wordWrapWidth: 300, x: 183.5, y: 269 },
                        { name: "msgPopBox2", type: "Sprite", image: "square_board", scale: 0.5, x: 435, y: 0, px: 510, py: 0, lx: 435, ly: 0 },
                        { name: "msgPopBoxImage2", type: "Sprite", image: "preScreenImg2", x: 480.5, y: 24, scale: 0.4 },
                        { name: "bonusPopBoxMsg2", type: "Text", content: "bonusPopBoxMsg2", style: "preScreenFontStyle", align: "center", anchor: { x: 0.5, y: 0.5 }, wordWrap: true, wordWrapWidth: 300, x: 618, y: 260 },
                        { name: "msgPopBox3", type: "Sprite", image: "square_board", scale: 0.5, x: 865, y: 0, px: 250, py: 480, lx: 865, ly: 0, },
                        { name: "msgPopBoxImage3", type: "Sprite", image: "preScreenImg3", x: 910, y: 24, scale: 0.4 },
                        { name: "bonusPopBoxMsg3", type: "Text", content: "bonusPopBoxMsg3", style: "preScreenFontStyle", align: "center", anchor: { x: 0.5, y: 0.5 }, wordWrap: true, wordWrapWidth: 300, x: 1050, y: 268.5 }
                    ],
                },
                {
                    name: "startBtn", type: "ButtonV2", images: ["Btn_On", "Btn_Off", "Btn_On"], scale: 1, anchor: { x: 0.5, y: 0.5 }, enabled: true, x: 1100, y: 1230, px: 1050, py: 2230, lx: 1100, ly: 1230,
                },
            ],
            layoutData: {
                "Desktop": { hAlign: "center", vAlign: "middle", widthPerc: 1, heightPerc: 1 },
                "Portrait": { hAlign: "center", vAlign: "middle", widthPerc: 1 },
                "Landscape": { hAlign: "center", vAlign: "middle", heightPerc: 0.95 },
            }
        },
    ],

}
