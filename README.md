 JavaScript Concepts Implemented

- JavaScript variables and data types
- User input using `prompt()`
- Number conversion using `Number()`
- Calculations
- Reusable functions
- Console output

 Variables

Variables are used to store the user's budget, expenses, and remaining balance.

For example:

```javascript
let budget = 10000;
let expenses = 0;
```

User Input

The `prompt()` function collects the budget and expense information from the user.

```javascript
let userBudget = prompt("Enter your monthly budget (KES):");
```

Calculations

The application calculates the remaining balance by subtracting expenses from the budget.

```javascript
budget - expenses
```

 Functions

A reusable function called `calculateRemainingBalance()` performs the budget calculation. This keeps the code organized and makes the calculation easy to reuse.

 Results

The calculated budget, expenses, and remaining balance are displayed in the browser console.
