export const SLOT_MACHINE_CONFIG = {
    name :"slotMachineComp", type : "Comp", class : "GameSlotMachineComp",showSymbolBeforeBigWin : true,
            Elements : [
                {name : "guideRect", type : "Graphics", color : 0xff0000, width : 1920, height : 1280},
                {name : "reelFrame", type : "Sprite", image : "reelFrame", x :0, y :150},
                {name : "winAmountComp", type : "Comp", class : "SlotSpinWinAnimAmountComp", x: 975, y : 670, durationFactor: 0.25,
                    Elements :[
                        {name : "winText", type : "Text", style : "winAmountStyle", fontSize : 250, anchor : {x : 0.5, y : 0.5}}
                    ]
                },
                {name : "slotMachine", type : "Comp", class : "GameSlotMachine",
                    anticipationConfig : {
                          totalElements : 5,
                          element : {name : "anticipation1", type : "AnimatedSprite", animation : {prefix : "frame_juicy_fruity_000", postfix : "", start : 0, end : 34, toAddZero : true, loop : true, playOnStart : true}},
                          positions : [{x:260, y : 685}, {x:610, y : 685}, {x:960, y : 685}, {x:1310, y : 685}, {x:1660, y : 685}]
                    },
                    Elements : [
                        {name : "maskRect", type : "Graphics", color : 0xffff00, width : 1720, height : 980, x : 100, y : 187},
                        {name : "coverRect", type : "Graphics", color : 0x000000, width : 10000, height : 10000, x : -1000, y : -2000, alpha : 0.6},
                        {name : "paylinesComp", type : "Comp", class : "SlotPaylinesComp",
                            Elements : [
                                {name : "payline1", type : "Sprite", image : "line_1", x : 55, y : 620},
                                {name : "payline2", type : "Sprite", image : "line_2", x : 55, y : -40},
                                {name : "payline3", type : "Sprite", image : "line_3", x : 55, y : 290},
                                {name : "payline4", type : "Sprite", image : "line_4", x : 55, y : 290},
                                {name : "payline5", type : "Sprite", image : "line_5", x : 55, y : 290},
                                {name : "payline6", type : "Sprite", image : "line_6", x : 55, y : 290},
                                {name : "payline7", type : "Sprite", image : "line_7", x : 55, y : 290},
                                {name : "payline8", type : "Sprite", image : "line_8", x : 55, y :290},
                                {name : "payline9", type : "Sprite", image : "line_9", x : 55, y : 620},

                            ]}
                    ],
                data : {
                    noOfReels : 5,
                    noOfRows : 3,
                    reelHeight : 1000,
                    reelsView : [["H1", "H2", "L2"],["L1","L2", "WD"],["M1", "M2", "H1"], ["L3", "L2", "M3"], ["SC", "H1", "L3"]],
                    reelPositionX : [0,355,702,1050,1399],
                    reelContainerPos : {x : 260, y : 354},
                    symbolHeight : 320,
                    symbolGap : 8,
                    anticipationSymbols : ["SC"],
                    landingSymbols : ["SC"],
                    anticipationDelay : 2500,
                    winFrame : {name : "winFrame", type : "AnimatedSprite", animation: {prefix : "frame_juicy_fruity_1x1_000", postfix: "", start : 0, end : 34, toAddZero : true}, scale:0.93},
                    symbolsData : {
                        "WD" : {name : "WD", animation : {prefix : "per_big_000", postfix: "", start : 0, end : 44, toAddZero : true}, landingAnimation : {prefix : "per_big_000", postfix: "", start : 0, end : 29, toAddZero : true}},
                        "H1" : {name : "H1", animation : {prefix : "seven_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "H2" : {name : "H2", animation : {prefix : "bar_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "M1" : {name : "M1", animation : {prefix : "cherries_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "M2" : {name : "M2", animation : {prefix : "strawberry_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "M3" : {name : "M3", animation : {prefix : "blueberry_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "L1" : {name : "L1", animation : {prefix : "lime_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "L2" : {name : "L2", animation : {prefix : "pear_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "L3" : {name : "L3", animation : {prefix : "orange_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "L4" : {name : "L4", animation : {prefix : "bell_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "L5" : {name : "L5", animation : {prefix : "star_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "SC" : {name : "SC", animation : {prefix : "scatter_000", postfix: "", start : 0, end : 44, toAddZero : true}, landingAnimation : {prefix : "scatter_000", postfix: "", start : 0, end : 29, toAddZero : true, pivot:{x:0, y: 30}}},
                    },
                    winningSoundIndex : [["WD"], ["H1"], ["H2"], ["M1"], ["M2"], ["M3"], ["L1"], ["L2"], ["L3"], ["L4"], ["L5"], ["SC"],]
                }},
                {name : "gamelogo", type : "Sprite", image : "gamelogo", x : 490, y : 30, px : 490, py : 36, lx : -530, ly : 560, pScale : 1, lScale : 0.75, tabScale : 0.9, tabx : 310},
                {name : "gamelogoL", type : "Sprite", image : "gamelogo_splash", x : -650, y : 340, lScale : 0.5, tabScale : 0.7, tabx : 310 , scale: 0.7},
            ],
            layoutData : {
                "Desktop" : {hAlign : "center", vAlign : "middle", widthPerc : 1, heightPerc : 1.1},
                "Portrait" : {hAlign : "center", vAlign : "top"},
                "Landscape" : {hAlign : "center", vAlign : "top", heightPerc: 1.1, hPaddingPerc: 0.01, vPaddingPerc: -0.05},
            }

}
