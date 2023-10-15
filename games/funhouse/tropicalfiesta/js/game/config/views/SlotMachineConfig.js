export const SLOT_MACHINE_CONFIG = {
    name :"slotMachineComp", type : "Comp", class : "GameSlotMachineComp",showSymbolBeforeBigWin : true,
            Elements : [
                {name : "guideRect", type : "Graphics", color : 0xff0000, width : 1860, height : 1400},
                {name : "reelFrame", type : "Sprite", image : "reelFrame", x : -140, y : 100},
                {name : "winAmountComp", type : "Comp", class : "SlotSpinWinAmountComp", x: 970, y : 780,
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
                        {name : "maskRect", type : "Graphics", color : 0xffff00, width : 1710, height : 933, x : 70, y : 328},
                        {name : "coverRect", type : "Graphics", color : 0x000000, width : 10000, height : 10000, x : -1000, y : -2000, alpha : 0.6},
                        {name : "paylinesComp", type : "Comp", class : "SlotPaylinesComp",
                            Elements : [
                                {name : "payline1", type : "Sprite", image : "Payline1", x : 64, y : 790},
                                {name : "payline2", type : "Sprite", image : "Payline2", x : 64, y : 470},
                                {name : "payline3", type : "Sprite", image : "Payline3", x : 64, y : 1110},
                                {name : "payline4", type : "Sprite", image : "Payline4", x : 64, y : 420},
                                {name : "payline5", type : "Sprite", image : "Payline5", x : 64, y : 470},
                                {name : "payline6", type : "Sprite", image : "Payline6", x : 64, y : 520},
                                {name : "payline7", type : "Sprite", image : "Payline7", x : 64, y : 720},
                                {name : "payline8", type : "Sprite", image : "Payline8", x : 64, y : 490},
                                {name : "payline9", type : "Sprite", image : "Payline9", x : 64, y : 740},
                            ]}
                    ],
                data : {
                    noOfReels : 5,
                    noOfRows : 3,
                    reelHeight : 1000,
                    reelsView : [["H1", "H2", "L2"],["L1","L2", "WD"],["M1", "M2", "H1"], ["L3", "L2", "M3"], ["SC", "H1", "L3"]],
                    reelPositionX : [0,350,700,998,1320],
                    reelContainerPos : {x : 270, y : 484},
                    symbolHeight : 314,
                    symbolGap : 0,
                    anticipationSymbols : ["SC"],
                    landingSymbols : ["SC"],
                    anticipationDelay : 2500,
                    winFrame : {name : "winFrame", type : "AnimatedSprite", animation : {prefix : "frame1_000", postfix: "", start : 0, end : 19, toAddZero : true}, scale : 0.9},
                    symbolsData : {
                        "WD" : {name : "WD", animation : {prefix : "wild_000", postfix: "", start : 0, end : 44, toAddZero : true}, landingAnimation : {prefix : "wild_000", postfix: "", start : 0, end : 30, toAddZero : true}},
                        "H1" : {name : "H1", animation : {prefix : "s07_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "H2" : {name : "H2", animation : {prefix : "s09_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "M1" : {name : "M1", animation : {prefix : "s08_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "M2" : {name : "M2", animation : {prefix : "s02_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "M3" : {name : "M3", animation : {prefix : "s01_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "L1" : {name : "L1", animation : {prefix : "s06_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "L2" : {name : "L2", animation : {prefix : "s03_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "L3" : {name : "L3", animation : {prefix : "s04_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "L4" : {name : "L4", animation : {prefix : "Ashtray_000", postfix: "", start : 0, end : 44, toAddZero : true, scale : 0.6}},
                        "L5" : {name : "L5", animation : {prefix : "napkin holder_000", postfix: "", start : 0, end : 44, toAddZero : true, scale : 0.6}},
                        "SC" : {name : "SC", animation : {prefix : "scatter_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                    },
                    winningSoundIndex : [["WDdd"], ["H1"], ["H2"], ["M1"], ["M2"], ["M3"], ["L1"], ["L2"], ["L3"], ["L4"], ["L5"], ["SC"],]
                }},
                {name : "gamelogo", type : "Sprite", image : "gamelogo", x : 280, y : 0, px : 110, py : -86, lx : -670, ly : 690, pScale : 1.3, lScale : 0.6, tabScale : 0.9, tabx : 310},
                {name : "gamelogoL", type : "Sprite", image : "splashlogo", x : -800, y : 300, lScale : 0.6, tabScale : 0.9, tabx : 310},
            ],
            layoutData : {
                "Desktop" : {hAlign : "center", vAlign : "middle", widthPerc : 1, heightPerc : 1},
                "Portrait" : {hAlign : "center", vAlign : "top"},
                "Landscape" : {hAlign : "center", vAlign : "top", heightPerc: 1.1, hPaddingPerc: 0.01, vPaddingPerc: -0.05},
            }

}
