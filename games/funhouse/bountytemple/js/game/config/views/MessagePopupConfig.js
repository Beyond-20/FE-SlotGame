export const MESSAGE_POPUP_CONFIG = {
    name :"popupComp", type : "Comp", class : "MessagePopupView",
    Elements : [
        {name : "bg", type : "Graphics", width : 2560, height : 1440, color : 0x000000, alpha : 0.8},
        {name : "popup", type : "Comp", class : "PopupComp",
        Elements : [
            {name :"popupbg", type : "Sprite", image : "popupbg"},
            {name : "titleText", type : "Text", contentText : "", style : "PopupTitleStyle", anchor : {x: 0.5, y : 0.5}, x : 945, y : 300},
            {name : "message1", type : "Text", contentText : "", style : "PopupMessage1Style",fontSize : 150, anchor : {x: 0.5, y : 0.5}, x : 890, y : 590},
            {name : "message3", type : "Text", contentText : "", style : "PopupTitleStyle", fontSize : 170,  anchor : {x: 0.5, y : 0.5}, x : 890, y : 640},
            {name : "message2", type : "Text", contentText : "", style : "PopupMessage1Style", fontSize : 150, fontSize2: 50 , anchor : {x: 0.5, y : 0.5}, x : 910, y : 860},
            {name : "okBtn", type : "Button", images : ["gameOkBtn_up", "gameOkBtn_up", "gameOkBtn_up"], anchor : {x: 0.5, y : 0.5}, x : 774, y : 1075,
            textConfig : {name : "btnText", type : "Text", content : "okText", style : "gameFont1Style", fontSize : 60, mFontSize : 70, fontColor : ["0x9a7a00", "0xff7126", "0xff3700", "0xff1900", "0xe30800", "0xc90500", "0xa30300", "0x9a7a00"]},
            },
        ]}

    ],
    layoutData : {
        "Desktop" : {hAlign : "left", vAlign : "top", widthPerc : 0.8, heightPerc : 0.8},
        "Portrait" : {hAlign : "left", vAlign : "top", widthPerc : 1, heightPerc : 0.8},
        "Landscape" : {hAlign : "left", vAlign : "top", widthPerc : 0.8, heightPerc : 0.8},
    }

}
