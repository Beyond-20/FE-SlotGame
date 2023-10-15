export const SLOT_BG_CONFIG = {
    name :"bgComp", type : "Comp", class : "FaFaFaGameBG", resizeChildren : true,
        Elements : [
            {name : "maingamebg", type : "Sprite", image : "maingame_bg",
                layoutData : {
                    "Desktop" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                    "Portrait" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                    "Landscape" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                }
            },
            {name : "freespinbg", type : "Sprite", image : "freespin_bg",
                layoutData : {
                    "Desktop" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                    "Portrait" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                    "Landscape" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                }
            },
            {name : "fireworks", type : "Comp", class : "BGFireworksComp",
                Elements : [
                    {name : "star1", type : "AnimatedSprite", animation : {prefix : "Fireworks1_0", postfix: "", start : 0, end : 45, toAddZero : true, loop : false}},
                    {name : "star2", type : "AnimatedSprite", animation : {prefix : "Fireworks2_0", postfix: "", start : 0, end : 45, toAddZero : true, loop : false}},
                    {name : "star3", type : "AnimatedSprite", animation : {prefix : "Fireworks3_0", postfix: "", start : 0, end : 45, toAddZero : true, loop : false}},
                    {name : "star4", type : "AnimatedSprite", animation : {prefix : "Fireworks4_0", postfix: "", start : 0, end : 45, toAddZero : true, loop : false}},
                    {name : "star5", type : "AnimatedSprite", animation : {prefix : "salut_500", postfix: "", start : 6, end : 44, toAddZero : true, loop : false}},
                    {name : "star6", type : "AnimatedSprite", animation : {prefix : "salut_a_000", postfix: "", start : 0, end : 37, toAddZero : true, loop : false}}
                ]
            }

        ]

}
