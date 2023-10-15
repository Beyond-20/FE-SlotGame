export const FS_POPUP_CONFIG = {
    name: "fsPopupComp", type: "Comp", class: "MessagePopupView", resizeChildren: true,
    Elements: [
        { name: "bg", type: "Graphics", width: 2560, height: 1440, color: 0x000000, alpha: 0.5 },
        {
            name: "popup", type: "Comp", class: "PopupCompV2", displayDelay: 1000,
            Elements: [
                { name: "popupbg", type: "Spine", spineName: "pop_up_flag", defaultSkin: "default", defaultState: "", loop: true },
                {
                    name: "celebrationComp", type: "Comp", class: "PixiContainer",
                    Elements: [
                        { name: "celebrationConfetti1", type: "Spine", spineName: "salut", defaultSkin: "default", defaultState: "", loop: true, x: -400, y: -268 },
                        { name: "celebrationConfetti2", type: "Spine", spineName: "salut", defaultSkin: "default", defaultState: "", loop: true, x: 0, y: 0 },
                        { name: "celebrationConfetti3", type: "Spine", spineName: "salut", defaultSkin: "default", defaultState: "", loop: true, x: 400, y: -268 },
                    ]
                },
                {
                    name: "elements", type: "Comp", class: "PixiContainer",
                    Elements: [
                        { name: "message1", type: "Text", contentText: "", style: "PopupMessage1Style", fontSize: 152, anchor: { x: 0.5, y: 0.5 }, x: 0, y: -366 },
                        { name: "message2", type: "Text", contentText: "", style: "PopupValueStyle", fontSize: 243, anchor: { x: 0.5, y: 0.5 }, x: -11, y: -184 },
                        { name: "message3", type: "Text", contentText: "", style: "PopupMessage1Style", fontSize: 147, wordWrap: true, wordWrapWidth: 1200, anchor: { x: 0.5, y: 0.5 }, x: 0, y: 0 },
                        { name: "symbRoyalTxt", type: "Text", content: "royalSymbTxt", style: "PopupMessage3Style", wordWrap: true, wordWrapWidth: 300, fontSize: 54, lineHeight: 44, anchor: { x: 0.5, y: 0.5 }, x: -481, y: -88 },
                        { name: "okBtn", type: "Text", content: "", style: "PopupMessage3Style", toUpperCase: false, wordWrap: true, wordWrapWidth: 1200, fontSize: 50, anchor: { x: 0.5, y: 0.5 }, letterSpacing: 3, x: 0, y: 116 },
                    ]
                },
                {
                    name: "royalSymb", type: "Comp", class: "RoyalSymbComp", x: 511, y: -121,
                    Elements: [
                        { name: "royalSymbExpansionFrame", type: "Spine", spineName: "frames_win", defaultState: "anim1x4", loop: true, scale: 0.48 },
                    ],
                    data: {
                        "WW": { name: "WW", type: "Sprite", image: "WW" },
                        "H1": { name: "H1", type: "Sprite", image: "H1" },
                        "H2": { name: "H2", type: "Sprite", image: "H2" },
                        "H3": { name: "H3", type: "Sprite", image: "H3" },
                        "H4": { name: "H4", type: "Sprite", image: "H4" },
                        "L1": { name: "L1", type: "Sprite", image: "L1" },
                        "L2": { name: "L2", type: "Sprite", image: "L2" },
                        "L3": { name: "L3", type: "Sprite", image: "L3" },
                        "L4": { name: "L4", type: "Sprite", image: "L4" },
                        "L5": { name: "L5", type: "Sprite", image: "L5" },
                    },
                }
            ],

        },
    ],
    layoutData: {
        "Desktop": { hAlign: "left", vAlign: "top", widthPerc: 0.6, heightPerc: 0.6, vPadding: -60 },
        "Portrait": { hAlign: "left", vAlign: "top", widthPerc: 1, heightPerc: 0.8, hPadding: 31 },
        "Landscape": { hAlign: "left", vAlign: "top", widthPerc: 0.8, heightPerc: 0.8, hPadding: -20, vPadding: -160 },
    }
}
