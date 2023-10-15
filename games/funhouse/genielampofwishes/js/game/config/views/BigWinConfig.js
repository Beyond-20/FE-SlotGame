export const BIG_WIN_CONFIG = {
    name :"bigwinComp", type : "Comp", class : "GameBigWinComp",
    Elements : [
        {name : "modalRect", type : "Graphics", width : 100, height : 100, color : 0x000000, alpha : 0.66},
        {name : "winAmountComp", type : "Comp", class : "SlotWinAmountSequentialSpineComp", x: 0, y : 50, yPadding : 0, loopAfterEnd : false,
            textData : {
                "win" : {fontSize : 120},
                "bigWin" : {fontSize : 150},
                "megaWin" : {fontSize : 150},
                "giganticWin" : {fontSize : 150},
                "colossalWin" : {fontSize : 150},
                "unbelievableWin" : {fontSize : 150},
            },
            States : ["animation", "animation", "animation", "animation", "animation"],
            Elements :[
                {name : "guideRect", type : "Graphics", width : 1200, height : 600, color : 0xffff00, alpha : 1},
                {name : "bigwinbg", type : "Sprite", image : "bigwinbg", y : 435, scale:0.9},
                {name : "bigAnim", type : "Spine", spineName: "popups", defaultState : "big_idle", start: "big_start", idleState: "big_idle", end : "big_end", loop : true, scale : 0.58, yPaddingPerc : 0.47},
                {name : "megaAnim", type : "Spine", spineName: "popups", defaultState : "mega_idle", start: "mega_start", idleState: "mega_idle", end : "mega_stop", loop : true, scale : 0.58, yPaddingPerc : 0.47},
                {name : "giganticAnim", type : "Spine", spineName: "popups", defaultState : "gigantic_idle", start: "gigantic_start", idleState: "gigantic_idle", end : "gigantic_end", loop : true, scale : 0.58, yPaddingPerc : 0.47},
                {name : "colossalWinAnim", type : "Spine", spineName: "popups", defaultState : "colossal_idle", start: "colossal_start", idleState: "colossal_idle", end : "colossal_end", loop : true, scale : 0.58, yPaddingPerc : 0.47},
                {name : "unbelievableWinAnim", type : "Spine", spineName: "popups", defaultState : "unbelievable_idle", start: "unbelievable_start", idleState: "unbelievable_idle", end : "unbelievable_end", loop : true, scale : 0.53, yPaddingPerc : 0.47},
                {name : "winText", type : "Text", style : "winAmountStyle", anchor : {x : 0.5, y : 0.5}, x : 590, y : 560}
            ]
        },


    ],


}
