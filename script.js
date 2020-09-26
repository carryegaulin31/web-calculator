function calculate() {
  var x = Number(document.getElementById("number1").value);
  var y = Number(document.getElementById("number2").value);

  var operator = document.getElementById("operation").value;
  var answer = document.getElementById("answer")
  answer.value = getAnswer(operator, x, y)
  //instead of previous 2 lines could do this document.getElementById("answer").value = getAnswer(operator, x, y)
}

function getAnswer(operator, x, y) {
  if (operator === "+") {
    return x + y
  } else if (operator === "-") {
    return x - y
  } else if (operator === "*") {
    return x * y
  } else if (operator === "/") {
    return x / y
  }
