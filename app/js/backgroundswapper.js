// class to swap backgrounds on an element while removing flashes
// where the DOM is being modified
//
// the technique is to maintain a div for each alternative background
// and show the one for the currently "active" background
//
// anchor: DOM element to display before
// background: object mapping a key to a background URL and any styles
// specific to that background, e.g.
// {'a': {url: 'my url', styles: {height: '43px'}}, ...}
// styles: styles to apply to every div containing the background
// classes: array of class names to add to every div
var BackgroundSwapper = function (anchor, backgrounds, styles, classes) {
  styles = styles || {};
  classes = classes || [];

  this.current = null;
  this.elements = {};

  for (var backgroundKey in backgrounds) {
    var div = document.createElement('div');
    div.setAttribute('data-background-key', backgroundKey);
    div.style.display = 'none';
    div.style['background-image'] = 'url(' + backgrounds[backgroundKey].url + ')';

    // styles applied to all elements
    for (var key in styles) {
      div.style[key] = styles[key];
    }

    // override styles with any specified for this background
    var backgroundStyles = backgrounds[backgroundKey].styles || {};
    for (key in backgroundStyles) {
      div.style[key] = backgroundStyles[key];
    }

    // classes applied to all elements
    for (var i = 0; i < classes.length; i += 1) {
      div.classList.add(classes[i]);
    }

    // override classes with any specified for this background
    var backgroundClasses = backgrounds[backgroundKey].classes || {};
    for (var i = 0; i < backgroundClasses.length; i += 1) {
      div.classList.add(backgroundClasses[i]);
    }

    this.elements[backgroundKey] = div;

    anchor.parentNode.insertBefore(div, anchor);
  }
}

BackgroundSwapper.prototype.swap = function (backgroundKey) {
  if (this.current) {
    this.current.style.display = 'none';
  }

  if (this.elements[backgroundKey]) {
    this.elements[backgroundKey].style.display = 'block';
    this.current = this.elements[backgroundKey];
  }
};

BackgroundSwapper.prototype.getElement = function (backgroundKey) {
    return this.elements[backgroundKey];
};
