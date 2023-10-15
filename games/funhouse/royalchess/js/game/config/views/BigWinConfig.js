export const BIG_WIN_CONFIG = {
    name: "bigwinComp", type: "Comp", class: "GameBigWinComp",
    Elements: [
        { name: "modalRect", type: "Graphics", width: 100, height: 100, color: 0x000000, alpha: 0.66 },
        {
            name: "winAmountComp", type: "Comp", class: "SlotWinAmountSequentialSpineComp", x: 0, y: 0, yPadding: 20, loopAfterEnd: false,
            textData: {
                "win": { fontSize: 180 },
                "bigWin": { fontSize: 140 },
                "megaWin": { fontSize: 140 },
                "giganticWin": { fontSize: 140 },
                "colossalWin": { fontSize: 140 },
                "unbelievableWin": { fontSize: 140 },
            },
            States: ["animation", "animation", "animation", "animation", "animation"],
            Elements: [
                { name: "guideRect", type: "Graphics", width: 1100, height: 730, color: 0xffff00, x: -13.5, y: 0, alpha: 0 },
                { name: "bigwinbg", type: "Sprite", image: "big_win_number_panel", y: 629, scale: { x: 0.75, y: 0.7 } },
                { name: "bigAnim", type: "Spine", spineName: "popups", defaultState: "big_idle", start: "big_start", idleState: "big_idle", end: "big_end", loop: true, scale: 0.7, yPaddingPerc: 0.53 },
                { name: "megaAnim", type: "Spine", spineName: "popups", defaultState: "mega_idle", start: "mega_start", idleState: "mega_idle", end: "mega_end", loop: true, scale: 0.7, yPaddingPerc: 0.53 },
                { name: "giganticAnim", type: "Spine", spineName: "popups", defaultState: "gigantic_idle", start: "gigantic_start", idleState: "gigantic_idle", end: "gigantic_end", loop: true, scale: 0.7, yPaddingPerc: 0.53 },
                { name: "colossalWinAnim", type: "Spine", spineName: "popups", defaultState: "colossal_idle", start: "colossal_start", idleState: "colossal_idle", end: "colossal_end", loop: true, scale: 0.7, yPaddingPerc: 0.53 },
                { name: "unbelievableWinAnim", type: "Spine", spineName: "popups", defaultState: "unbelievable_idle", start: "unbelievable_start", idleState: "unbelievable_idle", end: "unbelievable_end", loop: true, scale: 0.75, yPaddingPerc: 0.53 },
                { name: "winText", type: "Text", style: "winAmountStyle", zoomScale: 1.2, anchor: { x: 0.5, y: 0.5 }, x: 553, y: 686 }
            ]
        },
    ],
    layoutData: {
        Desktop: { x: 533, y: 108 }
    }

}
