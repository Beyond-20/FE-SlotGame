export const SLOT_MACHINE_CONFIG = {
    name :"slotMachineComp", type : "Comp", class : "GameSlotMachineComp",showSymbolBeforeBigWin : true,
            Elements : [
                {name : "guideRect", type : "Graphics", color : 0xff0000, width : 2010, height : 1405},
                {name : "reelFrame", type : "Sprite", image : "reelFrame", x :0, y :150},
                {name : "winAmountComp", type : "Comp", class : "SlotSpinWinAnimAmountComp", x: 990, y : 770, durationFactor: 0.25,
                    Elements :[
                        {name : "winText", type : "Text", style : "winAmountStyle", fontSize : 350, anchor : {x : 0.5, y : 0.5}}
                    ]
                },
                {name : "slotMachine", type : "Comp", class : "GameSlotMachine",
                    anticipationConfig : {
                          totalElements : 5,
                          element : {name : "anticipation", type : "AnimatedSprite", animation : {prefix : "frame1x3_000", postfix : "", start : 0, end : 28, toAddZero : true, loop : true, playOnStart : true}, scale : {x : 0.54, y : 0.58}},
                          positions : [{x:280, y :775}, {x:650, y : 775}, {x:1010, y : 775}, {x:1370, y : 775}, {x:1730, y : 775}]
                    },
                    Elements : [
                        {name : "maskRect", type : "Graphics", color : 0xffff00, width : 1940, height : 1172, x : 35, y : 180},
                        {name : "coverRect", type : "Graphics", color : 0x000000, width : 10000, height : 10000, x : -1000, y : -2000, alpha : 0.6},
                        {name : "paylinesComp", type : "Comp", class : "SlotPaylinesComp",
                            Elements : [
                                {name : "payline1", type : "Sprite", image : "1", x : 65, y : 335},
                                {name : "payline2", type : "Sprite", image : "2", x : 65, y : 735},
                                {name : "payline3", type : "Sprite", image : "3", x : 65, y : 1135},
                                {name : "payline4", type : "Sprite", image : "4", x : 65, y : 335},
                                {name : "payline5", type : "Sprite", image : "5", x : 65, y : 380},
                                {name : "payline6", type : "Sprite", image : "6", x : 65, y : 355},
                                {name : "payline7", type : "Sprite", image : "7", x : 65, y : 735},
                                {name : "payline8", type : "Sprite", image : "8", x : 65, y :335},
                                {name : "payline9", type : "Sprite", image : "9", x : 65, y : 375},
                                {name : "payline10", type : "Sprite", image : "10", x : 65, y : 355},
                                {name : "payline11", type : "Sprite", image : "11", x : 65, y : 355},
                                {name : "payline12", type : "Sprite", image : "12", x : 65, y : 335},
                                {name : "payline13", type : "Sprite", image : "13", x : 65, y : 755},
                                {name : "payline14", type : "Sprite", image : "14", x : 65, y : 335},
                                {name : "payline15", type : "Sprite", image : "15", x : 65, y : 755},
                                {name : "payline16", type : "Sprite", image : "17", x : 65, y : 355},
                                {name : "payline17", type : "Sprite", image : "16", x : 65, y : 735},
                                {name : "payline18", type : "Sprite", image : "18", x : 65, y : 335},
                                {name : "payline19", type : "Sprite", image : "19", x : 65, y : 380},
                                {name : "payline20", type : "Sprite", image : "20", x : 65, y : 335},
                            ]}
                    ],
                data : {
                    noOfReels : 5,
                    noOfRows : 3,
                    reelHeight : 1000,
                    reelsView : [["H1", "H2", "H3"],["H2","L2", "WD"],["L1", "H5", "FG"], ["L3", "L2", "H4"], ["L4", "BN", "L3"]],
                    reelPositionX : [0,350,700,1060,1418],
                    reelContainerPos : {x : 300, y : 375},
                    symbolHeight : 386,
                    symbolGap : 8,
                    anticipationSymbols : ["FG","BN"],
                    landingSymbols : ["FG","BN"],
                    anticipationDelay : 2500,
                    winFrame : {name : "winFrame", type : "AnimatedSprite", animation: {prefix : "frame1x1_000", postfix: "", start : 0, end : 29, toAddZero : true}, scale:{x: 0.9, y:0.98}},
                    symbolsData : {
                        "WD" : {name : "WD", animation : {prefix : "Wild_000", postfix: "", start : 0, end : 44, toAddZero : true, y:-10}},
                        "H1" : {name : "H1", animation : {prefix : "high1_000", postfix: "", start : 0, end : 44, toAddZero : true, x:-19, y: -15}},
                        "H2" : {name : "H2", animation : {prefix : "high2_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "H3" : {name : "H3", animation : {prefix : "high3_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "H4" : {name : "H4", animation : {prefix : "high4_000", postfix: "", start : 0, end : 44, toAddZero : true, x:-30}},
                        "H5" : {name : "H5", animation : {prefix : "high5_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "L1" : {name : "L1", animation : {prefix : "low1_000", postfix: "", start : 0, end : 44, toAddZero : true, x:-5}},
                        "L2" : {name : "L2", animation : {prefix : "low2_000", postfix: "", start : 0 , end : 44, toAddZero : true, x:5, y:-5}},
                        "L3" : {name : "L3", animation : {prefix : "low3_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "L4" : {name : "L4", animation : {prefix : "low4_cut_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "FG" : {name : "FG", animation : {prefix : "Free Games_000", postfix: "", start : 0, end : 44, toAddZero : true}, landingAnimation : {prefix : "Free Games_000", postfix: "", start : 0, end : 22, toAddZero : true}},
                        "BN" : {name : "BN", animation : {prefix : "bonus_000", postfix: "", start : 0, end : 44, toAddZero : true},landingAnimation : {prefix : "bonus_000", postfix: "", start : 0, end : 22, toAddZero : true}}
                    },
                    winningSoundIndex : [["WD"], ["H1"], ["H2"], ["H3"], ["H4"], ["H5"], ["L1"], ["L2"], ["L3"], ["L4"], ["FG"], ["BN"]]
                }},
                {name : "gamelogo", type : "Sprite", image : "gamelogo", x : 490, y : 0},
                {name : "gamelogoL", type : "Sprite", image : "gamelogo_splash", x : -350, y : 550, lScale : 0.4, tabScale : 0.7, tabx : 310 , scale: 0.7},
            ],
            layoutData : {
                "Desktop" : {hAlign : "center", vAlign : "middle", widthPerc : 1, heightPerc : 1.1},
                "Portrait" : {hAlign : "center", vAlign : "top"},
                "Landscape" : {hAlign : "center", vAlign : "top", heightPerc: 1.1, hPaddingPerc: 0.02, vPaddingPerc: -0.05},
            }

}
