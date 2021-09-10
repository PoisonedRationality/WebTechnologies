
function calculateExpression(){
    let expression = prompt("Please enter an expression to calculate.", "0");
    if (expression != null && expression != ""){
    let num = eval(expression);
    num = num.toFixed(2);

    document.getElementById('expression').innerHTML = "Here is the result of your expression:<br>" + expression + " = " + num;
    }
    else {
        document.getElementById('expression').innerHTML = "You buffoon, you did not enter an expression.<br>Please refresh the page and enter an expression.";
    }
}


