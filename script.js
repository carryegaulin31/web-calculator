function sum() {
	var x = Number(document.getElementById("number1").value);
    var y = Number(document.getElementById("number2").value);
    document.getElementById("answer").value = x + y
    alert(x + y)
}
function subtract() {
	var x = Number(document.getElementById("number1").value);
    var y = Number(document.getElementById("number2").value);
    document.getElementById("answer").value = x - y
    alert(x - y)
}
function multiply() {
	var x = Number(document.getElementById("number1").value);
    var y = Number(document.getElementById("number2").value);
    document.getElementById("answer").value = x * y
    alert(x * y)
}
function divide() {
	var x = Number(document.getElementById("number1").value);
    var y = Number(document.getElementById("number2").value);
    document.getElementById("answer").value = x / y
    alert(x / y)
}
