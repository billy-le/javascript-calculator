// Cache the DOM

function cacheDom(id) {
  return document.getElementById(id);
}

var calc = cacheDom('calculator')
var display = cacheDom('display');
var one = cacheDom('one');
var two = cacheDom('two');
var three = cacheDom('three');
var four = cacheDom('four');
var five = cacheDom('five');
var six = cacheDom('six');
var seven = cacheDom('seven');
var eight = cacheDom('eight');
var nine = cacheDom('nine');
var zero = cacheDom('zero');
var add = cacheDom('add');
var subtract = cacheDom('subtract');
var multiply = cacheDom('multiply');
var divide = cacheDom('divide');
var equal = cacheDom('equal');


// Event Listeners
function add(a, b) {
  return a + b;
}

calc.addEventListener('click', function(e) {
  var value = display.innerHTML;
  switch(e.target.id) {
    case 'clear':
      return display.innerHTML = '';
    case 'backspace':
      return display.innerHTML = value.slice(0, value.length - 1);
    case 'zero':
      value = value.concat(e.target.innerText);
      return display.innerHTML = value;
    case 'one':
      value = value.concat(e.target.innerText);
      return display.innerHTML = value;
    case 'two':
      value = value.concat(e.target.innerText);
      return display.innerHTML = value;
    case 'three':
      value = value.concat(e.target.innerText);
      return display.innerHTML = value;
    case 'four':
      value = value.concat(e.target.innerText);
      return display.innerHTML = value;
    case 'five':
      value = value.concat(e.target.innerText);
      return display.innerHTML = value;
    case 'six':
      value = value.concat(e.target.innerText);
      return display.innerHTML = value;
    case 'seven':
      value = value.concat(e.target.innerText);
      return display.innerHTML = value;
    case 'eight':
      value = value.concat(e.target.innerText);
      return display.innerHTML = value;
    case 'nine':
      value = value.concat(e.target.innerText);
      return display.innerHTML = value;
  }
})

calc.addEventListener('keydown', function(e) {
  var value = display.innerHTML;
  switch(e.keyCode) {
    case 8:
      return display.innerHTML = value.slice(0, value.length - 1);
    case 48:
      value = value.concat(String.fromCharCode(e.keyCode));
      return display.innerHTML = value;
    case 49:
      value = value.concat(String.fromCharCode(e.keyCode));
      return display.innerHTML = value;
    case 50:
      value = value.concat(String.fromCharCode(e.keyCode));
      return display.innerHTML = value;
    case 51:
      value = value.concat(String.fromCharCode(e.keyCode));
      return display.innerHTML = value;
    case 52:
      value = value.concat(String.fromCharCode(e.keyCode));
      return display.innerHTML = value;
    case 53:
      value = value.concat(String.fromCharCode(e.keyCode));
      return display.innerHTML = value;
    case 54:
      value = value.concat(String.fromCharCode(e.keyCode));
      return display.innerHTML = value;
    case 55:
      value = value.concat(String.fromCharCode(e.keyCode));
      return display.innerHTML = value;
    case 56:
      value = value.concat(String.fromCharCode(e.keyCode));
      return display.innerHTML = value;
    case 57:
      value = value.concat(String.fromCharCode(e.keyCode));
      return display.innerHTML = value;
    case 67:
      return display.innerHTML = '';
  }
});
