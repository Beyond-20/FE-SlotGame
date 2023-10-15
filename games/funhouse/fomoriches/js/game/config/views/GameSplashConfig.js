export const GAME_SPLASH_CONFIG = {
    name :"splashComp", type : "Comp", class : "GameSplashComp", showFreeSpinBG : true,
    Elements : [
        {name : "pagesComp", type : "Comp", class :"PaytablePages", x: 0, y : 0, maxWidth : 0.60, maxHeight : 0.9,
            Elements : [
                {name : "guideRect", type : "Graphics", color : 0xff0000, width : 1030, height : 1100, alpha : 0},
                {name : "page1", type : "Comp", class : "PaytablePage", x: 55, y :15, 
                    Elements : [
                        {name : "screen1", type : "Sprite", image : "screen1"},
                        {name : "wildItem", type : "Comp", class : "PaytableItem", toUpperCase: true, descWidth : 450, yPadding : 0, content : "wildTruckText", style : "paytableDescStyle", x :0, y : 290},
                        {name : "bonusItem", type : "Comp", class : "PaytableItem",toUpperCase: true, descWidth : 450, yPadding : 0, content : "scatterTruckText", style : "paytableDescStyle", x : 250, y :290},
                        {name : "winUptoText", type : "Text", content : "winUptoText", fontSize : 60, value : "20,000", style : "paytableDescStyle", x : 0, y : 1000}
                    ]
                },
            ]
        },
        {name : "logoContainer", type : "Comp", class : "PixiContainer",scale : 1, pScale : 1, lScale : 1,
            Elements: [
                {name : "guideRect", type : "Graphics", color : 0x00ff00, width :750, height : 370, alpha : 0},
                {name : "splashlogo", type : "Sprite", image : "gamelogo", anchor : {x: 0.5, y : 0.5}},
            ]
        },
        {name : "elementsContainer", type : "Comp", class : "PixiContainer", scale: 1,
            Elements: [
                {name : "guideRect", type : "Graphics", color : 0x0000ff, width : 650, height : 510, pWidth : 1080, pHeight : 710, lWidth : 1080, lHeight : 790,y: -30, alpha : 0},
                {name : "playBtn", type : "Button", images : ["splashStartBtn_up", "splashStartBtn_over", "splashStartBtn_over"], anchor : {x : 0.5, y : 0.5}, scale:1.3},
                {name : "volatilityComp", type : "Comp", class : "VolatilityComp", value : 3, textStyle : "gameFont1Style", fontSize : 38, mFontSize : 78, fontColor : 0xffffff},
                {name : "dontShowComp", type : "Comp", class : "DontShowNextTimeComp", value : 3, textStyle : "gameFont1Style", fontSize : 38, mFontSize : 90, fontColor : 0xffffff, tickImage : "splashToggleTick"}
            ]
        }

    ],
    layoutData : {
        "Desktop" : {x: 0, y : 0},
    }

}
