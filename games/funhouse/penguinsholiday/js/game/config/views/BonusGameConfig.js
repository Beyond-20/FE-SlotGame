export const BONUS_GAME_CONFIG = {
    name :"bonusComp", type : "Comp", class : "BonusGame", resizeChildren: true,
        Elements : [
            {name : "bonusgamebg", type : "Sprite", image : "bonusgame_bg",
                layoutData : {
                    "Desktop" : {hAlign : "left", vAlign : "bottom", fitToScreen : true},
                    "Portrait" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                    "Landscape" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                }
            },
            {name :"bonusContainer", type : "Comp", class : "PixiContainer",
                Elements: [
                    {name : "guideRect", type : "Graphics", color : 0xff0000, width : 1900, height : 1264},
                    {name : "Bonus_game", type : "Spine", spineName : "Bonus_game", defaultState : "Idle_ALL", loop : true, scale : {x : 1, y : 1}, x : 940, y : 576},
                    {name : "holeBtn1", type : "Graphics", color : 0xffcccc, width : 400, height : 140, x : 90, y : 800},
                    {name : "holeBtn2", type : "Graphics", color : 0xffcccc, width : 420, height : 150, x : 740, y : 800},
                    {name : "holeBtn3", type : "Graphics", color : 0xffcccc, width : 440, height : 140, x : 1370, y : 800},
                    {name : "holeBtn4", type : "Graphics", color : 0xffcccc, width : 440, height : 140, x : 420, y : 1060},
                    {name : "holeBtn5", type : "Graphics", color : 0xffcccc, width : 440, height : 140, x : 1080, y : 1060},
                    {name : "bonusText", type : "Text", style : "prizeMsgStyle", fontSize : 80, mFontSize : 80, anchor : {x : 0.5, y : 0.5}},
                    {name : "bonusText2", type : "Text", style : "prizeMsgStyle", fontSize : 60, mFontSize : 80, anchor : {x : 0.5, y : 0.5}, x : 1600, y : 200, px : 1700, py : 200},
                    {name : "bonusText3", type : "Text", style : "prizeMsgStyle", fontSize : 60, mFontSize : 80, anchor : {x : 0.5, y : 0.5}, x : 1600, y : 300, px : 1700, py : 300}

                ],
                layoutData1 : {
                    "Desktop" : {hAlign : "center", vAlign : "middle", widthPerc : 0.9, heightPerc : 0.9},
                    "Portrait" : {hAlign : "center", vAlign : "middle", widthPerc: 0.98, vPaddingPerc : 0.2},
                    "Landscape" : {hAlign : "center", vAlign : "top", heightPerc: 0.98},
                }
            }

        ],


}
