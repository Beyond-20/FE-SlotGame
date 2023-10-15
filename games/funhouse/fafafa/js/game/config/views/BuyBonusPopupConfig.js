export const BUY_BONUS_POPUP_CONFIG = {
  name :"popupComp", type : "Comp", class : "BuyBonusView",
  Elements : [
    {name : "bg", type : "Graphics", width : 2560, height : 1440, color : 0x000000, alpha : 0},
    {name : "popup", type : "Comp", class : "BuyBonusPopupComp", y : 0, displayDelay : 1000,
      Elements : [
        {name : "guideRect", type : "Graphics", width : 1200, height : 880, color : 0xFFFF00, alpha : 0},
        {name :"popupbg", type : "Comp", class : "MultiStateAnimatedSprite", x : 590, y : 480,
            Elements : [
              {name : "openAnim", type : "AnimatedSprite", animation : {prefix : "start_000", postfix: "", start : 1, end : 30, toAddZero : true}},
              {name : "idleAnim", type : "AnimatedSprite", animation : {prefix : "idle_000", postfix: "", start : 31, end : 55, toAddZero : true}},
              {name : "closeAnim", type : "AnimatedSprite", animation : {prefix : "start_000", postfix: "", start : 1, end : 30, toAddZero : true, playReverse : true}},
            ]
        },
        {name : "elements", type : "Comp", class : "PixiContainer",
        Elements : [
          {name : "titleText", type : "Text", contentText : "", style : "buyBonusStyle", fontSize : 120, mFontSize : 132, wordWrapWidth : 700, anchor : {x: 0.5, y : 0.5}, x : 592, y : 340},
          {name : "message1", type : "Text", contentText : "", style : "buyBonusAmountStyle", fontSize : 100, mFontSize : 100, wordWrapWidth : 800, anchor : {x: 0.5, y : 0.5}, x : 594, y : 540},
          {name : "message2", type : "Text", contentText : "", style : "PopupMessage1Style", anchor : {x: 0.5, y : 0.5}, x : 594, y : 480},
          {name : "okBtn", type : "Button", images : ["acceptBtn_up", "acceptBtn_up", "acceptBtn_down"], anchor : {x: 0.5, y : 0.5}, x : 660, y : 680},
          {name : "cancelBtn", type : "Button", images : ["rejectBtn_up", "rejectBtn_up", "rejectBtn_down"], anchor : {x: 0.5, y : 0.5}, x : 420, y : 680},
        ]},

      ]}

  ],
  layoutData : {
    "Desktop" : {hAlign : "left", vAlign : "top", widthPerc : 1, heightPerc : 1},
    "Portrait" : {hAlign : "left", vAlign : "top", widthPerc : 1, heightPerc : 0.8},
    "Landscape" : {hAlign : "left", vAlign : "top", widthPerc : 0.8, heightPerc : 1},
  }

}
