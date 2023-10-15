export const MESSAGE_POPUP_CONFIG = {
    name :"popupComp", type : "Comp", class : "MessagePopupView",
    Elements : [
        {name : "bg", type : "Graphics", width : 2560, height : 1440, color : 0x000000, alpha : 0.8},
        {name : "popup", type : "Comp", class : "PopupComp",
        Elements : [
            {name :"popupbg", type : "Sprite", image : "popupbg"},
            {name : "titleText", type : "Text", contentText : "", style : "PopupTitleStyle", anchor : {x: 0.5, y : 0.5}, x : 620, y : 150},
            {name : "message1", type : "Text", contentText : "", style : "PopupMessage1Style", anchor : {x: 0.5, y : 0.5}, x : 620, y : 280},
            {name : "message3", type : "Text", contentText : "", style : "PopupTitleStyle", fontSize : 70, anchor : {x: 0.5, y : 0.5}, x : 620, y : 360},
            {name : "message2", type : "Text", contentText : "", style : "PopupMessage1Style", anchor : {x: 0.5, y : 0.5}, x : 620, y : 440},
            {name : "okBtn", type : "Button", images : ["gameOkBtn_up", "gameOkBtn_up", "gameOkBtn_up"], anchor : {x: 0.5, y : 0.5}, x : 510, y : 500,
                textConfig : {name : "btnText", type : "Text", content : "okText", style : "gameFont1Style", fontSize : 40, mFontSize : 70, fontColor : ["0x864201", "0xffc100", "0xffec43", "0xffff9e", "0xffff34", "0xffdf0b", "0xffb800", "0xf99900"]},
            },
        ]}

    ],
    layoutData : {
        "Desktop" : {hAlign : "left", vAlign : "top", widthPerc : 0.8, heightPerc : 0.8},
        "Portrait" : {hAlign : "left", vAlign : "top", widthPerc : 1, heightPerc : 0.8},
        "Landscape" : {hAlign : "left", vAlign : "top", widthPerc : 0.8, heightPerc : 0.9},
    }

}
