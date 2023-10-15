export const MESSAGE_POPUP_CONFIG = {
    name: "popupComp", type: "Comp", class: "MessagePopupView",
    Elements: [
        { name: "bg", type: "Graphics", width: 2560, height: 1440, color: 0x000000, alpha: 0.5 },
        {
            name: "popup", type: "Comp", class: "PopupCompV2",
            Elements: [
                { name: "popupbg", type: "Sprite", image: "popup_high" },
                { name: "titleText", type: "Text", contentText: "", style: "PopupTitleStyle", fontSize: 120, anchor: { x: 0.5, y: 0.5 }, x: 749, y: 170 },
                { name: "message1", type: "Text", contentText: "", style: "PopupMessage1Style", fontSize: 80, anchor: { x: 0.5, y: 0.5 }, x: 715, y: 344 },
                { name: "message3", type: "Text", contentText: "", style: "PopupTitleStyle", fontSize: 100, anchor: { x: 0.5, y: 0.5 }, x: 706, y: 472 },
                { name: "message2", type: "Text", contentText: "", style: "PopupMessage1Style", fontSize: 80, anchor: { x: 0.5, y: 0.5 }, x: 725, y: 610 },
                {
                    name: "okBtn", type: "Button", images: ["BUTTON", "BUTTON", "BUTTON"], anchor: { x: 0.5, y: 0.5 }, x: 490, y: 686,
                    textConfig: { name: "btnText", type: "Text", content: "okText", style: "gameFont1Style", fontSize: 60, mFontSize: 70, fontColor: ["0x9a7a00", "0xff7126", "0xff3700", "0xff1900", "0xe30800", "0xc90500", "0xa30300", "0x9a7a00"] },
                },
            ]
        }
    ],
    layoutData: {
        "Desktop": { hAlign: "left", vAlign: "top", widthPerc: 0.5, heightPerc: 0.5 },
        "Portrait": { hAlign: "left", vAlign: "top", widthPerc: 1, heightPerc: 0.8 },
        "Landscape": { hAlign: "left", vAlign: "top", widthPerc: 0.8, heightPerc: 0.8 },
    }

}
