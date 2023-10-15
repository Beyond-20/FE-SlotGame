export const POST_MEGABOARD_SCREEN_CONFIG = {
    name: "postMegaBoardScreenComp", type: "Comp", class: "PostMegaBoardScreenComp", resizeChildren: true,
    Elements: [
        {
            name: "bg", type: "DualImage", image: "gamebg",
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
                { name: "winnerTitle", type: "Text", content: "winnerText", fontSize: 120, style: "PopupMessage3Style", anchor: { x: 0.5, y: 0.5 }, x: 1273, y: 50 },
                { name: "winnerStage", type: "Sprite", image: "win tribune", anchor: { x: 0.5, y: 0 }, x: 1385, y: 960 },
                { name: "winnerIcon", type: "Sprite", image: "character", anchor: { x: 0.5, y: 0 }, x: 1280, y: 200, scale: 1 },
                {
                    name: "winningBoxRotatingComp", type: "Comp", class: "WinningBoxRotatingComp", anchor: { x: 0.5, y: 0 }, x: 280, y: 100,
                    Elements: [
                        { name: "guideRect", type: "Graphics", color: 0xffff00, anchor: { x: 0.5, y: 0.5 }, width: 2000, height: 1100, alpha: 0 },
                        {
                            name: "diamond10x", type: "Container", anchor: { x: 0.5, y: 0 }, x: 790, y: 725,
                            Elements: [
                                { name: "diamondBox10x", type: "Sprite", image: "diamond_prize" },
                                { name: "diamondBox10xMulitplier", type: "Sprite", image: "cupX10", x: 130, y: 120 },
                                { name: "multiplierx10", type: "Sprite", image: "cupX10", anchor: { x: 0.5, y: 0.5 }, x: 263, y: 178 },
                            ]
                        },
                        {
                            name: "silver5x", type: "Container", anchor: { x: 0.5, y: 0 }, x: 1536, y: 470,
                            Elements: [
                                { name: "silverBox5x", type: "Sprite", image: "silver prize", },
                                { name: "silverBox5xMulitplier", type: "Sprite", image: "cupX5", x: 150, y: 120 },
                                { name: "multiplierx5", type: "Sprite", image: "cupX5", anchor: { x: 0.5, y: 0.5 }, x: 243, y: 178 },
                            ]
                        },
                        {
                            name: "silver4x", type: "Container", anchor: { x: 0.5, y: 0 }, x: 1220, y: 100,
                            Elements: [
                                { name: "silverBox4x", type: "Sprite", image: "silver prize", },
                                { name: "silverBox4xMulitplier", type: "Sprite", image: "cupX4", x: 150, y: 120 },
                                { name: "multiplierx4", type: "Sprite", image: "cupX4", anchor: { x: 0.5, y: 0.5 }, x: 240, y: 178 },
                            ]
                        },
                        {
                            name: "bronze3x", type: "Container", anchor: { x: 0.5, y: 0 }, x: 380, y: 100,
                            Elements: [
                                { name: "bronzeBox3x", type: "Sprite", image: "bronze_prize" },
                                { name: "bronzeBox3xMulitplier", type: "Sprite", image: "cupX3", x: 150, y: 120 },
                                { name: "multiplierx3", type: "Sprite", image: "cupX3", anchor: { x: 0.5, y: 0.5 }, x: 243, y: 178 },
                            ]
                        },
                        {
                            name: "bronze2x", type: "Container", anchor: { x: 0.5, y: 0 }, x: 20, y: 470,
                            Elements: [
                                { name: "bronzeBox2x", type: "Sprite", image: "bronze_prize", },
                                { name: "bronzeBox2xMulitplier", type: "Sprite", image: "cupX2", x: 140, y: 120 },
                                { name: "multiplierx2", type: "Sprite", image: "cupX2", anchor: { x: 0.5, y: 0.5 }, x: 237, y: 178 }
                            ]
                        },
                    ],
                },
                { name: "arrowSymb", type: "Sprite", image: "arrow", anchor: { x: 0.5, y: 0 }, x: 1280, y: 700 },
                { name: "pressAnyWhereText", type: "Text", style: "PopupMessage1Style", fontSize: 120, fontColor: ["0x58d3fe", "0x266cfc", "0x205cf7", "0x1237ea", "0x0b23e3", "0x0615de", "0x040fdc"], stroke: "0x60605f", strokeThickness: 20, anchor: { x: 0.5, y: 0 }, dropShadow: true, dropShadowColor: "0x2d2d2d", dropShadowDistance: 2, dropShadowAlpha: 0.4, x: 1280, y: 700, /*px: 720, py: 1500, lx: 1280, ly: 850*/ },
                {
                    name: "totalWinAmountComp", type: "Comp", class: "WinAmountComp", x: 750, y: 1200,
                    Elements: [
                        { name: "winText", type: "Text", style: "winAmountStyle1", contentText: 100.00, fontSize: 230, anchor: { x: 0.5, y: 0.5 }, x: 500, y: 110 }
                    ],
                },
            ],
            layoutData: {
                "Desktop": { hAlign: "center", vAlign: "bottom", widthPerc: 1, heightPerc: 1 },
                "Portrait": { hAlign: "center", vAlign: "middle", widthPerc: 1 },
                "Landscape": { hAlign: "center", vAlign: "bottom", heightPerc: 1 },
            }
        },
    ],
}
