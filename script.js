let quarters = 0;
let dimes = 0;
let nickels = 0;
let pennys = 0;

const quarterAmount = document.querySelector("Q");
const dimeAmount = document.querySelector("D");
const nickelAmount = document.querySelector("N");
const pennyAmount = document.querySelector("P");
const totalAmount = document.querySelector("total");

const quarterTotal = document.querySelector("QTotal");
const dimeTotal = document.querySelector("DTotal");
const nickelTotal = document.querySelector("NTotal");
const pennyTotal = document.querySelector("PTotal");

const display = () => {
  Q.textContent = `Quarters: ${quarters}`;
  D.textContent = `Dimes: ${dimes}`;
  N.textContent = `Nickels: ${nickels}`;
  P.textContent = `Pennys: ${pennys}`;
  QTotal.textContent = `Quarter Balance: $${
    Math.round(quarters * 0.25 * 100) / 100
  }`;
  DTotal.textContent = `Dime Balance: $${Math.round(dimes * 0.1 * 100) / 100}`;
  NTotal.textContent = `Nickel Balance: $${
    Math.round(nickels * 0.05 * 100) / 100
  }`;
  PTotal.textContent = `Penny Balance: $${
    Math.round(pennys * 0.01 * 100) / 100
  }`;
  const sum = quarters * 0.25 + dimes * 0.1 + nickels * 0.05 + pennys * 0.01;
  total.textContent = `Total Balance: $${Math.round(sum * 100) / 100}`;
};

const addCoins = (coin) => {
  if (coin == "quarter") {
    quarters++;
  }
  if (coin == "dime") {
    dimes++;
  }
  if (coin == "nickel") {
    nickels++;
  }
  if (coin == "penny") {
    pennys++;
  }
  display();
};
const minusCoins = (coin) => {
  if (coin == "quarter" && quarters >= 1) {
    quarters--;
  }
  if (coin == "dime" && dimes >= 1) {
    dimes--;
  }
  if (coin == "nickel" && nickels >= 1) {
    nickels--;
  }
  if (coin == "penny" && pennys >= 1) {
    pennys--;
  }
  display();
};
