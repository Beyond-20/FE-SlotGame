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
        {name : "winAmountComp", type : "Comp", class : "SlotWinAmountSpineComp", x: 0, y : 0, yPadding : 0, loopAfterEnd : false,
            textData : {
                "win" : {fontSize : 150},
                "bigWin" : {fontSize : 100},
                "megaWin" : {fontSize : 110},
                "giganticWin" : {fontSize : 120},
                "colossalWin" : {fontSize : 120},
                "unbelievableWin" : {fontSize : 120},
            },
            States : ["animation", "animation", "animation", "animation", "animation"],
            Elements :[
                {name : "guideRect", type : "Graphics", width : 1140, height : 600, color : 0xffff00, alpha : 0},
                {name : "bigAnim", type : "Spine", spineName: "popups_big_win", defaultState : "start", start: "start", idleState: "idle", end : "end", loop : false, scale : 0.5, yPaddingPerc : 0.5},
                {name : "megaAnim", type : "Spine", spineName: "popups_mega_win", defaultState : "start", start: "start", idleState: "idle", end : "end", loop : false, scale : 0.5, yPaddingPerc : 0.5},
                {name : "giganticAnim", type : "Spine", spineName: "popups_gigantic_win", defaultState : "open", start: "open", idleState: "idle", end : "end", loop : false, scale : 0.5, yPaddingPerc : 0.5},
                {name : "colossalWinAnim", type : "Spine", spineName: "popups_colossal_win", defaultState : "start", start: "start", idleState: "idle", end : "end", loop : false, scale : 0.5, yPaddingPerc : 0.5},
                {name : "unbelievableWinAnim", type : "Spine", spineName: "popups_unbelievable_win", defaultState : "open", start: "open", idleState: "idle", end : "end", loop : false, scale : 0.5, yPaddingPerc : 0.5},
                {name: "customWinBG", type: "Comp", class: "FiestaWinBG", y: 390, xPadding: -400, scale: 0.8,
                    Elements : [
                        {name : "bg", type : "Sprite", image : "box"},
                        {name : "inner", type : "Sprite", image : "inner"},
                        {name : "outer", type : "Sprite", image : "outer"},
                    ]
                },

                {name : "winText", type : "Text", style : "winAmountStyle", anchor : {x : 0.5, y : 0.5}, x : 570, y : 486}
            ]
        },


    ],


}
