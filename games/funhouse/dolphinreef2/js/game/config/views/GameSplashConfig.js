export const GAME_SPLASH_CONFIG = {
    name: "splashComp", type: "Comp", class: "GameSplashComp",
    Elements: [
        {
            name: "bg", type: "Graphics", color: 0x000000, width: 3500, height: 3500, alpha: 0.6,
            layoutData: {
                Desktop: { fitToScreen: true },
                Landscape: { fitToScreen: true },
                Portrait: { fitToScreen: true }
            }
        },
        {
            name: "pagesComp", type: "Comp", class: "PaytablePages", x: 0, y: 0, maxWidth: 0.60, maxHeight: 0.9,
            Elements: [
                { name: "guideRect", type: "Graphics", color: 0xffff00, width: 1680, height: 1635, alpha: 0 },
                {
                    name: "page1", type: "Comp", class: "PaytablePageV2", x: 0, y: 0,
                    Elements: [
                        { name: "screen1", type: "Sprite", image: "screen1", x: -20 },
                        { name: "wildItem", type: "Comp", class: "PaytableItem", letterSpacing: 30, lineHeight: 60, descWidth: 800, fontSize: 60, mfontSize: 80, content: "wildText", style: "paytableDescStyle", align: "left", x: 20, y: 480 },
                        { name: "bonusItem", type: "Comp", class: "PaytableItem", letterSpacing: 30, lineHeight: 60, descWidth: 770, fontSize: 60, mfontSize: 80, content: "scatterText", style: "paytableDescStyle", align: "left", x: 450, y: 480 },
                        { name: "winUptoText", type: "Text", content: "winUptoText", fontSize: 100, style: "paytableDescStyle", x: 360, y: 1500 }
                    ]
                },
            ]
        },
        {
            name: "logoContainer", type: "Comp", class: "PixiContainer", scale: 1, pScale: 1.25, lScale: 1, pYPadding: 40,
            Elements: [
                { name: "guideRect", type: "Graphics", color: 0xff0000, width: 700, height: 600, alpha: 0 },
                { name: "splashlogo", type: "Sprite", image: "gamelogo_splash", anchor: { x: 0.47, y: 0.45 }, },
            ]
        },
        {
            name: "elementsContainer", type: "Comp", class: "PixiContainer",
            Elements: [
                { name: "guideRect", type: "Graphics", color: 0xffff00, width: 680, height: 510, pWidth: 900, pHeight: 800, lWidth: 870, lHeight: 720, alpha: 0 },
                { name: "playBtn", type: "Button", images: ["splashStartBtn_up", "splashStartBtn_over", "splashStartBtn_over"], anchor: { x: 0.5, y: 0.5 } },
                { name: "volatilityComp", type: "Comp", class: "VolatilityComp", value: 3, textStyle: "gameFont1Style", fontSize: 38, mFontSize: 60 },
                { name: "dontShowComp", type: "Comp", class: "DontShowNextTimeComp", value: 3, textStyle: "gameFont1Style", fontSize: 38, mFontSize: 54, tickImage: "splashToggleTick_penguin", tickXPadding: 20, tickYPadding: 40 }
            ]
        }
    ],
    layoutData: {
        "Desktop": { x: 0, y: 0 }
    }

}
