/*
Scope

Global Variables - the variable can be used throughout the entire document/script

Local Variables - the variables can only be used in the serction it was defined.


*/
$(document).ready(function(){
    getInfo();
    showInfo();
})

var userInput;


function getInfo(){
    userInput="Hi";
    var userInput2 = "Hi Again";
}

function showInfo(){
    alert(userInput);
    alert(userInput2);
}
