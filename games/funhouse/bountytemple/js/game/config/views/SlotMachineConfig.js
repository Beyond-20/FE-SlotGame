export const SLOT_MACHINE_CONFIG = {
    name :"slotMachineComp", type : "Comp", class : "GameSlotMachineComp",showSymbolBeforeBigWin : true,
            Elements : [
                {name : "guideRect", type : "Graphics", color : 0xff0000, width : 1824, height : 1235},
                {name : "reelFrame", type : "Sprite", image : "reelFrame", x :0, y :140},
                {name : "winAmountComp", type : "Comp", class : "SlotSpinWinAnimAmountComp", x: 915, y : 670, durationFactor: 0.25,
                    Elements :[
                        {name : "winText", type : "Text", style : "winAmountStyle", fontSize : 350, anchor : {x : 0.5, y : 0.5}}
                    ]
                },
                {name : "slotMachine", type : "Comp", class : "GameSlotMachine",
                    anticipationConfig : {
                          totalElements : 5,
                          element : {name : "anticipation", type : "AnimatedSprite", animation : {prefix : "bt_anticipation_000", postfix : "", start : 0, end : 34, toAddZero : true, loop : true, playOnStart : true}, scale : {x : 0.95, y : 1}},
                          positions : [{x:190, y : 685}, {x:550, y : 685}, {x:910, y : 685}, {x:1270, y : 685}, {x:1630, y : 685}]
                    },
                    Elements : [
                        {name : "maskRect", type : "Graphics", color : 0xffff00, width : 1860, height : 1072, x : -30, y : 146},
                        {name : "coverRect", type : "Graphics", color : 0x000000, width : 10000, height : 10000, x : -1000, y : -2000, alpha : 0.6},
                        {name : "paylinesComp", type : "Comp", class : "SlotPaylinesComp",
                            Elements : [
                                {name : "payline1", type : "Sprite", image : "1", x : -365, y : 50},
                                {name : "payline2", type : "Sprite", image : "2", x : -365, y : 20},
                                {name : "payline3", type : "Sprite", image : "3", x : -365, y : 0},
                                {name : "payline4", type : "Sprite", image : "4", x : -25, y : 280},
                                {name : "payline5", type : "Sprite", image : "5", x : -25, y : 235},
                                {name : "payline6", type : "Sprite", image : "6", x : -25, y : 245},
                                {name : "payline7", type : "Sprite", image : "7", x : -25, y : 630},
                                {name : "payline8", type : "Sprite", image : "8", x : -25, y :280},
                                {name : "payline9", type : "Sprite", image : "9", x : -25, y : 235},
                                {name : "payline10", type : "Sprite", image : "10", x : -25, y : 250},
                                {name : "payline11", type : "Sprite", image : "11", x : -25, y : 250},
                                {name : "payline12", type : "Sprite", image : "12", x : -25, y : 280},
                                {name : "payline13", type : "Sprite", image : "13", x : -25, y : 610},
                                {name : "payline14", type : "Sprite", image : "14", x : -25, y : 280},
                                {name : "payline15", type : "Sprite", image : "15", x : -25, y : 610},
                                {name : "payline16", type : "Sprite", image : "17", x : -25, y : 255},
                                {name : "payline17", type : "Sprite", image : "16", x : -25, y : 630},
                                {name : "payline18", type : "Sprite", image : "18", x : -25, y : 280},
                                {name : "payline19", type : "Sprite", image : "19", x : -25, y : 235},
                                {name : "payline20", type : "Sprite", image : "20", x : -25, y : 280},
                            ]}
                    ],
                data : {
                    noOfReels : 5,
                    noOfRows : 3,
                    reelHeight : 1000,
                    reelsView : [["H1", "H2", "H3"],["H4","L2", "WD"],["L1", "H5", "FG"], ["L3", "L2", "H3"], ["L4", "BN", "L3"]],
                    reelPositionX : [0,360,726,1090,1455],
                    reelContainerPos : {x : 184, y : 310},
                    symbolHeight : 355,
                    symbolGap : 10,
                    anticipationSymbols : ["FG", "BN"],
                    landingSymbols : ["FG","BN"],
                    anticipationDelay : 2500,
                    winFrame : {name : "winFrame", type : "AnimatedSprite", animation: {prefix : "bt_winframe_000", postfix: "", start : 0, end : 34, toAddZero : true}, scale: 0.96, y: 10 },
                    symbolsData : {
                        "WD" : {name : "WD", animation : {prefix : "leo man_0", postfix: "", start : 0, end : 30, toAddZero : true, y:-28}},
                        "H1" : {name : "H1", animation : {prefix : "girl_000", postfix: "", start : 0, end : 30, toAddZero : true}},
                        "H2" : {name : "H2", animation : {prefix : "Jaguar_000", postfix: "", start : 0, end : 30, toAddZero : true}},
                        "H3" : {name : "H3", animation : {prefix : "Eagle_000", postfix: "", start : 0, end : 30, toAddZero : true}},
                        "H4" : {name : "H4", animation : {prefix : "Crocodile_000", postfix: "", start : 0, end : 30, toAddZero : true}},
                        "H5" : {name : "H5", animation : {prefix : "Panther_000", postfix: "", start : 0, end : 30, toAddZero : true}},
                        "L1" : {name : "L1", animation : {prefix : "mask_0", postfix: "", start : 0, end : 30, toAddZero : true}},
                        "L2" : {name : "L2", animation : {prefix : "uroboros_", postfix: "", start : 0 , end : 30, toAddZero : false, y:10}},
                        "L3" : {name : "L3", animation : {prefix : "necklace_0", postfix: "", start : 0, end : 30, toAddZero : true}},
                        "L4" : {name : "L4", animation : {prefix : "stone_0", postfix: "", start : 0, end : 30, toAddZero : true}},
                        "FG" : {name : "FG", animation : {prefix : "pyramid_0", postfix: "", start : 0, end : 30, toAddZero : true, y:20},landingAnimation : {prefix : "pyramid_0", postfix: "", start : 0, end : 15, toAddZero : true}},
                        "BN" : {name : "BN", animation : {prefix : "green man_0", postfix: "", start : 0, end : 30, toAddZero : true, x:15, y:-20},landingAnimation : {prefix : "green man_0", postfix: "", start : 0, end : 15, toAddZero : true}}
                    },
                    winningSoundIndex : [["WD"], ["H1"], ["H2"], ["H3"], ["H4"], ["H5"], ["L1"], ["L2"], ["L3"], ["L4"], ["FG"], ["BN"]]
                }},
                {name : "gamelogo", type : "Sprite", image : "gamelogo", x : 490, y : 6},
                {name : "gamelogoL", type : "Sprite", image : "gamelogo_splash", x : -610, y : 500, lScale : 0.4, tabScale : 0.7, tabx : 310 , scale: 0.7},
            ],
            layoutData : {
                "Desktop" : {hAlign : "center", vAlign : "middle", widthPerc : 1, heightPerc : 1.1},
                "Portrait" : {hAlign : "center", vAlign : "top"},
                "Landscape" : {hAlign : "center", vAlign : "top", heightPerc: 1.1, hPaddingPerc: 0.02, vPaddingPerc: -0.05},
            }

}
