const promptSync = require('prompt-sync')();
let sub6:number;
let sub2:number;
let sub3:number;
let sub4:number;
let sub5:number;
function totmarks(){
    let result = (sub6 + sub2 + sub3 + sub4 + sub5)
    return result
}
//------------------------------- ADDITION FUNCTION ----------
function addmarks() {
    let result:number
    let perc:number
    result = (sub6 + sub2 + sub3 + sub4 + sub5)
    perc = (result * 100) / 500
    return perc
}let userName = promptSync("Enter your name.. ");
let rollno = promptSync ("Enter your Roll No.. ");
sub6 =  parseInt(promptSync("please Enter 'Concept of Programming' Marks    :  "));
sub2 =  parseInt(promptSync("please Enter 'Typescript Marks'                :  "));
sub3 =  parseInt(promptSync("please Enter 'Next.Js' Marks                   :  "));
sub4 =  parseInt(promptSync("please Enter 'Paython' Mark                    :  "));
sub5 =  parseInt(promptSync("please Enter ' C++ ' Marks                     :  "));
console.log("==================================");
console.log(" PIAIC Result Sheet - Batch-48");
console.log("==================================");
console.log("Student Name :", userName);
console.log("Roll No      :", rollno);
console.log("TOTAL MARKS  : 500 ")
console.log("                           ");
console.log ("SUBJECTs                      MARKs")
console.log("-------------------------------------")
console.log("concept of Programming     :   ",sub6)
console.log("typeScript                 :   ",sub2)
console.log("Next.Js                    :   ",sub3)
console.log("Paython                    :   ",sub4)
console.log("c++                        :   ",sub5)
if (sub6 > 100) {
    console.log("-------------------------------------------------------");
    console.log("|    Sorry ! You entered > 100 marks     |");
    console.log("---------------------------------------------------------");
}
if console.log ("\n Your TOTAL MARKs are      :  ", totmarks())
     console.log("\n Your Percentage is        :  %", addmarks())
if (addmarks() >= 90) {console.log("Your GRADE is 'A+' ")}
if (addmarks() >= 80) {console.log("Your GRADE is 'A' ")}
if (addmarks() >= 70) {console.log("Your GRADE is 'B' ")}
if (addmarks() >= 60) {console.log("Your GRADE is 'C' ")}
if (addmarks() >= 50) {console.log("Your GRADE is 'D' ")}       
else console.log(" You are FAILED")
console.log("                                   \n\n");
console.log("THANK YOU !  (This RESULT SHEET is developed by 'FASI UDDIN') ");
console.log("                               \n");