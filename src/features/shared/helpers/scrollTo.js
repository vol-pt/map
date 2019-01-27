export function scrollToY(scrollTargetY = 0, speed = 1500, easing = 'easeOutSine') {
    let scrollY = window.scrollY,
        currentTime = 0;
    const time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    let easingEquations = {
        easeOutSine: function(pos) {
            return Math.sin(pos * (Math.PI / 2));
        },
        easeInOutSine: function(pos) {
            return -0.5 * (Math.cos(Math.PI * pos) - 1);
        },
        easeInOutQuint: function(pos) {
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 5);
            }
            return 0.5 * (Math.pow(pos - 2, 5) + 2);
        },
    };

    function tick() {
        currentTime += 1 / 60;

        let p = currentTime / time;
        let t = easingEquations[easing](p);

        if (p < 1) {
            requestAnimationFrame(tick);

            window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
        } else {
            window.scrollTo(0, scrollTargetY);
        }
    }
    tick();
}
