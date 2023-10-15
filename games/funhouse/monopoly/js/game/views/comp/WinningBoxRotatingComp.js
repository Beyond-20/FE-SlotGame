import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib";
import { slotModel } from "../../../../../../../../slot_core/corelib/models/SlotModel";
import { LibContainer } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibContainer";
import { gsap } from "gsap";

export class WinningBoxRotatingComp extends LibContainer {
    constructor(config) {
        super(config);
        this.diamondBox10x = this.elementsList["diamond10x"];
        this.silverBox5x = this.elementsList["silver5x"];
        this.silverBox4x = this.elementsList["silver4x"];
        this.bronzeBox3x = this.elementsList["bronze3x"];
        this.bronzeBox2x = this.elementsList["bronze2x"];
        this.boxArray = [];
        this.boxArray.push({ key: 2, value: this.bronzeBox2x }, { key: 3, value: this.bronzeBox3x }, { key: 4, value: this.silverBox4x }, { key: 5, value: this.silverBox5x }, { key: 10, value: this.diamondBox10x });
        this.multiplierx10 = this.diamondBox10x.elementsList["multiplierx10"];
        this.multiplierx10.visible = false;
        this.multiplierx5 = this.silverBox5x.elementsList["multiplierx5"];
        this.multiplierx5.visible = false;
        this.multiplierx4 = this.silverBox4x.elementsList["multiplierx4"];
        this.multiplierx4.visible = false;
        this.multiplierx3 = this.bronzeBox3x.elementsList["multiplierx3"];
        this.multiplierx3.visible = false;
        this.multiplierx2 = this.bronzeBox2x.elementsList["multiplierx2"];
        this.multiplierx2.visible = false;

        this.boxPositions = [];
        var len = this.boxArray.length;
        for (var k = 0; k < len; k++) {
            if (k == 1) {
                this.boxPositions.push({ x: this.boxArray[k].value.x, y: this.boxArray[k].value.y, scale: this.boxArray[k].value.scale.x });
            } else {
                this.boxPositions.push({ x: this.boxArray[k].value.x, y: this.boxArray[k].value.y, scale: this.boxArray[k].value.scale.x });
            }
        }
        this.isResponseRecd = false;

    }

    reset() {
        this.isResponseRecd = false;
        this.multiplierx10.visible = false;
        this.multiplierx5.visible = false;
        this.multiplierx4.visible = false;
        this.multiplierx3.visible = false;
        this.multiplierx2.visible = false;
    }

    trophyRotate() {
        this.reset();
        var totaltime = 0;
        var duration = 2;
        var next;
        this.timelineArray = [];
        let len = this.boxArray.length;
        var total = this.boxPositions.length;
        for (var k = 0; k < len; k++) {
            if (k == total - 1) {
                next = 0;
            } else {
                next = k + 1;
            }
            var tmax = new gsap.timeline({ repeat: -1 });
            for (var p = 0; p < 5; p++) {
                tmax.add(gsap.to(this.boxArray[k].value, duration, { scaleX: this.boxPositions[next].scale, scaleY: this.boxPositions[next].scale, x: this.boxPositions[next].x, y: this.boxPositions[next].y, ease: Linear.easeNone, onComplete: this.onBoxReachedPos.bind(this, k, next) }));
                totaltime += duration;
                if (next == total - 1) {
                    next = 0;
                } else {
                    next++;
                }
            }
            this.timelineArray.push(tmax);
        }
    }

    increaseSpeed() {
        CoreLib.EventHandler.dispatchEvent("PLAY_CUPS_ROTATING_SOUND");
        let len = this.boxArray.length;
        for (let k = 0; k < len; k++) {
            this.timelineArray[k].duration(1.8);
        }
        setTimeout(() => {
            this.isResponseRecd = true;
        }, 5000);
    }

    onBoxReachedPos(index, pos) {
        let arr = slotModel.featureResult.featureResults;
        let finalMulVal = arr[1].bigMoneyMultiplier;
        if (this.isResponseRecd) {
            if (pos == 4) {
                if (this.boxArray[index].key == finalMulVal) {
                    this.stopAllRotation();
                }
            }
        }
    }

    stopAllRotation() {
        CoreLib.EventHandler.dispatchEvent("STOP_CUPS_ROTATING_SOUND");
        let len = this.boxArray.length;
        for (let k = 0; k < len; k++) {
            this.timelineArray[k].pause();
        }
    }

    showWinningCup() {
        let arr = slotModel.featureResult.featureResults;
        let val = arr[1].bigMoneyMultiplier;
        let duration = 0.7;
        CoreLib.EventHandler.dispatchEvent("PLAY_CUP_MULTIPLIER_WIN_SOUND");
        if (val == 10) {
            this.multiplierx10.visible = true;
            this.multiplierx10.scale.set(1);
            CoreLib.AnimationManager.animateTween(this.multiplierx10, duration, { delay: duration / 2, scaleX: 8, scaleY: 8, onComplete: this.hideMultiplierValue.bind(this, val) });
        } else if (val == 5) {
            this.multiplierx5.visible = true;
            this.multiplierx5.scale.set(1);
            CoreLib.AnimationManager.animateTween(this.multiplierx5, duration, { delay: duration / 2, scaleX: 8, scaleY: 8, onComplete: this.hideMultiplierValue.bind(this, val) });
        } else if (val == 4) {
            this.multiplierx4.visible = true;
            this.multiplierx4.scale.set(1);
            CoreLib.AnimationManager.animateTween(this.multiplierx4, duration, { delay: duration / 2, scaleX: 8, scaleY: 8, onComplete: this.hideMultiplierValue.bind(this, val) });
        } else if (val == 3) {
            this.multiplierx3.visible = true;
            this.multiplierx3.scale.set(1);
            CoreLib.AnimationManager.animateTween(this.multiplierx3, duration, { delay: duration / 2, scaleX: 8, scaleY: 8, onComplete: this.hideMultiplierValue.bind(this, val) });
        } else if (val == 2) {
            this.multiplierx2.visible = true;
            this.multiplierx2.scale.set(1);
            CoreLib.AnimationManager.animateTween(this.multiplierx2, duration, { delay: duration / 2, scaleX: 8, scaleY: 8, onComplete: this.hideMultiplierValue.bind(this, val) });
        }
    }

    hideMultiplierValue(val) {
        if (val == 10) {
            this.multiplierx10.visible = false;
        } else if (val == 5) {
            this.multiplierx5.visible = false;
        } else if (val == 4) {
            this.multiplierx4.visible = false;
        } else if (val == 3) {
            this.multiplierx3.visible = false;
        } else if (val == 2) {
            this.multiplierx2.visible = false;
        }
        this.updateWin();
    }

    updateWin() {
        CoreLib.EventHandler.dispatchEvent("UPDATE_WIN_AMOUNT");
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.PLAY_ALL_WIN_SOUND);
    }
}
