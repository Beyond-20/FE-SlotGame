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
                "luckOfTheTrisbWin": { fontSize: 150 },
            },
            States: ["animation", "animation", "animation"],
            Elements: [
                { name: "guideRect", type: "Graphics", width: 1200, height: 600, color: 0xffff00, alpha: 1 },
                { name: "bigAnim", type: "Spine", spineName: "popups", defaultState: "big_win_idle", start: "big_win_start", idleState: "big_win_idle", end: "big_win_end", loop: true, scale: 0.58, yPaddingPerc: 0.58 },
                { name: "hugeAnim", type: "Spine", spineName: "popups", defaultState: "huge_win_idle", start: "huge_win_start", idleState: "huge_win_idle", end: "huge_win_end", loop: true, scale: 0.58, yPaddingPerc: 0.58 },
                { name: "luckOfTheTrisbAnim", type: "Spine", spineName: "popups", defaultState: "luck_of_the_trisb_win_idle", start: "luck_of_the_trisb_win_start", idleState: "luck_of_the_trisb_win_idle", end: "luck_of_the_trisb_win_end", loop: true, scale: 0.58, yPaddingPerc: 0.58 },
                { name: "winText", type: "Text", style: "winAmountStyle", anchor: { x: 0.5, y: 0.5 }, x: 610, y: 525 }
            ]
        },
    ],
}
