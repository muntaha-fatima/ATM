#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance = 10000 ; // dollar
let myPin = 1234 ;

  let pinanswer = await inquirer.prompt(
    {
               name:"q1",
               message: "enter your pin",
               type:"number",
    }
);
// 12234 === 1234 false
if (pinanswer.q1 === myPin){
console.log("correct pin code!!!");
}
    let operationans = await inquirer.prompt(
        [
            {
                name:"operation",
                message:" please select option",
                type:"list",
                choices:["withdraw","checkbalance","fast cash"],
             }
]
)
if (operationans.operation === "withdraw") {
    let amountans = await inquirer.prompt(
        [
            {
                name: "amount",
                message:" enter your amount",
                type:"number",

            }
        ]
        );
        // =, -=,+=
        myBalance -= amountans.amount
       console.log ("your remaining balance is: " + myBalance);

} else if (operationans.operation === "checkbalance"){
    console.log("your balance is: "+ myBalance)}


else if(operationans.operation === "fast cash"){
    let fastCashAmount = await inquirer.prompt({
   name: "fastCashAmount",
message: "Select fast cash amount",
type: "list",
choices: ["1000", "2000", "5000", "10000"] 
});

myBalance -= parseInt(fastCashAmount.fastCashAmount);
console.log("Your remaining balance is: " + myBalance);
}

else {
    console.log("your pincode is invalid!!!")
}
