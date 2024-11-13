"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

const AccountType = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kredittkonto",
    Pension: "Pensjonskonto"
}

class TAccount {
    #type;
    #balance;
    #WithdrawCount;
    constructor(aType){
        this.#type = aType;
        this.#balance =  0;
        this.#WithdrawCount = 0;
    }

    toString(){
        return this.#type;
    }

    setType(aType){
        let text = "Account type has been changed from " + this.#type;
        this.#type = aType;
        this.#WithdrawCount = 0;
        text += " to " + this.#type;
        printOut(text);
    }

    getBalance(){
        return this.#balance;
    }
    deposit(aAmount){
    this.#balance += aAmount;
    this.#WithdrawCount = 0;
    printOut("Deposit of " + aAmount + "kr, new balance is " + this.#balance + "kr");
    }

    withdraw(aAmount){
        let canWithdraw = true;
        let text = "";
        switch(this.#type){
            case AccountType.Saving:
                if(this.#WithdrawCount < 3) {
                    this.#WithdrawCount++;
                    canWithdraw = true;
            }else {
            canWithdraw = false;
            text = "Cannot withdraw more than 3 times from a " + this.#type + " account";
         }
        break;
            case AccountType.Pension:
            canWithdraw = false;
            text = "Cannot withdraw from a " + this.#type + "account.";
         break;
    
     }
        if (canWithdraw){
            this.#balance -= aAmount;
                printOut("Withdraw of " + aAmount + "kr, new balance is " + this.#balance + "kr");
            }else{
                printOut(text);
            }
        }
    }


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(AccountType.Normal + ", " + AccountType.Saving + ", " + AccountType.Credit + ", " + AccountType.Pension);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let myAccount = new TAccount(AccountType.Normal);
printOut("My account: " + myAccount.toString());
myAccount.setType(AccountType.Saving);
printOut("My account: " + myAccount.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(100);
myAccount.withdraw(25);
printOut("My Account balance is " + myAccount.getBalance() + "kr");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(25);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.setType(AccountType.Pension);
myAccount.withdraw(10);
myAccount.setType(AccountType.Saving);
myAccount.withdraw(10);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
