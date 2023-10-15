export const BONUS_GAME_CONFIG = {
    name :"bonusComp", type : "Comp", class : "BonusGame",
        Elements : [
            {name :"bonusContainer", type : "Comp", class : "PixiContainer",
                Elements: [
                    {name : "guideRect", type : "Graphics", pwidth : 1180, pheight : 1550, color : 0xffcccc, width : 2560, height : 1440},
                    {name : "animbackbg", type : "Spine", spineName : "chinese back3", defaultState : "animation", loop : true, x : 1298, y : 720},
                    {name : "animback", type : "Spine", spineName : "chinese back", defaultState : "animation", scale : 1, loop : true, x : 1298, y : 720},
                    {name : "anim", type : "Spine", spineName : "BlueImperor8002", loop : false, x : 1298, y : 740},
                    {name : "spark", type : "AnimatedSprite", animation : {prefix : "spark_001", postfix : "", start : 63, end : 87, toAddZero : false, loop : false}, x : 1270, y : 690},
                    {name : "leftdoor", type : "Sprite", image : "doorleft", x : -1280, y : 0},
                    {name : "rightdoor", type : "Sprite", image : "doorleft", scale : {x : -1, y : 1}, x : 3840, y : 0},
                    {name : "leftdoor2", type : "Sprite", image : "closingdoorleft", x : -1280, y : 0},
                    {name : "rightdoor2", type : "Sprite", image : "closingdoorleft", scale : {x : -1, y : 1}, x : 3840, y : 0},
                    {name : "coverBG", type : "Graphics", pwidth : 1180, pheight : 1550, color : 0xffffff, width : 2560, height : 1440},
                ],
                layoutData : {
                    "Desktop" : {hAlign : "center", vAlign : "middle", widthPerc : 0.9, heightPerc : 0.9},
                    "Portrait" : {hAlign : "center", vAlign : "middle", widthPerc: 0.98, vPaddingPerc : 0.2},
                    "Landscape" : {hAlign : "center", vAlign : "top", heightPerc: 0.98},
                }
            }

        ],


}
