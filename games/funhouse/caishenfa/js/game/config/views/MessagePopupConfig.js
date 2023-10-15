export const MESSAGE_POPUP_CONFIG = {
    name :"popupComp", type : "Comp", class : "MessagePopupView",
    Elements : [
        {name : "bg", type : "Graphics", width : 2560, height : 1440, color : 0x000000, alpha : 0.5},
        {name : "popup", type : "Comp", class : "PopupComp",
        Elements : [
            {name :"popupbg", type : "Sprite", image : "Genric"},
            {name :"popupbg2", type : "Sprite", image : "popupbg", visible: false},
            {name : "titleText", type : "Text", contentText : "", style : "PopupTitleStyle", anchor : {x: 0.5, y : 0.5}, x : 665, y : 170},
            {name : "message1", type : "Text", contentText : "", style : "PopupMessage1Style",fontSize : 50, anchor : {x: 0.5, y : 0.5}, x : 660, y : 320},
            {name : "message3", type : "Text", contentText : "", style : "PopupTitleStyle", fontSize : 70,  anchor : {x: 0.5, y : 0.5}, x : 670, y : 440},
            {name : "message2", type : "Text", contentText : "", style : "PopupMessage1Style", fontSize : 50, fontSize2: 50 , anchor : {x: 0.5, y : 0.5}, x : 673, y : 560},
            {name : "okBtn", type : "Button", images : ["gameOkBtn_up", "gameOkBtn_up", "gameOkBtn_up"], anchor : {x: 0.5, y : 0.5}, x : 565, y : 650},
        ]}
    ],
    layoutData : {
        "Desktop" : {hAlign : "left", vAlign : "top", widthPerc : 0.5, heightPerc : 0.5},
        "Portrait" : {hAlign : "left", vAlign : "top", widthPerc : 1, heightPerc : 0.8},
        "Landscape" : {hAlign : "left", vAlign : "top", widthPerc : 0.8, heightPerc : 0.8},
    }

}
