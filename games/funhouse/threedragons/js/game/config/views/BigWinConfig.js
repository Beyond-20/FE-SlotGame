export const BIG_WIN_CONFIG = {
    name: "bigwinComp", type: "Comp", class: "GameBigWinComp",
    Elements: [
        { name: "modalRect", type: "Graphics", width: 100, height: 100, color: 0x000000, alpha: 0 },
        {
            name: "winAmountComp", type: "Comp", class: "SlotSpinWinAnimAmountNoDispatchComp", x: 0, y: 0, yPadding: 20, loopAfterEnd: false,
            Elements: [
                { name: "winText", type: "Text", style: "paytableDescStyle", fontSize: 1, wordWrap: true, wordWrapWidth: 500, lineHeight: 54, anchor: { x: 0.5, y: 0.5 }, x: 2000, y: 0 }
            ],
        },
    ],


}
