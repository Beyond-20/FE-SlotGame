export const GAME_SPLASH_CONFIG = {
    name :"splashComp", type : "Comp", class : "GameSplashComp", showFreeSpinBG : true,
    Elements : [
        {name : "pagesComp", type : "Comp", class :"PaytablePages", x: 0, y : 0, maxWidth : 0.60, maxHeight : 0.96,
            Elements : [
                {name : "guideRect", type : "Graphics", color : 0xff0000, width : 1740, height : 1580, alpha : 0},
                {name : "page1", type : "Comp", class : "PaytablePage", x: 0, y : 0,
                    Elements : [
                        {name : "screen1", type : "Sprite", image : "screen1"},
                        {name : "wildItem", type : "Comp", class : "PaytableItem", descWidth : 600, yPadding : 10, content : "wildTruckText", style : "paytableDescStyle", x : 60, y : 530},
                        {name : "bonusItem", type : "Comp", class : "PaytableItem", descWidth : 600, yPadding : 10, content : "scatterTruckText", style : "paytableDescStyle", x : 470, y : 530},
                        {name : "winUptoText", type : "Text", content : "winUptoText", fontSize : 80, value : "20,000", style : "paytableDescStyle", x : 360, y : 1480}
                    ]
                },
            ]
        },
        {name : "logoContainer", type : "Comp", class : "PixiContainer",scale : 1, pScale : 1, lScale : 1,
            Elements: [
                {name : "guideRect", type : "Graphics", color : 0x00ff00, width : 800, height : 700, alpha : 0},
                {name : "splashlogo", type : "Sprite", image : "splashlogo", anchor : {x:0.5,y : 0.5}},
            ]
        },
        {name : "elementsContainer", type : "Comp", class : "PixiContainer",
            Elements: [
                {name : "guideRect", type : "Graphics", color : 0x0000ff, width : 800, height : 600, pWidth : 740, pHeight : 720, lWidth : 740, lHeight : 740, alpha : 0},
                {name : "playBtn", type : "Button", images : ["splashStartBtn_up", "splashStartBtn_over", "splashStartBtn_over"], anchor : {x : 0.5, y : 0.5}},
                {name : "volatilityComp", type : "Comp", class : "VolatilityComp", value : 3, textStyle : "gameFont1Style", fontSize : 40, mFontSize : 60, fontColor : 0xffffff},
                {name : "dontShowComp", type : "Comp", class : "DontShowNextTimeComp", value : 3, textStyle : "gameFont1Style", fontSize : 36, mFontSize : 50, fontColor : 0xffffff, tickImage : "splashToggleTick"}
            ]
        }
    ],
    layoutData : {
        "Desktop" : {x: 0, y : 0},
    }

}
