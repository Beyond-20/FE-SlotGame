export const NO_PORTRAIT_CONFIG = {
    name: "noPortraitView", type: "Comp", class: "NoPortraitView",
    resizeChildren: true,
    Elements: [
        { name: "modalRect", type: "Graphics", width: 100, height: 100, color: 0x000000, alpha: 1,
            layoutData: {
                "Desktop": { hAlign: "left", vAlign: "top", fitToScreen: true },
                "Portrait": { hAlign: "left", vAlign: "bottom", fitToScreen: true },
                "Landscape": { hAlign: "left", vAlign: "top", fitToScreen: true },
            }
        },
        {name :"anim", type: "AnimatedSprite", animation: { prefix: "SCRrtt 2_000", postfix: "", start: 0, end: 77, toAddZero: true, loop: true},
            anchor: {x: 0.5, y: 0.5},
            layoutData: {
                "Desktop": { hAlign: "left", vAlign: "top", fitToScreen: true },
                "Portrait": { hAlign: "center", vAlign: "middle", widthPerc: 0.8, isForced: true },
                "Landscape": { hAlign: "left", vAlign: "top", fitToScreen: true },
            }
        },


    ],
}
