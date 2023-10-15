export const SLOT_BG_CONFIG = {
    name: "bgComp", type: "Comp", class: "RTGameBGComp", resizeChildren: true,
    Elements: [
        {
            name: "maingamebg", type: "DualImage", image: "gamebg",
            layoutData: {
                "Desktop": { hAlign: "center", vAlign: "top", fitToScreen: true },
                "Portrait": { hAlign: "left", vAlign: "bottom", fitToScreen: true },
                "Landscape": { hAlign: "center", vAlign: "bottom", fitToScreen: true },
            }
        },
        {
            name: "splashbg", type: "DualImage", image: "gamebg",
            layoutData: {
                "Desktop": { hAlign: "center", vAlign: "top", fitToScreen: true },
                "Portrait": { hAlign: "center", vAlign: "top", fitToScreen: true },
                "Landscape": { hAlign: "center", vAlign: "top", fitToScreen: true },
            }
        },

    ]

}
