let num1 : number
let num2 : number
let num3 : number
//------------------------------- ADDITION FUNCTION ----------
function add1(){
let result : number
result = num2 + num3
return result;
}
//------------------------------- SUBTRACTION FUNCTION ----------
function sub1(){
    let result : number
    result = num2 - num3
    return result;
    }
//------------------------------- MULTIPLICATION FUNCTION ----------
function mul1(){
    let result : number
    result = num2 * num3
    return result;
    }
//------------------------------- DIVISION FUNCTION ----------
function div1(){
    let result : number
    result = num2 / num3
    return result;
    }
const promptsync = require('prompt-sync')();
console.log(" Press '1' for ADDITION \n Press '2' for Subtraction\n Press '3' for Multiplication\n Press '4' for Division\n Waiting for your selection___:")
num1 = parseInt (promptsync ());
if (num1 > 4) {console.log("-------------------------------------------------------")
    console.log ("|    Sorry ! You entered wrong selection number     |")
            console.log ("---------------------------------------------------------")}
else {
num2 = parseInt (promptsync("please Enter your FIRST value: "));
num3 = parseInt (promptsync("please Enter your SECOND value: "));
if (num1 === 1) {
    console.log (add1());}
    if (num1 === 2) 
       console.log (sub1());
        if (num1 === 3) 
            console.log (mul1());
            if (num1 === 4)
                console.log (div1());  
                else
                 console.log("THANK YOU !  (This Calcultor is developed by 'FASI UDDIN') ")}