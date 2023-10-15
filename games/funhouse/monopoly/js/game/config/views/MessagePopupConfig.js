export const MESSAGE_POPUP_CONFIG = {
    name: "popupComp", type: "Comp", class: "MessagePopupView",
    Elements: [
        { name: "bg", type: "Graphics", width: 2560, height: 1440, color: 0x000000, alpha: 0.8 },
        {
            name: "popup", type: "Comp", class: "PopupComp",
            Elements: [
                { name: "popupbg", type: "DualImage", image: "popUpBg" },
                { name: "titleText", type: "Text", contentText: "", style: "PopupMessage3Style", fontSize: 100, anchor: { x: 0.5, y: 0.5 }, x: 1300, y: 500 },
                { name: "message1", type: "Text", contentText: "", style: "PopupMessage3Style", fontSize: 70, anchor: { x: 0.5, y: 0.5 }, x: 1300, y: 600 },
                { name: "message3", type: "Text", contentText: "", style: "PopupTitleStyle", fontSize: 900, anchor: { x: 0.5, y: 0.5 }, x: 1300, y: 750 },
                { name: "message2", type: "Text", contentText: "", style: "PopupMessage1Style", fontSize: 100, fontSize2: 50, anchor: { x: 0.5, y: 0.5 }, x: 1300, y: 760 },
                {
                    name: "okBtn", type: "ButtonV2", images: ["Btn_Off", "Btn_On", "Btn_Off"], anchor: { x: 0.5, y: 0.5 }, x: 1150, y: 1000,
                    textConfig: { name: "btnText", type: "Text", content: "okText", style: "gameFont1Style", fontSize: 70, vPadding: 0, fontColor: ["0xfee15c", "0xfed53d", "0xfff669", "0xffffd2", "0xffe884", "0xfed53d", "0xfee15c"] },
                },
            ]
        }

    ],
    layoutData: {
        "Desktop": { hAlign: "left", vAlign: "top", fitToScreen: true },
        "Portrait": { hAlign: "left", vAlign: "bottom", fitToScreen: true },
        "Landscape": { hAlign: "left", vAlign: "top", fitToScreen: true },
    }

}
