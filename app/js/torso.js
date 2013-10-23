var Torso = function () {

    var torsoStartStyles = {
        top: "0px",
        left: "0px",
        width: "288px",
        height: "229px"
    };

    var torsoNineFingerStyles = {
        top: "0px",
        left: "-2px",
        width: "288px",
        height: "229px"
    };

    var torsoTwoHandsStyles = {
        top: "0px",
        left: "-6px",
        width: "288px",
        height: "229px"
    };

    var torsoOneHandStyles = {
        top: "100px",
        left: "44px",
        width: "157px",
        height: "139px",
        "-webkit-transform-origin": "20px 0px"
    };

    var torsoNoHandsStyles = {
        width: "85px",
        height: "124px",
        top: "123px",
        left: "44px"
    };

    var backgrounds = {
        10: {url: "images/figure10.png", styles: torsoStartStyles},
        9: {url: "images/figure9.png", styles: torsoNineFingerStyles},
        8: {url: "images/figure8.png", styles: torsoTwoHandsStyles},
        7: {url: "images/figure7.png", styles: torsoTwoHandsStyles},
        6: {url: "images/figure6.png", styles: torsoTwoHandsStyles},
        5: {url: "images/figure5.png", styles: torsoTwoHandsStyles},
        under5: {url: "images/figure4-3-2-1.png", styles: torsoOneHandStyles},
        none: {url: "images/figure0.png", styles: torsoNoHandsStyles}
    };

    var swapper = new BackgroundSwapper(
        document.getElementById("torso"),
        backgrounds,
        {},
        ["torso"]
    );

    this.setFingers = function (num) {
        if (num > 4) {
            swapper.swap(num);
        }
        else if (num > 0) {
            swapper.swap("under5");
        }
        else {
            swapper.swap("none");
        }
    };
};
