export const BIG_WIN_CONFIG = {
    name :"bigwinComp", type : "Comp", class : "GameBigWinComp",
        Elements : [
            {name : "modalRect", type : "Graphics", width : 100, height : 100, color : 0x000000, alpha : 0.66},
            {name : "winAmountComp", type : "Comp", class : "SlotWinAmountSpineComp", x: 0, y : 0, yPadding : 20, loopAfterEnd : false,
                textData : {
                    "win" : {fontSize : 200},
                    "bigWin" : {y: 410,  fontSize : 180},
                    "megaWin" : {y : 410, fontSize : 180},
                    "giganticWin" : {y : 410, fontSize : 180},
                    "colossalWin" : {y : 410, fontSize : 180},
                    "unbelievableWin" : {x: 0, y : 410, fontSize : 180},
                },
                States : ["animation", "animation", "animation", "animation", "animation"],
                Elements :[
                    {name : "guideRect", type : "Graphics", width : 1200, height : 730, color : 0xffff00, alpha : 1},
                    {name : "bigAnim", type : "Spine", spineName: "Wins", defaultState : "bigwin", loop : false, scale : 0.64, yPaddingPerc : 0.7},
                    {name : "megaAnim", type : "Spine", spineName: "Wins", defaultState : "mega", loop : false, scale : 0.64, yPaddingPerc : 0.7},
                    {name : "giganticAnim", type : "Spine", spineName: "Wins", defaultState : "gigantic", loop : false, scale : 0.64, yPaddingPerc : 0.7},
                    {name : "colossalWinAnim", type : "Spine", spineName: "Wins", defaultState : "colossal", loop : false, scale : 0.64, yPaddingPerc : 0.7},
                    {name : "unbelievableWinAnim", type : "Spine", spineName: "Wins", defaultState : "unbelievable", loop : false, scale : 0.64, yPaddingPerc : 0.7},
                    {name : "fiveoakEffect", type: "Spine", spineName: "effects", defaultState: "FiveOfAKindEffect", loop: true, scale : 1, yPaddingPerc : 0.3},
                    {name : "winText", type : "Text", style : "winAmountStyle", zoomScale : 1.2, anchor : {x : 0.5, y : 0.5}, x : 600, y : 320}
                ]
            },
        ],


}
