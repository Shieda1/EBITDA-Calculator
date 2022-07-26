// https://calculator.swiftutors.com/ebitda-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const EBITDARadio = document.getElementById('EBITDARadio');
const revenueRadio = document.getElementById('revenueRadio');
const expensesRadio = document.getElementById('expensesRadio');

let EBITDA;
let revenue = v1;
let expenses = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

EBITDARadio.addEventListener('click', function() {
  variable1.textContent = 'Revenue';
  variable2.textContent = 'Expenses';
  revenue = v1;
  expenses = v2;
});

revenueRadio.addEventListener('click', function() {
  variable1.textContent = 'EBITDA';
  variable2.textContent = 'Expenses';
  EBITDA = v1;
  expenses = v2;
});

expensesRadio.addEventListener('click', function() {
  variable1.textContent = 'EBITDA';
  variable2.textContent = 'Revenue';
  EBITDA = v1;
  revenue = v2;
});

btn.addEventListener('click', function() {
  
  if(EBITDARadio.checked)
    result.textContent = `EBITDA = ${computeEBITDA().toFixed(2)}`;

  else if(revenueRadio.checked)
    result.textContent = `Revenue = ${computeRevenue().toFixed(2)}`;

  else if(expensesRadio.checked)
    result.textContent = `Expenses = ${computeExpenses().toFixed(2)}`;
})

// calculation

function computeEBITDA() {
  return Number(revenue.value) - Number(expenses.value);
}

function computeRevenue() {
  return Number(EBITDA.value) + Number(expenses.value);
}

function computeExpenses() {
  return Number(revenue.value) - Number(EBITDA.value);
}