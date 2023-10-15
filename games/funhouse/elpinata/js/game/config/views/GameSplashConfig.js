export const GAME_SPLASH_CONFIG = {
    name :"splashComp", type : "Comp", class : "GameSplashComp",
    Elements : [
        {name : "pagesComp", type : "Comp", class :"PaytablePages", x: 0, y : 0, maxWidth : 0.60, maxHeight : 0.9,
            Elements : [
                {name : "guideRect", type : "Graphics", color : 0xff0000, width : 1440, height : 1230, alpha : 0},
                {name : "page1", type : "Comp", class : "PaytablePage", x: 130, y : -30,
                    Elements : [
                        {name : "screen1", type : "Sprite", image : "screen1"},
                        {name : "wildItem", type : "Comp", class : "PaytableItem", descWidth : 600, yPadding : 10, content : "wildPayoutText", style : "paytableDescStyle", x : -14, y : 385},
                        {name : "bonusItem", type : "Comp", class : "PaytableItem", descWidth : 600, yPadding : 10, content : "bonusPayoutText", style : "paytableDescStyle", x : 300, y : 385},
                        {name : "winUptoText", type : "Text", content : "winUptoText", fontSize : 74, value : "10,000", style : "paytableDescStyle", x : 360, y : 1100}
                    ]
                },
            ]
        },
        {name : "logoContainer", type : "Comp", class : "PixiContainer",scale : 1, pScale : 1.25, lScale : 1, pYPadding : 40,
            Elements: [
                {name : "guideRect", type : "Graphics", color : 0x00ff00, width : 777, height : 633, alpha : 0},
                {name : "splashlogo", type : "Sprite", image : "gameLogo", anchor : {x:0.5,y : 0.5}, scale : 1.5},
            ]
        },
        {name : "elementsContainer", type : "Comp", class : "PixiContainer",
            Elements: [
                {name : "guideRect", type : "Graphics", color : 0x0000ff, width : 450, height : 490, pWidth : 740, pHeight : 680, lWidth : 740, lHeight : 700, alpha : 0},
                {name : "playBtn", type : "Button", images : ["splashStartBtn_up", "splashStartBtn_over", "splashStartBtn_over"], anchor : {x : 0.5, y : 0.5}},
                {name : "volatilityComp", type : "Comp", class : "VolatilityComp", value : 3, textStyle : "volatilityStyle", fontSize : 28, mFontSize : 40},
                {name : "dontShowComp", type : "Comp", class : "DontShowNextTimeComp", value : 3, textStyle : "dontShowStyle", fontSize : 36, mFontSize : 40, tickImage : "splashToggleTick_penguin", tickXPadding : 20, tickYPadding : 40 }
            ]
        }
    ],
    layoutData : {
        "Desktop" : {x: 0, y : 0}
    }

}
