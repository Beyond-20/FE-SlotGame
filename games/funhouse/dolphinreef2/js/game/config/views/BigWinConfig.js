export const BIG_WIN_CONFIG = {
    name: "bigwinComp", type: "Comp", class: "GameBigWinComp",
    Elements: [
        { name: "modalRect", type: "Graphics", width: 100, height: 100, color: 0x000000, alpha: 0.66 },
        {
            name: "winAmountComp", type: "Comp", class: "SlotWinAmountSequentialSpineComp", x: 0, y: 0, yPadding: 20, loopAfterEnd: false,
            textData: {
                "win": { fontSize: 200 },
                "bigWin": { x: 32, y: 512, fontSize: 160 },
                "megaWin": { x: 28, y: 512, fontSize: 160 },
                "giganticWin": { x: 11, y: 512, fontSize: 160 },
                "colossalWin": { x: 13, y: 512, fontSize: 160 },
                "unbelievableWin": { x: 13, y: 512, fontSize: 160 },
            },
            States: ["animation", "animation", "animation", "animation", "animation"],
            Elements: [
                { name: "guideRect", type: "Graphics", width: 1100, height: 730, color: 0xffff00, x: -13.5, y: 0, alpha: 0 },
                { name: "bigwinbg", type: "Sprite", image: "big_win_number_panel", y: 360, scale: { x: 0.45, y: 0.5 } },
                { name: "bigAnim", type: "Spine", spineName: "popups", defaultState: "big_Idle", start: "big_start", idleState: "big_Idle", end: "big_end", loop: true, scale: 0.5, yPaddingPerc: 0.47 },
                { name: "megaAnim", type: "Spine", spineName: "popups", defaultState: "mega_idle", start: "mega_start", idleState: "mega_idle", end: "mega_end", loop: true, scale: 0.5, yPaddingPerc: 0.47 },
                { name: "giganticAnim", type: "Spine", spineName: "popups", defaultState: "gigantic_idle", start: "gigantic_start", idleState: "gigantic_idle", end: "gigantic_end", loop: true, scale: 0.5, yPaddingPerc: 0.47 },
                { name: "colossalWinAnim", type: "Spine", spineName: "popups", defaultState: "colossal_idle", start: "colossal_start", idleState: "colossal_idle", end: "colossal_end", loop: true, scale: 0.5, yPaddingPerc: 0.47 },
                { name: "unbelievableWinAnim", type: "Spine", spineName: "popups", defaultState: "unbelievable_idle", start: "unbelievable_start", idleState: "unbelievable_idle", end: "unbelievable_end", loop: true, scale: 0.53, yPaddingPerc: 0.47 },
                { name: "winText", type: "Text", style: "winAmountStyle", zoomScale: 1.2, anchor: { x: 0.5, y: 0.5 }, x: 544, y: 320 }
            ]
        },
    ],


}
