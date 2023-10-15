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
            {name : "winAmountComp", type : "Comp", class : "SlotWinAmountSpineComp", x: 0, y : 0, yPadding : 20, loopAfterEnd : false,
                textData : {
                    "win" : {fontSize : 120},
                    "bigWin" : {fontSize : 90},
                    "megaWin" : {y : 390, fontSize : 90},
                    "giganticWin" : {y : 390, fontSize : 90},
                    "colossalWin" : {y : 390, fontSize : 90},
                    "unbelievableWin" : {x: 0, y : 390, fontSize : 90},
                },
                States : ["animation", "animation", "animation", "animation", "animation"],
                Elements :[
                    {name : "guideRect", type : "Graphics", width : 1200, height : 600, color : 0xffff00, alpha : 1},
                    {name : "bigAnim", type : "Spine", spineName: "Big win", defaultState : "open", loop : false, idleState : "idle", scale : 0.6, yPaddingPerc : 0.4},
                    {name : "megaAnim", type : "Spine", spineName: "MEGA Win", defaultState : "start", loop : false, idleState : "idle", scale : 0.5, yPaddingPerc : 0.4},
                    {name : "giganticAnim", type : "Spine", spineName: "Gigantic Win", defaultState : "open", loop : false, idleState : "idle", scale : 0.5, yPaddingPerc : 0.4},
                    {name : "colossalWinAnim", type : "Spine", spineName: "Colossal Win", defaultState : "start", loop : false, idleState : "idle", scale : 0.5, yPaddingPerc : 0.4},
                    {name : "unbelievableWinAnim", type : "Spine", spineName: "Unbelievable Win", defaultState : "start", loop : false, idleState : "idle", scale : 0.5, yPaddingPerc : 0.4},
                    {name : "winText", type : "Text", style : "winAmountStyle", zoomScale : 1.1, anchor : {x : 0.5, y : 0.5}, x : 600, y : 416}
                ]
            },


        ],


}
