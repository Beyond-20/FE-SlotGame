export const PARTICLE_CONFIG = {
    name : "PARTICLE_CONFIG",
    Elements : {
        "BigWinCoinShower": {
            "alpha": {
                "start": 1,
                "end": 1
            },
            "scale": {
                "start": 0.5,
                "end": 0.4,
                "minimumScaleMultiplier": 0.5
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 400,
                "end": 900,
                "minimumSpeedMultiplier": 2
            },
            "acceleration": {
                "x": 0,
                "y": 600
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 260,
                "max": 290
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 100,
                "max": 500
            },
            "lifetime": {
                "min": 2,
                "max": 3
            },
            "blendMode": "normal",
            "frequency": 0.03,
            "emitterLifetime": 6,
            "maxParticles": 5000,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "point"
        }
    },
}
