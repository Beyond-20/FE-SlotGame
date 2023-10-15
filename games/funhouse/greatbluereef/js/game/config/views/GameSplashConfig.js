export const GAME_SPLASH_CONFIG = {
    name :"splashComp", type : "Comp", class : "GameSplashComp",
    Elements : [
        {name : "pagesComp", type : "Comp", class :"PaytablePages", x: 0, y : 0, maxWidth : 0.60, maxHeight : 0.9,
            Elements : [
                {name : "guideRect", type : "Graphics", color : 0xff0000, width : 1440, height : 1230, alpha : 0},
                {name : "page1", type : "Comp", class : "PaytablePage", x: 100, y : 0,
                    Elements : [
                        {name : "screen1", type : "Sprite", image : "screen1"},
                        {name : "wildItem", type : "Comp", class : "PaytableItem", descWidth : 600, yPadding : 10, content : "wildPayoutText", style : "paytableDescStyle", x : -10, y : 370},
                        {name : "bonusItem", type : "Comp", class : "PaytableItem", descWidth : 600, yPadding : 10, content : "bonusPayoutText", style : "paytableDescStyle", x : 340, y : 370},
                        {name : "winUptoText", type : "Text", content : "winUptoText", fontSize : 80, value : "10,000", style : "paytableDescStyle", x : 360, y : 1100}
                    ]
                },
            ]
        },
        {name : "logoContainer", type : "Comp", class : "PixiContainer",scale : 1, pScale : 1.5, lScale : 1.5,
            Elements: [
                {name : "guideRect", type : "Graphics", color : 0x00ff00, width : 700, height : 630, alpha : 0},
                {name : "splashlogo", type : "Sprite", image : "splashlogo", anchor : {x:0.5,y : 0.5}},
            ]
        },
        {name : "elementsContainer", type : "Comp", class : "PixiContainer",
            Elements: [
                {name : "guideRect", type : "Graphics", color : 0x0000ff, width : 600, height : 600, pWidth : 740, pHeight : 740, lWidth : 740, lHeight : 710, alpha : 0},
                {name : "playBtn", type : "Button", images : ["splashStartBtn_up", "splashStartBtn_over", "splashStartBtn_over"], anchor : {x : 0.5, y : 0.5}},
                {name : "volatilityComp", type : "Comp", class : "VolatilityComp", value : 3, textStyle : "gameFont1Style", fontSize : 40, mFontSize : 66, fontColor : 0x8de3ff},
                {name : "dontShowComp", type : "Comp", class : "DontShowNextTimeComp", value : 3, textStyle : "gameFont1Style", fontSize : 36, mFontSize : 50, fontColor : 0x8de3ff, tickImage : "splashToggleTick_penguin", tickXPadding : 20, tickYPadding : 40}
            ]
        }

    ],
    layoutData : {
        "Desktop" : {x: 0, y : 0},
    }

}
