export const BIG_WIN_CONFIG = {
    name :"bigwinComp", type : "Comp", class : "GameBigWinComp",
        Elements : [
            {name : "modalRect", type : "Graphics", width : 100, height : 100, color : 0x000000, alpha : 0.66},
            {name : "coinFallAnimation", type :"Comp", class : "CoinFallAnimation", xPos : 660, yPos : 770, fallType : 2,
                animations : [
                    {name : "coinfall", type : "AnimatedSprite", animation : {prefix : "coin_000", postfix: "", start : 0, end : 7, toAddZero : true}, scaleEnd : 0.1, scaleStart : 0.12},
                    {name : "coinfall", type : "AnimatedSprite", animation : {prefix : "coin2_000", postfix: "", start : 0, end : 7, toAddZero : true}, scaleEnd : 0.01, scaleStart : 0.12}
                ]

            },
            {name : "winAmountComp", type : "Comp", class : "SlotWinAmountSpineComp", x: 0, y : 0, yPadding : 20, loopAfterEnd : true,
                textData : {
                    "win" : {fontSize : 120},
                    "bigWin" : {fontSize : 120},
                    "megaWin" : {fontSize : 120},
                    "giganticWin" : {fontSize : 120},
                    "colossalWin" : {fontSize : 120},
                    "unbelievableWin" : {fontSize : 160},
                },
                States : ["animation", "animation", "animation", "animation", "animation"],
                Elements :[
                    {name : "guideRect", type : "Graphics", width : 1200, height : 600, color : 0xffff00, alpha : 1},
                    {name : "bigAnim", type : "Spine", spineName: "Wins", defaultState : "bigwin", loop : false, scale : 0.7, yPaddingPerc : 0.6},
                    {name : "megaAnim", type : "Spine", spineName: "Wins", defaultState : "mega", loop : false, scale : 0.7, yPaddingPerc : 0.6},
                    {name : "giganticAnim", type : "Spine", spineName: "Wins", defaultState : "gigantic", loop : false, scale : 0.7, yPaddingPerc : 0.6},
                    {name : "colossalWinAnim", type : "Spine", spineName: "Wins", defaultState : "colossal", loop : false, scale : 0.7, yPaddingPerc : 0.6},
                    {name : "unbelievableWinAnim", type : "Spine", spineName: "Wins", defaultState : "unbelievable", loop : false, scale : 0.7, yPaddingPerc : 0.6},
                    {name : "winText", type : "Text", style : "winAmountStyle", anchor : {x : 0.5, y : 0.5}, x : 600, y : 400}
                ]
            },


        ],


}
