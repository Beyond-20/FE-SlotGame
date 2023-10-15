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
                { name: "guideRect", type: "Graphics", color: 0xff0000, width: 1700, height: 1600, alpha: 0 },
                {
                    name: "page1", type: "Comp", class: "PaytablePageV2", x: 0, y: 0,
                    Elements: [
                        { name: "screen1", type: "Sprite", image: "screen1" },
                        { name: "wildItem", type: "Comp", class: "PaytableItem", descWidth: 800, yPadding: 10, content: "wildText", style: "paytableDescStyle", x: 30, y: 490 },
                        { name: "bonusItem", type: "Comp", class: "PaytableItem", descWidth: 780, yPadding: 10, content: "scatterText", style: "paytableDescStyle", x: 460, y: 490 },
                        { name: "winUptoText", type: "Text", content: "winUptoText", fontSize: 100, style: "paytableDescStyle", x: 330, y: 1480 }
                    ]
                },
            ]
        },
        {
            name: "logoContainer", type: "Comp", class: "PixiContainer", scale: 1, pScale: 1,
            Elements: [
                { name: "guideRect", type: "Graphics", color: 0x00ff00, width: 680, height: 700, lwidth: 850, lheight: 750, alpha: 0 },
                { name: "splashlogo", type: "Sprite", image: "gamelogo_splash", anchor: { x: 0.5, y: 0.5 }, },
            ]
        },
        {
            name: "elementsContainer", type: "Comp", class: "PixiContainer", scale: 0.8,
            Elements: [
                { name: "guideRect", type: "Graphics", color: 0x0000ff, width: 740, height: 650, pWidth: 960, pHeight: 780, lWidth: 980, lHeight: 840, alpha: 0 },
                { name: "playBtn", type: "Button", images: ["splashStartBtn_up", "splashStartBtn_over", "splashStartBtn_over"], anchor: { x: 0.5, y: 0.5 } },
                { name: "volatilityComp", type: "Comp", class: "VolatilityComp", value: 3, textStyle: "gameFont1Style", fontSize: 40, mFontSize: 66, },
                { name: "dontShowComp", type: "Comp", class: "DontShowNextTimeComp", value: 3, textStyle: "gameFont1Style", fontSize: 46, mFontSize: 63, tickImage: "splashToggleTick_penguin", tickXPadding: 30, tickYPadding: 40 }
            ]
        }

    ],
    layoutData: {
        "Desktop": { x: 0, y: 0 },
    }

}
