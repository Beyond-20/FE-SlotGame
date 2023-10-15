export const BIG_WIN_CONFIG = {
    name :"bigwinComp", type : "Comp", class : "GameBigWinComp",
        Elements : [
            {name : "modalRect", type : "Graphics", width : 100, height : 100, color : 0x000000, alpha : 0.66},
            {name : "winAmountComp", type : "Comp", class : "SlotWinAmountSpineComp", x: 0, y : 0, yPadding : 20,
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
                    {name : "bigAnim", type : "Spine", spineName: "Big_Win", defaultState : "Idle", loop : true, scale : 0.9, yPaddingPerc : 0.3},
                    {name : "megaAnim", type : "Spine", spineName: "Mega_Win", defaultState : "Idle", loop : true, scale : 0.85, yPaddingPerc : 0.4},
                    {name : "giganticAnim", type : "Spine", spineName: "Gigantic_Win", defaultState : "Idle", loop : true, scale : 0.8, yPaddingPerc : 0.5},
                    {name : "colossalWinAnim", type : "Spine", spineName: "Colossal_Win", defaultState : "Idle", loop : true, scale : 0.7, yPaddingPerc : 0.5},
                    {name : "unbelievableWinAnim", type : "Spine", spineName: "UNBELLIVABLE_WIN", defaultState : "Idle", loop : true, scale : 0.64, yPaddingPerc : 0.5},
                    {name : "winText", type : "Text", style : "winAmountStyle", anchor : {x : 0.5, y : 0.5}, x : 580, y : 364}
                ]
            },

        ],


}
