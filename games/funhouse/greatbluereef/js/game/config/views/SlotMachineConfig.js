export const SLOT_MACHINE_CONFIG = {
    name :"slotMachineComp", type : "Comp", class : "GBRSlotMachineComp", showSymbolBeforeBigWin : true,
            Elements : [
                {name : "guideRect", type : "Graphics", color : 0xff0000, width : 1470, height : 1084},
                {name : "reelFrame", type : "Sprite", image : "reelFrame", x : 0, y : 210},
                {name : "gamelogo", type : "Sprite", image : "title_game", x : 100, y : -40, scale : 1, pScale : 0.5, lScale : 0.5, onTop : true},
                {name : "gamelogoP", type : "Sprite", image : "title_gameP", x : 250, y : -230, px : 270, py : -230, lx : -360, ly : 500, scale : 0.5, pScale : 0.5, lScale : 0.2, tabScale : 0.5, tabx : 450 , taby : -20 , onTop : true},
                {name : "winAmountComp", type : "Comp", class : "SlotSpinWinAmountComp", x: 720, y : 600,
                    Elements :[
                        {name : "winText", type : "Text", style : "winAmountStyle", fontSize : 180, anchor : {x : 0.5, y : 0.5}}
                    ]
                },
                {name : "slotMachine", type : "Comp", class : "GameSlotMachine", x : 0, y : 204, disableMask : true,
                    anticipationConfig : {
                            totalElements : 5,
                            element : {name : "anticipation1", type : "AnimatedSprite", animation : {prefix : "antic_0", postfix : "", start : 0, end : 89, toAddZero : true, loop : true, playOnStart : true}, scale : {x : 1.7, y : 1.56}},
                            positions : [{x:160, y : 430}, {x:450, y : 430}, {x:735, y : 430}, {x:1020, y : 430}, {x:1300, y : 430}]
                    },
                    Elements : [
                        {name : "maskRect", type : "Graphics", color : 0xffff00, width : 1450, height : 816, x : 0, y : 28},
                        {name : "coverRect", type : "Graphics", color : 0x000000, width : 10000, height : 10000, x : -1000, y : -2000, alpha : 0.6},
                        {name : "paylinesComp", type : "Comp", class : "SlotPaylinesComp",
                            Elements : [
                                {name : "payline1", type : "Sprite", image : "Payline1", x : -20, y : 420},
                                {name : "payline2", type : "Sprite", image : "Payline2", x : -20, y : 150},
                                {name : "payline3", type : "Sprite", image : "Payline3", x : -20, y : 690},
                                {name : "payline4", type : "Sprite", image : "Payline4", x : -15, y : 150},
                                {name : "payline5", type : "Sprite", image : "Payline5", x : -15, y : 150},
                                {name : "payline6", type : "Sprite", image : "Payline6", x : -15, y : 150},
                                {name : "payline7", type : "Sprite", image : "Payline7", x : -15, y : 420},
                                {name : "payline8", type : "Sprite", image : "Payline8", x : -15, y : 150},
                                {name : "payline9", type : "Sprite", image : "Payline9", x : -15, y : 150},
                                {name : "payline10", type : "Sprite", image : "Payline10", x : -15, y : 150},
                                {name : "payline11", type : "Sprite", image : "Payline11", x : -15, y : 150},
                                {name : "payline12", type : "Sprite", image : "Payline12", x : -15, y : 150},
                                {name : "payline13", type : "Sprite", image : "Payline13", x : -15, y : 420},
                                {name : "payline14", type : "Sprite", image : "Payline14", x : -15, y : 150},
                                {name : "payline15", type : "Sprite", image : "Payline15", x : -15, y : 420},
                                {name : "payline16", type : "Sprite", image : "Payline16", x : -15, y : 150},
                                {name : "payline17", type : "Sprite", image : "Payline17", x : -15, y : 420},
                                {name : "payline18", type : "Sprite", image : "Payline18", x : -15, y : 150},
                                {name : "payline19", type : "Sprite", image : "Payline19", x : -15, y : 150},
                                {name : "payline20", type : "Sprite", image : "Payline20", x : -15, y : 150},
                                {name : "payline21", type : "Sprite", image : "Payline21", x : -15, y : 150},
                                {name : "payline22", type : "Sprite", image : "Payline22", x : -15, y : 150},
                                {name : "payline23", type : "Sprite", image : "Payline23", x : -15, y : 150},
                                {name : "payline24", type : "Sprite", image : "Payline24", x : -15, y : 150},
                                {name : "payline25", type : "Sprite", image : "Payline25", x : -15, y : 150},
                            ]}

                    ],
                data : {
                    noOfReels : 5,
                    noOfRows : 3,
                    reelHeight : 1000,
                    reelsView1 : [[1,2,3], [4,5,7],[7,8,2],[4,11,0],[6,2,10]],
                    reelsView : [["H1", "H2", "L1"  ],["L1","L2", "L5"],["H4", "H3", "L5"], ["L3", "L2", "L1"], ["SC", "H1", "H3"]],
                    reelPositionX : [0,284,568,852,1136],
                    reelContainerPos : {x : 168, y : 166},
                    symbolHeight : 268,
                    symbolGap : 2,
                    anticipationSymbols : ["SC"],
                    landingSymbols : ["SC"],
                    anticipationDelay : 2500,
                    symbolsData : {
                        "WD" : {name : "WD", animation : {prefix : "an_wild_win_", postfix: "", start : 0, end : 148, toAddZero : true, x : -7, y: -8, scale : 1}},
                        "H1" : {name : "H1", animation : {prefix : "an_dolphin_win_", postfix: "", start : 0, end : 48, toAddZero : true, scale : 1}},
                        "H2" : {name : "H2", animation : {prefix : "an_crab_win_", postfix: "", start : 0, end : 48, toAddZero : true, scale : 1}},
                        "H3" : {name : "H3", animation : {prefix : "an_jellyfish_win_", postfix: "", start : 0, end : 48, toAddZero : true, scale : 1}},
                        "H4" : {name : "H4", animation : {prefix : "an_octopus_win_", postfix: "", start : 0, end : 48, toAddZero : true, scale : 1}},
                        "H5" : {name : "H5", animation : {prefix : "an_fish_win_", postfix: "", start : 0, end : 48, toAddZero : true, scale : 1}},
                        "L1" : {name : "L1", animation : {prefix : "an_A_win_", postfix: "", start : 0, end : 48, toAddZero : true, scale : 1}},
                        "L2" : {name : "L2", animation : {prefix : "an_K_win_", postfix: "", start : 0, end : 48, toAddZero : true, scale : 1}},
                        "L3" : {name : "L3", animation : {prefix : "an_Q_win_", postfix: "", start : 0, end : 48, toAddZero : true, scale : 1}},
                        "L4" : {name : "L4", animation : {prefix : "an_J_win_", postfix: "", start : 0, end : 48, toAddZero : true, scale : 1}},
                        "L5" : {name : "L5", animation : {prefix : "an_10_win_", postfix: "", start : 0, end : 48, toAddZero : true, scale : 1}},
                        "L6" : {name : "L6", animation : {prefix : "an_9_win_", postfix: "", start : 0, end : 48, toAddZero : true, scale : 1}},
                        "SC" : {name : "SC", animation : {prefix : "an_scatter_win_", postfix: "", start : 0, end : 84, toAddZero : true, x : -1, y: -1, scale : 1}},
                    },
                    winningSoundIndex : [["WD"], ["H1", "H2", "H3", "H4"], ["L1", "L2", "L3", "L4", "L5", "L6"]]
                }},

            ],
            layoutData : {
                "Desktop" : {hAlign : "center", vAlign : "middle", widthPerc : 1, heightPerc : 1},
                "Portrait" : {hAlign : "center", vAlign : "top"},
                "Landscape" : {hAlign : "center", vAlign : "top", heightPerc: 1.17, widthPerc : 1, hPaddingPerc: 0, vPaddingPerc: -0.085},
            }

}
