export const GAME_SLOT_PANEL_CONFIG = {
    name: "slotPanelComp", type: "Comp", class: "SlotPanelCompV2",
    Elements: [
        { name: "panelBG", type: "Sprite", image: "desktopPanelbg", x: 0, y: 0 },
        { name: "ptPanelBG", type: "Sprite", image: "mobilePPanelBG", x: 0, y: 0 },
        { name: "ptbuttonsBG", type: "Graphics", width: 894, height: 120, color: 0x000000, alpha: 0.6 },
        { name: "lsbuttonsBG", type: "Graphics", width: 858, height: 140, color: 0x000000, alpha: 0.6 },
        { name: "spinBtn", type: "Comp", class: "SpinButtonV2", images: ["bigCircleButton_up", "bigCircleButton_over", "bigCircleButton_down"], icon: ["spinIcon", "spinIcon", "spinIcon"], x: 2134, y: -65 },
        { name: "stopspinBtn", type: "Comp", class: "SpinButtonV2", images: ["bigCircleButton_up", "bigCircleButton_over", "bigCircleButton_down"], icon: ["stopspinIcon", "stopspinIcon", "stopspinIcon"], x: 2134, y: -65 },
        { name: "autospinBtn", type: "Button", images: ["smallCircleButton_up", "smallCircleButton_over", "smallCircleButton_down"], icon: ["autospinIcon", "autospinIcon", "autospinIcon"], x: 2394, y: 80 },
        { name: "autoStopBtn", type: "Button", images: ["smallCircleButton_up", "smallCircleButton_over", "smallCircleButton_down"], icon: ["autostopIcon", "autostopIcon", "autostopIcon"], x: 2394, y: 80 },
        { name: "turboBtn", type: "Button", images: ["smallCircleButton_up", "smallCircleButton_over", "smallCircleButton_down"], icon: ["turboIcon", "turboIcon", "turboIcon"], x: 2002, y: 80 },
        { name: "turboSelectedBtn", type: "Button", images: ["smallCircleButton_up", "smallCircleButton_over", "smallCircleButton_down"], icon: ["turboOnIcon", "turboOnIcon", "turboOnIcon"], x: 2002, y: 80 },
        { name: "betBtn", type: "Button", images: ["smallCircleButton_up", "smallCircleButton_over", "smallCircleButton_down"], icon: ["betIcon", "betIcon", "betIcon"], x: 20, y: 60 },
        { name: "menuBtn", type: "Button", images: ["smallCircleButton_up", "smallCircleButton_over", "smallCircleButton_down"], icon: ["menuIcon", "menuIcon", "menuIcon"], x: 20, y: 60 },
        { name: "autoCounterBG", type: "Sprite", image: "bigCircleButton_up", x: 2134, y: -65 },
        { name: "autoCounterText", type: "Text", contentText: "45", style: "commonFontStyle", fontSize: 70, mFontSize: 100, anchor: { x: 0.5, y: 0.5 } },
        { name: "exitMBtn", type: "Button", images: ["smallerCircleButton_up", "smallerCircleButton_over", "smallerCircleButton_down"], icon: ["smallExitIcon", "smallExitIcon", "smallExitIcon"], x: 0, y: 0 },
        { name: "settingsMBtn", type: "Button", images: ["smallerCircleButton_up", "smallerCircleButton_over", "smallerCircleButton_down"], icon: ["settingsSmallBtn", "settingsSmallBtn", "settingsSmallBtn"], x: 0, y: 0 },
        { name: "infoMBtn", type: "Button", images: ["smallerCircleButton_up", "smallerCircleButton_over", "smallerCircleButton_down"], icon: ["smallInfoIcon", "smallInfoIcon", "smallInfoIcon"], x: 0, y: 0 },
        { name: "rulesMBtn", type: "Button", images: ["smallerCircleButton_up", "smallerCircleButton_over", "smallerCircleButton_down"], icon: ["smallHelpIcon", "smallHelpIcon", "smallHelpIcon"], x: 0, y: 0 },
        //{name : "timeMBtn", type : "Button", images : ["smallerCircleButton_up", "smallerCircleButton_over", "smallerCircleButton_down"], icon : ["smallTimeIcon", "smallTimeIcon", "smallTimeIcon"], x : 0, y : 0},
        { name: "settingsBtn", type: "Button", images: ["rectButton_up", "rectButton_over", "rectButton_down"], icon: ["settingsIcon", "settingsIcon", "settingsIcon"], x: 44, y: 60 },
        { name: "infoBtn", type: "Button", images: ["rectButton_up", "rectButton_over", "rectButton_down"], icon: ["paytableIcon", "paytableIcon", "paytableIcon"], x: 182, y: 60 },
        {
            name: "balanceComp", type: "Comp", class: "BalanceCompV2", x: 1816, y: 20,
            Elements: [
                { name: "clickBG", type: "Graphics", width: 280, height: 120, color: 0xff0000, x: -140, alpha: 0 },
                { name: "titleText", type: "Text", content: "balanceCaps", style: "commonFontStyle", fontSize: 34, mFontSize: 40, anchor: { x: 0.5, y: 0 } },
                { name: "valueText", type: "Text", contentText: "", style: "commonFontStyle", fontSize: 34, mFontSize: 48, anchor: { x: 0.5, y: 0 }, y: 62, my: 64 }
            ]
        },
        {
            name: "winComp", type: "Comp", class: "PanelWinCompV2", x: 944, y: 46,
            Elements: [
                { name: "winBG", type: "Sprite", image: "winbg", portraitimage: "winbgPortrait", landscapeimage: "winbgLandscape" },
                { name: "lineWinText", type: "Text", contentText: "", style: "commonFontStyle", fontSize: 28, mFontSize: 30, anchor: { x: 0.5, y: 0 }, y: 20, my: 16 },
                { name: "valueText", type: "Text", contentText: "0", style: "commonFontStyle", fontSize: 42, mFontSize: 40, anchor: { x: 0.5, y: 0 }, y: 20, my: 16 }
            ]
        },
        {
            name: "fsWinComp", type: "Comp", class: "FSPanelWinCompV2", x: 934, y: 40,
            Elements: [
                { name: "winBG", type: "Sprite", image: "winbg", portraitimage: "winbgPortrait", landscapeimage: "winbgLandscape" },
                { name: "totalWinText", type: "Text", contentText: "0", style: "commonFontStyle", fontSize: 42, mFontSize: 54, anchor: { x: 0.5, y: 0 }, y: -32, my: 16 },
                { name: "valueText", type: "Text", contentText: "0", style: "commonFontStyle", fontSize: 36, mFontSize: 40, anchor: { x: 0.5, y: 0 }, y: 20, my: 16 }
            ]
        },
        {
            name: "stakeComp", type: "Comp", class: "StakeCompV2", x: 620, y: 20,
            Elements: [
                { name: "clickBG", type: "Graphics", width: 260, height: 120, color: 0xff0000, x: -85, alpha: 0 },
                { name: "titleText", type: "Text", content: "totalBetsCaps", style: "commonFontStyle", fontSize: 34, mFontSize: 40, anchor: { x: 0.5, y: 0 }, x: 48 },
                { name: "valueText", type: "Text", contentText: "", style: "commonFontStyle", fontSize: 34, mFontSize: 48, anchor: { x: 0.5, y: 0 }, y: 62, x: 48, my: 64 },
                { name: "plusBtn", type: "Button", images: ["betIncr_bg_up", "betIncr_bg_over", "betIncr_bg_down"], icon: ["plusIcon", "plusIcon", "plusIcon"], x: 180, y: 34 },
                { name: "minusBtn", type: "Button", images: ["betIncr_bg_up", "betIncr_bg_over", "betIncr_bg_down"], icon: ["minusIcon", "minusIcon", "minusIcon"], x: -150, y: 34 },
            ]
        }
    ],
    layoutData: {
        "Desktop": {},
        "Portrait": { hAlign: "left", vAlign: "top" },
        "Landscape": { hAlign: "left", vAlign: "top" },
    }
}
