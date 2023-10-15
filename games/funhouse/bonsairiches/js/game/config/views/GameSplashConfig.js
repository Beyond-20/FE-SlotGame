export const GAME_SPLASH_CONFIG = {
    name :"splashComp", type : "Comp", class : "GameSplashComp",
        Elements : [
            {name : "pagesComp", type : "Comp", class :"PaytablePages", x: 0, y : 0, maxWidth : 0.60, maxHeight : 0.9,
                Elements : [

                    {name : "guideRect", type : "Graphics", color : 0xff0000, width : 1550, height : 1250, alpha : 0},
                    {name : "page1", type : "Comp", class : "PaytablePage", x: -35, y : -130,
                        Elements : [
                            {name : "screen1", type : "Sprite", image : "screen1"},
                            {name : "wildItem", type : "Comp", class : "PaytableItem", descWidth : 600, yPadding : 10, content : "wildPayoutText", style : "paytableDescStyle", x : 80, y : 510},
                            {name : "bonusItem", type : "Comp", class : "PaytableItem", descWidth : 600, yPadding : 10, content : "bonusPayoutText", style : "paytableDescStyle", x : 460, y : 510},
                            {name : "winUptoText", type : "Text", content : "winUptoText", fontSize : 80, mFontSize : 100, value : 1600, style : "paytableDescStyle", x : 355, y : 1285}
                        ]
                    }
                ]
            },
            {name : "logoContainer", type : "Comp", class : "PixiContainer",scale : 1, pScale : 1, lScale : 1, pYPadding : 0,
                Elements: [
                    {name : "guideRect", type : "Graphics", color : 0x00ff00, width : 600, height : 560, alpha : 0},
                    {name : "splashlogo", type : "Sprite", image : "gamelogo_splash", anchor : {x:0.5, y: 0.5}, yPadding : 0, xPadding: 0},
                ]
            },
            {name : "elementsContainer", type : "Comp", class : "PixiContainer", scale:1, 
                Elements: [
                    {name : "guideRect", type : "Graphics", color : 0x0000ff, width : 1000, height : 650, pWidth : 740, pHeight : 820, lWidth : 740, lHeight : 820, alpha : 0},
                    {name : "playBtn", type : "Button", images : ["splashStartBtn_up", "splashStartBtn_over", "splashStartBtn_over"], anchor : {x : 0.5, y : 0.5}, scale:1.4, xPadding: 220, yPadding:0},
                    {name : "volatilityComp", type : "Comp", class : "VolatilityComp", value : 3, textStyle : "gameFont1Style", fontSize : 42, mFontSize : 66, fontColor : 0xc1fffb},
                    {name : "dontShowComp", type : "Comp", class : "DontShowNextTimeComp", value : 3, textStyle : "gameFont1Style", fontSize : 36, mFontSize : 50, fontColor : 0xc1fffb}
                ]
            }
        ],
        layoutData : {
           "Desktop" : {x: 0, y : 0}
        }

}
