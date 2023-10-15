export const GAME_SPLASH_CONFIG = {
    name: "splashComp", type: "Comp", class: "GameSplashComp",
    Elements: [
        {
            name: "bg", type: "Graphics", color: 0x000000, width: 3500, height: 3500, alpha: 0.57,
            layoutData: {
                Desktop: { fitToScreen: true },
                Landscape: { fitToScreen: true },
                Portrait: { fitToScreen: true }
            }
        },
        {
            name: "pagesComp", type: "Comp", class: "PaytablePages", x: 0, y: 0, maxWidth: 0.60, maxHeight: 0.9,
            Elements: [
                { name: "guideRect", type: "Graphics", color: 0xffff00, width: 1680, height: 1700, alpha: 0 },
                {
                    name: "page1", type: "Comp", class: "PaytablePageV2", x: 0, y: 0,
                    Elements: [
                        { name: "screen1", type: "Sprite", image: "screen1", y: -130 },
                        { name: "wildItem", type: "Comp", class: "PaytableItem", letterSpacing: 30, lineHeight: 60, descWidth: 820, yPadding: 10, fontSize: 55, mfontSize: 80, content: "wildRespinText", style: "paytableDescStyle", align: "left", x: 20, y: 500 },
                        { name: "bonusItem", type: "Comp", class: "PaytableItem", letterSpacing: 30, lineHeight: 60, descWidth: 770, yPadding: 10, fontSize: 55, mfontSize: 80, content: "randomWildMulText", style: "paytableDescStyle", align: "left", x: 450, y: 500 },
                        { name: "winUptoText", type: "Text", content: "winUptoText", fontSize: 120, style: "paytableDescStyle", x: 360, y: 1550 }
                    ]
                },
            ]
        },
        {
            name: "logoContainer", type: "Comp", class: "PixiContainer", scale: 1, pScale: 1.25, lScale: 1, pYPadding: 40,
            Elements: [
                { name: "guideRect", type: "Graphics", color: 0xff0000, width: 700, height: 600, alpha: 0 },
                { name: "splashlogo", type: "Sprite", image: "splashlogo", anchor: { x: 0.5, y: 0.45 }, },
            ]
        },
        {
            name: "elementsContainer", type: "Comp", class: "PixiContainer",
            Elements: [
                { name: "guideRect", type: "Graphics", color: 0xffff00, width: 680, height: 510, pWidth: 900, pHeight: 800, lWidth: 850, lHeight: 720, alpha: 0 },
                { name: "playBtn", type: "Button", images: ["splashStartBtn_up", "splashStartBtn_over", "splashStartBtn_over"], anchor: { x: 0.5, y: 0.5 } },
                { name: "volatilityComp", type: "Comp", class: "VolatilityComp", value: 3, textStyle: "volatilityStyle", fontSize: 40, mFontSize: 60, fill: ["0x7fff46", "0x3dff22", "0x38f61f", "0x2de119", "0x23cc13", "0x10a708", "0x089703", "0x048e00", "0x1a7112"], stroke: "0x04b301", strokeThickness: 2 },
                { name: "dontShowComp", type: "Comp", class: "DontShowNextTimeComp", value: 3, textStyle: "dontShowStyle", fontSize: 50, mFontSize: 60, fill: ["0x7fff46", "0x3dff22", "0x38f61f", "0x2de119", "0x23cc13", "0x10a708", "0x089703", "0x048e00", "0x1a7112"], stroke: "0x04b301", strokeThickness: 2, tickImage: "splashToggleTick_penguin", tickXPadding: 20, tickYPadding: 40 }
            ]
        }
    ],
    layoutData: {
        "Desktop": { x: 0, y: 0 }
    }

}
