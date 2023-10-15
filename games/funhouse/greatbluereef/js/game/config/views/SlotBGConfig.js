export const SLOT_BG_CONFIG = {
    name :"bgComp", type : "Comp", class : "GameBGComp", resizeChildren : true,
        Elements : [
            {name : "maingamebg", type : "DualImage", image : "baseGameBG",
                layoutData : {
                    "Desktop" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                    "Portrait" : {hAlign : "left", vAlign : "top", fitToScreen : true},
                    "Landscape" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                }
            },
            {name : "freespinbg", type : "DualImage", image : "freeSpinsBG",
                layoutData : {
                    "Desktop" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                    "Portrait" : {hAlign : "left", vAlign : "top", fitToScreen : true},
                    "Landscape" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                }
            },
            {name : "splashbg", type : "DualImage", image : "splashBG",
                layoutData : {
                    "Desktop" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                    "Portrait" : {hAlign : "left", vAlign : "top", fitToScreen : true},
                    "Landscape" : {hAlign : "center", vAlign : "top", fitToScreen : true},
                }
            }
        ]

}
