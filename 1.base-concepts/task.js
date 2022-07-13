"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  if (a === 0) {
    arr[0] = -c / b;
    return arr;
  }

  let d = Math.pow(b, 2) - 4 * a * c;
  
  if (d > 0) {
    arr[0] = parseInt((( -b + Math.sqrt(d)) / (2 * a)).toFixed(0));
    arr[1] = parseInt((( -b - Math.sqrt(d) / (2 * a)).toFixed(0));
  }
  else if (d === 0) {
    arr[0] = -b / (2 * a);
  }
  
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount = 0;
  let loanRate = parseInt(percent) / 100;
  let firstPayment = parseInt(contribution);
  let loanAmount = parseInt(amount);
  
  if (Number.isNaN(loanRate)) {
    return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  else if (Number.isNaN(firstPayment)) {
    return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } 
  else if (Number.isNaN(loanAmount)) {
    return totalAmount = `Параметр "Сумма кредита" содержит неправильное значение "${amount}"`; 
  }

  
  // код для задачи №2 писать здесь

  return totalAmount;
}
