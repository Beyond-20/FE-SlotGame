export const BIG_WIN_CONFIG = {
    name: "bigwinComp", type: "Comp", class: "GameBigWinComp",
    Elements: [
        { name: "modalRect", type: "Graphics", width: 100, height: 100, color: 0x000000, alpha: 0.66 },
        {
            name: "winAmountComp", type: "Comp", class: "SlotWinAmountSequentialSpineCompV2", x: 0, y: 50, yPadding: 0, loopAfterEnd: false,
            textData: {
                "win": { fontSize: 120 },
                "bigWin": { fontSize: 150 },
                "hugeWin": { fontSize: 150 },
            },
            States: ["animation", "animation", "animation"],
            Elements: [
                { name: "guideRect", type: "Graphics", width: 1200, height: 600, color: 0xffff00, alpha: 1 },
                { name: "bigAnim", type: "Spine", spineName: "big_win_newspaper", defaultState: "bigwin_idle", start: "bigwin_open", idleState: "bigwin_idle", end: "bigwin_end", loop: false, scale: 0.58, yPaddingPerc: 0.58 },
                { name: "hugeAnim", type: "Spine", spineName: "hugewin_newspaper", defaultState: "bigwin_idle", start: "bigwin_open", idleState: "bigwin_idle", end: "bigwin_end", loop: false, scale: 0.58, yPaddingPerc: 0.58 },
                { name: "winText", type: "Text", style: "winAmountStyle", anchor: { x: 0.5, y: 0.5 }, x: 610, y: 560 }
            ]
        },
    ],
}
