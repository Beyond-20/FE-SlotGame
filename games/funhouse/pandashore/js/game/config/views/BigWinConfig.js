export const BIG_WIN_CONFIG = {
    name :"bigwinComp", type : "Comp", class : "GameBigWinComp",
        Elements : [
            {name : "modalRect", type : "Graphics", width : 100, height : 100, color : 0x000000, alpha : 0.75},
            {name : "winAmountComp", type : "Comp", class : "SlotWinAmountComp", x: 0, y : 0, yPadding : 20,dontDoVibration : false,
                textData : {
                    "win" : {x: 0, y : 200, fontSize : 120},
                    "bigWin" : {x: 0, y : 146, fontSize : 100, scaleX : 0.8, scaleY : 0.8},
                    "megaWin" : {x: 0, y : 50, fontSize : 140, scaleX : 0.7, scaleY : 0.7},
                    "giganticWin" : {x: 0, y : 94, fontSize : 170, scaleX : 0.65, scaleY : 0.65},
                    "colossalWin" : {x: 0, y : 144, fontSize : 180, scaleX : 0.6, scaleY : 0.6},
                    "unbelievableWin" : {x: 0, y : 174, fontSize : 190, scaleX : 0.5, scaleY : 0.5},
                },
                States : ["animation", "animation", "animation", "animation", "animation"],
                Elements :[
                    {name : "guideRect", type : "Graphics", width : 1240, height : 600, color : 0xffff00, alpha : 1},
                    // {name :"bigwinbg", type : "Sprite", image : "bigwinbg", y : 250},
                    {name : "bigAnim", type : "AnimatedSprite", animation : {prefix : "big_win_loop_0", postfix : "", start : 0, end : 29, toAddZero : true}, scale : 0.9, yPaddingPerc : 0.35},
                    {name : "megaAnim", type : "AnimatedSprite", animation : {prefix : "mega_win_loop_0", postfix : "", start : 0, end : 29, toAddZero : true}, scale : 0.8, yPaddingPerc : 0.42},
                    {name : "giganticAnim", type : "AnimatedSprite", animation : {prefix : "gigantikl_win_loop_0", postfix : "", start : 0, end : 0, toAddZero : true}, scale : 0.75, yPaddingPerc : 0.42},
                    {name : "colossalWinAnim", type : "AnimatedSprite", animation : {prefix : "colossal_win_loop_0", postfix : "", start : 0, end : 0, toAddZero : true}, scale : 0.7, yPaddingPerc : 0.5},
                    {name : "unbelievableWinAnim", type : "AnimatedSprite", animation : {prefix : "unbelievable_win_loop_0", postfix : "", start : 0, end : 0, toAddZero : true}, scale : 0.54, yPaddingPerc : 0.54},
                    {name : "winText", type : "Text", style : "winAmountStyle", anchor : {x : 0.5, y : 0.5}, x : 580, y : 500}
                ]
            },

        ],


}
