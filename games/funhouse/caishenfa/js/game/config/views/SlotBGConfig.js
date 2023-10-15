export const SLOT_BG_CONFIG = {
    name :"bgComp", type : "Comp", class : "GameBGComp", resizeChildren : true,
        Elements : [
            {name : "maingamebg", type : "DualImage", image : "baseGameBG",
                layoutData : {
                    "Desktop" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                    "Portrait" : {hAlign : "left", vAlign : "top", fitToScreen : true},
                    "Landscape" : {hAlign : "center", vAlign : "bottom", fitToScreen : true},
                }
            },
            {name : "splashbg", type : "Sprite", image : "baseGameBG",
                layoutData : {
                    "Desktop" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                    "Portrait" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                    "Landscape" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                }
            }
        ]

}
