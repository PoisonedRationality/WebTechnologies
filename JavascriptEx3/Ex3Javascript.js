function loop(){
    var num = parseInt(prompt("Enter a number", 10));

    var forLoop = calculateForLoop(num);
    var whileLoop = calculateWhileLoop(num);
    var doWhileLoop = calculateDoWhileLoop(num);

    alert("Sum using for: " + forLoop);
    alert("Sum using for: " + whileLoop);
    alert("Sum using do while: " + doWhileLoop);
}

function menu(){
    var choice = document.getElementById("choice").value;
    console.log(choice);
    if (choice == 1){
        loop();
    }
    else if (choice == 2){
        armstrong();
    }
    else if (choice ==3){
        triangle();
    }
    else if (choice == 4){
        password();
    }
    else if (choice == 5){

    }
}

function calculateForLoop(num){
    var sum = 0;
    for (i=1; i<=num; i++){
        sum += i;
    }
    return sum;
}

function calculateWhileLoop(num){
    var sum = 0;
    var counter = 1;
    while (counter<=num){
        sum += counter;
        counter++;
    }
    return sum;
}

function calculateDoWhileLoop(num){
    var sum = 0;
    var counter = 1;
    do {
        sum += counter;
        counter++;
    }
    while (counter<=num);
    return sum;
}


//armstrong function
function armstrong() {
    var num = prompt("give me a 3-digit number", "327");
    if (num.length != 3) {
        armstrong()
    }
  
    else if (num != null) {
  
        //hundreds digit
        var hun = num.charAt(0);
        var hun1 = Math.pow(num.charAt(0),3);
        alert("your digit is " +hun+ " and to the power of three it becomes " +hun1)
  
        //tens digit
        var ten = num.charAt(1);
        var ten1 = Math.pow(num.charAt(1),3);
        alert("your digit is " +ten+ " and to the power of three it becomes " +ten1)

 
        //ones digit
        var one = num.charAt(2);
        var one1 = Math.pow(num.charAt(2),3);
        alert("your digit is " +one+ " and to the power of three it becomes " +one1);
  
        var sum = hun1 + ten1 + one1;
  
        let yes_or_no;
        if (sum == num) {
            yes_or_no = ""+num+ " is an Armstrong number because the sum of " +hun1+ " + " +ten1+ " + " +one1+ " = " +num;
        } else {
            yes_or_no = ""+num+ " is not an Armstrong number because the sum of " +hun1+ " + " +ten1+ " + " +one1+ " does not equal " +num;
        }
        alert(yes_or_no);
  
    }
}

//original pattern
/*function triangle() {
    var line, triangle;
    line = triangle = "";

    for (var row = 0; row <= 5; row++) {
        line = "";
        for (var asterisk = 0; asterisk < row; asterisk++) {
            line += "*";
        }
        triangle += line + "\n";
    }
    alert("Pattern: \n" + triangle);
}*/

//modified pattern
function triangle() {
    //asking user how many levels they would like
    var user_rows = prompt("how many levels would you like", "5");
    var triangle = "";

    //the parseInt helps to determine the amount of times the loop is repeated by converting the user's response to an integer
    for (var row = 0; row <= parseInt(user_rows); row++) {
        let line = "";
        for (var asterisk = 0; asterisk < row; asterisk++) {
            line += "*";
        }
        triangle += line + "\n";
    }

    alert("Pattern:\n" + triangle);

}


function password() {
    //prompt box for password
    var firstName = prompt("give me your first name", "John");
    var lastName = prompt("give me your last name", "Doe");

    if (firstName, lastName != null) {

        //first name
        var firstName_ = firstName.charAt(0)
        var firstName1 = firstName.toUpperCase();

        //last name
        var lastName_ = lastName.slice(-2)
        var lastName2 = lastName.toLowerCase();

        alert("Your password is: " + firstName1 + "10" + lastName2);
    }
}

function quit() {
    alert("Goodbye.");
}