export const GAME_PRELOADER_CONFIG = {
    name: "GAME_PRELOADER_CONFIG",
    BGColor: 0xff0000,
    Elements: [
        {
            name: "preloaderComp", type: "Comp", class: "PreloaderComp",
            Elements: [
                { name: "bg", type: "Graphics", width: 100, height: 100, color: 0x242d2c },
                { name: "percText", type: "Text", contentText: "Please wait", style: "commonFontStyle", anchor: { x: 0.5, y: 0 }, fontSize: 16 },
                { name: "brandlogo", type: "Sprite", image: "brandlogo" },
                { name: "brandlogoTop", type: "Sprite", image: "brandlogov2" },
                { name: "loadermask", type: "Graphics", width: 480, height: 320, color: 0xff0000, y: -40 },
            ],
        }
    ],
}
