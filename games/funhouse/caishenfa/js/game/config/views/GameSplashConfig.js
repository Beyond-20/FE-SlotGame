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
                { name: "guideRect", type: "Graphics", color: 0x00ff00, width: 1140, height: 1230, alpha: 0 },
                {
                    name: "page1", type: "Comp", class: "PaytablePageV2", x: 0, y: 0,
                    Elements: [
                        { name: "screen1", type: "Sprite", image: "screen1" },
                        { name: "bonusItem", type: "Comp", class: "PaytableItem", descWidth: 1000, yPadding: 10, content: "bonusPayoutText", style: "paytableDescStyle",align:"left", x: 40, y: 400 },
                        { name: "winUptoText", type: "Text", content: "winUptoText", fontSize: 80, style: "paytableDescStyle", x: 360, y: 1100 }
                    ]
                },
            ]
        },
        {
            name: "logoContainer", type: "Comp", class: "PixiContainer", scale: 1, pScale: 1.25, lScale: 1, pYPadding: 40,
            Elements: [
                { name: "guideRect", type: "Graphics", color: 0x00ff00, width: 700, height: 580, alpha: 0 },
                { name: "splashlogo", type: "Sprite", image: "splashlogo", anchor: { x: 0.5, y: 0.5 },},
            ]
        },
        {
            name: "elementsContainer", type: "Comp", class: "PixiContainer",
            Elements: [
                { name: "guideRect", type: "Graphics", color: 0x00ff00, width: 680, height: 510, pWidth: 950, pHeight: 800, lWidth: 850, lHeight: 720, alpha: 0 },
                { name: "playBtn", type: "Button", images: ["splashStartBtn_up", "splashStartBtn_over", "splashStartBtn_over"], anchor: { x: 0.5, y: 0.5 } },
                { name: "volatilityComp", type: "Comp", class: "VolatilityComp", value: 3, textStyle: "volatilityStyle", fontSize : 40, mFontSize : 60, fill:["0x029550","0x16d487","0x15c881","0x59fddb","0x016c36","0x016f35", "0x29ef97"],stroke: "0x098f73", strokeThickness : 2 },
                { name: "dontShowComp", type: "Comp", class: "DontShowNextTimeComp", value: 3, textStyle: "dontShowStyle", fontSize : 50, mFontSize : 60, fill:["0x029550","0x16d487","0x15c881","0x59fddb","0x016c36","0x016f35", "0x29ef97"],stroke: "0x098f73", strokeThickness : 2,tickImage : "splashToggleTick_penguin",tickXPadding : 20, tickYPadding : 40}
            ]
        }
    ],
    layoutData: {
        "Desktop": { x: 0, y: 0 }
    }

}
