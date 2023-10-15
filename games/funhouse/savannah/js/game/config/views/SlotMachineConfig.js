export const SLOT_MACHINE_CONFIG = {
    name :"slotMachineComp", type : "Comp", class : "GameSlotMachineComp", showSymbolBeforeBigWin : true,
            Elements : [
                {name : "guideRect", type : "Graphics", color : 0x000000, width : 1670, height : 1140},
                {name : "reelFrame", type : "Sprite", image : "reelFrame", x : -145, y : 120},
                {name : "gamelogo", type : "Sprite", image : "title_game", anchor : {x : 0.5, y : 0}, x : 840, y : 0, scale : 1, pScale : 1.2, onTop : true},
                {name : "gamelogoL", type : "Sprite", image : "splashlogo", x : -420, y : 380, scale : 0.6, onTop : true},
                {name : "winAmountComp", type : "Comp", class : "SlotSpinWinAmountComp", x: 840, y : 620,
                    Elements :[
                        {name : "winText", type : "Text", style : "winAmountStyle", fontSize : 180, anchor : {x : 0.5, y : 0.5}}
                    ]
                },
                {name : "slotMachine", type : "Comp", class : "GameSlotMachine", x : 0, y : 140, disableMask : true,
                    anticipationConfig : {
                            totalElements : 5,
                            element : {name : "anticipation1", type : "AnimatedSprite", animation : {prefix : "frame_", postfix : "", start : 0, end : 50, toAddZero : true, loop : true, playOnStart : true}, scale : {x : 1, y : 1}},
                            positions : [{x:230, y : 474}, {x:530, y : 474}, {x:840, y : 474}, {x:1140, y : 474}, {x:1440, y : 474}]
                    },
                    Elements : [
                        {name : "maskRect", type : "Graphics", color : 0xffff00, width : 1528, height : 900, x : 70, y : 28},
                        {name : "coverRect", type : "Graphics", color : 0x000000, width : 10000, height : 10000, x : -1000, y : -2000, alpha : 0.6},
                        {name : "paylinesComp", type : "Comp", class : "SlotPaylinesComp", x : 6, scale : {x : 1.02, y : 1},
                            Elements : [
                                {name : "payline1", type : "Sprite", image : "1", x : 0, y : 340},
                                {name : "payline2", type : "Sprite", image : "2", x : 0, y : 50},
                                {name : "payline3", type : "Sprite", image : "3", x : 0, y : 650},
                                {name : "payline4", type : "Sprite", image : "4", x : 0, y : 50},
                                {name : "payline5", type : "Sprite", image : "5", x : 0, y : 50},
                                {name : "payline6", type : "Sprite", image : "6", x : 0, y : 50},
                                {name : "payline7", type : "Sprite", image : "7", x : 0, y : 340},
                                {name : "payline8", type : "Sprite", image : "8", x : 0, y : 50},
                                {name : "payline9", type : "Sprite", image : "9", x : 0, y : 50},
                                {name : "payline10", type : "Sprite", image : "10", x : 0, y : 50},
                                {name : "payline11", type : "Sprite", image : "11", x : 0, y : 50},
                                {name : "payline12", type : "Sprite", image : "12", x : 0, y : 50},
                                {name : "payline13", type : "Sprite", image : "13", x : 0, y : 340},
                                {name : "payline14", type : "Sprite", image : "14", x : 0, y : 50},
                                {name : "payline15", type : "Sprite", image : "15", x : 0, y : 340},
                                {name : "payline16", type : "Sprite", image : "16", x : 0, y : 50},
                                {name : "payline17", type : "Sprite", image : "17", x : 0, y : 340},
                                {name : "payline18", type : "Sprite", image : "18", x : 0, y : 50},
                                {name : "payline19", type : "Sprite", image : "19", x : 0, y : 50},
                                {name : "payline20", type : "Sprite", image : "20", x : 0, y : 50},
                                {name : "payline21", type : "Sprite", image : "21", x : 0, y : 50},
                                {name : "payline22", type : "Sprite", image : "22", x : 0, y : 50},
                                {name : "payline23", type : "Sprite", image : "23", x : 0, y : 50},
                                {name : "payline24", type : "Sprite", image : "24", x : 0, y : 50},
                                {name : "payline25", type : "Sprite", image : "25", x : 0, y : 50},
                                {name : "payline26", type : "Sprite", image : "26", x : 0, y : 50},
                                {name : "payline27", type : "Sprite", image : "27", x : 0, y : 50},
                                {name : "payline28", type : "Sprite", image : "28", x : 0, y : 50},
                                {name : "payline29", type : "Sprite", image : "29", x : 0, y : 50},
                                {name : "payline30", type : "Sprite", image : "30", x : 0, y : 50},
                            ]}

                    ],
                data : {
                    noOfReels : 5,
                    noOfRows : 3,
                    reelHeight : 1000,
                    reelsView1 : [[1,2,3], [4,5,7],[7,8,2],[4,11,0],[6,2,10]],
                    reelsView : [["H1", "SC", "L1"  ],["L1","H2", "L5"],["H4", "H3", "L5"], ["L3", "L5", "L1"], ["L2", "H1", "H3"]],
                    reelPositionX : [0,300,602,908,1210],
                    reelContainerPos : {x : 232, y : 170},
                    symbolHeight : 304,
                    symbolGap : 0,
                    anticipationSymbols : ["SC"],
                    landingSymbols : ["SC"],
                    anticipationDelay : 2500,
                    symbolsData : {
                        "WD" : {name : "WD", animation : {prefix : "WILD_000", postfix: "", start : 0, end : 45, toAddZero : true, x : 0, y: 0, scale : 1}, expandingAnimation : {prefix : "WILD X 3_000", postfix: "", start : 0, end : 45, toAddZero : true, x : 0, y: 0, scale : 1, loop : false}},
                        "H1" : {name : "H1", animation : {prefix : "lion_000", postfix: "", start : 0, end : 45, toAddZero : true, scale : 1}},
                        "H2" : {name : "H2", animation : {prefix : "hippo_000", postfix: "", start : 0, end : 45, toAddZero : true, scale : 1}},
                        "H3" : {name : "H3", animation : {prefix : "giraffe_000", postfix: "", start : 0, end : 45, toAddZero : true, scale : 1}},
                        "H4" : {name : "H4", animation : {prefix : "zebra_000", postfix: "", start : 0, end : 45, toAddZero : true, scale : 1}},
                        "H5" : {name : "H5", animation : {prefix : "warthog_000", postfix: "", start : 0, end : 45, toAddZero : true, scale : 1}},
                        "L1" : {name : "L1", animation : {prefix : "A_000", postfix: "", start : 0, end : 45, toAddZero : true, scale : 1}},
                        "L2" : {name : "L2", animation : {prefix : "K_000", postfix: "", start : 0, end : 45, toAddZero : true, scale : 1}},
                        "L3" : {name : "L3", animation : {prefix : "Q_000", postfix: "", start : 0, end : 45, toAddZero : true, scale : 1}},
                        "L4" : {name : "L4", animation : {prefix : "J_000", postfix: "", start : 0, end : 45, toAddZero : true, scale : 1}},
                        "L5" : {name : "L5", animation : {prefix : "10_000", postfix: "", start : 0, end : 45, toAddZero : true, scale : 1}},
                        "L6" : {name : "L6", animation : {prefix : "9_000", postfix: "", start : 0, end : 45, toAddZero : true, scale : 1}},
                        "SC" : {name : "SC", animation : {prefix : "SCATTER_000", postfix: "", start : 0, end : 45, toAddZero : true, x : -1, y: -1, scale : 1}},
                    },
                    winningSoundIndex : [["WD"], ["H1"], ["H2"], ["H3"], ["H4"], ["H5"], ["L1"], ["L2"], ["L3"], ["L4"], ["L5"], ["L6"], ["SC"]]
                }},

            ],
            layoutData : {
                "Desktop" : {hAlign : "center", vAlign : "middle", widthPerc : 1, heightPerc : 1},
                "Portrait" : {hAlign : "center", vAlign : "top"},
                "Landscape" : {hAlign : "center", vAlign : "top", heightPerc: 1.10, widthPerc : 1, hPaddingPerc: 0, vPaddingPerc: -0.032},
            }

}
