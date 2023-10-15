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
        {name : "winAmountComp", type : "Comp", class : "SlotWinAmountSpineComp", x: 0, y : 0, yPadding : 40, loopAfterEnd : false,
            textData : {
                "win" : {fontSize : 150},
                "bigWin" : {fontSize : 90},
                "megaWin" : {fontSize : 90},
                "giganticWin" : {fontSize : 90},
                "colossalWin" : {fontSize : 90},
                "unbelievableWin" : {fontSize : 90},
            },
            States : ["animation", "animation", "animation", "animation", "animation"],
            Elements :[
                {name : "guideRect", type : "Graphics", width : 1140, height : 600, color : 0xffff00, alpha : 0},
                {name : "bigAnim", type : "Spine", spineName: "popups", defaultState : "big_win_idle", start: "big_win_open", idleState: "big_win_idle", end : "big_win_end", loop : false, scale : 0.5, yPaddingPerc : 0.43},
                {name : "megaAnim", type : "Spine", spineName: "popups", defaultState : "mega_idle", start: "mega_open", idleState: "mega_idle", end : "mega_end", loop : false, scale : 0.5, yPaddingPerc : 0.43},
                {name : "giganticAnim", type : "Spine", spineName: "popups", defaultState : "gigantic_idle", start: "gigantic_open", idleState: "gigantic_idle", end : "gigantic_end", loop : false, scale : 0.5, yPaddingPerc : 0.43},
                {name : "colossalWinAnim", type : "Spine", spineName: "popups", defaultState : "colossal_idle", start: "colossal_open", idleState: "colossal_idle", end : "colossal_end", loop : false, scale : 0.5, yPaddingPerc : 0.43},
                {name : "unbelievableWinAnim", type : "Spine", spineName: "popups", defaultState : "unbeliaveble_idle", start: "unbeliaveble_open", idleState: "unbeliaveble_idle", end : "unbeliaveble_end", loop : false, scale : 0.55, yPaddingPerc : 0.43},
                {name : "winText", type : "Text", style : "winAmountStyle", anchor : {x : 0.5, y : 0.5}, x : 570, y : 256}
            ]
        },


    ],


}
