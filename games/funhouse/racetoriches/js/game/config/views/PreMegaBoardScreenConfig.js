export const PRE_MEGABOARD_SCREEN_CONFIG = {
    name: "preMegaBoardScreenComp", type: "Comp", class: "PreMegaBoardScreenComp", resizeChildren: true,
    Elements: [
        {
            name: "bg", type: "DualImage", image: "popUpBg",
            layoutData: {
                "Desktop": { hAlign: "center", vAlign: "bottom", fitToScreen: true },
                "Portrait": { hAlign: "center", vAlign: "bottom", fitToScreen: true },
                "Landscape": { hAlign: "center", vAlign: "bottom", fitToScreen: true },
            }
        },
        {
            name: "megaboardIntroComp", type: "Comp", class: "PixiContainer",
            Elements: [
                { name: "guideRect", type: "Graphics", color: "0xffffff", width: 2560, height: 1440, pWidth: 1140, pHeight: 5560, lWidth: 5560, lHeight: 1440, alpha: 0 },
                {
                    name: "MsgElementsContainer", type: "Container", x: 950, y: 20, lx: 950, ly: 20, px: 950, py: -200,
                    anchor: { x: 0.5, y: 0 },
                    Elements: [
                        {
                            name: "guideRect",
                            type: "Graphics",
                            color: 0xff0000,
                            alpha: 0,
                            width: 660,
                            height: 200,
                        },
                        { name: "congratTxt", type: "Text", content: "congratText", fontSize: 60, style: "PopupMessage3Style", anchor: { x: 0.5, y: 0.5 }, x: 330, y: 30 },
                        { name: "triggeredTxt", type: "Text", content: "triggeredText", fontSize: 40, style: "PopupMessage3Style", anchor: { x: 0.5, y: 0.5 }, x: 330, y: 90 },
                        { name: "megaboardTxt", type: "Text", content: "megaboardText", x: 330, y: 160, fontSize: 80, style: "PopupMessage4Style", anchor: { x: 0.5, y: 0.5 }, fill: "0xe80000", stroke: "0xfef6a8", strokeThickness: 4, dropShadow: true, dropShadowColor: "0x1d573d", dropShadowDistance: 2, dropShadowAlpha: 0.4, },
                    ],
                },
                {
                    name: "megaBoardIntroBox", type: "Comp", class: "GameResizeComp", x: 50, y: 250, scale: 2, px: 370, py: 0, lx: 50, ly: 250,
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
                        { name: "msgPopBox1", type: "Sprite", image: "msgPopBox1", scale: 0.8, x: 0, y: 0, px: 0, py: 0, lx: 0, ly: 0 },
                        { name: "bonusPopBoxMsg1", type: "Text", content: "bonusPopBoxMsg1", style: "commonFontStyle", stroke: 0x000000, strokeThickness: 5, lineHeight: 30, align: "center", anchor: { x: 0.5, y: 0.5 }, fontSize: 20, wordWrap: true, wordWrapWidth: 350, x: 205, y: 320, px: 205, py: 320, lx: 205, ly: 320, },
                        { name: "msgPopBox2", type: "Sprite", image: "msgPopBox2", scale: 0.8, x: 410, y: 0, px: 510, py: 0, lx: 410, ly: 0 },
                        { name: "bonusPopBoxMsg2", type: "Text", content: "bonusPopBoxMsg2", style: "commonFontStyle", stroke: 0x000000, strokeThickness: 5, lineHeight: 30, align: "center", anchor: { x: 0.5, y: 0.5 }, fontSize: 20, wordWrap: true, wordWrapWidth: 370, x: 615, y: 320, px: 715, py: 320, lx: 615, ly: 320 },
                        { name: "msgPopBox3", type: "Sprite", image: "msgPopBox3", scale: 0.8, x: 820, y: 0, px: 250, py: 480, lx: 820, ly: 0, },
                        { name: "bonusPopBoxMsg3", type: "Text", content: "bonusPopBoxMsg3", style: "commonFontStyle", stroke: 0x000000, strokeThickness: 5, lineHeight: 30, align: "center", anchor: { x: 0.5, y: 0.5 }, fontSize: 20, wordWrap: true, wordWrapWidth: 370, x: 1025, y: 320, px: 456, py: 800, lx: 1025, ly: 320 }
                    ],
                },
                {
                    name: "startBtn", type: "ButtonV2", images: ["Btn_Off", "Btn_On", "Btn_Off"], scale: 1.5, anchor: { x: 0.5, y: 0.5 }, enabled: true, x: 1050, y: 1230, px: 1050, py: 2230, lx: 1050, ly: 1230,
                    textConfig: { name: "btnText", type: "Text", content: "startText", style: "commonFontStyle", fill: "0xe1ffc4", fontSize: 50 },
                },
            ],
            layoutData: {
                "Desktop": { hAlign: "center", vAlign: "middle", widthPerc: 1, heightPerc: 1 },
                "Portrait": { hAlign: "center", vAlign: "middle", widthPerc: 1.2 },
                "Landscape": { hAlign: "center", vAlign: "top", heightPerc: 0.98 },
            }
        },
    ],

}
