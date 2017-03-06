var calculator = (function() {
  //cache DOM
  var calc = document.getElementById('calc'); //caching buttons div
  var display = document.getElementById('display'); //caching display div
  var newCalc = false;
  var array = []; //array to track values and operators

  //turns array into a string and evaluate it
  function evaluate(arr) {
    arr = arr.join('');
    return eval(arr).toPrecision(10)/1;
  };

  //pushes value and operator to array
  function operator(op) {
    var val = parseFloat(display.innerHTML);
    if(val) {
      array.push(val);
      array.push(op);
      display.innerHTML = '';
    } else if (typeof array[array.length -1] !== 'number' && array.length !== 0) { // change previous operator to current operator
      array.pop();
      array.push(op);
    }
  };

  // append values to display
  function keyNum (val) {
    if (newCalc === false) {
        newCalc = true;
        display.innerHTML = '';
        return display.innerHTML += val;
      } else {
        return display.innerHTML += val;
      };
  }

  //buttons object on calculator
  var buttons = {
    zero: function() {keyNum(0)},
    one: function() {keyNum(1)},
    two: function() {keyNum(2)},
    three: function() {keyNum(3)},
    four: function() {keyNum(4)},
    five: function() {keyNum(5)},
    six: function() {keyNum(6)},
    seven: function() {keyNum(7)},
    eight: function() {keyNum(8)},
    nine: function() {keyNum(9)},
    decimal: function (){
      if (display.innerHTML.indexOf('.') === -1 || newCalc === false) {
        keyNum('.');
      }
    },
    add: function(){
      operator('+');
    },
    sub: function(){
      operator('-');
    },
    mult: function(){
      operator('*');
    },
    divide: function(){
      operator('/');
    },
    equal: function(){
      if(array.length > 0) {
        // if there is an operator in last index, push new number to array and evalute
        if (parseFloat(display.innerHTML) && typeof array[array.length -1] !== 'number') {
          array.push(parseFloat(display.innerHTML));
          display.innerHTML = evaluate(array);
          array = [];
          newCalc = false;
        } else if (typeof array[array.length -1] !== 'number') {
          array.pop();
          display.innerHTML = evaluate(array);
          array = [];
          newCalc = false;
        } else {
          display.innerHTML = evaluate(array);
          array = [];
          newCalc = false;
        }
      }
    },
    backspace: function() {
      return display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1);
    },
    clear: function(){
      return display.innerHTML = '';
    },
    "all-clear": function(){
      array = [];
      newCalc = false;
      return display.innerHTML = '';
    },
    "plus-minus": function() {
      if(display.innerHTML.indexOf("-") !== 0) {
        return (display.innerHTML = "-" + display.innerHTML);
      } else {
        return display.innerHTML = display.innerHTML.slice(1);
      }
    }
  }

  //event handler
  calc.addEventListener('click', function(e) {
    e.preventDefault();
    buttons[e.target.id]();
  });
})();
