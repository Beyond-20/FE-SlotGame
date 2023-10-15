export const SLOT_MACHINE_CONFIG = {
    name :"slotMachineComp", type : "Comp", class : "GameSlotMachineComp", showSymbolBeforeBigWin : true,
            Elements : [
                {name : "guideRect", type : "Graphics", color : 0xff0000, width : 1940, height : 1310},
                {name : "reelFrame", type : "Sprite", image : "reelFrame", x : 0, y : 155},
                {name : "winAmountComp", type : "Comp", class : "SlotSpinWinAmountComp", x: 970, y : 750,
                    Elements :[
                        {name : "winText", type : "Text", style : "winAmountStyle", fontSize : 250, anchor : {x : 0.5, y : 0.5}}
                    ]
                },
                {name : "slotMachine", type : "Comp", class : "GameSlotMachine",
                    anticipationConfig : {
                          totalElements : 5,
                          element : {name : "anticipation1", type : "AnimatedSprite", animation : {prefix : "frame1x3_3_000", postfix : "", start : 0, end : 34, toAddZero : true, loop : true, playOnStart : false}, scale : {x : 0.99, y : 0.98}},
                          positions : [{x:278, y : 749}, {x: 625, y : 749}, {x:972, y :749}, {x:1319, y : 749}, {x:1666, y : 749}]
                    },
                    Elements : [
                        {name : "maskRect", type : "Graphics", color : 0xffff00, width : 1840, height : 1050, x : 50, y : 215},
                        {name : "coverRect", type : "Graphics", color : 0x000000, width : 10000, height : 10000, x : -1000, y : -2000, alpha : 0.6},
                        {name : "paylinesComp", type : "Comp", class : "SlotPaylinesComp", x : 96, y: 256, scale : {x : 1, y : 1},
                            Elements : [
                                {name : "payline1", type : "Sprite", image : "1", x : 0, y : 100},
                                {name : "payline2", type : "Sprite", image : "2", x : 0, y : 440},
                                {name : "payline3", type : "Sprite", image : "3", x : 0, y : 790},
                                {name : "payline4", type : "Sprite", image : "4", x : 0, y : 100},
                                {name : "payline5", type : "Sprite", image : "5", x : 0, y : 65},
                                {name : "payline6", type : "Sprite", image : "6", x : 0, y : 65},
                                {name : "payline7", type : "Sprite", image : "7", x : 0, y : 453},
                                {name : "payline8", type : "Sprite", image : "8", x : 0, y : 100},
                                {name : "payline9", type : "Sprite", image : "9", x : 0, y : 65},
                                {name : "payline10", type : "Sprite", image : "10", x : 0, y : 70},
                                {name : "payline11", type : "Sprite", image : "11", x : 0, y : 70},
                                {name : "payline12", type : "Sprite", image : "12", x : 0, y : 100},
                                {name : "payline13", type : "Sprite", image : "13", x : 0, y : 430},
                                {name : "payline14", type : "Sprite", image : "14", x : 0, y : 100},
                                {name : "payline15", type : "Sprite", image : "15", x : 0, y : 430},
                                {name : "payline16", type : "Sprite", image : "16", x : 0, y : 80},
                                {name : "payline17", type : "Sprite", image : "17", x : 0, y : 440},
                                {name : "payline18", type : "Sprite", image : "18", x : 0, y : 100},
                                {name : "payline19", type : "Sprite", image : "19", x : 0, y : 65},
                                {name : "payline20", type : "Sprite", image : "20", x : 0, y : 100},
                                {name : "payline21", type : "Sprite", image : "21", x : 0, y : 65},
                                {name : "payline22", type : "Sprite", image : "22", x : 0, y : 80},
                                {name : "payline23", type : "Sprite", image : "23", x : 0, y : 70},
                                {name : "payline24", type : "Sprite", image : "24", x : 0, y : 100},
                                {name : "payline25", type : "Sprite", image : "25", x : 0, y : 55},
                            ]} 
                    ],
                data : {
                    noOfReels : 5,
                    noOfRows : 3,
                    reelHeight :1000,
                    reelsView1 : [[1,2,3], [4,5,7],[7,8,2],[4,11,0],[6,2,10]],
                    reelsView : [["L1", "H2", "WD"],["L1","L2", "H1"],["L1", "H3", "L5"], ["L1", "L2", "L1"], ["L4", "H1", "H3"]],
                    reelPositionX :[0,350,698,1040,1385],
                    reelContainerPos : {x : 276, y : 400},
                    symbolHeight : 346,
                    symbolGap :0,
                    anticipationSymbols : ["SC"],
                    landingSymbols : ["SC"],
                    anticipationDelay : 2500,
                    symbolsData : { 
                        "WD" : {name : "WD", animation : {prefix : "Lion_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "H1" : {name : "H1", animation : {prefix : "girl_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "H2" : {name : "H2", animation : {prefix : "tao_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "H3" : {name : "H3", animation : {prefix : "fun_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "H4" : {name : "H4", animation : {prefix : "sycee_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "L1" : {name : "L1", animation : {prefix : "a_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "L2" : {name : "L2", animation : {prefix : "k_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "L3" : {name : "L3", animation : {prefix : "q_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "L4" : {name : "L4", animation : {prefix : "j_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "L5" : {name : "L5", animation : {prefix : "10_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "L6" : {name : "L6", animation : {prefix : "9_000", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "SC" : {name : "SC", animation : {prefix : "tree_000", postfix: "", start : 0, end : 44, toAddZero : true}, landingAnimation : {prefix : "tree_000", postfix: "", start : 0, end : 20, toAddZero : true}},
                    },
                    winningSoundIndex : [["WD"], ["H1"], ["H2"], ["H3"], ["H4"], ["L1"], ["L2"], ["L3"], ["L4"], ["L5"], ["L6"], ["SC"],]
                }},
                {name : "gamelogo", type : "Sprite", image : "gamelogo", x : 310, y : 3, scale: 1, pScale : 1, lScale : 1, tabScale : 1.2, tabx : 310},
                {name : "gamelogoL", type : "Sprite", image : "gamelogo_splash", x : -760, y : 300, lScale : 0.5, tabScale : 0.9, tabx : 310},

            ],
            layoutData : {
                "Desktop" : {hAlign : "center", vAlign : "middle", widthPerc :1, heightPerc : 1},
                "Portrait" : {hAlign : "center", vAlign : "top"},
                "Landscape" : {hAlign : "center", vAlign : "top", heightPerc: 1.05, hPaddingPerc: 0, vPaddingPerc: -0.05},
            }

}
