export const SLOT_MACHINE_CONFIG = {
    name :"slotMachineComp", type : "Comp", class : "PandaSlotMachineComp",
            Elements : [
                {name : "guideRect", type : "Graphics", color : 0xff0000, width : 1936, height : 1076},
                {name : "gamelogo", type : "Sprite", image : "gamelogo", x : 540, y : 0, px : 320, py : -50, lx : 460, ly : -20, pScale : 1.5, lScale : 1.2 , tabScale : 1.2, tabx : 310},
                {name : "reelFrame", type : "Sprite", image : "reelFrame", x : -80, y : 80},
                {name : "winAmountComp", type : "Comp", class : "SlotSpinWinAmountComp", x: 970, y : 580,
                    Elements :[
                        {name : "winText", type : "Text", style : "winAmountStyle", fontSize : 200, anchor : {x : 0.5, y : 0.5}}
                    ]
                },
                {name : "slotMachine", type : "Comp", class : "GameSlotMachine",
                    anticipationConfig : {
                          totalElements : 5,
                          element : {name : "anticipation1", type : "AnimatedSprite", animation : {prefix : "Comp 1_000", postfix : "", start : 0, end : 44, toAddZero : true, loop : true, playOnStart : true}, scale : {x : 0.89, y : 0.97}},
                          positions : [{x:234, y : 590}, {x:604, y : 590}, {x:972, y : 590}, {x:1338, y : 590}, {x:1706, y : 590}]
                    },
                    Elements : [
                        {name : "maskRect", type : "Graphics", color : 0xffff00, width : 1828, height : 894, x : 50, y : 146},

                        //{name : "roamingWild", type : "AnimatedSprite", animation : {prefix : "YinYang_000", postfix: "", start : 0, end : 45, toAddZero : true, loop : true, playOnStart : true}, x : 500, y : 220},
                    ],
                data : {
                    noOfReels : 5,
                    noOfRows : 3,
                    reelHeight : 1000,
                    reelsView1 : [[1,2,3], [4,5,7],[7,8,2],[4,11,0],[6,2,10]],
                    reelsView : [["H1", "H2", "WD"  ],["L1","L2", "WD"],["H4", "H3", "L5"], ["L3", "L2", "L1"], ["SC", "H1", "H3"]],
                    reelPositionX : [0,370,738,1104,1472],
                    reelContainerPos : {x : 230, y : 294},
                    symbolHeight : 298,
                    symbolGap : 8,
                    anticipationSymbols : ["SC"],
                    landingSymbols : ["SC"],
                    anticipationDelay : 2500,
                    symbolsData : {
                        "WD" : {name : "WD", animation : {prefix : "panda_000", postfix: "", start : 0, end : 45, toAddZero : true}},
                        "H1" : {name : "H1", animation : {prefix : "FU_000", postfix: "", start : 0, end : 45, toAddZero : true}},
                        "H2" : {name : "H2", animation : {prefix : "Pot_000", postfix: "", start : 0, end : 45, toAddZero : true}},
                        "H3" : {name : "H3", animation : {prefix : "Light_000", postfix: "", start : 0, end : 45, toAddZero : true}},
                        "H4" : {name : "H4", animation : {prefix : "Turtle_000", postfix: "", start : 0, end : 45, toAddZero : true}},
                        "L1" : {name : "L1", animation : {prefix : "A_000", postfix: "", start : 0, end : 45, toAddZero : true}},
                        "L2" : {name : "L2", animation : {prefix : "K_000", postfix: "", start : 0, end : 45, toAddZero : true}},
                        "L3" : {name : "L3", animation : {prefix : "Q_000", postfix: "", start : 0, end : 45, toAddZero : true}},
                        "L4" : {name : "L4", animation : {prefix : "J_000", postfix: "", start : 0, end : 45, toAddZero : true}},
                        "L5" : {name : "L5", animation : {prefix : "10_000", postfix: "", start : 0, end : 45, toAddZero : true}},
                        "L6" : {name : "L6", animation : {prefix : "9_000", postfix: "", start : 0, end : 45, toAddZero : true}},
                        "SC" : {name : "SC", animation : {prefix : "YinYang_00", postfix: "", start : 0, end : 45, toAddZero : true}, landingAnimation : {prefix : "YinYang_3_00", postfix: "", start : 0, end : 19, toAddZero : true}},
                    },
                    winningSoundIndex : [["WD"], ["H1", "H2", "H3", "H4"], ["L1", "L2", "L3", "L4", "L5", "L6"]]
                }}
            ],
            layoutData : {
                "Desktop" : {hAlign : "center", vAlign : "middle", widthPerc : 0.9, heightPerc : 0.8},
                "Portrait" : {hAlign : "center", vAlign : "top"},
                "Landscape" : {hAlign : "center", vAlign : "top", heightPerc: 0.94},
            }

}
