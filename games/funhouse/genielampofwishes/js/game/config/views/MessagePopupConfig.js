export const MESSAGE_POPUP_CONFIG = {
    name: "popupComp", type: "Comp", class: "MessagePopupView",
    Elements: [
        { name: "bg", type: "Graphics", width: 2560, height: 1440, color: 0x000000, alpha: 0.8 },
        {
            name: "popup", type: "Comp", class: "PopupComp",
            Elements: [
                { name: "popupbg", type: "Sprite", image: "popupbg" },
                { name: "titleText", type: "Text", contentText: "", style: "PopupTitleStyle", anchor: { x: 0.5, y: 0.5 }, x: 905, y: 220 },
                { name: "message1", type: "Text", contentText: "", style: "PopupMessage1Style", fontSize: 70, anchor: { x: 0.5, y: 0.5 }, x: 890, y: 420 },
                { name: "message3", type: "Text", contentText: "", style: "PopupTitleStyle", fontSize: 900, anchor: { x: 0.5, y: 0.5 }, x: 890, y: 520 },
                { name: "message2", type: "Text", contentText: "", style: "PopupMessage1Style", fontSize: 100, fontSize2: 50, anchor: { x: 0.5, y: 0.5 }, x: 890, y: 560 },
                {
                    name: "okBtn", type: "ButtonV2", images: ["gameOkBtn_up", "gameOkBtn_up", "gameOkBtn_up"], anchor: { x: 0.5, y: 0.5 }, x: 774, y: 705,
                    textConfig: { name: "btnText", type: "Text", content: "okText", style: "gameFont1Style", fontSize: 70, vPadding : -10, fontColor: ["0xfee15c", "0xfed53d", "0xfff669", "0xffffd2", "0xffe884", "0xfed53d", "0xfee15c"] },
                },
            ]
        }

    ],
    layoutData: {
        "Desktop": { hAlign: "left", vAlign: "top", widthPerc: 0.8, heightPerc: 0.8 },
        "Portrait": { hAlign: "left", vAlign: "top", widthPerc: 1, heightPerc: 0.8 },
        "Landscape": { hAlign: "left", vAlign: "top", widthPerc: 0.8, heightPerc: 0.8 },
    }

}
