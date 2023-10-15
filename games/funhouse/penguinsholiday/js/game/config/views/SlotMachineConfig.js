export const SLOT_MACHINE_CONFIG = {
    name :"slotMachineComp", type : "Comp", class : "PenguinSlotMachineComp",
            Elements : [
                {name : "guideRect", type : "Graphics", color : 0xff0000, width : 2132, height : 1454},
                {name : "reelFrame", type : "Sprite", image : "reelFrame", x : 0, y : 68},
                {name : "gamelogo", type : "Sprite", image : "gamelogo", x : 260, y : 0, scale : 1, pScale : 0.5, tabScale: 0.9, tabX : 370 ,  lScale : 0.5, onTop : true},
                {name : "winAmountComp", type : "Comp", class : "SlotSpinWinAmountComp", x: 1100, y : 800,
                    Elements :[
                        {name : "winText", type : "Text", style : "winAmountStyle", fontSize : 222, anchor : {x : 0.5, y : 0.5}}
                    ]
                },
                {name : "slotMachine", type : "Comp", class : "GameSlotMachine", x : 188, y : 294,
                    anticipationConfig : {
                        totalElements : 5,
                        element : {name : "anticipation1", type : "AnimatedSprite", animation : {prefix : "antisipation_000", postfix : "", start : 0, end : 34, toAddZero : true, loop : true, playOnStart : true}, scale : {x : 0.8, y : 0.78}},
                        positions : [{x:220, y : 540}, {x:565, y : 540}, {x:895, y : 540}, {x:1200, y : 540}, {x:1540, y : 540}]
                    },
                    Elements : [
                        {name : "maskRect", type : "Graphics", color : 0xffff00, width : 1780, height : 1065, x : 0, y : 0},
                    ],
                data : {
                    noOfReels : 5,
                    noOfRows : 3,
                    reelHeight : 1000,
                    reelsView1 : [[1,2,3], [4,5,7],[7,8,2],[4,11,0],[6,2,10]],
                    reelsView : [["H1", "H2", "H5"],["L1","L2", "WD"],["H4", "H3", "L5"], ["L3", "L2", "L1"], ["SC", "H1", "H3"]],
                    reelPositionX : [0,336,666,988,1314],
                    reelContainerPos : {x : 220, y : 166},
                    symbolHeight : 360,
                    symbolGap : 0,
                    anticipationSymbols : ["SC"],
                    landingSymbols : ["SC"],
                    anticipationDelay : 2500,
                    spinSpeedDuration : 1.2,
                    symbolsData : {
                        "WD" : {name : "WD", animation : {prefix : "wildAnim_", postfix: "", start : 0, end : 34, toAddZero : true}},
                        "H1" : {name : "H1", animation : {prefix : "Family_Pinguin-animation_", postfix: "", start : 0, end : 49, toAddZero : true}},
                        "H2" : {name : "H2", animation : {prefix : "Pinguin_Egg-animation_", postfix: "", start : 0, end : 49, toAddZero : true}},
                        "H3" : {name : "H3", animation : {prefix : "Penguin-animation_", postfix: "", start : 0, end : 49, toAddZero : true}},
                        "H4" : {name : "H4", animation : {prefix : "Walrus-animation_", postfix: "", start : 0, end : 49, toAddZero : true}},
                        "H5" : {name : "H5", animation : {prefix : "Fish-animation_", postfix: "", start : 0, end : 49, toAddZero : true}},
                        "L1" : {name : "L1", animation : {prefix : "A-animation_", postfix: "", start : 0, end : 49, toAddZero : true}},
                        "L2" : {name : "L2", animation : {prefix : "K-animation_", postfix: "", start : 0, end : 49, toAddZero : true}},
                        "L3" : {name : "L3", animation : {prefix : "Q-animation_", postfix: "", start : 0, end : 49, toAddZero : true}},
                        "L4" : {name : "L4", animation : {prefix : "J-animation_", postfix: "", start : 0, end : 49, toAddZero : true}},
                        "L5" : {name : "L5", animation : {prefix : "10-animation_", postfix: "", start : 0, end : 49, toAddZero : true}},
                        "L6" : {name : "L6", animation : {prefix : "9-animation_", postfix: "", start : 0, end : 49, toAddZero : true}},
                        "SC" : {name : "SC", animation : {prefix : "Scatter-animation_", postfix: "", start : 0, end : 49, toAddZero : true}},
                    },
                    winningSoundIndex : ["WD", "H1", "H2", "H3", "H4", "H5", "L1", "L2", "L3", "L4", "L5", "L6", "SC"]
                }}
            ],
            layoutData : {
                "Desktop" : {hAlign : "center", vAlign : "middle", widthPerc : 0.9, heightPerc : 1},
                "Portrait" : {hAlign : "center", vAlign : "top"},
                "Landscape" : {hAlign : "center", vAlign : "top", heightPerc: 0.94},
            }

}
