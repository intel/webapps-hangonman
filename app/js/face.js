var Face = function () {
    this.fingers = 10;

    var startFaceStyles = {
      top: "90px",
      left: "122px"
    };

    var nineFingersFaceStyles = {
        top: "110px",
        left: "108px"
    };

    var twoHandsFaceStyles = {
        top: "112px",
        left: "122px"
    };

    var oneHandFaceStyles = {
        top: "128px",
        left: "95px"
    };

    var backgrounds = {
        10: { url: "images/face-positive-1.png", styles: startFaceStyles },
        9: { url: "images/face-positive-2.png", styles: nineFingersFaceStyles },
        8: { url: "images/face-negative-1.png", styles: twoHandsFaceStyles },
        7: { url: "images/face-negative-2.png", styles: twoHandsFaceStyles },
        6: { url: "images/face-negative-3.png", styles: twoHandsFaceStyles },
        5: { url: "images/face-negative-4.png", styles: twoHandsFaceStyles },
        4: { url: "images/face-negative-5.png", styles: oneHandFaceStyles },
        3: { url: "images/face-negative-6.png", styles: oneHandFaceStyles },
        2: { url: "images/face-negative-7.png", styles: oneHandFaceStyles },
        1: { url: "images/face-negative-8.png", styles: oneHandFaceStyles },
        guessedRight: { url: "images/face-positive-1.png" }
    };

    var swapper = new BackgroundSwapper(
        document.getElementById("face"),

        backgrounds,

        {
            "-webkit-transform-origin": "50% 50%",
            "z-index": 2,
            "width": "42px",
            "height": "42px"
        },

        ["face"]
    );

    this.setFingers = function (num) {
        this.fingers = num;
        swapper.swap(num);
    };

    // apply the styles of the currently-selected background to the
    // guessedRight background, then show it
    this.guessedRight = function () {
        var guessedRightElt = swapper.getElement("guessedRight");

        var styles = backgrounds[this.fingers].styles;

        for (var k in styles) {
            guessedRightElt.style[k] = styles[k];
        }

        swapper.swap("guessedRight");
    };
};
