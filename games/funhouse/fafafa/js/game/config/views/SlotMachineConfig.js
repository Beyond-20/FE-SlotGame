export const SLOT_MACHINE_CONFIG = {
    name :"slotMachineComp", type : "Comp", class : "FaFaFaSlotMachineComp",
            Elements : [
                {name : "guideRect", type : "Graphics", color : 0xff0000, width : 1798, height : 1230},
                {name : "reelFrame", type : "Sprite", image : "reelFrame", x : -74, y : 130},
                {name : "winAmountComp", type : "Comp", class : "SlotSpinWinAmountComp", x: 910, y : 700,
                    Elements :[
                        {name : "winText", type : "Text", style : "winAmountStyle", fontSize : 222, anchor : {x : 0.5, y : 0.5}}
                    ]
                },
                {name : "slotMachine", type : "Comp", class : "GameSlotMachine", symbolClass : "ReelSlotSpinningSymbol",
                    wildFrameAnim : {name : "WDFrame", type : "AnimatedSprite", animation : {prefix : "Gold_frame_cut500_000", postfix: "", start : 0, end : 44, toAddZero : true, loop : true}, scale : 0.8},
                    Elements : [
                        {name : "maskRect", type : "Graphics", color : 0xffff00, width : 1730, height : 975, x : 34, y : 213},
                    ],
                data : {
                    noOfReels : 5,
                    noOfRows : 3,
                    reelHeight : 1000,
                    reelsView1 : [[1,2,3], [4,5,7],[7,8,2],[4,11,0],[6,2,10]],
                    reelsView : [["H1", "H2", "L4"  ],["L1","L2", "WD"],["H4", "H3", "L2"], ["L3", "L2", "L1"], ["SC", "H1", "H3"]],
                    reelPositionX : [0,346,684,1022,1362],
                    reelContainerPos : {x : 220, y : 374},
                    symbolHeight : 324,
                    symbolGap : 0,
                    anticipationSymbols : ["SC"],
                    landingSymbols : ["SC"],
                    anticipationDelay : 2500,
                    symbolsData : {
                        "WD" : {name : "WD", name1 : "WDF", animation : {prefix : "Hieroglyph_2_", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "WDF" : {name : "WDF", animation : {prefix : "Hieroglyph_1_", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "H1" : {name : "H1", animation : {prefix : "Imperator_Red_", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "H2" : {name : "H2", animation : {prefix : "Imperator_Blue_", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "H3" : {name : "H3", animation : {prefix : "Boy_", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "H4" : {name : "H4", animation : {prefix : "Girl_", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "L1" : {name : "L1", animation : {prefix : "Drum_", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "L2" : {name : "L2", animation : {prefix : "Medollien_", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "L3" : {name : "L3", animation : {prefix : "Firecrackers_", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "L4" : {name : "L4", animation : {prefix : "Envelope_", postfix: "", start : 0, end : 44, toAddZero : true}},
                        "SC" : {name : "SC", animation : {prefix : "dragon_blue_1_", postfix: "", start : 0, end : 44, toAddZero : true}, landingAnimation : {prefix : "dragon_blue_1_", postfix: "", start : 0, end : 10, toAddZero : true}},
                    },
                    winningSoundIndex : [["WD"], ["H1"], ["H2"], ["H3"], ["H4"], ["L1"], ["L2"], ["L3"], ["L4"], ["SC"]],
                }},
                {name : "reelDecor", type : "Sprite", image : "reelDecor", x : -80, y : 130},
                {name : "reelDivider", type : "Sprite", image : "reeldividers", x : -74, y : 130},
                {name : "gamelogo", type : "Spine", spineName : "Logo", defaultState : "animation", loop : true, scale : 0.52, pScale : 0.55, lScale : 0.55, x : 902, y : 116, onTop : true},
                {name : "dragonTransition", type : "Comp", class : "FaFSReelTransition", x : 204, y : 640, scale : 0.66,
                    Elements: [
                        {name : "ts1", type : "Spine", spineName : "Dragon_transition", defaultState : "animation", loop : false},
                        {name : "ts2", type : "Spine", spineName : "Dragon_transition", defaultState : "animation", loop : false, x : 522},
                        {name : "ts3", type : "Spine", spineName : "Dragon_transition", defaultState : "animation", loop : false, x : 1044},
                        {name : "ts4", type : "Spine", spineName : "Dragon_transition", defaultState : "animation", loop : false, x : 1566},
                        {name : "ts5", type : "Spine", spineName : "Dragon_transition", defaultState : "animation", loop : false, x : 2088}
                    ]
                },
                {name: "batIcons", type: "Comp", class: "FaBatIcons",
                    Elements: [
                        {name: "batIcon1", type: "Spine", spineName: "icons china", defaultState: "animation", x: 220, y: 570, scale: 0.75},
                        {name: "batIcon2", type: "Spine", spineName: "icons china", defaultState: "animation", x: 558, y: 570, scale: 0.75},
                        {name: "batIcon3", type: "Spine", spineName: "icons china", defaultState: "animation", x: 904, y: 570, scale: 0.75},
                        {name: "batIcon4", type: "Spine", spineName: "icons china", defaultState: "animation", x: 1242, y: 570, scale: 0.75},
                        {name: "batIcon5", type: "Spine", spineName: "icons china", defaultState: "animation", x: 1580, y: 570, scale: 0.75},
                    ]
                },
                {name: "coinShowerAnims", type: "Comp", class: "CoinShowerAnims",
                    Elements: [
                        {name: "element1", type: "AnimatedSprite", animation : {prefix : "Coin_3_", postfix: "", start : 0, end : 44, toAddZero : true}, x: 225, y: 706},
                        {name: "element2", type: "AnimatedSprite", animation : {prefix : "Coin_3_", postfix: "", start : 0, end : 44, toAddZero : true}, x: 566, y: 706},
                        {name: "element3", type: "AnimatedSprite", animation : {prefix : "Coin_3_", postfix: "", start : 0, end : 44, toAddZero : true}, x: 910, y: 706},
                        {name: "element4", type: "AnimatedSprite", animation : {prefix : "Coin_3_", postfix: "", start : 0, end : 44, toAddZero : true}, x: 1242, y: 706},
                        {name: "element5", type: "AnimatedSprite", animation : {prefix : "Coin_3_", postfix: "", start : 0, end : 44, toAddZero : true}, x: 1585, y: 706},

                    ]
                },
                {name : "buyBonusBtn", type : "Comp", class : "BuyBonusButton", x : -500, y : 560, px : 150, py : -140, lx : -520, ly : 560,
                    Elements : [
                        {name : "btn", type : "Button", images : ["buyBonusBtnBG", "buyBonusBtnBG", "buyBonusBtnBG"]},
                        {name : "msgText", type : "Text", content : "buyFreeSpinText", style : "buyBonusStyle", anchor : {x : 0.5, y : 0.5}},
                        {name : "valueText", type : "Text", contentText : "0", style : "buyBonusAmountStyle", anchor : {x : 0.5, y : 0.5}}
                      ]
                }

            ],
            layoutData : {
                "Desktop" : {hAlign : "center", vAlign : "middle", widthPerc : 0.65, heightPerc : 1},
                "Portrait" : {hAlign : "center", vAlign : "top"},
                "Landscape" : {hAlign : "center", vAlign : "top", widthPerc: 0.9},
            }

}
