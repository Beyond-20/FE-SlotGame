export const BONUS_GAME_CONFIG = {
    name :"bonusComp", type : "Comp", class : "BonusGame", resizeChildren : true,
        Elements : [
            {name: "bgContainer", type: "Comp", class: "PixiContainer",
                Elements: [
                    {name: "bonusgamebg", type: "Sprite", image: "maingame_bg"}
                ],
                layoutData : {
                    "Desktop" : {hAlign : "center", vAlign : "bottom", fitToScreen : true},
                    "Portrait" : {hAlign : "center", vAlign : "bottom", fitToScreen : true},
                    "Landscape" : {hAlign : "center", vAlign : "bottom", fitToScreen : true},
                }
            },
            {name :"bonusContainer", type : "Comp", class : "PixiContainer", resizeChildren : true,
                Elements: [
                    {name : "guideRect", type : "Graphics", color : 0xff0000, width : 2570, height : 1455, pwidth : 1455, pheight : 2580, lwidth: 2570, lheight:1455, alpha : 0},
                    //{name : "frame", type : "Sprite", image : "bonusFrame", x : 328, y : 170},
                    //left frame
                    {name : "frameL", type : "DualImage", image : "leftframe", x :-20, y : 418, px : 35, py : 480, lx:-20, ly: 418},
                    {name : "leftPanel", type : "Comp", class : "PixiContainer", x :-20, y : 418, px : 125, py : 480, lx:-20, ly: 418, 
                        Elements : [
                            {name : "creditPrizeTitle", type : "Text", content : "creditPrizeTitle", style : "prizeTitleStyle",fontColor:["0x00923b","0x4fe789","0x0b9f4c","0x5ef193","0x069c4c"], fontSize : 58, anchor : {x:0.5, y : 0}, x : 270, y : 78},
                            {name : "creditMsgText", type : "Text", content : "creditMsgText", style : "prizeMsgStyle", fontSize : 37, anchor : {x:0.5, y : 0}, x : 270, y : 148},
                            {name : "awardMaxText", type : "Text", content : "maxText", style : "minmaxTextStyle",fontColor : ["8B8000"], fontSize : 49, anchor : {x:0.5, y : 0}, x : 270, y : 258},
                            {name : "awardMaxValueText", type : "Text", contentText : "1000", style : "awardValueStyle",fontColor:["0x00923b","0x4fe789","0x0b9f4c","0x5ef193","0x069c4c"], fontSize : 66, anchor : {x:0.5, y : 0}, x : 270, y : 350},
                            {name : "toText", type : "Text", content : "toText", style : "minmaxTextStyle",fontColor : ["8B8000"], fontSize : 49, anchor : {x:0.5, y : 0}, x : 262, y : 467},
                            {name : "awardMinText", type : "Text", content : "minText", style : "minmaxTextStyle",fontColor : ["8B8000"], fontSize : 49, anchor : {x:0.5, y : 0}, x : 270, y : 528},
                            {name : "awardMinValueText", type : "Text", contentText : "222", style : "awardValueStyle",fontColor:["0x00923b","0x4fe789","0x0b9f4c","0x5ef193","0x069c4c"], fontSize : 66, anchor : {x:0.5, y : 0}, x : 270, y : 618},
                            {name : "creditsText", type : "Text", content : "creditsText", style : "minmaxTextStyle",fontColor : ["8B8000"], fontSize : 53, anchor : {x:0.5, y : 0}, x : 270, y : 724},
                        ]
                    },
                    //right frame
                    {name : "frameR", type : "DualImage", image : "rightframe", x: 1955, y: 418, px : 790, py : 480,lx: 1955, ly: 418},
                    {name: "rightPanel", type: "Comp", class: "PixiContainer", x: 1955, y: 418, px : 705, py : 480,lx: 1955, ly: 418,
                        Elements: [
                            {name : "fsPrizeTitle", type : "Text", content : "freeGameText", style : "prizeTitleStyle",fontColor:["0x00923b","0x4fe789","0x0b9f4c","0x5ef193","0x069c4c"], fontSize : 58, anchor : {x:0.5, y : 0}, x : 360, y : 78},
                            {name : "fsMultiValueText", type : "Text", contentText : "5x", style : "minmaxTextStyle",fontColor : ["8B8000"], fontSize : 49, anchor : {x:0.5, y : 0}, x : 360, y : 164},
                            {name : "fsMultiText", type : "Text", content : "mutliplierText", style : "minmaxTextStyle",fontColor : ["8B8000"], fontSize : 49, anchor : {x:0.5, y : 0}, x : 360, y : 220},
                            {name : "fsNumberText", type : "Text", contentText : "20", style : "awardValueStyle", fontColor:["0x00923b","0x4fe789","0x0b9f4c","0x5ef193","0x069c4c"],fontSize : 86, anchor : {x:0.5, y : 0}, x : 360, y : 350},
                            {name : "fsMsgText", type : "Text", content : "fsMsgText", style : "minmaxTextStyle",fontColor : ["8B8000"], fontSize : 46, anchor : {x:0.5, y : 0}, x : 360, y : 560},
                        ]
                    },
                    //top panel
                    {name : "frame", type : "DualImage", image : "bonusFrame", x : 0, y : 0, px : 6, py : 0,lx:0, ly:0},
                    {name : "topPanel", type : "Comp", class : "PixiContainer", x : 0, y : 0, px : 930, py : 180,lx:0, ly:0,
                        Elements : [
                            {name : "bonusTitle", type : "Sprite", image : "bonusTitle", x :894, y :184, px:-600, py:0, lx: 894, ly:184},
                            {name : "instrText", type : "Text", content : "bonusInstruction",fontColor : ["0x864201", "0xffc100", "0xffec43", "0xffff9e", "0xffff34", "0xffdf0b", "0xffb800", "0xf99900"], fontSize : 57, mFontSize : 50, style : "bonusInstructionStyle", anchor : {x:0.5, y : 0}, x : 1280 , y : 380, px: -230, py:210, lx: 1280, ly:380},
                        ]
                    },

                    {name : "loopAnim", type : "Sprite", image: "bagElements", x : 695, y : 540, px :140, py : 1600,lx:695, ly:540},
                    {name : "cashWinAnim", type : "Spine", spineName: "bonus", defaultState : "win_idle", x : 1046, y : 800, px : 550, py : 1890, lx:1046, ly:800},
                    {name : "fsWinAnim", type : "Spine", spineName: "bonus", defaultState : "win_stop", x : 1600, y : 820, px : 1100, py : 1890,lx:1600,ly:820},
                    {name : "cashBtn", type : "Graphics", color : 0xffcccc, width : 505, height : 520, x : 690, y : 540, px : 150, py : 1600,lx:690, ly:540},
                    {name : "freeBtn", type : "Graphics", color : 0xffcccc, width : 505, height : 520, x : 1370, y : 540, px : 810, py : 1600,lx:1370, ly:540},
                    {name : "winAmountComp", type : "Comp", class : "WinAmountComp", x : 950, y : 778, px : 440, py : 1880, lx:950, ly:778,
                        Elements : [
                            {name : "winText", type : "Text", style : "winAmountStyle1", fontSize : 130, mFontSize : 130, anchor : {x : 0.5, y : 0.5}}
                        ]
                    }
                ],
                layoutData : {
                    "Desktop" : {hAlign : "center", vAlign : "middle", widthPerc : 1, heightPerc :1},
                    "Portrait" : {hAlign : "center", vAlign : "middle", widthPerc: 1, vPaddingPerc : 0},
                    "Landscape" : {hAlign : "center", vAlign : "top", heightPerc: 0.98},
                }
            }

        ],
}
