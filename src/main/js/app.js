var app = document.getElementById('app');

function f(x, y=12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}

// commenttaa

app.textContent = f(6);