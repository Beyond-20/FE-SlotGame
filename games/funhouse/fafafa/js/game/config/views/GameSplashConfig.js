export const GAME_SPLASH_CONFIG = {
    name :"splashComp", type : "Comp", class : "GameSplashComp",
        Elements : [
            {name : "pagesComp", type : "Comp", class :"PaytablePages", x: 0, y : 0, maxWidth : 0.60, maxHeight : 0.9,
                Elements : [
                    {name : "guideRect", type : "Graphics", color : 0xff0000, width : 1240, height : 1260, alpha : 0},
                    {name : "page1", type : "Comp", class : "PaytablePage", x : 40, y : 160,
                        Elements : [
                            {name : "screen1", type : "Sprite", image : "screen1", x : 0, y : 40},
                            {name : "wildItem", type : "Comp", class : "PaytableItem", descWidth : 500, yPadding : 10, content : "wildPayoutText", style : "paytableDescStyle", x : 20, y : 360},
                            {name : "bonusItem", type : "Comp", class : "PaytableItem", descWidth : 500, yPadding : 10, content : "bonusPayoutText", style : "paytableDescStyle", x : 310, y : 360},
                            {name : "winUptoText", type : "Text", content : "winUptoText", fontSize : 80, mFontSize : 100, value : "5000", style : "paytableDescStyle", x : 360, y : 1040}
                        ]
                    },
                    {name : "gamelogo", type : "Spine", spineName : "Logo", defaultState : "animation", loop : true, scale : 0.50, x : 620, y : 166, onTop : true},
                ]
            },
            {name : "logoContainer", type : "Comp", class : "PixiContainer",scale : 1, pScale : 1, lScale : 1,
                Elements: [
                    {name : "guideRect", type : "Graphics", color : 0x00ff00, width : 400, height : 300, alpha : 0},
                ]
            },
            {name : "elementsContainer", type : "Comp", class : "PixiContainer",
                Elements: [
                    {name : "guideRect", type : "Graphics", color : 0x0000ff, width : 600, height : 600, pWidth : 840, pHeight : 720, lWidth : 840, lHeight : 700, alpha : 0},
                    {name : "playBtn", type : "Button", images : ["splashStartBtn_up", "splashStartBtn_over", "splashStartBtn_over"], anchor : {x : 0.5, y : 0.5}},
                    {name : "volatilityComp", type : "Comp", class : "VolatilityComp", value : 3, textStyle : "gameFont1Style", fontSize : 48, mFontSize : 75, fontColor : 0xc1fffb},
                    {name : "dontShowComp", type : "Comp", class : "DontShowNextTimeComp", value : 3, textStyle : "gameFont1Style", fontSize : 48, mFontSize : 70, fontColor : 0xc1fffb}
                ]
            }
        ],
        layoutData : {
        }

}
