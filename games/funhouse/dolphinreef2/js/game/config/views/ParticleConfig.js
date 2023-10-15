export const PARTICLE_CONFIG = {
    name : "PARTICLE_CONFIG",
    Elements : {
        "BigWinCoinShower": {
            "alpha": {
                "start": 1,
                "end": 1
            },
            "scale": {
                "start": 0.8,
                "end": 0.8,
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
                "max": 280
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 100,
                "max": 400
            },
            "lifetime": {
                "min": 3,
                "max": 3
            },
            "blendMode": "normal",
            "frequency": 0.03,
            "emitterLifetime": 10,
            "maxParticles": 5000,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "point"
        },
        "confettiFall": {
            "alpha": {
                "start": 0.98,
                "end": 0.76
            },
            "scale": {
                "start": 1.25,
                "end": 0.8,
                "minimumScaleMultiplier": 1.02
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 1500,
                "end": 2000,
                "minimumSpeedMultiplier": 20
            },
            "acceleration": {
                "x": 0,
                "y": 400
            },
            "maxSpeed": 200,
            "startRotation": {
                "min": 0,
                "max": 400
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 100,
                "max": 500
            },
            "lifetime": {
                "min": 3,
                "max": 6
            },
            "blendMode": "add",
            "ease": [
                {
                    "s": 0,
                    "cp": 0.379,
                    "e": 0.548
                },
                {
                    "s": 0.548,
                    "cp": 0.717,
                    "e": 0.676
                },
                {
                    "s": 0.676,
                    "cp": 0.635,
                    "e": 1
                }
            ],
            "frequency": 0.03,
            "emitterLifetime": -1,
            "maxParticles": 500,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": true,
            "spawnType": "rect",
            "spawnRect": {
                "x": -1000,
                "y": -100,
                "w": 2000,
                "h": 20
            }
        }
    },
}
