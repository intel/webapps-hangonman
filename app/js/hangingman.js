var HangingMan = function (attachPoint, soundBoard) {
    this.elt = document.createElement("div");
    this.elt.setAttribute("id", "hangman");

    // left/right are from the point of view of the man
    var html = '' +
               '<div data-part="torso">' +
               '  <div data-part="face"></div>' +
               '  <div data-part="arm" data-side="left">'
               '    <div data-part="hand" data-fingers="5"></div>' +
               '  </div>' +
               '  <div data-part="arm" data-side="right">' +
               '    <div data-part="hand" data-fingers="5"></div>' +
               '  </div>' +
               '  <div data-part="foot" data-shoe="on" data-side="left"></div>' +
               '  <div data-part="foot" data-shoe="on" data-side="right"></div>' +
               '</div>';

    this.elt.innerHTML = html;

    this.numberOfFingers = 10;
    this.fingersHoldingOn = 0;

    this.soundBoard = soundBoard;

    // initialise and draw DOM elements
    this.grabWire();
    this.show();

    attachPoint.appendChild(this.elt);
};

HangingMan.prototype.grabWire = function () {
    this.fingersHoldingOn = this.numberOfFingers;

    // TODO position on wire
};

HangingMan.prototype.releaseFinger = function () {
    this.fingersHoldingOn -= 1;

    if (this.fingersHoldingOn === 0) {
      // no hands, fall
      this.fall();
    }
    else if (this.fingersHoldingOn < 6) {
      // TODO one hand, change torso
    }
};

HangingMan.prototype.fall = function () {

};

HangingMan.prototype.guessedRightFace = function () {

};

HangingMan.prototype.guessedWrongFace = function () {

};

HangingMan.prototype.sayWhoa = function () {
    this.soundBoard.play("woah");
};

HangingMan.prototype.hide = function () {
    this.elt.style.display = "none";
};

HangingMan.prototype.show = function () {
    this.elt.style.display = "block";
};
