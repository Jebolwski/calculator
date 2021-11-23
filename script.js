btn.addEventListener("click", () => {
    var btn = document.getElementById("btn");
    var operator = document.querySelector("#operator").value;
    var result = document.getElementById("result");
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    switch (document.querySelector("#operator").value) {
        case "select":
            result.innerText = "Please Select an Operator.";
            break;
        case "+":
            result.innerText = "Result is : " + parseInt(parseInt(firstNumber) + parseInt(secondNumber));
            break;
        case "-":
            result.innerText = "Result is : " + parseInt(parseInt(firstNumber) - parseInt(secondNumber));
            break;
        case "*":
            result.innerText = "Result is : " + parseInt(parseInt(firstNumber) * parseInt(secondNumber));
            break;
        case "/":
            result.innerText = "Result is : " + parseFloat(parseInt(firstNumber) / parseInt(secondNumber));
            break;
        case "%":
            result.innerText = "Result is : " + parseInt(parseInt(firstNumber) % parseInt(secondNumber));
            break;
        default:
            result.innerText = "Error!";

    }

    if (document.querySelector("#operator").value == "/" && secondNumber == "0") {
        result.innerText = "Cant divide with 0."
    }

    if (result.innerText != "Error!" && result.innerText != "Please Select an Operator.") {
        result.style.color = "green";
    }

})