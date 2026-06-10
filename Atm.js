let readline = require("readline/promises");
let { stdin:input, stdout:output } = require("process");
let rl = readline.createInterface({input,output});

async function main() {
    console.log("Insert your Card");
    let pin = await rl.question("Enter you pin: ");
   

    if(pin == 2007){
        console.log("Access Granted Success fully")
        console.log("your avilable balance is 2000")
    }
    else{
        console.log("Access Denied")
        return;
    }

    let amout = await rl.question("Enter the AMout you want to Withdraw: ");
   rl.close()

    if(amout > 2000){
        console.log("You Have no Much balance")
        return 
    }
    else{
        console.log("Withdrawval success full")
    }
    
}
main();