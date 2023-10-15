export const SLOT_BG_CONFIG = {
    name :"bgComp", type : "Comp", class : "GameBGComp", resizeChildren : true,
        Elements : [
            {name : "maingamebg", type : "Sprite", image : "maingame_bg",
                layoutData : {
                    "Desktop" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                    "Portrait" : {hAlign : "left", vAlign : "top", fitToScreen : true},
                    "Landscape" : {hAlign : "left", vAlign : "top", fitToScreen : true},
                }
            },
            {name : "freespinbg", type : "Sprite", image : "baseGameBG_blurred",
                layoutData : {
                    "Desktop" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                    "Portrait" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                    "Landscape" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                }
            }
        ]

}
