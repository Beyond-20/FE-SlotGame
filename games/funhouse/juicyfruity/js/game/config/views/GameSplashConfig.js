export const GAME_SPLASH_CONFIG = {
    name :"splashComp", type : "Comp", class : "GameSplashComp", showFreeSpinBG : true,
    Elements : [
        {name : "pagesComp", type : "Comp", class :"PaytablePages", x: 0, y : 0, maxWidth : 0.60, maxHeight : 0.9,
            Elements : [
                {name : "guideRect", type : "Graphics", color : 0xff0000, width : 1520, height : 1710, alpha : 0},
                {name : "page1", type : "Comp", class : "PaytablePage", x: -125, y :-110,
                    Elements : [
                        {name : "screen1", type : "Sprite", image : "screen1"},
                        {name : "wildItem", type : "Comp", class : "PaytableItem", descWidth : 600, yPadding : 10, content : "wildTruckText", style : "paytableDescStyle", x : 130, y : 550},
                        {name : "bonusItem", type : "Comp", class : "PaytableItem", descWidth : 600, yPadding : 10, content : "scatterTruckText", style : "paytableDescStyle", x : 470, y : 550},
                        {name : "winUptoText", type : "Text", content : "winUptoText", fontSize : 80, value : "20,000", style : "paytableDescStyle", x : 360, y : 1730}
                    ]
                },
            ]
        },
        {name : "logoContainer", type : "Comp", class : "PixiContainer",scale : 1, pScale : 1, lScale : 1,
            Elements: [
                {name : "guideRect", type : "Graphics", color : 0x00ff00, width :1050, height : 700, alpha : 0},
                {name : "splashlogo", type : "Sprite", image : "gamelogo_splash", anchor : {x:0.52,y : 0.45}},
            ]
        },
        {name : "elementsContainer", type : "Comp", class : "PixiContainer", scale: 0.8,
            Elements: [
                {name : "guideRect", type : "Graphics", color : 0x0000ff, width : 740, height : 650, pWidth : 880, pHeight : 780, lWidth : 900, lHeight : 790, alpha : 0},
                {name : "playBtn", type : "Button", images : ["splashStartBtn_up", "splashStartBtn_over", "splashStartBtn_over"], anchor : {x : 0.5, y : 0.5}},
                {name : "volatilityComp", type : "Comp", class : "VolatilityComp", value : 3, textStyle : "gameFont1Style", fontSize : 28, mFontSize : 50, fontColor : 0xffffff},
                {name : "dontShowComp", type : "Comp", class : "DontShowNextTimeComp", value : 3, textStyle : "gameFont1Style", fontSize : 36, mFontSize : 50, fontColor : 0xffffff, tickImage : "splashToggleTick"}
            ]
        }

    ],
    layoutData : {
        "Desktop" : {x: 0, y : 0},
    }

}
