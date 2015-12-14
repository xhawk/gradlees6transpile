'use strict';

var app = document.getElementById('app');

function f(x) {
  var y = arguments.length <= 1 || arguments[1] === undefined ? 12 : arguments[1];

  // y is 12 if not passed (or passed as undefined)
  return x + y;
}

// commenttaa

app.textContent = f(6);
