export const POST_MEGABOARD_SCREEN_CONFIG = {
    name: "postMegaBoardScreenComp", type: "Comp", class: "PostMegaBoardScreenComp", resizeChildren: true,
    Elements: [
        {
            name: "bg", type: "DualImage", image: "winner_feature_bg",
            layoutData: {
                "Desktop": { hAlign: "center", vAlign: "top", fitToScreen: true },
                "Portrait": { hAlign: "center", vAlign: "top", fitToScreen: true },
                "Landscape": { hAlign: "center", vAlign: "top", fitToScreen: true },
            }
        },
        {
            name: "postMegaboardElements", type: "Comp", class: "GameResizeComp",
            Elements: [
                { name: "guideRect", type: "Graphics", color: 0xff0000, width: 2560, height: 1440, alpha: 0 },
                { name: "winnerStage", type: "Sprite", image: "Stand", anchor: { x: 0.5, y: 0 }, x: 1280, y: 1005 },
                { name: "winnerIcon", type: "Sprite", image: "place 0", anchor: { x: 0.5, y: 0 }, x: 1280, y: 650, scale: 1 },
                {
                    name: "winningCupsRotatingComp", type: "Comp", class: "WinningCupsRotatingComp", anchor: { x: 0.5, y: 0 }, x: 280, y: 250,
                    Elements: [
                        { name: "guideRect", type: "Graphics", color: 0xffff00, anchor: { x: 0.5, y: 0.5 }, width: 2000, height: 1100, alpha: 0 },
                        {
                            name: "gold10x", type: "Container", anchor: { x: 0.5, y: 0 }, x: 790, y: 725,
                            Elements: [
                                { name: "goldCup", type: "Sprite", image: "Gold Cup" },
                                { name: "goldCup10xMulitplier", type: "Sprite", image: "cupX10", x: 130, y: 50 },
                                { name: "multiplierx10", type: "Sprite", image: "cupX10", anchor: { x: 0.5, y: 0.5 }, x: 212, y: 89 },
                            ]
                        },
                        {
                            name: "silver5x", type: "Container", anchor: { x: 0.5, y: 0 }, x: 1536, y: 470,
                            Elements: [
                                { name: "silverCup5x", type: "Sprite", image: "Silver Cup", },
                                { name: "silverCup5xMulitplier", type: "Sprite", image: "cupX5", x: 150, y: 50 },
                                { name: "multiplierx5", type: "Sprite", image: "cupX5", anchor: { x: 0.5, y: 0.5 }, x: 209, y: 86 },
                            ]
                        },
                        {
                            name: "silver4x", type: "Container", anchor: { x: 0.5, y: 0 }, x: 1220, y: 100,
                            Elements: [
                                { name: "silverCup4x", type: "Sprite", image: "Silver Cup", },
                                { name: "silverCup4xMulitplier", type: "Sprite", image: "cupX4", x: 150, y: 50 },
                                { name: "multiplierx4", type: "Sprite", image: "cupX4", anchor: { x: 0.5, y: 0.5 }, x: 200, y: 82 },
                            ]
                        },
                        {
                            name: "bronze3x", type: "Container", anchor: { x: 0.5, y: 0 }, x: 380, y: 100,
                            Elements: [
                                { name: "bronzeCup3x", type: "Sprite", image: "Bronze Cup" },
                                { name: "bronzeCup3xMulitplier", type: "Sprite", image: "cupX3", x: 150, y: 50 },
                                { name: "multiplierx3", type: "Sprite", image: "cupX3", anchor: { x: 0.5, y: 0.5 }, x: 200, y: 82 },
                            ]
                        },
                        {
                            name: "bronze2x", type: "Container", anchor: { x: 0.5, y: 0 }, x: 20, y: 470,
                            Elements: [
                                { name: "bronzeCup2x", type: "Sprite", image: "Bronze Cup", },
                                { name: "bronzeCup2xMulitplier", type: "Sprite", image: "cupX2", x: 140, y: 50 },
                                { name: "multiplierx2", type: "Sprite", image: "cupX2", anchor: { x: 0.5, y: 0.5 }, x: 197, y: 86 }
                            ]
                        },
                    ],
                },
                { name: "arrowSymb", type: "Sprite", image: "arrow", anchor: { x: 0.5, y: 0 }, x: 1280, y: 850 },
                { name: "pressAnyWhereText", type: "Text", style: "PopupMessage1Style", fontSize: 120, fontColor: ["0xd7d25a", "0xfff864", "0xf5c843", "0xdca033", "0xd0902b", "0xbb741c", "0xb06113"], stroke: ["0x648e2e", "0x000000"], strokeThickness: 6, anchor: { x: 0.5, y: 0 }, dropShadow: true, dropShadowColor: "0xf5d73c", dropShadowDistance: 2, dropShadowAlpha: 0.4, x: 1280, y: 850, /*px: 720, py: 1500, lx: 1280, ly: 850*/ },
                {
                    name: "totalWinAmountComp", type: "Comp", class: "WinAmountComp", anchor: { x: 0.5, y: 0 }, x: 886, y: 1200, scale: 0.8,
                    Elements: [
                        { name: "winbg", type: "Sprite", image: "winframe" },
                        { name: "winText", type: "Text", style: "winAmountStyle1", contentText: 100.00, fontSize: 230, anchor: { x: 0.5, y: 0.5 }, x: 500, y: 110 }
                    ],
                },
            ],
            layoutData: {
                "Desktop": { hAlign: "left", vAlign: "bottom", widthPerc: 1 },
                "Portrait": { hAlign: "center", vAlign: "middle", widthPerc: 1 },
                "Landscape": { hAlign: "center", vAlign: "bottom", heightPerc: 1 },
            }
        },
    ],
}
