export const BONUS_GAME_CONFIG = {
    name :"bonusComp", type : "Comp", class : "BonusGame", resizeChildren : true,
        Elements : [
            {name : "bonusgamebg", type : "Sprite", image : "bonusgame_bg",
                layoutData : {
                    "Desktop" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                    "Portrait" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                    "Landscape" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                }
            },
            {name :"bonusContainer", type : "Comp", class : "PixiContainer",
                Elements: [
                    {name : "guideRect", type : "Graphics", pwidth : 1180, pheight : 1550, color : 0xffcccc, width : 2076, height : 1280},
                    {name : "topPanel", type : "Comp", class : "PixiContainer", x : 442, y : 0, px : 0, py : 0,
                        Elements : [
                            {name : "frame", type : "Sprite", image : "topframe"},
                            {name : "bonusTitle", type : "Sprite", image : "bonusTitle", x : 186, y : 28},
                            {name : "instrText", type : "Text", content : "bonusInstruction", fontSize : 50, mFontSize : 50, style : "bonusInstructionStyle", anchor : {x:0.5, y : 0}, x : 598 , y : 140},
                        ]
                    },
                    {name : "frame", type : "Sprite", image : "bonusFrame", x : 328, y : 170},
                    {name : "leftPanel", type : "Comp", class : "PixiContainer", x : 0, y : 510, px : 100, py : 200,
                        Elements : [
                            {name : "frame", type : "Sprite", image : "leftframe"},
                            {name : "creditPrizeTitle", type : "Text", content : "creditPrizeTitle", style : "prizeTitleStyle", fontSize : 56, anchor : {x:0.5, y : 0}, x : 230, y : 26},
                            {name : "creditMsgText", type : "Text", content : "creditMsgText", style : "prizeMsgStyle", fontSize : 32, anchor : {x:0.5, y : 0}, x : 230, y : 88},
                            {name : "awardMaxText", type : "Text", content : "maxText", style : "minmaxTextStyle", fontSize : 44, anchor : {x:0.5, y : 0}, x : 230, y : 180},
                            {name : "awardMaxValueText", type : "Text", contentText : "1000", style : "awardValueStyle", fontSize : 50, anchor : {x:0.5, y : 0}, x : 230, y : 244},
                            {name : "toText", type : "Text", content : "toText", style : "minmaxTextStyle", fontSize : 44, anchor : {x:0.5, y : 0}, x : 222, y : 318},
                            {name : "awardMinText", type : "Text", content : "minText", style : "minmaxTextStyle", fontSize : 44, anchor : {x:0.5, y : 0}, x : 230, y : 360},
                            {name : "awardMinValueText", type : "Text", contentText : "222", style : "awardValueStyle", fontSize : 50, anchor : {x:0.5, y : 0}, x : 230, y : 428},
                            {name : "creditsText", type : "Text", content : "creditsText", style : "minmaxTextStyle", fontSize : 46, anchor : {x:0.5, y : 0}, x : 230, y : 500},
                        ]
                    },
                    {name: "rightPanel", type: "Comp", class: "PixiContainer", x: 1612, y: 510, px : 620, py : 200,
                        Elements: [
                            {name : "frame", type : "Sprite", image : "rightframe"},
                            {name : "fsPrizeTitle", type : "Text", content : "freeGameText", style : "prizeTitleStyle", fontSize : 56, anchor : {x:0.5, y : 0}, x : 234, y : 42},
                            {name : "fsMultiValueText", type : "Text", contentText : "5x", style : "minmaxTextStyle", fontSize : 44, anchor : {x:0.5, y : 0}, x : 234, y : 114},
                            {name : "fsMultiText", type : "Text", content : "mutliplierText", style : "minmaxTextStyle", fontSize : 44, anchor : {x:0.5, y : 0}, x : 234, y : 170},
                            {name : "fsNumberText", type : "Text", contentText : "20", style : "awardValueStyle", fontSize : 66, anchor : {x:0.5, y : 0}, x : 234, y : 235},
                            {name : "fsMsgText", type : "Text", content : "fsMsgText", style : "minmaxTextStyle", fontSize : 44, anchor : {x:0.5, y : 0}, x : 234, y : 360},
                        ]
                    },

                    {name : "loopAnim", type : "AnimatedSprite", animation : {prefix : "scales_loop_00", postfix : "", start : 0, end : 29, toAddZero : true, loop : true}, x : 1046, y : 820, px : 600, py : 1160},
                    {name : "cashWinAnim", type : "AnimatedSprite", animation : {prefix : "win_1_00", postfix : "", start : 0, end : 43, toAddZero : true, loop : false}, x : 1046, y : 820, px : 600, py : 1160},
                    {name : "fsWinAnim", type : "AnimatedSprite", animation : {prefix : "win_2_00", postfix : "", start : 0, end : 43, toAddZero : true, loop : false}, x : 1046, y : 820, px : 600, py : 1160},
                    {name : "cashBtn", type : "Graphics", color : 0xffcccc, width : 600, height : 650, x : 420, y : 520, px : -30, py : 880},
                    {name : "freeBtn", type : "Graphics", color : 0xffcccc, width : 600, height : 650, x : 1040, y : 520, px : 560, py : 880},
                    {name : "winAmountComp", type : "Comp", class : "WinAmountComp", x : 750, y : 958, px : 320, py : 1200,
                        Elements : [
                            {name : "winText", type : "Text", style : "winAmountStyle1", fontSize : 130, mFontSize : 130, anchor : {x : 0.5, y : 0.5}}
                        ]
                    }
                ],
                layoutData : {
                    "Desktop" : {hAlign : "center", vAlign : "middle", widthPerc : 0.9, heightPerc : 0.9},
                    "Portrait" : {hAlign : "center", vAlign : "top", widthPerc: 0.98, vPaddingPerc : 0.2},
                    "Landscape" : {hAlign : "center", vAlign : "top", heightPerc: 0.98},
                }
            }

        ],


}
