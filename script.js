// SpendWise - Week 5 JavaScript Foundation

let budget = 10000;
let expenses = 0;

let userBudget = prompt("Enter your monthly budget (KES):");
let userExpenses = prompt("Enter your total expenses (KES):");

budget = Number(userBudget);
expenses = Number(userExpenses);

function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

let remainingBalance = calculateRemainingBalance(budget, expenses);

console.log("===== SpendWise Budget Summary =====");
console.log("Budget: KES " + budget);
console.log("Expenses: KES " + expenses);
console.log("Remaining Balance: KES " + remainingBalance);