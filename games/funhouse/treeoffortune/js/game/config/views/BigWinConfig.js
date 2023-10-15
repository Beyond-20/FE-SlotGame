export const BIG_WIN_CONFIG = {
    name: "bigwinComp", type: "Comp", class: "GameBigWinComp",
    Elements: [
        { name: "modalRect", type: "Graphics", width: 100, height: 100, color: 0x000000, alpha: 0.66 },
        {
            name: "coinFallAnimation", type: "Comp", class: "CoinFallAnimation", xPos: 660, yPos: 770, fallType: 2,
            animations: [
                { name: "coinfall", type: "AnimatedSprite", animation: { prefix: "coin_000", postfix: "", start: 0, end: 7, toAddZero: true }, scaleEnd: 0.1, scaleStart: 0.12 },
                { name: "coinfall", type: "AnimatedSprite", animation: { prefix: "coin2_000", postfix: "", start: 0, end: 7, toAddZero: true }, scaleEnd: 0.01, scaleStart: 0.12 }
            ]

        },
        {
            name: "winAmountComp", type: "Comp", class: "SlotWinAmountSequentialSpineCompV2", x: 0, y: 50, yPadding: 0, loopAfterEnd: false,
            textData: {
                "win": { fontSize: 120 },
                "bigWin": { fontSize: 150 },
                "megaWin": { fontSize: 150 },
                "superbWin": { fontSize: 150 },
                "unbelievableWin": { fontSize: 150 },
            },
            States: ["animation", "animation", "animation", "animation", "animation"],
            Elements: [
                { name: "guideRect", type: "Graphics", width: 1200, height: 600, color: 0xffff00, alpha: 1 },
                { name: "glowWinNumbersAnim", type: "Spine", spineName: "Mega Win merged", defaultState: "glow win numbers", start: "glow win numbers", idleState: "glow win numbers", end: "glow win numbers", loop: true, scale: 0.55, yPaddingPerc: 0.12 },
                { name: "bigwinbg", type: "Sprite", image: "winPanel", y: 75, scale: { x: 0.5, y: 0.5 } },
                { name: "bigAnim", type: "Spine", spineName: "Mega Win merged", defaultState: "big win loop", start: "big win start", idleState: "big win loop", end: "big win end", loop: true, scale: 0.45, yPaddingPerc: 0.12 },
                { name: "megaAnim", type: "Spine", spineName: "Mega Win merged", defaultState: "mega win loop", start: "mega win start", idleState: "mega win loop", end: "mega win end", loop: true, scale: 0.5, yPaddingPerc: 0.12 },
                { name: "superbAnim", type: "Spine", spineName: "Mega Win merged", defaultState: "superb loop", start: "superb start", idleState: "superb loop", end: "superb end", loop: true, scale: 0.55, yPaddingPerc: 0.12 },
                { name: "unbelievableWinAnim", type: "Spine", spineName: "Mega Win merged", defaultState: "unb loop", start: "unb start", idleState: "unb loop", end: "unb end", loop: true, scale: 0.55, yPaddingPerc: 0.12 },
                { name: "winText", type: "Text", style: "winAmountStyle", anchor: { x: 0.5, y: 0.5 }, x: 610, y: 200 }
            ]
        },


    ],


}
