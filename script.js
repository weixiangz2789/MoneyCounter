let quarters = 0;
let dimes = 0;
let nickels = 0;
let pennys = 0;

const quarterAmount = document.querySelector("Q");
const dimeAmount = document.querySelector("D");
const nickelAmount = document.querySelector("N");
const pennyAmount = document.querySelector("P");
const totalAmount = document.querySelector("total");

const display = () => {
    Q.textContent = `Quarters: ${quarters}`;
    D.textContent = `Dimes: ${dimes}`;
    N.textContent = `Nickels: ${nickels}`;
    P.textContent = `Pennys: ${pennys}`;
    const sum = (quarters * .25) + (dimes * .1) + (nickels * .05) + (pennys * .01);
    total.textContent = `$${sum}`
}

const addCoins = (coin) => {
    if (coin == "quarter"){
        quarters ++;
    }
    if (coin == "dime"){
        dimes ++;
    }
    if (coin == "nickel"){
        nickels ++;
    }
    if (coin == "penny"){
        pennys ++;
    }
    display();
}
const minusCoins = (coin) => {
    if (coin == "quarter" && quarters >= 1){
        quarters ++;
    }
    if (coin == "dime" && dimes >= 1){
        dimes ++;
    }
    if (coin == "nickel" && nickels >= 1){
        nickels ++;
    }
    if (coin == "penny" && pennys >= 1){
        pennys ++;
    }
    display();
}


