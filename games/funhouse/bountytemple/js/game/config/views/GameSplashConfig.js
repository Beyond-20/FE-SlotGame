export const GAME_SPLASH_CONFIG = {
    name :"splashComp", type : "Comp", class : "GameSplashComp", showFreeSpinBG : true,
    Elements : [
        {name : "pagesComp", type : "Comp", class :"PaytablePages", x: 0, y : 0, maxWidth : 0.60, maxHeight : 0.9,
            Elements : [
                {name : "guideRect", type : "Graphics", color : 0xff0000, width : 1700, height : 1750, alpha : 0},
                {name : "page1", type : "Comp", class : "PaytablePage", x: 0, y :0,
                    Elements : [
                        {name : "screen1", type : "Sprite", image : "screen1"},
                        {name : "wildItem", type : "Comp", class : "PaytableItem", descWidth : 700, yPadding : 10, content : "wildTruckText", style : "paytableDescStyle", x : 60, y : 560},
                        {name : "bonusItem", type : "Comp", class : "PaytableItem", descWidth : 700, yPadding : 10, content : "scatterTruckText", style : "paytableDescStyle", x : 470, y : 560},
                        {name : "winUptoText", type : "Text", content : "winUptoText", fontSize : 110, value : "1,750", style : "paytableDescStyle", x : 330, y : 1630}
                    ]
                },
            ]
        },
        {name : "logoContainer", type : "Comp", class : "PixiContainer",scale : 1, pScale : 1, lScale : 1,
            Elements: [
                {name : "guideRect", type : "Graphics", color : 0x00ff00, width :750, height : 600, alpha : 0},
                {name : "splashlogo", type : "Sprite", image : "gamelogo_splash", anchor : { x:0.5, y : 0.5 }},
            ]
        },
        {name : "elementsContainer", type : "Comp", class : "PixiContainer", scale: 0.8,
            Elements: [
                {name : "guideRect", type : "Graphics", color : 0x0000ff, width : 740, height : 650, pWidth : 960, pHeight : 780, lWidth : 980, lHeight : 790, alpha : 0},
                {name : "playBtn", type : "Button", images : ["splashStartBtn_up", "splashStartBtn_over", "splashStartBtn_over"], anchor : {x : 0.5, y : 0.5}},
                {name : "volatilityComp", type : "Comp", class : "VolatilityComp", value : 3, textStyle : "gameFont1Style", fontSize : 40, mFontSize : 60, fontColor : 0x35c71a,stroke: "0x1b7302", strokeThickness : 2,},
                {name : "dontShowComp", type : "Comp", class : "DontShowNextTimeComp", value : 3, textStyle : "gameFont1Style", fontSize : 43, mFontSize : 70, fontColor : 0x35c71a,stroke: "0x1b7302", strokeThickness : 2,tickImage : "splashToggleTick_penguin",tickXPadding : 20, tickYPadding : 40}
            ]
        }

    ],
    layoutData : {
        "Desktop" : {x: 0, y : 0},
    }

}
