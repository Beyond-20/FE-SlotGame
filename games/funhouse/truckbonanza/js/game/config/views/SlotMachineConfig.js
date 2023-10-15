export const SLOT_MACHINE_CONFIG = {
    name :"slotMachineComp", type : "Comp", class : "GameSlotMachineComp",showSymbolBeforeBigWin : true,
            Elements : [
                {name : "guideRect", type : "Graphics", color : 0xff0000, width : 1770, height : 1220},
                {name : "reelFrame", type : "Sprite", image : "reelFrame", x : -114, y : 164},
                {name : "winAmountComp", type : "Comp", class : "SlotSpinWinAmountComp", x: 880, y : 640,
                    Elements :[
                        {name : "winText", type : "Text", style : "winAmountStyle", fontSize : 250, anchor : {x : 0.5, y : 0.5}}
                    ]
                },
                {name : "slotMachine", type : "Comp", class : "GameSlotMachine",
                    anticipationConfig1 : {
                          totalElements : 5,
                          element : {name : "anticipation1", type : "AnimatedSprite", animation : {prefix : "Fire_", postfix : "", start : 0, end : 35, toAddZero : true, loop : true, playOnStart : true}},
                          positions : [{x:180, y : 760}, {x:604, y : 590}, {x:972, y : 590}, {x:1338, y : 590}, {x:1706, y : 590}]
                    },
                    Elements : [
                        {name : "maskRect", type : "Graphics", color : 0xffff00, width : 1780, height : 990, x : 0, y : 186},
                        {name : "coverRect", type : "Graphics", color : 0x000000, width : 10000, height : 10000, x : -1000, y : -2000, alpha : 0.6},
                        {name : "paylinesComp", type : "Comp", class : "SlotPaylinesComp",
                            Elements : [
                                {name : "payline1", type : "Sprite", image : "Payline1", x : 14, y : 640},
                                {name : "payline2", type : "Sprite", image : "Payline2", x : 14, y : 320},
                                {name : "payline3", type : "Sprite", image : "Payline3", x : 14, y : 960},
                                {name : "payline4", type : "Sprite", image : "Payline4", x : 14, y : 320},
                                {name : "payline5", type : "Sprite", image : "Payline5", x : 14, y : 370},
                                {name : "payline6", type : "Sprite", image : "Payline6", x : 14, y : 305},
                                {name : "payline7", type : "Sprite", image : "Payline7", x : 14, y : 630},
                                {name : "payline8", type : "Sprite", image : "Payline8", x : 14, y : 310},
                                {name : "payline9", type : "Sprite", image : "Payline9", x : 14, y : 630},

                            ]}
                    ],
                data : {
                    noOfReels : 5,
                    noOfRows : 3,
                    reelHeight : 1000,
                    reelsView : [["H1", "H2", "L2"],["L1","L2", "WD"],["M1", "M2", "H1"], ["L3", "L2", "M3"], ["SC", "H1", "L3"]],
                    reelPositionX : [0,345,692,1040,1386],
                    reelContainerPos : {x : 192, y : 344},
                    symbolHeight : 320,
                    symbolGap : 8,
                    anticipationSymbols : ["SC"],
                    landingSymbols : ["SC"],
                    anticipationDelay : 2500,
                    winFrame : {name : "winFrame", type : "Spine", spineName: "effects", defaultState : "LineWin", loop : true, scale : 0.60},
                    symbolsData : {
                        "WD" : {name : "WD", animation : {prefix : "win_", postfix: "", start : 0, end : 38, toAddZero : true}, landingAnimation : {prefix : "land_", postfix: "", start : 0, end : 29, toAddZero : true}},
                        "H1" : {name : "H1", animation : {prefix : "symb1_win_", postfix: "", start : 0, end : 38, toAddZero : true}},
                        "H2" : {name : "H2", animation : {prefix : "symb2_win_", postfix: "", start : 0, end : 38, toAddZero : true}},
                        "M1" : {name : "M1", animation : {prefix : "symb3_win_", postfix: "", start : 0, end : 37, toAddZero : true}},
                        "M2" : {name : "M2", animation : {prefix : "symb4_win_", postfix: "", start : 0, end : 58, toAddZero : true}},
                        "M3" : {name : "M3", animation : {prefix : "symb5_win_", postfix: "", start : 0, end : 37, toAddZero : true}},
                        "L1" : {name : "L1", animation : {prefix : "symb6_win_", postfix: "", start : 0, end : 37, toAddZero : true}},
                        "L2" : {name : "L2", animation : {prefix : "symb7_win_", postfix: "", start : 0, end : 38, toAddZero : true}},
                        "L3" : {name : "L3", animation : {prefix : "symb8_win_", postfix: "", start : 0, end : 38, toAddZero : true}},
                        "L4" : {name : "L4", animation : {prefix : "symb9_win_", postfix: "", start : 0, end : 38, toAddZero : true}},
                        "L5" : {name : "L5", animation : {prefix : "symb10_win_", postfix: "", start : 0, end : 37, toAddZero : true}},
                        "SC" : {name : "SC", animation : {prefix : "sc_win_", postfix: "", start : 0, end : 38, toAddZero : true}, landingAnimation : {prefix : "sc_land_", postfix: "", start : 0, end : 29, toAddZero : true}},
                    },
                    winningSoundIndex : [["WD"], ["H1"], ["H2"], ["M1"], ["M2"], ["M3"], ["L1"], ["L2"], ["L3"], ["L4"], ["L5"], ["SC"],]
                }},
                {name : "gamelogo", type : "Sprite", image : "gamelogo", x : 580, y : 10, px : 462, py : -76, lx : -530, ly : 560, pScale : 1.5, lScale : 0.75, tabScale : 0.9, tabx : 310},
            ],
            layoutData : {
                "Desktop" : {hAlign : "center", vAlign : "middle", widthPerc : 1, heightPerc : 1},
                "Portrait" : {hAlign : "center", vAlign : "top"},
                "Landscape" : {hAlign : "center", vAlign : "top", heightPerc: 1.1, hPaddingPerc: 0.01, vPaddingPerc: -0.05},
            }

}
