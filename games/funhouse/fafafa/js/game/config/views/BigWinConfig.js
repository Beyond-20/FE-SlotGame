export const BIG_WIN_CONFIG = {
    name :"bigwinComp", type : "Comp", class : "GameBigWinComp",
        Elements : [
            {name : "modalRect", type : "Graphics", width : 100, height : 100, color : 0x000000, alpha : 0.66},
            {name : "winAmountComp", type : "Comp", class : "SlotWinAmountSpineComp", x: 0, y : 0, yPadding : 20, dontDoVibration : false,
                textData : {
                    "win" : {fontSize : 120},
                    "bigWin" : {fontSize : 120},
                    "megaWin" : {fontSize : 120, scaleX : 1.1, scaleY : 1.1},
                    "giganticWin" : {fontSize : 120, scaleX : 1.1, scaleY : 1.1},
                    "colossalWin" : {fontSize : 120, scaleX : 1.1, scaleY : 1.1},
                    "unbelievableWin" : {fontSize : 120, scaleX : 1.1, scaleY : 1.1},
                },
                States : ["animation", "animation", "animation", "animation", "animation"],
                Elements :[
                    {name : "guideRect", type : "Graphics", width : 1160, height : 600, color : 0xffff00, alpha : 1},
                    {name :"bigwinbg", type : "Sprite", image : "bigwinbg", y : 250},
                    {name : "bigAnim", type : "Spine", spineName: "Big win-", defaultState : "Idle", loop : true, scale : 0.42},
                    {name : "megaAnim", type : "Spine", spineName: "Mega_Win", defaultState : "Idle", loop : true, scale : 0.42},
                    {name : "giganticAnim", type : "Spine", spineName: "Gigantik_Win", defaultState : "Idle", loop : true, scale : 0.42},
                    {name : "colossalWinAnim", type : "Spine", spineName: "Colossal_Win", defaultState : "Idle", loop : true, scale : 0.42},
                    {name : "unbelievableWinAnim", type : "Spine", spineName: "UNBELIEVABLE_Win", defaultState : "Idle", loop : true, scale : 0.42},
                    {name : "winText", type : "Text", style : "winAmountStyle", anchor : {x : 0.5, y : 0.5}, x : 580, y : 364}
                ]
            },

        ],


}
