export const SLOT_MACHINE_CONFIG = {
    name :"slotMachineComp", type : "Comp", class : "GameSlotMachineComp",showSymbolBeforeBigWin : true,
            Elements : [
                {name : "guideRect", type : "Graphics", color : 0xff0000, width : 1573, height : 1170},
                {name : "reelFrame", type : "Sprite", image : "reelFrame", x :0, y :230},
                {name : "winAmountComp", type : "Comp", class : "SlotSpinWinAnimAmountComp", x: 800, y : 690, durationFactor: 0.25,
                    Elements :[
                        {name : "winText", type : "Text", style : "winAmountStyle", fontSize : 350, anchor : {x : 0.5, y : 0.5}}
                    ]
                },
                {name : "slotMachine", type : "Comp", class : "GameSlotMachine",
                    anticipationConfig : {
                          totalElements : 5,
                          element : {name : "anticipation1", type : "AnimatedSprite", animation : {prefix : "antic_", postfix : "", start : 0, end : 14, toAddZero : true, loop : true,playOnStart : true}, scale : {x : 0.93, y : 0.965}},
                          positions : [{x:180, y :715}, {x:480, y : 715}, {x:790, y : 715}, {x:1100, y : 715}, {x:1400, y : 715}]
                    },
                    Elements : [
                        {name : "maskRect", type : "Graphics", color : 0xffff00, width : 1528, height : 893, x : 22, y : 246},
                        {name : "coverRect", type : "Graphics", color : 0x000000, width : 10000, height : 10000, x : -1000, y : -2000, alpha : 0.6},
                        {name : "paylinesComp", type : "Comp", class : "SlotPaylinesComp",
                            Elements : [
                                {name : "payline1", type : "Sprite", image : "payline1", x : -5, y : 580},
                                {name : "payline2", type : "Sprite", image : "payline2", x : -5, y : 290},
                                {name : "payline3", type : "Sprite", image : "payline3", x : -5, y : 870},
                                {name : "payline4", type : "Sprite", image : "payline4", x : -5, y : 360},
                                {name : "payline5", type : "Sprite", image : "payline5", x : -5, y : 400},
                                {name : "payline6", type : "Sprite", image : "payline6", x : -5, y : 230},
                                {name : "payline7", type : "Sprite", image : "payline7", x : -5, y : 560},
                                {name : "payline8", type : "Sprite", image : "payline8", x : -5, y :255},
                                {name : "payline9", type : "Sprite", image : "payline9", x : -5, y : 565},

                            ]}
                    ],
                data : {
                    noOfReels : 5,
                    noOfRows : 3,
                    reelHeight : 1000,
                    reelsView : [["SC", "SC", "SC"],["WD","L5", "M3"],["WD", "M2", "H2"], ["SC", "L2", "M3"], ["SC", "H1", "L3"]],
                    reelPositionX : [-90,218,525,834,1140],
                    reelContainerPos : {x : 260, y : 396},
                    symbolHeight : 295,
                    symbolGap : 2,
                    anticipationSymbols : ["SC"],
                    landingSymbols : ["SC"],
                    anticipationDelay : 2500,
                    winFrame : {name : "winFrame", type : "Spine", spineName: "effects", defaultState: "LineWin", loop: true,},
                    symbolsData: { 
                        "WD" : {name : "WD", animation : {prefix : "Win_", postfix: "", start : 0, end : 43, toAddZero : true}, landingAnimation : {prefix : "Land_", postfix: "", start : 0, end : 28, toAddZero : true}},
                        "H1" : {name : "H1", animation : {prefix : "H1_Win_", postfix: "", start : 0, end : 43, toAddZero : true, scale: 0.88}},
                        "H2" : {name : "H2", animation : {prefix : "H2_Win_", postfix: "", start : 0, end : 43, toAddZero : true, scale: 0.88}},
                        "M1" : {name : "M1", animation : {prefix : "M1_Win_", postfix: "", start : 0, end : 58, toAddZero : true, scale: 0.88}},
                        "M2" : {name : "M2", animation : {prefix : "S4_Win_", postfix: "", start : 0, end : 43, toAddZero : true, scale: 0.88}},
                        "M3" : {name : "M3", animation : {prefix : "S5_Win_", postfix: "", start : 0, end : 58, toAddZero : true, scale: 0.88}},
                        "L1" : {name : "L1", animation : {prefix : "S6_Win_", postfix: "", start : 0, end : 61, toAddZero : true, scale: 0.88}},
                        "L2" : {name : "L2", animation : {prefix : "S7_Win_", postfix: "", start : 0, end : 45, toAddZero : true, scale: 0.88}},
                        "L3" : {name : "L3", animation : {prefix : "S8_Win_", postfix: "", start : 0, end : 43, toAddZero : true, scale: 0.88}},
                        "L4" : {name : "L4", animation : {prefix : "S9_Win_", postfix: "", start : 0, end : 43, toAddZero : true, scale: 0.88}},
                        "L5" : {name : "L5", animation : {prefix : "S10_Win_", postfix: "", start : 0, end : 43, toAddZero : true, scale: 0.88}},
                        "SC" : {name : "SC", animation : {prefix : "sc_Win_", postfix: "", start : 0, end : 43, toAddZero : true},  landingAnimation : {prefix : "sc_Land_", postfix: "", start : 0, end : 28, toAddZero : true, pivot:{x:0, y: 30}}},
                    },
                    winningSoundIndex : [["WD"], ["H1"], ["H2"], ["M1"], ["M2"], ["M3"], ["L1"], ["L2"], ["L3"], ["L4"], ["L5"], ["SC"],]
                }},
                {name : "gamelogo", type : "Sprite", image : "gamelogo", x : 490, y : 20, px : 490, py : 0, lx : -530, ly : 560, pScale : 1, lScale : 0.75, tabScale : 0.9, tabx : 310},
                {name : "gamelogoL", type : "Sprite", image : "gamelogo", x : -430, y : 590, lScale : 0.4, tabScale : 0.7, tabx : 310 , scale: 0.7},
            ],
            layoutData : {
                "Desktop" : {hAlign : "center", vAlign : "middle", widthPerc : 1, heightPerc : 1.1},
                "Portrait" : {hAlign : "center", vAlign : "top"},
                "Landscape" : {hAlign : "center", vAlign : "top", heightPerc: 1.2, hPaddingPerc: 0.02, vPaddingPerc: -0.09},
            }

}
